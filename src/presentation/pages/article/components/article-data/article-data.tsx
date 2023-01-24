import React from "react"
import { ArticleAuthor, ArticleHeader, ArticleImage } from "@/presentation/pages/article/components"
import { ArticleModel } from "@/domain/models"
import ArticleContent from "../article-content/article-content"

interface ArticleDataProps {
  article: ArticleModel
}

const ArticleData: React.FC<ArticleDataProps> = ({
  article
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

      <ArticleAuthor
        authorImage={article?.author?.picture}
        authorName={article?.author?.name}
        authorProfession={article?.author?.profession}
      />
    </>
  )
}

export default ArticleData
