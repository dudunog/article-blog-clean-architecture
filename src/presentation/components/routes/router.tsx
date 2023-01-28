import React from "react"
import { makeHome, makeArticle } from "@/main/factories/pages"
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={makeHome({})} />
        <Route path="/article/:id" element={makeArticle({})} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
