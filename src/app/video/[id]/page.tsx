import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VideoPlayer from '@/components/VideoPlayer'
import CommentsSection from '@/components/CommentsSection'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Calendar, Clock, User } from 'lucide-react'

interface VideoDetailProps {
  params: {
    id: string
  }
}

// Mock video data - in a real app, this would come from an API
const videoData = {
  id: '1',
  title: '狂飙',
  description: '扫黑除恶题材电视剧，讲述一线刑警安欣与黑恶势力斗争的精彩故事。该剧以真实案例为背景，展现了正义与邪恶的激烈较量，以及扫黑除恶专项斗争的重大成果。',
  imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&h=600&fit=crop',
  videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
  rating: 9.2,
  year: 2023,
  duration: '45分钟',
  episodes: 39,
  category: '电视剧',
  director: '徐纪周',
  actors: ['张译', '张颂文', '李一桐', '张志坚'],
  tags: ['扫黑除恶', '刑侦', '正剧', '现实主义']
}

export async function generateMetadata({ params }: VideoDetailProps): Promise<Metadata> {
  return {
    title: `${videoData.title} - MTV 视频网站`,
    description: videoData.description,
  }
}

export default function VideoDetailPage({ params }: VideoDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Video Player */}
            <VideoPlayer 
              videoUrl={videoData.videoUrl}
              title={videoData.title}
              poster={videoData.imageUrl}
            />

            {/* Video Info */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{videoData.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1 fill-current" />
                        {videoData.rating}
                      </div>
                      <span>{videoData.year}</span>
                      <span>{videoData.category}</span>
                      <span>共{videoData.episodes}集</span>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    全部播放
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{videoData.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {videoData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Episode List */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-3">选集播放</h3>
                  <div className="grid grid-cols-8 gap-2">
                    {Array.from({ length: Math.min(videoData.episodes, 16) }, (_, i) => (
                      <Button
                        key={i + 1}
                        variant={i === 0 ? "default" : "outline"}
                        size="sm"
                        className="text-xs"
                      >
                        {i + 1}
                      </Button>
                    ))}
                    {videoData.episodes > 16 && (
                      <Button variant="outline" size="sm" className="text-xs">
                        更多
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <CommentsSection videoId={params.id} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Cast & Crew */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">演职人员</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">导演: {videoData.director}</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">主演:</p>
                  <div className="flex flex-wrap gap-2">
                    {videoData.actors.map((actor) => (
                      <Badge key={actor} variant="outline">
                        {actor}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Video Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">视频信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">上映时间: {videoData.year}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">单集时长: {videoData.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">评分: {videoData.rating}</span>
                </div>
              </CardContent>
            </Card>

            {/* Related Videos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">相关推荐</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {['漫长的季节', '三体', '去有风的地方'].map((title) => (
                    <div key={title} className="flex space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <div className="w-20 h-14 bg-gray-300 rounded flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">{title}</p>
                        <p className="text-xs text-gray-500">1.2万次播放</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  )
}