import React, { useState } from 'react';
import { AsyncLabsLogo } from './BrandIcons';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookDemo: () => void;
}

export function Navbar({ onBookDemo }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = ['Home', 'Features', 'Pricing', 'About', 'Contact'];

  const handleNavClick = (item: string) => {
    setActiveLink(item);
    setMobileMenuOpen(false);
    if (item === 'Features') {
      const element = document.getElementById('features-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-header" 
      className="sticky top-0 z-50 w-full transition-all duration-300 bg-transparent backdrop-blur-none border-b border-transparent py-4 sm:py-5"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name: Async Labs */}
          <a
            href="#"
            id="brand-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center text-neutral-950 group cursor-pointer focus:outline-none"
          >
            <AsyncLabsLogo />
          </a>

          {/* Desktop Nav Items + See what's visible CTA */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <nav id="desktop-nav" className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`text-sm tracking-normal transition-colors font-['DM_Sans'] cursor-pointer ${
                    activeLink === item
                      ? 'text-neutral-950 font-medium'
                      : 'text-neutral-700 hover:text-neutral-950'
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>

            <button
              id="nav-book-demo-btn"
              onClick={onBookDemo}
              className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-neutral-200 transition-all active:scale-95 shadow-md shadow-white/5 cursor-pointer font-['DM_Sans']"
            >
              See what&apos;s visible
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-950 rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden mt-3 p-4 rounded-2xl bg-white/90 backdrop-blur-2xl border border-black/10 text-neutral-950 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                  className={`text-base py-1 transition-colors font-['DM_Sans'] cursor-pointer ${
                    activeLink === item ? 'text-neutral-950 font-semibold' : 'text-neutral-700 hover:text-neutral-950'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              id="mobile-book-demo-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookDemo();
              }}
              className="w-full bg-white text-black text-sm font-semibold py-2.5 rounded-full hover:bg-neutral-200 transition-all active:scale-95 text-center mt-1 cursor-pointer font-['DM_Sans']"
            >
              See what&apos;s visible
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
