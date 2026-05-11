"use client"
import { useState, useRef } from 'react';
import { 
  ChevronLeft, 
  CheckCircle, 
  MapPin, 
  Globe, 
  User, 
  Heart,
  Dumbbell,
  Flame,
  Zap,
  Wind,
  Shield,
  Clock,
  Award,
  Calendar,
  ChevronRight,
  Lock,
  Check,
  Search,
  MessageCircle,
  FileText,
  X,
  Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

import { SiInstagram as Instagram } from '@icons-pack/react-simple-icons';


type FlowStep = 'workout-type' | 'coach-list' | 'coach-profile';

interface WorkoutType {
  id: string;
  name: string;
  label: string;
  gradient: string;
  image: string;
  glowColor: string;
}

interface Coach {
  id: string;
  name: string;
  image: string;
  specialty: string;
  experience: string;
  rating10: number; 
  totalReviews: number;
  tags: string[];
  about: string;
  certifications: string[];
  approach: string;
  isOnline?: boolean;
  instagram?: string;
}

const WORKOUT_TYPES: WorkoutType[] = [
  { 
    id: 'yoga', 
    name: 'Yoga', 
    label: 'Mindfulness', 
    gradient: 'from-emerald-500/40 via-emerald-700/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-emerald-500/40'
  },
  { 
    id: 'cycling', 
    name: 'Cycling', 
    label: 'Cardio', 
    gradient: 'from-orange-500/40 via-orange-700/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-orange-500/40'
  },
  { 
    id: 'strength', 
    name: 'Strength Training', 
    label: 'Strength', 
    gradient: 'from-indigo-500/40 via-indigo-700/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-indigo-500/40'
  },
  { 
    id: 'fatloss', 
    name: 'Fat Loss', 
    label: 'Cardio', 
    gradient: 'from-rose-500/40 via-rose-700/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-rose-500/40'
  },
  { 
    id: 'hiit', 
    name: 'HIIT', 
    label: 'Cardio', 
    gradient: 'from-cyan-500/40 via-cyan-700/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-cyan-500/40'
  },
  { 
    id: 'mobility', 
    name: 'Mobility & Rehab', 
    label: 'Mindfulness', 
    gradient: 'from-teal-500/40 via-teal-700/20 to-transparent',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600',
    glowColor: 'shadow-teal-500/40'
  },
];

const ALL_COACHES: Coach[] = [
  {
    id: '1',
    name: 'Marcus Chen',
    image: 'https://images.unsplash.com/photo-1549995546-87cb41aa98a4?auto=format&fit=crop&q=80&w=400',
    specialty: 'Strength Specialist',
    experience: '8+ years',
    rating10: 9.8,
    totalReviews: 142,
    tags: ['Certified', 'Online', 'In-Gym'],
    about: 'Marcus is an expert in hypertrophy and functional strength. He has helped over 500 clients achieve their powerlifting goals.',
    certifications: ['NASM-CPT', 'CSCS', 'Precision Nutrition L1'],
    approach: 'I believe in technical precision and progressive overload as the foundation for any successful strength journey.',
    isOnline: true,
    instagram: 'marcus_lifts'
  },
  {
    id: '2',
    name: 'Sarah Williams',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=400',
    specialty: 'Strength Specialist',
    experience: '6+ years',
    rating10: 8.4,
    totalReviews: 89,
    tags: ['Certified', 'Online'],
    about: 'Sarah specializes in helping women build muscle and confidence. Her programs focus on long-term sustainability.',
    certifications: ['ACE-CPT', 'IKFF Level 1'],
    approach: 'Training should empower you. We focus on form, consistency, and celebrating every small victory.',
    isOnline: false,
    instagram: 'sarah_trains'
  },
  {
    id: '3',
    name: 'Anya Sharma',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=400',
    specialty: 'Ashtanga Expert',
    experience: '10+ years',
    rating10: 9.2,
    totalReviews: 215,
    tags: ['Certified', 'In-Gym'],
    about: 'Anya brings a deep understanding of yogic philosophy and biomechanics to her teaching.',
    certifications: ['RYT-500', 'Yoga Alliance Certified'],
    approach: 'Breath is the bridge between body and mind. We move with intention and find stillness in motion.',
    isOnline: true,
    instagram: 'anya_yoga'
  },
  {
    id: '4',
    name: 'Elena Rossi',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=400',
    specialty: 'Holistic Fitness',
    experience: '5+ years',
    rating10: 7.6,
    totalReviews: 45,
    tags: ['Certified', 'Online'],
    about: 'Elena combines cardio, strength, and mobility for a complete fitness experience.',
    certifications: ['NASM-CPT'],
    approach: 'Balance is key. We work on being fit, flexible, and mentally strong.',
    isOnline: true,
    instagram: 'elena_fitness'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=400',
    specialty: 'Cycling Coach',
    experience: '7+ years',
    rating10: 9.5,
    totalReviews: 128,
    tags: ['Pro-Cyclist', 'Online'],
    about: 'Vikram is a former national level cyclist focusing on endurance and power metrics.',
    certifications: ['USAC Level 2'],
    approach: 'Data-driven training combined with mental resilience training.',
    isOnline: true,
    instagram: 'vikram_rides'
  }
];

const MOCK_COACHES: Record<string, Coach[]> = {
  strength: [ALL_COACHES[0], ALL_COACHES[1]],
  yoga: [ALL_COACHES[2]],
  cycling: [ALL_COACHES[4]],
  fatloss: [ALL_COACHES[3]],
};

const DEFAULT_COACHES: Coach[] = [ALL_COACHES[3]];

function RatingStamp({ rating, reviews, className = "" }: { rating: number, reviews: number, className?: string }) {
  if (rating < 7.0) return null;

  const isTopRated = rating >= 9.0;
  const isHighlyRated = rating >= 7.0 && rating < 9.0;
  
  const stampColor = isTopRated ? 'text-[#E11D48]' : 'text-[#F97316]'; 
  const label = isTopRated ? 'TOP RATED' : 'HIGHLY RATED';

  return (
    <motion.div 
      className={`flex flex-col items-center select-none ${className}`}
      initial={{ rotate: 8, scale: 1 }}
      whileTap={{ scale: 0.95, rotate: 5 }}
      animate={{ rotate: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className={`relative w-20 h-20 flex items-center justify-center ${stampColor} opacity-90`}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-none stroke-current" style={{ strokeWidth: 3.5 }}>
          <path d="M50,12 C68,12 88,25 88,50 C88,75 72,88 50,88 C28,88 12,75 12,50 C12,25 32,12 50,12 Z" 
            style={{ 
              strokeDasharray: '300', 
              strokeDashoffset: '0',
              strokeLinecap: 'round',
              filter: 'url(#roughness)' 
            }} 
          />
          <defs>
            <filter id="roughness">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
            </filter>
          </defs>
        </svg>
        
        <div className="flex flex-col items-center leading-none mt-1">
          <div className="flex items-center gap-0.5">
            <span className="text-2xl font-black italic tracking-tighter">{rating.toFixed(1)}</span>
            <div className="w-[1.5px] h-6 bg-current rotate-[25deg] mx-1" />
            <span className="text-sm font-black italic">10</span>
          </div>
          <span className="text-[7px] font-black uppercase tracking-tighter mt-1">{label}</span>
        </div>
      </div>
    </motion.div>
  );
}

const PRICING_PLANS = [
  {
    id: 'weekly',
    name: 'Weekly Plan',
    price: '₹999',
    period: '/ week',
    description: 'Best for: Quick start',
    features: ['3 live sessions', 'Chat support'],
    cta: 'Start Weekly',
    glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    accent: 'text-cyan-400'
  },
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: '₹3,499',
    period: '/ month',
    tag: '⭐ Most Popular',
    description: 'The standard choice',
    features: ['Unlimited sessions', 'Diet guidance', 'Progress tracking'],
    cta: 'Start Monthly',
    glow: 'shadow-[0_0_30px_rgba(204,255,0,0.15)] group-hover:shadow-[0_0_40px_rgba(204,255,0,0.3)]',
    accent: 'text-[#CCFF00]'
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    price: '₹29,999',
    period: '/ year',
    tag: 'Best Value',
    description: 'Long-term commitment',
    features: ['Full access', 'Priority support', 'Free assessments'],
    cta: 'Start Yearly',
    glow: 'shadow-[0_0_20px_rgba(20,184,166,0.15)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]',
    accent: 'text-teal-400'
  }
];

export function PersonalCoachFlow({ onBack }: { onBack: () => void }) {
  const [step, setStep] = useState<FlowStep>('workout-type');
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutType | null>(null);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('monthly');
  const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

  const coaches = selectedWorkout ? (MOCK_COACHES[selectedWorkout.id] || DEFAULT_COACHES) : [];

  const handleWorkoutSelect = (workout: WorkoutType) => {
    setSelectedWorkout(workout);
    setStep('coach-list');
  };

  const handleCoachSelect = (coach: Coach) => {
    setSelectedCoach(coach);
    setStep('coach-profile');
  };

  const handleStepBack = () => {
    if (step === 'workout-type') onBack();
    else if (step === 'coach-list') setStep('workout-type');
    else if (step === 'coach-profile') setStep('coach-list');
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <AnimatePresence mode="wait">
        {step === 'workout-type' ? (
          <motion.div
            key="workout-type"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="px-6 pt-12 pb-24"
          >
            <header className="mb-10">
              <button 
                onClick={onBack}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-2">Choose Your Workout</h1>
              <p className="text-gray-500 text-xs font-black uppercase tracking-widest">Find coaches specialised for your goal</p>
            </header>

            <div className="space-y-6">
              {WORKOUT_TYPES.map((type, idx) => (
                <motion.button
                  key={type.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileTap={{ scale: 1.02 }}
                  onClick={() => handleWorkoutSelect(type)}
                  className={`group relative w-full h-44 rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 flex flex-col items-start justify-center p-8 transition-all hover:border-white/20 hover:shadow-2xl ${type.glowColor}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${type.gradient} z-0`} />
                  <div className="relative z-10 text-left">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">
                      {type.label}
                    </p>
                    <h3 className="text-3xl font-black italic uppercase leading-[1.1] tracking-tighter max-w-[60%]">
                      {type.name}
                    </h3>
                  </div>
                  <div className="absolute top-0 right-[-10%] bottom-0 w-[60%] pointer-events-none z-0">
                    <div className="relative w-full h-full">
                      <ImageWithFallback 
                        src={type.image} 
                        alt={type.name} 
                        className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                  <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">Curated by Studio ILIOS</p>
            </div>
          </motion.div>
        ) : step === 'coach-list' && selectedWorkout ? (
          <motion.div
            key="coach-list"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-12 pb-24"
          >
            <div className="px-6 mb-10">
              <button 
                onClick={handleStepBack}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h1 className="text-3xl font-black italic uppercase tracking-tighter mb-2">{selectedWorkout.name} Coaches</h1>
              <p className="text-[#CCFF00] text-xs font-black uppercase tracking-widest mt-1">Experts curated for you</p>
            </div>

            <div className="px-6 space-y-6">
              <div className="mb-4">
                <h3 className="text-[11px] text-white/40 font-black uppercase tracking-[0.4em]">All Specialist Coaches</h3>
              </div>
              {coaches.map((coach) => (
                <div 
                  key={coach.id}
                  className="bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden group relative"
                >
                  <div className="absolute top-6 right-6 z-20 pointer-events-auto">
                    <RatingStamp rating={coach.rating10} reviews={coach.totalReviews} />
                  </div>

                  <div className="relative h-64">
                    <ImageWithFallback 
                      src={coach.image} 
                      alt={coach.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                          {selectedWorkout.name} Specialist
                        </span>
                      </div>
                      <h3 className="text-2xl font-black italic uppercase tracking-tighter">{coach.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-4">
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest opacity-60">Exp</span>
                          <span className="text-sm font-black italic uppercase tracking-tight">{coach.experience}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest opacity-60">Status</span>
                          <span className="text-sm font-black italic uppercase tracking-tight text-[#CCFF00]">Verified</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {coach.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-gray-400 uppercase font-black tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button 
                      onClick={() => handleCoachSelect(coach)}
                      className="w-full py-4 bg-[#CCFF00]/5 hover:bg-[#CCFF00] hover:text-black border border-[#CCFF00]/20 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ) : step === 'coach-profile' && selectedCoach ? (
          <motion.div
            key="coach-profile"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="pb-40"
          >
            {/* Background Hero Header */}
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback 
                src={selectedCoach.image} 
                alt="" 
                className="w-full h-full object-cover blur-2xl opacity-30 scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
              
              <button 
                onClick={handleStepBack}
                className="absolute top-12 left-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center z-30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Header Section with Circular Photo */}
            <div className="px-6 -mt-32 relative z-10 flex flex-col items-center">
              <div className="relative group mb-8">
                {/* Profile Photo Wrapper */}
                <motion.div 
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPhotoZoomed(true)}
                  className="relative w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-[#CCFF00]/20 via-white/10 to-transparent border border-white/10 shadow-2xl cursor-pointer overflow-hidden"
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <ImageWithFallback 
                      src={selectedCoach.image} 
                      alt={selectedCoach.name} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </motion.div>

                {/* Rating Stamp Overlap */}
                <div className="absolute -top-6 -right-10 z-20 pointer-events-auto">
                  <RatingStamp rating={selectedCoach.rating10} reviews={selectedCoach.totalReviews} />
                </div>

                {/* Overlays: Verified Badge & Online Dot */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-4 h-4 text-[#CCFF00]" />
                  </div>
                  {selectedCoach.isOnline && (
                    <div className="px-2 py-1 bg-emerald-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-full flex items-center gap-1.5 shadow-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400">Online</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Coach Title & Basic Info */}
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-[#CCFF00]/20">
                    {selectedCoach.specialty}
                  </span>
                </div>
                <h1 className="text-5xl font-black italic uppercase tracking-tighter leading-none mb-4">
                  {selectedCoach.name}
                </h1>
                <div className="flex items-center justify-center gap-6 text-gray-500 mb-6">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                    <MapPin className="w-3.5 h-3.5" /> Bangalore, IN
                  </div>
                  <div className="w-1 h-1 rounded-full bg-white/20" />
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                    <User className="w-3.5 h-3.5" /> {selectedCoach.totalReviews}+ Clients
                  </div>
                </div>

                {/* Instagram ID Field */}
                {selectedCoach.instagram && (
                  <motion.a
                    href={`https://instagram.com/${selectedCoach.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all group"
                  >
                    <Instagram className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors">@{selectedCoach.instagram}</span>
                    <div className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">See training style</span>
                  </motion.a>
                )}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 text-center group hover:bg-white/10 transition-all">
                  <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-2 opacity-60" />
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">Experience</p>
                  <p className="text-xs font-black italic uppercase tracking-tighter">{selectedCoach.experience}</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 text-center group hover:bg-white/10 transition-all">
                  <Award className="w-5 h-5 text-[#CCFF00] mx-auto mb-2 opacity-60" />
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">Ranking</p>
                  <p className="text-xs font-black italic uppercase tracking-tighter">L3 Elite</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 text-center group hover:bg-white/10 transition-all">
                  <Calendar className="w-5 h-5 text-orange-400 mx-auto mb-2 opacity-60" />
                  <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-xs font-black italic uppercase tracking-tighter">Limited</p>
                </div>
              </div>
            </div>

            <div className="px-6 mt-16 space-y-16">
              {/* Coaching Plans Section */}
              <section className="pt-2">
                <div className="mb-8">
                  <h2 className="text-3xl font-black italic uppercase tracking-tighter leading-none mb-2">Coaching Plans</h2>
                  <p className="text-[10px] text-[#CCFF00] font-black uppercase tracking-[0.3em]">Direct access to {selectedCoach.name.split(' ')[0]}'s methodology</p>
                </div>

                <div className="space-y-6">
                  {PRICING_PLANS.map((plan) => (
                    <motion.div
                      key={plan.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`group relative p-10 rounded-[3rem] bg-white/5 border transition-all duration-500 backdrop-blur-3xl cursor-pointer
                        ${selectedPlanId === plan.id ? 'border-[#CCFF00]/40 ' + plan.glow : 'border-white/5 hover:border-white/20'}
                      `}
                    >
                      {plan.tag && (
                        <div className="absolute top-8 right-10">
                          <span className={`px-4 py-1.5 bg-black/40 border border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.2em] ${plan.accent}`}>
                            {plan.tag}
                          </span>
                        </div>
                      )}

                      <div className="mb-8">
                        <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] mb-2">{plan.name}</p>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-black italic tracking-tighter">{plan.price}</span>
                          <span className="text-gray-500 text-xs font-black uppercase tracking-widest">{plan.period}</span>
                        </div>
                        <p className="text-[11px] font-black uppercase tracking-[0.2em] mt-3 opacity-40 italic">{plan.description}</p>
                      </div>

                      <div className="space-y-4 mb-10">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className={`w-5 h-5 rounded-full bg-white/5 flex items-center justify-center ${plan.accent} border border-white/5`}>
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="text-[11px] text-gray-300 font-black uppercase tracking-widest">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className={`w-full py-5 rounded-[1.5rem] text-[10px] font-black uppercase tracking-[0.3em] text-center transition-all duration-300
                        ${selectedPlanId === plan.id ? 'bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/20' : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white'}
                      `}>
                        {plan.cta}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                    <Lock className="w-4 h-4 text-[#CCFF00]" />
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.3em]">Authorized Secure Checkout</span>
                  </div>
                </div>
              </section>

              {/* Bio Section */}
              <div className="grid grid-cols-1 gap-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#CCFF00]" />
                    <h3 className="text-[11px] text-[#CCFF00] font-black uppercase tracking-[0.4em]">Coach Methodology</h3>
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed font-medium italic">
                    "{selectedCoach.about}"
                  </p>
                </div>

                <div className="p-10 bg-[#CCFF00]/5 border border-[#CCFF00]/10 rounded-[3rem] relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap className="w-16 h-16 text-[#CCFF00]" />
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="w-5 h-5 text-[#CCFF00]" />
                    <h3 className="text-[11px] text-[#CCFF00] font-black uppercase tracking-[0.4em]">Core Philosophy</h3>
                  </div>
                  <p className="text-white text-2xl font-black italic uppercase leading-[1.1] tracking-tight relative z-10">
                    "{selectedCoach.approach}"
                  </p>
                </div>
              </div>
            </div>

            {/* Final Booking CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-8 bg-black/90 backdrop-blur-3xl border-t border-white/10 z-50">
              <div className="flex gap-4 max-w-lg mx-auto">
                <button className="flex-[1.5] py-6 bg-[#CCFF00] text-black rounded-[1.8rem] text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-[#CCFF00]/30 active:scale-95 transition-all">
                  Initialize {PRICING_PLANS.find(p => p.id === selectedPlanId)?.name}
                </button>
              </div>
            </div>

            {/* Photo Zoom Modal */}
            <AnimatePresence>
              {isPhotoZoomed && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 backdrop-blur-xl"
                  onClick={() => setIsPhotoZoomed(false)}
                >
                  <button className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <X className="w-6 h-6" />
                  </button>
                  <motion.div 
                    initial={{ scale: 0.8, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.8, y: 20 }}
                    className="relative w-full max-w-lg aspect-square rounded-[3rem] overflow-hidden border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ImageWithFallback src={selectedCoach.image} className="w-full h-full object-cover" />
                    <div className="absolute bottom-8 left-8 right-8 text-center">
                      <h2 className="text-2xl font-black italic uppercase tracking-tighter">{selectedCoach.name}</h2>
                      <p className="text-[#CCFF00] text-[10px] font-black uppercase tracking-widest mt-1">{selectedCoach.specialty}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}