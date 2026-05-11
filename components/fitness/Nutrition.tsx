"use client"
import { ArrowLeft, Plus, Bot, Apple, Coffee, Utensils, ShoppingBag, ExternalLink, CheckCircle, Clock, UtensilsCrossed } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const foodPlan = [
  { id: 'oats', name: 'OATS & FRUITS', kcal: 320, image: 'https://images.unsplash.com/photo-1551432512-7165c9992a13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYXRtZWFsJTIwYm93bCUyMGJlcnJpZXMlMjBmcnVpdHMlMjBoZWFsdGh5JTIwYnJlYWtmYXN0fGVufDF8fHx8MTc2OTg1OTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'chicken', name: 'GRILLED CHICKEN', kcal: 450, image: 'https://images.unsplash.com/photo-1761315600943-d8a5bb0c499f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGJyZWFzdCUyMHNhbGFkJTIwaGVhbHRoeSUyMGx1bmNofGVufDF8fHx8MTc2OTg1OTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'paneer', name: 'PANEER BOWL', kcal: 380, image: 'https://images.unsplash.com/photo-1727018953313-403d17215a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjBib3dsJTIwaW5kaWFuJTIwZm9vZCUyMHZlZ2V0YXJpYW4lMjBoZWFsdGh5fGVufDF8fHx8MTc2OTg1OTA0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  { id: 'thali', name: 'VEG THALI', kcal: 520, image: 'https://images.unsplash.com/photo-1680359873864-43e89bf248ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWclMjB0aGFsaSUyMGluZGlhbiUyMGZvb2QlMjBoZWFsdGh5JTIwdmVnZXRhcmlhbiUyMG1lYWx8ZW58MXx8fHwxNzY5ODU5MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
];

const meals = [
  {
    name: 'Breakfast',
    time: '8:00 AM',
    calories: 420,
    icon: Coffee,
    items: ['Oatmeal with berries', 'Scrambled eggs', 'Green tea'],
    logged: true,
    image: 'https://images.unsplash.com/photo-1708884867025-9a9b3ebb6b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG1lYWwlMjBudXRyaXRpb258ZW58MXx8fHwxNzY3NTk3NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Lunch',
    time: '1:00 PM',
    calories: 680,
    icon: Utensils,
    items: ['Grilled chicken breast', 'Brown rice', 'Steamed vegetables'],
    logged: false,
    image: 'https://images.unsplash.com/photo-1708884867025-9a9b3ebb6b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG1lYWwlMjBudXRyaXRpb258ZW58MXx8fHwxNzY3NTk3NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Dinner',
    time: '7:30 PM',
    calories: 740,
    icon: Apple,
    items: ['Salmon fillet', 'Quinoa', 'Mixed greens salad'],
    logged: false,
    image: 'https://images.unsplash.com/photo-1708884867025-9a9b3ebb6b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG1lYWwlMjBudXRyaXRpb258ZW58MXx8fHwxNzY3NTk3NTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
];

export function Nutrition() {
  const [selectedPlanItem, setSelectedPlanItem] = useState(foodPlan[0]);

  return (
    <div className="min-h-screen bg-black px-6 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl">AI Nutrition</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center">
          <Plus className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Daily Target */}
      <div className="bg-gradient-to-br from-[#CCFF00]/10 to-transparent border border-[#CCFF00]/20 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg">Today's Target</h2>
          <span className="text-sm text-gray-400">Jan 5, 2026</span>
        </div>
        
        <div className="mb-4">
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl text-[#CCFF00]">1,840</span>
            <span className="text-lg text-gray-500 mb-1">/ 2,200</span>
            <span className="text-sm text-gray-500 mb-1">kcal</span>
          </div>
          <div className="h-3 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#CCFF00] to-[#DFFF00] rounded-full" style={{ width: '84%' }}></div>
          </div>
        </div>

        <div className="text-sm text-gray-400 mb-4">360 kcal remaining</div>

        {/* Macro Split */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-xs text-gray-500 mb-1">Protein</div>
            <div className="text-xl text-[#CCFF00] mb-1">68g</div>
            <div className="text-xs text-gray-500">/ 120g</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-xs text-gray-500 mb-1">Carbs</div>
            <div className="text-xl text-[#DFFF00] mb-1">185g</div>
            <div className="text-xs text-gray-500">/ 220g</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3">
            <div className="text-xs text-gray-500 mb-1">Fats</div>
            <div className="text-xl text-[#FFFF00] mb-1">52g</div>
            <div className="text-xs text-gray-500">/ 70g</div>
          </div>
        </div>
      </div>

      {/* Today's Food Plan (New Section) */}
      <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 mb-6 overflow-hidden">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 flex items-center justify-center">
            <UtensilsCrossed className="w-4 h-4 text-[#CCFF00]" />
          </div>
          <h2 className="text-lg font-black tracking-tighter italic uppercase">Today's Food Plan</h2>
        </div>
        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-8 px-1">
          Eat Right. Order Instantly.
        </p>

        <div className="flex justify-between items-start mb-10 px-2 overflow-x-auto no-scrollbar gap-4">
          {foodPlan.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedPlanItem(item)}
              className="flex flex-col items-center gap-3 transition-all min-w-[70px]"
            >
              <div className={`relative w-16 h-16 rounded-full p-0.5 transition-all duration-300 ${
                selectedPlanItem.id === item.id 
                  ? 'bg-gradient-to-b from-[#CCFF00] to-transparent shadow-[0_0_20px_rgba(204,255,0,0.3)]' 
                  : 'bg-white/10'
              }`}>
                <div className="w-full h-full rounded-full overflow-hidden border border-black">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-all ${
                      selectedPlanItem.id === item.id ? 'opacity-100' : 'opacity-40'
                    }`}
                  />
                </div>
                {selectedPlanItem.id === item.id && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#CCFF00] border-2 border-black flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-black fill-current" />
                  </div>
                )}
              </div>
              <div className="text-center space-y-0.5">
                <p className={`text-[8px] font-black tracking-tighter transition-colors ${
                  selectedPlanItem.id === item.id ? 'text-[#CCFF00]' : 'text-white'
                }`}>
                  {item.name}
                </p>
                <p className="text-[8px] text-gray-600 font-bold uppercase tracking-widest">
                  {item.kcal} KCAL
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center justify-center py-4 rounded-2xl bg-[#CCFF00]/[0.03] border border-white/5 hover:border-[#CCFF00]/20 transition-all group relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-1">
              <ShoppingBag className="w-4 h-4 text-[#FF7D29] transition-transform group-hover:scale-110" />
              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#FF7D29]">Order on Swiggy</span>
            </div>
            <span className="text-[7px] text-gray-600 font-bold uppercase tracking-widest">For {selectedPlanItem.name}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7D29]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center justify-center py-4 rounded-2xl bg-[#E23744]/[0.03] border border-white/5 hover:border-[#E23744]/20 transition-all group relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-1">
              <ExternalLink className="w-4 h-4 text-[#E23744] transition-transform group-hover:scale-110" />
              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#E23744]">Order on Zomato</span>
            </div>
            <span className="text-[7px] text-gray-600 font-bold uppercase tracking-widest">For {selectedPlanItem.name}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#E23744]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>

        <p className="text-[8px] text-gray-700 font-bold uppercase tracking-[0.2em] text-center italic">
          Food suggestions based on your fitness goals
        </p>
      </div>

      {/* AI Recommendation */}
      <div className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6 flex items-start gap-3">
        <Bot className="w-5 h-5 text-[#CCFF00] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-gray-300 mb-1">
            Your workout intensity is high today. Consider adding a protein-rich snack post-training.
          </p>
          <p className="text-xs text-gray-500">Adapted to your training plan</p>
        </div>
      </div>

      {/* Meals */}
      <div>
        <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Today's Meals</h3>
        <div className="space-y-4">
          {meals.map((meal, index) => {
            const Icon = meal.icon;
            return (
              <div key={index} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                {/* Meal Image */}
                <div className="relative h-32 bg-gradient-to-br from-white/10 to-white/5">
                  <ImageWithFallback
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute top-3 right-3">
                    {meal.logged ? (
                      <div className="w-6 h-6 rounded-full bg-[#CCFF00] flex items-center justify-center">
                        <span className="text-black text-xs">✓</span>
                      </div>
                    ) : (
                      <button className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center">
                        <Plus className="w-4 h-4 text-[#CCFF00]" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Meal Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#CCFF00]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#CCFF00]" />
                      </div>
                      <div>
                        <h4 className="mb-1">{meal.name}</h4>
                        <p className="text-xs text-gray-500">{meal.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg text-[#CCFF00]">{meal.calories}</div>
                      <div className="text-xs text-gray-500">kcal</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {meal.items.map((item, idx) => (
                      <div key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#CCFF00]"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
