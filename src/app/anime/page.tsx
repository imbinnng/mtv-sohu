import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TVItem from '@/components/TVItem'

export const metadata: Metadata = {
  title: '动漫 - MTV 视频网站',
  description: '最新最热门的动漫番剧',
}

// Mock anime data
const animeData = [
  {
    id: 'anime1',
    title: '鬼灭之刃',
    description: '大正时代，少年炭治郎为了拯救变成鬼的妹妹而努力',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 9.0,
    year: 2023,
    category: '动漫',
    episodes: 26
  },
  {
    id: 'anime2',
    title: '间谍过家家',
    description: '间谍父亲为完成任务与杀手女孩组成假家庭的喜剧',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 8.8,
    year: 2023,
    category: '动漫',
    episodes: 25
  },
  {
    id: 'anime3',
    title: '进击的巨人',
    description: '人类与巨人的生存斗争，充满热血与悲壮',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 9.1,
    year: 2023,
    category: '动漫',
    episodes: 87
  },
  {
    id: 'anime4',
    title: '咒术回战',
    description: '高中生虎杖悠仁卷入咒术世界的冒险故事',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 8.7,
    year: 2023,
    category: '动漫',
    episodes: 24
  },
  {
    id: 'anime5',
    title: '一拳超人',
    description: '埼玉老师一拳就能解决任何对手的搞笑热血动漫',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 8.9,
    year: 2023,
    category: '动漫',
    episodes: 24
  },
  {
    id: 'anime6',
    title: '排球少年',
    description: '高中生日向翔阳在排球部成长的热血故事',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 8.6,
    year: 2023,
    category: '动漫',
    episodes: 25
  }
]

export default function AnimePage() {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-base-content mb-2">动漫</h1>
            <p className="text-base-content/70">最新最热门的动漫番剧</p>
          </div>
          <button className="btn btn-primary">
            筛选排序
          </button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '热血', '治愈', '搞笑', '战斗', '校园'].map((tag) => (
            <button
              key={tag}
              className={`btn btn-sm ${tag === '全部' ? 'btn-primary' : 'btn-outline'}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Anime Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {animeData.map((anime) => (
            <TVItem key={anime.id} show={anime} />
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