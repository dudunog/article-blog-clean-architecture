import { StoreArticleList } from "@/domain/usecases"
import { AppDispatch } from "@/main/providers/redux-store-provider"
import { ArticleSlicesType } from "@/infra/state-manager/slices"
import { ArticleFiltersState, ArticleState } from "@/data/protocols/state-manager"

export class RemoteStoreArticleList implements StoreArticleList {
  constructor (
    private readonly dispatch: AppDispatch,
    private readonly articleSlices: ArticleSlicesType,
    private readonly articleState: ArticleState
  ) {}

  async startLoading (): Promise<void> {
    this.dispatch(this.articleSlices.startLoading())
  }

  async store (payload: any): Promise<void> {
    this.dispatch(this.articleSlices.getArticlesSuccess(payload))
  }

  async getFilters (): Promise<ArticleFiltersState> {
    return this.articleState.filters
  }

  async filterArticles (payload: any): Promise<void> {
    this.dispatch(this.articleSlices.filterArticles(payload))
  }

  async error (error): Promise<void> {
    this.dispatch(this.articleSlices.hasError(error))
  }
}
