import { LoadArticleList, StoreArticleList } from '@/domain/usecases'
import { FetchArticleList } from '@/domain/usecases/fetch-article-list'

export class RemoteLoadArticleList implements LoadArticleList {
  constructor (
    private readonly fetchArticleList: FetchArticleList,
    private readonly storeArticleList: StoreArticleList
  ) {}

  async loadAll (): Promise<LoadArticleList.Model[]> {
    try {
      await this.storeArticleList.startLoading()
      const articles = await this.fetchArticleList.fetchAll()
      await this.storeArticleList.store(articles.data)

      return articles.data
    } catch (error) {
      await this.storeArticleList.error(error)
    }
  }
}
