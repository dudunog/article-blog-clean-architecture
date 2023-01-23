import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { makeArticleList } from '@/main/factories/pages/article-list-factory'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={makeArticleList({})} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
