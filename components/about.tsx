import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Якісна освіта",
    description: "Сучасні методики навчання та індивідуальний підхід до кожного учня",
  },
  {
    icon: Heart,
    title: "Патріотичне виховання",
    description: "Формування національної свідомості та любові до рідної країни",
  },
  {
    icon: Lightbulb,
    title: "Інноваційні технології",
    description: "Інтерактивні класи, комп&apos;ютерні лабораторії та сучасне обладнання",
  },
]

const achievements = [
  "Переможці всеукраїнських олімпіад",
  "Учасники МАН України",
  "Призери спортивних змагань",
  "Лауреати творчих конкурсів",
  "Активна волонтерська діяльність",
  "Міжнародні освітні програми",
]

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium mb-2">Про заклад</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Рівненський ліцей №22
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Рівненський ліцей №22 Рівненської міської ради — це сучасний заклад загальної 
                середньої освіти з багаторічними традиціями. Ми створюємо комфортне та безпечне 
                середовище для всебічного розвитку кожної дитини.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Наші досягнення</h3>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div key={achievement} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
