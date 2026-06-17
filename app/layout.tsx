import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'Рівненський ліцей №22 | Офіційний сайт',
  description: 'Рівненський ліцей №22 Рівненської міської ради — сучасний заклад загальної середньої освіти з багаторічними традиціями та інноваційним підходом до навчання.',
  keywords: ['ліцей 22', 'Рівне', 'школа', 'освіта', 'навчання', 'середня освіта'],
  authors: [{ name: 'Рівненський ліцей №22' }],
  openGraph: {
    title: 'Рівненський ліцей №22',
    description: 'Сучасний заклад освіти з багаторічними традиціями',
    locale: 'uk_UA',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1e2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ScrollToTop />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
