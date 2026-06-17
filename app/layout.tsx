import Script from 'next/script'
import type {Metadata} from 'next';
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
  icons: {
    icon: '/placeholder/images/icon.png', // Жорсткий шлях до іконки
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="uk" className={`${codecPro.variable}`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '996728839780743');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased bg-black text-white min-h-screen">
      <noscript>
        <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=996728839780743&ev=PageView&noscript=1"
            alt=""
        />
      </noscript>
      {children}
      </body>
      </html>
  )
}