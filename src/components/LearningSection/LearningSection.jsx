import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const S = { fontFamily: "'Satoshi', sans-serif" };

// ── Dummy Video Data ──
const videos = [
  {
    id: 'VIDEO_ID_1', // Paste real YouTube ID here
    name: 'Simran Kakwani',
    thumb: 'https://www.operatingmedia.com/wp-content/uploads/2024/11/WhatsApp-Image-2023-02-19-at-18.38.42-1.png', // Replace with real thumbnail
  },
  {
    id: 'VIDEO_ID_2',
    name: 'Dhanshree Pawar',
    thumb: 'https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-411.png',
  },
  {
    id: 'VIDEO_ID_3',
    name: 'Rasika Karjavkar',
    thumb: 'https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-410.png',
  },
  {
    id: 'VIDEO_ID_4',
    name: 'Nishi More',
    thumb: 'https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-413.png',
  },
];

const doubledVideos = [...videos, ...videos];

// ── Video Popup Modal ──
function VideoModal({ video, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-none"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-600 transition-colors duration-300"
        >
          <X size={20} strokeWidth={2.5} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── YouTube Style Play Button SVG ──
const YouTubePlayIcon = () => (
  <svg viewBox="0 0 68 48" className="w-[50px] md:w-[60px] fill-red-600 drop-shadow-md">
    <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" />
    <path d="M27.5,33.5l18.5-9.5l-18.5-9.5V33.5z" fill="#ffffff" />
  </svg>
);

// ── Individual Video Card ──
function VideoCard({ video, index, onPlay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="group shrink-0 flex flex-col items-center cursor-pointer w-[260px] md:w-[280px]"
      onClick={() => onPlay(video)}
    >
      {/* Outer Border Box matching reference image */}
      <div className="w-full rounded-[24px] border border-orange-200/60 p-2 bg-gradient-to-b from-white to-orange-50/30 transition-all duration-300 hover:border-orange-400 hover:shadow-xl hover:-translate-y-2 relative overflow-visible">
        
        {/* Inner Card (Yellowish Radial BG) */}
        <div className="w-full h-[320px] rounded-[18px] relative overflow-hidden bg-[radial-gradient(ellipse_at_top_left,_#E5F9A6_0%,_#FDFDFD_70%)]">
          
          {/* Operating Media Watermark (Top Right) */}
          <div className="absolute top-3 right-3 z-20 w-16 opacity-90">
            <img src="https://www.operatingmedia.com/wp-content/uploads/2023/07/OM-Logo.png" alt="" className="w-full object-contain mix-blend-multiply" />
          </div>

          {/* Student Photo */}
          <img
            src={video.thumb}
            alt={video.name}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Bottom Dark Gradient for Text readability */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent z-10" />

          {/* Name Bar inside image */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-[85%] rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5 text-center">
            <h4 className="text-white font-bold text-[14px] md:text-[15px] tracking-wide whitespace-nowrap">
              {video.name}
            </h4>
          </div>

          {/* YouTube Play Button Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-30 transition-colors duration-300 flex items-center justify-center">
            <div className="scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out drop-shadow-2xl">
              <YouTubePlayIcon />
            </div>
          </div>
        </div>

        {/* The Bottom Red Play Button (Static) */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-40 bg-white p-1 rounded-full group-hover:scale-110 transition-transform duration-300 shadow-sm">
          <svg viewBox="0 0 68 48" className="w-[32px] fill-red-600">
            <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" />
            <path d="M27.5,33.5l18.5-9.5l-18.5-9.5V33.5z" fill="#ffffff" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function StudentTestimonials() {
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
    setCanLeft(el.scrollLeft > 10);
    setCanRight(Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => el.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  const scroll = (dir) => {
    // 280px is approx one card + gap
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <>
      <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] overflow-hidden selection:bg-orange-500 selection:text-white" style={S}>

        <div className="max-w-[1400px] mx-auto relative">

          {/* ── Header ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16 px-6"
          >
            <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-orange-500 mb-5 bg-white shadow-sm">
              <span className="font-bold text-[12px] text-orange-500 tracking-wide uppercase">
                Success Stories
              </span>
            </div>

            <h2 className="font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-gray-900">
              Our Students' <span className="text-[#FFB800]">Success Stories</span>
            </h2>
          </motion.div>

          {/* ── Carousel Wrapper (Fixed Spacing for Arrows) ── */}
          <div className="relative w-full group px-4 sm:px-14 lg:px-24">

            {/* Left Arrow (Outside Card Area) */}
            <button
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              className={`hidden md:flex absolute left-0 sm:left-2 lg:left-6 top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-orange-300 bg-white items-center justify-center text-orange-500 shadow-md hover:bg-orange-50 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none`}
            >
              <ChevronLeft size={26} strokeWidth={1.5} />
            </button>

            {/* Scrolling Container */}
            {/* Added pb-10 to prevent the bottom floating red icon from clipping */}
            <div
              ref={scrollRef}
              className="flex gap-6 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory py-6 pb-12 px-2"
            >
              {doubledVideos.map((vid, i) => (
                <VideoCard key={i} video={vid} index={i} onPlay={setActiveVideo} />
              ))}
            </div>

            {/* Right Arrow (Outside Card Area) */}
            <button
              onClick={() => scroll(1)}
              disabled={!canRight}
              className={`hidden md:flex absolute right-0 sm:right-2 lg:right-6 top-[45%] -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-orange-300 bg-white items-center justify-center text-orange-500 shadow-md hover:bg-orange-50 active:scale-95 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none`}
            >
              <ChevronRight size={26} strokeWidth={1.5} />
            </button>

          </div>

        </div>

        {/* ── Hide Scrollbar CSS ── */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>

      {/* ── Popup Modal Render ── */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </>
  );
}