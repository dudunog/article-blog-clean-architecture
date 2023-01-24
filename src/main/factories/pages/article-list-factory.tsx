import React, { lazy } from 'react'
import {
  makeRemoteLoadArticleList,
  makeRemoteStoreArticleList
} from '@/main/factories/usecases'
import { Loadable } from '@/presentation/components'

const ArticleList = Loadable(lazy(async () => import('@/presentation/pages/home/home')))

export const makeArticleList: React.FC = () => {
  return (
    <ArticleList
      loadArticleList={makeRemoteLoadArticleList()}
      storeArticleList={makeRemoteStoreArticleList()}
    />
  )
}
