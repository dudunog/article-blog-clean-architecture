import React from "react"
import { ArticleDetailsModel } from "@/domain/models"
import {
  ArticleAuthor,
  ArticleBibliography,
  ArticleHeader,
  ArticleImage,
  ArticleContent,
  ArticleRecommendation
} from "@/presentation/pages/article/components"
import { Divider } from "@chakra-ui/react"

interface ArticleDataProps {
  article: ArticleDetailsModel
  load: (id: string) => Promise<void>
}

const ArticleData: React.FC<ArticleDataProps> = ({
  article,
  load
}) => {
  return (
    <>
      <ArticleHeader
        title={article?.title}
        published={article?.published}
        categories={article?.categories}
        headline={article?.headline}
      />

      <ArticleImage
        image={article?.featured_media?.medium_large}
        alt={article?.title}
      />

      <ArticleContent content={article?.content} />

      <ArticleBibliography bibliography={article.bibliography} />

      <ArticleAuthor
        authorImage={article?.author?.picture}
        authorName={article?.author?.name}
        authorProfession={article?.author?.profession}
      />

      <Divider bgColor="blue.500" height="2px" />

      <ArticleRecommendation
        nextArticle={article.next_post}
        load={load}
      />
    </>
  )
}

export default ArticleData
