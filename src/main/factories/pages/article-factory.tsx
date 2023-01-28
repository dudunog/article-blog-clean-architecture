import React, { lazy } from "react"
import { Loadable } from "@/presentation/components"
import { ArticleProps } from "@/presentation/pages/article/article"
import {
  makeRemoteLoadArticle,
  makeRemoteStoreArticle
} from "@/main/factories/usecases"
const articlePath = "@/presentation/pages/article/article"

const Article: React.FC<ArticleProps> =
  Loadable(lazy(async () => await import(articlePath)))

export const makeArticle: React.FC = () => {
  return (
    <Article
      loadArticle={makeRemoteLoadArticle()}
      storeArticle={makeRemoteStoreArticle()}
    />
  )
}
