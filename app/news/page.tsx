import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsCard } from "@/components/news-card"
import { Button } from "@/components/ui/button"
import { getAllArticles } from "@/lib/sanity/queries"

export const metadata: Metadata = {
  title: "Новини | Рівненський ліцей №22",
  description: "Останні новини та події Рівненського ліцею №22",
}

export const revalidate = 60

export default async function NewsPage() {
  const articles = await getAllArticles()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-8 gap-2" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              На головну
            </Link>
          </Button>

          <div className="mb-12">
            <p className="mb-2 font-medium text-primary">Будьте в курсі подій</p>
            <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Новини ліцею</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Останні події, досягнення учнів та важливі оголошення Рівненського ліцею №22.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsCard key={article._id} article={article} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
