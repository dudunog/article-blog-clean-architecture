import { Flex, Spinner } from "@chakra-ui/react"
import React from "react"

const Loading: React.FC = () => {
  return (
    <Flex
      minH="91vh"
      align="center"
      justify="center"
      direction="column"
      gap={5}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.800"
        size="xl"
      />
    </Flex>
  )
}

export default Loading
