import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutGrid, 
  RefreshCw, 
  Layers, 
  Upload, 
  Pencil, 
  AppWindow,
  Clock,
  Monitor,
  Palette,
  BatteryCharging
} from 'lucide-react';

type TabKey = 'make_it_yours' | 'keep_in_sync' | 'built_for_space';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface TabData {
  number: string;
  label: string;
  titlePrefix: string;
  titleAccent: string;
  lead: string;
  description: string;
  features: FeatureItem[];
}

const TAB_DATA: Record<TabKey, TabData> = {
  make_it_yours: {
    number: '01',
    label: 'MAKE IT YOURS',
    titlePrefix: 'Make it ',
    titleAccent: 'yours.',
    lead: 'One display. Endless ways to use it.',
    description: ' From calendars to custom dashboards, choose what matters, arrange it your way, and keep it always visible.',
    features: [
      {
        icon: Upload,
        title: 'Upload anything',
        desc: 'Show images, text, quotes, tasks, and custom content.'
      },
      {
        icon: LayoutGrid,
        title: 'Start with a template',
        desc: 'Choose a ready-made layout and get started quickly.'
      },
      {
        icon: Pencil,
        title: 'Create your own layout',
        desc: 'Arrange information exactly how you want it.'
      }
    ]
  },
  keep_in_sync: {
    number: '02',
    label: 'KEEP IT IN SYNC',
    titlePrefix: 'Keep it ',
    titleAccent: 'in sync.',
    lead: 'Your information, always up to date.',
    description: ' Sync Google Calendar, Outlook, Slack/Teams, and more with effortless automatic updates.',
    features: [
      {
        icon: AppWindow,
        title: 'Connect your apps',
        desc: 'Sync Google Calendar, Outlook, Slack/Teams, and more.'
      },
      {
        icon: Clock,
        title: 'Schedule what matters',
        desc: 'Set content to appear when you need it.'
      },
      {
        icon: RefreshCw,
        title: 'Automatic updates',
        desc: 'Keep your display current without repeated manual changes.'
      }
    ]
  },
  built_for_space: {
    number: '03',
    label: 'BUILT FOR YOUR SPACE',
    titlePrefix: 'Built for ',
    titleAccent: 'your space.',
    lead: 'Useful wherever you need it.',
    description: ' Flexible placement for desk or wall, versatile display options, and low-power hardware made for everyday use.',
    features: [
      {
        icon: Monitor,
        title: 'Desk or wall',
        desc: 'Place it where information is most useful.'
      },
      {
        icon: Palette,
        title: 'Choose your display',
        desc: 'Black-and-white or tri-color with an accent color.'
      },
      {
        icon: BatteryCharging,
        title: 'Made for everyday use',
        desc: 'Low-power operation with up to approximately 30 days of battery life.'
      }
    ]
  }
};

const TABS: { id: TabKey; label: string; icon: React.ElementType }[] = [
  { id: 'make_it_yours', label: 'Make it yours', icon: LayoutGrid },
  { id: 'keep_in_sync', label: 'Keep it in sync', icon: RefreshCw },
  { id: 'built_for_space', label: 'Built for your space', icon: Layers }
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('make_it_yours');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const currentTab = TAB_DATA[activeTab];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <section
      id="features-section"
      aria-label="Harmoniq Core Features"
      className="min-h-[580px] lg:min-h-screen w-full flex flex-col justify-between pt-40 sm:pt-52 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8 bg-transparent text-white select-none shrink-0 overflow-hidden relative z-10"
    >
      {/* 
        Container taking 65-70% of screen width with left-aligned features
        and reserved space on the right for upcoming elements
      */}
      <div className="w-[92%] sm:w-[86%] md:w-[78%] lg:w-[68%] max-w-5xl mx-auto flex flex-col relative z-10">
        
        {/* Eyebrow: FEATURES — */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] sm:text-xs tracking-[0.28em] text-[#5c3d2e] font-bold uppercase font-['DM_Sans']">
            FEATURES
          </span>
          <span className="w-7 h-[1px] bg-[#5c3d2e]/40" />
        </div>

        {/* Dynamic Headline based on Active Tab with fluid transition */}
        <div className="h-[44px] sm:h-[52px] md:h-[60px] flex items-center mt-2">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] leading-[1.08] text-[#3c2415] font-['DM_Sans']"
            >
              {currentTab.titlePrefix}
              <span className="text-[#5c3d2e] font-medium">{currentTab.titleAccent}</span>
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Dynamic Supporting Description based on Active Tab with fluid transition */}
        <div className="min-h-[48px] sm:min-h-[52px] flex items-center mt-1">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs sm:text-sm md:text-base text-[#5c3d2e] font-normal leading-relaxed max-w-2xl font-['DM_Sans']"
            >
              <span className="text-[#3c2415] font-semibold">{currentTab.lead}</span>
              {currentTab.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* 
          The 3 Links / Tabs with Liquid Glass Morphing Effect
        */}
        <div className="mt-5 sm:mt-7 flex items-center">
          <div 
            id="liquid-glass-nav"
            className="inline-flex flex-wrap p-1 sm:p-1.5 rounded-2xl bg-neutral-900/70 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_24px_rgba(0,0,0,0.6)] relative"
          >
            {TABS.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id.replace(/_/g, '-')}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium cursor-pointer font-['DM_Sans'] transition-colors duration-200 z-10 ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {/* Sliding Liquid Glass Active Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="liquid-glass-active-tab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-xl border border-white/30 shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),0_4px_16px_rgba(0,0,0,0.5),0_0_24px_rgba(255,255,255,0.12)] overflow-hidden"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30
                      }}
                    >
                      {/* Sweeping liquid glass light refraction */}
                      <motion.div
                        animate={{
                          x: ['-120%', '220%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          repeatDelay: 1.5
                        }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
                      />
                    </motion.div>
                  )}

                  <TabIcon className={`w-3.5 h-3.5 relative z-10 transition-transform duration-300 ${
                    isActive && tab.id === 'keep_in_sync' ? 'animate-spin-slow' : ''
                  }`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 
          Two-Column Area:
          - Features card positioned on the LEFT
          - Slot reserved on the RIGHT for the upcoming element
        */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start w-full">
          
          {/* Left Column: The Features Card */}
          <div className="lg:col-span-6 xl:col-span-6 w-full">
            <motion.div 
              id="feature-glass-box"
              onMouseMove={handleMouseMove}
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-neutral-900/40 backdrop-blur-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.15)] relative overflow-hidden group"
            >
              {/* Dynamic Interactive Liquid Glass Specular Gradient Follower */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(420px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.12), rgba(223, 190, 159, 0.04) 35%, transparent 70%)`
                }}
              />

              {/* Ambient Fluid Wave Shimmer across Glass Surface */}
              <motion.div
                animate={{
                  x: ['-25%', '25%', '-25%'],
                  y: ['-20%', '20%', '-20%'],
                  opacity: [0.25, 0.45, 0.25]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="absolute -inset-[50%] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_55%)] blur-2xl"
              />

              {/* Top specular rim light reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none rounded-2xl sm:rounded-3xl" />

              {/* Top indices bar inside card */}
              <div className="flex items-center justify-between text-[11px] sm:text-xs text-white/50 tracking-wider mb-6 uppercase font-['DM_Sans'] relative z-10">
                <div className="flex items-center gap-2.5">
                  <span className="font-semibold text-white/70">
                    {currentTab.number}
                  </span>
                  <span className="w-8 h-[1px] bg-white/20" />
                  <span className="tracking-[0.2em]">
                    {currentTab.label}
                  </span>
                </div>
                <div className="tracking-[0.2em] text-white/40">3 FEATURES</div>
              </div>

              {/* Animated Feature Rows Container */}
              <div className="relative z-10 min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5 sm:space-y-6"
                  >
                    {currentTab.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <motion.div
                          key={feature.title}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.35, 
                            delay: idx * 0.07,
                            ease: [0.22, 1, 0.36, 1] 
                          }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-4 group/item cursor-default"
                        >
                          {/* Liquid Glass Squircle Icon Badge with Animated Sheen */}
                          <motion.div 
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover/item:bg-white/20 group-hover/item:border-white/35 transition-colors duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)] relative overflow-hidden"
                          >
                            {/* Liquid specular streak on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-tr from-transparent via-white/30 to-transparent" />
                            
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-300 group-hover/item:scale-110" />
                          </motion.div>

                          {/* Text Info */}
                          <div>
                            <h4 className="text-base sm:text-lg font-medium text-white group-hover/item:text-[#dfbe9f] transition-colors duration-200 font-['DM_Sans']">
                              {feature.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-white/65 mt-0.5 leading-relaxed font-['DM_Sans']">
                              {feature.desc}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Reserved space for the upcoming right element */}
          <div 
            id="features-right-slot"
            className="hidden lg:flex lg:col-span-6 xl:col-span-6 w-full min-h-[320px] items-center justify-center relative"
          >
            {/* Empty right column ready for next element */}
          </div>

        </div>

        {/* 
          Footer Indices matching reference:
          - Left: 01 —— 03 (reflects current tab)
          - Right: A SMALL DISPLAY. A BIGGER YOU. —
        */}
        <div className="mt-6 flex items-center justify-between text-[11px] text-[#5c3d2e] tracking-wider font-['DM_Sans']">
          <div className="flex items-center gap-2.5">
            <span className="text-[#3c2415] font-semibold">
              {currentTab.number}
            </span>
            <span className="w-8 h-[1px] bg-[#5c3d2e]/40" />
            <span className="text-[#5c3d2e]/70">03</span>
          </div>

          <div className="flex items-center gap-2 uppercase tracking-[0.22em] text-[10px] sm:text-[11px] text-[#5c3d2e] font-medium">
            <span>A SMALL DISPLAY. A BIGGER YOU.</span>
            <span className="w-4 h-[1px] bg-[#5c3d2e]/40" />
          </div>
        </div>

      </div>
    </section>
  );
}
