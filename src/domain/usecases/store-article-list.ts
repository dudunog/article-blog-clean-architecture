import { ArticleModel } from "@/domain/models"

export interface StoreArticleList {
  startLoading: () => Promise<void>
  store: (payload: any) => Promise<void>
  error: (error: any) => Promise<void>
}

export namespace StoreArticleList {
  export type Model = ArticleModel
}
