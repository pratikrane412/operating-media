import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Play } from 'lucide-react';

// ── Bento Grid Unit (Repeated for infinite scroll) ──
const BentoGridUnit = ({ images }) => (
  <div className="flex gap-2 md:gap-3 h-[300px] md:h-[400px] lg:h-[500px] shrink-0 px-1 md:px-1.5">
    
    {/* Left Feature (Tall) */}
    <div className="w-[180px] md:w-[240px] lg:w-[280px] h-full relative group overflow-hidden rounded-2xl md:rounded-3xl bg-gray-900 shadow-sm">
      <img
        src={images[0].url}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
        alt="Campus Culture"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute bottom-5 left-5 z-20">
        <span className="inline-block bg-orange-500 text-white font-bold text-[10px] md:text-[11px] tracking-widest uppercase px-3 py-1 rounded-full mb-2 shadow-lg">
          Events
        </span>
        <h3 className="text-white font-bold text-sm md:text-base leading-tight">Annual Meetups</h3>
      </div>
    </div>

    {/* Center Column (2x2 Grid) */}
    <div className="w-[300px] md:w-[480px] lg:w-[580px] grid grid-rows-2 gap-2 md:gap-3 h-full">
      
      {/* Top Row */}
      <div className="grid grid-cols-12 gap-2 md:gap-3">
        {/* Top Left (Wider) */}
        <div className="col-span-7 relative group overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100 shadow-sm">
          <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/20 transition-all duration-500 z-10" />
          <img src={images[1].url} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Agency Visit" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
            <Play fill="currentColor" size={20} className="ml-1" />
          </div>
        </div>
        
        {/* Top Right (Square-ish, Orange Theme) */}
        <div className="col-span-5 relative group overflow-hidden rounded-2xl md:rounded-3xl bg-orange-500 shadow-sm flex flex-col items-center justify-center text-center p-4">
          <img src={images[2].url} loading="lazy" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 transition-transform duration-[8s] group-hover:scale-110" alt="Workshops" />
          <Instagram size={28} className="text-white mb-2 relative z-10 drop-shadow-md" />
          <p className="text-white font-bold text-[12px] md:text-[14px] leading-tight relative z-10">Follow our <br/> Journey</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-12 gap-2 md:gap-3">
        {/* Bottom Left (Square-ish, Grayscale to Color) */}
        <div className="col-span-5 relative group overflow-hidden rounded-2xl md:rounded-3xl bg-gray-900 shadow-sm">
          <img src={images[3].url} loading="lazy" className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-700" alt="Socials" />
        </div>
        
        {/* Bottom Right (Wider) */}
        <div className="col-span-7 relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-sm">
          <img src={images[4].url} loading="lazy" className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" alt="Team Huddle" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 md:bottom-5 md:left-5 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <p className="text-white font-bold text-[15px]">Masterclasses</p>
          </div>
          <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-900 shadow-lg hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Right Feature (Tall, Text Overlay) */}
    <div className="w-[180px] md:w-[240px] lg:w-[280px] h-full relative group overflow-hidden rounded-2xl md:rounded-3xl bg-gray-900 shadow-sm">
      <img src={images[5].url} loading="lazy" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110" alt="Graduation" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 lg:p-8">
        <p className="text-orange-400 font-bold text-[10px] uppercase tracking-widest mb-2">Graduation</p>
        <p className="text-white italic text-[16px] md:text-[20px] leading-snug drop-shadow-md" style={{ fontFamily: "'Lora', serif" }}>
          "Where education meets celebration."
        </p>
      </div>
    </div>

  </div>
);

export default function InstitutionCampus() {
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1523240715639-963c9ad08a6c?w=600" },
    { id: 2, url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600" },
    { id: 3, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400" },
    { id: 4, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400" },
    { id: 5, url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" },
    { id: 6, url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600" },
  ];

  // Inject Fonts Dynamically
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link1 = document.createElement('link');
      link1.rel = 'stylesheet';
      link1.setAttribute('data-font', 'satoshi');
      link1.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap';
      document.head.appendChild(link1);

      const link2 = document.createElement('link');
      link2.rel = 'stylesheet';
      link2.href = 'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400;1,500&display=swap';
      document.head.appendChild(link2);
    }
  }, []);

  return (
    <section 
      className="relative bg-[#FAFAFA] py-20 lg:py-28 overflow-hidden selection:bg-orange-500 selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      
      {/* ── HEADER (Uniform max-w-[1400px] alignment) ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mb-12 lg:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
            <span className="font-bold text-[12px] uppercase tracking-[0.2em] text-orange-600">
              Campus Culture
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-gray-900">
              Life <span className="font-medium lowercase text-orange-500" style={{ fontFamily: "'Lora', serif", fontStyle: 'italic' }}> At </span> <br className="hidden sm:block" />
              Operating Media.
            </h2>
            <p className="max-w-md text-gray-500 font-medium text-[15px] md:text-[16px] leading-relaxed border-l-[3px] border-orange-500 pl-5 lg:pb-2">
              Student life is anything but ordinary. From surprise agency visits to vibrant celebrations, every moment is an experience.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── INFINITE MOVING BENTO TRACK ── */}
      <div className="relative w-full overflow-hidden flex flex-col group">
        
        {/* Edge Fade Masks for Premium Look */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        {/* The Scrolling Track (Pauses on hover) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Render 3 times to ensure smooth loop even on ultrawide screens */}
          <BentoGridUnit images={images} />
          <BentoGridUnit images={images} />
          <BentoGridUnit images={images} />
        </div>

      </div>

      {/* ── CUSTOM ANIMATIONS ── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        /* Make it faster on mobile so it doesn't feel sluggish */
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 25s; }
        }
      `}</style>
      
    </section>
  );
}