import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TVItem from '@/components/TVItem'
import { Button } from '@/components/ui/button'

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
    title: '乘风破浪的姐姐',
    description: '女性励志成长综艺，展现30+女性的魅力',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '100分钟',
    rating: 8.3,
    year: 2023,
    category: '综艺'
  },
  {
    id: 'variety4',
    title: '明星大侦探',
    description: '推理破案综艺，明星嘉宾一起解开谜题',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '90分钟',
    rating: 9.0,
    year: 2023,
    category: '综艺'
  },
  {
    id: 'variety5',
    title: '吐槽大会',
    description: '喜剧脱口秀节目，用幽默方式点评时事热点',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '60分钟',
    rating: 7.8,
    year: 2023,
    category: '综艺'
  },
  {
    id: 'variety6',
    title: '中国好声音',
    description: '音乐选秀节目，发掘华语乐坛新声音',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '90分钟',
    rating: 7.5,
    year: 2023,
    category: '综艺'
  }
]

export default function VarietyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">综艺</h1>
            <p className="text-gray-600">最新最热门的综艺节目</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            筛选排序
          </Button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '真人秀', '音乐', '访谈', '喜剧', '选秀', '亲子'].map((tag) => (
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

        {/* Variety Shows Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {varietyData.map((show) => (
            <TVItem key={show.id} show={show} />
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