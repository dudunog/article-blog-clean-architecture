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
      mt={6}
      src={image || ArticleImg}
      alt={alt}
      objectFit="contain"
      width="100%"
    />
  )
}

export default ArticleImage
