"use client"
import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Search, 
  Settings, 
  Plus, 
  ArrowLeft,
  Trophy,
  Users2,
  Mic,
  Heart,
  MessageCircle,
  Share2,
  Activity,
  Bike,
  Waves,
  Footprints,
  Calendar,
  MapPin,
  Flame,
  UserPlus,
  Play,
  Crown,
  TrendingUp,
  Bell,
  Send,
  MoreVertical,
  Bookmark,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Stories } from './Stories';
import { CommunityBottomNav } from './CommunityBottomNav';
import { Leaderboard } from './Leaderboard';

type TabType = 'community' | 'challenges' | 'clubs';
type ChannelType = 'all' | 'run' | 'ride' | 'walk' | 'swim' | 'yoga' | 'strength';
type CommunityNavScreen = 'feed' | 'search' | 'chat' | 'leaderboard' | 'reels';

interface FeedPost {
  id: string;
  userName: string;
  userAvatar: string;
  activityType: 'run' | 'ride' | 'walk' | 'swim' | 'yoga' | 'strength';
  timestamp: string;
  content: {
    text?: string;
    image?: string;
    mapPreview?: string;
  };
  stats?: {
    distance?: string;
    time?: string;
    elevation?: string;
    kcal?: string;
  };
  likes: number;
  comments: number;
  isLiked?: boolean;
  linkedChallenge?: string;
}

const CHANNELS: { id: ChannelType; label: string }[] = [
  { id: 'all', label: '#All' },
  { id: 'run', label: '#Run' },
  { id: 'ride', label: '#Ride' },
  { id: 'walk', label: '#Walk' },
  { id: 'swim', label: '#Swim' },
  { id: 'yoga', label: '#Yoga' },
  { id: 'strength', label: '#Strength' },
];

const FEED_POSTS: FeedPost[] = [
  {
    id: 'p1',
    userName: 'Sarah Miller',
    userAvatar: 'https://i.pravatar.cc/150?u=sarah',
    activityType: 'run',
    timestamp: '2h ago',
    content: {
      text: 'Morning run in Central Park was amazing! The weather is perfect for a personal best.',
      image: 'https://images.unsplash.com/photo-1766066014260-2c886decef4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbWFyYXRob24lMjBydW5uZXIlMjBjb21tdW5pdHklMjBncm91cHxlbnwxfHx8fDE3NzEzMjM4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    stats: {
      distance: '8.42 km',
      time: '42:15',
      elevation: '45m'
    },
    likes: 24,
    comments: 5,
    isLiked: true,
    linkedChallenge: 'City Marathon 2026'
  },
  {
    id: 'p2',
    userName: 'David Chen',
    userAvatar: 'https://i.pravatar.cc/150?u=david',
    activityType: 'ride',
    timestamp: '5h ago',
    content: {
      mapPreview: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjByb3V0ZSUyMGZpdG5lc3N8ZW58MXx8fHwxNzc3ODg5OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    stats: {
      distance: '32.1 km',
      time: '1:12:30',
      elevation: '210m'
    },
    likes: 18,
    comments: 2
  },
  {
    id: 'p3',
    userName: 'Elena Rodriguez',
    userAvatar: 'https://i.pravatar.cc/150?u=elena',
    activityType: 'yoga',
    timestamp: '8h ago',
    content: {
      text: 'Deep stretching session to recover from yesterday\'s leg day. Feeling grounded.',
      image: 'https://images.unsplash.com/photo-1758274531664-6f340855f3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMG5hdHVyZSUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MTQxNTg3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    stats: {
      time: '55:00',
      kcal: '120 kcal'
    },
    likes: 31,
    comments: 8
  }
];

const CHALLENGES = [
  {
    id: 'ch1',
    title: 'City Marathon 2026',
    type: 'Marathon',
    date: 'Oct 24, 2026',
    location: 'Central Park South',
    participants: 12400,
    image: 'https://images.unsplash.com/photo-1766066014260-2c886decef4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbWFyYXRob24lMjBydW5uZXIlMjBjb21tdW5pdHklMjBncm91cHxlbnwxfHx8fDE3NzEzMjM4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    distance: '42.2 km'
  },
  {
    id: 'ch2',
    title: '5K Summer Sprint',
    type: 'Sprint',
    date: 'July 12, 2026',
    location: 'Riverside Drive',
    participants: 850,
    image: 'https://images.unsplash.com/photo-1712634047253-e292abdff553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwbW9ybmluZyUyMHN1bnNoaW5lJTIwY2l0eSUyMHJvYWR8ZW58MXx8fHwxNzcxNDE1ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    distance: '5.0 km'
  }
];

const CLUBS = [
  {
    id: 'cl1',
    name: 'Urban Runners NYC',
    city: 'New York',
    activity: 'run',
    members: 1240,
    image: 'https://images.unsplash.com/photo-1766066014260-2c886decef4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbWFyYXRob24lMjBydW5uZXIlMjBjb21tdW5pdHklMjBncm91cHxlbnwxfHx8fDE3NzEzMjM4Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: 'cl2',
    name: 'Coastal Cyclists',
    city: 'San Francisco',
    activity: 'ride',
    members: 860,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaW5nJTIwcm9hZCUyMGdyb3VwfGVufDF8fHx8MTc3MTMyMzg4MHww&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

interface CommunityProps {
  onBack: () => void;
  onNavigate: (screen: any, data?: any) => void;
}

export function Community({ onBack, onNavigate }: CommunityProps) {
  const [activeTab, setActiveTab] = useState<TabType>('community');
  const [activeChannel, setActiveChannel] = useState<ChannelType>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [joinedClubIds, setJoinedClubIds] = useState<string[]>(['cl1']); // Default joined one club
  const [communityScreen, setCommunityScreen] = useState<CommunityNavScreen>('feed');

  const joinedClubs = CLUBS.filter(club => joinedClubIds.includes(club.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAction = (type: string) => {
    // Simulated haptic feedback
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      {/* Sticky Top Bar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 px-6 pt-12 pb-4 ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' : 'bg-black'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-black italic uppercase tracking-tighter">Community</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-[#CCFF00] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-[#CCFF00] transition-colors">
              <UserPlus className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-[#CCFF00] transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Top Tabs */}
        <div className="flex items-center gap-8 relative">
          {(['community', 'challenges', 'clubs'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                handleAction('tab');
              }}
              className="relative py-2 transition-all"
            >
              <span className={`text-sm font-black uppercase tracking-[0.2em] transition-colors ${
                activeTab === tab ? 'text-white' : 'text-white/30'
              }`}>
                {tab}
              </span>
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CCFF00] shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </header>

      <main>
        {/* Show Leaderboard when leaderboard nav is active */}
        {communityScreen === 'leaderboard' ? (
          <Leaderboard />
        ) : (
          <>
            {/* Stories Section - Only show on feed */}
            {communityScreen === 'feed' && (
              <section className="px-6 mt-6">
                <Stories />
              </section>
            )}

            <AnimatePresence mode="wait">
              {(() => {
                if (communityScreen === 'feed' && activeTab === 'community') {
                  return (
                    <motion.div
                      key="community-feed"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      {/* Channel Filter Pills */}
                      <div className="px-6 flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
                        {CHANNELS.map((channel) => (
                          <button
                            key={channel.id}
                            onClick={() => {
                              setActiveChannel(channel.id);
                              handleAction('filter');
                            }}
                            className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                              activeChannel === channel.id 
                                ? 'bg-[#CCFF00] text-black border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.2)]' 
                                : 'bg-white/5 text-white/40 border-white/5 hover:border-white/20'
                            }`}
                          >
                            {channel.label}
                          </button>
                        ))}
                      </div>

                      {/* Community Feed */}
                      <div className="px-6 space-y-6">
                        {/* Weekly Leaderboard */}
                        <div className="bg-gradient-to-br from-[#CCFF00]/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-2xl rounded-[2.5rem] border border-[#CCFF00]/20 p-6 shadow-xl">
                          <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-[#CCFF00]/20 flex items-center justify-center">
                                <Crown className="w-5 h-5 text-[#CCFF00]" />
                              </div>
                              <div>
                                <h3 className="text-base font-black uppercase tracking-tight">Weekly Leaderboard</h3>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">Top Performers</p>
                              </div>
                            </div>
                            <TrendingUp className="w-5 h-5 text-cyan-400" />
                          </div>

                          <div className="space-y-3">
                            {[
                              { rank: 1, name: 'Alex M.', steps: '82,000', avatar: 'https://i.pravatar.cc/150?u=alex' },
                              { rank: 2, name: 'Maya K.', steps: '74,000', avatar: 'https://i.pravatar.cc/150?u=maya' },
                              { rank: 3, name: 'Daniel R.', steps: '69,000', avatar: 'https://i.pravatar.cc/150?u=daniel' }
                            ].map((user) => (
                              <div 
                                key={user.rank}
                                className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-[#CCFF00]/30 transition-all"
                              >
                                <div className="flex items-center gap-4">
                                  <div className="relative w-12 h-12 flex items-center justify-center">
                                    {user.rank === 1 && (
                                      <div className="absolute inset-0 bg-[#CCFF00] rounded-full animate-pulse opacity-20" />
                                    )}
                                    <span className={`text-xl font-black italic z-10 ${
                                      user.rank === 1 ? 'text-[#CCFF00]' : user.rank === 2 ? 'text-cyan-400' : 'text-white/60'
                                    }`}>
                                      {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                                    </span>
                                  </div>
                                  <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${user.rank === 1 ? 'border-[#CCFF00]' : 'border-white/10'}`}>
                                    <ImageWithFallback src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-black uppercase tracking-tight">{user.name}</p>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/40">{user.steps} steps</p>
                                  </div>
                                </div>
                                {user.rank === 1 && (
                                  <Crown className="w-5 h-5 text-[#CCFF00]" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Trending Challenges */}
                        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/5 p-6 shadow-xl">
                          <div className="flex items-center justify-between mb-6">
                            <div>
                              <h3 className="text-base font-black uppercase tracking-tight">Trending Challenges</h3>
                              <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mt-1">Join the community</p>
                            </div>
                            <button className="text-[9px] font-black uppercase tracking-widest text-[#CCFF00]">View All</button>
                          </div>

                          <div className="space-y-3">
                            {[
                              { 
                                id: 1, 
                                title: '10K Steps Challenge', 
                                participants: 2400, 
                                daysLeft: 12, 
                                icon: '👟',
                                color: 'from-[#CCFF00]/20 to-cyan-500/20',
                                borderColor: 'border-[#CCFF00]/30'
                              },
                              { 
                                id: 2, 
                                title: '30 Day Push-up Challenge', 
                                participants: 1850, 
                                daysLeft: 8, 
                                icon: '💪',
                                color: 'from-cyan-500/20 to-purple-500/20',
                                borderColor: 'border-cyan-500/30'
                              },
                              { 
                                id: 3, 
                                title: 'Weekend Cycling Club', 
                                participants: 960, 
                                daysLeft: 2, 
                                icon: '🚴',
                                color: 'from-purple-500/20 to-pink-500/20',
                                borderColor: 'border-purple-500/30'
                              }
                            ].map((challenge) => (
                              <div 
                                key={challenge.id}
                                className={`bg-gradient-to-r ${challenge.color} backdrop-blur-md rounded-2xl border ${challenge.borderColor} p-4 hover:scale-[1.02] transition-all cursor-pointer`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3 flex-1">
                                    <div className="text-2xl">{challenge.icon}</div>
                                    <div className="flex-1">
                                      <h4 className="text-sm font-black uppercase tracking-tight mb-1">{challenge.title}</h4>
                                      <div className="flex items-center gap-3 text-[8px] font-bold uppercase tracking-widest text-white/40">
                                        <span>{challenge.participants.toLocaleString()} joined</span>
                                        <span>•</span>
                                        <span>{challenge.daysLeft} days left</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="px-4 py-2 bg-[#CCFF00] text-black rounded-xl text-[8px] font-black uppercase tracking-widest hover:scale-105 transition-all">
                                    Join
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {FEED_POSTS.filter(p => activeChannel === 'all' || p.activityType === activeChannel).map((post) => (
                          <PostCard key={post.id} post={post} onAction={handleAction} />
                        ))}
                      </div>
                    </motion.div>
                  );
                } else if (communityScreen === 'feed' && activeTab === 'challenges') {
                  return (
                    <motion.div
                      key="challenges"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="px-6 space-y-4"
                    >
                      {CHALLENGES.map((challenge) => (
                        <ChallengeCard key={challenge.id} challenge={challenge} onAction={handleAction} />
                      ))}
                    </motion.div>
                  );
                } else if (communityScreen === 'feed' && activeTab === 'clubs') {
                  return (
                    <motion.div
                      key="clubs"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="px-6 space-y-6"
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Your Communities ({joinedClubs.length})</h2>
                        <button 
                          onClick={() => setJoinedClubIds(['cl1', 'cl2'])}
                          className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]"
                        >
                          Discover More
                        </button>
                      </div>

                      {joinedClubs.length > 0 ? (
                        <div className="grid grid-cols-2 gap-4">
                          {joinedClubs.map((club) => (
                            <ClubCard 
                              key={club.id} 
                              club={club} 
                              onAction={(action) => {
                                if (action === 'chat') {
                                  onNavigate('community-chat', club);
                                } else {
                                  handleAction(action);
                                }
                              }} 
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-12 text-center">
                           <p className="text-xs font-black uppercase tracking-widest text-white/20 mb-6 italic">You haven't joined any clubs yet.</p>
                           <button 
                            onClick={() => setJoinedClubIds(['cl1'])}
                            className="px-8 py-4 bg-[#CCFF00] text-black rounded-2xl text-[10px] font-black uppercase tracking-widest"
                           >
                             Find a Club
                           </button>
                        </div>
                      )}
                    </motion.div>
                  );
                }
                return null;
              })()}
            </AnimatePresence>
          </>
        )}
      </main>

      {/* Voice & Live Elements */}
      <div className="fixed bottom-32 left-6 z-40">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full animate-pulse">
            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
            <span className="text-[10px] font-black uppercase tracking-widest">Live Walk</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
            <Mic className="w-3 h-3 text-[#CCFF00]" />
            <span className="text-[10px] font-black uppercase tracking-widest">Coach Talk</span>
          </div>
        </div>
      </div>

      {/* Floating Create Button / Mic */}
      <div className="fixed bottom-28 right-6 z-50">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleAction('mic')}
          className="w-14 h-14 rounded-2xl bg-[#CCFF00] flex items-center justify-center text-black shadow-[0_10px_30px_rgba(204,255,0,0.3)] border-2 border-black group"
        >
          <Mic className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </motion.button>
      </div>

      {/* Bottom Navigation */}
      <CommunityBottomNav active={communityScreen} onNavigate={(screen) => {
        setCommunityScreen(screen);
        handleAction(screen);
      }} />
    </div>
  );
}

function PostCard({ post, onAction }: { post: FeedPost, onAction: (t: string) => void }) {
  const getActivityIcon = (type: FeedPost['activityType']) => {
    switch (type) {
      case 'run': return <Activity className="w-4 h-4" />;
      case 'ride': return <Bike className="w-4 h-4" />;
      case 'swim': return <Waves className="w-4 h-4" />;
      case 'walk': return <Footprints className="w-4 h-4" />;
      default: return <Flame className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-[#CCFF00]/20 transition-all duration-500 shadow-2xl">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12">
             <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#CCFF00] to-cyan-500 p-[2px]">
               <div className="w-full h-full rounded-full bg-black overflow-hidden">
                 <ImageWithFallback src={post.userAvatar} alt={post.userName} className="w-full h-full object-cover" />
               </div>
             </div>
          </div>
          <div>
            <h3 className="text-sm font-black italic uppercase tracking-tight">{post.userName}</h3>
            <div className="flex items-center gap-2 text-[10px] text-white/30 font-bold uppercase tracking-widest">
              {getActivityIcon(post.activityType)}
              <span>{post.activityType}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-6">
        {post.content.text && (
          <p className="text-sm text-white/70 leading-relaxed mb-4 italic font-medium">
            "{post.content.text}"
          </p>
        )}
        
        {post.content.image && (
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
            <ImageWithFallback src={post.content.image} alt="Post content" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        {post.content.mapPreview && (
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6 border border-white/10">
            <ImageWithFallback src={post.content.mapPreview} alt="Route" className="w-full h-full object-cover grayscale opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#CCFF00]/20 backdrop-blur-md flex items-center justify-center border border-[#CCFF00]/50">
                <Play className="w-5 h-5 text-[#CCFF00] fill-[#CCFF00]" />
              </div>
            </div>
          </div>
        )}

        {/* Stats Row */}
        {post.stats && (
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 mb-6">
            {post.stats.distance && (
              <div>
                <p className="text-[8px] text-white/20 font-black uppercase tracking-widest mb-1">Distance</p>
                <p className="text-sm font-black italic">{post.stats.distance}</p>
              </div>
            )}
            {post.stats.time && (
              <div>
                <p className="text-[8px] text-white/20 font-black uppercase tracking-widest mb-1">Duration</p>
                <p className="text-sm font-black italic">{post.stats.time}</p>
              </div>
            )}
            {(post.stats.elevation || post.stats.kcal) && (
              <div>
                <p className="text-[8px] text-white/20 font-black uppercase tracking-widest mb-1">
                  {post.stats.elevation ? 'Elevation' : 'Calories'}
                </p>
                <p className="text-sm font-black italic text-[#CCFF00]">
                  {post.stats.elevation || post.stats.kcal}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Linked Challenge */}
        {post.linkedChallenge && (
          <div className="flex items-center justify-between px-4 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Linked: {post.linkedChallenge}</span>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest text-cyan-400 underline">Join</button>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onAction('like')}
              className="flex items-center gap-2 group transition-all"
            >
              <Heart className={`w-5 h-5 transition-all ${post.isLiked ? 'fill-[#CCFF00] text-[#CCFF00]' : 'text-white/20 group-hover:text-white/40'}`} />
              <span className={`text-[10px] font-black uppercase tracking-widest ${post.isLiked ? 'text-[#CCFF00]' : 'text-white/20'}`}>{post.likes}</span>
            </button>
            <button 
              onClick={() => onAction('comment')}
              className="flex items-center gap-2 group transition-all"
            >
              <MessageCircle className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-all" />
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{post.comments}</span>
            </button>
          </div>
          <button 
            onClick={() => onAction('share')}
            className="text-white/20 hover:text-white/40 transition-all"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ChallengeCard({ challenge, onAction }: { challenge: any, onAction: (t: string) => void }) {
  return (
    <div className="bg-white/[0.03] rounded-[2rem] border border-white/5 overflow-hidden group hover:border-[#CCFF00]/20 transition-all duration-500">
      <div className="relative h-48">
        <ImageWithFallback src={challenge.image} alt={challenge.title} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <span className="text-[8px] font-black uppercase tracking-widest text-[#CCFF00]">{challenge.distance}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#CCFF00]/60">{challenge.type}</span>
          <div className="flex items-center gap-2">
             <div className="flex -space-x-2">
               {[1, 2, 3].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-white/10 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?u=ch${i}`} alt="user" className="w-full h-full object-cover" />
                 </div>
               ))}
             </div>
             <span className="text-[8px] font-black uppercase tracking-widest text-white/30">+{challenge.participants.toLocaleString()} joined</span>
          </div>
        </div>
        <h3 className="text-xl font-black italic uppercase tracking-tighter mb-4 group-hover:text-[#CCFF00] transition-colors">{challenge.title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 text-white/40">
            <Calendar className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">{challenge.date}</span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <MapPin className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest truncate">{challenge.location}</span>
          </div>
        </div>

        <button 
          onClick={() => onAction('join')}
          className="w-full py-4 bg-[#CCFF00] text-black rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] active:scale-95 transition-all shadow-[0_10px_30px_rgba(204,255,0,0.2)]"
        >
          Join Challenge
        </button>
      </div>
    </div>
  );
}

function ClubCard({ club, onAction }: { club: any, onAction: (t: string) => void }) {
  return (
    <div 
      onClick={() => onAction('chat')}
      className="bg-white/[0.03] rounded-[2rem] p-4 border border-white/5 group hover:border-[#CCFF00]/20 transition-all duration-500 text-center cursor-pointer"
    >
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#CCFF00]/20 to-cyan-500/20 animate-pulse-slow" />
        <div className="absolute inset-[4px] rounded-[1.8rem] bg-black overflow-hidden border border-white/10">
          <ImageWithFallback src={club.image} alt={club.name} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
        </div>
      </div>
      
      <h3 className="text-sm font-black italic uppercase tracking-tight mb-1 group-hover:text-[#CCFF00] transition-colors">{club.name}</h3>
      <p className="text-[8px] text-white/30 font-black uppercase tracking-[0.2em] mb-4">{club.city}</p>
      
      <div className="flex items-center justify-center gap-2 mb-6 text-white/40">
        <Users2 className="w-3 h-3" />
        <span className="text-[10px] font-bold">{club.members}</span>
      </div>

      <div 
        className="w-full py-2.5 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-xl text-[8px] font-black uppercase tracking-[0.2em] text-[#CCFF00] group-hover:bg-[#CCFF00] group-hover:text-black transition-all"
      >
        Enter Chat
      </div>
    </div>
  );
}