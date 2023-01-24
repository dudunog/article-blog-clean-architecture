import React, { Suspense, useEffect } from "react"
import { useAppSelector } from "@/main/providers/redux-store-provider"
import { LoadArticle, StoreArticle } from "@/domain/usecases"
import { Loading, Navbar } from "@/presentation/components"
import { Container } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { ArticleData } from "@/presentation/pages/article/components"

export interface ArticleProps {
  loadArticle: LoadArticle
  storeArticle: StoreArticle
}

const Article: React.FC<ArticleProps> =
  ({ loadArticle }) => {
  type Props = {
    id: string
  }

  const { id } = useParams<Props>()

  const {
    isLoading,
    article,
    error
  } = useAppSelector((state) => state.article)

  const load = () => {
    loadArticle.load(id)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <>
      <Navbar />

      <Container maxW="4xl" p="12">
        <Suspense fallback={<Loading />}>
          {(isLoading) ? <Loading /> : (
            error
            ? "Unexpected Error"
            : <ArticleData article={article} />
          )}
        </Suspense>
      </Container>
    </>
  )
}

export default Article
