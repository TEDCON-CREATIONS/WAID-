import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#111111] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#06b6d4] flex items-center justify-center font-display font-bold text-white text-2xl mx-auto mb-8">W</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Get off the couch.</h2>
          <p className="text-xl text-white/70 leading-relaxed mb-8 font-light">
            WAID isn't designed to keep you scrolling forever. It's a catalyst for real-world social life. We built this because we were tired of relying on outdated reviews, promoter spam, and pure luck to have a good night out.
          </p>
          <p className="text-xl text-white/70 leading-relaxed mb-12 font-light">
            Better information means better decisions. Better decisions mean better nights.
          </p>
          
          <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors text-lg">
            Join the Movement
          </button>
        </motion.div>
      </div>
    </section>
  );
}
