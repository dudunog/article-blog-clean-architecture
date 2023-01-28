import { ArticleModel, ArticleListHttpResponse } from "@/domain/models"

export interface FetchArticleList {
  fetchAll: (query: string) => Promise<ArticleListHttpResponse<FetchArticleList.Model[]> | null>
}

export namespace FetchArticleList {
  export type Model = ArticleModel
}
