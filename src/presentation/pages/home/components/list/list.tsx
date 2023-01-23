import { LoadArticleList } from '@/domain/usecases'
import { ArticleItem, ArticleItemEmpty } from '@/presentation/pages/home/components'
import { Box, Heading, Stack, Wrap } from '@chakra-ui/react'

import React from 'react'

type Props = {
  articles: LoadArticleList.Model[]
}

const List: React.FC<Props> = ({ articles }: Props) => {
  return (
    <Stack>
      <Heading as="h2" marginTop={15} marginBottom={5}>
        Articles
      </Heading>
      <Wrap spacing="30px">
        {articles?.length
          ? articles.map((article: LoadArticleList.Model) =>
            <ArticleItem key={article.id} article={article} />)
          : <ArticleItemEmpty />
        }
      </Wrap>
    </Stack>
  )
}

export default List
