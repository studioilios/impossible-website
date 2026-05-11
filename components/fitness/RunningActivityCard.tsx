"use client"
import React, { useState } from 'react';
import { Share2, MapPin, Clock, ArrowUpRight, Download,  MessageCircle, X, Activity, Bike, Footprints } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SiInstagram as Instagram, SiYoutube, SiX  as Twitter} from '@icons-pack/react-simple-icons'
interface ActivityCardProps {
  onNavigate?: (screen: string) => void;
  type?: 'running' | 'cycling' | 'walking';
  title?: string;
  caption?: string;
  date?: string;
  stats?: { label: string; value: string }[];
  mapImage?: string;
  routeColor?: string;
}

export function RunningActivityCard({ 
  onNavigate, 
  type = 'running',
  title = 'Running',
  caption = 'Guys, check out my morning run!',
  date = '06.08.2023 at 8:13 AM',
  stats = [
    { label: 'Distance', value: '1.92 mi' },
    { label: 'Elev Gain', value: '201 ft' },
    { label: 'Time', value: '16m 57s' },
  ],
  mapImage = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop",
  routeColor = "#ef4444"
}: ActivityCardProps) {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const shareOptions = [
    { name: 'Instagram Story', icon: <Instagram className="w-5 h-5" />, color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
    { name: 'WhatsApp', icon: <MessageCircle className="w-5 h-5" />, color: 'bg-[#25D366]' },
    { name: 'X / Twitter', icon: <Twitter className="w-5 h-5" />, color: 'bg-black' },
    { name: 'Download Image', icon: <Download className="w-5 h-5" />, color: 'bg-gray-600' },
  ];

  const getIcon = () => {
    switch(type) {
      case 'cycling': return <Bike className="w-3 h-3" />;
      case 'walking': return <Footprints className="w-3 h-3" />;
      default: return <Activity className="w-3 h-3" />;
    }
  };

  return (
    <div className="mb-6">
      {/* Main Card */}
      <div 
        className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-xl cursor-pointer hover:border-white/20 transition-all group"
        onClick={() => onNavigate?.('activity')}
      >
        {/* Top Section - Map Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop"
            alt="Running Route Map"
            className="w-full h-full object-cover opacity-80"
          />
          
          {/* Simulated Route Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 200">
            <path
              d="M 50 150 C 100 120, 150 180, 200 100 S 300 120, 350 50"
              fill="none"
              stroke="#ef4444"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-md"
            />
            {/* Start point */}
            <circle cx="50" cy="150" r="4" fill="white" stroke="#ef4444" strokeWidth="2" />
            {/* End point */}
            <circle cx="350" cy="50" r="4" fill="#ef4444" />
          </svg>

          {/* Running Badge */}
          <div className="absolute top-4 left-4 bg-black px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
            <div className="text-white">
              {getIcon()}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">{title}</span>
          </div>

          {/* Floating Share Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsShareOpen(true);
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95 z-10"
          >
            <Share2 className="w-5 h-5" />
          </button>

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Middle Section - Caption */}
        <div className="p-5">
          <h4 className="text-base font-medium text-white mb-1">“{caption}”</h4>
          <p className="text-xs text-gray-500 mb-4">{date}</p>

          {/* Bottom Section - Stats Row */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{stat.label}</p>
                <p className="text-sm font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Share Bottom Sheet */}
      <AnimatePresence>
        {isShareOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsShareOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            {/* Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 bg-[#121212] rounded-t-[2.5rem] p-8 z-50 border-t border-white/10 shadow-2xl max-w-md mx-auto"
            >
              {/* Handle */}
              <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-8" />
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Share Activity</h3>
                <button 
                  onClick={() => setIsShareOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Share Preview Card - 1:1 Aspect Ratio */}
              <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 mb-8 aspect-square relative group">
                {/* Export Image Background */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={mapImage}
                    alt="Share Preview"
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Blurred overlay for text readability */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
                  
                  {/* Prominent Route Overlay on Share Image */}
                  <svg className="absolute inset-0 w-full h-full p-12" viewBox="0 0 400 400">
                    <path
                      d="M 50 300 C 100 240, 150 360, 200 200 S 300 240, 350 100"
                      fill="none"
                      stroke={routeColor}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    />
                  </svg>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                  {/* Top: Activity Type */}
                  <div className="flex justify-start">
                    <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2">
                      <div className="text-[#CCFF00]">
                        {getIcon()}
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest">{title}</span>
                    </div>
                  </div>

                  {/* Bottom: Stats & Brand */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 bg-black/60 backdrop-blur-xl p-4 rounded-3xl border border-white/10 shadow-2xl">
                      {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <p className="text-[8px] text-white/50 uppercase tracking-widest mb-1">{stat.label}</p>
                          <p className="text-sm font-black italic">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#CCFF00] rounded-xl flex items-center justify-center text-black font-black italic rotate-12">S</div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest">Studio ILIOS</p>
                          <p className="text-[8px] text-white/40 uppercase tracking-[0.2em]">Engineering Your Fitness</p>
                        </div>
                      </div>
                      <div className="text-[8px] text-white/30 font-medium">@alex_fitness</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {shareOptions.map((option, i) => (
                  <button 
                    key={i}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${option.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform active:scale-95`}>
                      {option.icon}
                    </div>
                    <span className="text-[10px] text-gray-400 text-center font-medium leading-tight">
                      {option.name}
                    </span>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setIsShareOpen(false)}
                className="w-full py-4 mt-8 bg-white text-black rounded-2xl font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                Done
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
