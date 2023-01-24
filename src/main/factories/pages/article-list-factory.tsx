import React, { lazy } from "react"
import { Loadable } from "@/presentation/components"
import {
  makeRemoteLoadArticleList,
  makeRemoteStoreArticleList
} from "@/main/factories/usecases"
import { HomeProps } from "@/presentation/pages/home/home"

const ArticleList: React.FC<HomeProps> =
  Loadable(lazy(async () => import("@/presentation/pages/home/home")))

export const makeArticleList: React.FC = () => {
  return (
    <ArticleList
      loadArticleList={makeRemoteLoadArticleList()}
      storeArticleList={makeRemoteStoreArticleList()}
    />
  )
}
