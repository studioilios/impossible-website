"use client"
import { ArrowLeft, Star, MapPin, CheckCircle, Play } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface GymChannelProps {
  gym: any;
  onBack: () => void;
  onNavigate: (screen: string, data?: any) => void;
}

const channelVideos = [
  {
    id: 1,
    title: 'Beginner Strength Training Guide',
    thumbnail: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '15:30',
    views: '25K',
    timeAgo: '1 week ago'
  },
  {
    id: 2,
    title: 'Advanced CrossFit Techniques',
    thumbnail: 'https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwY3Jvc3NmaXR8ZW58MXx8fHwxNzY4NDg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '20:15',
    views: '18K',
    timeAgo: '2 weeks ago'
  },
  {
    id: 3,
    title: 'Full Body Workout Routine',
    thumbnail: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1OTY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '25:00',
    views: '30K',
    timeAgo: '3 weeks ago'
  }
];

const channelCoaches = [
  {
    name: 'Sarah Mitchell',
    specialty: 'Fat Loss',
    image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjB0cmFpbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NDg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9
  },
  {
    name: 'Marcus Chen',
    specialty: 'Strength',
    image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NDg2Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8
  }
];

export function GymChannel({ gym, onBack, onNavigate }: GymChannelProps) {
  const [activeTab, setActiveTab] = useState<'videos' | 'coaches' | 'about'>('videos');
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Channel Header */}
      <div className="relative">
        {/* Cover Image */}
        <div className="relative h-48">
          <ImageWithFallback
            src={gym.thumbnail}
            alt={gym.gymName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          
          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-6 left-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Channel Info */}
        <div className="px-6 pb-6">
          <div className="flex items-start gap-4 -mt-12 mb-4">
            {/* Gym Logo */}
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border-4 border-black overflow-hidden shadow-lg">
              <ImageWithFallback
                src={gym.gymLogo}
                alt={gym.gymName}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 pt-14">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl">{gym.gymName}</h1>
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{gym.rating}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{gym.distance}</span>
                </div>
                <span>•</span>
                <span>24K followers</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setIsFollowing(!isFollowing)}
                  className={`flex-1 py-2.5 rounded-xl text-sm transition-all ${
                    isFollowing
                      ? 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10'
                      : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-lg shadow-cyan-500/30'
                  }`}
                >
                  {isFollowing ? 'Following' : 'Follow Gym'}
                </button>
                <button className="flex-1 py-2.5 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-xl text-sm hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                  Visit Gym
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-10 bg-black/95 backdrop-blur-xl border-b border-white/10 px-6">
        <div className="flex gap-6">
          {(['videos', 'coaches', 'about'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm capitalize relative transition-colors ${
                activeTab === tab ? 'text-cyan-400' : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 pt-6">
        {activeTab === 'videos' && (
          <div className="space-y-4">
            {channelVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => onNavigate('video-player', { ...video, gymName: gym.gymName, gymLogo: gym.gymLogo })}
                className="flex gap-4 cursor-pointer group"
              >
                <div className="relative w-40 aspect-video rounded-xl overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/30 backdrop-blur-sm flex items-center justify-center border-2 border-cyan-400/50 group-hover:scale-110 transition-all">
                      <Play className="w-5 h-5 text-cyan-400 fill-cyan-400 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur-sm rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm mb-1 line-clamp-2 group-hover:text-cyan-400 transition-colors">{video.title}</h3>
                  <div className="text-xs text-gray-500">
                    <div>{video.views} views • {video.timeAgo}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'coaches' && (
          <div className="grid grid-cols-2 gap-4">
            {channelCoaches.map((coach, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-sm mb-1">{coach.name}</h3>
                    <p className="text-xs text-cyan-400">{coach.specialty}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs">{coach.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="space-y-4">
            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-lg mb-3">About</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Premier fitness facility offering world-class equipment, expert coaching, and a supportive community. 
                We specialize in strength training, functional fitness, and personalized workout programs.
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-lg mb-3">Facilities</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Weight Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>CrossFit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Cardio Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Locker Rooms</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
              <h3 className="text-lg mb-3">Hours</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>7:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
