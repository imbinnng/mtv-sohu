'use client'

export default function TestPage() {
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <h1 className="text-3xl font-bold mb-8">daisyUI 测试页面</h1>
      
      {/* 按钮测试 */}
      <div className="card bg-base-100 shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">按钮测试</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
          <button className="btn btn-error">Error</button>
          <button className="btn btn-success">Success</button>
        </div>
      </div>

      {/* 卡片测试 */}
      <div className="card bg-base-100 shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">卡片测试</h2>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* 输入框测试 */}
      <div className="card bg-base-100 shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">输入框测试</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            <span className="label-text-alt">Email address</span>
          </label>
        </div>
      </div>

      {/* Alert测试 */}
      <div className="card bg-base-100 shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Alert测试</h2>
        <div className="alert alert-info">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Info alert! This is an important message.</span>
        </div>
      </div>
    </div>
  )
}