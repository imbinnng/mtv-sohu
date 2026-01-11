'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Film, Tv, Music, Gamepad2, BookOpen, Camera } from 'lucide-react'

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  color: string
}

const categories: Category[] = [
  {
    id: 'tv-series',
    name: '电视剧',
    icon: <Tv className="h-8 w-8" />,
    description: '热门电视剧',
    color: 'bg-blue-100 text-blue-600 hover:bg-blue-200'
  },
  {
    id: 'movies',
    name: '电影',
    icon: <Film className="h-8 w-8" />,
    description: '最新电影',
    color: 'bg-red-100 text-red-600 hover:bg-red-200'
  },
  {
    id: 'variety',
    name: '综艺',
    icon: <Music className="h-8 w-8" />,
    description: '娱乐综艺',
    color: 'bg-green-100 text-green-600 hover:bg-green-200'
  },
  {
    id: 'anime',
    name: '动漫',
    icon: <Gamepad2 className="h-8 w-8" />,
    description: '动漫番剧',
    color: 'bg-purple-100 text-purple-600 hover:bg-purple-200'
  },
  {
    id: 'documentary',
    name: '纪录片',
    icon: <BookOpen className="h-8 w-8" />,
    description: '人文纪实',
    color: 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
  },
  {
    id: 'short-video',
    name: '短视频',
    icon: <Camera className="h-8 w-8" />,
    description: '精彩短视频',
    color: 'bg-pink-100 text-pink-600 hover:bg-pink-200'
  }
]

export default function TVCategory() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">视频分类</h2>
          <Button variant="outline" className="text-primary">
            查看全部
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/${category.id}`}>
              <Card className={`cursor-pointer transition-all duration-200 hover:shadow-lg border-0 ${category.color}`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm opacity-75">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}