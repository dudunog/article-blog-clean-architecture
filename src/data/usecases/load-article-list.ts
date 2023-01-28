import { LoadArticleList, StoreArticleList } from "@/domain/usecases"
import { FetchArticleList } from "@/domain/usecases/fetch-article-list"
import { ArticleFiltersState } from "@/data/protocols/state-manager"
import { makeApiQuery } from "@/main/factories/http"

export class RemoteLoadArticleList implements LoadArticleList {
  constructor (
    private readonly fetchArticleList: FetchArticleList,
    private readonly storeArticleList: StoreArticleList
  ) {}

  async loadAll (filters: ArticleFiltersState): Promise<LoadArticleList.Model[] | undefined> {
    try {
      await this.storeArticleList.startLoading()
      const articles = await this.fetchArticleList.fetchAll(makeApiQuery(filters))
      await this.storeArticleList.store(articles)

      return articles?.data
    } catch (error) {
      await this.storeArticleList.error(error)
    }
  }
}
