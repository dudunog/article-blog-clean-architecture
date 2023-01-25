import React from "react"
import { LoadArticleList } from "@/domain/usecases"
import { Pagination } from "@/presentation/components"
import {
  ArticleItem,
  ArticleItemEmpty
} from "@/presentation/pages/home/components"
import { Heading, Stack, Wrap } from "@chakra-ui/react"

interface ListProps {
  articles: LoadArticleList.Model[]
  page: number
  size: number
  setPage: React.Dispatch<React.SetStateAction<any>>
}

const List: React.FC<ListProps> =
  ({ articles, page, size, setPage }) => {
    return (
      <Stack>
        <Heading as="h2" marginTop={10} marginBottom={5}>
          Artigos
        </Heading>

        {articles?.length
          ? (
              <>
                <Pagination
                  onPageChange={setPage}
                  totalCountOfRegisters={size}
                  currentPage={page}
                  registersPerPage={10}
                />

                <Wrap
                  spacing="30px"
                  css={{
                    ul: {
                      justifyContent: "center"
                    }
                  }}
                >
                  {articles.map((article: LoadArticleList.Model) =>
                    <ArticleItem key={article.id} article={article} />)
                  }
                </Wrap>
              </>
            )
          : <ArticleItemEmpty />}
      </Stack>
    )
  }

export default List
