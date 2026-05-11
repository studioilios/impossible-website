import { Home, Search, MessageCircle, Trophy, Play } from 'lucide-react';
import { motion } from 'motion/react';

type CommunityNavScreen = 'feed' | 'search' | 'chat' | 'leaderboard' | 'reels';

interface CommunityBottomNavProps {
  active: CommunityNavScreen;
  onNavigate: (screen: CommunityNavScreen) => void;
}

export function CommunityBottomNav({ active, onNavigate }: CommunityBottomNavProps) {
  const navItems = [
    { id: 'feed' as const, icon: Home, label: 'Feed' },
    { id: 'search' as const, icon: Search, label: 'Search' },
    { id: 'chat' as const, icon: MessageCircle, label: 'Chat' },
    { id: 'leaderboard' as const, icon: Trophy, label: 'Leaderboard' },
    { id: 'reels' as const, icon: Play, label: 'Reels' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-3 z-40">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative flex flex-col items-center gap-1 transition-all"
            >
              <div className={`transition-all ${
                isActive ? 'scale-110' : 'scale-100'
              }`}>
                <Icon 
                  className={`w-6 h-6 transition-colors ${
                    isActive ? 'text-[#CCFF00]' : 'text-gray-500'
                  }`}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              {isActive && (
                <motion.div
                  layoutId="communityNavDot"
                  className="w-1 h-1 rounded-full bg-[#CCFF00] shadow-[0_0_6px_rgba(204,255,0,0.6)]"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}