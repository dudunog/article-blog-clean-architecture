import { makeRemoteLoadArticleList } from '@/main/factories/usecases'
import { Home } from '@/presentation/pages'

import React from 'react'

export const makeHome: React.FC = () => {
  return (
    <Home
      loadArticleList={makeRemoteLoadArticleList()}
    />
  )
}
