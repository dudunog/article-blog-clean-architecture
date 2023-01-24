import { ArticleModel } from "@/domain/models"

export interface FetchArticle {
  fetch: (query: string) => Promise<FetchArticle.Model>
}

export namespace FetchArticle {
  export type Model = ArticleModel
}
