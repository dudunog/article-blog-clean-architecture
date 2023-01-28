import { ArticleDetailsModel, ArticleModel } from "@/domain/models"

export interface ArticleFiltersState {
  page: number
  search: string
  orderby: string
}

export interface ArticleState {
  isLoading: boolean
  articles: ArticleModel[]
  article: ArticleDetailsModel | null
  error: object | null
  size: number
  sortBy: string | null
  filters: ArticleFiltersState
};
