'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Star, Heart, Share2, ThumbsUp, MessageCircle } from 'lucide-react'

interface Comment {
  id: string
  user: string
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
}

const mockComments: Comment[] = [
  {
    id: '1',
    user: '剧迷小王',
    content: '这部剧太精彩了！剧情紧凑，演员演技都在线，强烈推荐！',
    timestamp: '2小时前',
    likes: 128,
    isLiked: false
  },
  {
    id: '2',
    user: '追剧达人',
    content: '男主的表演真的很棒，把角色的内心戏演绎得淋漓尽致。',
    timestamp: '5小时前',
    likes: 89,
    isLiked: false
  },
  {
    id: '3',
    user: '影视评论员',
    content: '制作精良，剧情有深度，是近年来少有的好作品。',
    timestamp: '1天前',
    likes: 234,
    isLiked: true
  }
]

interface CommentsSectionProps {
  videoId: string
}

export default function CommentsSection({ videoId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>(mockComments)
  const [newComment, setNewComment] = useState('')
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(1024)

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        user: '当前用户',
        content: newComment,
        timestamp: '刚刚',
        likes: 0,
        isLiked: false
      }
      setComments([comment, ...comments])
      setNewComment('')
    }
  }

  const handleLikeComment = (commentId: string) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { 
            ...comment, 
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked 
          }
        : comment
    ))
  }

  const handleVideoLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  return (
    <div className="space-y-6">
      {/* Video Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant={isLiked ? "default" : "outline"}
                className={`${isLiked ? 'bg-primary' : ''}`}
                onClick={handleVideoLike}
              >
                <ThumbsUp className="h-4 w-4 mr-2" />
                {likeCount}
              </Button>
              <Button variant="outline">
                <Heart className="h-4 w-4 mr-2" />
                收藏
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="font-semibold">9.2</span>
              <span className="text-gray-500">(2.3k评价)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Comment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-2" />
            发表评论
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="分享你的观后感..."
              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            />
            <div className="flex justify-end">
              <Button 
                onClick={handleSubmitComment}
                disabled={!newComment.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                发表评论
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <Card>
        <CardHeader>
          <CardTitle>精彩评论 ({comments.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium">{comment.user}</span>
                    <span className="text-gray-500 text-sm">{comment.timestamp}</span>
                  </div>
                  <p className="text-gray-800 mb-3">{comment.content}</p>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`${comment.isLiked ? 'text-primary' : 'text-gray-500'}`}
                      onClick={() => handleLikeComment(comment.id)}
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {comment.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      回复
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}