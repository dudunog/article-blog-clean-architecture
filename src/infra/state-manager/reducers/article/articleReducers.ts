import { ArticleState } from "@/data/protocols/state-manager"
import { PayloadAction } from "@reduxjs/toolkit"

export const articleReducers = {
  // START LOADING
  startLoading (state: ArticleState) {
    state.isLoading = true
  },

  // HAS ERROR
  hasError (state: ArticleState, action: PayloadAction<object>) {
    state.isLoading = false
    state.error = action.payload
  },

  // GET ARTICLES
  getArticlesSuccess (state: ArticleState, action: PayloadAction<any>) {
    state.isLoading = false
    state.articles = action.payload.data
    state.size = action.payload.size
  },

  // GET ARTICLE
  getArticleSuccess (state: ArticleState, action: PayloadAction<any>) {
    state.isLoading = false
    state.article = action.payload
  },

  cleanArticle (state: ArticleState) {
    state.article = null
  },

  // SORT & FILTER ARTICLES
  sortByArticles (state: ArticleState, action: PayloadAction<any>) {
    state.sortBy = action.payload
  },

  filterArticles (state: ArticleState, action: PayloadAction<any>) {
    state.filters.page = action.payload.page
    state.filters.search = action.payload.search
  }
}
