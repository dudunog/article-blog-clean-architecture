import React from "react"
import ReactDOM from "react-dom/client"
import { Router } from "@/presentation/components"
import { ChakraProvider } from "@chakra-ui/react"
import ReduxStoreProvider from "./providers/redux-store-provider"

ReactDOM.createRoot(document.getElementById("main")).render(
  <ChakraProvider>
    <ReduxStoreProvider>
      <Router />
    </ReduxStoreProvider>
  </ChakraProvider>
)
