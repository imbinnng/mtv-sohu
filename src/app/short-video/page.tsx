import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TVItem from '@/components/TVItem'

export const metadata: Metadata = {
  title: '短视频 - MTV 视频网站',
  description: '最新最热门的短视频内容',
}

// Mock short video data
const shortVideoData = [
  {
    id: 'short1',
    title: '搞笑日常',
    description: '生活中的搞笑瞬间，让你开怀一笑',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
    duration: '2分钟',
    rating: 8.5,
    year: 2023,
    category: '短视频'
  },
  {
    id: 'short2',
    title: '美食制作',
    description: '简单易学的美食制作教程',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    duration: '3分钟',
    rating: 8.8,
    year: 2023,
    category: '短视频'
  },
  {
    id: 'short3',
    title: '旅行vlog',
    description: '世界各地旅行记录，带你看风景',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '5分钟',
    rating: 8.7,
    year: 2023,
    category: '短视频'
  },
  {
    id: 'short4',
    title: '健身教程',
    description: '专业健身教练带你一起锻炼',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '4分钟',
    rating: 8.6,
    year: 2023,
    category: '短视频'
  },
  {
    id: 'short5',
    title: '宠物日常',
    description: '可爱宠物的搞笑日常记录',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '2分钟',
    rating: 8.9,
    year: 2023,
    category: '短视频'
  },
  {
    id: 'short6',
    title: '技能分享',
    description: '实用生活小技巧和技能分享',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '3分钟',
    rating: 8.4,
    year: 2023,
    category: '短视频'
  }
]

export default function ShortVideoPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-base-content mb-2">短视频</h1>
            <p className="text-base-content/70">最新最热门的短视频内容</p>
          </div>
          <button className="btn btn-primary">
            筛选排序
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '搞笑', '美食', '旅行', '健身', '宠物'].map((tag) => (
            <button
              key={tag}
              className={`btn btn-sm ${tag === '全部' ? 'btn-primary' : 'btn-outline'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Short Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {shortVideoData.map((video) => (
            <TVItem key={video.id} show={video} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <button className="btn btn-outline px-8">
            加载更多
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}