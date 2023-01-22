export interface ArticleFiltersState {
  offset: string
  limit: string
  sort: string
  fsearch: string
  fstatus: string
  fcategory: string
  fpriority: string
  ftechnician: string
  query: string
}

export interface ArticleState {
  isLoading: boolean
  error: object | null
  articles: object
  article: object | null
  sortBy: string | null
  length: number
  filters: ArticleFiltersState
};
