import React, { ReactNode } from "react"
import { makeReduxStateManager } from "@/main/factories/state-manager/redux-store"
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react"

interface ReduxStoreProviderProps {
  children: ReactNode
}

const store = makeReduxStateManager()

const ReduxStoreProvider: React.FC<ReduxStoreProviderProps>
  = ({ children }) => {
  return (
    <Provider store={store.getStore()}>
      <PersistGate loading={null} persistor={store.persistStore()}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxStoreProvider
