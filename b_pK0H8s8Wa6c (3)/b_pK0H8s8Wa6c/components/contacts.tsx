"use client"

import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    label: "Адреса",
    value: "м. Рівне, вул. Князя Романа 14А",
    action: "Показати на карті",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+38 (0362) 65-17-41",
    action: "Зателефонувати",
    href: "tel:+380362651741",
  },
  {
    icon: Mail,
    label: "Email",
    value: "school22@rv.ua",
    action: "Написати листа",
    href: "mailto:school22@rv.ua",
  },
  {
    icon: Clock,
    label: "Графік роботи",
    value: "Пн-Пт: 08:00 - 18:00",
    action: null,
    href: null,
  },
]

import { useToast } from "@/hooks/use-toast"

export function Contacts() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Повідомлення надіслано!",
      description: "Ми зв'яжемося з вами найближчим часом.",
    })
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <section id="contacts" className="py-20 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium mb-2">Зв&apos;язок з нами</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Контактна інформація
              </h2>
              <p className="text-muted-foreground">
                Маєте питання? Зв&apos;яжіться з нами будь-яким зручним способом
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <Card key={info.label} className="group">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="font-medium text-foreground">{info.value}</p>
                        {info.action && (
                          <a
                            href={info.href || "#"}
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
                          >
                            {info.action}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => toast({ description: "Facebook сторінка на стадії розробки" })}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => toast({ description: "Instagram сторінка на стадії розробки" })}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => toast({ description: "YouTube канал на стадії розробки" })}
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Button>
            </div>
            
            {/* Map Embed */}
            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.655260199049!2d26.27623917711462!3d50.63351987449553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f135adab478f1%3A0xc68205cd54a49c95!2sKnyazya%20Romana%20St%2C%2014%D0%B0%2C%20Rivne%2C%20Rivnens&#39;ka%20oblast%2C%2033000!5e0!3m2!1sen!2sua!4v1718042457815!5m2!1sen!2sua"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Напишіть нам</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Ім&apos;я</label>
                    <input
                      type="text"
                      placeholder="Ваше ім'я"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+38 (0XX) XXX-XX-XX"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Повідомлення</label>
                  <textarea
                    rows={4}
                    placeholder="Ваше питання або повідомлення..."
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Надіслати повідомлення
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
