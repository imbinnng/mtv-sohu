import { Metadata } from 'next'
import Header from '@/components/Header'
import TVItem from '@/components/TVItem'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '动漫 - MTV 视频网站',
  description: '最新最热门的动漫番剧',
}

// Mock anime data
const animeData = [
  {
    id: 'anime1',
    title: '鬼灭之刃',
    description: '大正时代，少年炭治郎为了让变成鬼的妹妹祢豆子变回人类而踏上征程',
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
    description: '间谍父亲为完成任务而组建家庭，却不知妻子是杀手，女儿有读心术',
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
    description: '人类与巨人的生存之战，真相层层揭晓的史诗级作品',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 9.2,
    year: 2023,
    category: '动漫',
    episodes: 87
  },
  {
    id: 'anime4',
    title: '咒术回战',
    description: '高中生虎杖悠仁为拯救他人而吞下特级咒物，从此卷入咒术世界',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 8.5,
    year: 2023,
    category: '动漫',
    episodes: 24
  },
  {
    id: 'anime5',
    title: '国王排名',
    description: '弱小的王子波吉为了成为最伟大的国王而踏上冒险旅程',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 8.9,
    year: 2023,
    category: '动漫',
    episodes: 23
  },
  {
    id: 'anime6',
    title: '辉夜大小姐想让我告白',
    description: '精英学生会长的恋爱头脑战，谁能先告白谁就输了',
    imageUrl: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=400&fit=crop',
    duration: '24分钟',
    rating: 8.3,
    year: 2023,
    category: '动漫',
    episodes: 37
  }
]

export default function AnimePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">动漫</h1>
            <p className="text-gray-600">最新最热门的动漫番剧</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            筛选排序
          </Button>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['全部', '热血', '恋爱', '科幻', '校园', '冒险', '悬疑'].map((tag) => (
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

        {/* Anime Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {animeData.map((anime) => (
            <TVItem key={anime.id} show={anime} />
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