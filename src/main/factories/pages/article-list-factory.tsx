import { makeRemoteLoadArticleList } from '@/main/factories/usecases'
import { Loadable } from '@/presentation/components'
import { HomeProps } from '@/presentation/pages/home/home'

import React, { lazy } from 'react'

const Home = Loadable(lazy(async () => import('@/presentation/pages/home/home')))

export const makeArticleList: React.FC = () => {
  return (
    <Home loadArticleList={makeRemoteLoadArticleList()} />
  )
}
