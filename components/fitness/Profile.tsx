"use client"
import React, { useState, useMemo } from 'react';
import { 
  Settings, 
  Trophy, 
  TrendingUp, 
  Camera, 
  Calendar, 
  Activity, 
  Brain, 
  Scale, 
  Heart, 
  FileText, 
  Lock, 
  Shield, 
  ChevronRight, 
  BarChart3, 
  Flame, 
  Zap, 
  Footprints,
  Bike,
  Waves,
  History,
  PieChart,
  BellRing,
  Info,
  Users,
  ClipboardList
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Map, { Source, Layer, Marker } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type ProfileTab = 'overview' | 'flow' | 'stats' | 'settings';
type ActivityType = 'all' | 'walking' | 'running' | 'cycling' | 'swimming';

interface ActivityItem {
  id: string;
  type: ActivityType;
  title: string;
  date: string;
  time: string;
  distance: string;
  duration: string;
  metric: string; 
  metricLabel: string;
  routeCoordinates: [number, number][]; // Swapped SVG path for real coords
}

const activities: ActivityItem[] = [
  {
    id: '1',
    type: 'running',
    title: 'Morning Run',
    date: '06 Aug',
    time: '8:13 AM',
    distance: '8.42',
    duration: '42:15',
    metric: '4:52',
    metricLabel: 'min/km',
    routeCoordinates: [ // Cubbon park outer loop
      [77.5900, 12.9710], [77.5950, 12.9750], 
      [77.6000, 12.9720], [77.6050, 12.9680], [77.6100, 12.9720]
    ],
  },
  {
    id: '2',
    type: 'cycling',
    title: 'Evening Ride',
    date: '05 Aug',
    time: '6:45 PM',
    distance: '24.5',
    duration: '1:12:30',
    metric: '450',
    metricLabel: 'kcal',
    routeCoordinates: [ // Long ride starting near Indiranagar
      [77.6389, 12.9716], [77.6450, 12.9800], 
      [77.6550, 12.9850], [77.6600, 12.9700], [77.6500, 12.9550]
    ],
  },
  {
    id: '3',
    type: 'walking',
    title: 'Park Walk',
    date: '04 Aug',
    time: '5:20 PM',
    distance: '3.10',
    duration: '45:00',
    metric: '124',
    metricLabel: 'kcal',
    routeCoordinates: [ // HSR Layout park walk
      [77.6400, 12.9100], [77.6420, 12.9120], 
      [77.6440, 12.9100], [77.6420, 12.9080], [77.6400, 12.9100]
    ],
  },
];

// Free Dark Mode Map Tiles
const mapStyle = {
  version: 8 as const,
  sources: {
    'carto-dark': {
      type: 'raster' as const,
      tiles: [
        'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
      ],
      tileSize: 256,
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
    }
  },
  layers: [
    {
      id: 'carto-dark-layer',
      type: 'raster' as const,
      source: 'carto-dark',
      minzoom: 0,
      maxzoom: 20
    }
  ]
};

interface ProfileProps {
  onNavigate: (screen: any, data?: any) => void;
  initialTab?: ProfileTab;
}

export function Profile({ onNavigate, initialTab = 'overview' }: ProfileProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>(initialTab);
  const [activeFlowFilter, setActiveFlowFilter] = useState<ActivityType>('all');

  const filteredActivities = activeFlowFilter === 'all' 
    ? activities 
    : activities.filter(a => a.type === activeFlowFilter);

  const getIcon = (type: ActivityType) => {
    switch (type) {
      case 'walking': return <Footprints className="w-4 h-4" />;
      case 'running': return <Activity className="w-4 h-4" />;
      case 'cycling': return <Bike className="w-4 h-4" />;
      case 'swimming': return <Waves className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  const achievements = [
    { label: '90 Day', sublabel: 'Streak', value: '90', icon: '🔥', color: '#9b87f5' },
    { label: 'Water', sublabel: 'Achieved', value: '2.5L', icon: '💧', color: '#7dd3fc' },
    { label: 'Workout', sublabel: 'Achieved', value: '5', icon: '💪', color: '#86efac' },
    { label: 'Calories', sublabel: 'Achieved', value: '2.2k', icon: '🍎', color: '#fca5a5' },
    { label: 'Steps', sublabel: 'Daily', value: '10k', icon: '👟', color: '#cbd5e1' },
  ];

  const progressPictures = [
    { label: 'Jan', image: 'https://images.unsplash.com/photo-1761839256547-0a1cd11b6dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBmaXRuZXNzfGVufDF8fHx8MTc2NzU5NzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { label: 'Dec', image: 'https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwc3RyZW5ndGglMjB0cmFpbmluZ3xlbnwxfHx8fDE3Njc1OTY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { label: 'Nov', image: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZXhlcmNpc2UlMjBkdW1iYmVsbHxlbnwxfHx8fDE3Njc1OTc4MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Top Section - Profile Info */}
      <div className="px-6 pt-6 mb-8">
        <div className="flex items-center justify-between mb-8">
          <div className="w-10 h-10"></div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('community')}
              className="w-10 h-10 rounded-xl bg-[#CCFF00] flex items-center justify-center shadow-[0_4px_15px_rgba(204,255,0,0.2)] active:scale-90 transition-all group"
            >
              <Users className="w-5 h-5 text-black" />
            </button>
            <button 
              onClick={() => onNavigate('planner')}
              className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 transition-colors"
            >
              <ClipboardList className="w-5 h-5 text-gray-400" />
            </button>
            <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 transition-colors">
              <Settings className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#CCFF00] to-[#DFFF00] flex items-center justify-center text-black text-3xl font-black italic">
              A
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-black border-2 border-black flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#CCFF00] flex items-center justify-center text-black">
                <Zap className="w-4 h-4 fill-current" />
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-black italic mb-1 uppercase tracking-tight">Alex Ilios</h1>
          <div className="flex items-center justify-center gap-3 text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <span>23 YRS</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span>182 CM</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span>78 KG</span>
          </div>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5 mb-6">
        <div className="flex items-center justify-between px-6">
          {(['overview', 'flow', 'stats', 'settings'] as ProfileTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative py-4 flex flex-col items-center gap-1 group transition-all"
            >
              <span className={`text-[10px] font-black uppercase tracking-widest transition-colors ${
                activeTab === tab ? 'text-[#CCFF00]' : 'text-white/30 group-hover:text-white/60'
              }`}>
                {tab}
              </span>
              {activeTab === tab && (
                <motion.div
                  layoutId="profileTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#CCFF00]"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'overview' ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="px-6 space-y-6"
          >
            {/* Health Score Card */}
            <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Fitness Score</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl font-black italic tracking-tighter text-[#CCFF00]">63</span>
                    <span className="text-sm font-bold italic text-white/30">/ 100</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tight text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                      Body Type: Athletic
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tight text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Level: Intermediate
                    </div>
                  </div>
                </div>
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="56" cy="56" r="48" stroke="white" strokeWidth="8" fill="none" opacity="0.05" />
                    <circle
                      cx="56" cy="56" r="48" stroke="#CCFF00" strokeWidth="8" fill="none"
                      strokeDasharray="301" strokeDashoffset="111" strokeLinecap="round"
                      className="drop-shadow-[0_0_8px_rgba(204,255,0,0.4)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <Trophy className="w-6 h-6 text-[#CCFF00] mb-0.5" />
                    <span className="text-[8px] font-black text-white/40 uppercase">Top 15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black uppercase tracking-widest">Achievements</h3>
                <ChevronRight className="w-4 h-4 text-white/20" />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-[#111] rounded-[1.5rem] p-5 border border-white/5 w-32"
                  >
                    <div 
                      className="w-12 h-12 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl shadow-inner"
                      style={{ backgroundColor: `${achievement.color}15` }}
                    >
                      {achievement.icon}
                    </div>
                    <div className="text-center mb-0.5 text-lg font-black italic">{achievement.value}</div>
                    <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest text-center">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weight Chart */}
            <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-white/40">Body Weight</h3>
                <div className="flex items-center gap-1.5 text-[#CCFF00]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-bold uppercase">-2.4%</span>
                </div>
              </div>
              <div className="text-4xl font-black italic mb-6 tracking-tighter">160 <span className="text-sm opacity-30">lb</span></div>
              <div className="h-32 w-full relative">
                <svg width="100%" height="100%" viewBox="0 0 300 100" preserveAspectRatio="none">
                  <path
                    d="M0 80 Q50 70, 100 75 T200 60 T300 40"
                    stroke="#CCFF00" strokeWidth="3" fill="none" strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                  />
                  <path
                    d="M0 80 Q50 70, 100 75 T200 60 T300 40 L300 100 L0 100 Z"
                    fill="url(#weightGradient)"
                  />
                  <defs>
                    <linearGradient id="weightGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Transformation */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-black uppercase tracking-widest">Transformation</h3>
                <button className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">Add New</button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {progressPictures.map((picture, index) => (
                  <div key={index} className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative group">
                    <img src={picture.image} alt="" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-[8px] font-black uppercase tracking-widest">{picture.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : activeTab === 'flow' ? (
          <motion.div
            key="flow"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="px-6 pb-10"
          >
            {/* Flow Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-hide">
              {(['all', 'walking', 'running', 'cycling', 'swimming'] as ActivityType[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFlowFilter(filter)}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                    activeFlowFilter === filter 
                      ? 'bg-[#CCFF00] text-black border-[#CCFF00]' 
                      : 'bg-white/5 text-white/40 border-white/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Activity List */}
            <div className="space-y-6">
              {filteredActivities.length > 0 ? (
                filteredActivities.map((activity) => {
                  const geoJsonData = {
                    type: 'Feature' as const,
                    properties: {},
                    geometry: {
                      type: 'LineString' as const,
                      coordinates: activity.routeCoordinates
                    }
                  };

                  return (
                    <motion.div
                      key={activity.id}
                      layout
                      onClick={() => onNavigate('activity-detail', activity)}
                      className="bg-[#111111] rounded-[2.5rem] border border-white/10 overflow-hidden cursor-pointer active:scale-[0.98] transition-all group"
                    >
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00]">
                            {getIcon(activity.type)}
                          </div>
                          <div>
                            <h3 className="text-sm font-black italic uppercase tracking-tight">{activity.title}</h3>
                            <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
                              {activity.date} · {activity.time}
                            </p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-[#CCFF00] transition-colors" />
                      </div>

                      {/* Mini Map */}
                      {activity.type !== 'swimming' && (
                        <div className="px-6 pb-2">
                          <div className="relative h-32 w-full rounded-3xl overflow-hidden border border-white/5 bg-black/40 pointer-events-none">
                            <Map
                              mapLib={maplibregl}
                              initialViewState={{
                                longitude: activity.routeCoordinates[0][0],
                                latitude: activity.routeCoordinates[0][1],
                                zoom: 12,
                              }}
                              mapStyle={mapStyle}
                              interactive={false}
                            >
                              <Source id={`route-${activity.id}`} type="geojson" data={geoJsonData}>
                                <Layer
                                  id={`route-layer-${activity.id}`}
                                  type="line"
                                  paint={{
                                    'line-color': '#CCFF00',
                                    'line-width': 3,
                                    'line-opacity': 0.8,
                                  }}
                                  layout={{
                                    'line-join': 'round',
                                    'line-cap': 'round'
                                  }}
                                />
                              </Source>
                            </Map>
                          </div>
                        </div>
                      )}

                      <div className="px-6 pb-6 pt-4 grid grid-cols-3 gap-6 border-t border-white/5 mt-2 bg-white/[0.01]">
                        <div>
                          <p className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-1.5">Distance</p>
                          <p className="text-lg font-black italic">{activity.distance}<span className="text-[10px] ml-1 opacity-30">km</span></p>
                        </div>
                        <div>
                          <p className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-1.5">Duration</p>
                          <p className="text-lg font-black italic">{activity.duration}</p>
                        </div>
                        <div>
                          <p className="text-[9px] text-white/20 font-black uppercase tracking-widest mb-1.5">{activity.metricLabel === 'kcal' ? 'Calories' : 'Pace'}</p>
                          <p className="text-lg font-black italic text-[#CCFF00]">{activity.metric}<span className="text-[9px] ml-1 opacity-40 uppercase tracking-tighter">{activity.metricLabel}</span></p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              ) : (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <History className="w-10 h-10 text-white/10" />
                  </div>
                  <h3 className="text-xl font-black italic uppercase tracking-tight mb-2">Your Flow starts when you move</h3>
                  <p className="text-sm text-white/30 font-bold uppercase tracking-widest mb-10">Track your first activity to see it here</p>
                  <button className="px-10 py-4 bg-[#CCFF00] text-black font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_10px_30px_rgba(204,255,0,0.2)]">
                    Start Activity
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function ActivityDetail({ activity, onBack }: { activity: ActivityItem; onBack: () => void }) {
  const geoJsonData = useMemo(() => ({
    type: 'Feature' as const,
    properties: {},
    geometry: {
      type: 'LineString' as const,
      coordinates: activity.routeCoordinates
    }
  }), [activity]);

  const startPoint = activity.routeCoordinates[0];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Map Header */}
      <div className="relative h-[45vh] w-full bg-black">
        {/* Full Interactive Map */}
        {activity.type !== 'swimming' && (
          <Map
            mapLib={maplibregl}
            initialViewState={{
              longitude: startPoint[0],
              latitude: startPoint[1],
              zoom: 13,
              pitch: 45 // Isometric angle
            }}
            mapStyle={mapStyle}
            interactive={true} // Allow users to explore the detailed map
          >
            <Source id="detail-route" type="geojson" data={geoJsonData}>
              <Layer
                id="detail-route-layer"
                type="line"
                paint={{
                  'line-color': '#CCFF00',
                  'line-width': 5,
                  'line-opacity': 0.9,
                }}
                layout={{
                  'line-join': 'round',
                  'line-cap': 'round'
                }}
              />
            </Source>
            {/* Start Marker */}
            <Marker longitude={startPoint[0]} latitude={startPoint[1]}>
              <div className="w-4 h-4 bg-white rounded-full border-2 border-black"></div>
            </Marker>
            {/* End Marker */}
            <Marker 
              longitude={activity.routeCoordinates[activity.routeCoordinates.length - 1][0]} 
              latitude={activity.routeCoordinates[activity.routeCoordinates.length - 1][1]}
            >
              <div className="w-5 h-5 bg-[#CCFF00] rounded-full border-2 border-black shadow-[0_0_15px_rgba(204,255,0,0.8)]"></div>
            </Marker>
          </Map>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black pointer-events-none" />

        {/* Floating Controls */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
          <button 
            onClick={onBack}
            className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center active:scale-95 transition-transform"
          >
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center">
              <History className="w-5 h-5 text-[#CCFF00]" />
            </button>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-10 left-8 z-10 pointer-events-none">
          <div className="flex items-center gap-3 mb-2">
             <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#CCFF00] bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
               {activity.type} session
             </span>
          </div>
          <h2 className="text-4xl font-black italic tracking-tighter mb-1 uppercase drop-shadow-lg">{activity.title}</h2>
          <p className="text-sm text-white/70 font-bold uppercase tracking-widest drop-shadow-md">{activity.date} · {activity.time}</p>
        </div>
      </div>

      {/* Detail Content */}
      <div className="px-8 py-10 space-y-10">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Distance</p>
            <p className="text-3xl font-black italic text-[#CCFF00]">{activity.distance}<span className="text-sm ml-1 opacity-60">km</span></p>
          </div>
          <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10">
            <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-2">Duration</p>
            <p className="text-3xl font-black italic">{activity.duration}</p>
          </div>
        </div>

        <div className="bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-[2rem] p-6 flex gap-4">
          <div className="w-12 h-12 rounded-full bg-[#CCFF00] flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(204,255,0,0.4)]">
            <TrendingUp className="w-6 h-6 text-black" />
          </div>
          <div>
            <h4 className="font-black italic uppercase tracking-tight text-[#CCFF00] mb-1">Peak Performance</h4>
            <p className="text-sm text-white/70 leading-relaxed font-bold uppercase text-[10px] tracking-wide">
              You maintained a remarkably consistent pace. This is your fastest morning run this month!
            </p>
          </div>
        </div>

        <button className="w-full py-5 bg-[#CCFF00] text-black font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_10px_30px_rgba(204,255,0,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
          Share Achievement
        </button>
      </div>
    </div>
  );
}