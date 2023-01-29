import React from "react"
import { SuspenseImg } from "@/presentation/components"
import ArticleImg from "@/presentation/assets/article.png"

interface ArticleImageProps {
  image: string
  alt: string
}

const ArticleImage: React.FC<ArticleImageProps> = ({
  image,
  alt
}) => {
  return (
    <SuspenseImg
      src={image || ArticleImg}
      alt={alt}
      objectFit="contain"
      width="100%"
      height="100%"
    />
  )
}

export default ArticleImage
