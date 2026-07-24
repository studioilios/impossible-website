"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap, ChevronRight, Check, ArrowUpRight, Users, Building2,
  Utensils, Sparkles, Dumbbell, ShieldCheck,
  Menu, X, Trophy, Target, Gift, MapPin, Heart, Star, TrendingUp,
  ChevronDown, Activity, Globe, Brain, Flame, Smartphone, Shield,
  MessageCircle, Share2,
} from 'lucide-react';
import { SiInstagram as Instagram, SiYoutube as Youtube, SiX as Twitter } from '@icons-pack/react-simple-icons';
import Lightfall from './landingpagebg';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap';

const C = {
  bg: '#08080A', paper: '#111116', paperHover: '#16161C',
  lime: '#B4B5C9', limeGlow: 'rgba(180,181,201,0.15)',
  saffron: '#B4B5C9', saffronGlow: 'rgba(180,181,201,0.15)',
  teal: '#B4B5C9', tealGlow: 'rgba(180,181,201,0.15)',
  line: 'rgba(255,255,255,0.08)', lineBright: 'rgba(255,255,255,0.16)',
  text: '#FFFFFF', muted: 'rgba(255,255,255,0.58)', muted2: 'rgba(255,255,255,0.35)',
};

const LIGHTFALL = {
  colors: ['#3A3B45', '#2E2F38', '#454652'] as const,
  backgroundColor: '#08080A',
};

const HERO_ROLES = ['Working Professionals', 'Solo Athletes', 'Fitness Coaches', 'Gym Owners'];
const HERO_BADGES = ['AI-Powered', 'India First', 'Personalized', 'Multi-Agent AI'];
const HERO_STATS = [
  { value: '213M', label: 'Indians trying to get fit' },
  { value: '1.8B', label: 'Global audience' },
  { value: '94%', label: 'Quit within 30 days' },
  { value: '1st', label: 'AI Multi-Agent Platform' },
];

const PROBLEM_STATS = [
  { value: '101M', label: 'Diabetics in India' },
  { value: '136M', label: 'Pre-diabetics' },
  { value: '52%', label: 'Urban obesity growth' },
  { value: '20–30 Yrs', label: 'Younger disease onset' },
  { value: '₹37K Cr', label: 'Economic burden' },
  { value: '820M', label: 'Affected by pollution' },
];
const LIFESTYLE_PROBLEMS = [
  { icon: Building2, title: 'Sedentary Jobs', body: 'Long office hours and commuting reduce physical activity to near zero for millions of urban Indians.' },
  { icon: Utensils, title: 'Ultra Processed Food', body: 'Cheap processed food dominates daily diets, causing metabolic damage across every age group.' },
  { icon: Brain, title: 'Stress & Sleep Loss', body: 'Poor sleep and chronic stress accelerate health decline, compounding all other risk factors.' },
];

const NUTRITION_GROUPS = [
  { age: 'Children (5–15 Years)', pop: '225 Million children', color: C.saffron, stats: ['93.4% inadequate calcium intake', 'Childhood obesity increased 288%', 'Severe micronutrient gaps from early age'] },
  { age: 'Youth (15–25 Years)', pop: '390 Million people', color: C.lime, stats: ['59.1% teenage girls are anemic', '$1 Billion energy drink market', '67% report health damage from energy drinks'] },
  { age: 'Working Adults (25–40)', pop: '350 Million adults', color: C.teal, stats: ['98% Omega-3 deficient', '59–98% Vitamin D deficient', '101M diabetics, 136M pre-diabetics'] },
];

const INDIA_FIRST = [
  { icon: Utensils, label: 'Indian Food', desc: '95,000+ Indian recipes, regional cuisines, and thali tracking' },
  { icon: Globe, label: 'Indian Languages', desc: 'AI coaching in 6 Indian languages including Hindi, Tamil, Telugu' },
  { icon: Users, label: 'Indian Lifestyle', desc: 'Built around Indian work schedules, climate, and cultural habits' },
  { icon: Star, label: 'Indian Festivals', desc: 'Festival calendar for Diwali, Navratri, fasting days and more' },
  { icon: Heart, label: 'Indian Health Patterns', desc: 'Trained on Indian phenotype data and metabolic disease patterns' },
  { icon: Shield, label: 'Indian Bodies', desc: 'Diet plans calibrated for South Asian physiology and insulin response' },
];

const CORE_FEATURES = [
  { icon: Brain, tag: 'AI COACH', title: 'AI Health Coach', color: C.lime, colorRgb: '180,181,201', desc: 'Conversational AI coach that knows you personally.', bullets: ['Under 3-second responses', 'Permanent memory of your journey', '6 Indian languages supported', 'Daily coaching conversations'] },
  { icon: Utensils, tag: 'NUTRITION AI', title: 'AI Diet Intelligence', color: C.saffron, colorRgb: '255,140,66', desc: 'The most comprehensive Indian food database, powered by AI.', bullets: ['95,000+ Indian recipes', 'Full macro & micro tracking', 'Regional food support', 'Indian phenotype database'] },
  { icon: Sparkles, tag: 'PERSONAL AI', title: 'AI Personal Agent', color: C.teal, colorRgb: '78,205,196', desc: 'Your own AI wellness companion, always adapting to you.', bullets: ['AI wellness companion', 'Daily coaching & check-ins', 'Adaptive fitness plans', 'Personalized guidance 24/7'] },
  { icon: Users, tag: 'COMMUNITY', title: 'Community', color: C.lime, colorRgb: '180,181,201', desc: 'Find your tribe. Train together. Grow together.', bullets: ['Running clubs & fitness groups', 'Local marathon events', 'Accountability partners', 'Hyperlocal gym discovery'] },
  { icon: Trophy, tag: 'REWARDS', title: 'Token Rewards', color: C.saffron, colorRgb: '255,140,66', desc: 'Every healthy action earns you real rewards.', bullets: ['Earn tokens for workouts', 'Redeem for gym passes', 'Coaching & supplements', 'Daily, weekly & monthly challenges'] },
  { icon: Target, tag: 'GAMIFICATION', title: 'Gamification', color: C.teal, colorRgb: '78,205,196', desc: 'Turn fitness into a game you actually want to play.', bullets: ['XP & leaderboards', 'Badges & trophies', 'Challenge maps & events', 'Fitness avatar system'] },
];

const REWARD_STEPS = [
  { n: '01', title: 'Complete an Activity', icon: Activity },
  { n: '02', title: 'AI Verifies via GPS, Phone & Wearables', icon: ShieldCheck },
  { n: '03', title: 'Tokens Automatically Credited', icon: Zap },
  { n: '04', title: 'Redeem Rewards', icon: Gift },
];
const GAMIFICATION_STEPS = [
  { n: '01', title: 'Complete Challenges', icon: Target },
  { n: '02', title: 'Earn XP', icon: Zap },
  { n: '03', title: 'Unlock Rewards', icon: Gift },
  { n: '04', title: 'Become Legendary', icon: Trophy },
];
const REWARD_EXAMPLES = [
  { action: '10,000 steps', tokens: '5 Tokens', icon: '🚶' },
  { action: '300 kcal workout', tokens: '15 Tokens', icon: '💪' },
  { action: 'Gym check-in', tokens: '20 Tokens', icon: '🏋️' },
  { action: '7–8 hours sleep', tokens: '10 Tokens', icon: '😴' },
  { action: '30-day streak', tokens: '200 Bonus Tokens', icon: '🔥' },
  { action: 'Health checkup', tokens: '50 Tokens', icon: '🏥' },
];

const ATHLETE_STEPS = [
  { n: '01', title: 'Create Athlete Profile', icon: Users },
  { n: '02', title: 'AI Trainer Matching', icon: Sparkles },
  { n: '03', title: 'Continuous AI Coaching', icon: Brain },
  { n: '04', title: 'Performance Tracking', icon: TrendingUp },
  { n: '05', title: 'Career Growth', icon: Trophy },
];

const COMPARISON_FEATURES = [
  { feature: '95K Indian Foods', ai: true, cult: false, hme: 'p', fittr: 'p', strava: false },
  { feature: 'AI Real-time Coach', ai: true, cult: false, hme: 'p', fittr: 'p', strava: false },
  { feature: 'Blood Test Integration', ai: true, cult: false, hme: false, fittr: false, strava: false },
  { feature: 'Vernacular Coaching', ai: true, cult: false, hme: false, fittr: false, strava: false },
  { feature: 'Festival Calendar', ai: true, cult: false, hme: false, fittr: false, strava: false },
  { feature: 'AQI-Aware Workouts', ai: true, cult: false, hme: false, fittr: false, strava: false },
  { feature: 'Token Rewards', ai: true, cult: false, hme: false, fittr: false, strava: false },
  { feature: 'Tier-2 City Pricing', ai: true, cult: false, hme: false, fittr: true, strava: false },
  { feature: 'Community Feed', ai: true, cult: true, hme: false, fittr: true, strava: true },
  { feature: 'Corporate Wellness', ai: true, cult: true, hme: true, fittr: false, strava: false },
  { feature: 'AI Suggestions', ai: true, cult: 'p', hme: true, fittr: true, strava: false },
];

const REVENUE_STREAMS = [
  { title: 'Subscription', detail: '₹99/month · ₹999/year', icon: Smartphone },
  { title: 'Corporate Wellness', detail: '₹60 per employee/month', icon: Building2 },
  { title: 'Marketplace Commission', detail: '15–22% per transaction', icon: TrendingUp },
  { title: 'Merchandise & Products', detail: 'Fitness gear & token redemption', icon: Gift },
];
const UNIT_METRICS = [
  { label: 'LTV', value: '₹16,800' }, { label: 'CAC', value: '₹650' },
  { label: 'Payback Period', value: '47 Days' }, { label: 'Gross Margin', value: '41%' },
  { label: 'NRR', value: '118%' },
];

const ROADMAP = [
  { status: 'Available', color: C.teal, items: ['Android App', 'AI Trainer', 'Gym Partnerships'] },
  { status: 'In Progress', color: C.saffron, items: ['iOS App', 'Brand Partnerships', 'Influencer Marketing'] },
  { status: 'Coming Soon', color: C.lime, items: ['Community App', 'Advanced Gamification', 'Team Challenges', 'Brand Rewards'] },
];

const FAQS = [
  { q: 'What makes Impossible AI different?', a: "Impossible AI is India's first Multi-Agent AI Fitness Platform built for Indian lifestyles. We understand Indian food (95,000+ recipes), 6 Indian languages, Indian festivals, and Indian health patterns including metabolic conditions unique to South Asians." },
  { q: 'How does the AI coach work?', a: 'Our AI coach provides under 3-second responses with permanent memory of your fitness journey. It gives personalized guidance in 6 Indian languages, conducts daily check-ins, and continuously adapts your plan based on progress.' },
  { q: 'How are tokens earned?', a: '10,000 steps = 5 tokens, 300 kcal workout = 15 tokens, gym check-in = 20 tokens, 7-8 hours sleep = 10 tokens, 30-day streak = 200 bonus tokens. Our AI verifies activities using GPS, phone sensors, and wearables.' },
  { q: 'Can I redeem tokens for cash?', a: 'Yes! Tokens can be redeemed for cash, gym passes, supplements, personal coaching sessions, fitness products from our marketplace, and donated to health-related charities.' },
  { q: 'Does it support Indian food?', a: 'Absolutely. 95,000+ Indian recipes with full macro tracking, regional food support for all Indian cuisines, and an Indian phenotype database for accurate nutrition analysis.' },
  { q: 'Does it work with wearables?', a: 'Yes, Impossible AI integrates with smartwatches and fitness bands to verify activities, track health metrics automatically, and provide richer coaching insights.' },
  { q: 'Can athletes find coaches?', a: 'Yes! AI-powered matching connects athletes with coaches, helps with sponsor discovery, government scheme applications, competition calendars, and builds a verified performance profile for national visibility.' },
  { q: 'Is there a community?', a: 'Yes! Find local running clubs, fitness groups, gym partners, and accountability buddies. Hyperlocal discovery shows nearby gyms, trainers, yoga studios, CrossFit boxes, and upcoming events.' },
  { q: 'Is the app available?', a: 'The Android app is live with AI Trainer and Gym Partnerships. iOS is in active development. Join our waitlist for early access.' },
  { q: 'Which languages are supported?', a: 'Hindi, Tamil, Telugu, Kannada, Malayalam, and Marathi. More regional languages are being added based on demand.' },
];

const NAV_LINKS = ['Problem', 'Features', 'Rewards', 'Athletes', 'Compare', 'Pricing'];

interface AdvancedLandingPageProps {
  onNavigate?: (screen: string, data?: any) => void;
}

export function AdvancedLandingPage({ onNavigate }: AdvancedLandingPageProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((p) => (p + 1) % HERO_ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const chk = (val: boolean | string) => {
    if (val === true) return <span style={{ fontSize: 18 }}>✅</span>;
    if (val === 'p') return <span style={{ fontSize: 18 }}>⚠️</span>;
    return <span style={{ fontSize: 18, opacity: 0.4 }}>❌</span>;
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sec = (extra?: React.CSSProperties): React.CSSProperties => ({
    padding: 'clamp(48px,8vw,96px) 24px', borderBottom: `1px solid ${C.line}`, background: C.bg, ...extra,
  });
  const inner: React.CSSProperties = { maxWidth: 1200, margin: '0 auto' };

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: '100vh', fontFamily: "'Inter',sans-serif" }}>
      <style>{`
        html{scroll-behavior:smooth}
        @import url('${FONT_URL}');
        .disp{font-family:'Playfair Display',Georgia,serif;letter-spacing:-0.02em}
        .mono{font-family:'IBM Plex Mono',monospace;letter-spacing:.06em}
        .nav-links{display:flex;gap:32px}
        .nav-link-item{font-size:12px;color:rgba(255,255,255,.7);text-decoration:none;transition:color .2s;letter-spacing:.06em;font-family:'IBM Plex Mono',monospace}
        .nav-link-item:hover{color:${C.lime}!important}
        .nav-link-mobile{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:${C.text};text-decoration:none;border-bottom:1px solid ${C.line};padding-bottom:16px;transition:color .2s}
        .nav-link-mobile:hover{color:${C.lime}!important}
        .nav-desktop-btn{display:block}
        .nav-hamburger{display:none;background:none;border:none;cursor:pointer;padding:8px;color:${C.text}}
        @media(max-width:768px){.nav-links{display:none!important}.nav-desktop-btn{display:none!important}.nav-hamburger{display:flex!important;align-items:center;justify-content:center}}
        @media(max-width:480px){.hero-badge{margin-top:20px!important}.nav-link-mobile{font-size:18px!important;padding-bottom:10px!important}}
        .btn-lime{background:${C.lime};color:#08080A;border:none;border-radius:9999px;padding:14px 28px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.06em;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:box-shadow .2s,transform .15s}
        .btn-lime:hover{box-shadow:0 0 24px 6px ${C.limeGlow};transform:translateY(-1px)}
        .btn-ghost{background:rgba(255,255,255,.05);color:${C.text};border:1px solid rgba(255,255,255,.18);border-radius:9999px;padding:14px 28px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.06em;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:background .2s,border-color .2s}
        .btn-ghost:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.3)}
        .btn-saffron{background:rgba(255,255,255,0.1);color:${C.text};border:1px solid rgba(255,255,255,0.25);border-radius:9999px;padding:14px 28px;font-family:'IBM Plex Mono',monospace;font-size:12px;letter-spacing:.06em;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:box-shadow .2s,transform .15s}
        .btn-saffron:hover{background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.4);transform:translateY(-1px)}
        .feat-card{background:${C.paper};border:1px solid ${C.line};border-radius:20px;padding:clamp(20px,4vw,32px);box-sizing:border-box;transition:border-color .2s,background .2s}
        .feat-card:hover{border-color:${C.lime};background:${C.paperHover}}
        .tag-lime{display:inline-block;background:rgba(180,181,201,.1);color:${C.lime};border-radius:9999px;padding:3px 12px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.08em;margin-bottom:18px}
        .tag-saffron{display:inline-block;background:rgba(180,181,201,.1);color:${C.lime};border-radius:9999px;padding:3px 12px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.08em;margin-bottom:18px}
        .table-scroll{overflow-x:auto;-webkit-overflow-scrolling:touch}
        .comp-table{width:100%;border-collapse:collapse;min-width:680px}
        .comp-table th,.comp-table td{padding:13px 16px;text-align:center;border-bottom:1px solid ${C.line};font-size:13px}
        .comp-table th{font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:.08em;color:${C.muted}}
        .comp-table td:first-child{text-align:left;color:${C.text};font-weight:500}
        .comp-table th:first-child{text-align:left}
        .comp-table th.hl{color:${C.lime}}
        .comp-table tr:last-child td{border-bottom:none}
        .faq-item{border-bottom:1px solid ${C.line};padding:20px 0;cursor:pointer}
        .faq-item:last-child{border-bottom:none}
        .stat-card{background:${C.paper};border:1px solid ${C.line};border-radius:16px;padding:24px;text-align:center;box-sizing:border-box}
      `}</style>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: scrolled || mobileMenuOpen ? 'rgba(8,8,10,.95)' : 'rgba(8,8,10,.7)', backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.line}`, transition: 'background .3s' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, background: C.lime, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap style={{ width: 18, height: 18, color: C.bg }} />
            </div>
            <div>
              <div className="disp" style={{ fontSize: 16, lineHeight: 1, fontWeight: 700 }}>Impossible AI</div>
              <div className="mono" style={{ fontSize: 9, color: C.lime, marginTop: 2 }}>INDIA'S AI FITNESS PLATFORM</div>
            </div>
          </div>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={(e) => scrollToSection(e, l.toLowerCase())} className="nav-link-item">{l.toUpperCase()}</a>
            ))}
          </div>
          <button onClick={() => onNavigate?.('signup')} className="btn-lime nav-desktop-btn" style={{ fontSize: 11, padding: '10px 20px' }}>
            JOIN BETA <ChevronRight style={{ width: 13, height: 13 }} />
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="nav-hamburger" aria-label="Toggle menu">
            {mobileMenuOpen ? <X style={{ width: 22, height: 22 }} /> : <Menu style={{ width: 22, height: 22 }} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: C.bg, zIndex: 45, padding: '100px 24px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 20 }}>
              {NAV_LINKS.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={(e) => { scrollToSection(e, l.toLowerCase()); setMobileMenuOpen(false); }} className="nav-link-mobile">{l}</a>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              <button onClick={() => { setMobileMenuOpen(false); onNavigate?.('signup'); }} className="btn-lime" style={{ width: '100%', justifyContent: 'center', padding: '16px 0' }}>JOIN BETA</button>
              <button onClick={() => { setMobileMenuOpen(false); onNavigate?.('home'); }} className="btn-ghost" style={{ width: '100%', justifyContent: 'center', padding: '16px 0' }}>EXPLORE APP</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 1. HERO ── */}
      <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 'clamp(60px,8vw,100px)', paddingBottom: 'clamp(60px,8vw,100px)', borderBottom: `1px solid ${C.line}`, background: C.bg }}>
        <div
          aria-hidden
          style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
        >
          <Lightfall
            colors={[...LIGHTFALL.colors]}
            backgroundColor={LIGHTFALL.backgroundColor}
            speed={0.4}
            streakCount={2}
            streakWidth={0.92}
            streakLength={0.95}
            glow={0.42}
            density={0.3}
            twinkle={0.32}
            zoom={3}
            backgroundGlow={0.11}
            opacity={0.5}
            mouseInteraction={false}
            mouseStrength={0.5}
            mouseRadius={1}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(180deg, rgba(8,8,10,0.32) 0%, ${C.bg} 94%)`,
              pointerEvents: 'none',
            }}
          />
        </div>
        <div style={{ ...inner, padding: '0 24px', boxSizing: 'border-box', position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(180,181,201,.08)', border: `1px solid rgba(180,181,201,.2)`, borderRadius: 9999, padding: '6px 16px', marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, background: C.lime, borderRadius: '50%' }} />
            <span className="mono" style={{ fontSize: 11, color: C.lime }}>
              BUILT FOR&nbsp;
              <AnimatePresence mode="wait">
                <motion.span key={roleIndex} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.3 }} style={{ display: 'inline-block' }}>
                  {HERO_ROLES[roleIndex].toUpperCase()}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          <h1 className="disp" style={{ fontSize: 'clamp(44px,9vw,100px)', lineHeight: 0.92, margin: 0, fontWeight: 900, marginBottom: 24 }}>
            India's <span style={{ color: C.lime }}>AI-Powered</span><br />Fitness &amp; Health<br />Platform
          </h1>
          <p style={{ fontSize: 'clamp(15px,1.6vw,19px)', color: C.muted, maxWidth: 620, lineHeight: 1.75, margin: '0 auto 20px' }}>
            The world's first AI Multi-Agent Fitness Platform built for Indian lifestyles. Personalized AI coaching, nutrition, rewards, community, and athlete opportunities - all in one platform.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            {HERO_BADGES.map((b) => <span key={b} className="tag-lime" style={{ marginBottom: 0 }}>{b}</span>)}
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 72 }}>
            <button onClick={() => onNavigate?.('signup')} className="btn-lime" style={{ fontSize: 13, padding: '16px 32px' }}>DOWNLOAD APP <ChevronRight style={{ width: 15, height: 15 }} /></button>
            <button onClick={() => onNavigate?.('signup')} className="btn-saffron" style={{ fontSize: 13, padding: '16px 32px' }}>JOIN BETA <ChevronRight style={{ width: 15, height: 15 }} /></button>
            <button onClick={() => onNavigate?.('home')} className="btn-ghost" style={{ fontSize: 13, padding: '16px 32px' }}>START YOUR JOURNEY</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))', gap: 1, background: C.line, borderRadius: 16, overflow: 'hidden', width: '100%', textAlign: 'left' }}>
            {HERO_STATS.map((s) => (
              <div key={s.label} style={{ background: C.paper, padding: '28px 24px' }}>
                <div className="disp" style={{ fontSize: 44, color: C.lime, fontWeight: 900 }}>{s.value}</div>
                <div className="mono" style={{ fontSize: 10, color: C.muted, marginTop: 6 }}>{s.label.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM ── */}
      <section id="problem" style={sec()}>
        <div style={inner}>
          <div className="tag-saffron">• THE PROBLEM</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 12, lineHeight: 1.1 }}>
            India is Facing a Metabolic &amp;<br /><span style={{ color: C.saffron }}>Environmental Tsunami</span>
          </h2>
          <p style={{ color: C.muted, fontSize: 16, marginBottom: 56, maxWidth: 600, lineHeight: 1.7 }}>
            Urban India's health crisis is accelerating. Lifestyle diseases are hitting younger and younger — and the numbers demand urgent action.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,175px),1fr))', gap: 16, marginBottom: 56 }}>
            {PROBLEM_STATS.map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 16, padding: '24px 20px', boxSizing: 'border-box' }}>
                <div className="disp" style={{ fontSize: 32, fontWeight: 900, color: C.saffron, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 20, marginBottom: 48 }}>
            {LIFESTYLE_PROBLEMS.map((p) => (
              <div key={p.title} className="feat-card">
                <div style={{ width: 44, height: 44, background: C.saffronGlow, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <p.icon style={{ width: 22, height: 22, color: C.saffron }} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <div style={{ background: `linear-gradient(135deg,rgba(255,140,66,.08),rgba(180,181,201,.04))`, border: `1px solid rgba(255,140,66,.2)`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
            <div className="tag-saffron">• HEALTH FACTS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,250px),1fr))', gap: 16 }}>
              {['26% of adolescents have unhealthy cholesterol levels.', '20–25% of young adults have hypertension.', 'Lifestyle diseases are mostly preventable through exercise, nutrition, and healthy habits.'].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <Check style={{ width: 16, height: 16, color: C.saffron, marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: C.text, lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. NUTRITION CRISIS ── */}
      <section style={sec({ background: C.paper })}>
        <div style={inner}>
          <div className="tag-saffron">• INDIA'S NUTRITION CRISIS</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>
            A Nation <span style={{ color: C.saffron }}>Deficient</span> at Every Age
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,290px),1fr))', gap: 24, marginBottom: 48 }}>
            {NUTRITION_GROUPS.map((g) => (
              <motion.div key={g.age} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ background: C.bg, border: `1px solid ${C.line}`, borderTop: `3px solid ${g.color}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
                <div className="mono" style={{ fontSize: 10, color: g.color, marginBottom: 8 }}>{g.age.toUpperCase()}</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{g.pop}</div>
                <div style={{ height: 1, background: C.line, margin: '16px 0' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {g.stats.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: g.color, marginTop: 6, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div style={{ background: `linear-gradient(135deg,rgba(255,140,66,.12),rgba(180,181,201,.06))`, border: `1px solid rgba(255,140,66,.25)`, borderRadius: 20, padding: 'clamp(28px,5vw,56px)', textAlign: 'center', boxSizing: 'border-box' }}>
            <div className="disp" style={{ fontSize: 'clamp(48px,8vw,88px)', fontWeight: 900, color: C.saffron, lineHeight: 1 }}>965 Million</div>
            <div style={{ fontSize: 20, color: C.text, marginTop: 12, fontWeight: 600 }}>Indians are deficient in at least one essential nutrient</div>
            <div style={{ fontSize: 14, color: C.muted, marginTop: 8 }}>Across children, youth, and working adults — a nationwide crisis demanding AI-powered solutions</div>
          </div>
        </div>
      </section>

      {/* ── 4. MARKET OPPORTUNITY ── */}
      <section style={sec()}>
        <div style={inner}>
          <div className="tag-lime">• MARKET OPPORTUNITY</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>
            India's <span style={{ color: C.lime }}>Fitness Revolution</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,190px),1fr))', gap: 16, marginBottom: 48 }}>
            {[{ v: '100M+', l: 'Overweight adults' }, { v: '49–57%', l: 'Physically inactive' }, { v: '1 in 4', l: 'Adults have hypertension' }, { v: '15%', l: 'CAGR growth rate' }].map((s) => (
              <div key={s.l} className="stat-card">
                <div className="disp" style={{ fontSize: 38, fontWeight: 900, color: C.lime }}>{s.v}</div>
                <div style={{ fontSize: 13, color: C.muted, marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 24 }}>
            {[
              { tag: 'MARKET SIZE', rows: [{ yr: '2025', val: '₹16,200 Cr', pct: '43%' }, { yr: '2030', val: '₹37,700 Cr', pct: '100%' }], badge: '15% CAGR', icon: ArrowUpRight },
              { tag: 'MEMBERSHIP GROWTH', rows: [{ yr: '2024', val: '12.3 Million', pct: '53%' }, { yr: '2030', val: '23.2 Million', pct: '100%' }], badge: '+88%', icon: Users },
            ].map((card) => (
              <div key={card.tag} style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(24px,4vw,40px)', boxSizing: 'border-box' }}>
                <div className="tag-lime">{card.tag}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {card.rows.map((r, i) => (
                    <div key={r.yr}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <div>
                          <div className="mono" style={{ fontSize: 11, color: C.muted }}>{r.yr}</div>
                          <div className="disp" style={{ fontSize: 32, fontWeight: 900, color: i === 1 ? C.lime : C.text }}>{r.val}</div>
                        </div>
                        {i === 0 ? <card.icon style={{ width: 26, height: 26, color: C.lime }} /> : <span className="mono" style={{ fontSize: 12, color: C.lime, background: C.limeGlow, padding: '4px 12px', borderRadius: 9999 }}>{card.badge}</span>}
                      </div>
                      {i === 0 && <div style={{ height: 4, background: C.line, borderRadius: 9999, overflow: 'hidden' }}><div style={{ width: r.pct, height: '100%', background: C.lime, borderRadius: 9999 }} /></div>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. WHY IMPOSSIBLE AI ── */}
      <section style={sec({ background: C.paper })}>
        <div style={inner}>
          <div className="tag-saffron">• WHY IMPOSSIBLE AI</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 12 }}>
            Built for Indian Bodies.<br /><span style={{ color: C.saffron }}>Indian Food. Indian Lives.</span>
          </h2>
          <p style={{ color: C.muted, fontSize: 16, marginBottom: 56, maxWidth: 520, lineHeight: 1.7 }}>Unlike western fitness apps, Impossible AI truly understands what it means to live, eat, and exercise in India.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 20 }}>
            {INDIA_FIRST.map((item) => (
              <motion.div key={item.label} whileHover={{ scale: 1.01 }} transition={{ duration: 0.15 }}
                style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 16, padding: 'clamp(18px,3vw,28px)', boxSizing: 'border-box', display: 'flex', gap: 16 }}>
                <div style={{ width: 44, height: 44, background: C.saffronGlow, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <item.icon style={{ width: 22, height: 22, color: C.saffron }} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CORE FEATURES ── */}
      <section id="features" style={sec()}>
        <div style={inner}>
          <div className="tag-lime">• CORE FEATURES</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>
            Everything You Need.<br /><span style={{ color: C.lime }}>Nothing You Don't.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 24 }}>
            {CORE_FEATURES.map((f) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="feat-card" style={{ borderTop: `3px solid ${f.color}` }}>
                <div style={{ display: 'inline-block', background: `rgba(${f.colorRgb},.1)`, color: f.color, borderRadius: 9999, padding: '3px 12px', fontFamily: "'IBM Plex Mono',monospace", fontSize: 10, letterSpacing: '.08em', marginBottom: 18 }}>{f.tag}</div>
                <div style={{ width: 44, height: 44, background: `rgba(${f.colorRgb},.12)`, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <f.icon style={{ width: 22, height: 22, color: f.color }} />
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6, marginBottom: 20 }}>{f.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {f.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <Check style={{ width: 14, height: 14, color: f.color, marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: C.muted }}>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. AI REWARD SYSTEM ── */}
      <section id="rewards" style={sec({ background: C.paper })}>
        <div style={inner}>
          <div className="tag-lime">• AI REWARD SYSTEM</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 16 }}>
            Every Healthy Action <span style={{ color: C.lime }}>Pays</span>
          </h2>
          <p style={{ color: C.muted, fontSize: 16, marginBottom: 56, maxWidth: 520, lineHeight: 1.7 }}>AI verifies your activities using GPS, phone sensors, and wearables — then credits tokens automatically. No cheating, no guessing.</p>
          <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 56, justifyContent: 'center' }}>
            {REWARD_STEPS.map((step, i) => (
              <div key={step.n} style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: 160, flexShrink: 0 }}>
                  <div style={{ width: 56, height: 56, background: C.limeGlow, border: `2px solid ${C.lime}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <step.icon style={{ width: 24, height: 24, color: C.lime }} />
                  </div>
                  <div className="mono" style={{ fontSize: 9, color: C.lime }}>STEP {step.n}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, textAlign: 'center', lineHeight: 1.4 }}>{step.title}</div>
                </div>
                {i < REWARD_STEPS.length - 1 && (
                  <div style={{ height: 2, width: 32, background: `linear-gradient(to right,${C.lime},transparent)`, marginTop: 27, flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 24 }}>
            <div style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
              <div className="tag-lime" style={{ marginBottom: 20 }}>EXAMPLE REWARDS</div>
              {REWARD_EXAMPLES.map((r) => (
                <div key={r.action} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: `1px solid ${C.line}` }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <span style={{ fontSize: 20 }}>{r.icon}</span>
                    <span style={{ fontSize: 14, color: C.muted }}>{r.action}</span>
                  </div>
                  <span className="mono" style={{ fontSize: 12, color: C.lime, fontWeight: 700 }}>{r.tokens}</span>
                </div>
              ))}
            </div>
            <div style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
              <div className="tag-lime" style={{ marginBottom: 20 }}>REDEEM FOR</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Cash', 'Gym Passes', 'Supplements', 'Coaching Sessions', 'Charitable Donations'].map((r) => (
                  <div key={r} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '14px 16px', background: C.limeGlow, borderRadius: 12 }}>
                    <Check style={{ width: 16, height: 16, color: C.lime, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CRED ECONOMY ── */}
      <section style={sec()}>
        <div style={inner}>
          <div className="tag-lime">• CRED STYLE ECONOMY</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>
            We Reward <span style={{ color: C.lime }}>Consistency</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 24 }}>
            {[
              { icon: Flame, title: 'Earn', sub: 'Turn healthy habits into tokens', color: C.saffron, rgb: '255,140,66', items: ['Workouts & exercise', 'Consistency streaks', 'Healthy food logging', 'Sleep & recovery'] },
              { icon: Trophy, title: 'Unlock', sub: 'Access premium services with tokens', color: C.lime, rgb: '180,181,201', items: ['Marketplace access', 'Coaching sessions', 'Health insurance benefits', 'Blood tests & diagnostics'] },
              { icon: TrendingUp, title: 'Revenue', sub: 'A sustainable fitness economy', color: C.teal, rgb: '78,205,196', items: ['Marketplace commission', 'Corporate wellness', 'Brand partnerships', 'Token ecosystem'] },
            ].map((col) => (
              <div key={col.title} style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(24px,4vw,36px)', boxSizing: 'border-box' }}>
                <div style={{ width: 52, height: 52, background: `rgba(${col.rgb},.12)`, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <col.icon style={{ width: 26, height: 26, color: col.color }} />
                </div>
                <div className="disp" style={{ fontSize: 28, fontWeight: 900, marginBottom: 6, color: col.color }}>{col.title}</div>
                <div style={{ fontSize: 14, color: C.muted, marginBottom: 20 }}>{col.sub}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: col.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 14, color: C.muted }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9 & 10. ATHLETE PLATFORM & NETWORK ── */}
      <section id="athletes" style={sec({ background: C.paper })}>
        <div style={inner}>
          <div className="tag-saffron">• ATHLETE PLATFORM</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 16 }}>
            One Platform.<br /><span style={{ color: C.saffron }}>Every Athlete's Path.</span>
          </h2>
          <p style={{ color: C.muted, fontSize: 16, marginBottom: 56, maxWidth: 520, lineHeight: 1.7 }}>From creating your first profile to getting discovered by national scouts — the complete athlete journey in one platform.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))', gap: 20, marginBottom: 64 }}>
            {ATHLETE_STEPS.map((step, i) => (
              <motion.div key={step.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 16, padding: 24, boxSizing: 'border-box', textAlign: 'center' }}>
                <div className="disp" style={{ fontSize: 48, fontWeight: 900, color: 'transparent', WebkitTextStroke: `1.5px ${C.saffron}`, lineHeight: 1, marginBottom: 16 }}>{step.n}</div>
                <div style={{ width: 44, height: 44, background: C.saffronGlow, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <step.icon style={{ width: 22, height: 22, color: C.saffron }} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{step.title}</div>
              </motion.div>
            ))}
          </div>

          <div className="tag-saffron">• ATHLETE NETWORK</div>
          <h3 className="disp" style={{ fontSize: 'clamp(24px,4vw,40px)', fontWeight: 900, marginBottom: 40 }}>India's First Performance-Based <span style={{ color: C.saffron }}>Athlete Network</span></h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 24 }}>
            <div style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
              <div className="tag-saffron">FEATURES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[{ icon: Globe, label: 'National Athlete Graph' }, { icon: Users, label: 'Coach Matching' }, { icon: Star, label: 'Sponsor Matching' }, { icon: Shield, label: 'Government Schemes' }, { icon: Target, label: 'Competition Calendar' }].map((f) => (
                  <div key={f.label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{ width: 40, height: 40, background: C.saffronGlow, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <f.icon style={{ width: 18, height: 18, color: C.saffron }} />
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 500 }}>{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
              <div className="tag-saffron">BENEFITS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Get discovered by national scouts', 'Apply for government grants', 'Meet world-class coaches', 'Receive brand sponsorship', 'Never miss trials & competitions'].map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Check style={{ width: 16, height: 16, color: C.saffron, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: C.muted, lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: `linear-gradient(135deg,rgba(255,140,66,.08),rgba(180,181,201,.04))`, border: `1px solid rgba(255,140,66,.2)`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
              <div className="tag-saffron">VISION</div>
              <div className="disp" style={{ fontSize: 22, fontWeight: 700, marginBottom: 20, lineHeight: 1.3 }}>Building India's Next Generation of Athletes</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Discover hidden talent across India', 'Reduce athlete dropout rates', 'Build scientific development pathways', 'Create an Olympic pipeline'].map((g, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <Star style={{ width: 14, height: 14, color: C.saffron, marginTop: 3, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: C.muted, lineHeight: 1.5 }}>{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12 & 13. COMMUNITY + SOCIAL ── */}
      <section style={sec()}>
        <div style={inner}>
          <div className="tag-lime">• HYPERLOCAL COMMUNITY &amp; SOCIAL NETWORK</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>
            Your City. <span style={{ color: C.lime }}>Your Fitness Tribe.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', gap: 24, marginBottom: 32 }}>
            <div style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
              <div className="tag-lime">FIND NEAR YOU</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[{ icon: Building2, label: 'Gyms' }, { icon: Users, label: 'Trainers' }, { icon: Heart, label: 'Yoga Studios' }, { icon: Activity, label: 'Running Clubs' }, { icon: Dumbbell, label: 'CrossFit' }, { icon: Star, label: 'Events' }].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: 12, background: C.limeGlow, borderRadius: 12 }}>
                    <item.icon style={{ width: 16, height: 16, color: C.lime }} />
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
              <div className="tag-lime">SOCIAL FEATURES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {['Follow friends & fitness influencers', 'Share progress & workout highlights', 'Join group challenges together', 'Compete on local leaderboards'].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <Check style={{ width: 16, height: 16, color: C.lime, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: C.muted, lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
              <div className="tag-lime">INDIA'S FITNESS SOCIAL NETWORK</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {[{ icon: MessageCircle, label: 'Posts & Comments' }, { icon: Heart, label: 'Likes & Reactions' }, { icon: Share2, label: 'Share Moments' }, { icon: Users, label: 'Friends & Clubs' }, { icon: MapPin, label: 'Local Events' }, { icon: Trophy, label: 'Token Rewards' }].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <item.icon style={{ width: 14, height: 14, color: C.lime, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: C.muted }}>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="tag-lime" style={{ marginBottom: 12 }}>LEADERBOARDS</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Weekly', 'Monthly', 'Global', 'City', 'Friends'].map((l) => (
                  <span key={l} style={{ background: C.limeGlow, border: `1px solid rgba(180,181,201,.2)`, borderRadius: 9999, padding: '6px 14px' }}>
                    <span className="mono" style={{ fontSize: 10, color: C.lime }}>{l.toUpperCase()}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. GAMIFICATION ── */}
      <section style={{ padding: '140px 24px', borderBottom: `1px solid ${C.line}`, background: 'linear-gradient(180deg,#050816 0%,#09142A 50%,#0D1025 100%)', position: 'relative', overflow: 'hidden' }}>
        {/* bg glow orbs */}
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: 500, height: 500, background: 'radial-gradient(circle,rgba(180,181,201,0.06) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle,rgba(78,140,255,0.05) 0%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 70 }}>
            <div className="tag-lime">• GAMIFICATION</div>
            <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 16 }}>
              Fitness as a Game <span style={{ color: C.lime }}>You Want to Play</span>
            </h2>
            <p style={{ color: C.muted, fontSize: 16, maxWidth: 560, lineHeight: 1.7 }}>
              Every workout becomes an adventure. Complete missions. Earn XP. Unlock rewards. Compete with friends. Level up your fitness.
            </p>
          </div>

          {/* Two-column: Left 42% | Right 58% */}
          <div style={{ display: 'flex', gap: 70, alignItems: 'center', flexWrap: 'wrap', marginBottom: 80 }}>

            {/* LEFT — 42% */}
            <div style={{ flex: '0 0 42%', minWidth: 280, boxSizing: 'border-box' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <span style={{ fontSize: 22 }}>🏆</span>
                <span className="mono" style={{ fontSize: 12, color: C.lime, letterSpacing: '0.1em' }}>FITNESS AS A GAME</span>
              </div>

              <p style={{ fontSize: 15, color: C.muted, lineHeight: 1.7, marginBottom: 32, maxWidth: 360 }}>
                Turn every healthy action into a rewarding game experience. Missions, bosses, XP — all tied to your real fitness goals.
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: `rgba(255,255,255,0.08)`, marginBottom: 28 }} />

              {/* Bullet points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {[
                  { icon: '🎯', label: 'Daily Missions' },
                  { icon: '⚔️', label: 'Weekly Boss Challenges' },
                  { icon: '⭐', label: 'Earn XP' },
                  { icon: '🎁', label: 'Unlock Rewards' },
                  { icon: '🔥', label: 'Build Streaks' },
                  { icon: '🗺️', label: 'Explore Live Maps' },
                  { icon: '🏋️', label: 'Discover Nearby Gyms' },
                  { icon: '👥', label: 'Battle Friends' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.1)`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, backdropFilter: 'blur(8px)' }}>
                      <span style={{ fontSize: 17 }}>{item.icon}</span>
                    </div>
                    <span style={{ fontSize: 15, fontWeight: 500, color: C.text }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: `rgba(255,255,255,0.08)`, marginBottom: 32 }} />

              <button
                onClick={() => onNavigate?.('signup')}
                className="btn-lime"
                style={{ fontSize: 13, padding: '16px 36px' }}
              >
                Start Playing <ChevronRight style={{ width: 15, height: 15 }} />
              </button>
            </div>

            {/* RIGHT — 58% */}
            <div style={{ flex: '1 1 0', minWidth: 280, boxSizing: 'border-box' }}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  borderRadius: 24,
                  border: `1px solid rgba(255,255,255,0.12)`,
                  boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(180,181,201,0.08)',
                  overflow: 'hidden',
                  backdropFilter: 'blur(4px)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <img
                  src="/game-map.png"
                  alt="Fitness Game Map — Impossible AI"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 24 }}
                />
              </motion.div>
            </div>
          </div>

          {/* Feature Cards Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,160px),1fr))', gap: 16, marginBottom: 80 }}>
            {[
              { icon: '🏆', label: 'Daily Missions' },
              { icon: '⚡', label: 'XP System' },
              { icon: '🎁', label: 'Rewards' },
              { icon: '🗺️', label: 'Live Map' },
              { icon: '👥', label: 'Multiplayer' },
              { icon: '🔥', label: 'Streaks' },
            ].map((card) => (
              <div key={card.label} style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid rgba(255,255,255,0.08)`, borderRadius: 16, padding: '20px 16px', textAlign: 'center', backdropFilter: 'blur(8px)', boxSizing: 'border-box' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{card.label}</div>
              </div>
            ))}
          </div>

          {/* How It Works Timeline */}
          <div>
            <div className="tag-lime">• HOW IT WORKS</div>
            <h3 className="disp" style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, marginBottom: 16 }}>
              From Workout to <span style={{ color: C.lime }}>Legend</span>
            </h3>
            <p style={{ color: C.muted, fontSize: 15, maxWidth: 480, lineHeight: 1.7, marginBottom: 48 }}>
              Four steps from your first rep to top of the leaderboard.
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {GAMIFICATION_STEPS.map((step, i) => (
                <div key={step.n} style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, width: 168, flexShrink: 0 }}
                  >
                    <div style={{ width: 56, height: 56, background: C.limeGlow, border: `2px solid ${C.lime}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <step.icon style={{ width: 24, height: 24, color: C.lime }} />
                    </div>
                    <div className="mono" style={{ fontSize: 9, color: C.lime }}>STEP {step.n}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, textAlign: 'center', lineHeight: 1.4 }}>{step.title}</div>
                  </motion.div>
                  {i < GAMIFICATION_STEPS.length - 1 && (
                    <div style={{ height: 2, width: 36, background: `linear-gradient(to right,${C.lime},rgba(180,181,201,0.2))`, marginTop: 27, flexShrink: 0 }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ── 15. COMPARISON ── */}
      <section id="compare" style={sec()}>
        <div style={inner}>
          <div className="tag-lime">• WHY WE'RE DIFFERENT</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>
            No One Else<br /><span style={{ color: C.lime }}>Does This</span>
          </h2>
          <div className="table-scroll">
            <table className="comp-table">
              <thead>
                <tr style={{ background: C.paper }}>
                  <th>FEATURE</th>
                  <th className="hl">IMPOSSIBLE AI</th>
                  <th>CULT.FIT</th>
                  <th>HEALTHIFYME</th>
                  <th>FITTR</th>
                  <th>STRAVA</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((row, i) => (
                  <tr key={row.feature} style={{ background: i % 2 === 0 ? C.paper : 'transparent' }}>
                    <td>{row.feature}</td>
                    <td style={{ background: 'rgba(180,181,201,.05)' }}>{chk(row.ai)}</td>
                    <td>{chk(row.cult)}</td>
                    <td>{chk(row.hme)}</td>
                    <td>{chk(row.fittr)}</td>
                    <td>{chk(row.strava)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: 16 }}>
            <span className="mono" style={{ fontSize: 10, color: C.muted2 }}>✅ FULL SUPPORT &nbsp; ⚠️ PARTIAL &nbsp; ❌ NOT AVAILABLE</span>
          </div>
        </div>
      </section>

      {/* ── 16. COMMUNITY BENEFITS ── */}
      <section style={sec({ background: C.paper })}>
        <div style={inner}>
          <div className="tag-lime">• COMMUNITY BENEFITS</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>The Numbers <span style={{ color: C.lime }}>Don't Lie</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))', gap: 24 }}>
            {[{ value: '3.4×', label: 'More Active', sub: 'Community users vs solo users' }, { value: '54%', label: 'Retention Rate', sub: 'vs only 6% for solo users' }, { value: '25.8×', label: 'LTV:CAC Ratio', sub: 'Exceptional unit economics' }].map((stat) => (
              <motion.div key={stat.value} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                style={{ background: `linear-gradient(135deg,rgba(180,181,201,.08),rgba(180,181,201,.03))`, border: `1px solid rgba(180,181,201,.2)`, borderRadius: 24, padding: 'clamp(28px,5vw,48px)', textAlign: 'center', boxSizing: 'border-box' }}>
                <div className="disp" style={{ fontSize: 'clamp(48px,7vw,80px)', fontWeight: 900, color: C.lime, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginTop: 12 }}>{stat.label}</div>
                <div style={{ fontSize: 14, color: C.muted, marginTop: 6 }}>{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 17. TAM / SAM / SOM ── */}
      <section style={sec()}>
        <div style={inner}>
          <div className="tag-lime">• MARKET SIZE</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>A Massive <span style={{ color: C.lime }}>Addressable Market</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 24, marginBottom: 40 }}>
            {[{ label: 'TAM', value: '$150B–250B+', desc: 'Total Addressable Market — Global fitness & health', color: C.saffron }, { label: 'SAM', value: '$5B–15B', desc: 'Serviceable Addressable Market — India digital fitness', color: C.lime }, { label: 'SOM', value: '$100M–500M', desc: 'Serviceable Obtainable Market — Near-term opportunity', color: C.teal }].map((m) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                style={{ background: C.paper, border: `1px solid ${C.line}`, borderLeft: `4px solid ${m.color}`, borderRadius: 20, padding: 'clamp(24px,4vw,36px)', boxSizing: 'border-box' }}>
                <div className="mono" style={{ fontSize: 11, color: m.color, marginBottom: 8 }}>{m.label}</div>
                <div className="disp" style={{ fontSize: 36, fontWeight: 900, marginBottom: 8 }}>{m.value}</div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>{m.desc}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,190px),1fr))', gap: 16 }}>
            {[{ v: '820M', l: 'Smartphone users in India' }, { v: '0.8–2%', l: 'Current gym penetration' }, { v: '67%', l: 'Never use memberships' }, { v: '50%', l: 'Quit gyms within 6 months' }].map((s) => (
              <div key={s.l} className="stat-card">
                <div className="disp" style={{ fontSize: 32, fontWeight: 900, color: C.lime }}>{s.v}</div>
                <div style={{ fontSize: 12, color: C.muted, marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 18. BUSINESS MODEL ── */}
      <section id="pricing" style={sec({ background: C.paper })}>
        <div style={inner}>
          <div className="tag-lime">• BUSINESS MODEL</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>Multiple Revenue <span style={{ color: C.lime }}>Streams</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,250px),1fr))', gap: 20, marginBottom: 48 }}>
            {REVENUE_STREAMS.map((r) => (
              <div key={r.title} className="feat-card">
                <div style={{ width: 48, height: 48, background: C.limeGlow, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <r.icon style={{ width: 22, height: 22, color: C.lime }} />
                </div>
                <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{r.title}</div>
                <div className="mono" style={{ fontSize: 13, color: C.lime }}>{r.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ background: `linear-gradient(135deg,rgba(180,181,201,.08),rgba(180,181,201,.03))`, border: `1px solid rgba(180,181,201,.2)`, borderRadius: 20, padding: 'clamp(24px,4vw,40px)', boxSizing: 'border-box' }}>
            <div className="tag-lime">UNIT ECONOMICS</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,150px),1fr))', gap: 24 }}>
              {UNIT_METRICS.map((m) => (
                <div key={m.label} style={{ textAlign: 'center' }}>
                  <div className="disp" style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 900, color: C.lime }}>{m.value}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 6 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 19. ROADMAP ── */}
      <section style={sec()}>
        <div style={inner}>
          <div className="tag-lime">• PRODUCT ROADMAP</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,6vw,68px)', fontWeight: 900, marginBottom: 56 }}>Built &amp; <span style={{ color: C.lime }}>What's Next</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))', gap: 24 }}>
            {ROADMAP.map((phase) => (
              <div key={phase.status} style={{ background: C.paper, border: `1px solid ${C.line}`, borderTop: `3px solid ${phase.color}`, borderRadius: 20, padding: 'clamp(20px,4vw,32px)', boxSizing: 'border-box' }}>
                <div style={{ display: 'inline-block', background: `rgba(${phase.color === C.saffron ? '255,140,66' : phase.color === C.teal ? '78,205,196' : '180,181,201'},.12)`, color: phase.color, borderRadius: 9999, padding: '4px 14px', marginBottom: 20 }}>
                  <span className="mono" style={{ fontSize: 10 }}>{phase.status.toUpperCase()}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {phase.items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: phase.color, flexShrink: 0 }} />
                      <span style={{ fontSize: 15, fontWeight: 500 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── 21. VISION STATEMENT ── */}
      <section style={sec({ textAlign: 'center' })}>
        <div style={{ ...inner, padding: '0 24px', boxSizing: 'border-box' }}>
          <div className="tag-lime">• OUR VISION</div>
          <h2 className="disp" style={{ fontSize: 'clamp(36px,7vw,80px)', fontWeight: 900, marginBottom: 16, lineHeight: 0.95 }}>
            Building the Future<br />of <span style={{ color: C.lime }}>Fitness</span>
          </h2>
          <p style={{ fontSize: 16, color: C.muted, marginBottom: 56, lineHeight: 1.7 }}>Making world-class fitness accessible, affordable, intelligent, and personalized for every Indian.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 56 }}>
            {['Accessible', 'Affordable', 'Intelligent', 'Personalized'].map((v, i) => (
              <motion.div key={v} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 16, padding: '20px 32px' }}>
                <div className="disp" style={{ fontSize: 24, fontWeight: 900, color: C.lime }}>{v}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ background: `linear-gradient(135deg,rgba(180,181,201,.08),rgba(255,140,66,.05))`, border: `1px solid rgba(180,181,201,.2)`, borderRadius: 20, padding: 'clamp(24px,5vw,48px)', boxSizing: 'border-box', maxWidth: 700, margin: '0 auto' }}>
            <Brain style={{ width: 40, height: 40, color: C.lime, margin: '0 auto 16px' }} />
            <div className="disp" style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Predictive Healthcare Powered by AI</div>
            <div style={{ fontSize: 15, color: C.muted, lineHeight: 1.7 }}>
              We're building the intelligence layer for India's next billion-dollar health outcome improvement — catching problems before they happen, personalizing interventions before they're needed.
            </div>
          </div>
        </div>
      </section>

      {/* ── 22. FAQ ── */}
      <section style={sec({ background: C.paper })}>
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', boxSizing: 'border-box' }}>
          <div className="tag-lime">• FAQ</div>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, marginBottom: 48 }}>Common <span style={{ color: C.lime }}>Questions</span></h2>
          <div>
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.4, flex: 1 }}>{faq.q}</div>
                  <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown style={{ width: 20, height: 20, color: C.lime, flexShrink: 0 }} />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}>
                      <div style={{ paddingTop: 16, fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 23. FINAL CTA ── */}
      <section style={{ padding: 'clamp(64px,10vw,120px) 24px', textAlign: 'center', borderBottom: `1px solid ${C.line}`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, background: 'radial-gradient(circle,rgba(180,181,201,.06) 0%,transparent 70%)', pointerEvents: 'none', borderRadius: '50%' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 500, height: 500, background: 'radial-gradient(circle,rgba(255,140,66,.04) 0%,transparent 70%)', pointerEvents: 'none', borderRadius: '50%' }} />
        <div style={{ ...inner, padding: '0 24px', boxSizing: 'border-box', position: 'relative' }}>
          <div className="tag-lime">• GET STARTED</div>
          <h2 className="disp" style={{ fontSize: 'clamp(40px,9vw,96px)', lineHeight: 0.92, marginBottom: 24, fontWeight: 900 }}>
            Ready to Transform<br />Your <span style={{ color: C.lime }}>Fitness Journey?</span>
          </h2>
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: C.muted, marginBottom: 48, lineHeight: 1.7, maxWidth: 620, margin: '0 auto 48px' }}>
            Experience AI-powered coaching, nutrition, rewards, community, and athlete opportunities — all in one app built for India.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => onNavigate?.('signup')} className="btn-lime" style={{ fontSize: 13, padding: '18px 36px' }}>DOWNLOAD ON ANDROID <ChevronRight style={{ width: 15, height: 15 }} /></button>
            <button onClick={() => onNavigate?.('signup')} className="btn-saffron" style={{ fontSize: 13, padding: '18px 36px' }}>JOIN THE WAITLIST <ChevronRight style={{ width: 15, height: 15 }} /></button>
            <button onClick={() => onNavigate?.('gym-demo')} className="btn-ghost" style={{ fontSize: 13, padding: '18px 36px' }}>BECOME A PARTNER</button>
            <button onClick={() => onNavigate?.('home')} className="btn-ghost" style={{ fontSize: 13, padding: '18px 36px' }}>CONTACT US</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#050507', color: C.text, padding: 'clamp(48px,8vw,64px) 24px 32px', borderTop: `1px solid ${C.line}` }}>
        <div style={inner}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, marginBottom: 56 }}>
            <div style={{ flex: '2 1 260px', maxWidth: '100%', boxSizing: 'border-box' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <div style={{ width: 30, height: 30, background: C.lime, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Zap style={{ width: 15, height: 15, color: C.bg }} />
                </div>
                <div className="disp" style={{ fontSize: 18, fontWeight: 700 }}>Impossible AI</div>
              </div>
              <p style={{ fontSize: 14, color: C.muted, maxWidth: 320, lineHeight: 1.7, marginBottom: 24 }}>India's first AI Multi-Agent Fitness Platform. Built for Indian lifestyles, powered by world-class AI.</p>
              <div style={{ display: 'flex', gap: 12 }}>
                {[Instagram, Youtube, Twitter].map((Icon, i) => (
                  <a key={i} href="#" style={{ width: 36, height: 36, border: `1px solid ${C.lineBright}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.muted }}>
                    <Icon style={{ width: 15, height: 15 }} />
                  </a>
                ))}
              </div>
            </div>
            <div style={{ flex: '1 1 140px', maxWidth: '100%', boxSizing: 'border-box' }}>
              <div className="mono" style={{ fontSize: 11, marginBottom: 16, color: C.lime }}>PRODUCT</div>
              {['AI Coach', 'Nutrition AI', 'Rewards', 'Athletes', 'Community', 'Pricing'].map((l) => (
                <a key={l} href="#" style={{ display: 'block', fontSize: 13, color: C.muted, textDecoration: 'none', marginBottom: 10 }}>{l}</a>
              ))}
            </div>
            <div style={{ flex: '1 1 140px', maxWidth: '100%', boxSizing: 'border-box' }}>
              <div className="mono" style={{ fontSize: 11, marginBottom: 16, color: C.lime }}>COMPANY</div>
              {['About', 'Team', 'Careers', 'Blog', 'Contact'].map((l) => (
                <a key={l} href="#" style={{ display: 'block', fontSize: 13, color: C.muted, textDecoration: 'none', marginBottom: 10 }}>{l}</a>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${C.line}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }} className="mono">
            <span style={{ fontSize: 11, color: C.muted2 }}>© 2026 IMPOSSIBLE AI — MADE FOR INDIA 🇮🇳</span>
            <span style={{ fontSize: 11, color: C.muted2 }}>PRIVACY · TERMS · CONTACT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AdvancedLandingPage;
