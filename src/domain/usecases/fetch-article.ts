import { ArticleDetailsModel } from "@/domain/models"

export interface FetchArticle {
  fetch: (id: string) => Promise<FetchArticle.Model | null | undefined>
}

export namespace FetchArticle {
  export type Model = ArticleDetailsModel
}
