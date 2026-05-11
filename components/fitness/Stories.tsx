"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Story {
  id: string;
  username: string;
  avatar: string;
  contentUrl: string;
  time: string;
  viewed: boolean;
}

const MOCK_STORIES: Story[] = [
  {
    id: '1',
    username: 'Sarah J.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    contentUrl: 'https://images.unsplash.com/photo-1758274531664-6f340855f3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMG5hdHVyZSUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MTQxNTg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '2h',
    viewed: false,
  },
  {
    id: '2',
    username: 'Mike Iron',
    avatar: 'https://i.pravatar.cc/150?u=mike',
    contentUrl: 'https://images.unsplash.com/photo-1585484764802-387ea30e8432?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBhZXN0aGV0aWNzJTIwd2VpZ2h0cyUyMGhlYXZ5JTIwbGlmdGluZ3xlbnwxfHx8fDE3NzE0MTU4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '4h',
    viewed: false,
  },
  {
    id: '3',
    username: 'Elena Yoga',
    avatar: 'https://i.pravatar.cc/150?u=elena',
    contentUrl: 'https://images.unsplash.com/photo-1662386392754-c0fe8e9dc7af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcGVyc29uJTIwd29ya291dCUyMGhlYWx0aHklMjBmb29kJTIwZ3ltJTIwbGlmZXxlbnwxfHx8fDE3NzE0MTU4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '5h',
    viewed: true,
  },
  {
    id: '4',
    username: 'RunMaster',
    avatar: 'https://i.pravatar.cc/150?u=runner',
    contentUrl: 'https://images.unsplash.com/photo-1712634047253-e292abdff553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwbW9ybmluZyUyMHN1bnNoaW5lJTIwY2l0eSUyMHJvYWR8ZW58MXx8fHwxNzcxNDE1ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '12h',
    viewed: false,
  },
  {
    id: '5',
    username: 'Chef Fit',
    avatar: 'https://i.pravatar.cc/150?u=chef',
    contentUrl: 'https://images.unsplash.com/photo-1661257711676-79a0fc533569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByb3RlaW4lMjBib3dsJTIwY29sb3JmdWwlMjBmb29kfGVufDF8fHx8MTc3MTQxNTg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '1d',
    viewed: false,
  },
  {
    id: '6',
    username: 'Coach K',
    avatar: 'https://i.pravatar.cc/150?u=coach',
    contentUrl: 'https://images.unsplash.com/photo-1678356717973-f2177782388a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwcmVzdGluZyUyMGRyaW5raW5nJTIwd2F0ZXIlMjBzd2VhdHxlbnwxfHx8fDE3NzE0MTU4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    time: '1d',
    viewed: true,
  },
];

export function Stories() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [viewedStories, setViewedStories] = useState<Set<string>>(
    new Set(MOCK_STORIES.filter((s) => s.viewed).map((s) => s.id))
  );

  const handleOpenStory = (story: Story) => {
    setSelectedStory(story);
    setViewedStories((prev) => new Set([...Array.from(prev), story.id]));
  };

  const handleCloseStory = () => {
    setSelectedStory(null);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500">Community Stories</h3>
        <span className="text-xs text-[#CCFF00]">See All</span>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
        {/* Your Story */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer">
          <div className="relative w-[72px] h-[72px]">
            <div className="absolute inset-0 rounded-full border-[3px] border-gray-800 flex items-center justify-center p-0.5">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <ImageWithFallback
                  src="https://i.pravatar.cc/150?u=me"
                  alt="Your Story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#CCFF00] rounded-full flex items-center justify-center border-2 border-black">
              <Plus className="w-4 h-4 text-black" strokeWidth={3} />
            </div>
          </div>
          <span className="text-[10px] text-gray-400 font-medium">Your Story</span>
        </div>

        {/* Other Stories */}
        {MOCK_STORIES.map((story) => (
          <div
            key={story.id}
            onClick={() => handleOpenStory(story)}
            className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer"
          >
            <div className="relative w-[72px] h-[72px]">
              <div
                className={`absolute inset-0 rounded-full border-[3px] transition-colors duration-500 flex items-center justify-center p-0.5 ${
                  viewedStories.has(story.id)
                    ? 'border-gray-700'
                    : 'border-transparent bg-gradient-to-tr from-pink-500 via-orange-500 to-yellow-500'
                }`}
              >
                {!viewedStories.has(story.id) && (
                  <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-pulse blur-sm" />
                )}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
                  <ImageWithFallback
                    src={story.avatar}
                    alt={story.username}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </div>
            <span className="text-[10px] text-gray-400 font-medium truncate w-[72px] text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>

      {/* Story Viewer Overlay */}
      <AnimatePresence>
        {selectedStory && (
          <StoryViewer
            story={selectedStory}
            onClose={handleCloseStory}
            stories={MOCK_STORIES}
            onStoryChange={setSelectedStory}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
  stories: Story[];
  onStoryChange: (story: Story) => void;
}

function StoryViewer({ story, onClose, stories, onStoryChange }: StoryViewerProps) {
  const currentIndex = stories.findIndex((s) => s.id === story.id);

  const nextStory = () => {
    if (currentIndex < stories.length - 1) {
      onStoryChange(stories[currentIndex + 1]);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (currentIndex > 0) {
      onStoryChange(stories[currentIndex - 1]);
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0, y: 100 }}
      className="fixed inset-0 z-[1000] bg-black flex flex-col"
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 px-4 pt-12">
        {/* Progress Bars */}
        <div className="flex gap-1 mb-4">
          {stories.map((s, i) => (
            <div key={s.id} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  i < currentIndex ? 'w-full' : i === currentIndex ? 'w-1/2' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <ImageWithFallback src={story.avatar} alt={story.username} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{story.username}</p>
              <p className="text-[10px] text-white/60">{story.time}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white">
              <MoreHorizontal className="w-5 h-5" />
            </button>
            <button onClick={onClose} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={story.contentUrl}
          alt="Story content"
          className="w-full h-full object-cover"
        />

        {/* Interaction Areas */}
        <div className="absolute inset-0 flex">
          <div className="w-1/3 h-full" onClick={prevStory} />
          <div className="w-1/3 h-full" onContextMenu={(e) => e.preventDefault()} />
          <div className="w-1/3 h-full" onClick={nextStory} />
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 py-8 flex items-center gap-6 bg-gradient-to-t from-black via-black/40 to-transparent">
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-full px-4 py-3 border border-white/10">
          <p className="text-xs text-white/50">Send message...</p>
        </div>
        <button className="text-white flex flex-col items-center gap-1">
          <Heart className="w-6 h-6" />
          <span className="text-[10px] font-medium">124</span>
        </button>
        <button className="text-white flex flex-col items-center gap-1">
          <MessageCircle className="w-6 h-6" />
          <span className="text-[10px] font-medium">8</span>
        </button>
        <button className="text-white flex flex-col items-center gap-1">
          <Share2 className="w-6 h-6" />
          <span className="text-[10px] font-medium">Share</span>
        </button>
      </div>
    </motion.div>
  );
}
