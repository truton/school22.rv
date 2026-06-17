import { Mail, Award, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const teachers = [
  {
    name: "Шама Сергій Андрійович",
    role: "Директор",
    subject: "Управління закладом",
    experience: "25 років",
    awards: "Заслужений вчитель України",
  },
  {
    name: "Руднік Надія Тимофіївна",
    role: "Заступник директора",
    subject: "Математика",
    experience: "18 років",
    awards: "Вчитель-методист",
  },
  {
    name: "Александрук Тамара Іванівна",
    role: "Вчитель",
    subject: "Українська мова та література",
    experience: "15 років",
    awards: "Вчитель вищої категорії",
  },
  {
    name: "Андрущик Валентина Іванівна",
    role: "Вчитель",
    subject: "Фізика та інформатика",
    experience: "12 років",
    awards: "Вчитель І категорії",
  },
]

export function Teachers() {
  return (
    <section id="teachers" className="py-20 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Наша команда</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Педагогічний колектив
          </h2>
          <p className="text-muted-foreground">
            Досвідчені вчителі, які люблять свою справу та надихають учнів на нові звершення
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher) => (
            <Card key={teacher.name} className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Avatar placeholder */}
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-background/80 flex items-center justify-center text-4xl font-bold text-primary">
                    {teacher.name.split(" ").slice(0, 2).map(n => n[0]).join("")}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardContent className="p-5 space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-primary">{teacher.role}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{teacher.subject}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>{teacher.awards}</span>
                  </div>
                </div>

                <a href="mailto:school22@rv.ua" className="flex w-fit items-center gap-2 text-sm text-primary hover:underline mt-2">
                  <Mail className="h-4 w-4" />
                  Написати
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            У нашому колективі працює понад 65 досвідчених педагогів
          </p>
          <a href="#teachers" className="text-primary font-medium hover:underline">
            Переглянути весь колектив →
          </a>
        </div>
      </div>
    </section>
  )
}
