import { StoreArticleList } from '@/domain/usecases'
import { AppDispatch } from '@/main/providers/redux-store-provider'
import { ArticleSlicesType } from '@/infra/state-manager/slices'

export class RemoteStoreArticleList implements StoreArticleList {
  constructor (
    private readonly dispatch: AppDispatch,
    private readonly articleSlices: ArticleSlicesType
  ) {}

  async startLoading(): Promise<void> {
    this.dispatch(this.articleSlices.startLoading())
  }

  async store (payload: any): Promise<void> {
    this.dispatch(this.articleSlices.getArticlesSuccess(payload))
  }

  async error (error): Promise<void> {
    this.dispatch(this.articleSlices.hasError(error))
  }
}
