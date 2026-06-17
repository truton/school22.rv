import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { formatArticleDate } from "@/lib/sanity/queries"
import { urlForImage } from "@/lib/sanity/image"
import type { ArticlePreview } from "@/lib/sanity/types"

interface NewsCardProps {
  article: ArticlePreview
  featured?: boolean
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  const imageUrl = article.mainImage
    ? urlForImage(article.mainImage).width(800).height(450).fit("crop").url()
    : null

  return (
    <Link href={`/news/${article.slug}`} className="block h-full">
      <Card
        className={`group h-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
          featured ? "sm:col-span-2 lg:col-span-1" : ""
        }`}
      >
        {imageUrl ? (
          <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
            <Image
              src={imageUrl}
              alt={article.mainImage?.alt || article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : null}
        <CardHeader className="pb-3">
          <div className="mb-3 flex items-center justify-between gap-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${article.categoryColor}`}
            >
              {article.category}
            </span>
          </div>
          <h3 className="line-clamp-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="pb-3">
          <p className="line-clamp-3 text-sm text-muted-foreground">{article.excerpt}</p>
        </CardContent>
        <CardFooter className="border-t border-border pt-3">
          <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formatArticleDate(article.publishedAt)}
            </div>
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {article.author}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
