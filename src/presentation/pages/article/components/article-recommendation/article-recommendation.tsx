import React from "react"
import { ArticleNextPost } from "@/domain/models"
import { SuspenseImg } from "@/presentation/components"
import { Link, useNavigate } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text
} from "@chakra-ui/react"
import ArticleImage from "@/presentation/assets/article.png"

interface ArticleRecommendationProps {
  nextArticle: ArticleNextPost
  load: (id: string) => Promise<void>
}

const ArticleRecommendation: React.FC<ArticleRecommendationProps> = ({
  nextArticle,
  load
}) => {
  const navigate = useNavigate()

  const handleNavigateToArticle = (): void => {
    navigate(`article/${nextArticle?.id}#title`)
    load(String(nextArticle?.id))
  }

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
        <SuspenseImg
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={nextArticle?.featured_media?.medium_large || ArticleImage}
          alt="Caffe Latte"
          alignSelf="center"
          boxSize="180px"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{nextArticle?.title || "Sem título"}</Heading>

            <Text py="2">
              {nextArticle?.headline || "Sem descrição"}
            </Text>
          </CardBody>

          <CardFooter>
            <Link to={`/article/${nextArticle?.id}`}>
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={handleNavigateToArticle}
              >
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
