import React from 'react';
import { SlackIcon, GoogleIcon, WebflowIcon, TeamsIcon, TwitterIcon } from './BrandIcons';
import { Play } from 'lucide-react';

interface BannerHeroProps {
  onBookDemo: () => void;
  onWatchVideo: () => void;
}

export function BannerHero({ onBookDemo, onWatchVideo }: BannerHeroProps) {
  return (
    <section
      id="banner-hero"
      aria-label="Harmoniq Hero Banner"
      className="relative w-full flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-4 overflow-hidden bg-transparent text-neutral-950 select-none"
    >
      {/* 
        Central Arch Container:
        Completely transparent background overlaying the tablet display,
        with crisp typography and high-contrast styling.
      */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto">

        {/* Subtle sleek geometric arc outline */}
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 -top-4 bottom-12 sm:-top-6 sm:bottom-14 pointer-events-none flex justify-center"
        >
          <div className="w-full max-w-3xl h-full rounded-t-[400px] border-t border-x border-black/20" />
        </div>

        {/* 
          Arc Floating Badges Container:
          Positions the 5 brand integration tiles along the upper semi-ellipse curve:
          1. Slack (left lowest)
          2. Google (left mid-high)
          3. Webflow (top apex)
          4. Microsoft Teams (right mid-high)
          5. Twitter (right lowest)
        */}
        <div className="relative w-full max-w-3xl h-36 sm:h-44 md:h-48 lg:h-52 pointer-events-auto">

          {/* 1. Slack Badge */}
          <div
            id="badge-slack"
            className="absolute left-[3%] sm:left-[6%] md:left-[8%] top-[56%] sm:top-[50%] -translate-y-1/2 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/10 border border-black/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
              <SlackIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </div>

          {/* 2. Google Badge */}
          <div
            id="badge-google"
            className="absolute left-[22%] sm:left-[24%] md:left-[26%] top-[22%] sm:top-[16%] -translate-y-1/2 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/10 border border-black/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
              <GoogleIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </div>

          {/* 3. Webflow Badge */}
          <div
            id="badge-webflow"
            className="absolute left-1/2 -translate-x-1/2 top-[0%] sm:top-[2%] group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/10 border border-black/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
              <WebflowIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </div>

          {/* 4. Microsoft Teams Badge */}
          <div
            id="badge-teams"
            className="absolute right-[22%] sm:right-[24%] md:right-[26%] top-[22%] sm:top-[16%] -translate-y-1/2 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/10 border border-black/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
              <TeamsIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </div>

          {/* 5. Twitter Badge */}
          <div
            id="badge-twitter"
            className="absolute right-[3%] sm:right-[6%] md:right-[8%] top-[56%] sm:top-[50%] -translate-y-1/2 group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shadow-lg shadow-black/10 border border-black/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer">
              <TwitterIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
          </div>

          {/* Announcement Pill */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-2 flex justify-center">
            <div
              id="announcement-pill"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-black/15 bg-black/5 text-xs sm:text-sm font-medium text-neutral-900 tracking-normal font-['DM_Sans'] hover:border-black/30 transition-colors cursor-default"
            >
              <span>We just raised 20M🚀</span>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mt-3 sm:mt-5 px-2 max-w-4xl mx-auto">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal tracking-[-0.03em] leading-[1.08] text-neutral-950 font-['DM_Sans']"
          >
            <span className="block">A screen that asks</span>
            <span className="block mt-0.5 sm:mt-1.5">nothing of you.</span>
          </h1>

          {/* Supporting Description */}
          <p
            id="hero-subheading"
            className="text-neutral-700 text-xs sm:text-sm md:text-base font-normal leading-relaxed max-w-md sm:max-w-xl md:max-w-2xl mx-auto mt-3 sm:mt-4 font-['DM_Sans']"
          >
            See what matters, without opening another app. Your day stays visible. Your attention stays yours.
          </p>

          {/* CTA Group */}
          <div
            id="hero-cta-group"
            className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6"
          >
            <button
              id="hero-book-demo-btn"
              onClick={onBookDemo}
              className="bg-neutral-950 text-white text-xs sm:text-sm md:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-neutral-800 active:scale-95 transition-all shadow-xl shadow-black/15 cursor-pointer font-['DM_Sans']"
            >
              See what&apos;s visible
            </button>

            <button
              id="hero-play-video-btn"
              onClick={onWatchVideo}
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-neutral-950 text-white flex items-center justify-center hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/15 cursor-pointer"
              aria-label="Play product walkthrough video"
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
