"use client"

import * as React from "react"
import { FileText, Download, Eye, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

const documents = [
  {
    title: "Статут закладу",
    category: "Установчі документи",
    date: "15.09.2023",
    size: "275 KB",
    type: "PDF",
    url: "/documents/Статут закладу.pdf"
  },
  {
    title: "Правила внутрішнього розпорядку",
    category: "Внутрішні документи",
    date: "01.09.2025",
    size: "202 KB",
    type: "PDF",
    url: "/documents/Правила внутрішнього розпорядку.pdf"
  },
  {
    title: "Освітня програма 2025-2026",
    category: "Навчальні програми",
    date: "28.08.2025",
    size: "230 KB",
    type: "PDF",
    url: "/documents/Освітня програма 2025-2026.pdf"
  },
  {
    title: "Витяг з кошторису (березень 2026)",
    category: "Фінансова звітність",
    date: "05.04.2026",
    size: "210 KB",
    type: "PDF",
    url: "/documents/Витяг з кошторису (березень 2026).pdf"
  },
  {
    title: "План роботи ліцею на 2025-2026 н.р.",
    category: "Планування",
    date: "25.08.2025",
    size: "217 KB",
    type: "PDF",
    url: "/documents/План роботи ліцею на 2025-2026 н.р..pdf"
  },
  {
    title: "Правила прийому до 1 класу",
    category: "Вступ",
    date: "01.03.2026",
    size: "221 KB",
    type: "PDF",
    url: "/documents/Правила прийому до 1 класу.pdf"
  },
]

const categories = [
  "Всі документи",
  "Установчі документи",
  "Фінансова звітність",
  "Навчальні програми",
  "Вступ",
]

export function Documents() {
  const [activeCategory, setActiveCategory] = React.useState("Всі документи")
  const { toast } = useToast()

  const filteredDocuments = React.useMemo(() => {
    if (activeCategory === "Всі документи") return documents
    return documents.filter((doc) => doc.category === activeCategory)
  }, [activeCategory])

  const handleAction = () => {
    toast({
      description: "Документ знаходиться в процесі оновлення",
    })
  }

  return (
    <section id="documents" className="py-20 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Прозорість та відкритість</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Документи
          </h2>
          <p className="text-muted-foreground">
            Офіційні документи ліцею для ознайомлення
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocuments.map((doc) => (
            <Card key={doc.title} className="group hover:shadow-md transition-all">
              <CardContent className="p-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">{doc.category}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {doc.date}
                      </span>
                      <span>{doc.size}</span>
                      <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {doc.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                  {doc.url ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                        <a href={doc.url} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4" />
                          Переглянути
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={doc.url} download>
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" size="sm" className="flex-1 gap-2" onClick={handleAction}>
                        <Eye className="h-4 w-4" />
                        Переглянути
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2" onClick={handleAction}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
