import { motion } from 'motion/react';
import { ArrowRight, MapPin, Users, Music } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow rounded-full pointer-events-none opacity-50 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-medium text-[#06b6d4] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
            Live in New York, Miami, & LA
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          >
            Know where the <br />
            <span className="text-gradient">night is happening.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/60 mb-8 max-w-lg"
          >
            Stop guessing. Start WAID-ing. See live crowd levels, cover charges, and tonight's best events before you even leave the house.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative flex-1 max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#a855f7] transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 px-6 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-colors flex items-center gap-2">
                Join Waitlist <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-sm text-white/40"
          >
            <div className="flex items-center gap-2"><Users size={16} /> Live Crowd Data</div>
            <div className="flex items-center gap-2"><MapPin size={16} /> Map Discovery</div>
            <div className="flex items-center gap-2"><Music size={16} /> DJ & Event Info</div>
          </motion.div>
        </div>
        
        {/* App Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-[320px] lg:max-w-[380px]"
        >
          <div className="relative rounded-[40px] border-8 border-[#111111] bg-[#050505] overflow-hidden shadow-2xl shadow-[#a855f7]/20 aspect-[9/19]">
            {/* Mockup Header */}
            <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black/80 to-transparent z-10 flex flex-col justify-end px-6 pb-4">
              <div className="flex justify-between items-center text-white">
                <span className="font-display font-bold text-lg">Tonight</span>
                <div className="flex gap-2">
                  <span className="glass-panel px-2 py-1 rounded-md text-[10px] font-medium">NY</span>
                </div>
              </div>
            </div>
            
            {/* Mockup Map Background */}
            <div className="absolute inset-0 bg-[#111] opacity-50" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Mockup Markers */}
            <div className="absolute top-1/3 left-1/4">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-[#ef4444] animate-ping absolute inset-0 opacity-75"></div>
                <div className="w-4 h-4 rounded-full bg-[#ef4444] relative z-10 border-2 border-black"></div>
              </div>
            </div>
            <div className="absolute top-1/2 right-1/3">
              <div className="w-3 h-3 rounded-full bg-[#06b6d4] relative z-10 border-2 border-black"></div>
            </div>
            
            {/* Mockup Bottom Card */}
            <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-2xl p-4 z-10">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-white text-sm">Neon Room</h3>
                  <p className="text-white/50 text-[10px]">Electronic • 0.8 mi</p>
                </div>
                <span className="bg-[#ef4444]/20 text-[#ef4444] text-[10px] font-bold px-2 py-1 rounded-full">VERY BUSY</span>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="flex-1 bg-white/5 rounded-lg p-2 text-center">
                  <div className="text-[10px] text-white/50">Cover</div>
                  <div className="text-xs font-bold text-white">$20</div>
                </div>
                <div className="flex-1 bg-white/5 rounded-lg p-2 text-center">
                  <div className="text-[10px] text-white/50">Line</div>
                  <div className="text-xs font-bold text-white">15m</div>
                </div>
              </div>
              <button className="w-full mt-3 bg-[#a855f7] text-white text-xs font-bold py-2 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
