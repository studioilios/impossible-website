"use client"
import { ArrowLeft, Heart, Bookmark, Share2, User } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface VideoPlayerProps {
  video: any;
  onBack: () => void;
  onNavigate: (screen: string, data?: any) => void;
}

const recommendedVideos = [
  {
    id: 1,
    title: 'Upper Body Strength Workout',
    gymName: 'PowerHouse Fitness',
    thumbnail: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '18:20',
    views: '15K'
  },
  {
    id: 2,
    title: 'Core Conditioning Basics',
    gymName: 'Flow Yoga Studio',
    thumbnail: 'https://images.unsplash.com/photo-1599447421376-611783057464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDE2OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '22:15',
    views: '12K'
  },
  {
    id: 3,
    title: 'HIIT Cardio Challenge',
    gymName: 'Elite CrossFit Hub',
    thumbnail: 'https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwY3Jvc3NmaXR8ZW58MXx8fHwxNzY4NDg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '16:45',
    views: '20K'
  }
];

const featuredCoach = {
  name: 'Sarah Mitchell',
  specialty: 'Fat Loss Specialist',
  image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjB0cmFpbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NDg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  rating: 4.9,
  experience: '8 years'
};

export function VideoPlayer({ video, onBack, onNavigate }: VideoPlayerProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Video Player */}
      <div className="relative aspect-video bg-black">
        <ImageWithFallback
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        
        {/* Dark Overlay with Controls */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-6 left-6 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-black/80 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Play Controls Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-cyan-500/30 backdrop-blur-sm flex items-center justify-center border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/50 mx-auto mb-3">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-cyan-400 border-b-8 border-b-transparent ml-1"></div>
              </div>
              <div className="text-xs text-gray-400">Video Player</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Info & Actions */}
      <div className="px-6 pt-6">
        {/* Title & Gym Name */}
        <div className="mb-4">
          <h1 className="text-xl mb-2">{video.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden">
                <ImageWithFallback
                  src={video.gymLogo}
                  alt={video.gymName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm">{video.gymName}</div>
                <div className="text-xs text-gray-500">{video.views} views • {video.timeAgo}</div>
              </div>
            </div>
            <button
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-4 py-2 rounded-xl text-sm transition-all ${
                isFollowing
                  ? 'bg-white/5 border border-white/10 text-gray-400'
                  : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/30'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${
              isLiked
                ? 'bg-cyan-500/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                : 'bg-white/5 border border-white/10 hover:bg-white/10'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'text-cyan-400 fill-cyan-400' : 'text-gray-400'}`} />
            <span className={`text-sm ${isLiked ? 'text-cyan-400' : 'text-gray-400'}`}>
              {isLiked ? 'Liked' : 'Like'}
            </span>
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl transition-all ${
              isSaved
                ? 'bg-cyan-500/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                : 'bg-white/5 border border-white/10 hover:bg-white/10'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'text-cyan-400 fill-cyan-400' : 'text-gray-400'}`} />
            <span className={`text-sm ${isSaved ? 'text-cyan-400' : 'text-gray-400'}`}>
              {isSaved ? 'Saved' : 'Save'}
            </span>
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
            <Share2 className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-gray-400">Share</span>
          </button>
        </div>

        {/* Coach Highlight */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-2xl p-5 mb-6">
          <h3 className="text-sm text-gray-400 mb-4">Featured Coach in this Video</h3>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-500/30">
              <ImageWithFallback
                src={featuredCoach.image}
                alt={featuredCoach.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-base mb-1">{featuredCoach.name}</h4>
              <p className="text-sm text-cyan-400 mb-1">{featuredCoach.specialty}</p>
              <div className="text-xs text-gray-500">
                {featuredCoach.experience} experience • ⭐ {featuredCoach.rating}
              </div>
            </div>
            <button className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-xl text-sm hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              <User className="w-4 h-4 inline mr-1" />
              Train with Coach
            </button>
          </div>
        </div>

        {/* Recommended Videos */}
        <div>
          <h3 className="text-lg mb-4">Recommended</h3>
          <div className="space-y-4">
            {recommendedVideos.map((recVideo) => (
              <div
                key={recVideo.id}
                onClick={() => onNavigate('video-player', recVideo)}
                className="flex gap-4 cursor-pointer group"
              >
                <div className="relative w-40 aspect-video rounded-xl overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={recVideo.thumbnail}
                    alt={recVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/30 backdrop-blur-sm flex items-center justify-center border-2 border-cyan-400/50 group-hover:scale-110 transition-all">
                      <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-cyan-400 border-b-6 border-b-transparent ml-0.5"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur-sm rounded text-xs">
                    {recVideo.duration}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm mb-1 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {recVideo.title}
                  </h4>
                  <div className="text-xs text-gray-500">
                    <div>{recVideo.gymName}</div>
                    <div>{recVideo.views} views</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
