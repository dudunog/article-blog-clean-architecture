import React from "react"
import { Navbar } from "@/presentation/components"
import { Outlet } from "react-router-dom"

const MainLayout: React.FC = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
}

export default MainLayout
