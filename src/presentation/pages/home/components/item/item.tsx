import React from 'react'
import { LoadArticleList } from '@/domain/usecases'
import { CategoryModel } from '@/domain/models'
import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  WrapItem,
  Link as LinkChakra,
} from '@chakra-ui/react'
import { Tags } from '@/presentation/components'

type ArticleItemProps = {
  article: LoadArticleList.Model
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }: ArticleItemProps) => {
  return (
    <>
      <WrapItem maxW='374px' flexDirection="row" bg={useColorModeValue('white', 'gray.900')}
        boxShadow='2xl'>
        <Box w="100%">
          <Box borderRadius="lg" overflow="hidden">
            <LinkChakra textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                transform="scale(1.0)"
                src={article.featured_media.medium_large}
                alt="some text"
                objectFit="contain"
                width="100%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </LinkChakra>
          </Box>
          <Box p={3}>
            <Tags tags={article.categories.map(c => c.name)} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <LinkChakra textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {article.title}
              </LinkChakra>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" color='gray.500'>
              {article.headline}
            </Text>
          </Box>
        </Box>
      </WrapItem>
    </>
  )
}

export default ArticleItem
