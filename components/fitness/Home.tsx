import { Bot, Plus, MessageCircle, Bell, Dumbbell, Building2, User, Activity, Users, Mic } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ActivityMapCard } from './ActivityMapCard';
import { Stories } from './Stories';

interface HomeProps {
  onNavigate: (screen: any, data?: any) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-black px-6 pt-6 pb-24">
      {/* Header */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CCFF00]/5 to-transparent h-32 -mx-6 rounded-b-3xl blur-2xl"></div>
        <div className="relative flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl mb-1">Good morning, Alex 👋</h1>
            <p className="text-sm text-gray-500">Ready for your best day</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-400" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#CCFF00] to-[#DFFF00] flex items-center justify-center text-black text-sm">
              A
            </div>
          </div>
        </div>
      </div>

      {/* Community Stories */}
      <Stories />

      {/* AI Fitness Agent - Hero Card */}
      <div 
        onClick={() => onNavigate('ai')}
        className="bg-[#CCFF00] rounded-3xl p-6 mb-6 relative overflow-hidden cursor-pointer"
      >
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-black/10 rounded-full text-xs text-black">AI Coach</span>
                <span className="px-3 py-1 bg-black/10 rounded-full text-xs text-black">Fitness & Diet</span>
              </div>
              
              <h2 className="text-2xl text-black mb-2">Your health plan is ready</h2>
              <p className="text-black/70 text-sm mb-4">Workout, diet, and recovery tailored for today</p>
            </div>

            {/* Health Score */}
            <div className="flex flex-col items-center">
              <div className="text-xs text-black/60 mb-2">Your fitness score</div>
              <div className="relative w-28 h-28">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="56"
                    cy="56"
                    r="52"
                    stroke="#000000"
                    strokeWidth="8"
                    fill="none"
                    opacity="0.1"
                  />
                  <circle
                    cx="56"
                    cy="56"
                    r="52"
                    stroke="#000000"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray="327"
                    strokeDashoffset="121"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl text-black">63</div>
                    <div className="text-xs text-black/50">Out of 100</div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-black/50 mt-2">*From test report</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-black/60">
            <span>2,180+ AI Conversations</span>
            <span>•</span>
            <span className="px-2 py-1 bg-black/10 rounded">GPT-6</span>
            <span className="px-2 py-1 bg-black/10 rounded">2M+ Health Models</span>
          </div>
        </div>
        
        {/* AI Illustration */}
        <div className="absolute right-0 bottom-0 w-32 h-32 opacity-10">
          <Bot className="w-full h-full text-black" />
        </div>
      </div>

      {/* Community Quick Access */}
      <div className="mb-6">
        <button 
          onClick={() => onNavigate('community')}
          className="w-full flex items-center justify-between px-6 py-4 bg-[#CCFF00] rounded-2xl text-black shadow-[0_4px_20px_rgba(204,255,0,0.2)] active:scale-[0.98] transition-all group relative overflow-hidden"
        >
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-10 h-10 rounded-xl bg-black/10 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-black italic uppercase tracking-tight block">Community #</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">3 Challenges Nearby</span>
            </div>
          </div>
          <div className="flex items-center gap-2 relative z-10">
            <div className="flex -space-x-2 mr-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#CCFF00] bg-black/20 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover opacity-80" />
                </div>
              ))}
            </div>
            <span className="text-xl font-black">→</span>
          </div>
          {/* Subtle background pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-black/5 -skew-x-12 translate-x-16 pointer-events-none" />
        </button>
      </div>

      {/* Health Activities - 3 Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {/* Steps */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="relative w-16 h-16 mx-auto mb-3">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="#CCFF00"
                strokeWidth="4"
                fill="none"
                strokeDasharray="176"
                strokeDashoffset="44"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm">9.1k</div>
              </div>
            </div>
          </div>
          <div className="text-xs text-gray-500 text-center">Steps</div>
        </div>

        {/* Sleep */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="h-16 flex items-end justify-center gap-1 mb-3">
            {[0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.7].map((height, i) => (
              <div
                key={i}
                className="w-1 bg-[#CCFF00] rounded-full"
                style={{ height: `${height * 100}%` }}
              ></div>
            ))}
          </div>
          <div className="text-sm text-center mb-1">6 Hours</div>
          <div className="text-xs text-gray-500 text-center">Sleep</div>
        </div>

        {/* Heart */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="h-16 flex items-center justify-center mb-3">
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              <path
                d="M0 15 L10 15 L15 5 L20 25 L25 10 L30 20 L35 15 L45 15 L50 10 L55 15 L60 15"
                stroke="#CCFF00"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-sm text-center mb-1">97 bpm</div>
          <div className="text-xs text-gray-500 text-center">Heart</div>
        </div>
      </div>

      {/* Flow Map Card - Strava Style */}
      <ActivityMapCard onNavigate={onNavigate} />

      {/* AI Diet & Nutrition Preview */}
      <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg">Diet & Nutrition</h3>
          <button 
            onClick={() => onNavigate('stats')}
            className="w-8 h-8 rounded-full bg-[#CCFF00] flex items-center justify-center"
          >
            <Plus className="w-4 h-4 text-black" />
          </button>
        </div>
        
        <div className="mb-4">
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl text-[#CCFF00]">1,840</span>
            <span className="text-sm text-gray-500 mb-1">/ 2,200 kcal</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#CCFF00] rounded-full" style={{ width: '84%' }}></div>
          </div>
        </div>

        {/* Macros */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">Protein</div>
            <div className="text-sm text-[#CCFF00]">68g</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Carbs</div>
            <div className="text-sm text-[#DFFF00]">185g</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Fats</div>
            <div className="text-sm text-[#FFFF00]">52g</div>
          </div>
        </div>

        <div className="text-sm text-gray-400 flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#CCFF00]" />
          Balanced meals recommended today
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3 mb-8">
        {/* Smart Workout Plan */}
        <div 
          onClick={() => onNavigate('activity')}
          className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
        >
          <div className="relative h-40">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1OTY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Training"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm mb-1">Smart Workout Plan</h3>
                <p className="text-xs text-gray-400">Upper body strength • 45 min</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                <span className="text-cyan-400">→</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Coach - NEW */}
        <div 
          onClick={() => onNavigate('personal-coach-flow')}
          className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 cursor-pointer hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
        >
          <div className="relative p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                  <div className="relative">
                    <User className="w-7 h-7 text-cyan-400" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#CCFF00] rounded-full border-2 border-black"></div>
                  </div>
                </div>
                {/* Pulse animation */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping"></div>
              </div>
              <div>
                <h3 className="text-base mb-1 font-bold">Personal Coach</h3>
                <p className="text-xs text-gray-400">Find specialized experts for your goals</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
              <span className="text-cyan-400 font-bold">→</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div
            onClick={() => onNavigate('gyms-video')}
            className="bg-white/5 rounded-2xl p-5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3 shadow-lg shadow-cyan-500/10">
              <Building2 className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-sm mb-1">Strength Studio</h3>
            <p className="text-xs text-gray-500">Watch & Learn</p>
          </div>

          <div
            onClick={() => onNavigate('yoga-studios')}
            className="bg-white/5 rounded-2xl p-5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-500 hover:shadow-lg hover:shadow-teal-500/5 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-3 shadow-md shadow-teal-500/5 animate-pulse-slow">
              <svg className="w-6 h-6 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L12 8M12 16L12 22M6 12C6 9 8 7 12 7C16 7 18 9 18 12C18 15 16 17 12 17C8 17 6 15 6 12Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="text-sm mb-1">Yoga Studio</h3>
            <p className="text-xs text-gray-500">Mind & Body</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div
            onClick={() => onNavigate('stats')}
            className="bg-white/5 rounded-2xl p-5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-[#DFFF00]/10 flex items-center justify-center mb-3">
              <Activity className="w-6 h-6 text-[#DFFF00]" />
            </div>
            <h3 className="text-sm mb-1">Nutrition</h3>
            <p className="text-xs text-gray-500">Track your diet</p>
          </div>

          <div
            onClick={() => onNavigate('stats')}
            className="bg-white/5 rounded-2xl p-5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-3 shadow-lg shadow-cyan-500/10">
              <Activity className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-sm mb-1">Statistics</h3>
            <p className="text-xs text-gray-500">View progress</p>
          </div>
        </div>
      </div>

      {/* Gyms Near You Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg mb-1">Gyms Near You</h3>
            <p className="text-xs text-gray-500">Verified partner gyms</p>
          </div>
          <button 
            onClick={() => onNavigate('gyms')}
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            View All →
          </button>
        </div>

        {/* Horizontal Scroll Gym Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {/* Gym Card 1 - Recommended */}
          <div className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all group">
            {/* Recommended Badge */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border-b border-cyan-500/20 px-4 py-2">
              <div className="flex items-center gap-2 text-xs text-cyan-400">
                <span>✨</span>
                <span>Recommended for you</span>
              </div>
            </div>

            {/* Gym Image */}
            <div className="relative h-40">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="PowerHouse Fitness"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              {/* Rating Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-yellow-400">⭐</span>
                <span className="text-xs">4.8</span>
              </div>

              {/* Distance Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                2.3 km
              </div>
            </div>

            {/* Gym Info */}
            <div className="p-4">
              <h4 className="text-base mb-1">PowerHouse Fitness</h4>
              <p className="text-xs text-gray-500 mb-2">Indiranagar</p>
              <p className="text-xs text-gray-400 mb-3">Strength • Cardio • CrossFit</p>

              {/* AI Note */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-3 py-2 mb-3">
                <p className="text-xs text-cyan-400">💡 Good for advanced lifting</p>
              </div>

              {/* Portfolio Preview */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2">Portfolio</p>
                <div className="flex gap-2">
                  <div className="flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBpbnRlcmlvciUyMG1vZGVybiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg0MzYwNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Training floor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1623874514711-0f321325f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2ODQ4ODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3Njg0ODg4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Group class"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xs">+6 more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Monthly</p>
                  <p className="text-sm">₹1,999<span className="text-xs text-gray-500">/mo</span></p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3 relative">
                  <div className="absolute -top-2 right-2 bg-cyan-500 text-black px-2 py-0.5 rounded-full text-xs">
                    Best Value
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Yearly</p>
                  <p className="text-sm text-cyan-400">₹14,999<span className="text-xs text-gray-500">/yr</span></p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-cyan-400" />
                    <span>Coach</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span>Open now</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={() => onNavigate('gym-detail', { id: 1, name: 'PowerHouse Fitness' })}
                className="w-full py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-xl text-sm hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                View Gym
              </button>
            </div>
          </div>

          {/* Gym Card 2 - Regular */}
          <div className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all group">
            {/* Gym Image */}
            <div className="relative h-40">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1599447421376-611783057464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDE2OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Flow Yoga Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              {/* Rating Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-yellow-400">⭐</span>
                <span className="text-xs">4.9</span>
              </div>

              {/* Distance Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                1.8 km
              </div>
            </div>

            {/* Gym Info */}
            <div className="p-4">
              <h4 className="text-base mb-1">Flow Yoga Studio</h4>
              <p className="text-xs text-gray-500 mb-2">Koramangala</p>
              <p className="text-xs text-gray-400 mb-3">Yoga • Meditation • Pilates</p>

              {/* AI Note */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-3 py-2 mb-3">
                <p className="text-xs text-green-400">💡 Good for beginners</p>
              </div>

              {/* Portfolio Preview */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2">Portfolio</p>
                <div className="flex gap-2">
                  <div className="flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1599447421376-611783057464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4NDE2OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Training floor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3Njg0ODg4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1623874514711-0f321325f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2ODQ4ODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Group class"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xs">+4 more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Monthly</p>
                  <p className="text-sm">₹2,499<span className="text-xs text-gray-500">/mo</span></p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3 relative">
                  <div className="absolute -top-2 right-2 bg-cyan-500 text-black px-2 py-0.5 rounded-full text-xs">
                    Best Value
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Yearly</p>
                  <p className="text-sm text-cyan-400">₹19,999<span className="text-xs text-gray-500">/yr</span></p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-cyan-400" />
                    <span>Coach</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span>Open now</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={() => onNavigate('gym-detail', { id: 2, name: 'Flow Yoga Studio' })}
                className="w-full py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-xl text-sm hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                View Gym
              </button>
            </div>
          </div>

          {/* Gym Card 3 - Emergency Ready */}
          <div className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-red-500/30 hover:border-red-500/50 transition-all group">
            {/* Emergency Badge */}
            <div className="bg-gradient-to-br from-red-500/10 to-transparent border-b border-red-500/20 px-4 py-2">
              <div className="flex items-center gap-2 text-xs text-red-400">
                <span>🚨</span>
                <span>Emergency-ready facility</span>
              </div>
            </div>

            {/* Gym Image */}
            <div className="relative h-40">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwY3Jvc3NmaXR8ZW58MXx8fHwxNzY4NDg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Elite CrossFit Hub"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              {/* Rating Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                <span className="text-yellow-400">⭐</span>
                <span className="text-xs">4.7</span>
              </div>

              {/* Distance Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                3.1 km
              </div>
            </div>

            {/* Gym Info */}
            <div className="p-4">
              <h4 className="text-base mb-1">Elite CrossFit Hub</h4>
              <p className="text-xs text-gray-500 mb-2">HSR Layout</p>
              <p className="text-xs text-gray-400 mb-3">CrossFit • Functional • HIIT</p>

              {/* AI Note */}
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl px-3 py-2 mb-3">
                <p className="text-xs text-orange-400">💡 Good for intermediate</p>
              </div>

              {/* Portfolio Preview */}
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-2">Portfolio</p>
                <div className="flex gap-2">
                  <div className="flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1467818488384-3a21f2b79959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwc3R1ZGlvJTIwY3Jvc3NmaXR8ZW58MXx8fHwxNzY4NDg3ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Training floor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1623874514711-0f321325f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzfGVufDF8fHx8MTc2ODQ4ODg3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Equipment"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative flex-1 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1518611012118-696072aa579a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGZpdG5lc3MlMjBjbGFzc3xlbnwxfHx8fDE3Njg0ODg4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Group class"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xs">+8 more</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">Monthly</p>
                  <p className="text-sm">₹3,499<span className="text-xs text-gray-500">/mo</span></p>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3 relative">
                  <div className="absolute -top-2 right-2 bg-cyan-500 text-black px-2 py-0.5 rounded-full text-xs">
                    Best Value
                  </div>
                  <p className="text-xs text-gray-500 mb-1">Yearly</p>
                  <p className="text-sm text-cyan-400">₹29,999<span className="text-xs text-gray-500">/yr</span></p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3 text-cyan-400" />
                    <span>Coach</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span>Open now</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button 
                onClick={() => onNavigate('gym-detail', { id: 3, name: 'Elite CrossFit Hub' })}
                className="w-full py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 rounded-xl text-sm hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
              >
                View Gym
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating AI Buttons */}
      <button 
        onClick={() => onNavigate('hey-flow')}
        className="fixed bottom-[160px] right-6 w-14 h-14 bg-[#CCFF00] rounded-full flex items-center justify-center active:scale-95 transition-all z-[999]"
      >
        <Mic className="w-6 h-6 text-black" />
      </button>
      <button 
        onClick={() => onNavigate('ai')}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#CCFF00] rounded-full flex items-center justify-center active:scale-95 transition-all z-[999]"
      >
        <Bot className="w-6 h-6 text-black" />
      </button>
    </div>
  );
}