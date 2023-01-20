import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
