"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, GraduationCap } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

const navLinks = [
  { href: "/#news", label: "Новини" },
  { href: "/#about", label: "Про ліцей" },
  { href: "/#teachers", label: "Вчителі" },
  { href: "/#schedule", label: "Розклад" },
  { href: "/#documents", label: "Документи" },
  { href: "/#contacts", label: "Контакти" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { toast } = useToast()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="hidden sm:block">
              <p className="font-semibold text-foreground leading-tight">Ліцей №22</p>
              <p className="text-xs text-muted-foreground">м. Рівне</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button 
              className="hidden sm:flex" 
              size="sm"
              onClick={() => toast({ description: "Електронний журнал на стадії впровадження" })}
            >
              Електронний журнал
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Меню</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="mt-2 sm:hidden" 
              size="sm"
              onClick={() => {
                setIsOpen(false)
                toast({ description: "Електронний журнал на стадії впровадження" })
              }}
            >
              Електронний журнал
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
