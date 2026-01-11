'use client'

import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, Play, Smartphone, Apple, QrCode, Check, Shield, Zap, Globe } from 'lucide-react'

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">下载 MTV App</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            随时随地享受海量视频内容，支持离线下载和高清播放
          </p>
        </div>

        {/* Download Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mobile Download */}
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="white"/>
                  <path d="M8 10h4v12H8V10z" fill="#dc2626"/>
                  <path d="M20 10h4v12h-4V10z" fill="#dc2626"/>
                  <path d="M14 8h4v14h-4V8z" fill="#dc2626"/>
                </svg>
              </div>
              <CardTitle className="text-2xl">移动端 App</CardTitle>
              <p className="text-gray-600 mt-2">支持 iOS 和 Android 系统</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Download Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center py-3">
                  <Apple className="h-5 w-5 mr-2" />
                  App Store
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center py-3">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Google Play
                </Button>
              </div>

              {/* QR Code */}
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <QrCode className="h-16 w-16 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">扫码下载移动端</p>
              </div>
            </CardContent>
          </Card>

          {/* Desktop Download */}
          <Card className="border-2 border-secondary shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">桌面版</CardTitle>
              <p className="text-gray-600 mt-2">Windows 和 macOS 支持</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Download Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center py-3">
                  <Play className="h-5 w-5 mr-2" />
                  Windows
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white flex items-center justify-center py-3">
                  <Play className="h-5 w-5 mr-2" />
                  macOS
                </Button>
              </div>

              {/* Version Info */}
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">最新版本 v3.2.1</p>
                <p className="text-xs text-blue-600 mt-1">支持离线下载和4K播放</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">为什么选择 MTV App？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Download className="h-8 w-8 text-primary" />,
                title: '离线下载',
                description: '支持视频离线下载，随时随地观看'
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: '极速播放',
                description: '优化的播放引擎，秒开视频无卡顿'
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: '安全可靠',
                description: '官方正版内容，无病毒无广告'
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: '多语言',
                description: '支持中英日韩等多种语言字幕'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mobile Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Apple className="h-6 w-6 mr-2 text-primary" />
                系统要求
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">iOS 设备</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    iOS 12.0 或更高版本
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    iPhone 6s 或更新机型
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    至少 2GB 存储空间
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Android 设备</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Android 8.0 或更高版本
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    4GB RAM 或更高
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    至少 3GB 存储空间
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Desktop Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Play className="h-6 w-6 mr-2 text-primary" />
                系统要求
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Windows 系统</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Windows 10 或更高版本
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Intel i5 或同等处理器
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    8GB RAM 或更高
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">macOS 系统</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    macOS 10.15 或更高版本
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Intel 或 Apple Silicon 处理器
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    8GB RAM 或更高
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">常见问题</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: 'App 是免费的吗？',
                  answer: 'MTV App 完全免费下载和使用，部分优质内容可能需要会员订阅。'
                },
                {
                  question: '如何离线下载视频？',
                  answer: '在视频详情页点击下载按钮，可选择清晰度并批量下载到本地。'
                },
                {
                  question: '支持投屏到电视吗？',
                  answer: '支持 AirPlay、Chromecast 等主流投屏协议，可将内容投到大屏观看。'
                },
                {
                  question: '账号在多设备通用吗？',
                  answer: '是的，同一账号可在手机、平板、电脑等多端登录，数据实时同步。'
                }
              ].map((faq, index) => (
                <div key={index} className="border-b pb-4 last:border-0">
                  <h4 className="font-medium text-primary mb-2">{faq.question}</h4>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}