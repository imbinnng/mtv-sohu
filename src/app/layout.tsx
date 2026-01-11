import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MTV - 在线视频网站',
  description: '最新最热的电视剧、电影、综艺等视频内容',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  )
}