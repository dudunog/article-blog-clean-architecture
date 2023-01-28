import React from "react"
import { ArticleAuthor, ArticleBibliography, ArticleHeader, ArticleImage } from "@/presentation/pages/article/components"
import { ArticleDetailsModel } from "@/domain/models"
import ArticleContent from "../article-content/article-content"

interface ArticleDataProps {
  article: ArticleDetailsModel
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

      <ArticleBibliography bibliography={article.bibliography} />

      <ArticleAuthor
        authorImage={article?.author?.picture}
        authorName={article?.author?.name}
        authorProfession={article?.author?.profession}
      />
    </>
  )
}

export default ArticleData
