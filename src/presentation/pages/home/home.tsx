import React, { useEffect } from 'react'
import { Navbar, Loading } from '@/presentation/components'
import { ArticleListItem } from '@/presentation/pages/home/components'
import { useAppDispatch, useAppSelector } from '@/main/providers/redux-store-provider'
import { LoadArticleList } from '@/domain/usecases'
import { Container } from '@chakra-ui/react'

export type HomeProps = {
  loadArticleList: LoadArticleList
}

const Home: React.FC<HomeProps> = ({ loadArticleList }) => {
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

      <Container maxW={'7xl'} p="12">
        {(isLoading && !articles.leth) ? <Loading /> : (
          error
          ? "Error"
          : <ArticleListItem articles={articles} />
        )}
      </Container>
    </>
  )
}

export default Home
