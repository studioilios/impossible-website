"use client"
import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  Circle,
  Clock,
  Activity,
  Bike,
  Waves,
  Footprints,
  Dumbbell,
  Apple,
  MessageSquare,
  Sparkles,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ViewMode = 'day' | 'week' | 'month';

interface PlanItem {
  id: string;
  type: 'Run' | 'Gym' | 'Yoga' | 'Rest' | 'Diet' | 'Custom';
  title: string;
  time?: string;
  notes?: string;
  completed: boolean;
  date: Date;
}

const INITIAL_PLANS: PlanItem[] = [
  {
    id: '1',
    type: 'Run',
    title: 'Morning Central Park Run',
    time: '07:30 AM',
    notes: '5 km tempo run',
    completed: true,
    date: new Date()
  },
  {
    id: '2',
    type: 'Gym',
    title: 'Strength Training',
    time: '05:00 PM',
    notes: 'Leg day focus',
    completed: false,
    date: new Date()
  },
  {
    id: '3',
    type: 'Diet',
    title: '3L Water Intake',
    completed: false,
    date: new Date()
  }
];

interface PlannerProps {
  onBack: () => void;
}

export function Planner({ onBack }: PlannerProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('day');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [plans, setPlans] = useState<PlanItem[]>(INITIAL_PLANS);
  const [isAddSheetOpen, setIsAddSheetOpen] = useState(false);

  const toggleComplete = (id: string) => {
    setPlans(prev => prev.map(p => p.id === id ? { ...p, completed: !p.completed } : p));
  };

  const currentPlans = plans.filter(p => p.date.toDateString() === selectedDate.toDateString());

  return (
    <div className="min-h-screen bg-black text-white pb-32">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 sticky top-0 bg-black/90 backdrop-blur-xl z-50">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-black italic uppercase tracking-tight">Your Plan</h1>
              <p className="text-[10px] text-[#CCFF00] font-bold uppercase tracking-widest">Plan your movement. Stay consistent.</p>
            </div>
          </div>
          <button 
            onClick={() => setIsAddSheetOpen(true)}
            className="w-10 h-10 rounded-xl bg-[#CCFF00] flex items-center justify-center text-black shadow-[0_4px_15px_rgba(204,255,0,0.2)] active:scale-90 transition-all"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-8 mb-6 relative border-b border-white/5">
          {(['day', 'week', 'month'] as ViewMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className="relative pb-4 flex items-center transition-all"
            >
              <span className={`text-sm font-black uppercase tracking-widest transition-colors ${
                viewMode === mode ? 'text-white' : 'text-white/30'
              }`}>
                {mode}
              </span>
              {viewMode === mode && (
                <motion.div
                  layoutId="plannerTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#CCFF00] rounded-t-full"
                />
              )}
            </button>
          ))}
        </div>
      </header>

      <main className="px-6">
        <AnimatePresence mode="wait">
          {viewMode === 'day' ? (
            <motion.div
              key="day-view"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
            >
              <DayView 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate}
                plans={currentPlans}
                onToggleComplete={toggleComplete}
              />
            </motion.div>
          ) : viewMode === 'week' ? (
            <motion.div
              key="week-view"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <WeekView 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate}
                plans={plans}
              />
            </motion.div>
          ) : viewMode === 'month' ? (
            <motion.div
              key="month-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
            >
              <MonthView 
                selectedDate={selectedDate} 
                setSelectedDate={setSelectedDate}
                plans={plans}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* AI Suggestion */}
        <div className="mt-12 bg-cyan-500/5 border border-cyan-500/20 rounded-[2rem] p-6 flex gap-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="flex-1">
            <h4 className="font-black italic uppercase tracking-tight text-cyan-400 mb-1 text-sm">Smart Suggestion</h4>
            <p className="text-[10px] text-white/60 leading-relaxed font-bold uppercase tracking-wide mb-3">
              You usually run on Mondays. Should I add a 5 km morning session to your tomorrow's plan?
            </p>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-[8px] font-black uppercase tracking-widest text-cyan-400">Yes, Add It</button>
              <button className="px-4 py-2 bg-white/5 rounded-xl text-[8px] font-black uppercase tracking-widest text-white/40">Not Now</button>
            </div>
          </div>
        </div>
      </main>

      {/* Add Plan Bottom Sheet */}
      <AnimatePresence>
        {isAddSheetOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddSheetOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A] border-t border-white/10 rounded-t-[3rem] p-8 z-[70]"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-black italic uppercase tracking-tight">New Activity</h2>
                <button onClick={() => setIsAddSheetOpen(false)} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">Activity Type</label>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {['Run', 'Gym', 'Yoga', 'Rest', 'Diet', 'Custom'].map(type => (
                      <button key={type} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest whitespace-nowrap hover:border-[#CCFF00]/30 hover:bg-[#CCFF00]/5 transition-all">
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">Plan Title</label>
                  <input 
                    type="text" 
                    placeholder="e.g., Evening Yoga Flow"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#CCFF00]/30 transition-all placeholder:text-white/20 font-bold"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">Time</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 flex items-center gap-3">
                      <Clock className="w-4 h-4 text-white/20" />
                      <span className="text-sm font-bold text-white/40">08:00 AM</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <label className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 mb-3 block ml-1">Date</label>
                    <div className="bg-white/5 border border-white/10 rounded-2xl py-4 px-6 flex items-center gap-3">
                      <CalendarIcon className="w-4 h-4 text-white/20" />
                      <span className="text-sm font-bold text-white/40">Today</span>
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 bg-[#CCFF00] text-black rounded-[1.5rem] font-black italic uppercase tracking-widest shadow-[0_10px_30px_rgba(204,255,0,0.2)] mt-4">
                  Save Plan
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function DayView({ selectedDate, setSelectedDate, plans, onToggleComplete }: any) {
  // Generate a week strip around the selected date
  const weekStrip = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(selectedDate);
    d.setDate(d.getDate() - d.getDay() + i);
    return d;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'Run': return <Footprints className="w-4 h-4" />;
      case 'Gym': return <Dumbbell className="w-4 h-4" />;
      case 'Yoga': return <Activity className="w-4 h-4" />;
      case 'Diet': return <Apple className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-10">
      {/* Date Selector Strip */}
      <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-3xl p-2">
        {weekStrip.map((date, i) => {
          const isSelected = date.toDateString() === selectedDate.toDateString();
          const isToday = date.toDateString() === new Date().toDateString();
          
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(date)}
              className={`flex-1 flex flex-col items-center py-3 rounded-2xl transition-all ${
                isSelected ? 'bg-[#CCFF00] text-black scale-105 shadow-lg' : 'hover:bg-white/5'
              }`}
            >
              <span className={`text-[8px] font-black uppercase tracking-widest mb-1 ${
                isSelected ? 'text-black/60' : 'text-white/20'
              }`}>
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="text-sm font-black italic">
                {date.getDate()}
              </span>
              {isToday && !isSelected && (
                <div className="w-1 h-1 rounded-full bg-[#CCFF00] mt-1" />
              )}
            </button>
          );
        })}
      </div>

      {/* To-Do List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-black uppercase tracking-widest text-white/40">Activities for {selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</h2>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#CCFF00]">{plans.filter((p:any) => p.completed).length}/{plans.length} Done</span>
        </div>

        {plans.length > 0 ? (
          <div className="space-y-4">
            {plans.map((plan: PlanItem) => (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`p-6 rounded-[2rem] border transition-all flex items-center gap-5 ${
                  plan.completed 
                    ? 'bg-white/[0.02] border-white/5 opacity-50' 
                    : 'bg-[#111] border-white/10 hover:border-[#CCFF00]/20'
                }`}
              >
                <button 
                  onClick={() => onToggleComplete(plan.id)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    plan.completed ? 'bg-[#CCFF00]' : 'border-2 border-white/20'
                  }`}
                >
                  {plan.completed && <CheckCircle2 className="w-4 h-4 text-black" />}
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-white/20">{getIcon(plan.type)}</span>
                    <h3 className={`text-sm font-black italic uppercase tracking-tight ${plan.completed ? 'line-through' : ''}`}>{plan.title}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    {plan.time && (
                      <div className="flex items-center gap-1.5 text-white/30">
                        <Clock className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase">{plan.time}</span>
                      </div>
                    )}
                    {plan.notes && (
                      <span className="text-[9px] text-white/30 font-bold uppercase tracking-wide">/ {plan.notes}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-[#111] rounded-[2rem] p-12 text-center border border-white/5">
            <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Plus className="w-8 h-8 text-white/10" />
            </div>
            <p className="text-xs font-black uppercase tracking-widest text-white/20 italic">No plans for today yet</p>
          </div>
        )}
      </div>
    </div>
  );
}

function WeekView({ plans }: any) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="space-y-4">
      {days.map((day, i) => {
        const dayPlans = plans.filter((p: any) => p.date.getDay() === (i + 1) % 7);
        const isToday = new Date().getDay() === (i + 1) % 7;
        
        return (
          <div 
            key={day}
            className={`bg-[#111] rounded-[2rem] border transition-all p-6 ${
              isToday ? 'border-[#CCFF00]/30 shadow-[0_4px_20px_rgba(204,255,0,0.05)]' : 'border-white/5'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className={`text-sm font-black italic uppercase tracking-tight ${isToday ? 'text-[#CCFF00]' : ''}`}>{day}</span>
                {isToday && <span className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 bg-[#CCFF00]/10 text-[#CCFF00] rounded">Today</span>}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{dayPlans.length} Tasks</span>
            </div>
            
            {dayPlans.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {dayPlans.map((p: any) => (
                  <div key={p.id} className="px-3 py-1.5 bg-white/5 rounded-xl border border-white/5 flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${p.completed ? 'bg-[#CCFF00]' : 'bg-white/20'}`} />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40">{p.type}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-white/10 italic">
                <span>Rest day or unplanned</span>
                <Plus className="w-3 h-3" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function MonthView({ selectedDate, setSelectedDate, plans }: any) {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth();
  
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const calendarDays = Array.from({ length: 42 }, (_, i) => {
    const day = i - firstDay + 1;
    if (day > 0 && day <= daysInMonth) {
      return new Date(year, month, day);
    }
    return null;
  });

  return (
    <div className="bg-[#111] rounded-[3rem] border border-white/5 p-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-base font-black italic uppercase tracking-tight">
          {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h3>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><ChevronLeft className="w-4 h-4" /></button>
          <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><ChevronRight className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-6 mb-4">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
          <div key={d} className="text-center text-[10px] font-black uppercase tracking-widest text-white/20">{d}</div>
        ))}
        {calendarDays.map((date, i) => {
          if (!date) return <div key={i} />;
          
          const isSelected = date.toDateString() === selectedDate.toDateString();
          const isToday = date.toDateString() === new Date().toDateString();
          const dayPlans = plans.filter((p: any) => p.date.toDateString() === date.toDateString());
          
          return (
            <button
              key={i}
              onClick={() => setSelectedDate(date)}
              className="relative group flex flex-col items-center gap-1"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black transition-all ${
                isSelected ? 'bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/20' :
                isToday ? 'border border-[#CCFF00]/40 text-[#CCFF00]' :
                'hover:bg-white/5 text-white/60'
              }`}>
                {date.getDate()}
              </div>
              <div className="flex gap-0.5">
                {dayPlans.slice(0, 3).map((p: any) => (
                  <div key={p.id} className={`w-1 h-1 rounded-full ${p.completed ? 'bg-[#CCFF00]' : 'bg-white/20'}`} />
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}