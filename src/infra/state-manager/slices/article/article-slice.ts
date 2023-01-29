import { ISlice, ArticleState } from "@/data/protocols/state-manager"
import { CaseReducerActions, createSlice, Slice } from "@reduxjs/toolkit"
import { articleReducers } from "@/infra/state-manager/reducers"

const initialState: ArticleState = {
  isLoading: false,
  articles: [],
  article: null,
  error: null,
  size: 0,
  sortBy: null,
  filters: {
    page: 1,
    search: "",
    orderby: ""
  }
}

export class ArticleSlice implements ISlice<ArticleState, typeof articleReducers, "article"> {
  private readonly articleSlice: Slice

  constructor () {
    const articleSlice = createSlice({
      name: "article",
      initialState,
      reducers: articleReducers
    })

    this.articleSlice = articleSlice
  }

  getSlice (): Slice {
    return this.articleSlice
  }

  getActions (): CaseReducerActions<typeof articleReducers, "article"> {
    return this.articleSlice.actions as
      CaseReducerActions<typeof articleReducers, "article">
  }
}

const articleSlice = new ArticleSlice()

// Reducer
export default articleSlice.getSlice().reducer

// Actions
export const articleSlices = articleSlice.getActions()
export type ArticleSlicesType = typeof articleSlices
