import { ArticleModel } from "@/domain/models"

export interface LoadArticle {
  load: (id: string) => Promise<LoadArticle.Model>
}

export namespace LoadArticle {
  export type Model = ArticleModel
}
