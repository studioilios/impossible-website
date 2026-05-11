"use client"
import { ArrowLeft, MapPin, Star, CheckCircle, Clock, Users, Calendar, Heart, Share2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useState } from 'react';

interface YogaStudioDetailProps {
  studio: any;
  onBack: () => void;
}

const studioImages = [
  'https://images.unsplash.com/photo-1599447421416-3414500d18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDg4OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHNwYWNlfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc2ODQ4ODk4N3ww&ixlib=rb-4.1.0&q=80&w=1080'
];

const instructors = [
  { id: 1, name: 'Priya Sharma', specialization: 'Hatha Yoga', experience: '8 years', rating: 4.9, image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100' },
  { id: 2, name: 'Arjun Mehta', specialization: 'Vinyasa Flow', experience: '6 years', rating: 4.8, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { id: 3, name: 'Ananya Desai', specialization: 'Meditation', experience: '10 years', rating: 5.0, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' }
];

const classTimetable = [
  { time: '6:00 AM', class: 'Morning Flow', instructor: 'Priya Sharma', duration: '60 min', type: 'Vinyasa' },
  { time: '7:30 AM', class: 'Hatha Basics', instructor: 'Arjun Mehta', duration: '75 min', type: 'Hatha' },
  { time: '9:00 AM', class: 'Meditation', instructor: 'Ananya Desai', duration: '45 min', type: 'Meditation' },
  { time: '5:00 PM', class: 'Evening Restore', instructor: 'Priya Sharma', duration: '60 min', type: 'Restorative' },
  { time: '6:30 PM', class: 'Power Flow', instructor: 'Arjun Mehta', duration: '90 min', type: 'Power' }
];

const yogaStyles = [
  'Hatha Yoga',
  'Vinyasa Flow',
  'Power Yoga',
  'Yin Yoga',
  'Restorative',
  'Meditation',
  'Pranayama',
  'Mobility'
];

export function YogaStudioDetail({ studio, onBack }: YogaStudioDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const studioData = {
    name: studio?.name || 'Yoga Studio',
    distance: studio?.distance || '0 km',
    rating: studio?.rating || 4.8,
    styles: studio?.styles || 'Hatha • Vinyasa • Meditation',
    beginnerFriendly: studio?.beginnerFriendly ?? true,
    monthlyPrice: studio?.monthlyPrice || 2499,
    yearlyPrice: studio?.yearlyPrice || 19999,
    isOpen: studio?.isOpen ?? true,
    verified: studio?.verified ?? true,
    image: studio?.image || studioImages[0]
  };

  return (
    <div className="min-h-screen bg-black pb-32">
      {/* Hero Image Carousel */}
      <div className="relative h-80">
        <ImageWithFallback
          src={studioImages[currentImageIndex]}
          alt={studioData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-black/60 transition-all duration-500"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {studioImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-700 ${
                index === currentImageIndex ? 'bg-teal-400 w-8' : 'bg-white/40 w-1.5'
              }`}
            />
          ))}
        </div>

        {/* Status & Actions */}
        <div className="absolute top-6 right-6 flex flex-col gap-2">
          {studioData.isOpen ? (
            <span className="px-3 py-1 bg-green-500/20 border border-green-500/40 backdrop-blur-sm rounded-full text-xs text-green-300">
              Open Now
            </span>
          ) : (
            <span className="px-3 py-1 bg-gray-500/20 border border-gray-500/40 backdrop-blur-sm rounded-full text-xs text-gray-300">
              Closed
            </span>
          )}
          
          {studioData.verified && (
            <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
              <CheckCircle className="w-3 h-3 text-green-400" />
              <span className="text-xs text-green-400">Verified</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-6 space-y-6">
        {/* Studio Info */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h1 className="text-3xl mb-3">{studioData.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{studioData.distance} away</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{studioData.rating} Rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>6 AM - 9 PM</span>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-teal-400/50 transition-all duration-500"
              >
                <Heart className={`w-5 h-5 transition-all duration-500 ${
                  isLiked ? 'text-teal-400 fill-teal-400' : 'text-white'
                }`} />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-teal-400/50 transition-all duration-500">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {studioData.beginnerFriendly && (
            <div className="bg-teal-500/10 border border-teal-500/20 rounded-2xl px-4 py-3 mb-4">
              <p className="text-sm text-teal-400">🧘 Beginner-friendly studio with guided sessions</p>
            </div>
          )}

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-teal-500/10 border border-teal-500/40 text-teal-400 rounded-xl text-sm hover:bg-teal-500/15 hover:shadow-md hover:shadow-teal-500/20 transition-all duration-700">
              <Calendar className="w-4 h-4" />
              <span>Book Session</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/20 text-white rounded-xl text-sm hover:bg-white/10 transition-all duration-700">
              <MapPin className="w-4 h-4" />
              <span>Location</span>
            </button>
          </div>
        </div>

        {/* About Studio */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-3">About Studio</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A peaceful sanctuary dedicated to the practice of traditional and modern yoga. Our studio offers a calm, welcoming environment where students of all levels can explore mindfulness, movement, and meditation.
          </p>
        </div>

        {/* Yoga Styles Offered */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-4">Yoga Styles</h2>
          <div className="grid grid-cols-2 gap-3">
            {yogaStyles.map((style, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span className="text-sm">{style}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-4">Our Instructors</h2>
          <div className="space-y-3">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-teal-500/20 transition-all duration-700">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500/20">
                  <ImageWithFallback
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm mb-1">{instructor.name}</h3>
                  <p className="text-xs text-gray-500">{instructor.specialization}</p>
                  <p className="text-xs text-gray-500">{instructor.experience} experience</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs">{instructor.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Class Timetable */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg">Today's Schedule</h2>
            <Calendar className="w-5 h-5 text-teal-400" />
          </div>
          <div className="space-y-3">
            {classTimetable.map((session, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5 hover:border-teal-500/20 transition-all duration-700">
                <div className="text-center">
                  <p className="text-sm text-teal-400">{session.time}</p>
                  <p className="text-xs text-gray-500">{session.duration}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm mb-1">{session.class}</h3>
                  <p className="text-xs text-gray-500">{session.instructor}</p>
                </div>
                <div className="px-2 py-1 bg-teal-500/10 rounded-full">
                  <span className="text-xs text-teal-400">{session.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Plans */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-4">Membership Plans</h2>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-teal-500/30 transition-all duration-700">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base">Monthly Plan</h3>
                <p className="text-xl text-teal-400">₹{studioData.monthlyPrice.toLocaleString()}</p>
              </div>
              <p className="text-xs text-gray-500 mb-3">Unlimited classes • Month to month</p>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  <span>All yoga styles included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  <span>Free mat & towel service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  <span>Locker access</span>
                </li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-teal-500/10 to-transparent border-2 border-teal-500/30 rounded-xl relative overflow-hidden">
              <div className="absolute -top-1 right-4 bg-teal-500 text-black px-3 py-1 rounded-b-lg text-xs font-medium">
                Best Value
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base text-teal-400">Yearly Plan</h3>
                <p className="text-xl text-teal-400">₹{studioData.yearlyPrice.toLocaleString()}</p>
              </div>
              <p className="text-xs text-gray-400 mb-3">Unlimited classes • Save 33%</p>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  <span>All monthly benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  <span>Priority class booking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  <span>2 free guest passes/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-teal-400" />
                  <span>Exclusive workshops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg">Student Reviews</h2>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm">{studioData.rating}</span>
              <span className="text-xs text-gray-500">(128)</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <span className="text-xs">SK</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm">Sneha Kapoor</p>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
              <p className="text-xs text-gray-400">Amazing peaceful environment. The instructors are very knowledgeable and patient with beginners.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTAs - Fixed */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 p-6">
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          <button className="py-4 bg-white/5 border border-white/20 text-white rounded-xl text-sm hover:bg-white/10 transition-all duration-700">
            Book Trial Class
          </button>
          <button className="py-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/50 text-teal-400 rounded-xl text-sm hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-700">
            Join Membership
          </button>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        @keyframes breathing-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
}