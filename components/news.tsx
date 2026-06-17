import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsCard } from "@/components/news-card"
import type { ArticlePreview } from "@/lib/sanity/types"

interface NewsProps {
  articles: ArticlePreview[]
}

export function News({ articles }: NewsProps) {
  return (
    <section id="news" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-medium text-primary">Будьте в курсі подій</p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Новини ліцею</h2>
          </div>
          <Button variant="outline" className="gap-2 self-start sm:self-auto" asChild>
            <Link href="/news">
              Всі новини
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <NewsCard key={article._id} article={article} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
