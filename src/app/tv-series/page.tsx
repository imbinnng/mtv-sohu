import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TVItem from '@/components/TVItem'

export const metadata: Metadata = {
  title: '电视剧 - MTV 视频网站',
  description: '最新最热门的电视剧资源',
}

// Mock TV series data
const tvSeriesData = [
  {
    id: '1',
    title: '狂飙',
    description: '扫黑除恶题材电视剧，讲述一线刑警安欣与黑恶势力斗争的故事',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
    duration: '45分钟',
    rating: 9.2,
    year: 2023,
    category: '电视剧',
    episodes: 39
  },
  {
    id: '2',
    title: '漫长的季节',
    description: '一部充满怀旧色彩的悬疑剧，跨越20年的命案追凶',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    duration: '60分钟',
    rating: 8.9,
    year: 2023,
    category: '电视剧',
    episodes: 12
  },
  {
    id: '3',
    title: '三体',
    description: '根据刘慈欣同名小说改编的科幻电视剧',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '50分钟',
    rating: 8.7,
    year: 2023,
    category: '电视剧',
    episodes: 30
  },
  {
    id: '4',
    title: '梦华录',
    description: '古装爱情剧，改编自关汉卿的《赵盼儿风月救风尘》',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '45分钟',
    rating: 8.8,
    year: 2022,
    category: '电视剧',
    episodes: 40
  },
  {
    id: '5',
    title: '去有风的地方',
    description: '都市女性治愈剧，展现云南大理的田园风光',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '45分钟',
    rating: 8.5,
    year: 2023,
    category: '电视剧',
    episodes: 40
  },
  {
    id: '6',
    title: '警察荣誉',
    description: '基层派出所民警的日常工作和生活写照',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '45分钟',
    rating: 8.6,
    year: 2022,
    category: '电视剧',
    episodes: 38
  }
]

export default function TVSeriesPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-base-content mb-2">电视剧</h1>
            <p className="text-base-content/70">最新最热门的电视剧资源</p>
          </div>
          <button className="btn btn-primary">
            筛选排序
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '国产剧', '韩剧', '美剧', '英剧', '日剧', '泰剧'].map((tag) => (
            <button
              key={tag}
              className={`btn btn-sm ${tag === '全部' ? 'btn-primary' : 'btn-outline'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* TV Series Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {tvSeriesData.map((series) => (
            <TVItem key={series.id} show={series} />
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