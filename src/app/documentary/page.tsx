import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TVItem from '@/components/TVItem'

export const metadata: Metadata = {
  title: '纪录片 - MTV 视频网站',
  description: '最新最热门的纪录片资源',
}

// Mock documentary data
const documentaryData = [
  {
    id: 'doc1',
    title: '地球脉动',
    description: 'BBC制作的自然纪录片，展现地球壮美景观',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
    duration: '60分钟',
    rating: 9.5,
    year: 2023,
    category: '纪录片'
  },
  {
    id: 'doc2',
    title: '舌尖上的中国',
    description: '中国美食文化纪录片，探寻各地美食传统',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    duration: '50分钟',
    rating: 9.2,
    year: 2023,
    category: '纪录片'
  },
  {
    id: 'doc3',
    title: '蓝色星球',
    description: '海洋生物纪录片，探索神秘的海底世界',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '60分钟',
    rating: 9.3,
    year: 2023,
    category: '纪录片'
  },
  {
    id: 'doc4',
    title: '人类星球',
    description: '展现人类在不同环境下的生存智慧',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '60分钟',
    rating: 8.9,
    year: 2023,
    category: '纪录片'
  },
  {
    id: 'doc5',
    title: '故宫',
    description: '讲述紫禁城六百年历史的纪录片',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '50分钟',
    rating: 9.1,
    year: 2023,
    category: '纪录片'
  },
  {
    id: 'doc6',
    title: '航拍中国',
    description: '从空中俯瞰中国大地的壮美景观',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '50分钟',
    rating: 8.8,
    year: 2023,
    category: '纪录片'
  }
]

export default function DocumentaryPage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-base-content mb-2">纪录片</h1>
            <p className="text-base-content/70">最新最热门的纪录片资源</p>
          </div>
          <button className="btn btn-primary">
            筛选排序
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '自然', '历史', '美食', '科技', '人文'].map((tag) => (
            <button
              key={tag}
              className={`btn btn-sm ${tag === '全部' ? 'btn-primary' : 'btn-outline'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Documentary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {documentaryData.map((doc) => (
            <TVItem key={doc.id} show={doc} />
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