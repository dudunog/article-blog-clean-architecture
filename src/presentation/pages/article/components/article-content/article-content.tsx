import React from "react"
import { Box, Text } from "@chakra-ui/react"

interface ArticleDataProps {
  content: string
}

const ArticleData: React.FC<ArticleDataProps> = ({
  content
}) => {
  return (
    <Box mt={6}>
      <Text
        fontSize="md"
        color="gray.500"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  )
}

export default ArticleData
