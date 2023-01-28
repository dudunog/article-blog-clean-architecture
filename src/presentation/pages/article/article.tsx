import React, { Suspense, useEffect } from "react"
import { LoadArticle, StoreArticle } from "@/domain/usecases"
import { useAppSelector } from "@/main/providers/redux-store-provider"
import { ArticleState } from "@/data/protocols/state-manager"
import { Loading, Navbar } from "@/presentation/components"
import { ArticleData } from "@/presentation/pages/article/components"
import { Container } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { ArticleDetailsModel } from "@/domain/models"

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
  }: ArticleState = useAppSelector((state) => state.article)

  const load = async (): Promise<void> => {
    await loadArticle.load(id as string)
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <>
      <Navbar />

      <Container maxW="4xl" p="12">
        <Suspense fallback={<Loading />}>
          {(isLoading && !article)
            ? <Loading />
            : (
                error
                  ? "Unexpected Error"
                  : <ArticleData article={article as ArticleDetailsModel} />
              )}
        </Suspense>
      </Container>
    </>
  )
  }

export default Article
