"use client"
import { ArrowLeft, MapPin, Star, CheckCircle, User, Filter, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';


interface Gym {
  id: number;
  name: string;
  distance: string; 
  rating: number;
  image: string;
  facilities: string[];
  verified: boolean;
  hasCoach: boolean;
  isOpen: boolean;
  crowdLevel: 'low' | 'medium' | 'high';
  emergency?: boolean;
}

interface GymsProps {
  onNavigate: (screen: string, data?: any) => void;
}

// 2. Update the data array
const gyms: Gym[] = [
  {
    id: 1,
    name: 'PowerHouse Fitness',
    distance: '2.3 km',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    facilities: ['💪', '🏋️', '🏃'],
    verified: true,
    hasCoach: true,
    isOpen: true,
    crowdLevel: 'low'
  },
  {
    id: 2,
    name: 'Flow Yoga Studio',
    distance: '1.8 km',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599447421376-611783057464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDE2OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    facilities: ['🧘', '🕉️', '🌿'],
    verified: true,
    hasCoach: true,
    isOpen: true,
    crowdLevel: 'medium'
  },
  {
    id: 3,
    name: 'Elite CrossFit Hub',
    distance: '3.1 km',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwY3Jvc3NmaXR8ZW58MXx8fHwxNzY4NDg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    facilities: ['🤸', '⚡', '🏋️'],
    verified: true,
    hasCoach: false,
    isOpen: false,
    crowdLevel: 'high'
  },
  {
    id: 4,
    name: 'Strength Labs',
    distance: '4.5 km',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    facilities: ['🏋️', '💪', '🎯'],
    verified: true,
    hasCoach: true,
    isOpen: true,
    emergency: true,
    crowdLevel: 'low'
  },
];

export function Gyms({ onNavigate }: GymsProps) {
  const [searchQuery, setSearchQuery] = useState('');

const filteredGyms = gyms.filter(gym => 
    gym.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gym.distance.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-4">
        <h1 className="text-2xl mb-1">Collaborated Gyms</h1>
        <p className="text-sm text-gray-500">Verified Partner Gyms</p>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search gyms, locations, or specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-3 pl-12 pr-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all"
          />
          <svg className="w-5 h-5 text-gray-500 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Gym Cards */}
      <div className="px-6 space-y-4">
        {filteredGyms.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-2">No gyms found</p>
            <p className="text-xs text-gray-600">Try searching for something else</p>
          </div>
        ) : (
          filteredGyms.map((gym) => (
            <div
              key={gym.id}
              onClick={() => onNavigate('gym-detail', gym)}
              className={`bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border cursor-pointer hover:bg-white/10 hover:-translate-y-1 transition-all ${
                gym.emergency 
                  ? 'border-red-500/30 shadow-lg shadow-red-500/10 hover:shadow-red-500/20' 
                  : 'border-white/10 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
              }`}
            >
              {/* Gym Image Banner */}
              <div className="relative h-48">
                <ImageWithFallback
                  src={gym.image}
                  alt={gym.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                
                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex gap-2">
                    {gym.isOpen ? (
                      <span className="px-3 py-1 bg-green-500/20 border border-green-500/40 backdrop-blur-sm rounded-full text-xs text-green-300">
                        Open Now
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-red-500/20 border border-red-500/40 backdrop-blur-sm rounded-full text-xs text-red-300">
                        Closed
                      </span>
                    )}
                    
                    {/* Crowd Level */}
                    {gym.crowdLevel && (
                      <span className={`px-3 py-1 backdrop-blur-sm rounded-full text-xs flex items-center gap-1 ${
                        gym.crowdLevel === 'low' 
                          ? 'bg-green-500/20 border border-green-500/40 text-green-300'
                          : gym.crowdLevel === 'medium'
                          ? 'bg-yellow-500/20 border border-yellow-500/40 text-yellow-300'
                          : 'bg-red-500/20 border border-red-500/40 text-red-300'
                      }`}>
                        <Users className="w-3 h-3" />
                        {gym.crowdLevel === 'low' ? 'Less Crowded' : gym.crowdLevel === 'medium' ? 'Moderate' : 'Crowded'}
                      </span>
                    )}
                  </div>

                  {/* Emergency Badge */}
                  {gym.emergency && (
                    <span className="px-3 py-1 bg-red-500/30 border border-red-500/50 backdrop-blur-sm rounded-full text-xs text-red-200 animate-pulse">
                      Emergency Access
                    </span>
                  )}
                </div>

                {/* Verified Badge */}
                {gym.verified && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400">Verified</span>
                  </div>
                )}
              </div>

              {/* Gym Details */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg mb-2">{gym.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{gym.distance}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span>{gym.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Facilities Icons */}
                <div className="flex items-center gap-2 mb-3">
                  {gym.facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl"
                    >
                      {facility}
                    </span>
                  ))}
                </div>

                {/* Personal Coach Available */}
                {gym.hasCoach && (
                  <div className="flex items-center gap-2 text-sm text-cyan-400 mb-4">
                    <User className="w-4 h-4" />
                    <span>Coach Available</span>
                  </div>
                )}

                {/* CTA */}
                <button className="w-full py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-xl hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
                  View Gym
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}