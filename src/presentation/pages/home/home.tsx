import React, { Suspense, useEffect, useState } from "react"
import { Navbar, Loading } from "@/presentation/components"
import { ArticleListItem, Search } from "@/presentation/pages/home/components"
import { useAppSelector } from "@/main/providers/redux-store-provider"
import { LoadArticleList, StoreArticleList } from "@/domain/usecases"
import { Container } from "@chakra-ui/react"
import { ArticleState } from "@/data/protocols/state-manager"

export interface HomeProps {
  loadArticleList: LoadArticleList
  storeArticleList: StoreArticleList
}

const Home: React.FC<HomeProps> =
  ({ loadArticleList, storeArticleList }) => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [orderby, setOrderby] = useState("")

    const {
      isLoading,
      articles,
      size,
      error
    }: ArticleState = useAppSelector((state) => state.article)

    const load = async (page: number, search: string, orderby: string): Promise<void> => {
      await storeArticleList.filterArticles({ page })
      await loadArticleList.loadAll({
        page,
        search,
        orderby
      })
    }

    useEffect(() => {
      load(page, search, orderby).then()
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
          {(isLoading && !articles.length)
            ? <Loading />
            : (
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
