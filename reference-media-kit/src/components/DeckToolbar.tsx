import { useState, useEffect } from 'react';
import { isAudioPlaying, toggleVinylAudio } from '../utils/audioPlayer';

interface DeckToolbarProps {
  onPresentDeck: () => void;
  onOpenRateCard: () => void;
  onOpenInquiry: () => void;
}

export function DeckToolbar({ onPresentDeck, onOpenRateCard, onOpenInquiry }: DeckToolbarProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsPlaying(isAudioPlaying());
  }, []);

  const handleAudioToggle = () => {
    const nextState = toggleVinylAudio(setIsPlaying);
    setIsPlaying(nextState);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-[1400px] mx-auto mb-6 px-1 no-print">
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Creator KPI Metrics Strip */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="font-bold text-[#173664] font-mono">5.8M+</span>
            <span className="text-slate-500">Cross-Platform Reach</span>
          </div>
          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#173664] font-mono">7.2%</span>
            <span className="text-slate-500">Avg Engagement Rate</span>
          </div>
          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-graduation-cap text-slate-400"></i>
            <span className="text-slate-600 font-medium">Harvard Alum '20 &amp; '24</span>
          </div>
          <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <div className="flex items-center gap-1.5">
            <i className="fa-solid fa-location-dot text-slate-400"></i>
            <span className="text-slate-600 font-medium">NYC &amp; Los Angeles</span>
          </div>
        </div>

        {/* Action Controls & Music Toggle */}
        <div className="flex items-center flex-wrap gap-2.5">
          {/* Audio Vinyl Soundtrack Player */}
          <button
            type="button"
            onClick={handleAudioToggle}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
              isPlaying
                ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-sm'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
            title="Vinyl Music: The 1975 Ambient Lofi Progression"
          >
            <i
              className={`fa-solid fa-compact-disc ${
                isPlaying ? 'animate-spin-slow text-amber-600' : 'text-slate-400'
              }`}
            ></i>
            <span>{isPlaying ? 'Vinyl Playing ♪' : 'Play Vinyl Track'}</span>
          </button>

          {/* Quick Rate Card */}
          <button
            type="button"
            onClick={onOpenRateCard}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <i className="fa-solid fa-file-invoice-dollar text-slate-400"></i>
            <span>Rates &amp; Packages</span>
          </button>

          {/* Slideshow Presentation Mode */}
          <button
            type="button"
            onClick={onPresentDeck}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#173664] hover:bg-blue-900 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <i className="fa-solid fa-expand text-[10px]"></i>
            <span>Present Slides</span>
          </button>

          {/* Print / Save PDF */}
          <button
            type="button"
            onClick={handlePrint}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
            title="Print or Save as PDF"
          >
            <i className="fa-solid fa-print"></i>
          </button>

          {/* Copy Link */}
          <button
            type="button"
            onClick={handleCopyLink}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
            title="Copy Media Kit Link"
          >
            <i className={`fa-solid ${copied ? 'fa-check text-green-600' : 'fa-share-nodes'}`}></i>
            {copied && <span className="text-[10px] text-green-600 font-semibold">Copied!</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
