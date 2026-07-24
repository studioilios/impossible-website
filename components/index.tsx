"use client"
import { useState } from 'react';
import { Home } from './fitness/Home';
import { Activity } from './fitness/Activity';
import { TrainingPlan } from './fitness/TrainingPlan';
import { Nutrition } from './fitness/Nutrition';
import { AICoach } from './fitness/AICoach';
import { Profile } from './fitness/Profile';
import { Coaches } from './fitness/Coaches';
import { CoachProfile } from './fitness/CoachProfile';
import { Gyms } from './fitness/Gyms';
import { GymsVideo } from './fitness/GymsVideo';
import { GymChannel } from './fitness/GymChannel';
import { GymDetail } from './fitness/GymDetail';
import { VideoPlayer } from './fitness/VideoPlayer';
import { YogaStudios } from './fitness/YogaStudios';
import { YogaStudioDetail } from './fitness/YogaStudioDetail';
import { PersonalCoachFlow } from './fitness/PersonalCoachFlow';
import { ActivityDetail } from './fitness/Profile';
import { Community } from './fitness/Community';
import { Planner } from './fitness/Planner';
import { HeyFlow } from './fitness/HeyFlow';
import { CommunityChat } from './fitness/CommunityChat';
import { BottomNav } from './fitness/BottomNav';
import { LandingPage } from './fitness/LandingPage';
import { AdvancedLandingPage } from './fitness/AdvancedLandingPage';

type Screen = 'home' | 'activity' | 'ai' | 'stats' | 'profile' | 'coaches' | 'coach-profile' | 'gyms' | 'gyms-video' | 'gym-channel' | 'gym-detail' | 'video-player' | 'yoga-studios' | 'yoga-studio-detail' | 'personal-coach-flow' | 'activity-detail' | 'community' | 'planner' | 'hey-flow' | 'community-chat' | 'landing';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('landing');
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleNavigate = (screen: Screen, data?: any) => {
    setActiveScreen(screen);
    setSelectedData(data);
  };

  const handleBack = () => {
    if (activeScreen === 'coach-profile') {
      setActiveScreen('coaches');
    } else if (activeScreen === 'gym-detail') {
      setActiveScreen('gyms');
    } else if (activeScreen === 'gym-channel') {
      setActiveScreen('gyms-video');
    } else if (activeScreen === 'video-player') {
      setActiveScreen('gyms-video');
    } else if (activeScreen === 'yoga-studio-detail') {
      setActiveScreen('yoga-studios');
    } else if (activeScreen === 'activity-detail') {
      setActiveScreen('profile');
    }
  };

  return (
    <div className={`min-h-screen bg-black text-white ${activeScreen === 'landing' ? '' : 'pb-20'}`}>
      {activeScreen === 'home' && <Home onNavigate={handleNavigate} />}
      {activeScreen === 'activity' && <Activity />}
      {activeScreen === 'ai' && <AICoach />}
      {activeScreen === 'stats' && <Nutrition />}
      {activeScreen === 'profile' && (
        <Profile 
          onNavigate={handleNavigate} 
          initialTab={selectedData?.tab || 'overview'} 
        />
      )}
      {activeScreen === 'coaches' && <Coaches onNavigate={(screen, data) => handleNavigate(screen as Screen, data)} />}
      {activeScreen === 'coach-profile' && <CoachProfile coach={selectedData} onBack={handleBack} />}
      {activeScreen === 'gyms' && <Gyms onNavigate={(screen, data) => handleNavigate(screen as Screen, data)} />}
      {activeScreen === 'gyms-video' && <GymsVideo onNavigate={(screen, data) => handleNavigate(screen as Screen, data)} />}
      {activeScreen === 'gym-channel' && <GymChannel gym={selectedData} onBack={handleBack} onNavigate={(screen, data) => handleNavigate(screen as Screen, data)} />}
      {activeScreen === 'gym-detail' && <GymDetail gym={selectedData} onBack={handleBack} />}
      {activeScreen === 'video-player' && <VideoPlayer video={selectedData} onBack={handleBack} onNavigate={(screen, data) => handleNavigate(screen as Screen, data)} />}
      {activeScreen === 'yoga-studios' && <YogaStudios onNavigate={(screen, data) => handleNavigate(screen as Screen, data)} />}
      {activeScreen === 'yoga-studio-detail' && <YogaStudioDetail studio={selectedData} onBack={handleBack} />}
      {activeScreen === 'personal-coach-flow' && <PersonalCoachFlow onBack={handleBack} />}
      {activeScreen === 'activity-detail' && <ActivityDetail activity={selectedData} onBack={handleBack} />}
      {activeScreen === 'community' && (
        <Community 
          onBack={() => setActiveScreen('home')} 
          onNavigate={handleNavigate}
        />
      )}
      {activeScreen === 'community-chat' && (
        <CommunityChat 
          club={selectedData} 
          onBack={() => setActiveScreen('community')} 
        />
      )}
      {activeScreen === 'planner' && <Planner onBack={() => setActiveScreen('profile')} />}
      {activeScreen === 'hey-flow' && <HeyFlow onBack={() => setActiveScreen('home')} onNavigate={handleNavigate} />}
      {activeScreen === 'landing' && <AdvancedLandingPage onNavigate={(screen, data) => handleNavigate(screen as Screen, data)} />}
      
      {/* Show main BottomNav only when NOT in Community section or Landing page */}
    {activeScreen !== 'community' && activeScreen !== 'community-chat' && activeScreen !== 'landing' && (
        <>
          {/* 1. The Gradual Blue Blur Effect */}
          <div 
            className="fixed bottom-0 left-0 right-0 h-40 z-40 pointer-events-none bg-blue-900/20 backdrop-blur-md"
            style={{
              WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
            }}
          />
          
          {/* 2. The Bottom Nav (Z-50 ensures it stays clickable above the blur) */}
          <div className="relative z-50">
            <BottomNav active={activeScreen as any} onNavigate={(screen) => handleNavigate(screen as Screen)} />
          </div>
        </>
      )}
    </div>
  );
}