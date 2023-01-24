import {
  LoadArticleList,
  LoadArticle,
  FetchArticle,
  StoreArticle
} from "@/domain/usecases"

export class RemoteLoadArticle implements LoadArticle {
  constructor (
    private readonly fetchArticle: FetchArticle,
    private readonly storeArticle: StoreArticle
  ) {}

  async load (id: string): Promise<LoadArticleList.Model> {
    try {
      await this.storeArticle.startLoading()
      const article = await this.fetchArticle.fetch(`/${id}`)
      await this.storeArticle.store(article)

      return article
    } catch (error) {
      await this.storeArticle.error(error)
    }
  }
}
