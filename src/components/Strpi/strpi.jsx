import React, { useEffect, useState } from "react";

export default function FullWidthInstituteStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Animation trigger on mount
    setTimeout(() => setMounted(true), 100);

    // Inject Satoshi Font (Aapka original font)
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const statsData = [
    {
      id: 1,
      num: "30,000",
      symbol: "+",
      text: "Happy students trained & placed!"
    },
    {
      id: 2,
      num: "400",
      symbol: "+",
      text: "Top corporate hiring partners"
    },
    {
      id: 3,
      num: "10",
      symbol: "+",
      text: "Years of educational expertise!"
    }
  ];

  return (
    <section 
      // Pura Edge-to-Edge Dark Navy Blue Background
      className="w-full relative bg-[#0f172a] overflow-hidden py-12 md:py-16 selection:bg-[#ECAB00] selection:text-[#0f172a]"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Subtle Mesh Grid (Tech Vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* 2. Top Centered Golden Glow (Breathing Effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-full pointer-events-none">
        <div className="w-full h-[300px] bg-[radial-gradient(ellipse_at_top,_#ECAB00_0%,_transparent_70%)] opacity-15 animate-pulse-slow blur-[50px]" />
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className={`relative z-10 max-w-[1200px] mx-auto px-6 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* --- TOP HEADING SECTION --- */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-black text-white leading-tight mb-3">
            India's Premium <span className="text-[#ECAB00]">Digital Marketing</span> Institute
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
            Join our community of students who transformed their careers with advanced AI-powered courses, expert-led training, and guaranteed placement support.
          </p>
        </div>

        {/* --- STATS GRID SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 pt-8 md:pt-10">
          {statsData.map((stat, index) => (
            <div 
              key={stat.id}
              className={`group relative flex flex-col items-center text-center py-6 md:py-2
                /* Divider Lines: Mobile pe horizontal, Desktop pe vertical */
                ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''} 
              `}
            >
              {/* Number & Symbol */}
              <h3 className="font-black text-[44px] md:text-[52px] text-[#ECAB00] leading-none mb-3 flex items-center transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_20px_rgba(236,171,0,0.5)] cursor-default">
                {stat.num}
                <span className="ml-1">{stat.symbol}</span>
              </h3>
              
              {/* Description */}
              <p className="font-medium text-[14px] md:text-[15px] text-white/80 max-w-[180px] transition-colors duration-300 group-hover:text-white">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* --- CUSTOM CSS FOR ANIMATIONS --- */}
      <style>{`
        .animate-pulse-slow {
          animation: pulseGlow 5s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}