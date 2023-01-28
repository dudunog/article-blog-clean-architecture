import { articlePersistConfig, ReduxStore } from "@/infra/state-manager"
import { articleReducer } from "@/infra/state-manager/slices"
import { ArticleState } from "@/data/protocols/state-manager"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

export interface StateType {
  readonly article: ArticleState
}

export const makeReduxStateManager = (): ReduxStore<StateType> =>
  new ReduxStore({
    rootReducer: combineReducers({
      article: persistReducer(
        articlePersistConfig,
        articleReducer
      )
    })
  })
