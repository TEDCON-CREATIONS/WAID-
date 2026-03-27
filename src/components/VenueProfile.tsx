import { motion } from 'motion/react';
import { Clock, Users, Music, DollarSign, MapPin, Share2, Heart } from 'lucide-react';

export default function VenueProfile() {
  return (
    <section className="py-24 bg-[#111111] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">See the vibe <br/><span className="text-gradient">before you arrive.</span></h2>
          <p className="text-white/60 text-lg">
            Venue pages give you the exact intel you need. No more outdated reviews or guessing games.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl overflow-hidden"
        >
          {/* Cover Image */}
          <div className="h-64 md:h-80 relative">
            <img 
              src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop" 
              alt="Venue Cover" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
            
            <div className="absolute top-4 right-4 flex gap-2">
              <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
                <Share2 size={18} />
              </button>
              <button className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors">
                <Heart size={18} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10 relative -mt-20 z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ef4444]/20 text-[#ef4444] text-xs font-bold mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
                  VERY BUSY RIGHT NOW
                </div>
                <h3 className="text-4xl font-bold mb-2">The Velvet Lounge</h3>
                <p className="text-white/60 flex items-center gap-2">
                  <MapPin size={16} /> 124 Nightlife District, NY • 0.8 mi away
                </p>
              </div>
              <button className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors">
                Get Directions
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="text-white/50 text-xs mb-2 flex items-center gap-2"><DollarSign size={14}/> Cover</div>
                <div className="text-xl font-bold">$20</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="text-white/50 text-xs mb-2 flex items-center gap-2"><Clock size={14}/> Line Wait</div>
                <div className="text-xl font-bold">15-20m</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="text-white/50 text-xs mb-2 flex items-center gap-2"><Music size={14}/> Music</div>
                <div className="text-xl font-bold">R&B / Hip-Hop</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                <div className="text-white/50 text-xs mb-2 flex items-center gap-2"><Users size={14}/> Capacity</div>
                <div className="text-xl font-bold">85% Full</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-lg font-bold mb-4">Tonight's Vibe</h4>
                <p className="text-white/70 leading-relaxed mb-6">
                  High energy crowd. Dress code is strictly enforced (no athletic wear). Great spot for dancing, but getting a drink at the main bar might take a few minutes right now.
                </p>
                
                <h4 className="text-lg font-bold mb-4">Events This Week</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                    <div>
                      <div className="font-bold text-sm">Throwback Thursday</div>
                      <div className="text-xs text-white/50">Tomorrow, 10 PM</div>
                    </div>
                    <div className="text-xs font-bold text-[#06b6d4]">No Cover</div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                    <div>
                      <div className="font-bold text-sm">Guest DJ: Metro</div>
                      <div className="text-xs text-white/50">Friday, 11 PM</div>
                    </div>
                    <div className="text-xs font-bold text-[#a855f7]">$30 Cover</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Drink Prices</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">Beer</span>
                      <span className="font-bold">$8 - $12</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-white/30" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">Mixed Drinks</span>
                      <span className="font-bold">$15 - $22</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-white/30" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/70">Bottle Service</span>
                      <span className="font-bold">From $350</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
