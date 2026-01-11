'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface AdBanner {
  id: number
  title: string
  subtitle: string
  imageUrl: string
  link?: string
}

const adBanners: AdBanner[] = [
  {
    id: 1,
    title: '热门剧集推荐',
    subtitle: '《狂飙》全集上线',
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=400&fit=crop',
    link: '/video/1'
  },
  {
    id: 2,
    title: '周末特别推荐',
    subtitle: '经典港剧重现',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=400&fit=crop',
    link: '/video/2'
  },
  {
    id: 3,
    title: '独家首播',
    subtitle: '最新韩剧同步更新',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=400&fit=crop',
    link: '/video/3'
  }
]

export default function AdBannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % adBanners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + adBanners.length) % adBanners.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {/* Slides */}
      <div className="relative h-full">
        {adBanners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${banner.imageUrl})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
                  <p className="text-xl mb-4">{banner.subtitle}</p>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => banner.link && window.open(banner.link, '_blank')}
                  >
                    立即观看
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {adBanners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}