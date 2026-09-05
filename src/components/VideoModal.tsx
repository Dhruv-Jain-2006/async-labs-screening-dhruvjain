import React from 'react';
import { X, Play, Volume2, Maximize2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="video-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        id="video-modal-dialog"
        className="relative w-full max-w-3xl bg-neutral-950 border border-white/20 rounded-2xl overflow-hidden text-white shadow-2xl shadow-white/5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-900/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-medium text-white">Async Labs Platform Overview (2:15)</span>
          </div>
          <button
            id="close-video-modal"
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10 cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Mock Player */}
        <div className="relative aspect-video bg-neutral-900 flex flex-col justify-between p-6 overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative z-10 flex justify-between items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs text-white">
              <span>Resolution: 4K 60FPS</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[11px] text-white/70">
              <span>Seamless AI</span>
            </div>
          </div>

          {/* Central Interactive Animation Graphic */}
          <div className="relative z-10 text-center my-auto">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-2xl shadow-white/20 cursor-pointer hover:scale-105 transition-transform">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <p className="text-base sm:text-lg font-medium text-white mt-4">
              Watch Seamless AI Integration in Action
            </p>
            <p className="text-xs sm:text-sm text-white/60 mt-1 max-w-md mx-auto">
              Connecting Slack, Google Workspace, Webflow, Microsoft Teams, and Twitter pipelines into unified workflows.
            </p>
          </div>

          {/* Player controls bar */}
          <div className="relative z-10 bg-black/70 border border-white/15 backdrop-blur-sm rounded-xl p-3 flex items-center gap-4">
            <button className="text-white hover:text-white/80 transition-colors">
              <Play className="w-4 h-4 fill-current" />
            </button>
            <div className="text-xs text-white/60 font-mono">0:42 / 2:15</div>
            <div className="flex-1 h-1.5 bg-neutral-700 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-white rounded-full" />
            </div>
            <Volume2 className="w-4 h-4 text-white/70" />
            <Maximize2 className="w-4 h-4 text-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
