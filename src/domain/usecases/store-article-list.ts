import { ArticleFiltersState } from "@/data/protocols/state-manager"
import { ArticleModel } from "@/domain/models"

export interface StoreArticleList {
  startLoading: () => Promise<void>
  store: (payload: any) => Promise<void>
  getFilters: () => Promise<ArticleFiltersState>
  filterArticles: (payload: any) => Promise<void>
  error: (error: any) => Promise<void>
}

export namespace StoreArticleList {
  export type Model = ArticleModel
}
