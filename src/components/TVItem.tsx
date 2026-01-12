'use client'

import Link from 'next/link'
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
      <div className="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
        <figure className="relative">
          <img 
            src={show.imageUrl} 
            alt={show.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
          </div>
          <div className="absolute top-2 right-2 badge badge-neutral">
            <Star className="h-3 w-3 mr-1 fill-current" />
            {show.rating}
          </div>
        </figure>
        <div className="card-body p-3">
          <h3 className="card-title text-sm mb-1">{show.title}</h3>
          <p className="text-xs text-base-content/70 mb-2 line-clamp-2">{show.description}</p>
          <div className="flex items-center justify-between text-xs text-base-content/50">
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
        </div>
      </div>
    </Link>
  )
}