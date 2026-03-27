import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Star, Users } from 'lucide-react';

export default function Partners() {
  return (
    <section id="venues" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Own a venue?<br/><span className="text-gradient">Pack the house.</span></h2>
            <p className="text-white/60 text-lg mb-8">
              Partner with WAID to promote your events, spotlight special nights, and get premium placement when users are deciding where to go.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <TrendingUp size={18} className="text-[#06b6d4]" />
                </div>
                <div>
                  <h4 className="font-bold">Drive Foot Traffic</h4>
                  <p className="text-white/50 text-sm">Reach users who are actively looking for a place to go right now.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Star size={18} className="text-[#fbbf24]" />
                </div>
                <div>
                  <h4 className="font-bold">Featured Placement</h4>
                  <p className="text-white/50 text-sm">Stand out on the map and event feeds with premium listings.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <Users size={18} className="text-[#a855f7]" />
                </div>
                <div>
                  <h4 className="font-bold">Audience Insights</h4>
                  <p className="text-white/50 text-sm">Understand your crowd and optimize your marketing spend.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-white/50 mb-1 uppercase tracking-wider">First Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06b6d4] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/50 mb-1 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06b6d4] transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-white/50 mb-1 uppercase tracking-wider">Venue Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06b6d4] transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-white/50 mb-1 uppercase tracking-wider">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#06b6d4] transition-colors" />
              </div>
              <button type="button" className="w-full py-4 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#06b6d4] text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4">
                Submit Inquiry <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
