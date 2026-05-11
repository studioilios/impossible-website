import { ArrowLeft, Star, Award, Calendar, CheckCircle, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface CoachProfileProps {
  coach: any;
  onBack: () => void;
}

const availableSlots = [
  { day: 'Mon', date: 'Jan 6', times: ['09:00 AM', '11:00 AM', '04:00 PM'] },
  { day: 'Tue', date: 'Jan 7', times: ['10:00 AM', '02:00 PM', '06:00 PM'] },
  { day: 'Wed', date: 'Jan 8', times: ['09:00 AM', '03:00 PM', '05:00 PM'] },
];

export function CoachProfile({ coach, onBack }: CoachProfileProps) {
  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Hero Section */}
      <div className="relative h-96">
        <ImageWithFallback
          src={coach.image}
          alt={coach.name}
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

        {/* Coach Info */}
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-3xl mb-2">{coach.name}</h1>
          <p className="text-lg text-[#CCFF00] mb-3">{coach.specialty} Specialist</p>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-[#FFFF00] fill-[#FFFF00]" />
              <span>{coach.rating} Rating</span>
            </div>
            <span>•</span>
            <span>{coach.experience} years experience</span>
          </div>
        </div>
      </div>

      <div className="px-6 pt-6 space-y-6">
        {/* About Coach */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-3">About Coach</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            {coach.name} is a certified {coach.specialty.toLowerCase()} coach with over {coach.experience} years of experience 
            helping clients achieve their fitness goals. Known for personalized training programs and exceptional results.
          </p>
        </div>

        {/* Certifications */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-[#CCFF00]" />
            <h2 className="text-lg">Certifications</h2>
          </div>
          <div className="space-y-3">
            {coach.certifications.map((cert: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#CCFF00]/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#CCFF00]" />
                </div>
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Training Style */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-3">Training Style</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-xl text-sm">
              Data-Driven
            </span>
            <span className="px-3 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-xl text-sm">
              Motivational
            </span>
            <span className="px-3 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-xl text-sm">
              Progressive
            </span>
            <span className="px-3 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-xl text-sm">
              Results-Focused
            </span>
          </div>
        </div>

        {/* Available Slots */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-[#CCFF00]" />
            <h2 className="text-lg">Available Slots</h2>
          </div>
          <div className="space-y-4">
            {availableSlots.map((slot, index) => (
              <div key={index}>
                <div className="text-sm text-gray-400 mb-2">
                  {slot.day}, {slot.date}
                </div>
                <div className="flex gap-2 flex-wrap">
                  {slot.times.map((time, idx) => (
                    <button
                      key={idx}
                      className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-sm hover:border-[#CCFF00] hover:bg-[#CCFF00]/10 transition-all"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Preview */}
        <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
          <h2 className="text-lg mb-4">Recent Reviews</h2>
          <div className="space-y-4">
            <div className="pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#CCFF00] to-[#DFFF00]"></div>
                <div>
                  <div className="text-sm">Rahul M.</div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-[#FFFF00] fill-[#FFFF00]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Excellent coach! Lost 15kg in 3 months with personalized plan.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#DFFF00] to-[#FFFF00]"></div>
                <div>
                  <div className="text-sm">Anita K.</div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 text-[#FFFF00] fill-[#FFFF00]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Very knowledgeable and supportive. Highly recommend!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-20 left-0 right-0 px-6 py-4 bg-black/90 backdrop-blur-xl border-t border-white/10">
        <button className="w-full py-4 bg-[#CCFF00] text-black rounded-2xl text-lg">
          Book 1:1 Session
        </button>
      </div>
    </div>
  );
}
