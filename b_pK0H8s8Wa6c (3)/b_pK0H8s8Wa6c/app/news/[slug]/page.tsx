import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlePortableText } from "@/components/article-portable-text"
import { Button } from "@/components/ui/button"
import {
  formatArticleDate,
  getArticleBySlug,
  getArticleSlugs,
} from "@/lib/sanity/queries"
import { urlForImage } from "@/lib/sanity/image"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs()
  return slugs.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    return { title: "Новину не знайдено" }
  }

  return {
    title: `${article.title} | Рівненський ліцей №22`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
    },
  }
}

export const revalidate = 60

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const imageUrl = article.mainImage
    ? urlForImage(article.mainImage).width(1400).height(788).fit("crop").url()
    : null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <article className="container mx-auto max-w-4xl px-4">
          <Button variant="ghost" className="mb-8 gap-2" asChild>
            <Link href="/news">
              <ArrowLeft className="h-4 w-4" />
              Усі новини
            </Link>
          </Button>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${article.categoryColor}`}
            >
              {article.category}
            </span>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {formatArticleDate(article.publishedAt)}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <User className="h-4 w-4" />
              {article.author}
            </div>
          </div>

          <h1 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mb-8 text-lg text-muted-foreground">{article.excerpt}</p>

          {imageUrl ? (
            <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={imageUrl}
                alt={article.mainImage?.alt || article.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          ) : null}

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ArticlePortableText value={article.body} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
