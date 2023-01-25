import { ArticleModel } from "@/domain/models"

export interface ArticleFiltersState {
  page: number
  search: string
  orderby: string
}

export interface ArticleState {
  isLoading: boolean
  articles: ArticleModel[]
  article: ArticleModel | null
  error: object | null
  size: number
  sortBy: string | null
  filters: ArticleFiltersState
};
