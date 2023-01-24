import React from "react"
import { Box, Card, Heading, Stack, Text } from "@chakra-ui/react"
import { SuspenseImg } from "@/presentation/components"

interface ArticleAuthorProps {
  authorImage: string
  authorName: string
  authorProfession: string
}

const ArticleAuthor: React.FC<ArticleAuthorProps> = ({
  authorImage,
  authorName,
  authorProfession
}) => {
  return (
    <>
      <Heading fontSize="3xl" mt={10}>
        Escrito por
      </Heading>
      <Card
        mt={5}
        w="full"
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Box display="flex" my={5} mx={3} gap={2}>
          <SuspenseImg
            boxSize="70px"
            src={authorImage || ""}
            alt={authorName}
            borderRadius="full"
            objectFit="contain"
          />
          <Stack justifyContent="center">
            <Text mb={-1}>
              {authorName}
            </Text>
            <Text color="gray.500">
              {authorProfession}
            </Text>
          </Stack>
        </Box>
      </Card>
    </>
  )
}

export default ArticleAuthor
