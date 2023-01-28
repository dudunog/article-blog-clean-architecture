import React, { lazy } from "react"
import { Loadable } from "@/presentation/components"
import {
  makeRemoteLoadArticleList,
  makeRemoteStoreArticleList
} from "@/main/factories/usecases"
import { HomeProps } from "@/presentation/pages/home/home"
const homePath = "@/presentation/pages/home/home"

const Home: React.FC<HomeProps> =
  Loadable(lazy(async () => await import(homePath)))

export const makeHome: React.FC = () => {
  return (
    <Home
      loadArticleList={makeRemoteLoadArticleList()}
      storeArticleList={makeRemoteStoreArticleList()}
    />
  )
}
