import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import VideoPlayer from '@/components/VideoPlayer'
import CommentsSection from '@/components/CommentsSection'
import { Star, Calendar, Clock, User } from 'lucide-react'

interface VideoDetailProps {
  params: Promise<{
    id: string
  }>
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
  tags: ['警匪', '悬疑', '剧情', '犯罪']
}

// Mock related videos
const relatedVideos = [
  {
    id: '2',
    title: '漫长的季节',
    description: '一部充满怀旧色彩的悬疑剧',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop',
    rating: 8.9,
    year: 2023
  },
  {
    id: '3',
    title: '三体',
    description: '根据刘慈欣同名小说改编',
    imageUrl: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop',
    rating: 8.7,
    year: 2023
  },
  {
    id: '4',
    title: '梦华录',
    description: '古装爱情剧，改编自小说',
    imageUrl: 'https://images.unsplash.com/photo-1516214104703-d870798faf8f?w=300&h=400&fit=crop',
    rating: 8.8,
    year: 2023
  }
]

export async function generateMetadata({ params }: VideoDetailProps): Promise<Metadata> {
  return {
    title: `${videoData.title} - MTV 视频网站`,
    description: videoData.description,
  }
}

export default async function VideoDetail({ params }: VideoDetailProps) {
  const { id } = await params
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <VideoPlayer 
              videoUrl={videoData.videoUrl} 
              title={videoData.title}
              poster={videoData.imageUrl}
            />

            {/* Video Info */}
            <div className="card bg-base-100 shadow-lg mt-6">
              <div className="card-body">
                <h1 className="text-3xl font-bold mb-4">{videoData.title}</h1>
                
                {/* Video Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 text-warning fill-current" />
                    <span className="font-semibold">{videoData.rating}</span>
                  </div>
                  <span className="text-base-content/70">{videoData.year}</span>
                  <span className="text-base-content/70">{videoData.duration}</span>
                  <span className="text-base-content/70">{videoData.episodes}集</span>
                </div>

                {/* Video Description */}
                <p className="text-base-content mb-4">{videoData.description}</p>

                {/* Cast & Crew */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-base-content/70">导演: </span>
                    <span className="text-sm font-medium">{videoData.director}</span>
                  </div>
                  <div>
                    <span className="text-sm text-base-content/70">主演: </span>
                    <span className="text-sm font-medium">{videoData.actors.join(', ')}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {videoData.tags.map((tag) => (
                    <span key={tag} className="badge badge-neutral">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Episodes */}
            <div className="card bg-base-100 shadow-lg my-6">
              <div className="card-body">
                <h2 className="card-title mb-4">选集</h2>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
                  {Array.from({ length: videoData.episodes }, (_, i) => (
                    <button 
                      key={i + 1}
                      className={`btn btn-sm ${i === 0 ? 'btn-primary' : 'btn-accent'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <CommentsSection videoId={id} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Videos */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title mb-4">相关视频</h2>
                <div className="space-y-4">
                  {relatedVideos.map((video) => (
                    <div key={video.id} className="flex gap-3 cursor-pointer group">
                      <div className="w-24 h-16 bg-base-300 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={video.imageUrl} 
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-xs text-base-content/50 line-clamp-1">
                          {video.description}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Star className="h-3 w-3 text-warning fill-current" />
                          <span className="text-xs">{video.rating}</span>
                          <span className="text-xs text-base-content/50">{video.year}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Actions */}
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title mb-4">操作</h2>
                <div className="space-y-3">
                  <button className="btn btn-outline w-full">
                    <User className="h-4 w-4 mr-2" />
                    订阅频道
                  </button>
                  <button className="btn btn-outline w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    添加到收藏
                  </button>
                  <button className="btn btn-outline w-full">
                    <Clock className="h-4 w-4 mr-2" />
                    稍后观看
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}