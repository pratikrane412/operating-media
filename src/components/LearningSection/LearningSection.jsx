import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// ── Dummy Video Data ──
// Yaha aap apne YouTube Short ka ID dale.
// Abhi maine ek working ID dala hai taki aap check kar sako.
const SHORT_ID_TO_REPEAT = 'kl8XbbODq8M'; 

const videos = Array.from({ length: 15 }).map((_, index) => ({
  id: SHORT_ID_TO_REPEAT,
  name: `Student ${index + 1}`,
  // Thumbnail ke liye YouTube ka official URL structure:
  thumb: `https://i.ytimg.com/vi/${SHORT_ID_TO_REPEAT}/hqdefault.jpg`, 
}));

// ── Video Popup Modal (With Sound) ──
function VideoModal({ video, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0F1C]/90 backdrop-blur-xl px-4 py-10"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="relative h-full aspect-[9/16] max-h-[85vh] rounded-[2rem] overflow-hidden bg-black shadow-[0_0_80px_rgba(236,171,0,0.2)] border border-[#ecab00]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Real Video with Sound (mute=0 ensures sound is on) */}
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&rel=0`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-none"
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 md:top-4 md:right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#ecab00] hover:text-[#0A0F1C] transition-all duration-300 z-50 shadow-xl"
        >
          <X size={24} strokeWidth={2.5} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── Hover-to-Play Card Component ──
function ShortsCard({ video, index, onPlay }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 350);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeoutRef.current);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-50px' }}
      className="group shrink-0 flex flex-col items-center cursor-pointer relative snap-center"
      onClick={() => onPlay(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Card Container */}
      <div className="w-[240px] md:w-[280px] aspect-[9/16] rounded-[2rem] p-1.5 bg-white/5 border border-white/10 group-hover:border-[#ecab00]/50 backdrop-blur-md relative z-10 overflow-hidden transition-all duration-500 group-hover:-translate-y-2">
        
        <div className="w-full h-full rounded-[1.6rem] relative overflow-hidden bg-black/50">
          
          {/* Thumbnail Fetch */}
          <img
            src={video.thumb}
            alt={video.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
          />

          {/* Hover Video Preview (Muted & Autoplay) */}
          {isHovered && (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&playsinline=1`}
              title="Preview"
              className="absolute inset-0 w-full h-full border-none pointer-events-none scale-[1.35]" 
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}

          {/* Bottom Gradient for Text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#0A0F1C]/90 pointer-events-none z-10" />

          {/* YouTube Shorts Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 group-hover:border-[#ecab00]/50 transition-colors">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#ecab00]">
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.27l-1.2-.5 1.05-.93c1.3-1.17 1.72-2.96 1.12-4.53-.6-1.56-2.1-2.58-3.8-2.58H13.8c-1.5 0-2.9.8-3.5 2.15L8.03 8.7l1.2.5-1.05.93c-1.3 1.17-1.72 2.96-1.12 4.53.6 1.56 2.1 2.58 3.8 2.58h1.16c1.5 0 2.9-.8 3.5-2.15l2.26-4.7z" />
            </svg>
            <span className="text-white text-[10px] font-bold tracking-wider">SHORTS</span>
          </div>

          {/* Play Button Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 ${isHovered ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:bg-[#ecab00] group-hover:border-[#ecab00] transition-colors">
              <Play className="w-6 h-6 text-white ml-1 fill-white group-hover:text-[#0A0F1C] group-hover:fill-[#0A0F1C] transition-colors" />
            </div>
          </div>

          {/* Student Info */}
          <div className="absolute bottom-6 left-0 right-0 px-5 z-20">
            <h4 className="text-white font-bold text-lg md:text-xl tracking-wide drop-shadow-md">
              {video.name}
            </h4>
            <div className="w-8 h-1 bg-[#ecab00] rounded-full mt-2 mb-1" />
            <p className="text-white/60 text-xs font-medium uppercase tracking-widest">
              Success Story
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StudentShorts() {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);

  // Inject Satoshi font dynamically
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 20);
    setCanRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth - 20);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => el.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative w-full py-20 lg:py-28 bg-[#0A0F1C] overflow-hidden selection:bg-[#ecab00] selection:text-[#0A0F1C]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
        
        {/* ── Background Premium Effects ── */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#ecab00]/10 blur-[150px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#ecab00]/5 blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">

          {/* ── Heading Section ── */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16 px-6"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#ecab00]/30 bg-[#ecab00]/10 backdrop-blur-md mb-5 shadow-sm">
              <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-[#ecab00]">
                Hear From Achievers
              </span>
            </div>

            <h2 className="font-black text-white text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] tracking-tight">
              Student <span className="text-[#ecab00]">Success Stories</span>
            </h2>
            <p className="text-white/60 mt-4 text-[15px] md:text-[16px] max-w-xl font-medium">
              Hover over a video for a quick preview, or click to watch the full journey of our successful candidates.
            </p>
          </motion.div>

          {/* ── Carousel Wrapper ── */}
          <div className="relative w-full px-2 sm:px-12 lg:px-20 group">

            {/* Left Scroll Button */}
            <button
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center text-white shadow-xl hover:bg-[#ecab00] hover:text-[#0A0F1C] hover:border-[#ecab00] hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>

            {/* Scrolling Area */}
            <div
              ref={scrollRef}
              className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-6 px-4"
            >
              {videos.map((vid, i) => (
                <ShortsCard key={i} video={vid} index={i} onPlay={setActiveVideo} />
              ))}
            </div>

            {/* Right Scroll Button */}
            <button
              onClick={() => scroll(1)}
              disabled={!canRight}
              className="hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 items-center justify-center text-white shadow-xl hover:bg-[#ecab00] hover:text-[#0A0F1C] hover:border-[#ecab00] hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>

          </div>
        </div>

        {/* Custom CSS for Scrollbar & Pulse */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
          .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        `}</style>
      </section>

      {/* ── Modal Component Render ── */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </>
  );
}