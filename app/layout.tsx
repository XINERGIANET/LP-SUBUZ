import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollIndicator } from '@/components/ScrollIndicator'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A0A0A',
}

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SUBUZ | Hielo Premium y Agua Purificada en Chiclayo',
  description: 'Hielo gourmet premium 100% filtrado y ozonizado en Chiclayo, Perú. Ideal para bares, restaurantes, eventos y hogares. Entrega rápida garantizada.',
  generator: 'v0.app',
  keywords: 'hielo premium, agua purificada, hielo gourmet, Chiclayo, bares, restaurantes',
  openGraph: {
    title: 'SUBUZ | Hielo Premium en Chiclayo',
    description: 'La mejor calidad en hielo gourmet y agua purificada',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        <ScrollIndicator />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
