import { Dispatch, Reducer } from 'react';
import { IStateManager } from '@/data/protocols/state-manager'
import { CombinedState, Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { Persistor, persistReducer, persistStore } from 'redux-persist'
import { rootPersistConfig } from './persists/root-persist';

type StoreData = {
  rootReducer: Reducer<CombinedState<any>, any>;
};

export class ReduxStore<ApplicationState>
  implements IStateManager<ApplicationState, Store<ApplicationState>> {
  private store: Store<ApplicationState>;

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

    this.store = store;
  }

  getStore(): Store<ApplicationState> {
    return this.store
  }

  getState(): ApplicationState {
    return this.store.getState()
  }

  dispatch (action: any): void {
    this.store.dispatch(action)
  }

  persistStore (): Persistor {
    return persistStore(this.store)
  }

  useAppDispatch () {
    return 
  }

  subscribe(cb: () => void) {
    return this.store.subscribe(cb)
  }
}
