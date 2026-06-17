"use client"

import Link from "next/link"
import { GraduationCap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const footerLinks = {
  navigation: [
    { label: "Головна", href: "/" },
    { label: "Новини", href: "/news" },
    { label: "Про ліцей", href: "/#about" },
    { label: "Вчителі", href: "/#teachers" },
  ],
  resources: [
    { label: "Розклад", href: "/#schedule" },
    { label: "Документи", href: "/#documents" },
    { label: "Електронний журнал", href: "#", isJournal: true },
    { label: "Бібліотека", href: "/#", isAction: true, message: "Бібліотека в процесі оновлення" },
  ],
  parents: [
    { label: "Вступ до ліцею", href: "/admission" },
    { label: "Батьківський комітет", href: "/#documents" },
    { label: "Харчування", href: "/#", isAction: true, message: "Інформація про харчування оновлюється" },
    { label: "Питання та відповіді", href: "/#contacts" },
  ],
}

export function Footer() {
  const { toast } = useToast()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Ліцей №22</p>
                <p className="text-xs text-muted-foreground">Рівненська міська рада</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Рівненський ліцей №22 — сучасний заклад освіти з багаторічними традиціями 
              та інноваційним підходом до навчання.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>м. Рівне, вул. Князя Романа 14А</p>
              <p>+38 (0362) 65-17-41</p>
              <p>school22@rv.ua</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Навігація</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Ресурси</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  {link.isJournal || link.isAction ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        toast({ description: link.message || "Електронний журнал на стадії впровадження" })
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Батькам</h4>
            <ul className="space-y-2">
              {footerLinks.parents.map((link) => (
                <li key={link.label}>
                  {link.isAction ? (
                     <button
                      onClick={(e) => {
                        e.preventDefault()
                        toast({ description: link.message || "Розділ в розробці" })
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Рівненський ліцей №22. Всі права захищені.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Політика конфіденційності
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Карта сайту
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
