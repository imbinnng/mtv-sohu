'use client'

import TVItem from './TVItem'

interface TVShow {
  id: string
  title: string
  description: string
  imageUrl: string
  duration: string
  rating: number
  year: number
  category: string
  episodes?: number
}

const recommendedShows: TVShow[] = [
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
    id: '5',
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

export default function RecommendedShows() {
  return (
    <section className="py-12 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-base-content">推荐剧集</h2>
          <button className="btn btn-outline">
            查看更多
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {recommendedShows.map((show) => (
            <TVItem key={show.id} show={show} />
          ))}
        </div>
      </div>
    </section>
  )
}