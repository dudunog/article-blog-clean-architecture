import { ArticleDetailsModel } from "@/domain/models"

export interface LoadArticle {
  load: (id: string) => Promise<LoadArticle.Model | null | undefined>
}

export namespace LoadArticle {
  export type Model = ArticleDetailsModel
}
