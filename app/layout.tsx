import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const codecPro = localFont({
  src: [
    {
      path: './fonts/CodecPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/CodecPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CodecPro-News.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/CodecPro-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/CodecPro-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-codec-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Опишіть вашу задачу | Фінансові рішення',
  description: 'Ми підбираємо оптимальний сценарій під кожен запит: від обміну USDT до міжнародних переказів.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="uk" className={`${codecPro.variable}`}>
      <body className="font-sans antialiased bg-black text-white min-h-screen">
      {children}
      </body>
      </html>
  )
}