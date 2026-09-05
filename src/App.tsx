import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar } from './components/Navbar';
import { BannerHero } from './components/BannerHero';
import { FeaturesSection } from './components/FeaturesSection';
import { DemoModal } from './components/DemoModal';
import { VideoModal } from './components/VideoModal';
import { ScrollCanvas } from './components/ScrollCanvas';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    lenis.on('scroll', (lenis) => {
      setScrollProgress(lenis.progress);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-transparent text-white flex flex-col selection:bg-white selection:text-black overflow-x-clip font-['DM_Sans'] relative">
      {/* Background Scroll Animation Canvas */}
      <ScrollCanvas scrollProgress={scrollProgress} />

      <div className="relative z-10 flex flex-col min-h-screen animate-breathe-in">
      {/* Top Sticky Navigation */}
      <Navbar onBookDemo={() => setIsDemoModalOpen(true)} />

      {/* 
        Section 1: Hero Banner
      */}
      <section
        id="hero-section"
        className="h-[calc(100vh-70px)] min-h-[540px] w-full flex flex-col justify-between relative shrink-0 overflow-hidden z-10 bg-transparent"
      >
        <main className="flex-1 flex items-center justify-center overflow-hidden min-h-0">
          <BannerHero
            onBookDemo={() => setIsDemoModalOpen(true)}
            onWatchVideo={() => setIsVideoModalOpen(true)}
          />
        </main>

        <div className="pb-3 sm:pb-4 flex justify-center">
          <button
            onClick={() => document.getElementById('space-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-800 hover:text-black transition-colors duration-300 group cursor-pointer font-['DM_Sans'] px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-black/10 shadow-md"
            aria-label="Scroll down to Next Section"
          >
            <span>Explore features</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-black animate-bounce" />
          </button>
        </div>
      </section>

      {/* Transition Stage (Scroll scrubber spacing for tablet rotation) */}
      <div className="h-[20vh] w-full relative z-10 pointer-events-none flex items-center justify-center" />

      {/* 
        Section 2: Calm & Focused Section (Exchanged from after Features)
      */}
      <section
        id="space-section"
        className="min-h-[70vh] lg:min-h-screen w-full flex flex-col justify-center px-4 sm:px-6 relative z-10 text-center py-16 bg-transparent"
      >
        <div className="w-full max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-neutral-950/40 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50 block mb-3 font-['DM_Sans']">
            A small display. A bigger you.
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mb-4 font-['DM_Sans']">
            Your space, calm and focused.
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-md mx-auto mb-8 leading-relaxed font-['DM_Sans']">
            Designed to fit into your environment naturally. See what matters without opening another app.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-white text-black font-semibold px-7 py-3 rounded-full hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-white/10 cursor-pointer text-xs sm:text-sm font-['DM_Sans']"
            >
              See what&apos;s visible
            </button>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="px-6 py-3 rounded-full border border-white/20 hover:border-white/50 text-white font-medium transition-all text-xs sm:text-sm font-['DM_Sans'] cursor-pointer backdrop-blur-sm"
            >
              Watch film
            </button>
          </div>
        </div>
      </section>

      {/* 
        Section 3: Features Section (Now after the space section)
      */}
      <FeaturesSection />

      {/* Footer */}
      <footer className="py-12 text-center text-xs text-white/40 tracking-wider relative z-10 bg-transparent">
        <p>© 2026 Async Labs Inc. All rights reserved.</p>
      </footer>
      </div>

      {/* Interactive Booking Walkthrough Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Interactive Video Preview Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </div>
  );
}
