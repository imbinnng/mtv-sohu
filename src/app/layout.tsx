import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MTV - 在线视频网站',
  description: '最新最热的电视剧、电影、综艺等视频内容',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon-192.svg',
    shortcut: '/favicon-192.svg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-192.svg" sizes="192x192" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-192.svg" />
        <meta name="theme-color" content="#dc2626" />
      </head>
      <body className="min-h-screen bg-base-200 transition-colors duration-300">{children}</body>
    </html>
  )
}