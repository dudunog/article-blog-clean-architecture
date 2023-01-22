import { LoadArticleList } from '@/domain/usecases'

import { Link } from 'react-router-dom'
import React from 'react'

type Props = {
  article: LoadArticleList.Model
}

const ArticleItem: React.FC<Props> = ({ article }: Props) => {
  return (
    <li>
      <div>
        <p data-testid="article">{article.slug}</p>
      </div>
      <footer><Link data-testid="link" to={`/articles/${article.id}`}>Ver Resultado</Link></footer>
    </li>
  )
}

export default ArticleItem
