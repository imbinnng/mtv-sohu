'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, Mail, Lock, User, Eye, EyeOff, Github, Chrome } from 'lucide-react'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phone: '',
    code: ''
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
    <div className="modal modal-open">
      <div className="modal-box relative max-w-md z-50">
        {/* Close Button */}
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </button>
        </form>

        {/* Modal Header */}
        <div className="text-center pb-0">
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
          <div className="tabs tabs-boxed bg-base-200 rounded-lg p-1">
            <button
              className={`tab tab-sm ${isLogin ? 'tab-active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              账号登录
            </button>
            <button
              className={`tab tab-sm ${!isLogin ? 'tab-active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              验码登录
            </button>
          </div>
        </div>

        <div className="py-4">
          {isLogin ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">邮箱地址</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <Mail className="h-4 w-4 opacity-70" />
                  <input
                    type="email"
                    placeholder="请输入邮箱地址"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="grow"
                    required
                  />
                </label>
              </div>

              {/* Password Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">密码</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <Lock className="h-4 w-4 opacity-70" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="请输入密码"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="grow"
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-ghost btn-xs"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </label>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm checkbox-primary mr-2"
                  />
                  <span className="text-base-content/70">记住我</span>
                </label>
                <button type="button" className="btn btn-ghost btn-xs text-primary p-0 h-auto">
                  忘记密码？
                </button>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn btn-primary w-full">
                登录
              </button>
            </form>
          ) : (
            /* SMS Verification */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone Input */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">手机号码</span>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <User className="h-4 w-4 opacity-70" />
                  <input
                    type="tel"
                    placeholder="请输入手机号码"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="grow"
                    required
                  />
                </label>
              </div>

              {/* Verification Code */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">验证码</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="请输入验证码"
                    maxLength={6}
                    value={formData.code}
                    onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value }))}
                    className="input input-bordered flex-1"
                    required
                  />
                  <button type="button" className="btn btn-outline">
                    获取验证码
                  </button>
                </div>
              </div>

              {/* SMS Login Button */}
              <button type="submit" className="btn btn-primary w-full">
                登录
              </button>
            </form>
          )}

          {/* Divider */}
          <div className="divider">或</div>

          {/* Social Login */}
          <div className="space-y-3">
            <p className="text-center text-sm text-base-content/70 mb-4">使用第三方账号登录</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                className="btn bg-[#5EBB2B] text-white border-[#4eaa0c]"
                onClick={() => handleSocialLogin('wechat')}
              >
                <svg aria-label="WeChat logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="white"><path d="M11.606,3.068C5.031,3.068,0,7.529,0,12.393s4.344,7.681,4.344,7.681l-.706,2.676c-.093,.353,.284,.644,.602,.464l3.173-1.798c1.403,.447,4.381,.59,4.671,.603-.208-.721-.311-1.432-.311-2.095,0-3.754,3.268-9.04,10.532-9.04,.165,0,.331,.004,.496,.011-.965-4.627-5.769-7.827-11.195-7.827Zm-4.327,7.748c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Zm8.386,0c-.797,0-1.442-.646-1.442-1.442s.646-1.442,1.442-1.442,1.442,.646,1.442,1.442-.646,1.442-1.442,1.442Z"></path><path d="M32,19.336c0-4.26-4.998-7.379-9.694-7.379-6.642,0-9.459,4.797-9.459,7.966s2.818,7.966,9.459,7.966c1.469,0,2.762-.211,3.886-.584l2.498,1.585c.197,.125,.447-.052,.394-.279l-.567-2.46c2.36-1.643,3.483-4.234,3.483-6.815Zm-12.73-.81c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275c0,.705-.571,1.275-1.275,1.275Zm6.373,0c-.704,0-1.275-.571-1.275-1.275s.571-1.275,1.275-1.275,1.275,.571,1.275,1.275-.571,1.275-1.275,1.275Z"></path></g></svg>
                微信登录
              </button>
              <button
                className="btn bg-[#03C755] text-white border-[#00b544]"
                onClick={() => handleSocialLogin('line')}
              >
                <svg aria-label="Line logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fillRule="evenodd" strokeLinejoin="round" fill="white"><path fillRule="nonzero" d="M12.91 6.57c.232 0 .42.19.42.42 0 .23-.188.42-.42.42h-1.17v.75h1.17a.42.42 0 1 1 0 .84h-1.59a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42h1.59a.42.42 0 0 1-.002.84h-1.17v.75h1.17zm-2.57 2.01a.421.421 0 0 1-.757.251l-1.63-2.217V8.58a.42.42 0 0 1-.42.42.42.42 0 0 1-.418-.42V5.4a.418.418 0 0 1 .755-.249L9.5 7.366V5.4c0-.23.188-.42.42-.42.23 0 .42.19.42.42v3.18zm-3.828 0c0 .23-.188.42-.42.42a.42.42 0 0 1-.418-.42V5.4c0-.23.188-.42.42-.42.23 0 .418.19.418.42v3.18zM4.868 9h-1.59c-.23 0-.42-.19-.42-.42V5.4c0-.23.19-.42.42-.42.232 0 .42.19.42.42v2.76h1.17a.42.42 0 1 1 0 .84M16 6.87C16 3.29 12.41.376 8 .376S0 3.29 0 6.87c0 3.208 2.846 5.896 6.69 6.405.26.056.615.172.705.394.08.2.053.518.026.722 0 0-.092.565-.113.685-.035.203-.16.79.693.432.854-.36 4.607-2.714 6.285-4.646C15.445 9.594 16 8.302 16 6.87"></path></g></svg>
  LINEでログイン
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                className="btn bg-black text-white border-black"
                onClick={() => handleSocialLogin('github')}
              >
                <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
  Login with GitHub
              </button>
              <button
                className="btn bg-white text-black border-[#e5e5e5]"
                onClick={() => handleSocialLogin('google')}
              >
                 <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center pt-4">
            <p className="text-sm text-base-content/70">
              还没有账号？
              <Link href="/register" className="link link-primary ml-1 text-sm">
                立即注册
              </Link>
            </p>
          </div>

          {/* Terms */}
          <p className="text-xs text-base-content/50 text-center mt-4">
            登录即表示同意
            <button type="button" className="link link-primary text-xs ml-1">
              《用户协议》
            </button>
            和
            <button type="button" className="link link-primary text-xs ml-1">
              《隐私政策》
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}