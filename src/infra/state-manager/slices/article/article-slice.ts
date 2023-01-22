import { ISlice } from '@/data/protocols/state-manager'
import { CaseReducerActions, createSlice, Slice } from '@reduxjs/toolkit'
import { ArticleState } from '@/data/protocols/state-manager'
import { articleReducers } from '@/infra/state-manager/reducers'

const initialState: ArticleState = {
  isLoading: false,
  error: null,
  articles: [],
  article: null,
  sortBy: null,
  length: 0,
  filters: {
    offset: '0',
    limit: '10',
    sort: 'ASC',
    fsearch: '',
    fstatus: '',
    fcategory: '',
    fpriority: '',
    ftechnician: '',
    query: ''
  }
}

export class ArticleSlice implements ISlice<ArticleState, typeof articleReducers, "article"> {
  private articleSlice: Slice

  constructor () {
    const articleSlice = createSlice({
      name: 'article',
      initialState,
      reducers: articleReducers
    })

    this.articleSlice = articleSlice
  }

  getSlice (): Slice {
    return this.articleSlice
  }

  getActions (): CaseReducerActions<typeof articleReducers, "article"> {
    return this.articleSlice.actions as CaseReducerActions<typeof articleReducers, "article">
  }
}

const articleSlice = new ArticleSlice()

// Reducer
export default articleSlice.getSlice().reducer

// Actions
export const articleSlices = articleSlice.getActions()
export type ArticleSlicesType = typeof articleSlices
