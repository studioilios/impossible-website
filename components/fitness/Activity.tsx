"use client"
import { useState, useMemo } from 'react';
import { Bell, ChevronLeft, ArrowRight, Zap, Clock, Flame, Play, Search, Star, CheckCircle2, Trophy, List, Target, Dumbbell, PlayCircle, Info, LayoutGrid, Heart, Wind, Shield, Rocket, Target as TargetIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const LEVELS = ['Beginner', 'Intermediate', 'Expert'] as const;
type Level = typeof LEVELS[number];

interface WorkoutCategory {
  id: string;
  title: string;
  subtitle: string;
  label: string;
  image: string;
  gradient: string;
  colorClass: string;
  accentColor: string;
  trainerAvatars: string[];
  group: 'Core' | 'Strength' | 'Endurance' | 'Mobility' | 'Mind-Body' | 'Goal' | 'Lifestyle' | 'Sports';
}

interface WorkoutStep {
  id: string;
  name: string;
  instruction: string;
  reps: string;
  image: string;
}

interface WorkoutDetail {
  id: string;
  title: string;
  duration: string;
  calories: string;
  image: string;
  level: Level;
  equipment: string;
  category: string;
  goal: string;
  targetMuscles: string[];
  steps: WorkoutStep[];
  trainer: {
    name: string;
    image: string;
    role: string;
    experience: string;
    rating: number;
  };
}

const CATEGORIES: WorkoutCategory[] = [
  // CORE WORKOUT TYPES
  {
    id: 'strength',
    title: 'Strength Training',
    subtitle: 'Build strength & muscle',
    label: 'Muscle Building',
    image: 'https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05',
    gradient: 'from-[#06b6d4]/20 via-[#06b6d4]/5 to-transparent',
    colorClass: 'text-[#06b6d4] border-[#06b6d4]/30 bg-[#06b6d4]/10',
    accentColor: '#06b6d4',
    trainerAvatars: ['https://i.pravatar.cc/150?u=s1', 'https://i.pravatar.cc/150?u=s2'],
    group: 'Core'
  },
  {
    id: 'cardio',
    title: 'Cardio',
    subtitle: 'Heart health & stamina',
    label: 'Endurance',
    image: 'https://images.unsplash.com/photo-1608138127700-e3c9405832d0',
    gradient: 'from-red-500/20 via-red-500/5 to-transparent',
    colorClass: 'text-red-400 border-red-500/30 bg-red-500/10',
    accentColor: '#ef4444',
    trainerAvatars: ['https://i.pravatar.cc/150?u=c1'],
    group: 'Core'
  },
  {
    id: 'home-workout',
    title: 'Home Workout',
    subtitle: 'No gym? No problem',
    label: 'Convenience',
    image: 'https://images.unsplash.com/photo-1758599880866-940def52706a',
    gradient: 'from-[#CCFF00]/20 via-[#CCFF00]/5 to-transparent',
    colorClass: 'text-[#CCFF00] border-[#CCFF00]/30 bg-[#CCFF00]/10',
    accentColor: '#CCFF00',
    trainerAvatars: ['https://i.pravatar.cc/150?u=h1'],
    group: 'Core'
  },
  {
    id: 'athletic',
    title: 'Athletic Workout',
    subtitle: 'Peak performance',
    label: 'Performance',
    image: 'https://images.unsplash.com/photo-1766970096346-937852c7d350',
    gradient: 'from-blue-500/20 via-blue-500/5 to-transparent',
    colorClass: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    accentColor: '#3b82f6',
    trainerAvatars: ['https://i.pravatar.cc/150?u=a1'],
    group: 'Core'
  },
  {
    id: 'hiit',
    title: 'HIIT',
    subtitle: 'Max calorie burn',
    label: 'High Intensity',
    image: 'https://images.unsplash.com/photo-1588528402605-1f9d0eb7a6d6',
    gradient: 'from-orange-500/20 via-orange-500/5 to-transparent',
    colorClass: 'text-orange-400 border-orange-500/30 bg-orange-500/10',
    accentColor: '#f97316',
    trainerAvatars: ['https://i.pravatar.cc/150?u=hi1'],
    group: 'Core'
  },
  {
    id: 'yoga',
    title: 'Yoga',
    subtitle: 'Balance & flow',
    label: 'Mind-Body',
    image: 'https://images.unsplash.com/photo-1597079997686-87eeebe516d8',
    gradient: 'from-green-500/20 via-green-500/5 to-transparent',
    colorClass: 'text-green-400 border-green-500/30 bg-green-500/10',
    accentColor: '#22c55e',
    trainerAvatars: ['https://i.pravatar.cc/150?u=y1'],
    group: 'Core'
  },

  // STRENGTH & PERFORMANCE
  { id: 'muscle-building', title: 'Muscle Building', subtitle: 'Hypertrophy focus', label: 'Growth', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48', gradient: 'from-gray-500/20', colorClass: 'text-gray-400', accentColor: '#9ca3af', trainerAvatars: [], group: 'Strength' },
  { id: 'power-training', title: 'Power Training', subtitle: 'Strength & Speed', label: 'Explosive', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438', gradient: 'from-yellow-500/20', colorClass: 'text-yellow-400', accentColor: '#eab308', trainerAvatars: [], group: 'Strength' },
  { id: 'functional', title: 'Functional Training', subtitle: 'Real-world fitness', label: 'Utility', image: 'https://images.unsplash.com/photo-1599058917233-3583688b5e63', gradient: 'from-cyan-500/20', colorClass: 'text-cyan-400', accentColor: '#06b6d4', trainerAvatars: [], group: 'Strength' },

  // ENDURANCE
  { id: 'fat-burn', title: 'Fat Burn', subtitle: 'Weight management', label: 'Metabolism', image: 'https://images.unsplash.com/photo-1518611012118-2969c636f7b4', gradient: 'from-red-500/20', colorClass: 'text-red-400', accentColor: '#ef4444', trainerAvatars: [], group: 'Endurance' },
  { id: 'cycling', title: 'Cycling', subtitle: 'Rhythmic endurance', label: 'Cardio', image: 'https://images.unsplash.com/photo-1601625193660-86f2807b024b', gradient: 'from-orange-500/20', colorClass: 'text-orange-400', accentColor: '#f97316', trainerAvatars: [], group: 'Endurance' },
  { id: 'running', title: 'Running', subtitle: 'Road & Trail', label: 'Stamina', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5', gradient: 'from-blue-500/20', colorClass: 'text-blue-400', accentColor: '#3b82f6', trainerAvatars: [], group: 'Endurance' },

  // MOBILITY & RECOVERY
  { id: 'mobility', title: 'Mobility & Stretching', subtitle: 'Joint health', label: 'Flexibility', image: 'https://images.unsplash.com/photo-1758599879927-f60878034fca', gradient: 'from-green-500/20', colorClass: 'text-green-400', accentColor: '#22c55e', trainerAvatars: [], group: 'Mobility' },
  { id: 'injury-prevention', title: 'Injury Prevention', subtitle: 'Pre-hab focus', label: 'Longevity', image: 'https://images.unsplash.com/photo-1627272183313-08655e88880c', gradient: 'from-indigo-500/20', colorClass: 'text-indigo-400', accentColor: '#6366f1', trainerAvatars: [], group: 'Mobility' },

  // MIND-BODY
  { id: 'meditation', title: 'Meditation', subtitle: 'Mental clarity', label: 'Mental', image: 'https://images.unsplash.com/photo-1641391400871-3a6578a11d5a', gradient: 'from-purple-500/20', colorClass: 'text-purple-400', accentColor: '#a855f7', trainerAvatars: [], group: 'Mind-Body' },
  { id: 'breathwork', title: 'Breathwork', subtitle: 'Conscious breathing', label: 'Relaxation', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b', gradient: 'from-teal-500/20', colorClass: 'text-teal-400', accentColor: '#14b8a6', trainerAvatars: [], group: 'Mind-Body' },

  // GOAL-BASED
  { id: 'weight-loss', title: 'Weight Loss', subtitle: 'Lean & Toned', label: 'Goal', image: 'https://images.unsplash.com/photo-1518611012118-2969c636f7b4', gradient: 'from-[#CCFF00]/20', colorClass: 'text-[#CCFF00]', accentColor: '#CCFF00', trainerAvatars: [], group: 'Goal' },
  { id: 'core-strength', title: 'Core Strength', subtitle: 'Solid midsection', label: 'Abs', image: 'https://images.unsplash.com/photo-1581009146145-b5ef03a94e7b', gradient: 'from-blue-500/20', colorClass: 'text-blue-400', accentColor: '#3b82f6', trainerAvatars: [], group: 'Goal' },

  // SPORTS & ATHLETIC
  { id: 'plyometrics', title: 'Plyometrics', subtitle: 'Jump training', label: 'Power', image: 'https://images.unsplash.com/photo-1758875568074-0e7e4389b7d5', gradient: 'from-yellow-500/20', colorClass: 'text-yellow-400', accentColor: '#eab308', trainerAvatars: [], group: 'Sports' },
  { id: 'explosive', title: 'Explosive Training', subtitle: 'Fast twitch', label: 'Speed', image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5', gradient: 'from-red-500/20', colorClass: 'text-red-400', accentColor: '#ef4444', trainerAvatars: [], group: 'Sports' }
];

const STRENGTH_WORKOUTS: WorkoutDetail[] = [
  {
    id: 'upper-body',
    title: 'Upper Body Strength',
    duration: '40 min',
    calories: '380',
    image: 'https://images.unsplash.com/photo-1710746904729-f3ad9f682bb9',
    level: 'Expert',
    equipment: 'Dumbbells / Gym',
    category: 'strength',
    goal: 'Build upper body power and muscle definition',
    targetMuscles: ['Chest', 'Back', 'Arms', 'Shoulders'],
    steps: [
      { id: '1', name: 'Incline Dumbbell Press', instruction: 'Keep elbows at 45 degrees, push weights directly up.', reps: '12 reps × 3 sets', image: 'https://images.unsplash.com/photo-1710746904729-f3ad9f682bb9' },
      { id: '2', name: 'Bent Over Rows', instruction: 'Hinge at hips, pull bar towards belly button.', reps: '10 reps × 4 sets', image: 'https://images.unsplash.com/photo-1693707963745-297f4e5dd2a6' },
      { id: '3', name: 'Push-up Variations', instruction: 'Wide stance for chest, diamond for triceps.', reps: '15 reps × 3 sets', image: 'https://images.unsplash.com/photo-1764426445448-95103b0024a6' }
    ],
    trainer: {
      name: 'Marcus Chen',
      image: 'https://images.unsplash.com/photo-1549995546-87cb41aa98a4',
      role: 'Certified Strength Coach',
      experience: '10+ years',
      rating: 4.8
    }
  },
  {
    id: 'lower-body',
    title: 'Lower Body Strength',
    duration: '45 min',
    calories: '450',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    level: 'Intermediate',
    equipment: 'Gym / Barbell',
    category: 'strength',
    goal: 'Explosive leg power and lower body stability',
    targetMuscles: ['Quads', 'Glutes', 'Hamstrings'],
    steps: [
      { id: '1', name: 'Barbell Back Squat', instruction: 'Keep chest up, break parallel at the bottom.', reps: '10 reps × 4 sets', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438' }
    ],
    trainer: {
      name: 'Sarah Jenkins',
      image: 'https://images.unsplash.com/photo-1683889842940-cbdbe08cf5a9',
      role: 'Elite Performance Coach',
      experience: '12+ years',
      rating: 4.9
    }
  }
];

const GROUP_CONFIG = {
  'Core': { icon: LayoutGrid, title: 'Core Workout Types' },
  'Strength': { icon: Dumbbell, title: 'Strength & Performance' },
  'Endurance': { icon: Heart, title: 'Endurance Training' },
  'Mobility': { icon: Shield, title: 'Mobility & Recovery' },
  'Mind-Body': { icon: Wind, title: 'Mind–Body' },
  'Goal': { icon: TargetIcon, title: 'Goal-Based Workouts' },
  'Sports': { icon: Rocket, title: 'Sports & Athletic' }
};

export function Activity() {
  const [selectedLevel, setSelectedLevel] = useState<Level>('Beginner');
  const [selectedCategory, setSelectedCategory] = useState<WorkoutCategory | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutDetail | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleBack = () => {
    if (selectedWorkout) {
      setSelectedWorkout(null);
    } else {
      setSelectedCategory(null);
      setSearchQuery('');
    }
  };

  const filteredCategories = CATEGORIES.filter(cat => 
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    cat.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedCategories = useMemo(() => {
    const groups: Record<string, WorkoutCategory[]> = {};
    filteredCategories.forEach(cat => {
      if (!groups[cat.group]) groups[cat.group] = [];
      groups[cat.group].push(cat);
    });
    return groups;
  }, [filteredCategories]);

  const filteredWorkouts = useMemo(() => {
    if (!selectedCategory) return [];
    if (selectedCategory.id === 'strength') {
      return STRENGTH_WORKOUTS.filter(w => w.level === selectedLevel);
    }
    return [];
  }, [selectedCategory, selectedLevel]);

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      <AnimatePresence mode="wait">
        {!selectedWorkout ? (
          <motion.div key="activity-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
            <header className={`px-6 pt-12 pb-6 sticky top-0 bg-black/80 backdrop-blur-xl z-30 transition-all ${selectedCategory ? 'border-b border-white/5' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {selectedCategory && (
                    <button onClick={handleBack} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-all">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  <div className="flex flex-col">
                    <h1 className="text-3xl font-black tracking-tight uppercase leading-none">
                      {selectedCategory ? selectedCategory.title : 'Activity'}
                    </h1>
                    <motion.p key={selectedLevel} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-[#CCFF00] font-bold text-xs uppercase tracking-widest mt-1">
                      {selectedLevel} Level Workouts
                    </motion.p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#CCFF00] p-0.5 overflow-hidden">
                  <ImageWithFallback src="https://i.pravatar.cc/150?u=me" alt="Profile" className="w-full h-full rounded-full object-cover" />
                </div>
              </div>

              {!selectedCategory && (
                <div className="relative mt-8 group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-focus-within:text-[#CCFF00] transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-[#CCFF00]/30 focus:bg-white/10 transition-all placeholder:text-gray-600"
                  />
                </div>
              )}

              <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/10 mt-6 shadow-inner">
                {LEVELS.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`flex-1 py-3 text-[10px] font-black rounded-xl transition-all uppercase tracking-[0.15em] relative ${
                      selectedLevel === level ? 'text-black z-10' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    {selectedLevel === level && <motion.div layoutId="level-pill" className="absolute inset-0 bg-[#CCFF00] rounded-xl -z-10" />}
                    {level}
                  </button>
                ))}
              </div>
            </header>

            <main className="px-6 mt-8 space-y-12">
              {!selectedCategory ? (
                Object.entries(GROUP_CONFIG).map(([group, config]) => {
                  const items = groupedCategories[group];
                  if (!items) return null;
                  return (
                    <section key={group} className="space-y-6">
                      <div className="flex items-center gap-3 border-l-2 border-[#CCFF00] pl-4">
                        <config.icon className="w-5 h-5 text-[#CCFF00]" />
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">{config.title}</h2>
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                        {items.map((cat, idx) => (
                          <CategoryCard key={cat.id} category={cat} index={idx} level={selectedLevel} onClick={() => setSelectedCategory(cat)} />
                        ))}
                      </div>
                    </section>
                  );
                })
              ) : (
                <div className="space-y-6">
                  {filteredWorkouts.length > 0 ? (
                    filteredWorkouts.map((workout, idx) => (
                      <StrengthWorkoutCard 
                        key={workout.id} 
                        workout={workout} 
                        category={selectedCategory} 
                        index={idx}
                        onClick={() => setSelectedWorkout(workout)}
                      />
                    ))
                  ) : (
                    <div className="py-20 text-center bg-white/5 rounded-[2.5rem] border border-white/10">
                      <p className="text-gray-500 font-bold uppercase tracking-widest">No {selectedLevel.toLowerCase()} workouts found</p>
                    </div>
                  )}
                </div>
              )}
            </main>
          </motion.div>
        ) : (
          <WorkoutDetailPage workout={selectedWorkout} category={selectedCategory!} onBack={handleBack} />
        )}
      </AnimatePresence>
    </div>
  );
}

function CategoryCard({ category, index, level, onClick }: { category: WorkoutCategory, index: number, level: string, onClick: () => void }) {
  const isLarge = category.group === 'Core';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      onClick={onClick}
      className={`group relative overflow-hidden bg-white/5 border border-white/10 cursor-pointer shadow-2xl transition-all active:scale-[0.98] ${
        isLarge ? 'h-48 rounded-[2.5rem]' : 'h-32 rounded-[2rem]'
      }`}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient}`} />
      <div className={`absolute inset-0 p-6 flex flex-col justify-between z-10 ${isLarge ? 'p-8' : 'p-6'}`}>
        <div>
          <p className="text-[8px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">{category.label}</p>
          <h3 className={`${isLarge ? 'text-3xl' : 'text-xl'} font-black leading-tight tracking-tight max-w-[60%]`}>{category.title}</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className={`px-3 py-1 rounded-full text-[8px] font-black border ${category.colorClass}`}>{level}</div>
          {category.trainerAvatars.length > 0 && (
            <div className="flex -space-x-2">
              {category.trainerAvatars.map((avatar, i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-black overflow-hidden shadow-lg">
                  <ImageWithFallback src={avatar} alt="Trainer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={`absolute top-0 right-[-20px] bottom-0 w-[50%] pointer-events-none`}>
        <ImageWithFallback src={category.image} alt={category.title} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>
    </motion.div>
  );
}

function StrengthWorkoutCard({ workout, category, index, onClick }: { workout: WorkoutDetail, category: WorkoutCategory, index: number, onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group relative h-48 rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 cursor-pointer shadow-2xl transition-all active:scale-[0.98]"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient}`} />
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">{category.title}</p>
          <h3 className="text-2xl font-black leading-tight tracking-tight max-w-[55%]">{workout.title}</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className={`px-4 py-1.5 rounded-full text-[10px] font-black border ${category.colorClass}`}>{workout.level}</div>
          <div className="w-8 h-8 rounded-full border-2 border-black overflow-hidden shadow-lg">
            <ImageWithFallback src={workout.trainer.image} alt={workout.trainer.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-[-20px] bottom-0 w-[50%]">
        <ImageWithFallback src={workout.image} alt={workout.title} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>
    </motion.div>
  );
}

function WorkoutDetailPage({ workout, category, onBack }: { workout: WorkoutDetail, category: WorkoutCategory, onBack: () => void }) {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="min-h-screen bg-black">
      <header className="px-6 pt-12 pb-6 flex items-center justify-between sticky top-0 bg-black/80 backdrop-blur-xl z-30">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-xl font-black tracking-tight uppercase leading-none">{workout.title}</h2>
            <p className="text-[#CCFF00] font-bold text-[10px] uppercase tracking-[0.2em] mt-1">{workout.level} LEVEL</p>
          </div>
        </div>
      </header>

      <main className="px-6 pb-40">
        <section className="mt-4">
          <div className="relative aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl">
            <ImageWithFallback src={workout.image} alt={workout.title} className="absolute inset-0 w-full h-full object-cover opacity-70" />
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90`} />
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-40`} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl">
                <Play className="w-6 h-6 fill-white text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-4 text-xs font-bold text-gray-300">
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /><span>{workout.duration}</span></div>
                <div className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-orange-400" /><span>{workout.calories} kcal</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-4 h-4 text-[#CCFF00]" />
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Workout Goal</h3>
            </div>
            <p className="text-lg font-black leading-tight mb-4">{workout.goal}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2"><Target className="w-3.5 h-3.5 text-blue-400" /><span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Target</span></div>
                <p className="text-xs font-bold">{workout.targetMuscles.join(', ')}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2"><Dumbbell className="w-3.5 h-3.5 text-green-400" /><span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Equipment</span></div>
                <p className="text-xs font-bold">{workout.equipment}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Workout Steps</h3>
            <span className="text-[10px] font-black text-[#CCFF00] uppercase tracking-widest">{workout.steps.length} Exercises</span>
          </div>
          <div className="space-y-6">
            {workout.steps.map((step, idx) => (
              <div key={step.id} className="flex gap-4 items-start">
                <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/10 flex-shrink-0 relative">
                  <ImageWithFallback src={step.image} alt={step.name} className="w-full h-full object-cover" />
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] font-black">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h4 className="font-black text-lg leading-none mb-2">{step.name}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed mb-2">{step.instruction}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] text-[10px] font-black uppercase tracking-widest">
                    <Zap className="w-3 h-3 fill-current" />
                    {step.reps}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-28 left-6 right-6 z-50">
        <button className="w-full py-5 bg-[#CCFF00] text-black rounded-3xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-[#CCFF00]/30 active:scale-95 transition-all flex items-center justify-center gap-3">
          <PlayCircle className="w-5 h-5" />
          Start Workout
        </button>
      </div>
    </motion.div>
  );
}
