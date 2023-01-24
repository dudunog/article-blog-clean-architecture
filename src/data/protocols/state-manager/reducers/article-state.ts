export interface ArticleFiltersState {
  page: number
  search: string
  orderby: string
}

export interface ArticleState {
  isLoading: boolean
  articles: object
  article: object | null
  error: object | null
  size: number
  sortBy: string | null
  filters: ArticleFiltersState
};
