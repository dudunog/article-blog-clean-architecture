export interface FeaturedMediaModel {
  thumbnail: string
  medium: string
  medium_large: string
  large: string
}

export interface CategoryModel {
  id: number
  name: string
  slug: string
  description: string
  link: string
  permalink: string
}

export type ArticleModel = {
  id: number
  slug: string
  link: string
  permalink: string
  title: string
  headline: string
  excerpt: string
  featured_media: FeaturedMediaModel
  categories: CategoryModel[]
  sponsor: null
  theme: string
  published: Date
  modified: Date
}

type ArticleAuthor = {
  description: string
  id: number
  link: string
  name: string
  permalink: string
  picture: string
  profession: string
  slug: string
}

export interface ArticleDetailsModel extends ArticleModel {
  author: ArticleAuthor
  bibliography: string
  content: string
}
