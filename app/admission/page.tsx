import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, FileText, Info } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Вступ до ліцею | Рівненський ліцей №22",
  description: "Правила прийому та необхідні документи для вступу до Рівненського ліцею №22",
}

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto max-w-4xl px-4">
          <Button variant="ghost" className="mb-8 gap-2" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              На головну
            </Link>
          </Button>

          <h1 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Вступ до ліцею
          </h1>
          <p className="mb-10 text-lg text-muted-foreground">
            Інформація щодо зарахування дітей до перших та інших класів Рівненського ліцею №22
          </p>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Загальна інформація
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Зарахування до закладу освіти здійснюється відповідно до наказу Міністерства освіти і науки України 
                  від 16.04.2018 №367 «Про затвердження Порядку зарахування, відрахування та переведення учнів 
                  до державних та комунальних закладів освіти для здобуття повної загальної середньої освіти».
                </p>
                <p>
                  Прийом документів для зарахування дітей до 1-х класів розпочинається щороку у квітні-травні.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Необхідні документи
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Заява одного з батьків дитини (з пред'явленням документа, що посвідчує особу заявника)",
                    "Копія свідоцтва про народження дитини (під час подання копії пред'являється оригінал)",
                    "Оригінал або копія медичної довідки за формою первинної облікової документації № 086-1/о",
                    "Оригінал або копія відповідного документа про освіту (за наявності)",
                    "Документ, що підтверджує місце проживання дитини чи одного з її батьків на території обслуговування закладу",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  Електронна реєстрація
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Ви також можете подати заяву на вступ в електронному вигляді через систему «Електронна реєстрація в заклади загальної середньої освіти» (ІСУО).
                </p>
                <Button asChild>
                  <a href="https://school.isuo.org/" target="_blank" rel="noopener noreferrer">
                    Перейти до електронної реєстрації
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
