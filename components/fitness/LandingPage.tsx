"use client"
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Bot, 
  Activity, 
  Heart, 
  Moon, 
  Users, 
  Play, 
  TrendingUp, 
  Footprints,
  Flame,
  Calendar,
  BarChart3,
  Trophy,
  Zap,
  Download,
  ChevronRight,
  // Instagram,
  // Youtube,
  // Twitter,
  Sparkles,
  Brain,
  Target,
  Apple,
  Smartphone
} from 'lucide-react';
// Utility icons stay with Lucide
// import { Sparkles, Brain, Target, Apple, Smartphone } from 'lucide-react';

// Brand icons move to Simple Icons
import { SiInstagram as Instagram, SiYoutube as Youtube, SiX as Twitter} from '@icons-pack/react-simple-icons';

import { ImageWithFallback } from '../figma/ImageWithFallback';

const FEATURES = [
  {
    icon: Bot,
    title: 'AI Fitness Coach',
    description: 'Personalized workout plans powered by AI',
    color: 'from-[#CCFF00] to-[#DFFF00]'
  },
  {
    icon: Activity,
    title: 'Workout Tracking',
    description: 'Track steps, calories, workouts, and distance',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    icon: Heart,
    title: 'Health Monitoring',
    description: 'Monitor sleep, heart rate, and daily activity',
    color: 'from-red-400 to-pink-600'
  },
  {
    icon: BarChart3,
    title: 'Tracking History',
    description: 'View weekly, monthly, and yearly workout progress',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Users,
    title: 'Community Challenges',
    description: 'Join fitness challenges with friends and nearby users',
    color: 'from-[#CCFF00] to-cyan-400'
  },
  {
    icon: Play,
    title: 'Workout Reels',
    description: 'Watch short workout videos and training tips',
    color: 'from-orange-400 to-red-600'
  }
];

const STATS = [
  { label: 'Active Users', value: '500K+', icon: Users },
  { label: 'Workouts Tracked', value: '10M+', icon: Activity },
  { label: 'Calories Burned', value: '2B+', icon: Flame },
  { label: 'Communities', value: '15K+', icon: Trophy }
];

const MONTHLY_STATS = [
  { month: 'January 2026', steps: '280,000', workouts: 22, calories: '19,800' },
  { month: 'February 2026', steps: '295,000', workouts: 24, calories: '20,500' },
  { month: 'March 2026', steps: '300,000', workouts: 24, calories: '21,500' }
];

export function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#CCFF00] to-cyan-400 flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-black italic uppercase tracking-tighter">Hey Flow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#CCFF00] transition-colors">Features</a>
            <a href="#community" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#CCFF00] transition-colors">Community</a>
            <a href="#download" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#CCFF00] transition-colors">Download</a>
          </div>

          <button className="px-6 py-3 bg-[#CCFF00] text-black rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)]">
            Download App
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CCFF00]/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#CCFF00]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">AI-Powered Fitness</span>
            </motion.div>

            <h1 className="text-6xl lg:text-7xl font-black italic uppercase tracking-tighter mb-6 leading-[0.9]">
              Your AI Fitness Coach That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Tracks Everything</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Track workouts, monitor your health, and stay motivated with a smart AI fitness companion.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-8 py-4 bg-[#CCFF00] text-black rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(204,255,0,0.4)] flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download App
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:border-[#CCFF00]/50 transition-all flex items-center gap-2">
                Explore Features
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 mt-12">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-black text-[#CCFF00] mb-1">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Floating UI Elements */}
            <FloatingCard delay={0} className="absolute -top-10 -left-10">
              <Footprints className="w-5 h-5 text-[#CCFF00] mb-2" />
              <div className="text-xs font-black uppercase tracking-widest text-white/40">Steps</div>
              <div className="text-2xl font-black">8,420</div>
            </FloatingCard>

            <FloatingCard delay={0.3} className="absolute top-20 -right-10">
              <Flame className="w-5 h-5 text-orange-400 mb-2" />
              <div className="text-xs font-black uppercase tracking-widest text-white/40">Calories</div>
              <div className="text-2xl font-black">420</div>
            </FloatingCard>

            <FloatingCard delay={0.6} className="absolute -bottom-10 -left-10">
              <Heart className="w-5 h-5 text-red-400 mb-2" />
              <div className="text-xs font-black uppercase tracking-widest text-white/40">Heart Rate</div>
              <div className="text-2xl font-black">72 bpm</div>
            </FloatingCard>

            <FloatingCard delay={0.9} className="absolute bottom-20 -right-10">
              <Moon className="w-5 h-5 text-purple-400 mb-2" />
              <div className="text-xs font-black uppercase tracking-widest text-white/40">Sleep</div>
              <div className="text-2xl font-black">7.5 hrs</div>
            </FloatingCard>

            {/* Phone Mockup */}
            <div className="relative mx-auto w-[320px] h-[640px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/20 to-cyan-500/20 rounded-[3rem] blur-3xl" />
              <div className="relative w-full h-full bg-black rounded-[3rem] border-8 border-white/10 overflow-hidden shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                  alt="App Screenshot"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
              Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Stay Fit</span>
            </h2>
            <p className="text-white/60 text-lg">Powerful features designed to transform your fitness journey</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-[#CCFF00]/30 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-6`}>
                  <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
                
                <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Tracking Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CCFF00]/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6">
              Track Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Fitness Journey</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Your workouts are automatically tracked and organized into weekly, monthly, and yearly insights.
            </p>

            <div className="space-y-4">
              {[
                { icon: Activity, label: 'Activity Ring', desc: 'Complete your daily goals' },
                { icon: BarChart3, label: 'Weekly Progress', desc: 'Track your consistency' },
                { icon: Flame, label: 'Calories Burned', desc: 'Monitor energy expenditure' },
                { icon: Footprints, label: 'Steps Count', desc: 'Hit your daily targets' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-[#CCFF00]/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#CCFF00]" />
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight">{item.label}</div>
                    <div className="text-sm text-white/40">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dashboard Preview */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] border border-white/10 p-8 shadow-2xl">
              {/* Activity Ring */}
              <div className="relative w-48 h-48 mx-auto mb-8">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="96" cy="96" r="80" stroke="#ffffff10" strokeWidth="16" fill="none" />
                  <circle cx="96" cy="96" r="80" stroke="#CCFF00" strokeWidth="16" fill="none" 
                    strokeDasharray="502" strokeDashoffset="125" strokeLinecap="round" 
                    className="transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="text-5xl font-black">75%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40 mt-2">Daily Goal</div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Steps', value: '8,420', icon: Footprints },
                  { label: 'Calories', value: '420', icon: Flame },
                  { label: 'Active Min', value: '45', icon: Activity }
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-white/5 rounded-2xl">
                    <stat.icon className="w-5 h-5 text-[#CCFF00] mx-auto mb-2" />
                    <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">{stat.label}</div>
                    <div className="text-xl font-black">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
              Fitness Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Better Together</span>
            </h2>
            <p className="text-white/60 text-lg">Join challenges, share achievements, and compete with friends</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Community Posts', desc: 'Share your fitness journey', icon: Users, count: '12K+' },
              { title: 'Fitness Challenges', desc: 'Compete and win rewards', icon: Trophy, count: '500+' },
              { title: 'Weekly Leaderboard', desc: 'Track your ranking', icon: TrendingUp, count: 'Live' },
              { title: 'Workout Reels', desc: 'Quick training videos', icon: Play, count: '2K+' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-[#CCFF00]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#CCFF00]/10 flex items-center justify-center mb-6 group-hover:bg-[#CCFF00]/20 transition-all">
                  <item.icon className="w-7 h-7 text-[#CCFF00]" />
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-[#CCFF00] mb-2">{item.count}</div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracking History Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
              See Your Progress <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Over Time</span>
            </h2>
            <p className="text-white/60 text-lg">Weekly summaries, monthly reports, and yearly insights</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {MONTHLY_STATS.map((stat, index) => (
              <motion.div
                key={stat.month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#CCFF00]/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-2xl rounded-[2.5rem] border border-[#CCFF00]/20 p-8 shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-6 h-6 text-[#CCFF00]" />
                  <h3 className="text-lg font-black uppercase tracking-tight">{stat.month}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Footprints className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm font-bold uppercase tracking-widest text-white/60">Steps</span>
                    </div>
                    <span className="text-lg font-black">{stat.steps}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-[#CCFF00]" />
                      <span className="text-sm font-bold uppercase tracking-widest text-white/60">Workouts</span>
                    </div>
                    <span className="text-lg font-black">{stat.workouts}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Flame className="w-5 h-5 text-orange-400" />
                      <span className="text-sm font-bold uppercase tracking-widest text-white/60">Calories</span>
                    </div>
                    <span className="text-lg font-black text-[#CCFF00]">{stat.calories}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/20 to-cyan-500/20 rounded-[3rem] blur-3xl" />
            <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] border border-white/10 p-12">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#CCFF00] to-cyan-400 flex items-center justify-center mb-8 mx-auto">
                <Brain className="w-10 h-10 text-black" />
              </div>
              
              <div className="space-y-6">
                {[
                  { icon: TrendingUp, text: 'Your activity increased 18% this month', color: 'text-[#CCFF00]' },
                  { icon: Calendar, text: 'Your most active day is Tuesday', color: 'text-cyan-400' },
                  { icon: Flame, text: 'You burned 20,000 calories this month', color: 'text-orange-400' }
                ].map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl"
                  >
                    <insight.icon className={`w-6 h-6 ${insight.color} flex-shrink-0 mt-1`} />
                    <p className="text-white/80 leading-relaxed">{insight.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-6">
              Your AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Health Assistant</span>
            </h2>
            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Get personalized insights, smart recommendations, and adaptive workout plans powered by advanced AI technology.
            </p>

            <div className="space-y-4">
              {[
                { icon: Target, label: 'Personalized Goals', desc: 'AI sets realistic targets based on your progress' },
                { icon: Brain, label: 'Smart Recommendations', desc: 'Get workout suggestions that match your level' },
                { icon: Sparkles, label: 'Adaptive Plans', desc: 'Plans that evolve with your fitness journey' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/[0.03] rounded-2xl border border-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#CCFF00]" />
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight mb-1">{feature.label}</div>
                    <div className="text-sm text-white/40">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4">
              Experience The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Full App</span>
            </h2>
            <p className="text-white/60 text-lg">Seamless design meets powerful functionality</p>
          </motion.div>

          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
            {[
              { title: 'Home Dashboard', img: 'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
              { title: 'Activity Tracker', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
              { title: 'Tracking History', img: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
              { title: 'Community Feed', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
              { title: 'Workout Reels', img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' }
            ].map((screen, index) => (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px]"
              >
                <div className="relative w-full h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl" />
                  <div className="relative w-full h-full bg-black rounded-[2.5rem] border-4 border-white/10 overflow-hidden">
                    <ImageWithFallback 
                      src={screen.img}
                      alt={screen.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <div className="text-sm font-black uppercase tracking-widest">{screen.title}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CCFF00]/10 via-cyan-500/10 to-[#CCFF00]/10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Fitness Journey</span> Today
          </h2>
          <p className="text-white/60 text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of users transforming their health with AI-powered fitness tracking
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button className="px-10 py-5 bg-black border-2 border-white/10 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-[#CCFF00]/50 transition-all flex items-center gap-3">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-white/40">Download on</div>
                <div>App Store</div>
              </div>
            </button>
            
            <button className="px-10 py-5 bg-[#CCFF00] text-black rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(204,255,0,0.4)] flex items-center gap-3">
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-black/60">Get it on</div>
                <div>Play Store</div>
              </div>
            </button>
          </div>

          <div className="flex items-center justify-center gap-12 text-white/40">
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">500K+</div>
              <div className="text-xs font-bold uppercase tracking-widest">Downloads</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">4.8★</div>
              <div className="text-xs font-bold uppercase tracking-widest">App Rating</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-2">15K+</div>
              <div className="text-xs font-bold uppercase tracking-widest">Reviews</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#CCFF00] to-cyan-400 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-black" />
                </div>
                <span className="text-xl font-black italic uppercase tracking-tighter">Hey Flow</span>
              </div>
              <p className="text-white/40 text-sm">Your AI-powered fitness companion for a healthier life.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">Product</h4>
              <div className="space-y-3">
                {['Features', 'Tracking', 'Community', 'AI Coach'].map(link => (
                  <a key={link} href="#" className="block text-white/40 text-sm hover:text-[#CCFF00] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">Company</h4>
              <div className="space-y-3">
                {['About', 'Careers', 'Contact'].map(link => (
                  <a key={link} href="#" className="block text-white/40 text-sm hover:text-[#CCFF00] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Youtube, href: '#' },
                  { icon: Twitter, href: '#' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">© 2026 Hey Flow. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Floating Card Component
function FloatingCard({ children, delay, className }: { children: React.ReactNode, delay: number, className: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/10 p-4 shadow-2xl ${className}`}
      style={{
        animation: 'float 3s ease-in-out infinite',
        animationDelay: `${delay}s`
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </motion.div>
  );
}
