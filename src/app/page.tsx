import Header from '@/components/Header'
import AdBannerSlider from '@/components/AdBannerSlider'
import TVCategory from '@/components/TVCategory'
import RecommendedShows from '@/components/RecommendedShows'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Ad Banner Slider */}
        <section className="container mx-auto px-4 py-8">
          <AdBannerSlider />
        </section>

        {/* TV Category Section */}
        <TVCategory />

        {/* Recommended Shows Section */}
        <RecommendedShows />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold">MTV</span>
              </div>
              <p className="text-gray-400 text-sm">
                提供最新最热的电视剧、电影、综艺等视频内容
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">热门剧集</a></li>
                <li><a href="#" className="hover:text-white">最新电影</a></li>
                <li><a href="#" className="hover:text-white">综艺娱乐</a></li>
                <li><a href="#" className="hover:text-white">动漫番剧</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">帮助中心</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">使用指南</a></li>
                <li><a href="#" className="hover:text-white">常见问题</a></li>
                <li><a href="#" className="hover:text-white">联系客服</a></li>
                <li><a href="#" className="hover:text-white">意见反馈</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">关注我们</h3>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-xs">微</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-xs">博</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="text-xs">抖</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 MTV. All rights reserved. | 隐私政策 | 服务条款</p>
          </div>
        </div>
      </footer>
    </div>
  )
}