import React, { lazy, useEffect } from "react"
import { Loadable } from "@/presentation/components"
import { ArticleProps } from "@/presentation/pages/article/article"
import { useParams } from "react-router-dom"
import {
  makeRemoteLoadArticle,
  makeRemoteStoreArticle
} from "@/main/factories/usecases"

const Article: React.FC<ArticleProps> =
  Loadable(lazy(async () => import("@/presentation/pages/article/article")))

export const makeArticle: React.FC = () => {
  return (
    <Article
      loadArticle={makeRemoteLoadArticle()}
      storeArticle={makeRemoteStoreArticle()}
    />
  )
}
