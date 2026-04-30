import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Play } from 'lucide-react';

// ── Bento Grid Unit (Repeated for infinite scroll) ──
const BentoGridUnit = ({ images }) => (
  <div className="flex gap-3 md:gap-4 h-[320px] md:h-[450px] lg:h-[500px] shrink-0 px-1.5 md:px-2">
    
    {/* ════ Left Feature (Tall) ════ */}
    <div className="w-[200px] md:w-[260px] lg:w-[300px] h-full relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0F1C] shadow-sm border border-gray-100">
      <img
        src={images[0].url}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
        alt="Campus Culture"
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/90 via-[#0A0F1C]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
      
      <div className="absolute bottom-6 left-6 z-20 transition-transform duration-500 group-hover:-translate-y-2">
        <span className="inline-block bg-[#ecab00] text-[#0A0F1C] font-bold text-[10px] md:text-[11px] tracking-widest uppercase px-3 py-1.5 rounded-full mb-3 shadow-[0_5px_15px_rgba(236,171,0,0.4)]">
          Events
        </span>
        <h3 className="text-white font-black text-lg md:text-xl leading-tight drop-shadow-md">Annual Meetups</h3>
      </div>
    </div>

    {/* ════ Center Column (2x2 Grid) ════ */}
    <div className="w-[320px] md:w-[500px] lg:w-[600px] grid grid-rows-2 gap-3 md:gap-4 h-full">
      
      {/* ── Top Row ── */}
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {/* Top Left (Wider Video Thumb) */}
        <div className="col-span-7 relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-gray-100 shadow-sm border border-gray-100 cursor-pointer">
          <div className="absolute inset-0 bg-[#ecab00]/0 group-hover:bg-[#ecab00]/20 transition-colors duration-500 z-10" />
          <img src={images[1].url} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Agency Visit" />
          
          {/* Glowing Play Button on Hover */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#ecab00] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 shadow-[0_0_30px_rgba(236,171,0,0.5)]">
            <Play fill="currentColor" size={24} className="ml-1" />
          </div>
        </div>
        
        {/* Top Right (Square-ish, Brand Theme) */}
        <div className="col-span-5 relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-[#ecab00] shadow-sm flex flex-col items-center justify-center text-center p-4 border border-[#ecab00]/20 cursor-pointer hover:shadow-[0_10px_30px_-10px_rgba(236,171,0,0.6)] transition-all">
          <img src={images[2].url} loading="lazy" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-30 transition-transform duration-[8s] group-hover:scale-110" alt="Workshops" />
          <Instagram size={32} className="text-[#0A0F1C] mb-2 relative z-10 drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
          <p className="text-[#0A0F1C] font-black text-[13px] md:text-[15px] leading-tight relative z-10 uppercase tracking-wide">Follow our <br/> Journey</p>
        </div>
      </div>

      {/* ── Bottom Row ── */}
      <div className="grid grid-cols-12 gap-3 md:gap-4">
        {/* Bottom Left (Square-ish, Grayscale to Color Reveal) */}
        <div className="col-span-5 relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0F1C] shadow-sm border border-gray-100">
          <img src={images[3].url} loading="lazy" className="w-full h-full object-cover grayscale-[0.9] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" alt="Socials" />
        </div>
        
        {/* Bottom Right (Wider) */}
        <div className="col-span-7 relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] shadow-sm border border-gray-100 cursor-pointer">
          <img src={images[4].url} loading="lazy" className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" alt="Team Huddle" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0F1C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white font-black text-[16px] md:text-[18px] drop-shadow-md">Masterclasses</p>
          </div>
          
          <div className="absolute top-4 right-4 md:top-5 md:right-5 z-20">
            <div className="bg-white/90 backdrop-blur-sm p-2.5 rounded-full text-[#0A0F1C] shadow-lg group-hover:bg-[#ecab00] group-hover:text-[#0A0F1C] transition-colors duration-300">
              <ArrowUpRight size={20} strokeWidth={2.5} className="group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* ════ Right Feature (Tall, Text Overlay) ════ */}
    <div className="w-[200px] md:w-[260px] lg:w-[300px] h-full relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-[#0A0F1C] shadow-sm border border-gray-100">
      <img src={images[5].url} loading="lazy" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-90" alt="Graduation" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-transform duration-500 group-hover:-translate-y-2">
        <p className="text-[#ecab00] font-black text-[11px] uppercase tracking-[0.2em] mb-3">Graduation</p>
        <p className="text-white italic text-[18px] md:text-[22px] leading-snug drop-shadow-lg" style={{ fontFamily: "'Lora', serif" }}>
          "Where education meets celebration."
        </p>
      </div>
    </div>

  </div>
);

export default function InstitutionCampus() {
  // Stable Unsplash image links that won't break
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1523240715639-963c9ad08a6c?q=80&w=800&auto=format&fit=crop" },
    { id: 2, url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" },
    { id: 3, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" },
    { id: 4, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" },
    { id: 5, url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" },
    { id: 6, url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop" },
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
      // Changed from #FCFAF2 to plain bg-white
      className="relative bg-white py-16 lg:py-24 overflow-hidden selection:bg-[#ecab00] selection:text-[#0A0F1C]"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      
      {/* ── HEADER AREA ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mb-12 lg:mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ecab00]/30 bg-[#ecab00]/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#ecab00] animate-pulse" />
            <span className="font-bold text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-[#ecab00]">
              Campus Culture
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            {/* Exactly 46px on desktop */}
            <h2 className="font-black text-[2.2rem] sm:text-[3rem] lg:text-[46px] leading-[1.1] tracking-tight text-[#0A0F1C]">
              Life <span className="font-medium lowercase text-[#ecab00] drop-shadow-sm" style={{ fontFamily: "'Lora', serif", fontStyle: 'italic' }}> At </span> <br className="hidden sm:block" />
              Operating Media.
            </h2>
            <p className="max-w-md text-gray-600 font-medium text-[15px] md:text-[16px] leading-relaxed border-l-[3px] border-[#ecab00] pl-5 lg:pb-2">
              Student life is anything but ordinary. From surprise agency visits to vibrant celebrations, every moment is an experience.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── INFINITE MOVING BENTO TRACK ── */}
      <div className="relative w-full overflow-hidden flex flex-col group py-4">
        
        {/* Edge Fade Masks adjusted for Pure White background */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* The Scrolling Track (Pauses on hover for usability) */}
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
          animation: marquee 45s linear infinite;
        }
        /* Make it faster on mobile so it doesn't feel sluggish */
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 25s; }
        }
      `}</style>
      
    </section>
  );
}