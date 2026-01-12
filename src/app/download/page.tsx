'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Download, Play, Smartphone, Apple, QrCode, Check, Shield, Zap, Globe } from 'lucide-react'

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-base-content mb-4">下载 MTV App</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            随时随地享受海量视频内容，支持离线下载和高清播放
          </p>
        </div>

        {/* Download Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mobile Download */}
          <div className="card bg-base-100 shadow-xl border-2 border-primary">
            <div className="card-body text-center">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="white"/>
                  <path d="M8 10h4v12H8V10z" fill="#dc2626"/>
                  <path d="M20 10h4v12h-4V10z" fill="#dc2626"/>
                  <path d="M14 8h4v14h-4V8z" fill="#dc2626"/>
                </svg>
              </div>
              <h2 className="card-title text-2xl justify-center">移动端 App</h2>
              <p className="text-base-content/70 mt-2">支持 iOS 和 Android 系统</p>
              
              {/* Download buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="btn bg-neutral hover:bg-neutral-focus text-neutral-content">
                  <Apple className="h-5 w-5" />
                  App Store
                </button>
                <button className="btn btn-success text-success-content">
                  <Smartphone className="h-5 w-5" />
                  Google Play
                </button>
              </div>

              {/* QR Code */}
              <div className="mt-6">
                <div className="">扫码下载移动端</div>
                <div className="flex justify-center p-8">
                  <div className="w-32 h-32 bg-base-300 rounded-lg flex items-center justify-center">
                    <QrCode className="h-16 w-16 text-base-content/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Download */}
          <div className="card bg-base-100 shadow-xl border-2 border-secondary">
            <div className="card-body text-center">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="h-10 w-10 text-primary" />
              </div>
              <h2 className="card-title text-2xl justify-center">桌面版</h2>
              <p className="text-base-content/70 mt-2">Windows 和 macOS 支持</p>
              
              {/* Download buttons */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="btn btn-outline btn-primary">
                  <Play className="h-5 w-5" />
                  Windows
                </button>
                <button className="btn btn-outline btn-primary">
                  <Play className="h-5 w-5" />
                  macOS
                </button>
              </div>

              {/* Version Info */}
              <div className="alert mt-6">
                <Play className="h-5 w-5" />
                <div>
                  <h4 className="font-medium">最新版本 v3.2.1</h4>
                  <p className="text-sm">支持离线下载和4K播放</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-base-content mb-8">为什么选择 MTV App？</h2>
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
              <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
                <div className="card-body text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-lg justify-center">{feature.title}</h3>
                  <p className="text-base-content/70 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mobile Requirements */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title flex items-center">
                <Apple className="h-6 w-6 mr-2 text-primary" />
                系统要求
              </h2>
              
              <div className="tabs tabs-boxed bg-base-200">
                <a className="tab tab-active">iOS</a>
                <a className="tab">Android</a>
              </div>
              
              <div className="mt-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">iOS 设备要求</span>
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-2" />
                      <span className="text-sm">iOS 12.0 或更高版本</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-2" />
                      <span className="text-sm">iPhone 6s 或更新机型</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-2" />
                      <span className="text-sm">至少 2GB 存储空间</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Requirements */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title flex items-center">
                <Play className="h-6 w-6 mr-2 text-primary" />
                系统要求
              </h2>
              
              <div className="tabs tabs-boxed bg-base-200">
                <a className="tab tab-active">Windows</a>
                <a className="tab">macOS</a>
              </div>
              
              <div className="mt-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Windows 系统要求</span>
                  </label>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-2" />
                      <span className="text-sm">Windows 10 或更高版本</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-2" />
                      <span className="text-sm">Intel i5 或同等处理器</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-2" />
                      <span className="text-sm">8GB RAM 或更高</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl justify-center mb-8">常见问题</h2>
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
                <div key={index} className="collapse collapse-open bg-base-200">
                  <input type="radio" name="my-accordion-2" defaultChecked={index === 0} /> 
                  <div className="collapse-title text-lg font-medium text-primary">
                    {faq.question}
                  </div>
                  <div className="collapse-content"> 
                    <p className="text-base-content/70">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}