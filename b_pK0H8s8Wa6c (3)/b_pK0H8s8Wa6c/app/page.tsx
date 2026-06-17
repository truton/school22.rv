import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { News } from "@/components/news"
import { About } from "@/components/about"
import { Teachers } from "@/components/teachers"
import { Schedule } from "@/components/schedule"
import { Documents } from "@/components/documents"
import { Contacts } from "@/components/contacts"
import { Footer } from "@/components/footer"
import { getLatestArticles } from "@/lib/sanity/queries"

export default async function Home() {
  const articles = await getLatestArticles(6)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <News articles={articles} />
        <About />
        <Teachers />
        <Schedule />
        <Documents />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}
