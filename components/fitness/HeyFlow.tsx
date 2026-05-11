"use client"
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bell, 
  Heart, 
  Footprints, 
  Flame, 
  MapPin, 
  Clock,
  TrendingUp,
  Droplet,
  Activity,
  Moon,
  Dumbbell,
  Play,
  Watch,
  Smartphone,
  Moon as MoonIcon,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { TrackingHistory } from './TrackingHistory';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface HeyFlowProps {
  onBack: () => void;
  onNavigate: (screen: any) => void;
}

// Mock data for charts
const weightData = [
  { month: 'Dec', weight: 84.5 },
  { month: 'Jan', weight: 83.8 },
  { month: 'Feb', weight: 82.9 },
  { month: 'Mar', weight: 82.1 },
];

const energyData = [
  { day: 'M', cal: 420 },
  { day: 'Tu', cal: 680 },
  { day: 'W', cal: 520 },
  { day: 'Th', cal: 750 },
  { day: 'F', cal: 610 },
  { day: 'Sa', cal: 890 },
  { day: 'Su', cal: 833 },
];

const workouts = [
  {
    id: 1,
    title: 'Workout Playlist',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
    type: 'HIIT'
  },
  {
    id: 2,
    title: 'Yoga Playlist',
    duration: '30 min',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
    type: 'Yoga'
  },
  {
    id: 3,
    title: 'Home Cardio',
    duration: '25 min',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
    type: 'Cardio'
  },
  {
    id: 4,
    title: 'Stretching',
    duration: '15 min',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
    type: 'Stretch'
  },
];

const healthTips = [
  {
    id: 1,
    title: 'Sleep Better Tonight',
    description: 'Aim for 7-9 hours of quality sleep',
    icon: <Moon className="w-5 h-5" />,
    color: 'from-purple-500/20 to-blue-500/20'
  },
  {
    id: 2,
    title: 'Stay Hydrated',
    description: 'Drink 8 glasses of water daily',
    icon: <Droplet className="w-5 h-5" />,
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 3,
    title: 'Move More Today',
    description: 'Take short breaks every hour',
    icon: <Activity className="w-5 h-5" />,
    color: 'from-[#CCFF00]/20 to-green-500/20'
  },
];

export function HeyFlow({ onBack, onNavigate }: HeyFlowProps) {
  const [heartPoints, setHeartPoints] = useState(0);
  const [weeklyProgress, setWeeklyProgress] = useState(0);
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(833);
  const [distance, setDistance] = useState(0);
  const [moveMinutes, setMoveMinutes] = useState(0);
  const [goalsAchieved, setGoalsAchieved] = useState(0);
  const [showTrackingHistory, setShowTrackingHistory] = useState(false);

  // Weekly days data
  const weekDays = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];
  const dayProgress = [0, 0, 0, 0, 0, 0, 0]; // 0-100 progress for each day

  if (showTrackingHistory) {
    return <TrackingHistory onBack={() => setShowTrackingHistory(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white pb-32 overflow-y-auto">
      {/* Top Header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/5">
        <div className="px-6 pt-12 pb-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-black italic uppercase tracking-tighter">Hey Flow</h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mt-0.5">
                  Your AI health activity tracker
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center relative">
                <Bell className="w-5 h-5 text-white/60" />
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#CCFF00] rounded-full shadow-[0_0_8px_rgba(204,255,0,0.6)]" />
              </button>
              <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-[#CCFF00]/30">
                <ImageWithFallback 
                  src="https://i.pravatar.cc/150?u=user" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 space-y-6 mt-6">
        {/* Main Activity Ring */}
        <div className="relative">
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-8 shadow-2xl">
            {/* Activity Ring Visualization */}
            <div className="relative w-64 h-64 mx-auto mb-6">
              {/* Outer Ring - Heart Points */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                {/* Background ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="12"
                />
                {/* Progress ring */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="url(#heartGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 85}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 85 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 85 * (1 - weeklyProgress / 150) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="drop-shadow-[0_0_8px_rgba(204,255,0,0.5)]"
                />
                <defs>
                  <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CCFF00" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner Ring - Steps */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="65"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="10"
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="65"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 65}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 65 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 65 * (1 - steps / 10000) }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="drop-shadow-[0_0_6px_rgba(6,182,212,0.4)]"
                />
              </svg>

              {/* Center Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-6xl font-black italic tracking-tighter">{steps}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mt-1">Steps</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <MetricCard icon={<Heart className="w-4 h-4" />} label="Heart Points" value={heartPoints.toString()} />
              <MetricCard icon={<Footprints className="w-4 h-4" />} label="Steps" value={steps.toString()} />
              <MetricCard icon={<Flame className="w-4 h-4" />} label="Calories" value={`${calories} Cal`} highlight />
              <MetricCard icon={<MapPin className="w-4 h-4" />} label="Distance" value={`${distance} mi`} />
              <MetricCard icon={<Clock className="w-4 h-4" />} label="Move Minutes" value={`${moveMinutes} min`} />
            </div>
          </div>
        </div>

        {/* Weekly Target Card */}
        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] border border-white/10 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-black uppercase tracking-[0.15em]">Weekly Target</h2>
            <Heart className="w-5 h-5 text-[#CCFF00]" />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black italic tracking-tighter">{weeklyProgress}</span>
              <span className="text-white/30 font-bold">/ 150</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Heart Points</span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#CCFF00] to-cyan-400 rounded-full shadow-[0_0_12px_rgba(204,255,0,0.4)]"
                initial={{ width: 0 }}
                animate={{ width: `${(weeklyProgress / 150) * 100}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            <p className="text-xs text-white/50 leading-relaxed italic">
              "Achieving 150 minutes of activity per week improves heart health, sleep, and mood."
            </p>
          </div>
        </div>

        {/* Daily Goals - Last 7 Days */}
        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] border border-white/10 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.15em]">Daily Goals</h2>
              <p className="text-xs text-white/40 font-bold mt-1">{goalsAchieved} / 7 Goals Achieved</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-6">
            {weekDays.map((day, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <p className="text-[10px] font-black uppercase text-white/30">{day}</p>
                <div className="relative w-10 h-10">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                    <circle 
                      cx="20" 
                      cy="20" 
                      r="16" 
                      fill="none" 
                      stroke={dayProgress[index] > 0 ? "#CCFF00" : "rgba(255,255,255,0.05)"} 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 16}`}
                      strokeDashoffset={2 * Math.PI * 16 * (1 - dayProgress[index] / 100)}
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Tracking History Button */}
          <button
            onClick={() => setShowTrackingHistory(true)}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#CCFF00]/10 to-cyan-500/10 border border-[#CCFF00]/30 rounded-2xl hover:from-[#CCFF00]/20 hover:to-cyan-500/20 hover:border-[#CCFF00]/50 transition-all group shadow-[0_0_20px_rgba(204,255,0,0.1)]"
          >
            <TrendingUp className="w-5 h-5 text-[#CCFF00] group-hover:scale-110 transition-transform" />
            <span className="text-xs font-black uppercase tracking-[0.15em] text-[#CCFF00]">
              View Tracking History
            </span>
            <ChevronRight className="w-5 h-5 text-[#CCFF00] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Health Trends Section */}
        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] border border-white/10 p-6 shadow-xl">
          <h2 className="text-sm font-black uppercase tracking-[0.15em] mb-4">Health Trends</h2>
          
          <div className="mb-6">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Weight</span>
              <span className="text-2xl font-black italic tracking-tighter">82.1</span>
              <span className="text-white/40 font-bold">kg</span>
              <TrendingUp className="w-4 h-4 text-[#CCFF00] ml-2" />
            </div>
            
            {/* Weight Chart */}
            <div className="h-32 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="month" 
                    stroke="rgba(255,255,255,0.2)" 
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                  />
                  <YAxis 
                    stroke="rgba(255,255,255,0.2)" 
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                    domain={[80, 86]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0,0,0,0.9)', 
                      border: '1px solid rgba(204,255,0,0.2)',
                      borderRadius: '12px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="weight" 
                    stroke="#CCFF00" 
                    strokeWidth={3}
                    dot={{ fill: '#CCFF00', r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Quick Health Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <QuickMetric label="Blood Pressure" value="120/80" />
            <QuickMetric label="Heart Rate" value="72 bpm" />
            <QuickMetric label="Body Fat" value="18.5%" />
            <QuickMetric label="Sleep" value="7.2h" />
          </div>
        </div>

        {/* Energy Expended */}
        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] border border-white/10 p-6 shadow-xl">
          <h2 className="text-sm font-black uppercase tracking-[0.15em] mb-2">Energy Expended</h2>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-black italic tracking-tighter text-[#CCFF00]">{calories}</span>
            <span className="text-white/40 font-bold">Cal Today</span>
          </div>

          {/* Bar Chart */}
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  stroke="rgba(255,255,255,0.2)" 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.2)" 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.9)', 
                    border: '1px solid rgba(204,255,0,0.2)',
                    borderRadius: '12px'
                  }}
                />
                <Bar 
                  dataKey="cal" 
                  fill="url(#barGradient)" 
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#CCFF00" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Discover Health Tips */}
        <div className="space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.15em] px-2">Discover Health Tips</h2>
          {healthTips.map((tip) => (
            <div 
              key={tip.id}
              className={`bg-gradient-to-br ${tip.color} backdrop-blur-2xl rounded-[2rem] border border-white/10 p-6 shadow-xl`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white/80">
                  {tip.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-black uppercase tracking-tight mb-1">{tip.title}</h3>
                  <p className="text-xs text-white/60 font-medium">{tip.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-white/30" />
              </div>
            </div>
          ))}
        </div>

        {/* Stay Fit With Me - Workout Section */}
        <div className="space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.15em] px-2">Stay Fit With Me</h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
            {workouts.map((workout) => (
              <div 
                key={workout.id}
                className="flex-shrink-0 w-64 bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] border border-white/10 overflow-hidden group hover:border-[#CCFF00]/30 transition-all cursor-pointer"
              >
                <div className="relative h-36 overflow-hidden">
                  <ImageWithFallback 
                    src={workout.image}
                    alt={workout.title}
                    className="w-full h-full object-cover opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#CCFF00]/20 backdrop-blur-md flex items-center justify-center border border-[#CCFF00]/50 group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-[#CCFF00] fill-[#CCFF00]" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-[8px] font-black uppercase tracking-widest text-[#CCFF00]">{workout.type}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-black italic uppercase tracking-tight mb-1">{workout.title}</h3>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{workout.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Data Sync Card */}
        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] border border-white/10 p-6 shadow-xl">
          <h2 className="text-sm font-black uppercase tracking-[0.15em] mb-2">Connect Your Health Devices</h2>
          <p className="text-xs text-white/50 mb-6 italic">
            "Sync your health data from wearables and health apps."
          </p>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#CCFF00]/10 hover:border-[#CCFF00]/30 transition-all group">
              <div className="flex items-center gap-4">
                <Watch className="w-5 h-5 text-white/40 group-hover:text-[#CCFF00] transition-colors" />
                <span className="text-xs font-black uppercase tracking-widest">Connect Smartwatch</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#CCFF00] transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#CCFF00]/10 hover:border-[#CCFF00]/30 transition-all group">
              <div className="flex items-center gap-4">
                <MoonIcon className="w-5 h-5 text-white/40 group-hover:text-[#CCFF00] transition-colors" />
                <span className="text-xs font-black uppercase tracking-widest">Connect Sleep Tracker</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#CCFF00] transition-colors" />
            </button>

            <button className="w-full flex items-center justify-between px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#CCFF00]/10 hover:border-[#CCFF00]/30 transition-all group">
              <div className="flex items-center gap-4">
                <Smartphone className="w-5 h-5 text-white/40 group-hover:text-[#CCFF00] transition-colors" />
                <span className="text-xs font-black uppercase tracking-widest">Connect Health Apps</span>
              </div>
              <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#CCFF00] transition-colors" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper Components
function MetricCard({ icon, label, value, highlight = false }: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  highlight?: boolean;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
      <div className="flex items-center gap-2 mb-2 text-white/40">
        {icon}
        <p className="text-[9px] font-bold uppercase tracking-widest">{label}</p>
      </div>
      <p className={`text-lg font-black italic tracking-tighter ${highlight ? 'text-[#CCFF00]' : ''}`}>
        {value}
      </p>
    </div>
  );
}

function QuickMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
      <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">{label}</p>
      <p className="text-sm font-black italic tracking-tighter">{value}</p>
    </div>
  );
}