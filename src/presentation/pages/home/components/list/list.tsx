import { LoadArticleList } from '@/domain/usecases'
import { ArticleItem, ArticleItemEmpty } from '@/presentation/pages/home/components'

import React from 'react'

type Props = {
  articles: LoadArticleList.Model[]
}

const List: React.FC<Props> = ({ articles }: Props) => {
  return (
    <ul data-testid="article-list">
      {articles?.length
        ? articles.map((article: LoadArticleList.Model) =>
          <ArticleItem key={article.id} article={article} />)
        : <ArticleItemEmpty />
      }
    </ul>
  )
}

export default List
