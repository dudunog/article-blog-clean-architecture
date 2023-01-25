import { ArticleModel, ArticleListHttpResponse } from "@/domain/models"

export interface FetchArticleList {
  fetchAll: (query: string) => Promise<ArticleListHttpResponse<FetchArticleList.Model[]>>
}

export namespace FetchArticleList {
  export type Model = ArticleModel
}
