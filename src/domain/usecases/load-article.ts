import { ArticleModel } from "@/domain/models"

export interface LoadArticle {
  load: (articleId: number) => Promise<LoadArticle.Model>
}

export namespace LoadArticle {
  export type Model = ArticleModel
}
