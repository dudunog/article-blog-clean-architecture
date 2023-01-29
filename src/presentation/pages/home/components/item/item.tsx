import React from "react"
import { LoadArticleList } from "@/domain/usecases"
import { SuspenseImg, Tags } from "@/presentation/components"
import { Link } from "react-router-dom"
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  WrapItem
} from "@chakra-ui/react"
import ArticleImage from "@/presentation/assets/article.png"

interface ArticleItemProps {
  article: LoadArticleList.Model
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }: ArticleItemProps) => {
  return (
    <WrapItem
      maxW="370px"
      flexDirection="row"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="lg"
      alignContent="center"
    >
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Link to={`/article/${article.id}`}>
            <SuspenseImg
              maxH={247}
              transform="scale(1.0)"
              src={article?.featured_media?.medium_large || ArticleImage}
              alt={article.title}
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)"
              }}
            />
          </Link>
        </Box>
        <Box px={5} py={1} pb={3}>
          <Tags tags={article.categories.map(c => c.name)} marginTop="3" />
          <Heading fontSize="xl" marginTop="2">
            <Link to={`/article/${article.id}`}>
              {article.title || "Untitled"}
            </Link>
          </Heading>
          <Text as="p" fontSize="md" marginTop="2" color="gray.500">
            {article.headline || "No description"}
          </Text>
        </Box>
      </Box>
    </WrapItem>
  )
}

export default ArticleItem
