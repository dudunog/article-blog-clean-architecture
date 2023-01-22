import React, { useEffect } from 'react'
import { Navbar, Loading } from '@/presentation/components'
import { ArticleListItem } from '@/presentation/pages/home/components'
import { useAppDispatch, useAppSelector } from '@/main/providers/redux-store-provider'
import { LoadArticleList } from '@/domain/usecases'
import { Box } from '@chakra-ui/react'

type Props = {
  loadArticleList: LoadArticleList
}

const App: React.FC<Props> = ({ loadArticleList }) => {
  const dispatch = useAppDispatch()

  const {
    isLoading,
    articles,
    error
  } = useAppSelector((state) => state.article)

  useEffect(() => {
    loadArticleList.loadAll()
  }, [])

  return (
    <>
      <Navbar />

      <Box>
        {(isLoading && !articles.leth) ? <Loading /> : (
          error
          ? "Error"
          : <ArticleListItem articles={articles} />
        )}
      </Box>
    </>
  )
}

export default App
