import {
  LoadArticleList,
  LoadArticle,
  FetchArticle,
  StoreArticle
} from "@/domain/usecases"

export class RemoteLoadArticle implements LoadArticle {
  constructor (
    private readonly fetchArticle: FetchArticle,
    private readonly storeArticleList: StoreArticle
  ) {}

  async load (articleId: number): Promise<LoadArticleList.Model> {
    try {
      await this.storeArticleList.startLoading()
      const article = await this.fetchArticle.fetch(`/${articleId}`)
      await this.storeArticleList.store(article)

      return article
    } catch (error) {
      await this.storeArticleList.error(error)
    }
  }
}
