import { ArticleModel } from "@/domain/models"

export interface StoreArticle {
  startLoading: () => Promise<void>
  store: (payload: any) => Promise<void>
  error: (error: any) => Promise<void>
}

export namespace StoreArticle {
  export type Model = ArticleModel
}
