import { articlePersistConfig, ReduxStore } from "@/infra/state-manager"
import { articleReducer } from "@/infra/state-manager/slices"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"

export interface StateType {
  readonly article: null
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
