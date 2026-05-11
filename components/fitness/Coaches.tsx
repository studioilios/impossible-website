import { Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CoachesProps {
  onNavigate: (screen: string, data?: any) => void;
}

const coaches = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    specialty: 'Fat Loss',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjB0cmFpbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NDg3ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Online', 'In-Gym'],
    experience: 8,
    certifications: ['NASM CPT', 'Nutrition Specialist']
  },
  {
    id: 2,
    name: 'Marcus Chen',
    specialty: 'Strength',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NDg2Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['In-Gym'],
    experience: 12,
    certifications: ['CSCS', 'Olympic Lifting']
  },
  {
    id: 3,
    name: 'Priya Sharma',
    specialty: 'Yoga',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1667890786022-83bca6c4f4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzY4NDg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Online', 'In-Gym'],
    experience: 10,
    certifications: ['RYT 500', 'Meditation Guide']
  },
  {
    id: 4,
    name: 'David Kumar',
    specialty: 'Rehab',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1540205453279-389ebbc43b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4NDg2Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Online'],
    experience: 15,
    certifications: ['Physical Therapist', 'CSCS']
  },
];

export function Coaches({ onNavigate }: CoachesProps) {
  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header with Dark Blue Gradient */}
      <div className="relative px-6 pt-12 pb-8 mb-6">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-950/20 to-transparent"></div>
        
        {/* Floating Glow Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl mb-2">Personal Coach</h1>
          <p className="text-gray-400">Online & In-Gym Experts</p>
        </div>
      </div>

      {/* Coach Cards - Horizontal Scroll */}
      <div className="px-6">
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              onClick={() => onNavigate('coach-profile', coach)}
              className="flex-shrink-0 w-72 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20 shadow-lg shadow-cyan-500/5 cursor-pointer hover:border-cyan-500/40 hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all group"
            >
              <div className="relative h-80">
                <ImageWithFallback
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3">
                    <h3 className="text-xl mb-1">{coach.name}</h3>
                    <p className="text-sm text-cyan-400">{coach.specialty} Specialist</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm">{coach.rating}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    {coach.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-xl hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all group-hover:shadow-cyan-500/40">
                    View Coach
                  </button>
                </div>

                {/* Subtle Edge Glow */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-cyan-500/10 group-hover:ring-cyan-500/30 transition-all"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose a Personal Coach */}
      <div className="px-6 mt-8">
        <h3 className="text-lg mb-4">Why Choose a Personal Coach</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-sm mb-1">Personalized Plans</h4>
            <p className="text-xs text-gray-500">Tailored to your goals</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3">
              <span className="text-2xl">📈</span>
            </div>
            <h4 className="text-sm mb-1">Track Progress</h4>
            <p className="text-xs text-gray-500">Real-time feedback</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3">
              <span className="text-2xl">💪</span>
            </div>
            <h4 className="text-sm mb-1">Expert Guidance</h4>
            <p className="text-xs text-gray-500">Certified professionals</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3">
              <span className="text-2xl">🔥</span>
            </div>
            <h4 className="text-sm mb-1">Motivation</h4>
            <p className="text-xs text-gray-500">Stay accountable</p>
          </div>
        </div>
      </div>
    </div>
  );
}
