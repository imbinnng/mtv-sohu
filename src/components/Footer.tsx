'use client'

import Link from 'next/link'
import {Download } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { name: '热门剧集', href: '/tv-series' },
      { name: '最新电影', href: '/movies' },
      { name: '综艺娱乐', href: '/variety' },
      { name: '动漫番剧', href: '/anime' },
      { name: '纪录片', href: '/documentary' },
    ],
    helpCenter: [
      { name: '使用指南', href: '#' },
      { name: '常见问题', href: '#' },
      { name: '联系客服', href: '#' },
      { name: '意见反馈', href: '#' },
    ],
    social: [
      { name: '微信', icon: '微' },
      { name: '微博', icon: '博' },
      { name: '抖音', icon: '抖' },
    ]
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="white"/>
                  <path d="M8 10h4v12H8V10z" fill="#dc2626"/>
                  <path d="M20 10h4v12h-4V10z" fill="#dc2626"/>
                  <path d="M14 8h4v14h-4V8z" fill="#dc2626"/>
                </svg>
              </div>
              <span className="text-xl font-bold">MTV</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              提供最新最热的电视剧、电影、综艺等视频内容
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <div
                  key={social.name}
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                  title={social.name}
                >
                  <span className="text-xs text-white font-medium">
                    {social.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="font-semibold mb-4">帮助中心</h3>
            <ul className="space-y-2">
              {footerLinks.helpCenter.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h3 className="font-semibold mb-4">下载 App</h3>
            <p className="text-gray-400 text-sm mb-4">
              随时随地观看海量视频内容
            </p>
            <Link
              href="/download"
              className="inline-flex items-center btn btn-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Download className="h-4 w-4" />

              立即下载
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} MTV. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                隐私政策
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}