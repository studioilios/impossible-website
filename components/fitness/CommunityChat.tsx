"use client"
import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Users, 
  MoreVertical, 
  Plus, 
  Smile, 
  Send, 
  Mic, 
  Trophy, 
  Activity, 
  Map as MapIcon, 
  Image as ImageIcon,
  MessageSquare,
  X,
  UserPlus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: {
    text?: string;
    image?: string;
    workout?: {
      title: string;
      distance?: string;
      time?: string;
      pace?: string;
      mapPreview?: string;
    };
    challenge?: {
      title: string;
      participants: number;
    };
  };
  timestamp: string;
  type: 'user' | 'other' | 'system';
}

const CHANNELS = [
  { id: 'general', label: '#General' },
  { id: 'runs', label: '#Runs' },
  { id: 'challenges', label: '#Challenges' },
  { id: 'nutrition', label: '#Nutrition' },
  { id: 'recovery', label: '#Recovery' },
];

const MOCK_MESSAGES: Message[] = [
  {
    id: 's1',
    senderId: 'system',
    senderName: 'System',
    senderAvatar: '',
    content: { text: 'Ravi joined the club' },
    timestamp: '',
    type: 'system'
  },
  {
    id: '1',
    senderId: 'u2',
    senderName: 'Sarah Miller',
    senderAvatar: 'https://i.pravatar.cc/150?u=sarah',
    content: { text: 'Hey team! Anyone up for a sunrise run tomorrow? 🏃‍♀️' },
    timestamp: '10:24 AM',
    type: 'other'
  },
  {
    id: '2',
    senderId: 'u3',
    senderName: 'David Chen',
    senderAvatar: 'https://i.pravatar.cc/150?u=david',
    content: { text: 'Count me in! Central Park?' },
    timestamp: '10:26 AM',
    type: 'other'
  },
  {
    id: 's2',
    senderId: 'system',
    senderName: 'System',
    senderAvatar: '',
    content: { text: 'Weekly Run Challenge started' },
    timestamp: '',
    type: 'system'
  },
  {
    id: '3',
    senderId: 'me',
    senderName: 'You',
    senderAvatar: 'https://i.pravatar.cc/150?u=me',
    content: { 
      text: 'Just finished my morning session! Feeling great.',
      workout: {
        title: 'Morning Tempo Run',
        distance: '8.4 km',
        time: '42:15',
        pace: '5:01 /km',
        mapPreview: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjByb3V0ZSUyMGZpdG5lc3N8ZW58MXx8fHwxNzc3ODg5OTA2fDA&ixlib=rb-4.1.0&q=80&w=400'
      }
    },
    timestamp: '10:45 AM',
    type: 'user'
  },
  {
    id: 's3',
    senderId: 'system',
    senderName: 'System',
    senderAvatar: '',
    content: { text: 'Coach Ananya is live now 🎙️' },
    timestamp: '',
    type: 'system'
  },
  {
    id: '4',
    senderId: 'u4',
    senderName: 'Elena Rodriguez',
    senderAvatar: 'https://i.pravatar.cc/150?u=elena',
    content: { 
      text: 'Check out this post from the yoga community!',
      image: 'https://images.unsplash.com/photo-1758274531664-6f340855f3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMG5hdHVyZSUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MTQxNTg3MXww&ixlib=rb-4.1.0&q=80&w=800'
    },
    timestamp: '11:02 AM',
    type: 'other'
  }
];

interface CommunityChatProps {
  club: {
    id: string;
    name: string;
    members: number;
    image: string;
  };
  onBack: () => void;
}

export function CommunityChat({ club, onBack }: CommunityChatProps) {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [activeChannel, setActiveChannel] = useState('general');
  const [showMembers, setShowMembers] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      senderName: 'You',
      senderAvatar: 'https://i.pravatar.cc/150?u=me',
      content: { text: inputValue },
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'user'
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
    
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col overflow-hidden">
      {/* Top Bar */}
      <header className="px-6 pt-12 pb-4 bg-black/95 backdrop-blur-xl border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg font-black italic uppercase tracking-tighter">{club.name}</h1>
            <p className="text-[10px] text-[#CCFF00] font-bold uppercase tracking-widest">
              Active now • {club.members} members
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setShowMembers(true)}
            className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
          >
            <Users className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Voice Room Indicator */}
      <div className="px-6 py-3 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full animate-pulse">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-[9px] font-black uppercase tracking-widest text-red-400">Live Voice</span>
          </div>
          <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Morning Walk Live • 6 joined</span>
        </div>
        <button className="px-3 py-1 bg-[#CCFF00] text-black rounded-lg text-[9px] font-black uppercase tracking-widest">Join</button>
      </div>

      {/* Quick Filter Tabs */}
      <div className="flex items-center gap-3 overflow-x-auto px-6 py-4 scrollbar-hide border-b border-white/5">
        {CHANNELS.map((channel) => (
          <button
            key={channel.id}
            onClick={() => setActiveChannel(channel.id)}
            className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
              activeChannel === channel.id 
                ? 'bg-[#CCFF00] text-black border-[#CCFF00]' 
                : 'bg-white/5 text-white/30 border-white/5'
            }`}
          >
            {channel.label}
          </button>
        ))}
      </div>

      {/* Message Feed */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scrollbar-hide"
      >
        {messages.map((msg) => (
          <div key={msg.id}>
            {msg.type === 'system' ? (
              <div className="flex justify-center my-4">
                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                  {msg.content.text}
                </p>
              </div>
            ) : (
              <div className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                {msg.type === 'other' && (
                  <span className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-2 ml-1">
                    {msg.senderName}
                  </span>
                )}
                <div className="flex items-end gap-3 max-w-[85%]">
                  {msg.type === 'other' && (
                    <div className="w-8 h-8 rounded-full border border-white/10 p-0.5 mb-1">
                      <img src={msg.senderAvatar} alt="" className="w-full h-full rounded-full object-cover" />
                    </div>
                  )}
                  <div className={`rounded-2xl p-4 ${
                    msg.type === 'user' 
                      ? 'bg-black border border-[#CCFF00] shadow-[0_0_15px_rgba(204,255,0,0.1)]' 
                      : 'bg-white/5 border border-white/10'
                  }`}>
                    {msg.content.text && (
                      <p className="text-sm text-white/90 leading-relaxed italic">{msg.content.text}</p>
                    )}
                    
                    {msg.content.image && (
                      <div className="mt-3 rounded-xl overflow-hidden border border-white/10">
                        <ImageWithFallback src={msg.content.image} alt="Shared content" className="w-full h-auto" />
                      </div>
                    )}

                    {msg.content.workout && (
                      <div className="mt-3 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                        <div className="relative aspect-video">
                          <ImageWithFallback src={msg.content.workout.mapPreview!} alt="Map" className="w-full h-full object-cover grayscale opacity-60" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                          <div className="absolute bottom-3 left-3">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">{msg.content.workout.title}</h4>
                          </div>
                        </div>
                        <div className="p-3 grid grid-cols-3 gap-2">
                          <div>
                            <p className="text-[7px] text-white/20 font-black uppercase tracking-widest">Dist</p>
                            <p className="text-[10px] font-black">{msg.content.workout.distance}</p>
                          </div>
                          <div>
                            <p className="text-[7px] text-white/20 font-black uppercase tracking-widest">Time</p>
                            <p className="text-[10px] font-black">{msg.content.workout.time}</p>
                          </div>
                          <div>
                            <p className="text-[7px] text-white/20 font-black uppercase tracking-widest">Pace</p>
                            <p className="text-[10px] font-black">{msg.content.workout.pace}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-[8px] text-white/20 font-bold uppercase tracking-widest mt-2 px-1">
                  {msg.timestamp}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="px-6 py-6 bg-black border-t border-white/10 flex items-center gap-3">
        <button className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 active:scale-90 transition-all">
          <Plus className="w-5 h-5" />
        </button>
        <div className="flex-1 relative">
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Message your community..."
            className="w-full h-12 bg-white/5 border border-white/10 rounded-2xl px-4 py-2 text-sm text-white focus:outline-none focus:border-[#CCFF00]/50 transition-all placeholder:text-white/20"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#CCFF00] transition-colors">
            <Smile className="w-5 h-5" />
          </button>
        </div>
        <button 
          onClick={handleSendMessage}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 ${
            inputValue.trim() ? 'bg-[#CCFF00] text-black shadow-[0_5px_15px_rgba(204,255,0,0.3)]' : 'bg-white/5 text-white/20'
          }`}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

      {/* Members Panel Overlay */}
      <AnimatePresence>
        {showMembers && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute inset-0 z-[60] bg-black flex flex-col"
          >
            <header className="px-6 pt-12 pb-4 bg-black border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setShowMembers(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-lg font-black italic uppercase tracking-tighter">Members</h2>
              </div>
              <button className="w-10 h-10 rounded-xl bg-[#CCFF00] flex items-center justify-center text-black">
                <UserPlus className="w-5 h-5" />
              </button>
            </header>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Admins */}
              <div>
                <h3 className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-4">Admins & Coaches (2)</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Coach Ananya', avatar: 'https://i.pravatar.cc/150?u=ananya', role: 'Head Coach' },
                    { name: 'Sarah Miller', avatar: 'https://i.pravatar.cc/150?u=sarah', role: 'Founder' },
                  ].map((m) => (
                    <div key={m.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                          <div className="absolute inset-0 rounded-full border border-[#CCFF00] p-[1px]">
                            <img src={m.avatar} alt="" className="w-full h-full rounded-full object-cover" />
                          </div>
                          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#CCFF00] rounded-full border-2 border-black" />
                        </div>
                        <div>
                          <p className="text-xs font-black italic uppercase tracking-tight">{m.name}</p>
                          <p className="text-[8px] text-[#CCFF00] font-bold uppercase tracking-widest">{m.role}</p>
                        </div>
                      </div>
                      <button className="text-white/20">
                         <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Online Members */}
              <div>
                <h3 className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-4">Online Members (12)</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center justify-between opacity-80">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10">
                          <img src={`https://i.pravatar.cc/150?u=m${i}`} alt="" className="w-full h-full rounded-full object-cover border border-white/10" />
                          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black" />
                        </div>
                        <div>
                          <p className="text-xs font-black italic uppercase tracking-tight">Member {i}</p>
                          <p className="text-[8px] text-white/30 font-bold uppercase tracking-widest">Active 2m ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 bg-black border-t border-white/5">
              <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-[#CCFF00]">
                Invite Friend
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
