import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// ─── GALLERY IMAGES DATA ──────────────────────────────────────────────────────
const galleryImages = [
  "/images/gallery-1.jpeg",
  "/images/gallery-2.jpeg",
  "/images/gallery-3.jpeg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
  "/images/gallery-7.jpg",
  "/images/gallery-8.jpeg",
  "/images/gallery-9.jpeg",
  "/images/gallery-10.jpeg",
  "/images/gallery-11.jpeg",
  "/images/gallery-12.jpeg",
  "/images/gallery-13.jpeg",
  "/images/gallery-14.jpeg",
  "/images/gallery-15.jpeg",
  "/images/gallery-16.jpeg",
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Prevent background scrolling when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedIndex]);

  const closeModal = () => setSelectedIndex(null);
  
  const showNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };
  
  const showPrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full py-12 md:py-[60px] lg:py-[80px] px-4 md:px-8 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden">
      
      {/* ── Background Glow ── */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[120px] animate-pulse-slow pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <Camera size={16} className="text-[#2563eb]" />
              <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                Life at OM
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-4">
              Glimpses of <span className="relative inline-block text-[#ECAB00]">
                Our Journey
                {/* SVG Gold Underline */}
                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
                </svg>
              </span>
            </h2>

            <p className="font-medium text-[16px] md:text-[18px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Step inside Operating Media. Explore our vibrant classroom sessions, events, and the everyday life of our future digital leaders.
            </p>
          </motion.div>
        </div>

        {/* ── MASONRY GALLERY GRID ── */}
        {/* CSS Columns are used here to perfectly fit images of different heights without cropping */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 md:gap-5 space-y-4 md:space-y-5">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }} // Stagger effect by column
              className="break-inside-avoid relative rounded-2xl md:rounded-[1.5rem] overflow-hidden group cursor-pointer border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#2563eb]/30 transition-all duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              {/* Image */}
              <img 
                src={src} 
                alt={`Operating Media Gallery ${index + 1}`} 
                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700 ease-out bg-gray-100"
                loading="lazy"
              />

              {/* Hover Dark Overlay & Icon */}
              <div className="absolute inset-0 bg-[#0f172a]/0 group-hover:bg-[#0f172a]/40 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ── LIGHTBOX (Modal) for Smooth View ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0F1C]/90 backdrop-blur-md p-4 md:p-8"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#ECAB00] text-white hover:text-[#0f172a] rounded-full backdrop-blur-sm transition-all duration-300 z-50 cursor-pointer"
              onClick={closeModal}
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button 
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-[#2563eb] text-white rounded-full backdrop-blur-sm transition-all duration-300 z-50 cursor-pointer"
              onClick={showPrev}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button 
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-white/10 hover:bg-[#2563eb] text-white rounded-full backdrop-blur-sm transition-all duration-300 z-50 cursor-pointer"
              onClick={showNext}
            >
              <ChevronRight size={28} />
            </button>

            {/* Main Image Container */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-6xl max-h-full flex items-center justify-center w-full h-full"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking image
            >
              <img 
                src={galleryImages[selectedIndex]} 
                alt={`Enlarged Gallery Image ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Image Counter Indicator */}
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-white/60 font-medium text-sm tracking-widest uppercase">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CUSTOM ANIMATIONS ── */}
      <style>{`
        .animate-pulse-slow { 
          animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; 
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}