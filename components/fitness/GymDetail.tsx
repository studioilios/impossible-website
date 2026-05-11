"use client"
import { ArrowLeft, MapPin, Clock, DollarSign, Star, CheckCircle, User, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface GymDetailProps {
  gym: any;
  onBack: () => void;
}

const gymImages = [
  'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwY3Jvc3NmaXR8ZW58MXx8fHwxNzY4NDg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1OTY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
];

const availableCoaches = [
  {
    name: 'Sarah Mitchell',
    specialty: 'Fat Loss',
    image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjB0cmFpbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NDg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Marcus Chen',
    specialty: 'Strength',
    image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NDg2Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

const plans = [
  { name: 'Monthly', price: '₹2,999', features: ['All facilities', 'Free parking', 'Locker'] },
  { name: 'Quarterly', price: '₹7,999', features: ['All facilities', 'Free parking', 'Locker', '1 PT session'] },
  { name: 'Yearly', price: '₹24,999', features: ['All facilities', 'Free parking', 'Locker', '12 PT sessions', 'Nutrition plan'] }
];

export function GymDetail({ gym, onBack }: GymDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Default values for gym data
  const gymData = {
    name: gym?.name || 'Gym',
    distance: gym?.distance || '0 km',
    rating: gym?.rating || 4.5,
    facilities: gym?.facilities || ['Weight Training', 'Cardio', 'CrossFit'],
    hasCoach: gym?.hasCoach ?? true,
    isOpen: gym?.isOpen ?? true,
    crowdLevel: gym?.crowdLevel || 'low',
    verified: gym?.verified ?? true,
    emergency: gym?.emergency ?? false,
    image: gym?.image || gym?.thumbnail || 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
  };

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Hero Image Carousel */}
      <div className="relative h-80">
        <ImageWithFallback
          src={gymImages[currentImageIndex]}
          alt={gymData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {gymImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-[#CCFF00] w-6' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Status & Verified */}
        <div className="absolute top-6 right-6 flex flex-col gap-2">
          {gymData.isOpen ? (
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/40 backdrop-blur-sm rounded-full text-xs text-green-300">
              Open Now
            </span>
          ) : (
            <span className="px-3 py-1 bg-red-500/20 border border-red-500/40 backdrop-blur-sm rounded-full text-xs text-red-300">
              Closed
            </span>
          )}
          
          {/* Crowd Level Indicator */}
          {gymData.crowdLevel && (
            <div className={`flex items-center gap-2 backdrop-blur-sm px-3 py-1 rounded-full ${
              gymData.crowdLevel === 'low' 
                ? 'bg-green-500/20 border border-green-500/40 text-green-300'
                : gymData.crowdLevel === 'medium'
                ? 'bg-yellow-500/20 border border-yellow-500/40 text-yellow-300'
                : 'bg-red-500/20 border border-red-500/40 text-red-300'
            }`}>
              <Users className="w-3 h-3" />
              <span className="text-xs">
                {gymData.crowdLevel === 'low' ? 'Less Crowded' : gymData.crowdLevel === 'medium' ? 'Moderate' : 'Crowded'}
              </span>
            </div>
          )}
          
          {gymData.verified && (
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span className="text-xs text-green-400">Verified</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-6 space-y-6">
        {/* Gym Info */}
        <div>
          <h1 className="text-3xl mb-3">{gymData.name}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{gymData.distance} away</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#FFFF00] fill-[#FFFF00]" />
              <span>{gymData.rating} Rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>6 AM - 11 PM</span>
            </div>
          </div>
        </div>

        {/* Available Coaches */}
        {gymData.hasCoach && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-[#CCFF00]" />
              <h2 className="text-lg">Available Coaches</h2>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {availableCoaches.map((coach, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white/5 rounded-2xl overflow-hidden border border-white/10 w-40"
                >
                  <div className="relative h-40">
                    <ImageWithFallback
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="text-sm mb-1">{coach.name}</div>
                      <div className="text-xs text-[#CCFF00]">{coach.specialty}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Facilities */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-4">Facilities</h2>
          <div className="grid grid-cols-2 gap-3">
            {gymData.facilities.map((facility: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
                <span className="text-sm">{facility}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
              <span className="text-sm">Air Conditioned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
              <span className="text-sm">Locker Rooms</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
              <span className="text-sm">Free Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
              <span className="text-sm">Shower Rooms</span>
            </div>
          </div>
        </div>

        {/* Plans & Pricing */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <DollarSign className="w-5 h-5 text-[#CCFF00]" />
            <h2 className="text-lg">Plans & Pricing</h2>
          </div>
          <div className="space-y-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-[#CCFF00]/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-lg mb-1">{plan.name}</h3>
                    <div className="text-2xl text-[#CCFF00]">{plan.price}</div>
                  </div>
                </div>
                <div className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-[#CCFF00]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-[#CCFF00]" />
            <h2 className="text-lg">Location</h2>
          </div>
          <div className="bg-white/5 rounded-xl h-40 flex items-center justify-center text-gray-500">
            Map Preview
          </div>
          <p className="text-sm text-gray-400 mt-3">
            Indiranagar, Bangalore, Karnataka
          </p>
        </div>

        {/* Reviews */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            <div className="pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#CCFF00] to-[#DFFF00]"></div>
                <div>
                  <div className="text-sm">Amit S.</div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-[#FFFF00] fill-[#FFFF00]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Great facilities and well-maintained equipment. The coaches are very professional.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DFFF00] to-[#FFFF00]"></div>
                <div>
                  <div className="text-sm">Priya M.</div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <Star key={star} className="w-3 h-3 text-[#FFFF00] fill-[#FFFF00]" />
                    ))}
                    <Star className="w-3 h-3 text-gray-600" />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Good gym overall. Can get crowded during peak hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="fixed bottom-20 left-0 right-0 px-6 py-4 bg-black/90 backdrop-blur-xl border-t border-white/10">
        <div className="flex gap-3">
          <button className="flex-1 py-4 border-2 border-[#CCFF00] text-[#CCFF00] rounded-2xl">
            Book Session
          </button>
          <button className="flex-1 py-4 bg-[#CCFF00] text-black rounded-2xl">
            Visit Gym
          </button>
        </div>
      </div>
    </div>
  );
}