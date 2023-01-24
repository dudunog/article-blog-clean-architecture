import React, { Suspense, useEffect, useState } from "react"
import { Navbar, Loading } from "@/presentation/components"
import { ArticleListItem, Search } from "@/presentation/pages/home/components"
import { useAppDispatch, useAppSelector } from "@/main/providers/redux-store-provider"
import { LoadArticleList, StoreArticleList } from "@/domain/usecases"
import { Container } from "@chakra-ui/react"

export interface HomeProps {
  loadArticleList: LoadArticleList
  storeArticleList: StoreArticleList
}

const Home: React.FC<HomeProps> =
  ({ loadArticleList, storeArticleList }) => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [orderby, setOrderby] = useState("")
  const dispatch = useAppDispatch()

  const {
    isLoading,
    articles,
    size,
    error
  } = useAppSelector((state) => state.article)

  const load = (page: number, search: string, orderby: string) => {
    storeArticleList.filterArticles({ page })
    loadArticleList.loadAll({
      page,
      search,
      orderby
    })
  }

  useEffect(() => {
    load(page, search, orderby)
  }, [page])

  return (
    <>
      <Navbar />

      <Container maxW="7xl" p="12">
        <Search
          page={page}
          search={search}
          setSearch={setSearch}
          orderby={orderby}
          setOrderby={setOrderby}
          load={load}
          disabledRelevance={size === 0}
        />

        <Suspense fallback={<Loading />}>
          {(isLoading && !articles.leth) ? <Loading /> : (
            error
            ? "Error"
            : <ArticleListItem
                articles={articles}
                page={page}
                size={size}
                setPage={setPage}
              />
          )}
        </Suspense>
      </Container>
    </>
  )
}

export default Home
