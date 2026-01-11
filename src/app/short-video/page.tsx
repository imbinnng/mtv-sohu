import { Metadata } from 'next'
import Header from '@/components/Header'
import TVItem from '@/components/TVItem'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '短视频 - MTV 视频网站',
  description: '最新最热门的短视频内容',
}

// Mock short video data
const shortVideoData = [
  {
    id: 'short1',
    title: '搞笑日常：猫咪的迷惑行为',
    description: '记录家中猫咪的各种可爱又搞笑的瞬间',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
    duration: '0:45',
    rating: 8.5,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short2',
    title: '美食制作：5分钟家常菜',
    description: '简单易学的家常菜制作教程，新手也能做出美味',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    duration: '1:30',
    rating: 8.2,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short3',
    title: '旅行vlog：周末小众景点',
    description: '发现城市周边的小众旅行目的地，人少景美',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '2:15',
    rating: 8.8,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short4',
    title: '健身教学：办公室拉伸',
    description: '上班族必备的办公室拉伸动作，缓解疲劳',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '3:20',
    rating: 8.1,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short5',
    title: '手工DIY：旧物改造',
    description: '将家里的旧物品改造成实用装饰品',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '1:45',
    rating: 8.3,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short6',
    title: '宠物日常：狗狗训练技巧',
    description: '训练狗狗基本指令的实用方法',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '2:50',
    rating: 8.6,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short7',
    title: '时尚穿搭：春季搭配',
    description: '春季时尚穿搭指南，教你搭配技巧',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=400&fit=crop',
    duration: '1:15',
    rating: 7.9,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short8',
    title: '科技测评：新款手机体验',
    description: '最新款手机的真实使用体验分享',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop',
    duration: '4:30',
    rating: 8.4,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short9',
    title: '摄影技巧：手机摄影',
    description: '用手机拍出大片感的实用技巧',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=400&fit=crop',
    duration: '2:00',
    rating: 8.7,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short10',
    title: '音乐分享：吉他弹唱',
    description: '治愈系吉他弹唱，放松心情',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=400&fit=crop',
    duration: '3:15',
    rating: 8.5,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short11',
    title: ' gardening: 阳台种植',
    description: '小阳台也能种植新鲜蔬菜的方法',
    imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=400&fit=crop',
    duration: '2:30',
    rating: 8.0,
    year: 2024,
    category: '短视频'
  },
  {
    id: 'short12',
    title: '知识科普：趣味小知识',
    description: '日常生活中的趣味科学知识',
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop',
    duration: '1:20',
    rating: 8.3,
    year: 2024,
    category: '短视频'
  }
]

export default function ShortVideoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">短视频</h1>
            <p className="text-gray-600">最新最热门的短视频内容</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            筛选排序
          </Button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '搞笑', '美食', '旅行', '健身', '手工', '时尚', '音乐', '知识'].map((tag) => (
            <Button
              key={tag}
              variant={tag === '全部' ? 'default' : 'outline'}
              size="sm"
              className="text-sm"
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Short Videos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {shortVideoData.map((video) => (
            <TVItem key={video.id} show={video} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            加载更多
          </Button>
        </div>
      </main>
    </div>
  )
}