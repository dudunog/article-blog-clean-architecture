import { ArticleModel, HttpResposeModel } from "@/domain/models"

export interface FetchArticleList {
  fetchAll: () => Promise<HttpResposeModel<FetchArticleList.Model[]>>
}

export namespace FetchArticleList {
  export type Model = ArticleModel
}