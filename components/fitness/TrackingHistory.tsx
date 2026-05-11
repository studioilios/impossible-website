"use client"
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Filter, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  Footprints, 
  Flame, 
  Dumbbell, 
  Trophy,
  Target,
  Bot,
  Bike,
  Activity as ActivityIcon,
  Moon,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';
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
import { CalendarModal } from './CalendarModal';

interface TrackingHistoryProps {
  onBack: () => void;
}

type Tab = 'weekly' | 'monthly' | 'yearly';

// Mock data
const weeklyData = [
  { day: 'M', activity: 450 },
  { day: 'Tu', activity: 620 },
  { day: 'W', activity: 380 },
  { day: 'Th', activity: 710 },
  { day: 'F', activity: 550 },
  { day: 'Sa', activity: 820 },
  { day: 'Su', activity: 680 },
];

const monthlyWeeklyProgress = [
  { week: 'W1', workouts: 4 },
  { week: 'W2', workouts: 5 },
  { week: 'W3', workouts: 3 },
  { week: 'W4', workouts: 6 },
];

const yearlyMonthlyData = [
  { month: 'Jan', workouts: 18 },
  { month: 'Feb', workouts: 20 },
  { month: 'Mar', workouts: 22 },
  { month: 'Apr', workouts: 19 },
  { month: 'May', workouts: 24 },
  { month: 'Jun', workouts: 21 },
  { month: 'Jul', workouts: 25 },
  { month: 'Aug', workouts: 23 },
  { month: 'Sep', workouts: 26 },
  { month: 'Oct', workouts: 22 },
  { month: 'Nov', workouts: 20 },
  { month: 'Dec', workouts: 21 },
];

const workoutSessions = [
  {
    id: 1,
    title: 'Morning Walk',
    date: 'Mar 14, 2026',
    duration: '35 min',
    steps: '4,500',
    calories: '220',
    type: 'Walking',
    icon: <Footprints className="w-4 h-4" />
  },
  {
    id: 2,
    title: 'Evening Run',
    date: 'Mar 13, 2026',
    duration: '42 min',
    steps: '6,200',
    calories: '380',
    type: 'Running',
    icon: <ActivityIcon className="w-4 h-4" />
  },
  {
    id: 3,
    title: 'Cycling Session',
    date: 'Mar 12, 2026',
    duration: '55 min',
    steps: '0',
    calories: '450',
    type: 'Cycling',
    icon: <Bike className="w-4 h-4" />
  },
  {
    id: 4,
    title: 'Gym Workout',
    date: 'Mar 11, 2026',
    duration: '60 min',
    steps: '2,100',
    calories: '520',
    type: 'Gym',
    icon: <Dumbbell className="w-4 h-4" />
  },
];

const achievements = [
  { id: 1, emoji: '🏅', label: '250 Workouts Completed', achieved: true },
  { id: 2, emoji: '🔥', label: '100 Active Days Streak', achieved: true },
  { id: 3, emoji: '🏃', label: '1000 km Distance', achieved: true },
];

export function TrackingHistory({ onBack }: TrackingHistoryProps) {
  const [activeTab, setActiveTab] = useState<Tab>('weekly');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDateData, setSelectedDateData] = useState<{ date: Date; type: 'day' | 'week' } | null>(null);

  const handleDateSelect = (date: Date, type: 'day' | 'week') => {
    setSelectedDateData({ date, type });
    setShowCalendar(false);
    // Here you would typically fetch data for the selected date/week
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32 overflow-y-auto">
      {/* Header */}
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
                <h1 className="text-2xl font-black italic uppercase tracking-tighter">Tracking History</h1>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/40 mt-0.5">
                  Review your past workouts and activity progress
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowCalendar(true)}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all active:scale-90"
              >
                <CalendarIcon className="w-5 h-5 text-white/60" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all active:scale-90">
                <Filter className="w-5 h-5 text-white/60" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pb-4">
          <div className="flex items-center gap-8 relative border-b border-white/5">
            {(['weekly', 'monthly', 'yearly'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative pb-4 flex items-center transition-all"
              >
                <span className={`text-sm font-black uppercase tracking-widest transition-colors ${
                  activeTab === tab ? 'text-[#CCFF00]' : 'text-white/30'
                }`}>
                  {tab}
                </span>
                {activeTab === tab && (
                  <motion.div
                    layoutId="historyTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#CCFF00] rounded-t-full shadow-[0_0_12px_rgba(204,255,0,0.4)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="px-6 space-y-6 mt-6">
        {/* Weekly View */}
        {activeTab === 'weekly' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Week Summary Card */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-[#CCFF00]/30 p-6 shadow-xl shadow-[#CCFF00]/5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-sm font-black uppercase tracking-[0.15em]">Week: Mar 10 – Mar 16</h2>
                  <p className="text-[10px] text-white/40 font-bold mt-1">Weekly Summary</p>
                </div>
                <Target className="w-6 h-6 text-[#CCFF00]" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-white/40">
                    <Footprints className="w-4 h-4" />
                    <p className="text-[9px] font-bold uppercase tracking-widest">Steps</p>
                  </div>
                  <p className="text-2xl font-black italic tracking-tighter text-[#CCFF00]">72,300</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-white/40">
                    <Flame className="w-4 h-4" />
                    <p className="text-[9px] font-bold uppercase tracking-widest">Calories</p>
                  </div>
                  <p className="text-2xl font-black italic tracking-tighter text-[#CCFF00]">5,200 Cal</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-white/40">
                    <Dumbbell className="w-4 h-4" />
                    <p className="text-[9px] font-bold uppercase tracking-widest">Workouts</p>
                  </div>
                  <p className="text-2xl font-black italic tracking-tighter">6 Sessions</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <div className="flex items-center gap-2 mb-2 text-white/40">
                    <TrendingUp className="w-4 h-4" />
                    <p className="text-[9px] font-bold uppercase tracking-widest">Distance</p>
                  </div>
                  <p className="text-2xl font-black italic tracking-tighter">21 km</p>
                </div>
              </div>

              {/* Workout Icons */}
              <div className="flex items-center gap-4 mb-6">
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Workouts:</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <span className="text-base">🏃</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/60">Running</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <span className="text-base">🚶</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/60">Walking</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                    <span className="text-base">🚴</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/60">Cycling</span>
                  </div>
                </div>
              </div>

              {/* Daily Activity Chart */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Daily Activity</p>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyData}>
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
                        dataKey="activity" 
                        fill="url(#weeklyBarGradient)" 
                        radius={[8, 8, 0, 0]}
                      />
                      <defs>
                        <linearGradient id="weeklyBarGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#CCFF00" stopOpacity={0.8} />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.4} />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Monthly View */}
        {activeTab === 'monthly' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Month Summary Card */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-[#CCFF00]/30 p-6 shadow-xl shadow-[#CCFF00]/5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight">March 2026</h2>
                  <p className="text-[10px] text-white/40 font-bold mt-1">Monthly Summary</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Total Steps</p>
                  <p className="text-3xl font-black italic tracking-tighter text-[#CCFF00]">310,000</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Calories</p>
                  <p className="text-3xl font-black italic tracking-tighter text-[#CCFF00]">21,500 Cal</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Workouts</p>
                  <p className="text-3xl font-black italic tracking-tighter">24</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Distance</p>
                  <p className="text-3xl font-black italic tracking-tighter">86 km</p>
                </div>
              </div>

              {/* Consistency Score */}
              <div className="flex items-center gap-6 mb-6 p-4 bg-white/5 rounded-2xl border border-white/5">
                <div className="relative w-20 h-20">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="40" cy="40" r="32" stroke="white" strokeWidth="6" fill="none" opacity="0.05" />
                    <circle
                      cx="40" cy="40" r="32" stroke="#CCFF00" strokeWidth="6" fill="none"
                      strokeDasharray="201" strokeDashoffset="36" strokeLinecap="round"
                      className="drop-shadow-[0_0_8px_rgba(204,255,0,0.4)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-black italic tracking-tighter text-[#CCFF00]">82%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black uppercase tracking-tight mb-1">Consistency</p>
                  <p className="text-[10px] text-white/40 font-bold">Excellent performance this month</p>
                </div>
              </div>

              {/* Weekly Progress Chart */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Weekly Progress</p>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyWeeklyProgress}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis 
                        dataKey="week" 
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
                      <Line 
                        type="monotone" 
                        dataKey="workouts" 
                        stroke="#CCFF00" 
                        strokeWidth={3}
                        dot={{ fill: '#CCFF00', r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Yearly View */}
        {activeTab === 'yearly' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Year Summary Card */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-[#CCFF00]/30 p-6 shadow-xl shadow-[#CCFF00]/5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-black uppercase tracking-tight">2026 Fitness Summary</h2>
                  <p className="text-[10px] text-white/40 font-bold mt-1">Your best year yet</p>
                </div>
                <Trophy className="w-8 h-8 text-[#CCFF00]" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Total Steps</p>
                  <p className="text-2xl font-black italic tracking-tighter text-[#CCFF00]">3.4M</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Calories</p>
                  <p className="text-2xl font-black italic tracking-tighter text-[#CCFF00]">210K</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Workouts</p>
                  <p className="text-2xl font-black italic tracking-tighter">260</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">Distance</p>
                  <p className="text-2xl font-black italic tracking-tighter">1,480 km</p>
                </div>
              </div>

              {/* 12-Month Activity Chart */}
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">12-Month Activity</p>
                <div className="h-40">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={yearlyMonthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis 
                        dataKey="month" 
                        stroke="rgba(255,255,255,0.2)" 
                        tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 9 }}
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
                        dataKey="workouts" 
                        fill="url(#yearlyGradient)" 
                        radius={[6, 6, 0, 0]}
                      />
                      <defs>
                        <linearGradient id="yearlyGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#CCFF00" stopOpacity={0.8} />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.4} />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Achievement Badges */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-4">Achievement Badges</p>
                <div className="flex gap-4">
                  {achievements.map((achievement) => (
                    <div 
                      key={achievement.id}
                      className={`flex-1 p-4 rounded-2xl border transition-all ${
                        achievement.achieved 
                          ? 'bg-[#CCFF00]/10 border-[#CCFF00]/30' 
                          : 'bg-white/5 border-white/5 opacity-40'
                      }`}
                    >
                      <div className="text-3xl mb-2 text-center">{achievement.emoji}</div>
                      <p className="text-[9px] font-black uppercase tracking-widest text-center">
                        {achievement.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Workout Session List */}
        <div className="space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.15em] px-2">Recent Workout Sessions</h2>
          {workoutSessions.map((session) => (
            <div 
              key={session.id}
              className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] border border-white/10 p-6 hover:border-[#CCFF00]/30 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00]">
                  {session.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-base font-black italic uppercase tracking-tight mb-1">{session.title}</h3>
                      <p className="text-[10px] text-white/40 font-bold uppercase">{session.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-white/40">
                      {session.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1">Duration</p>
                      <p className="text-sm font-black italic tracking-tighter">{session.duration}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1">Steps</p>
                      <p className="text-sm font-black italic tracking-tighter">{session.steps}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-1">Calories</p>
                      <p className="text-sm font-black italic tracking-tighter text-[#CCFF00]">{session.calories}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Performance Insight */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-[#CCFF00]/10 backdrop-blur-2xl rounded-[2.5rem] border border-cyan-500/20 p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
              <Bot className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-black uppercase tracking-tight text-cyan-400 mb-2">AI Performance Insight</h3>
              <p className="text-sm text-white/80 leading-relaxed italic mb-4">
                "You were most active in March. Your weekly workouts increased by 22% compared to February."
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400">March Peak</span>
                </div>
                <div className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                  <span className="text-[9px] font-black uppercase tracking-widest text-cyan-400">+22% Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={showCalendar}
        onClose={() => setShowCalendar(false)}
        onSelectDate={handleDateSelect}
      />
    </div>
  );
}