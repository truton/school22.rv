import type { PortableTextBlock } from "@portabletext/react"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export interface ArticlePreview {
  _id: string
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  author: string
  category: string
  categoryColor: string
  mainImage?: SanityImageSource & { alt?: string }
}

export interface Article extends ArticlePreview {
  body: PortableTextBlock[]
}

export interface ArticleSlug {
  slug: string
}
