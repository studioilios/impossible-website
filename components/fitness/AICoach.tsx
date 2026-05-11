"use client"
import { ArrowLeft, Send, Bot, Mic } from 'lucide-react';
import { useState } from 'react';

const initialMessages = [
  {
    from: 'ai',
    text: 'Good morning, Alex! Your body handled yesterday well. Ready for today\'s upper body strength session?',
    time: '9:24 AM'
  },
  {
    from: 'user',
    text: 'Yes! How should I warm up?',
    time: '9:25 AM'
  },
  {
    from: 'ai',
    text: 'Start with 5 minutes of light cardio, then dynamic stretches for shoulders and chest. I\'ll guide you through each exercise with proper form cues.',
    time: '9:25 AM'
  },
];

export function AICoach() {
  const [messages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl">AI Coach</h1>
              <p className="text-xs text-gray-500">Always here to help</p>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center">
            <Bot className="w-5 h-5 text-black" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>2,180 conversations</span>
          <span>•</span>
          <span className="text-[#CCFF00]">GPT-6 Powered</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-24">
        <div className="space-y-4 max-w-2xl mx-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.from === 'user' ? 'order-2' : ''}`}>
                {message.from === 'ai' && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#CCFF00] flex items-center justify-center">
                      <Bot className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-xs text-gray-500">AI Coach</span>
                  </div>
                )}
                <div
                  className={`rounded-2xl p-4 ${
                    message.from === 'user'
                      ? 'bg-[#CCFF00] text-black'
                      : 'bg-white/5 border border-white/10'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <div className={`text-xs text-gray-600 mt-1 ${message.from === 'user' ? 'text-right' : ''}`}>
                  {message.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Suggested Responses */}
        <div className="mt-6 max-w-2xl mx-auto">
          <p className="text-xs text-gray-500 mb-3">Suggested</p>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors">
              Show today's plan
            </button>
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors">
              Adjust calories
            </button>
            <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 transition-colors">
              Recovery tips
            </button>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-20 left-0 right-0 px-6 py-4 bg-black/90 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
            <Mic className="w-5 h-5 text-gray-400" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything about fitness, diet, recovery..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-[#CCFF00]/50 transition-colors"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-[#CCFF00] flex items-center justify-center flex-shrink-0">
            <Send className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
    </div>
  );
}
