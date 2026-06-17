import Link from "next/link"
import { ArrowRight, Users, BookOpen, Award, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { icon: Users, value: "850+", label: "Учнів" },
  { icon: BookOpen, value: "65+", label: "Вчителів" },
  { icon: Award, value: "45+", label: "Років досвіду" },
  { icon: Calendar, value: "1-11", label: "Класи" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Набір до 1-х класів розпочато
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-foreground">Рівненський ліцей</span>
              <br />
              <span className="text-primary">№22</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty">
              Сучасний заклад освіти, що поєднує багаторічні традиції та інноваційні підходи 
              до навчання. Ми виховуємо лідерів майбутнього.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/admission">
                  Вступ до ліцею
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/gallery">
                  Віртуальна екскурсія
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <stat.icon className="h-5 w-5" />
                    <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/20 animate-[spin_60s_linear_infinite]" />
              </div>
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-2 border-primary/30" />
              </div>
              <div className="absolute inset-16 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm" />
              </div>
              
              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2 p-8">
                  <div className="text-8xl font-bold text-primary">22</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Рівненська міська рада</div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-8 left-0 px-4 py-2 bg-card rounded-lg shadow-lg border border-border">
                <p className="text-xs text-muted-foreground">Рейтинг</p>
                <p className="font-semibold text-foreground">⭐ 4.9/5.0</p>
              </div>
              <div className="absolute bottom-16 right-0 px-4 py-2 bg-card rounded-lg shadow-lg border border-border">
                <p className="text-xs text-muted-foreground">Випускників</p>
                <p className="font-semibold text-foreground">10,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
