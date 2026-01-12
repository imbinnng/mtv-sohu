'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Eye, EyeOff, User, Mail, Lock, Calendar, MapPin } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    verificationCode: '',
    birthDate: '',
    gender: '',
    location: '',
    agreeTerms: false,
    agreePrivacy: false
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isVerification, setIsVerification] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Register with:', formData)
    // Handle registration logic here
  }

  const handleSendCode = () => {
    console.log('Send verification code to:', formData.phone)
    // Handle SMS verification
  }

  const handleVerifyCode = () => {
    console.log('Verify code:', formData.verificationCode)
    // Handle code verification
  }

  const isFormValid = () => {
    if (currentStep === 1) {
      return formData.username && formData.email && formData.password && formData.confirmPassword && formData.agreeTerms && formData.agreePrivacy
    } else if (currentStep === 2) {
      return formData.phone && formData.verificationCode
    } else if (currentStep === 3) {
      return formData.birthDate && formData.gender && formData.location
    }
    return false
  }

  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back to Login */}
        <div className="mb-6">
          <button className="btn btn-ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回登录
          </button>
        </div>

        <div className="max-w-md mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep 
                      ? 'bg-primary text-primary-content' 
                      : 'bg-base-300 text-base-content/50'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-0.5 ${
                      step < currentStep ? 'bg-primary' : 'bg-base-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Labels */}
          <div className="flex justify-around text-sm text-base-content/70 mb-8">
            <span className={currentStep === 1 ? 'text-primary font-semibold' : ''}>基本信息</span>
            <span className={currentStep === 2 ? 'text-primary font-semibold' : ''}>手机验证</span>
            <span className={currentStep === 3 ? 'text-primary font-semibold' : ''}>完善资料</span>
            <span className={currentStep === 4 ? 'text-primary font-semibold' : ''}>注册成功</span>
          </div>

          {/* Registration Form */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body pt-6">
              {currentStep === 1 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-center mb-6">创建账号</h2>
                  <p className="text-center text-base-content/70 mb-6">加入 MTV，开启精彩视频之旅</p>

                  {/* Username */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">用户名</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <User className="h-4 w-4 opacity-70" />
                      <input
                        type="text"
                        placeholder="请输入用户名"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="grow"
                        required
                      />
                    </label>
                  </div>

                  {/* Email */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">邮箱地址</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <Mail className="h-4 w-4 opacity-70" />
                      <input
                        type="email"
                        placeholder="请输入邮箱地址"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="grow"
                        required
                      />
                    </label>
                  </div>

                  {/* Password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">密码</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <Lock className="h-4 w-4 opacity-70" />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="请输入密码"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
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

                  {/* Confirm Password */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">确认密码</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <Lock className="h-4 w-4 opacity-70" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="请再次输入密码"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="grow"
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-ghost btn-xs"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </label>
                  </div>

                  {/* Terms */}
                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                        className="checkbox checkbox-primary mr-2"
                        required
                      />
                      <span className="text-sm">
                        我已阅读并同意
                        <button type="button" className="link link-primary ml-1">
                          《用户协议》
                        </button>
                      </span>
                    </label>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreePrivacy}
                        onChange={(e) => handleInputChange('agreePrivacy', e.target.checked)}
                        className="checkbox checkbox-primary mr-2"
                        required
                      />
                      <span className="text-sm">
                        我已阅读并同意
                        <button type="button" className="link link-primary ml-1">
                          《隐私政策》
                        </button>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full"
                    disabled={!isFormValid()}
                  >
                    下一步
                  </button>
                </form>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-center mb-6">手机验证</h2>
                  <p className="text-center text-base-content/70 mb-6">请输入手机号码完成验证</p>

                  {/* Phone Input */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">手机号码</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="请输入11位手机号码"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="input input-bordered w-full"
                      maxLength={11}
                      required
                    />
                  </div>

                  {/* Verification Code */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">验证码</span>
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="请输入6位验证码"
                        value={formData.verificationCode}
                        onChange={(e) => handleInputChange('verificationCode', e.target.value)}
                        maxLength={6}
                        className="input input-bordered flex-1"
                        required
                      />
                      <button 
                        type="button"
                        onClick={handleSendCode}
                        className="btn btn-outline"
                      >
                        获取验证码
                      </button>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button 
                      className="btn btn-outline flex-1"
                      onClick={() => setCurrentStep(1)}
                    >
                      上一步
                    </button>
                    <button 
                      className="btn btn-primary flex-1"
                      disabled={!formData.phone || formData.verificationCode.length !== 6}
                      onClick={handleVerifyCode}
                    >
                      验证并继续
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-center mb-6">完善资料</h2>
                  <p className="text-center text-base-content/70 mb-6">帮助我们更好地为您推荐内容</p>

                  {/* Birth Date */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">出生日期</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                      <Calendar className="h-4 w-4 opacity-70" />
                      <input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="grow"
                        required
                      />
                    </label>
                  </div>

                  {/* Gender */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">性别</span>
                    </label>
                    <div className="flex gap-4">
                      {['男', '女', '保密'].map((gender) => (
                        <label key={gender} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={formData.gender === gender}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            className="radio radio-primary mr-2"
                          />
                          <span className="text-sm">{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">所在地区</span>
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="select select-bordered w-full"
                      required
                    >
                      <option value="">请选择地区</option>
                      <option value="北京">北京</option>
                      <option value="上海">上海</option>
                      <option value="广州">广州</option>
                      <option value="深圳">深圳</option>
                      <option value="杭州">杭州</option>
                      <option value="成都">成都</option>
                      <option value="武汉">武汉</option>
                      <option value="西安">西安</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button 
                      className="btn btn-outline flex-1"
                      onClick={() => setCurrentStep(2)}
                    >
                      上一步
                    </button>
                    <button 
                      className="btn btn-primary flex-1"
                      disabled={!formData.birthDate || !formData.gender || !formData.location}
                      onClick={() => setCurrentStep(4)}
                    >
                      完成注册
                    </button>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-base-content mb-4">注册成功！</h2>
                  <p className="text-base-content/70 mb-6">欢迎加入 MTV 大家庭</p>
                  <div className="space-y-4">
                    <div className="alert alert-info">
                      <Mail className="h-5 w-5" />
                      <div>
                        <p className="font-medium">激活邮件已发送至您的邮箱</p>
                        <p className="text-sm">请查收邮件并点击激活链接完成注册</p>
                      </div>
                    </div>
                    <button 
                      className="btn btn-primary w-full"
                      onClick={() => window.location.href = '/login'}
                    >
                      立即登录
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}