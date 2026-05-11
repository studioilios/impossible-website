import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden font-sans">
      
      {/* Mesh Gradient / Glowing Orb Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/40 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-indigo-900/30 rounded-full mix-blend-screen filter blur-[100px] animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 w-full max-w-xl p-10 mx-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center flex flex-col items-center">
        
        <div className="mb-6 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping mr-2"></span>
          <span className="w-2 h-2 rounded-full bg-blue-400 absolute mr-2"></span>
          <span className="text-xs font-medium tracking-widest text-blue-200 uppercase">Under Construction</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 mb-6">
          HumaNovaMinds
        </h1>
        
        <p className="text-gray-300 text-lg mb-8 font-light leading-relaxed">
          We are currently crafting our digital headquarters. Something incredible is on the way.
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8"></div>

        <p className="text-gray-400 text-sm mb-6">
          In the meantime, explore our Evolution 1.0 ecosystem:
        </p>

        {/* Neon/Glass Action Button */}
        <Link href="/impossible-ai" className="w-full sm:w-auto">
          <button className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 font-semibold text-white transition-all duration-300 ease-in-out bg-white/5 border border-white/20 rounded-full hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(129,140,248,0.3)] hover:border-indigo-400/50 overflow-hidden">
            <span className="relative flex items-center gap-3">
              Enter Impossible AI
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </button>
        </Link>
        
      </div>
    </div>
  );
}