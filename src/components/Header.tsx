'use client'

import Link from 'next/link'
import { Search, Menu, X, Download, User, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'
import LoginModal from '@/components/LoginModal'

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const navItems = [
    { name: '首页', href: '/' },
    { name: '电视剧', href: '/tv-series' },
    { name: '电影', href: '/movies' },
    { name: '综艺', href: '/variety' },
    { name: '动漫', href: '/anime' },
    { name: '纪录片', href: '/documentary' },
    { name: '短视频', href: '/short-video' },
  ]

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    const checkbox = document.getElementById('right-drawer-toggle') as HTMLInputElement
    if (checkbox) {
      checkbox.checked = false
    }
  }

  // Initialize theme on mount
  useEffect(() => {
    // Check and apply theme immediately on mount
    const updateTheme = () => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
      
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    
    updateTheme()
    
    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', updateTheme)
    
    return () => {
      mediaQuery.removeEventListener('change', updateTheme)
    }
  }, [])

  // Handle theme toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
      {/* Main Header */}
      <div className="navbar bg-base-100 shadow-sm border-b border-base-200 sticky top-0 z-40 transition-colors duration-300">
        {/* Logo - Always on Left */}
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center mr-2">
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="#dc2626"/>
                <path d="M8 10h4v12H8V10z" fill="white"/>
                <path d="M20 10h4v12h-4V10z" fill="white"/>
                <path d="M14 8h4v14h-4V8z" fill="white"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-primary">MTV</span>
          </Link>
        </div>

        {/* Center - Desktop Navigation */}
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Theme Toggle, Mobile Menu Button or Desktop Actions */}
        <div className="navbar-end">
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <label htmlFor="right-drawer-toggle" className="btn btn-ghost">
              <Menu className="h-6 w-6" />
            </label>
          </div>

          {/* Desktop Search and Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="form-control">
              <label className="input input-bordered input-sm flex items-center gap-2 w-48 lg:w-64">
                <Search className="h-4 w-4 opacity-70" />
                <input 
                  type="text" 
                  placeholder="搜索视频..." 
                  className="grow placeholder-opacity-70"
                />
              </label>
            </div>
          
            <Link href="/download">
              <button className="btn btn-outline btn-sm">
                <Download className="h-4 w-4" />
                <span className="ml-1">下载</span>
              </button>
            </Link>
          
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => setIsLoginModalOpen(true)}
            >
              <User className="h-4 w-4" />
              <span className="ml-1">登录</span>
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Toggle - Hidden Checkbox */}
      <div className="drawer drawer-end">
      <input 
        type="checkbox" 
        id="right-drawer-toggle" 
        className="drawer-toggle hidden"
      />
      
      {/* Custom Drawer Implementation */}
        <div className="drawer-side z-50">
          {/* Overlay */}
          <label htmlFor="right-drawer-toggle" aria-label="close sidebar" className="drawer-overlay"></label>
          <div 
            onClick={closeDrawer}
          />
          
          {/* Drawer Panel */}
          <div className=" h-full w-80 max-w-full bg-base-100 shadow-xl transform transition-transform duration-300 translate-x-0">
            {/* Drawer Header */}
            <div className="p-4 border-b border-base-200 bg-base-100">
              <div className="flex items-center justify-end">
                <button className="btn btn-ghost btn-sm btn-circle" onClick={closeDrawer}>
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="p-4 flex-1 overflow-y-auto">
              <ul className="menu bg-base-200 rounded-lg">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={closeDrawer}
                      className="text-base-content/70 hover:text-primary transition-colors p-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-base-200 bg-base-100">
              {/* Mobile Search */}
              <div className="form-control mb-4">
                <label className="input input-bordered input-sm flex items-center gap-2 w-full">
                  <Search className="h-4 w-4 opacity-70" />
                  <input 
                    type="text" 
                    placeholder="搜索视频..." 
                    className="grow placeholder-opacity-70"
                  />
                </label>
              </div>

              {/* Mobile Login Button */}
              <button 
                className="btn btn-primary w-full mb-3"
                onClick={() => {
                  setIsLoginModalOpen(true)
                  closeDrawer()
                }}
              >
                <User className="h-4 w-4 mr-2" />
                登录
              </button>

              {/* Download Link */}
              <Link href="/download" className="w-full">
                <button className="btn btn-outline w-full">
                  <Download className="h-4 w-4 mr-2" />
                  下载APP
                </button>
              </Link>
            </div>
          </div>
        </div>
        </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  )
}