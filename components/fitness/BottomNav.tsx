import { Home, Activity, Bot, BarChart3, User } from 'lucide-react';

interface BottomNavProps {
  active: 'home' | 'activity' | 'ai' | 'stats' | 'profile' | 'hey-flow';
  onNavigate: (screen: 'home' | 'activity' | 'ai' | 'stats' | 'profile' | 'hey-flow') => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'home' as const, icon: Home, label: 'Home' },
    { id: 'activity' as const, icon: Activity, label: 'Activity' },
    { id: 'hey-flow' as const, icon: Bot, label: 'Flow Track' },
    { id: 'stats' as const, icon: BarChart3, label: 'Stats' },
    { id: 'profile' as const, icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-3 z-40">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-[#CCFF00]' : 'text-gray-500'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}