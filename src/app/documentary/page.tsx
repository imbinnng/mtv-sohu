import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TVItem from '@/components/TVItem'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '纪录片 - MTV 视频网站',
  description: '最新最热门的纪录片资源',
}

// Mock documentary data
const documentaryData = [
  {
    id: 'doc1',
    title: '舌尖上的中国',
    description: '中华美食文化纪录片，展现中国各地的美食传统',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
    duration: '50分钟',
    rating: 9.1,
    year: 2023,
    category: '纪录片',
    episodes: 8
  },
  {
    id: 'doc2',
    title: '地球脉动',
    description: 'BBC出品，展现地球上各种生物的生存状态',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    duration: '60分钟',
    rating: 9.5,
    year: 2023,
    category: '纪录片',
    episodes: 6
  },
  {
    id: 'doc3',
    title: '河西走廊',
    description: '展现丝绸之路历史文化的史诗级纪录片',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '50分钟',
    rating: 9.0,
    year: 2023,
    category: '纪录片',
    episodes: 10
  },
  {
    id: 'doc4',
    title: '蓝色星球',
    description: '探索海洋世界的奥秘，展现海洋生物的多样性',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '60分钟',
    rating: 9.3,
    year: 2023,
    category: '纪录片',
    episodes: 7
  },
  {
    id: 'doc5',
    title: '如果国宝会说话',
    description: '讲述中国国宝文物背后的故事',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '5分钟',
    rating: 8.8,
    year: 2023,
    category: '纪录片',
    episodes: 100
  },
  {
    id: 'doc6',
    title: '人类星球',
    description: '展现人类在不同环境下的生存智慧',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '60分钟',
    rating: 8.9,
    year: 2023,
    category: '纪录片',
    episodes: 8
  }
]

export default function DocumentaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">纪录片</h1>
            <p className="text-gray-600">最新最热门的纪录片资源</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            筛选排序
          </Button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '自然', '历史', '人文', '科技', '社会', '美食'].map((tag) => (
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

        {/* Documentary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {documentaryData.map((doc) => (
            <TVItem key={doc.id} show={doc} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            加载更多
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}