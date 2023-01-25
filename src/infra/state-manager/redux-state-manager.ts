import { Reducer } from "react"
import { CombinedState, Store, Unsubscribe } from "redux"
import { IStateManager } from "@/data/protocols/state-manager"
import { configureStore } from "@reduxjs/toolkit"
import { rootPersistConfig } from "./persists/root-persist"
import { Persistor, persistReducer, persistStore } from "redux-persist"

interface StoreData {
  rootReducer: Reducer<CombinedState<any>, any>
}

export class ReduxStore<ApplicationState> implements IStateManager<ApplicationState, Store<ApplicationState>> {
  private readonly store: Store<ApplicationState>

  constructor (storeData: StoreData) {
    const { rootReducer } = storeData

    const store = configureStore({
      reducer: persistReducer(rootPersistConfig, rootReducer),
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
          immutableCheck: false
        })
    })

    this.store = store
  }

  getStore (): Store<ApplicationState> {
    return this.store
  }

  getState (): ApplicationState {
    return this.store.getState()
  }

  dispatch (action: any): void {
    this.store.dispatch(action)
  }

  persistStore (): Persistor {
    return persistStore(this.store)
  }

  subscribe (cb: () => void): Unsubscribe {
    return this.store.subscribe(cb)
  }
}
