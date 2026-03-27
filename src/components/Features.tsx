import { motion } from 'motion/react';
import { Activity, Filter, Calendar, Map } from 'lucide-react';

const features = [
  {
    icon: <Activity className="w-6 h-6 text-[#ef4444]" />,
    title: "Live Activity Levels",
    description: "See how busy a place is right now. No more showing up to an empty room or waiting in a 2-hour line."
  },
  {
    icon: <Filter className="w-6 h-6 text-[#06b6d4]" />,
    title: "Vibe & Price Filters",
    description: "Filter by music style, cover charge, drink prices, and crowd energy to find exactly what you're looking for."
  },
  {
    icon: <Calendar className="w-6 h-6 text-[#a855f7]" />,
    title: "Tonight's Events",
    description: "Discover guest DJs, themed nights, and special performances happening tonight or this weekend."
  },
  {
    icon: <Map className="w-6 h-6 text-[#fbbf24]" />,
    title: "Interactive Map",
    description: "Explore the city visually. See clusters of activity and find the best spots within walking distance."
  }
];

export default function Features() {
  return (
    <section id="how-it-works" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop guessing.<br/>Start <span className="text-gradient">WAID-ing.</span></h2>
          <p className="text-white/60 text-lg">
            WAID is the middleman between staying home and having a great night out. We give you the intel you need to make the right call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
