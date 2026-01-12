'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, User, Mail, Lock, Calendar, MapPin } from 'lucide-react'
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back to Login */}
        <div className="mb-6">
          <Button variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            返回登录
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-0.5 ${
                      step < currentStep ? 'bg-primary' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Step Labels */}
          <div className="flex justify-around text-sm text-gray-600 mb-8">
            <span className={currentStep === 1 ? 'text-primary font-semibold' : ''}>基本信息</span>
            <span className={currentStep === 2 ? 'text-primary font-semibold' : ''}>手机验证</span>
            <span className={currentStep === 3 ? 'text-primary font-semibold' : ''}>完善资料</span>
            <span className={currentStep === 4 ? 'text-primary font-semibold' : ''}>注册成功</span>
          </div>

          {/* Registration Form */}
          <Card>
            <CardContent className="pt-6">
              {currentStep === 1 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-2xl font-bold text-center mb-6">创建账号</h2>
                  <p className="text-center text-gray-600 mb-6">加入 MTV，开启精彩视频之旅</p>

                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">用户名</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                      <Input
                        type="text"
                        placeholder="请输入用户名"
                        value={formData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">邮箱地址</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                      <Input
                        type="email"
                        placeholder="请输入邮箱地址"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">密码</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="请输入密码"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">确认密码</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="请再次输入密码"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                        className="pl-10 pr-10"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.agreeTerms}
                        onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                        className="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        我已阅读并同意
                        <Button variant="link" className="text-primary hover:underline p-0 h-auto ml-1">
                          《用户协议》
                        </Button>
                      </span>
                    </label>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.agreePrivacy}
                        onChange={(e) => handleInputChange('agreePrivacy', e.target.checked)}
                        className="mr-2 rounded border-gray-300 text-primary focus:ring-primary"
                        required
                      />
                      <span className="text-sm text-gray-700">
                        我已阅读并同意
                        <Button variant="link" className="text-primary hover:underline p-0 h-auto ml-1">
                          《隐私政策》
                        </Button>
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={!isFormValid()}
                  >
                    下一步
                  </Button>
                </form>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-center mb-6">手机验证</h2>
                  <p className="text-center text-gray-600 mb-6">请输入手机号码完成验证</p>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">手机号码</label>
                    <Input
                      type="tel"
                      placeholder="请输入11位手机号码"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mb-4"
                      required
                    />
                  </div>

                  {/* Verification Code */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <Input
                      type="text"
                      placeholder="请输入6位验证码"
                      value={formData.verificationCode}
                      onChange={(e) => handleInputChange('verificationCode', e.target.value)}
                      maxLength={6}
                      required
                    />
                    <Button 
                      type="button"
                      onClick={handleSendCode}
                      className="h-10"
                    >
                      获取验证码
                    </Button>
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1"
                    >
                      上一步
                    </Button>
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled={!formData.phone || formData.verificationCode.length !== 6}
                      onClick={handleVerifyCode}
                    >
                      验证并继续
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-center mb-6">完善资料</h2>
                  <p className="text-center text-gray-600 mb-6">帮助我们更好地为您推荐内容</p>

                  {/* Birth Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">出生日期</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                      <Input
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">性别</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['男', '女', '保密'].map((gender) => (
                        <label key={gender} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            name="gender"
                            value={gender}
                            checked={formData.gender === gender}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            className="text-primary"
                          />
                          <span className="text-sm">{gender}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">所在地区</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
                      <select
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="pl-10 w-full h-10 border border-gray-300 rounded-md bg-white text-gray-900 focus:ring-primary"
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
                  </div>

                  {/* Buttons */}
                  <div className="flex space-x-3">
                    <Button 
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                      className="flex-1"
                    >
                      上一步
                    </Button>
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled={!formData.birthDate || !formData.gender || !formData.location}
                      onClick={() => setCurrentStep(4)}
                    >
                      完成注册
                    </Button>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">注册成功！</h2>
                  <p className="text-gray-600 mb-6">欢迎加入 MTV 大家庭</p>
                  <div className="space-y-3">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 text-sm font-medium">
                        激活邮件已发送至您的邮箱
                      </p>
                      <p className="text-blue-600 text-xs mt-2">
                        请查收邮件并点击激活链接完成注册
                      </p>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => window.location.href = '/login'}
                    >
                      立即登录
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}