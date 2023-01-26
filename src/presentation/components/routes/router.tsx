import React from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { makeArticleList, makeArticle } from "@/main/factories/pages"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={makeArticleList({})} />
        <Route path="/article/:id" element={makeArticle({})} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
