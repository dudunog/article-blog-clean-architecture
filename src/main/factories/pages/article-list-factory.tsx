import React, { lazy } from "react"
import { Loadable } from "@/presentation/components"
import {
  makeRemoteLoadArticleList,
  makeRemoteStoreArticleList
} from "@/main/factories/usecases"
import { HomeProps } from "@/presentation/pages/home/home"

// @ts-expect-error ignore
const Home: React.FC<HomeProps> = Loadable(lazy(async () => await import("@/presentation/pages/home/home")))

export const makeHome: React.FC = () => {
  return (
    <Home
      loadArticleList={makeRemoteLoadArticleList()}
      storeArticleList={makeRemoteStoreArticleList()}
    />
  )
}
