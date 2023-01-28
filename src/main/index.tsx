import React from "react"
import ReactDOM from "react-dom/client"
import { Router } from "@/presentation/components"
import { ChakraProvider } from "@chakra-ui/react"
import ReduxStoreProvider from "./providers/redux-store-provider"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("main") as HTMLElement).render(
  <ChakraProvider>
    <ReduxStoreProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ReduxStoreProvider>
  </ChakraProvider>
)
