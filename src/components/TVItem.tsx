'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Play, Clock } from 'lucide-react'

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

interface TVItemProps {
  show: TVShow
}

export default function TVItem({ show }: TVItemProps) {
  return (
    <Link href={`/video/${show.id}`}>
      <Card className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 overflow-hidden group">
        <div className="relative">
          <img 
            src={show.imageUrl} 
            alt={show.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
            <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-200" />
          </div>
          <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center">
            <Star className="h-3 w-3 mr-1 fill-current" />
            {show.rating}
          </div>
        </div>
        <CardContent className="p-3">
          <h3 className="font-semibold text-sm mb-1 line-clamp-1">{show.title}</h3>
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">{show.description}</p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              {show.duration}
            </div>
            <span>{show.year}</span>
          </div>
          {show.episodes && (
            <div className="mt-2 text-xs text-primary font-medium">
              共{show.episodes}集
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}