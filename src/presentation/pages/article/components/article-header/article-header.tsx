import React from "react"
import { Tags } from "@/presentation/components"
import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react"
import { CategoryModel } from "@/domain/models"

interface ArticleHeaderProps {
  title: string
  published: Date
  headline: string
  categories: CategoryModel[]
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  published,
  headline,
  categories
}) => {
  return (
    <Box borderRadius="lg" overflow="hidden">
      <Tags tags={categories?.map(c => c.name)} marginTop="3" />
      <Box>
        <Heading fontSize="3xl" marginTop="2">
          {title || "Untitled"}
        </Heading>
      </Box>
      <Box>
        <Box display="flex" mt={5} gap={2}>
          <Text alignSelf="center">
            Publicado em {new Date(published).toLocaleDateString()}
          </Text>
        </Box>
      </Box>
      <Box mt={8} mb={8} borderLeft="2px" borderColor="blue.500" pl={6}>
        <Text pb={1}>{headline || "Sem descrição"}</Text>
      </Box>
    </Box>
  )
}

export default ArticleHeader
