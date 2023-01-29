import React from "react"
import { Tags } from "@/presentation/components"
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
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
    <Box id="title" borderRadius="lg" overflow="hidden">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#title">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#content">Conteúdo</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#bibliography">Bibliografia</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#writtenBy">Autor</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

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
