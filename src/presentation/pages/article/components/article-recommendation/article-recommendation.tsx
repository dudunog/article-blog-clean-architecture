import React from "react"
import { ArticleNextPost } from "@/domain/models"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Link,
  Stack,
  Text
} from "@chakra-ui/react"

interface ArticleRecommendationProps {
  nextArticle: ArticleNextPost
}

const ArticleRecommendation: React.FC<ArticleRecommendationProps> = ({
  nextArticle
}) => {
  return (
    <>
      <Heading fontSize="3xl" mt={10}>
        Veja também
      </Heading>
      <Card
        mt={5}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={nextArticle.featured_media.medium_large}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{nextArticle.title}</Heading>

            <Text py="2">
              {nextArticle.headline}
            </Text>
          </CardBody>

          <CardFooter>
            <Link
              textDecoration="none"
              href={`/article/${nextArticle.id}`}
              _hover={{ textDecoration: "none" }}
            >
              <Button variant="solid" colorScheme="blue">
                Visualizar
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </>
  )
}

export default ArticleRecommendation
