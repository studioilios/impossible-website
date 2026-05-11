"use client"
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDate: (date: Date, type: 'day' | 'week') => void;
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Generate workout activity data (1-4 intensity, 0 for no workout)
const generateWorkoutActivity = (year: number, month: number, day: number): number => {
  const seed = year * 10000 + month * 100 + day;
  const random = Math.sin(seed) * 10000;
  const value = Math.floor((random - Math.floor(random)) * 5);
  return value;
};

export function CalendarModal({ isOpen, onClose, onSelectDate }: CalendarModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [viewType, setViewType] = useState<'day' | 'week' | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    if (year < new Date().getFullYear() || (year === new Date().getFullYear() && month < new Date().getMonth())) {
      setCurrentDate(new Date(year, month + 1, 1));
    }
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(year, month, day);
    setSelectedDate(selected);
  };

  const handleViewDay = () => {
    if (selectedDate) {
      onSelectDate(selectedDate, 'day');
      setViewType('day');
    }
  };

  const handleViewWeek = () => {
    if (selectedDate) {
      onSelectDate(selectedDate, 'week');
      setViewType('week');
    }
  };

  const handleQuickFilter = (days: number) => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - days);
    setSelectedDate(startDate);
  };

  const getDaysArray = () => {
    const days: Array<{ day: number; isCurrentMonth: boolean; intensity: number }> = [];
    
    // Previous month days
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const intensity = generateWorkoutActivity(year, month - 1, day);
      days.push({ day, isCurrentMonth: false, intensity });
    }
    
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const intensity = generateWorkoutActivity(year, month, i);
      days.push({ day: i, isCurrentMonth: true, intensity });
    }
    
    // Next month days to complete the grid
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const intensity = generateWorkoutActivity(year, month + 1, i);
      days.push({ day: i, isCurrentMonth: false, intensity });
    }
    
    return days;
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return day === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear();
  };

  const getIntensityColor = (intensity: number) => {
    if (intensity === 0) return 'rgba(255,255,255,0.05)';
    if (intensity === 1) return 'rgba(204,255,0,0.2)';
    if (intensity === 2) return 'rgba(204,255,0,0.4)';
    if (intensity === 3) return 'rgba(204,255,0,0.6)';
    return 'rgba(204,255,0,0.8)';
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-white/10 rounded-t-[3rem] max-h-[85vh] overflow-y-auto"
          >
            <div className="p-6 pb-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black uppercase tracking-tight">Select Date</h2>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-6 bg-white/5 rounded-2xl p-4 border border-white/10">
                <button
                  onClick={goToPrevMonth}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all active:scale-90"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h3 className="text-lg font-black uppercase tracking-tight">
                  {months[month]} {year}
                </h3>
                <button
                  onClick={goToNextMonth}
                  disabled={year === new Date().getFullYear() && month === new Date().getMonth()}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-2 mb-3">
                {daysOfWeek.map((day) => (
                  <div key={day} className="text-center">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40">
                      {day.slice(0, 3)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calendar Grid with Heatmap */}
              <div className="grid grid-cols-7 gap-2 mb-6">
                {getDaysArray().map((dayInfo, index) => {
                  const { day, isCurrentMonth, intensity } = dayInfo;
                  const isTodayDate = isCurrentMonth && isToday(day);
                  const isSelectedDate = isCurrentMonth && isSelected(day);

                  return (
                    <button
                      key={index}
                      onClick={() => isCurrentMonth && handleDateClick(day)}
                      disabled={!isCurrentMonth}
                      className={`
                        relative aspect-square rounded-xl flex items-center justify-center text-sm font-black
                        transition-all
                        ${!isCurrentMonth ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer'}
                        ${isSelectedDate ? 'ring-2 ring-[#CCFF00] shadow-[0_0_16px_rgba(204,255,0,0.4)]' : ''}
                        ${isTodayDate && !isSelectedDate ? 'ring-1 ring-cyan-500' : ''}
                        hover:scale-110 active:scale-95
                      `}
                      style={{
                        backgroundColor: isCurrentMonth ? getIntensityColor(intensity) : 'rgba(255,255,255,0.03)'
                      }}
                    >
                      <span className={`${isSelectedDate ? 'text-[#CCFF00]' : ''}`}>{day}</span>
                      {intensity > 0 && isCurrentMonth && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#CCFF00]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Heatmap Legend */}
              <div className="flex items-center justify-center gap-2 mb-6 pb-6 border-b border-white/5">
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Less</span>
                {[0, 1, 2, 3, 4].map((intensity) => (
                  <div
                    key={intensity}
                    className="w-6 h-6 rounded-md"
                    style={{ backgroundColor: getIntensityColor(intensity) }}
                  />
                ))}
                <span className="text-[9px] font-black uppercase tracking-widest text-white/40">More</span>
              </div>

              {/* Selected Date Actions */}
              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3 mb-6"
                >
                  <p className="text-center text-sm font-black uppercase tracking-tight text-white/60 mb-4">
                    Selected: {months[selectedDate.getMonth()]} {selectedDate.getDate()}, {selectedDate.getFullYear()}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleViewDay}
                      className="px-6 py-4 bg-gradient-to-r from-[#CCFF00]/20 to-cyan-500/20 border border-[#CCFF00]/40 rounded-2xl hover:from-[#CCFF00]/30 hover:to-cyan-500/30 transition-all active:scale-95"
                    >
                      <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">View Day</span>
                    </button>
                    <button
                      onClick={handleViewWeek}
                      className="px-6 py-4 bg-gradient-to-r from-[#CCFF00]/20 to-cyan-500/20 border border-[#CCFF00]/40 rounded-2xl hover:from-[#CCFF00]/30 hover:to-cyan-500/30 transition-all active:scale-95"
                    >
                      <span className="text-xs font-black uppercase tracking-widest text-[#CCFF00]">View Week</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Quick Filters */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">Quick Filters</p>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleQuickFilter(7)}
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">Last 7 Days</span>
                  </button>
                  <button
                    onClick={() => handleQuickFilter(30)}
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">Last 30 Days</span>
                  </button>
                  <button
                    onClick={() => handleQuickFilter(180)}
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">Last 6 Months</span>
                  </button>
                  <button
                    onClick={() => handleQuickFilter(365)}
                    className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">Last Year</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
