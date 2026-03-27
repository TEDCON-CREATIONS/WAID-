import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#a855f7] to-[#06b6d4] flex items-center justify-center font-display font-bold text-white">W</div>
          <span className="font-display font-bold text-xl tracking-wider">WAID</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#venues" className="hover:text-white transition-colors">For Venues</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white/70 hover:text-white transition-colors">Log In</button>
          <button className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors">
            Get Early Access
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 py-4 px-6 flex flex-col gap-4">
          <a href="#how-it-works" className="text-white/70 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
          <a href="#events" className="text-white/70 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>Events</a>
          <a href="#venues" className="text-white/70 hover:text-white py-2" onClick={() => setMobileMenuOpen(false)}>For Venues</a>
          <button className="w-full px-5 py-3 rounded-full bg-white text-black font-semibold text-sm mt-2">
            Get Early Access
          </button>
        </div>
      )}
    </header>
  );
}
