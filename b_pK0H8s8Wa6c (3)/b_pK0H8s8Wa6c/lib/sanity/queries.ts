import { groq } from "next-sanity"
import { isSanityConfigured } from "@/sanity/env"
import { client } from "./client"
import { fallbackArticleBodies, fallbackArticles } from "./fallback"
import type { Article, ArticlePreview, ArticleSlug } from "./types"

const articlePreviewFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage {
    ...,
    alt
  },
  "author": author->name,
  "category": categories[0]->title,
  "categoryColor": categories[0]->color
`

export const articlesQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc) {
    ${articlePreviewFields}
  }
`

export const latestArticlesQuery = groq`
  *[_type == "article" && defined(slug.current)] | order(publishedAt desc)[0...$limit] {
    ${articlePreviewFields}
  }
`

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    ${articlePreviewFields},
    body
  }
`

export const articleSlugsQuery = groq`
  *[_type == "article" && defined(slug.current)] {
    "slug": slug.current
  }
`

async function fetchArticles<T>(query: string, params: Record<string, unknown> = {}): Promise<T[]> {
  if (!isSanityConfigured) {
    return []
  }

  try {
    return await client.fetch<T[]>(query, params, {
      next: { tags: ["articles"] },
    })
  } catch {
    return []
  }
}

export async function getLatestArticles(limit = 6): Promise<ArticlePreview[]> {
  const articles = await fetchArticles<ArticlePreview>(latestArticlesQuery, { limit })

  if (articles.length > 0) {
    return articles
  }

  return fallbackArticles.slice(0, limit)
}

export async function getAllArticles(): Promise<ArticlePreview[]> {
  const articles = await fetchArticles<ArticlePreview>(articlesQuery)

  if (articles.length > 0) {
    return articles
  }

  return fallbackArticles
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (isSanityConfigured) {
    try {
      const article = await client.fetch<Article | null>(
        articleBySlugQuery,
        { slug },
        { next: { tags: [`article:${slug}`] } },
      )

      if (article) {
        return article
      }
    } catch {
      // fall through to fallback
    }
  }

  const preview = fallbackArticles.find((item) => item.slug === slug)
  if (!preview) {
    return null
  }

  const bodyText = fallbackArticleBodies[slug] ?? preview.excerpt

  return {
    ...preview,
    body: [
      {
        _type: "block",
        _key: "fallback",
        style: "normal",
        markDefs: [],
        children: [{ _type: "span", _key: "fallback-span", text: bodyText, marks: [] }],
      },
    ],
  }
}

export async function getArticleSlugs(): Promise<ArticleSlug[]> {
  if (isSanityConfigured) {
    try {
      const slugs = await client.fetch<ArticleSlug[]>(articleSlugsQuery)
      if (slugs.length > 0) {
        return slugs
      }
    } catch {
      // fall through to fallback
    }
  }

  return fallbackArticles.map(({ slug }) => ({ slug }))
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}
