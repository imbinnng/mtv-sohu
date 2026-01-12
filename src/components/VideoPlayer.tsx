'use client'

import { useState } from 'react'
import { Play, Pause, Volume2, Maximize, Settings } from 'lucide-react'

interface VideoPlayerProps {
  videoUrl: string
  title: string
  poster?: string
}

export default function VideoPlayer({ videoUrl, title, poster }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const togglePlay = () => {
    const video = document.getElementById('video-player') as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume)
    const video = document.getElementById('video-player') as HTMLVideoElement
    if (video) {
      video.volume = newVolume
    }
  }

  const toggleFullscreen = () => {
    const video = document.getElementById('video-player') as HTMLVideoElement
    if (video) {
      if (!isFullscreen) {
        video.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="relative w-full bg-black rounded-lg overflow-hidden">
        <video
          id="video-player"
          className="w-full aspect-video"
          poster={poster}
          onLoadedMetadata={(e) => {
            const video = e.target as HTMLVideoElement
            setDuration(video.duration)
          }}
          onTimeUpdate={(e) => {
            const video = e.target as HTMLVideoElement
            setCurrentTime(video.currentTime)
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play/Pause Overlay Button */}
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
          onClick={togglePlay}
        >
          <button className="btn btn-circle btn-ghost bg-white/20 hover:bg-white/30 text-white">
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
          </button>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          {/* Progress Bar */}
          <div className="mb-3">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={(e) => {
                const newTime = parseFloat(e.target.value)
                setCurrentTime(newTime)
                const video = document.getElementById('video-player') as HTMLVideoElement
                if (video) {
                  video.currentTime = newTime
                }
              }}
              className="range range-primary range-xs"
            />
            <div className="flex justify-between text-xs text-white mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                className="btn btn-ghost btn-sm text-white hover:bg-white/20"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>

              {/* Volume Control */}
              <div className="flex items-center space-x-2">
                <Volume2 className="h-5 w-5 text-white" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="range range-primary range-xs w-20"
                />
              </div>

              <span className="text-white text-sm">{title}</span>
            </div>

            <div className="flex items-center space-x-2">
              <button className="btn btn-ghost btn-sm text-white hover:bg-white/20">
                <Settings className="h-5 w-5" />
              </button>
              <button
                className="btn btn-ghost btn-sm text-white hover:bg-white/20"
                onClick={toggleFullscreen}
              >
                <Maximize className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}