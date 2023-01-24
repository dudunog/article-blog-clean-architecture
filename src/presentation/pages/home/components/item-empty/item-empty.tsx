import React from "react"
import { Text } from "@chakra-ui/react"

const ArticleItemEmpty: React.FC = () => {
  return (
    <Text alignSelf="center">
      Não existem artigos relacionados ao termo pesquisado!
    </Text>
  )
}

export default ArticleItemEmpty
