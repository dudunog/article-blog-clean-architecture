import React, { Suspense, useEffect, useState } from "react"
import { Navbar, Loading } from "@/presentation/components"
import { ArticleListItem } from "@/presentation/pages/home/components"
import { useAppDispatch, useAppSelector } from "@/main/providers/redux-store-provider"
import { LoadArticleList, StoreArticleList } from "@/domain/usecases"
import { Container } from "@chakra-ui/react"

export type HomeProps = {
  loadArticleList: LoadArticleList
  storeArticleList: StoreArticleList
}

const Home: React.FC<HomeProps> = ({ loadArticleList, storeArticleList }) => {
  const [page, setPage] = useState(1)
  const dispatch = useAppDispatch()

  const {
    isLoading,
    articles,
    size,
    error
  } = useAppSelector((state) => state.article)

  useEffect(() => {
    storeArticleList.filterArticles({ page })
    loadArticleList.loadAll({
      page,
      search: ''
    })
  }, [page])

  return (
    <>
      <Navbar />

      <Container maxW="7xl" p="12">
        <Suspense fallback={<Loading />}>
          {(isLoading && !articles.leth) ? <Loading /> : (
            error
            ? "Error"
            : <ArticleListItem articles={articles} page={page} size={size} setPage={setPage} />
          )}
        </Suspense>
      </Container>
    </>
  )
}

export default Home
