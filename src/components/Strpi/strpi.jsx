import React, { useEffect } from "react";

// --- Icons (Pixel Perfect Recreations) ---
const IconBook = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const IconGrid = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);
const IconArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Strpi() {
  
  useEffect(() => {
    // Inject Satoshi Font dynamically just in case it's not loaded
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section 
      className="w-full relative z-30 font-sans selection:bg-[#0A0F1C] selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* 
        Responsive Grid: 
        1 column on mobile -> 2 columns on tablet -> 4 columns on Desktop (Edge-to-Edge)
      */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-y border-gray-100">
        
        {/* ── CARD 1: ORANGE ── */}
        <div className="group relative bg-[#FF6B00] p-8 lg:p-10 xl:p-12 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-[#E66000] cursor-default">
          {/* Subtle Hover Light Effect */}
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-white opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none" />
          
          <div className="flex items-start justify-between mb-16 lg:mb-12 relative z-10">
            {/* Book Icon with Frosted Glass Effect */}
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-sm transition-transform duration-500 group-hover:scale-110">
              <IconBook />
            </div>
            {/* Arrow Button */}
            <button className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 transition-all duration-300 group-hover:bg-white group-hover:text-[#FF6B00] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-md">
              <IconArrowUpRight />
            </button>
          </div>
          
          <div className="relative z-10">
            <h3 className="font-bold text-[24px] text-white tracking-tight mb-3">Easy to Learn</h3>
            <p className="font-medium text-[16px] text-white/90 leading-relaxed max-w-[280px]">
              Simple navigation and engaging content — stress-free learning.
            </p>
          </div>
        </div>

        {/* ── CARD 2: WHITE ── */}
        <div className="group relative bg-white p-8 lg:p-10 xl:p-12 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center gap-6 transition-all duration-300 hover:bg-[#FAFAFA] cursor-pointer overflow-hidden">
          {/* Animated Bottom Border on Hover */}
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FF6B00] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          
          <p className="font-bold text-[19px] lg:text-[21px] text-[#0A0A0A] leading-[1.5] tracking-tight">
            Your study journey gets easier and guided with top educators
          </p>
          <div className="inline-flex items-center gap-2 font-bold text-[15px] text-[#FF6B00] transition-all">
            Learn More 
            <span className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
              <IconArrowUpRight />
            </span>
          </div>
        </div>

        {/* ── CARD 3: WHITE ── */}
        <div className="group relative bg-white p-8 lg:p-10 xl:p-12 border-b md:border-b-0 lg:border-r border-gray-100 flex flex-col justify-center gap-6 transition-all duration-300 hover:bg-[#FAFAFA] cursor-pointer overflow-hidden">
          {/* Animated Bottom Border on Hover */}
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#FF6B00] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
          
          <p className="font-bold text-[19px] lg:text-[21px] text-[#0A0A0A] leading-[1.5] tracking-tight">
            Earn global certifications from Google, Meta & HubSpot
          </p>
          <div className="inline-flex items-center gap-2 font-bold text-[15px] text-[#FF6B00] transition-all">
            Get Certified 
            <span className="transform transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
              <IconArrowUpRight />
            </span>
          </div>
        </div>

        {/* ── CARD 4: DARK NAVY/BLACK ── */}
        <div className="group relative bg-[#0A0F1C] p-8 lg:p-10 xl:p-12 flex flex-col justify-center overflow-hidden cursor-default">
          {/* High-End Tech Grid Background (Faint) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <div className="relative z-10 flex items-center gap-2.5 mb-5 text-[#8A94A6]">
            <IconGrid />
            <span className="font-bold text-[12px] uppercase tracking-[0.18em]">Total Courses</span>
          </div>
          
          <div className="relative z-10">
            <p className="font-black text-[56px] lg:text-[68px] leading-none text-white tracking-tighter flex items-center drop-shadow-md">
              1600
              {/* Spinning Plus Animation on Hover */}
              <span className="text-[#FFC107] ml-2 transform transition-all duration-700 ease-in-out inline-block group-hover:rotate-180 group-hover:scale-110 drop-shadow-lg">
                +
              </span>
            </p>
            <p className="font-bold text-[12px] uppercase text-[#8A94A6] mt-4 tracking-[0.18em]">
              Students Trained
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}