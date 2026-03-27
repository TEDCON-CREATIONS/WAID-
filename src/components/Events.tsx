import { motion } from 'motion/react';
import { ArrowRight, Calendar as CalendarIcon } from 'lucide-react';

const events = [
  {
    title: "House Night w/ DJ Kaskade",
    venue: "Neon Room",
    date: "Tonight, 10 PM",
    price: "$20 Cover",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop",
    tag: "Featured"
  },
  {
    title: "R&B Throwbacks",
    venue: "The Velvet Lounge",
    date: "Tomorrow, 9 PM",
    price: "No Cover",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1000&auto=format&fit=crop",
    tag: "Popular"
  },
  {
    title: "Underground Techno",
    venue: "Basement 45",
    date: "Friday, 11 PM",
    price: "$15 Cover",
    image: "https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?q=80&w=1000&auto=format&fit=crop",
    tag: "Selling Fast"
  }
];

export default function Events() {
  return (
    <section id="events" className="py-24 bg-[#111111] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Discover what's <span className="text-gradient">live tonight.</span></h2>
            <p className="text-white/60 text-lg max-w-xl">
              From underground techno to rooftop R&B, find the exact vibe you're looking for.
            </p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-[#06b6d4] hover:text-white transition-colors">
            View All Events <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10" />
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute top-4 left-4 z-20">
                <span className="glass-panel px-3 py-1 rounded-full text-xs font-bold text-white">
                  {event.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="flex items-center gap-2 text-[#06b6d4] text-xs font-bold mb-2">
                  <CalendarIcon size={14} /> {event.date}
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-white/70 text-sm">{event.venue}</p>
                  <p className="text-white font-bold text-sm bg-white/10 px-2 py-1 rounded">{event.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
