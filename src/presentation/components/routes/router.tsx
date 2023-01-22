import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { makeHome } from '@/main/factories/pages/article-list-factory'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={makeHome({})} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
