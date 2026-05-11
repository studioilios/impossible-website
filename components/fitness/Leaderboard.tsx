"use client"
import React, { useState } from 'react';
import { Crown, TrendingUp, Award, Trophy, Flame, Footprints, Zap, Medal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type LeaderboardTab = 'weekly' | 'monthly';

interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  steps?: string;
  workouts?: number;
  calories?: string;
  points?: number;
  badge?: string;
  trend?: 'up' | 'down' | 'same';
}

const WEEKLY_LEADERBOARD: LeaderboardUser[] = [
  { 
    rank: 1, 
    name: 'Alex Martinez', 
    avatar: 'https://i.pravatar.cc/150?u=alex',
    steps: '82,000',
    workouts: 12,
    calories: '5,420',
    points: 2840,
    badge: '🔥',
    trend: 'up'
  },
  { 
    rank: 2, 
    name: 'Maya Kim', 
    avatar: 'https://i.pravatar.cc/150?u=maya',
    steps: '74,000',
    workouts: 10,
    calories: '4,890',
    points: 2610,
    badge: '⚡',
    trend: 'up'
  },
  { 
    rank: 3, 
    name: 'Daniel Roberts', 
    avatar: 'https://i.pravatar.cc/150?u=daniel',
    steps: '69,000',
    workouts: 9,
    calories: '4,320',
    points: 2380,
    badge: '💪',
    trend: 'same'
  },
  { 
    rank: 4, 
    name: 'Sarah Chen', 
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    steps: '65,000',
    workouts: 8,
    calories: '4,100',
    points: 2220,
    badge: '🏃',
    trend: 'up'
  },
  { 
    rank: 5, 
    name: 'James Wilson', 
    avatar: 'https://i.pravatar.cc/150?u=james',
    steps: '62,000',
    workouts: 8,
    calories: '3,980',
    points: 2140,
    trend: 'down'
  },
  { 
    rank: 6, 
    name: 'Emily Davis', 
    avatar: 'https://i.pravatar.cc/150?u=emily',
    steps: '58,000',
    workouts: 7,
    calories: '3,720',
    points: 1980,
    trend: 'up'
  },
  { 
    rank: 7, 
    name: 'Michael Brown', 
    avatar: 'https://i.pravatar.cc/150?u=michael',
    steps: '54,000',
    workouts: 7,
    calories: '3,540',
    points: 1850,
    trend: 'same'
  },
  { 
    rank: 8, 
    name: 'You', 
    avatar: 'https://i.pravatar.cc/150?u=user',
    steps: '51,000',
    workouts: 6,
    calories: '3,320',
    points: 1720,
    trend: 'up'
  },
];

const MONTHLY_LEADERBOARD: LeaderboardUser[] = [
  { 
    rank: 1, 
    name: 'Maya Kim', 
    avatar: 'https://i.pravatar.cc/150?u=maya',
    steps: '328,000',
    workouts: 45,
    calories: '22,400',
    points: 12840,
    badge: '👑',
    trend: 'up'
  },
  { 
    rank: 2, 
    name: 'Alex Martinez', 
    avatar: 'https://i.pravatar.cc/150?u=alex',
    steps: '312,000',
    workouts: 42,
    calories: '21,100',
    points: 11920,
    badge: '🔥',
    trend: 'up'
  },
  { 
    rank: 3, 
    name: 'Daniel Roberts', 
    avatar: 'https://i.pravatar.cc/150?u=daniel',
    steps: '298,000',
    workouts: 40,
    calories: '19,800',
    points: 11340,
    badge: '⚡',
    trend: 'same'
  },
  { 
    rank: 4, 
    name: 'Sarah Chen', 
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    steps: '285,000',
    workouts: 38,
    calories: '18,900',
    points: 10880,
    badge: '💪',
    trend: 'up'
  },
  { 
    rank: 5, 
    name: 'Emily Davis', 
    avatar: 'https://i.pravatar.cc/150?u=emily',
    steps: '272,000',
    workouts: 36,
    calories: '17,600',
    points: 10240,
    trend: 'up'
  },
  { 
    rank: 6, 
    name: 'James Wilson', 
    avatar: 'https://i.pravatar.cc/150?u=james',
    steps: '265,000',
    workouts: 34,
    calories: '16,800',
    points: 9920,
    trend: 'down'
  },
  { 
    rank: 7, 
    name: 'Michael Brown', 
    avatar: 'https://i.pravatar.cc/150?u=michael',
    steps: '248,000',
    workouts: 32,
    calories: '15,900',
    points: 9380,
    trend: 'same'
  },
  { 
    rank: 8, 
    name: 'Lisa Anderson', 
    avatar: 'https://i.pravatar.cc/150?u=lisa',
    steps: '235,000',
    workouts: 30,
    calories: '14,800',
    points: 8840,
    trend: 'up'
  },
  { 
    rank: 9, 
    name: 'Chris Taylor', 
    avatar: 'https://i.pravatar.cc/150?u=chris',
    steps: '228,000',
    workouts: 29,
    calories: '14,200',
    points: 8520,
    trend: 'down'
  },
  { 
    rank: 10, 
    name: 'You', 
    avatar: 'https://i.pravatar.cc/150?u=user',
    steps: '218,000',
    workouts: 27,
    calories: '13,400',
    points: 8120,
    trend: 'up'
  },
];

export function Leaderboard() {
  const [activeTab, setActiveTab] = useState<LeaderboardTab>('weekly');

  const currentLeaderboard = activeTab === 'weekly' ? WEEKLY_LEADERBOARD : MONTHLY_LEADERBOARD;

  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return null;
  };

  const getTrendIcon = (trend?: 'up' | 'down' | 'same') => {
    if (trend === 'up') return <TrendingUp className="w-3 h-3 text-[#CCFF00]" />;
    if (trend === 'down') return <TrendingUp className="w-3 h-3 text-red-400 rotate-180" />;
    return <div className="w-3 h-3" />;
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Header with Trophy */}
      <div className="px-6">
        <div className="bg-gradient-to-br from-[#CCFF00]/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-2xl rounded-[2.5rem] border border-[#CCFF00]/20 p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFF00]/5 rounded-full blur-3xl" />
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#CCFF00]/20 flex items-center justify-center">
              <Trophy className="w-10 h-10 text-[#CCFF00]" />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-2">Leaderboard</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">
              Compete with the community
            </p>
          </div>
        </div>
      </div>

      {/* Tab Selector */}
      <div className="px-6">
        <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-1.5 inline-flex border border-white/5">
          <button
            onClick={() => setActiveTab('weekly')}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              activeTab === 'weekly'
                ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                : 'text-white/40 hover:text-white/60'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setActiveTab('monthly')}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              activeTab === 'monthly'
                ? 'bg-[#CCFF00] text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                : 'text-white/40 hover:text-white/60'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/5 p-4 text-center">
            <Flame className="w-5 h-5 text-orange-400 mx-auto mb-2" />
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/40 mb-1">Streak</p>
            <p className="text-xl font-black">{activeTab === 'weekly' ? '7' : '28'}</p>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/5 p-4 text-center">
            <Award className="w-5 h-5 text-[#CCFF00] mx-auto mb-2" />
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/40 mb-1">Rank</p>
            <p className="text-xl font-black">#{currentLeaderboard.find(u => u.name === 'You')?.rank || '-'}</p>
          </div>
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/5 p-4 text-center">
            <Zap className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
            <p className="text-[8px] font-bold uppercase tracking-widest text-white/40 mb-1">Points</p>
            <p className="text-xl font-black">
  {currentLeaderboard.find(u => u.name === 'You')?.points?.toLocaleString() ?? '-'}
</p>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="px-6 space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {currentLeaderboard.map((user, index) => {
              const isCurrentUser = user.name === 'You';
              const medal = getMedalEmoji(user.rank);
              const isTopThree = user.rank <= 3;

              return (
                <motion.div
                  key={`${activeTab}-${user.rank}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative bg-white/[0.03] backdrop-blur-xl rounded-2xl border p-4 transition-all ${
                    isCurrentUser
                      ? 'border-[#CCFF00]/50 bg-[#CCFF00]/5 shadow-[0_0_20px_rgba(204,255,0,0.1)]'
                      : isTopThree
                      ? 'border-white/10 hover:border-[#CCFF00]/30'
                      : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  {isTopThree && user.rank === 1 && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-8 h-8 rounded-full bg-[#CCFF00] flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.4)]">
                        <Crown className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-4">
                    {/* Rank */}
                    <div className="flex items-center justify-center w-12 h-12 relative">
                      {medal ? (
                        <span className="text-2xl">{medal}</span>
                      ) : (
                        <span className={`text-lg font-black ${isCurrentUser ? 'text-[#CCFF00]' : 'text-white/40'}`}>
                          {user.rank}
                        </span>
                      )}
                    </div>

                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full overflow-hidden border-2 ${
                      isCurrentUser 
                        ? 'border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.3)]' 
                        : isTopThree
                        ? 'border-cyan-400/50'
                        : 'border-white/10'
                    }`}>
                      <ImageWithFallback src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                    </div>

                    {/* User Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`text-sm font-black uppercase tracking-tight ${
                          isCurrentUser ? 'text-[#CCFF00]' : 'text-white'
                        }`}>
                          {user.name}
                        </p>
                        {user.badge && <span className="text-base">{user.badge}</span>}
                      </div>
                      <div className="flex items-center gap-3 text-[8px] font-bold uppercase tracking-widest text-white/40">
                        <span className="flex items-center gap-1">
                          <Footprints className="w-3 h-3" />
                          {user.steps}
                        </span>
                        <span>•</span>
                        <span>{user.workouts} workouts</span>
                      </div>
                    </div>

                    {/* Points & Trend */}
                    <div className="text-right">
                      <div className={`text-base font-black mb-1 ${
                        isCurrentUser ? 'text-[#CCFF00]' : 'text-white'
                      }`}>
                        {user.points?.toLocaleString()}
                      </div>
                      <div className="flex items-center justify-end gap-1">
                        {getTrendIcon(user.trend)}
                        <span className="text-[8px] font-bold uppercase tracking-widest text-white/30">pts</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="px-6">
        <div className="bg-gradient-to-r from-[#CCFF00]/10 to-cyan-500/10 backdrop-blur-xl rounded-2xl border border-[#CCFF00]/20 p-6 text-center">
          <Medal className="w-8 h-8 text-[#CCFF00] mx-auto mb-3" />
          <h3 className="text-sm font-black uppercase tracking-tight mb-2">Keep Going!</h3>
          <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-4">
            Complete daily challenges to earn more points
          </p>
          <button className="px-6 py-3 bg-[#CCFF00] text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]">
            View Challenges
          </button>
        </div>
      </div>
    </div>
  );
}
