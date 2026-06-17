"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Maximize2, X } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const galleryImages = [
  {
    id: 1,
    url: "/gallery/Шкільне подвірря.jpg",
    title: "Шкільне подвір'я",
    category: "Інфраструктура"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1632&auto=format&fit=crop",
    title: "Сучасний клас",
    category: "Навчання"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop",
    title: "Урок хімії",
    category: "Навчання"
  },
  {
    id: 4,
    url: "/gallery/Шкільна бібліотека.jpg",
    title: "Шкільна бібліотека",
    category: "Інфраструктура"
  },
  {
    id: 5,
    url: "/gallery/спортивні змагання.webp",
    title: "Спортивні змагання",
    category: "Спорт"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop",
    title: "Святковий концерт",
    category: "Події"
  }
]

const categories = ["Всі", "Інфраструктура", "Навчання", "Спорт", "Події"]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = React.useState("Всі")
  const [selectedImage, setSelectedImage] = React.useState<typeof galleryImages[0] | null>(null)

  const filteredImages = React.useMemo(() => {
    if (activeCategory === "Всі") return galleryImages
    return galleryImages.filter(img => img.category === activeCategory)
  }, [activeCategory])

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

          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Галерея ліцею
            </h1>
            <p className="text-lg text-muted-foreground">
              Запрошуємо на віртуальну екскурсію нашим навчальним закладом
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
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

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="group overflow-hidden cursor-pointer border-0 shadow-sm hover:shadow-md transition-all"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0 relative aspect-[4/3]">
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <Maximize2 className="absolute top-4 right-4 h-5 w-5 text-white" />
                    <h3 className="text-white font-medium text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
          <div 
            className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-20">
              <h3 className="text-white font-medium text-xl">{selectedImage.title}</h3>
              <p className="text-white/80">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
