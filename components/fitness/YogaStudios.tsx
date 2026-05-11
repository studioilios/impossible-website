"use client"
import { ArrowLeft, MapPin, Star, CheckCircle, User, Clock, Heart } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface YogaStudiosProps {
  onNavigate: (screen: string, data?: any) => void;
}

const yogaStudios = [
  {
    id: 1,
    name: 'Flow Yoga Studio',
    location: 'Koramangala',
    distance: '1.8 km',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDg4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    styles: 'Hatha • Vinyasa • Meditation',
    beginnerFriendly: true,
    monthlyPrice: 2499,
    yearlyPrice: 19999,
    isOpen: true,
    hasInstructor: true,
    verified: true,
    portfolio: [
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDg4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 2,
    name: 'Serenity Yoga Space',
    location: 'Indiranagar',
    distance: '2.5 km',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    styles: 'Yin • Restorative • Pranayama',
    beginnerFriendly: true,
    monthlyPrice: 2999,
    yearlyPrice: 24999,
    isOpen: true,
    hasInstructor: true,
    verified: true,
    portfolio: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDg4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 3,
    name: 'Power Yoga Hub',
    location: 'HSR Layout',
    distance: '3.2 km',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    styles: 'Power • Ashtanga • Flow',
    beginnerFriendly: false,
    monthlyPrice: 3499,
    yearlyPrice: 29999,
    isOpen: true,
    hasInstructor: true,
    verified: true,
    portfolio: [
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDg4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  },
  {
    id: 4,
    name: 'Mindful Movement Studio',
    location: 'Whitefield',
    distance: '4.1 km',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDg4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    styles: 'Meditation • Mobility • Breathwork',
    beginnerFriendly: true,
    monthlyPrice: 1999,
    yearlyPrice: 16999,
    isOpen: false,
    hasInstructor: true,
    verified: true,
    portfolio: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1599447421416-3414500d18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDg4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080'
    ]
  }
];

export function YogaStudios({ onNavigate }: YogaStudiosProps) {
  const [likedStudios, setLikedStudios] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleLike = (studioId: number) => {
    setLikedStudios(prev => 
      prev.includes(studioId) ? prev.filter(id => id !== studioId) : [...prev, studioId]
    );
  };

  const filteredStudios = yogaStudios.filter(studio => 
    studio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    studio.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    studio.styles.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="px-6 pt-8 pb-6">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 hover:bg-white/10 transition-all duration-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl mb-1">Yoga Studios Near You</h1>
        <p className="text-sm text-gray-400">Yoga • Meditation • Mobility</p>
      </div>

      {/* Search Bar */}
      <div className="px-6 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, location, or style"
          className="w-full px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 focus:border-teal-500/20 transition-all duration-500"
        />
      </div>

      {/* Studios Grid */}
      <div className="px-6 space-y-4">
        {filteredStudios.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-2">No studios found</p>
            <p className="text-xs text-gray-600">Try searching for something else</p>
          </div>
        ) : (
          filteredStudios.map((studio, index) => (
            <div
              key={studio.id}
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-teal-500/20 transition-all duration-700 group opacity-0 animate-fade-in-slow"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              {/* Studio Image */}
              <div className="relative h-48">
                <ImageWithFallback
                  src={studio.image}
                  alt={studio.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-yellow-400">⭐</span>
                  <span className="text-xs">{studio.rating}</span>
                </div>

                {/* Distance Badge */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                  {studio.distance}
                </div>

                {/* Like Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(studio.id);
                  }}
                  className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:border-teal-400/50 transition-all duration-500"
                >
                  <Heart className={`w-5 h-5 transition-all duration-500 ${
                    likedStudios.includes(studio.id) ? 'text-teal-400 fill-teal-400' : 'text-white'
                  }`} />
                </button>
              </div>

              {/* Studio Info */}
              <div className="p-5">
                <h3 className="text-base mb-1">{studio.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{studio.location}</p>
                <p className="text-xs text-gray-400 mb-3">{studio.styles}</p>

                {/* Beginner Friendly Badge */}
                {studio.beginnerFriendly && (
                  <div className="bg-teal-500/10 border border-teal-500/20 rounded-xl px-3 py-2 mb-3">
                    <p className="text-xs text-teal-400">🧘 Beginner-friendly</p>
                  </div>
                )}

                {/* Portfolio Preview */}
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">Studio Gallery</p>
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={studio.portfolio[0]}
                        alt="Studio space"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 h-16 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={studio.portfolio[1]}
                        alt="Meditation area"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative flex-1 h-16 rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={studio.portfolio[2]}
                        alt="Class session"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xs">+5 more</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                    <p className="text-xs text-gray-500 mb-1">Monthly</p>
                    <p className="text-sm">₹{studio.monthlyPrice.toLocaleString()}<span className="text-xs text-gray-500">/mo</span></p>
                  </div>
                  <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-3 relative">
                    <div className="absolute -top-2 right-2 bg-teal-500 text-black px-2 py-0.5 rounded-full text-xs">
                      Best Value
                    </div>
                    <p className="text-xs text-gray-500 mb-1">Yearly</p>
                    <p className="text-sm text-teal-400">₹{studio.yearlyPrice.toLocaleString()}<span className="text-xs text-gray-500">/yr</span></p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    {studio.hasInstructor && (
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3 text-teal-400" />
                        <span>Instructor</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${studio.isOpen ? 'bg-green-400' : 'bg-red-400'}`}></div>
                      <span>{studio.isOpen ? 'Open now' : 'Closed'}</span>
                    </div>
                    {studio.verified && (
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>Verified</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => onNavigate('yoga-studio-detail', studio)}
                  className="w-full py-3 bg-teal-500/10 border border-teal-500/40 text-teal-400 rounded-xl text-sm hover:bg-teal-500/15 hover:shadow-md hover:shadow-teal-500/20 transition-all duration-700"
                >
                  View Studio
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Custom CSS for fade-in animation */}
      <style>{`
        @keyframes fade-in-slow {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}