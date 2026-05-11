"use client"
import { ArrowLeft, Zap, Droplet, Moon, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const exercises = [
  { 
    name: 'Bench Press', 
    sets: '4 sets', 
    reps: '8-10 reps', 
    rest: '90s',
    image: 'https://images.unsplash.com/photo-1714181871329-1392197011c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjBiZW5jaCUyMHByZXNzfGVufDF8fHx8MTc2NzU5NzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Incline Dumbbell Press', 
    sets: '3 sets', 
    reps: '10-12 reps', 
    rest: '60s',
    image: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXhlcmNpc2UlMjBkdW1iYmVsbHxlbnwxfHx8fDE3Njc1OTc4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Cable Flyes', 
    sets: '3 sets', 
    reps: '12-15 reps', 
    rest: '45s',
    image: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1OTY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Tricep Dips', 
    sets: '3 sets', 
    reps: '10-12 reps', 
    rest: '60s',
    image: 'https://images.unsplash.com/photo-1761839256547-0a1cd11b6dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBmaXRuZXNzfGVufDF8fHx8MTc2NzU5NzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    name: 'Overhead Tricep Extension', 
    sets: '3 sets', 
    reps: '12-15 reps', 
    rest: '45s',
    image: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXhlcmNpc2UlMjBkdW1iYmVsbHxlbnwxfHx8fDE3Njc1OTc4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
];

export function TrainingPlan() {
  return (
    <div className="min-h-screen bg-black px-6 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl">AI Training Plan</h1>
      </div>

      {/* Today's Focus */}
      <div className="bg-gradient-to-br from-[#CCFF00]/10 to-transparent border border-[#CCFF00]/20 rounded-2xl overflow-hidden mb-6">
        <div className="relative h-48">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1OTY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Strength Training"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-[#CCFF00]" />
              <h2 className="text-lg">Today's Focus</h2>
            </div>
            <p className="text-2xl mb-2">Upper Body Strength</p>
            <p className="text-sm text-gray-400">Optimised for your energy today</p>
          </div>
        </div>
      </div>

      {/* Exercise Plan */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Exercise Plan</h3>
        <div className="space-y-3">
          {exercises.map((exercise, index) => (
            <div key={index} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-32">
                <ImageWithFallback
                  src={exercise.image}
                  alt={exercise.name}
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="mb-1">{exercise.name}</h4>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>{exercise.sets}</span>
                        <span>•</span>
                        <span>{exercise.reps}</span>
                        <span>•</span>
                        <span>Rest {exercise.rest}</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#CCFF00]/20 backdrop-blur-sm flex items-center justify-center text-[#CCFF00] text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Running Plan */}
      <div className="mb-6">
        <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Running Plan</h3>
        <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          <div className="relative h-40">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1758520706103-41d01f815640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwY2FyZGlvJTIwb3V0ZG9vcnxlbnwxfHx8fDE3Njc1MTcxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Running"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="grid grid-cols-3 gap-4 mb-3">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Distance</div>
                  <div className="text-lg text-[#CCFF00]">5.2 km</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">Pace</div>
                  <div className="text-lg text-[#DFFF00]">6:15/km</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">HR Zone</div>
                  <div className="text-lg text-[#FFFF00]">Zone 2</div>
                </div>
              </div>
              <p className="text-sm text-gray-300">Easy recovery run recommended after strength training</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recovery Note */}
      <div className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
        <div className="relative h-32">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1597079997686-87eeebe516d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2RhJTIwc3RyZXRjaGluZyUyMHdlbGxuZXNzfGVufDF8fHx8MTc2NzU0MTk1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Recovery"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute top-5 left-5">
            <div className="flex items-center gap-2">
              <Moon className="w-5 h-5 text-[#CCFF00]" />
              <h3 className="text-lg">Recovery Status</h3>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Sleep Quality</span>
              <span className="text-sm text-[#CCFF00]">Good (6h)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Hydration</span>
              <div className="flex items-center gap-2">
                <Droplet className="w-4 h-4 text-[#DFFF00]" />
                <span className="text-sm text-[#DFFF00]">1.8L / 2.5L</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3 flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-orange-200">
              Your body handled yesterday well. Let's keep today steady.
            </p>
          </div>
        </div>
      </div>

      {/* Start Workout Button */}
      <button className="w-full mt-6 py-4 bg-[#CCFF00] text-black rounded-2xl text-lg">
        Start Workout
      </button>
    </div>
  );
}