import React from "react"
import {
  Box,
  Heading,
  Text,
  Link as LinkChakra,
  Divider,
  Stack
} from "@chakra-ui/react"
import { Tags } from "@/presentation/components"

interface ArticleHeaderProps {
  title: string
  published: Date
  headline: string
  categories: any
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
          <LinkChakra textDecoration="none" _hover={{ textDecoration: "none" }}>
            {title || "Untitled"}
          </LinkChakra>
        </Heading>
      </Box>
      <Box>
        <Box display="flex" mt={5} gap={2}>
          <Text alignSelf="center">
            Publicado em {new Date(published).toLocaleDateString()}
          </Text>
        </Box>
      </Box>
      <Box mt={8}>
        <Stack direction="row" h="60px" gap={3}>
          <Divider orientation="vertical" bg="blue.500" />
          <Text>{headline}</Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default ArticleHeader
