import { StoreArticle } from "@/domain/usecases"
import { AppDispatch } from "@/main/providers/redux-store-provider"
import { ArticleSlicesType } from "@/infra/state-manager/slices"

export class RemoteStoreArticle implements StoreArticle {
  constructor (
    private readonly dispatch: AppDispatch,
    private readonly articleSlices: ArticleSlicesType
  ) {}

  async startLoading(): Promise<void> {
    this.dispatch(this.articleSlices.startLoading())
  }

  async store (payload: any): Promise<void> {
    this.dispatch(this.articleSlices.getArticleSuccess(payload))
  }

  async error (error): Promise<void> {
    this.dispatch(this.articleSlices.hasError(error))
  }
}
