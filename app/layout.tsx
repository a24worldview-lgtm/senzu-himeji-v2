import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: {
    default: `${SITE.name}｜姫路のドライヘッドスパ専門店【脳疲労・睡眠改善】`,
    template: `%s｜${SITE.nameShort}`,
  },
  description: SITE.description,
  keywords: ['ドライヘッドスパ','姫路','脳疲労','睡眠改善','自律神経','眼精疲労','ヘッドスパ','仙豆のちから'],
  openGraph: {
    title: `${SITE.name}｜ドライヘッドスパ専門店`,
    description: SITE.description,
    type: 'website',
    locale: 'ja_JP',
    url: SITE.url,
    siteName: SITE.nameShort,
  },
  metadataBase: new URL(SITE.url),
  alternates: { canonical: '/' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
