
"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
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
  Sparkles,
  Brain,
  Target,
  Apple,
  Smartphone,
  Map,
  Globe,
  Bike,
  Waves,
  Mountain,
  Wind,
  Utensils,
  Clock,
  Award,
  Shield,
  Rocket,
  LineChart,
  MapPin,
  Radio,
  Compass,
  Navigation,
  ChevronDown,
  Check,
  Star,
  MessageSquare,
  Share2,
  Camera,
  Video,
  Headphones,
  Wifi,
  CloudRain,
  Sun,
  Dumbbell,
  Timer
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SiInstagram as Instagram, SiYoutube as Youtube, SiX as Twitter } from '@icons-pack/react-simple-icons'
import { AnimatePresence } from 'framer-motion';

const HERO_STATS = [
  { value: '50M+', label: 'Global Athletes', icon: Globe },
  { value: '3B+', label: 'Activities Tracked', icon: Activity },
  { value: '18', label: 'Countries', icon: MapPin },
  { value: '99.9%', label: 'Accuracy', icon: Target }
];

const ACTIVITIES = [
  { name: 'Running', icon: Footprints, color: 'from-[#CCFF00] to-[#DFFF00]' },
  { name: 'Cycling', icon: Bike, color: 'from-cyan-400 to-cyan-600' },
  { name: 'Swimming', icon: Waves, color: 'from-blue-400 to-blue-600' },
  { name: 'Hiking', icon: Mountain, color: 'from-green-400 to-green-600' },
  { name: 'Yoga', icon: Wind, color: 'from-purple-400 to-purple-600' },
  { name: 'Strength', icon: Dumbbell, color: 'from-red-400 to-red-600' }
];

const AI_FEATURES = [
  {
    icon: Brain,
    title: 'AI Personal Coach',
    description: 'Advanced machine learning adapts to your unique fitness journey, providing personalized guidance 24/7',
    stats: '99.2% user satisfaction',
    color: 'from-[#CCFF00] to-cyan-400'
  },
  {
    icon: Utensils,
    title: 'Smart Nutrition AI',
    description: 'Intelligent meal planning and nutrition tracking with real-time calorie analysis and macro optimization',
    stats: '10M+ meals analyzed',
    color: 'from-orange-400 to-red-600'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'AI-powered performance predictions and injury prevention with advanced biomechanical analysis',
    stats: '95% accuracy rate',
    color: 'from-purple-400 to-pink-600'
  },
  {
    icon: Target,
    title: 'Adaptive Goal Setting',
    description: 'Dynamic goals that evolve with your progress, powered by behavioral science and AI',
    stats: '3x faster results',
    color: 'from-cyan-400 to-blue-600'
  }
];

const TRACKING_FEATURES = [
  {
    icon: Activity,
    title: 'Every Activity',
    description: '40+ sports and activities tracked with precision GPS and sensor fusion',
    items: ['Running', 'Cycling', 'Swimming', 'Hiking', 'Skiing', 'More']
  },
  {
    icon: Heart,
    title: 'Health Metrics',
    description: 'Comprehensive health monitoring with real-time biometric analysis',
    items: ['Heart Rate', 'HRV', 'Sleep', 'Stress', 'Recovery', 'More']
  },
  {
    icon: Map,
    title: 'Route Intelligence',
    description: 'Smart route suggestions based on your preferences and performance',
    items: ['Popular Routes', 'Custom Routes', 'Heat Maps', 'Safety', 'Elevation', 'More']
  },
  {
    icon: Users,
    title: 'Social Connect',
    description: 'Global community of athletes competing and supporting each other',
    items: ['Challenges', 'Clubs', 'Leaderboards', 'Friends', 'Events', 'More']
  }
];

const COMPARISON_FEATURES = [
  { feature: 'AI Personal Coach', us: true, competitor: false },
  { feature: 'Real-time Nutrition AI', us: true, competitor: false },
  { feature: 'Predictive Analytics', us: true, competitor: false },
  { feature: 'Voice Coaching', us: true, competitor: false },
  { feature: 'Activity Tracking', us: true, competitor: true },
  { feature: 'Route Planning', us: true, competitor: true },
  { feature: 'Social Features', us: true, competitor: true },
  { feature: 'Mental Health Tracking', us: true, competitor: false },
  { feature: 'Recovery Optimization', us: true, competitor: false },
  { feature: 'Global Challenges', us: true, competitor: true }
];

const TESTIMONIALS = [
  {
    name: 'Sarah Chen',
    role: 'Marathon Runner',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    quote: 'The AI coach helped me shave 15 minutes off my marathon time. It\'s like having an elite coach in my pocket.',
    rating: 5,
    achievement: 'Boston Marathon Qualifier'
  },
  {
    name: 'Marcus Johnson',
    role: 'Triathlete',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
    quote: 'The nutrition AI changed everything. I\'ve never felt more energized during training.',
    rating: 5,
    achievement: 'Ironman Finisher'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Cyclist',
    avatar: 'https://i.pravatar.cc/150?u=emily',
    quote: 'The route intelligence feature discovers the best cycling paths I never knew existed.',
    rating: 5,
    achievement: '10k+ Miles in 2025'
  }
];

const PRICING_TIERS = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Basic activity tracking',
      'Community access',
      'Route discovery',
      'Weekly insights',
      'Mobile app access'
    ],
    cta: 'Get Started Free',
    popular: false
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/month',
    description: 'For serious athletes',
    features: [
      'Everything in Free',
      'AI Personal Coach',
      'Advanced analytics',
      'Unlimited challenges',
      'Priority support',
      'Ad-free experience'
    ],
    cta: 'Start Free Trial',
    popular: true
  },
  {
    name: 'Elite',
    price: '$19.99',
    period: '/month',
    description: 'Maximum performance',
    features: [
      'Everything in Pro',
      'Nutrition AI with meal plans',
      'Predictive analytics',
      'Voice coaching',
      'Mental health tracking',
      'Recovery optimization',
      'Custom training plans'
    ],
    cta: 'Go Elite',
    popular: false
  }
];

interface AdvancedLandingPageProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function AdvancedLandingPage({ onNavigate }: AdvancedLandingPageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle through activities
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedActivity((prev) => (prev + 1) % ACTIVITIES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const ACTIVITY_VISUALS = [
  { value: '8.42', unit: 'km', metric: 'Pace: 4:52 min/km', path: 'M 0 50 Q 50 10, 100 50 T 200 50 T 300 50 T 400 50' },
  { value: '24.5', unit: 'km', metric: 'Burned: 450 kcal', path: 'M 0 80 C 100 10, 150 100, 250 40 S 350 90, 400 30' },
  { value: '1,500', unit: 'm', metric: 'Pace: 1:45 /100m', path: 'M 0 50 Q 25 30, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50 T 350 50 T 400 50' },
  { value: '12.4', unit: 'km', metric: 'Elev Gain: 850m', path: 'M 0 90 L 80 30 L 150 60 L 250 10 L 320 50 L 400 20' },
  { value: '60', unit: 'min', metric: 'Zone: Flow State', path: 'M 200 10 A 40 40 0 1 1 199.9 10' },
  { value: '45', unit: 'min', metric: 'Volume: 12k kg', path: 'M 80 80 L 80 20 M 200 80 L 200 20 M 320 80 L 320 20' }
];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CCFF00] to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.3)]">
              <Zap className="w-7 h-7 text-black" />
            </div>
            <div>
              <span className="text-2xl font-black italic uppercase tracking-tighter">Impossible AI</span>
              <div className="text-[8px] font-black uppercase tracking-widest text-[#CCFF00]">Powered by Intelligence</div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#CCFF00] transition-colors">Features</a>
            <a href="#ai" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#CCFF00] transition-colors">AI Coach</a>
            <a href="#tracking" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#CCFF00] transition-colors">Tracking</a>
            <a href="#community" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#CCFF00] transition-colors">Community</a>
            <a href="#pricing" className="text-sm font-black uppercase tracking-widest text-white/60 hover:text-[#CCFF00] transition-colors">Pricing</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:border-[#CCFF00]/50 transition-all">
              Sign In
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-[#CCFF00] to-cyan-400 text-black rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(204,255,0,0.4)]">
              Start Free
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(204,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(204,255,0,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#CCFF00]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#CCFF00]/10 via-cyan-500/10 to-purple-500/10 border border-[#CCFF00]/20 rounded-full mb-8 backdrop-blur-xl"
            >
              <Sparkles className="w-5 h-5 text-[#CCFF00] animate-pulse" />
              <span className="text-sm font-black uppercase tracking-widest text-[#CCFF00]">AI-Powered Fitness Revolution</span>
              <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-7xl lg:text-8xl font-black italic uppercase tracking-tighter mb-6 leading-[0.85]"
            >
              Track Every Inch<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-cyan-400 to-purple-500">
                Of Your Life
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl text-white/70 mb-4 leading-relaxed max-w-4xl mx-auto font-light"
            >
              The world's most advanced AI fitness companion that tracks, analyzes, and optimizes every aspect of your health and performance.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/50 mb-12 leading-relaxed max-w-3xl mx-auto"
            >
              Join millions of athletes worldwide using AI-powered insights, personalized nutrition, and real-time coaching to achieve their goals faster than ever.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            >
              <button className="group px-10 py-5 bg-gradient-to-r from-[#CCFF00] to-cyan-400 text-black rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_50px_rgba(204,255,0,0.5)] flex items-center gap-3">
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Start Free Trial
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:border-[#CCFF00]/50 transition-all flex items-center gap-3">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
            >
              {HERO_STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/10 p-6 hover:border-[#CCFF00]/30 transition-all group"
                >
                  <stat.icon className="w-8 h-8 text-[#CCFF00] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            </motion.div>

           {/* Activity Pills & Dynamic Visualizer */}
            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap items-center justify-center gap-3 mb-8"
              >
                {ACTIVITIES.map((activity, index) => (
                  <button
                    key={activity.name}
                    onClick={() => setSelectedActivity(index)}
                    className={`px-5 py-3 rounded-xl border transition-all ${
                      selectedActivity === index
                        ? 'bg-gradient-to-r ' + activity.color + ' text-black border-transparent shadow-[0_0_20px_rgba(204,255,0,0.4)]'
                        : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <activity.icon className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-widest">{activity.name}</span>
                    </div>
                  </button>
                ))}
              </motion.div>

              {/* Dynamic Map/Design Visualizer */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="w-full bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] border border-white/10 p-6 relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedActivity}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10"
                  >
                    <div className="text-left">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">
                        {ACTIVITIES[selectedActivity].name} Activity
                      </p>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-5xl font-black italic tracking-tighter text-[#CCFF00]">
                          {ACTIVITY_VISUALS[selectedActivity].value}
                        </span>
                        <span className="text-xl font-bold italic opacity-40">
                          {ACTIVITY_VISUALS[selectedActivity].unit}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-lg border border-white/10">
                        <Activity className="w-3 h-3 text-cyan-400" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                          {ACTIVITY_VISUALS[selectedActivity].metric}
                        </span>
                      </div>
                    </div>

                    {/* Animated SVG Route/Wave */}
                    <div className="h-24 flex-1 w-full min-w-[200px] relative">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, ease: "easeInOut" }}
                          d={ACTIVITY_VISUALS[selectedActivity].path}
                          fill="none"
                          stroke="url(#gradientRoute)"
                          strokeWidth="4"
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_8px_rgba(204,255,0,0.6)]"
                        />
                        <defs>
                          <linearGradient id="gradientRoute" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#CCFF00" />
                            <stop offset="100%" stopColor="#22d3ee" /> {/* Cyan */}
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          {/* Scroll Indicator */}
        {/* Scroll Indicator */}
         {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
          >
            <div 
              className="flex flex-col items-center gap-2 transition-opacity duration-100"
              style={{ opacity: Math.max(1 - scrollY / 150, 0) }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-white/40">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown className="w-6 h-6 text-[#CCFF00]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Features Section */}
      <section id="ai" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CCFF00]/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-full mb-6">
              <Brain className="w-5 h-5 text-[#CCFF00]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">Advanced AI Technology</span>
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
              Your Personal AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Companion</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge artificial intelligence that understands your body, predicts your needs, and guides you to peak performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {AI_FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-10 hover:border-[#CCFF00]/30 transition-all duration-500"
              >
                {/* Gradient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-[2.5rem] transition-opacity duration-500 blur-xl`} />
                
                <div className="relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 mb-6`}>
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-6">{feature.description}</p>
                  
                  <div className="flex items-center gap-2 text-[#CCFF00]">
                    <Check className="w-5 h-5" />
                    <span className="text-sm font-black uppercase tracking-widest">{feature.stats}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Tracking Section */}
      <section id="tracking" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Comprehensive Tracking</span>
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
              Track <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Everything</span> That Matters
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              From basic steps to advanced performance metrics, we track every data point that impacts your health and fitness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRACKING_FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-[#CCFF00]/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#CCFF00]/10 flex items-center justify-center mb-6 group-hover:bg-[#CCFF00]/20 transition-all">
                  <feature.icon className="w-8 h-8 text-[#CCFF00]" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm mb-4 leading-relaxed">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.items.map((item) => (
                    <span key={item} className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white/5 rounded-lg text-white/40">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - Better than Strava */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Trophy className="w-5 h-5 text-purple-400" />
              <span className="text-xs font-black uppercase tracking-widest text-purple-400">The Clear Leader</span>
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
              Why We're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-purple-400">Better</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              See how our AI-powered platform stacks up against traditional fitness tracking apps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-8 border-b border-white/10">
              <div className="text-sm font-black uppercase tracking-widest text-white/40">Feature</div>
              <div className="text-center">
                <div className="text-sm font-black uppercase tracking-widest text-[#CCFF00] mb-2">Impossible AI</div>
                <div className="text-xs text-white/40">Next-Gen Platform</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-black uppercase tracking-widest text-white/40 mb-2">Others</div>
                <div className="text-xs text-white/40">Traditional Apps</div>
              </div>
            </div>

            {/* Comparison Rows */}
            {COMPARISON_FEATURES.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-6 border-b border-white/5 hover:bg-white/[0.02] transition-all"
              >
                <div className="text-sm font-bold text-white/80">{item.feature}</div>
                <div className="flex justify-center">
                  {item.us ? (
                    <div className="w-8 h-8 rounded-full bg-[#CCFF00]/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-[#CCFF00]" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-5 h-0.5 bg-white/20" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {item.competitor ? (
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white/40" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-5 h-0.5 bg-white/20" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <Star className="w-5 h-5 text-orange-400" />
              <span className="text-xs font-black uppercase tracking-widest text-orange-400">Loved by Athletes</span>
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
              Real Results From <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-orange-400">Real Athletes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-[#CCFF00]/30 transition-all"
              >
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#CCFF00] text-[#CCFF00]" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#CCFF00]/30">
                    <ImageWithFallback src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-black uppercase tracking-tight text-sm">{testimonial.name}</div>
                    <div className="text-xs text-white/40">{testimonial.role}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[#CCFF00]">
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">{testimonial.achievement}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#CCFF00]/5 via-transparent to-[#CCFF00]/5" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 rounded-full mb-6">
              <Zap className="w-5 h-5 text-[#CCFF00]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">Simple Pricing</span>
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">Plan</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Start free and upgrade as you grow. No hidden fees, cancel anytime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative bg-white/[0.03] backdrop-blur-2xl rounded-[2.5rem] border p-8 transition-all ${
                  tier.popular 
                    ? 'border-[#CCFF00] shadow-[0_0_40px_rgba(204,255,0,0.2)] scale-105' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-2 bg-gradient-to-r from-[#CCFF00] to-cyan-400 text-black rounded-full text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{tier.name}</h3>
                  <p className="text-sm text-white/40 mb-6">{tier.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-black">{tier.price}</span>
                    {tier.period && <span className="text-white/40">{tier.period}</span>}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#CCFF00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-r from-[#CCFF00] to-cyan-400 text-black hover:scale-105 shadow-[0_0_30px_rgba(204,255,0,0.3)]'
                    : 'bg-white/5 border border-white/10 text-white hover:border-[#CCFF00]/50'
                }`}>
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Community */}
      <section id="community" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-black uppercase tracking-widest text-cyan-400">Global Community</span>
            </div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-6">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] to-cyan-400">50 Million Athletes</span> Worldwide
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Connect, compete, and celebrate with a global community of fitness enthusiasts in 195 countries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: 'Join Clubs', desc: '15,000+ active communities', color: 'from-[#CCFF00] to-cyan-400' },
              { icon: Trophy, label: 'Challenges', desc: 'Weekly global competitions', color: 'from-orange-400 to-red-600' },
              { icon: Share2, label: 'Share Progress', desc: 'Inspire others with your journey', color: 'from-purple-400 to-pink-600' },
              { icon: MessageSquare, label: 'Connect', desc: 'Chat with fellow athletes', color: 'from-cyan-400 to-blue-600' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-8 text-center hover:border-[#CCFF00]/30 transition-all group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mx-auto mb-6`}>
                  <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-black uppercase tracking-tight mb-2">{item.label}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#CCFF00]/10 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#CCFF00]/10 rounded-full blur-[150px]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <h2 className="text-7xl font-black italic uppercase tracking-tighter mb-8">
            Ready To Transform<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-cyan-400 to-purple-500">
              Your Fitness Journey?
            </span>
          </h2>
          <p className="text-2xl text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto">
            Start your 14-day free trial today. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="group px-12 py-6 bg-gradient-to-r from-[#CCFF00] to-cyan-400 text-black rounded-2xl text-base font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_60px_rgba(204,255,0,0.6)] flex items-center gap-3">
              <Rocket className="w-7 h-7 group-hover:rotate-12 transition-transform" />
              Start Free Trial
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <button className="px-8 py-4 bg-black border-2 border-white/10 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-[#CCFF00]/50 transition-all flex items-center gap-3">
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-white/40">Download on</div>
                <div>App Store</div>
              </div>
            </button>
            
            <button className="px-8 py-4 bg-black border-2 border-white/10 rounded-2xl text-sm font-black uppercase tracking-widest hover:border-[#CCFF00]/50 transition-all flex items-center gap-3">
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs text-white/40">Get it on</div>
                <div>Play Store</div>
              </div>
            </button>
          </div>

          <div className="flex items-center justify-center gap-12 text-white/40">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#CCFF00]" />
              <span className="text-sm font-bold uppercase tracking-widest">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#CCFF00]" />
              <span className="text-sm font-bold uppercase tracking-widest">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-[#CCFF00]" />
              <span className="text-sm font-bold uppercase tracking-widest">No Credit Card</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#CCFF00] to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                  <Zap className="w-7 h-7 text-black" />
                </div>
                <div>
                  <span className="text-2xl font-black italic uppercase tracking-tighter">Impossible AI</span>
                  <div className="text-[8px] font-black uppercase tracking-widest text-[#CCFF00]">Powered by Intelligence</div>
                </div>
              </div>
              <p className="text-white/40 leading-relaxed mb-6">
                The world's most advanced AI fitness platform, helping millions achieve their health and performance goals.
              </p>
              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Youtube, href: '#' },
                  { icon: Twitter, href: '#' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-6">Product</h4>
              <div className="space-y-4">
                {['Features', 'AI Coach', 'Tracking', 'Nutrition', 'Community', 'Pricing'].map(link => (
                  <a key={link} href="#" className="block text-white/40 hover:text-[#CCFF00] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-6">Company</h4>
              <div className="space-y-4">
                {['About', 'Blog', 'Careers', 'Press', 'Contact'].map(link => (
                  <a key={link} href="#" className="block text-white/40 hover:text-[#CCFF00] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-6">Support</h4>
              <div className="space-y-4">
                {['Help Center', 'API Docs', 'Community', 'Status', 'Partners'].map(link => (
                  <a key={link} href="#" className="block text-white/40 hover:text-[#CCFF00] transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm">© 2026 Impossible AI. All rights reserved.</p>
            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#CCFF00] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
