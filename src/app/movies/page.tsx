import { Metadata } from 'next'
import Header from '@/components/Header'
import TVItem from '@/components/TVItem'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '电影 - MTV 视频网站',
  description: '最新最热门的电影资源',
}

// Mock movies data
const moviesData = [
  {
    id: 'movie1',
    title: '流浪地球2',
    description: '中国科幻巨制，展现人类为拯救地球的史诗级冒险',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
    duration: '173分钟',
    rating: 8.3,
    year: 2023,
    category: '电影'
  },
  {
    id: 'movie2',
    title: '满江红',
    description: '张艺谋执导的古装悬疑电影，南宋绍兴年间，岳飞死后四年',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    duration: '159分钟',
    rating: 7.9,
    year: 2023,
    category: '电影'
  },
  {
    id: 'movie3',
    title: '无名',
    description: '程耳执导的谍战片，讲述地下工作者与敌人斗智斗勇的故事',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '128分钟',
    rating: 6.8,
    year: 2023,
    category: '电影'
  },
  {
    id: 'movie4',
    title: '深海',
    description: '国产动画电影，一个少女在神秘海底世界中追寻真相',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '112分钟',
    rating: 7.3,
    year: 2023,
    category: '电影'
  },
  {
    id: 'movie5',
    title: '交换人生',
    description: '奇幻喜剧片，讲述一次意外交换人生的奇妙故事',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '108分钟',
    rating: 6.5,
    year: 2023,
    category: '电影'
  },
  {
    id: 'movie6',
    title: '熊出没·伴我熊芯',
    description: '熊出没系列动画电影，适合全家观看',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '95分钟',
    rating: 7.1,
    year: 2023,
    category: '电影'
  }
]

export default function MoviesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">电影</h1>
            <p className="text-gray-600">最新最热门的电影资源</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            筛选排序
          </Button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '动作片', '喜剧片', '爱情片', '科幻片', '恐怖片', '动画片'].map((tag) => (
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

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {moviesData.map((movie) => (
            <TVItem key={movie.id} show={movie} />
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