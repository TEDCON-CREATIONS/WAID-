/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Events from './components/Events';
import MapDiscovery from './components/MapDiscovery';
import VenueProfile from './components/VenueProfile';
import Partners from './components/Partners';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#a855f7] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Events />
        <MapDiscovery />
        <VenueProfile />
        <Partners />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
