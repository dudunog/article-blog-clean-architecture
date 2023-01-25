import React from "react"
import { HStack, SpaceProps, Tag } from "@chakra-ui/react"

interface TagsProps {
  tags: string[]
  marginTop?: SpaceProps["marginTop"]
}

const Tags: React.FC<TagsProps> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size="md" variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

export default Tags
