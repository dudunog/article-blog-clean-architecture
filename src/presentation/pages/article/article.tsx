import React, { Suspense, useEffect } from "react"
import { LoadArticle, StoreArticle } from "@/domain/usecases"
import { useAppSelector } from "@/main/providers/redux-store-provider"
import { ArticleState } from "@/data/protocols/state-manager"
import { Loading } from "@/presentation/components"
import { ArticleData } from "@/presentation/pages/article/components"
import { Container } from "@chakra-ui/react"
import { useParams } from "react-router-dom"

export interface ArticleProps {
  loadArticle: LoadArticle
  storeArticle: StoreArticle
}

const Article: React.FC<ArticleProps> = ({ loadArticle }) => {
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
      <Container maxW="4xl" p="12">
        <Suspense fallback={<Loading />}>
          <>
            {(isLoading && !article) ?? <Loading />}
            {error ?? "Aconteceu um erro inesperado"}
            {(article != null) ? <ArticleData article={article} /> : ""}
          </>
        </Suspense>
      </Container>
    </>
  )
}

export default Article
