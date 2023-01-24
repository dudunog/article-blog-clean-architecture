import React from "react"
import { LoadArticleList } from "@/domain/usecases"
import { Pagination } from "@/presentation/components"
import { ArticleItem, ArticleItemEmpty } from "@/presentation/pages/home/components"
import { Heading, Stack, Wrap } from "@chakra-ui/react"

type Props = {
  articles: LoadArticleList.Model[]
  page: number
  size: number
  setPage: React.Dispatch<React.SetStateAction<any>>
}

const List: React.FC<Props> = ({ articles, page, size, setPage }: Props) => {
  return (
    <Stack>
      <Heading as="h2" marginTop={15} marginBottom={5}>
        Articles
      </Heading>

      <Pagination
        onPageChange={setPage}
        totalCountOfRegisters={size}
        currentPage={page}
        registersPerPage={10}
      />

      <Wrap
        spacing="30px"
        css={{
          "ul": {
            justifyContent:"center"
          }
        }}
      >
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
