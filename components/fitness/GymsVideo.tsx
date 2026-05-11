"use client"
import { Search, SlidersHorizontal, Play, MoreVertical, Heart, Bookmark, Share2, MapPin, Star, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface GymsVideoProps {
  onNavigate: (screen: string, data?: any) => void;
}

const categories = [
  'Strength',
  'Fat Loss',
  'CrossFit',
  'Yoga',
  'Rehab',
  'Beginner',
];

const gymVideos = [
  {
    id: 1,
    title: 'Leg Day at IronCore Gym',
    gymName: 'IronCore Fitness',
    gymLogo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100',
    thumbnail: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '12:45',
    views: '12K',
    timeAgo: '2 days ago',
    cultPartner: true,
    rating: 4.7,
    category: 'Strength'
  },
  {
    id: 2,
    title: 'Morning Flow Yoga Session',
    gymName: 'Flow Yoga Studio',
    gymLogo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100',
    thumbnail: 'https://images.unsplash.com/photo-1599447421376-611783057464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDE2OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '45:20',
    views: '8.5K',
    timeAgo: '5 days ago',
    cultPartner: true,
    rating: 4.9,
    category: 'Yoga'
  },
  {
    id: 3,
    title: 'CrossFit WOD Breakdown',
    gymName: 'Elite CrossFit Hub',
    gymLogo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    thumbnail: 'https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwY3Jvc3NmaXR8ZW58MXx8fHwxNzY4NDg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '18:30',
    views: '15K',
    timeAgo: '1 week ago',
    cultPartner: true,
    rating: 4.8,
    category: 'CrossFit'
  },
  {
    id: 4,
    title: 'Physical Therapy & Rehab Exercises',
    gymName: 'Strength Labs',
    gymLogo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    thumbnail: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1OTY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '22:15',
    views: '6.2K',
    timeAgo: '3 days ago',
    cultPartner: true,
    rating: 4.6,
    category: 'Rehab',
    isRehab: true
  },
  {
    id: 5,
    title: 'HIIT Fat Burning Workout',
    gymName: 'PowerHouse Fitness',
    gymLogo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
    thumbnail: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '15:00',
    views: '20K',
    timeAgo: '4 days ago',
    cultPartner: true,
    rating: 4.8,
    category: 'Fat Loss'
  },
];

export function GymsVideo({ onNavigate }: GymsVideoProps) {
  const [activeCategory, setActiveCategory] = useState('Strength');
  const [likedVideos, setLikedVideos] = useState<number[]>([]);
  const [savedVideos, setSavedVideos] = useState<number[]>([]);

  const toggleLike = (videoId: number) => {
    setLikedVideos(prev => 
      prev.includes(videoId) ? prev.filter(id => id !== videoId) : [...prev, videoId]
    );
  };

  const toggleSave = (videoId: number) => {
    setSavedVideos(prev => 
      prev.includes(videoId) ? prev.filter(id => id !== videoId) : [...prev, videoId]
    );
  };

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl mb-1">Collaborated Gyms</h1>
            <p className="text-sm text-gray-500">Train with gyms. Learn from real workouts.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all">
              <SlidersHorizontal className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Chips */}
      <div className="px-6 mb-6">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-cyan-500/20 border-2 border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/30'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Video Feed */}
      <div className="px-6 space-y-6">
        {gymVideos
          .filter(video => activeCategory === 'Strength' || video.category === activeCategory)
          .map((video) => (
          <div
            key={video.id}
            className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all group"
          >
            {/* Video Thumbnail */}
            <div 
              className="relative aspect-video cursor-pointer"
              onClick={() => onNavigate('video-player', video)}
            >
              <ImageWithFallback
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              
              {/* Gym Logo - Top Left */}
              <div className="absolute top-3 left-3">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                  <ImageWithFallback
                    src={video.gymLogo}
                    alt={video.gymName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Verified Badge - Top Right */}
              {video.cultPartner && (
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full border border-green-500/30">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs text-green-400">Verified</span>
                  </div>
                </div>
              )}

              {/* Rehab/Emergency Badge */}
              {video.isRehab && (
                <div className="absolute top-12 right-3">
                  <div className="px-2 py-1 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/40 animate-pulse">
                    <span className="text-xs text-red-300">Rehab</span>
                  </div>
                </div>
              )}

              {/* Play Icon - Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-cyan-500/30 backdrop-blur-sm flex items-center justify-center border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/40 group-hover:scale-110 group-hover:shadow-cyan-500/60 transition-all animate-pulse">
                  <Play className="w-8 h-8 text-cyan-400 fill-cyan-400 ml-1" />
                </div>
              </div>

              {/* Duration Badge - Bottom Right */}
              <div className="absolute bottom-3 right-3">
                <div className="px-2 py-1 bg-black/80 backdrop-blur-sm rounded text-xs">
                  {video.duration}
                </div>
              </div>
            </div>

            {/* Video Info */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base mb-1 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <span>{video.gymName}</span>
                    {video.cultPartner && (
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.timeAgo}</span>
                    {video.rating && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{video.rating}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center gap-4 pt-3 border-t border-white/10">
                <button
                  onClick={() => toggleLike(video.id)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-all group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    likedVideos.includes(video.id)
                      ? 'bg-cyan-500/20 shadow-lg shadow-cyan-500/30'
                      : 'bg-white/5 group-hover:bg-cyan-500/10'
                  }`}>
                    <Heart className={`w-4 h-4 ${
                      likedVideos.includes(video.id) ? 'text-cyan-400 fill-cyan-400' : ''
                    }`} />
                  </div>
                  <span className={likedVideos.includes(video.id) ? 'text-cyan-400' : ''}>Like</span>
                </button>

                <button
                  onClick={() => toggleSave(video.id)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-all group"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    savedVideos.includes(video.id)
                      ? 'bg-cyan-500/20 shadow-lg shadow-cyan-500/30'
                      : 'bg-white/5 group-hover:bg-cyan-500/10'
                  }`}>
                    <Bookmark className={`w-4 h-4 ${
                      savedVideos.includes(video.id) ? 'text-cyan-400 fill-cyan-400' : ''
                    }`} />
                  </div>
                  <span className={savedVideos.includes(video.id) ? 'text-cyan-400' : ''}>Save</span>
                </button>

                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-all group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-all">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span>Share</span>
                </button>

                <button 
                  onClick={() => onNavigate('gym-channel', video)}
                  className="ml-auto flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 rounded-xl text-sm text-cyan-400 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Visit Gym</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}