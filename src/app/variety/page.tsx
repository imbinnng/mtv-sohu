import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TVItem from '@/components/TVItem'

export const metadata: Metadata = {
  title: '综艺 - MTV 视频网站',
  description: '最新最热门的综艺节目',
}

// Mock variety shows data
const varietyData = [
  {
    id: 'variety1',
    title: '奔跑吧',
    description: '热门户外竞技真人秀节目，明星嘉宾参与各种挑战',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
    duration: '90分钟',
    rating: 8.1,
    year: 2023,
    category: '综艺'
  },
  {
    id: 'variety2',
    title: '向往的生活',
    description: '慢综艺节目，明星在乡村体验田园生活',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    duration: '120分钟',
    rating: 8.5,
    year: 2023,
    category: '综艺'
  },
  {
    id: 'variety3',
    title: '极限挑战',
    description: '竞技挑战类真人秀，嘉宾完成各种极限任务',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '90分钟',
    rating: 8.3,
    year: 2023,
    category: '综艺'
  },
  {
    id: 'variety4',
    title: '快乐大本营',
    description: '经典娱乐综艺节目，明星访谈和游戏互动',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '90分钟',
    rating: 7.8,
    year: 2023,
    category: '综艺'
  },
  {
    id: 'variety5',
    title: '中国好声音',
    description: '音乐选秀节目，发掘华语乐坛新声音',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '120分钟',
    rating: 7.9,
    year: 2023,
    category: '综艺'
  },
  {
    id: 'variety6',
    title: '歌手',
    description: '顶级歌手竞技节目，展现音乐才华',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '90分钟',
    rating: 8.7,
    year: 2023,
    category: '综艺'
  }
]

export default function VarietyPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-base-content mb-2">综艺</h1>
            <p className="text-base-content/70">最新最热门的综艺节目</p>
          </div>
          <button className="btn btn-primary">
            筛选排序
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '真人秀', '音乐', '喜剧', '访谈', '竞技'].map((tag) => (
            <button
              key={tag}
              className={`btn btn-sm ${tag === '全部' ? 'btn-primary' : 'btn-outline'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Variety Shows Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {varietyData.map((show) => (
            <TVItem key={show.id} show={show} />
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