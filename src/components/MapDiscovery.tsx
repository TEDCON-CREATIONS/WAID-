import { motion } from 'motion/react';
import { MapPin, Navigation } from 'lucide-react';

export default function MapDiscovery() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-glow rounded-full pointer-events-none opacity-30 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Map the city.<br/><span className="text-gradient">Catch the energy.</span></h2>
            <p className="text-white/60 text-lg mb-8">
              Our interactive map shows you exactly where the crowds are heading. Glowing markers indicate live activity levels, so you can find the hottest spots within walking distance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#ef4444]/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444] animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Very Busy</h4>
                  <p className="text-white/50 text-sm">The place is packed. Expect a line and high energy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#fbbf24]/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#fbbf24]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Moderate</h4>
                  <p className="text-white/50 text-sm">Good crowd, easy to get a drink, comfortable vibe.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#06b6d4]/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#06b6d4]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Quiet</h4>
                  <p className="text-white/50 text-sm">Chill atmosphere, perfect for conversations.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 relative bg-[#111]">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              {/* Map UI Elements */}
              <div className="absolute top-4 left-4 right-4 flex gap-2">
                <div className="glass-panel px-4 py-2 rounded-full text-sm font-medium flex-1 flex items-center gap-2">
                  <MapPin size={16} className="text-[#06b6d4]" /> Search area...
                </div>
                <div className="glass-panel w-10 h-10 rounded-full flex items-center justify-center">
                  <Navigation size={16} className="text-white" />
                </div>
              </div>
              
              {/* Map Markers */}
              <div className="absolute top-1/3 left-1/4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#ef4444]/20 flex items-center justify-center animate-pulse absolute -inset-2"></div>
                <div className="w-8 h-8 rounded-full bg-[#ef4444] border-2 border-[#111] relative z-10 shadow-lg shadow-[#ef4444]/50 flex items-center justify-center text-xs font-bold">1</div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 glass-panel rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                  <h4 className="font-bold text-sm">Neon Room</h4>
                  <p className="text-xs text-white/60 mb-2">Electronic • 0.8 mi</p>
                  <div className="text-xs font-bold text-[#ef4444]">VERY BUSY</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-1/3 group cursor-pointer">
                <div className="w-6 h-6 rounded-full bg-[#fbbf24] border-2 border-[#111] relative z-10 shadow-lg shadow-[#fbbf24]/50 flex items-center justify-center text-[10px] font-bold">2</div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/2 group cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-[#06b6d4] border-2 border-[#111] relative z-10 shadow-lg shadow-[#06b6d4]/50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
