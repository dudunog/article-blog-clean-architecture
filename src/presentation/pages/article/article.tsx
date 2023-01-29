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

  const load = async (id: string): Promise<void> => {
    await loadArticle.load(id)
  }

  useEffect(() => {
    load(id as string)
  }, [])

  useEffect(() => {
    console.log("isLoading")
    console.log(isLoading)
  }, [isLoading])

  return (
    <>
      <Container maxW="4xl" p="12">
        <Suspense fallback={<Loading />}>
          <>
            {isLoading && <Loading />}
            {error && "Aconteceu um erro inesperado"}
            {article ? <ArticleData article={article} load={load} /> : ""}
          </>
        </Suspense>
      </Container>
    </>
  )
}

export default Article
