'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { X, Mail, Lock, User, Eye, EyeOff, Github, Chrome } from 'lucide-react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login with:', formData)
    onClose()
  }

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Modal Header */}
        <CardHeader className="text-center pb-0">
          <div className="flex items-center justify-center space-x-2 mb-6 pt-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="6" fill="white"/>
                <path d="M8 10h4v12H8V10z" fill="#dc2626"/>
                <path d="M20 10h4v12h-4V10z" fill="#dc2626"/>
                <path d="M14 8h4v14h-4V8z" fill="#dc2626"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-primary">MTV</span>
          </div>
          
          {/* Tab Switch */}
          <div className="flex items-center justify-center bg-gray-100 rounded-lg p-1">
            <Button
              variant={isLogin ? "default" : "ghost"}
              size="sm"
              className="flex-1 rounded-md px-4 py-2 text-sm"
              onClick={() => setIsLogin(true)}
            >
              账号登录
            </Button>
            <Button
              variant={!isLogin ? "default" : "ghost"}
              size="sm"
              className="flex-1 rounded-md px-4 py-2 text-sm"
              onClick={() => setIsLogin(false)}
            >
              验码登录
            </Button>
          </div>
        </CardHeader>

        <CardContent className="pt-2">
          {isLogin ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="请输入邮箱地址"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="pl-10"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="请输入密码"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-gray-600">记住我</span>
                </label>
                <Button variant="link" className="text-primary hover:underline p-0 h-auto text-sm">
                  忘记密码？
                </Button>
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                登录
              </Button>
            </form>
          ) : (
            /* SMS Verification */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone Input */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="tel"
                  placeholder="请输入手机号码"
                  className="pl-10"
                  required
                />
              </div>

              {/* Verification Code */}
              <div className="grid grid-cols-2 gap-2">
                <Input
                  type="text"
                  placeholder="请输入验证码"
                  maxLength={6}
                  required
                />
                <Button type="button" variant="outline" className="h-10">
                  获取验证码
                </Button>
              </div>

              {/* SMS Login Button */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                登录
              </Button>
            </form>
          )}

          {/* Divider */}
          <div className="relative my-6">
            <div className="inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
              <span className="relative flex-shrink-0 bg-white px-4 text-sm text-gray-500">或</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <p className="text-center text-sm text-gray-600 mb-4">使用第三方账号登录</p>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="flex items-center justify-center py-2 hover:bg-gray-50"
                onClick={() => handleSocialLogin('wechat')}
              >
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">微</span>
                </div>
                微信登录
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center py-2 hover:bg-gray-50"
                onClick={() => handleSocialLogin('qq')}
              >
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">QQ</span>
                </div>
                QQ登录
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="flex items-center justify-center py-2 hover:bg-gray-50"
                onClick={() => handleSocialLogin('github')}
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub登录
              </Button>
              <Button
                variant="outline"
                className="flex items-center justify-center py-2 hover:bg-gray-50"
                onClick={() => handleSocialLogin('google')}
              >
                <Chrome className="h-5 w-5 mr-2" />
                Google登录
              </Button>
            </div>
          </div>

  {/* Register Link */}
          <div className="text-center pt-4 border-t">
            <p className="text-sm text-gray-600">
              还没有账号？
              <Link href="/register" className="text-primary hover:underline p-0 h-auto ml-1 text-sm">
                立即注册
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mt-4">
            登录即表示同意
            <Button variant="link" className="text-primary hover:underline p-0 h-auto text-xs">
              《用户协议》
            </Button>
            和
            <Button variant="link" className="text-primary hover:underline p-0 h-auto text-xs">
              《隐私政策》
            </Button>
          </p>
        </CardContent>
      </div>
    </div>
  )
}