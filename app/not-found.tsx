import Link from "next/link"
import { ArrowLeft, GraduationCap } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="mb-4 text-7xl font-bold text-foreground">404</h1>
          <h2 className="mb-6 text-2xl font-semibold text-foreground">Сторінку не знайдено</h2>
          <p className="mb-8 max-w-md mx-auto text-muted-foreground">
            Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
          </p>
          <Button size="lg" className="gap-2" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Повернутися на головну
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
