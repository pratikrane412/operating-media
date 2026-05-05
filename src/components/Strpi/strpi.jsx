import React, { useEffect, useState } from "react";

export default function FullWidthInstituteStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Animation trigger on mount
    setTimeout(() => setMounted(true), 100);

    // Inject Satoshi Font
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // 5 Key Features Data
  const featuresData = [
    {
      icon: "🎯",
      title: "Micro Batches (10 – 12 Students Only)",
      desc: "Get personal attention (not crowded classrooms)"
    },
    {
      icon: "🧠",
      title: "Industry Expert Trainers (12+ Years Experience)",
      desc: "Learn what actually works in real jobs"
    },
    {
      icon: "🛠",
      title: "100% Practical Training",
      desc: "No theory overload—only real execution"
    },
    {
      icon: "📈",
      title: "Placement Assistance + Interview Training",
      desc: "Resume + mock interviews included"
    },
    {
      icon: "🔁",
      title: "LMS Access + Backup Lectures",
      desc: "Never miss a concept"
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
            Why 16,000+ <span className="text-[#ECAB00]">Students</span> Trust Operating Media
          </h2>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
            Join our community of students who transformed their careers with advanced AI-powered courses, expert-led training, and guaranteed placement support.
          </p>
        </div>

        {/* --- 5 KEY FEATURES SECTION --- */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-10">
          {featuresData.map((feature, index) => (
            <div 
              key={index}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-[#ECAB00]/50 hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              {/* Icon */}
              <div className="text-2xl md:text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                {feature.icon}
              </div>
              
              {/* Text */}
              <div className="flex flex-col text-left">
                <h4 className="text-white font-bold text-[15px] md:text-[16px] leading-snug mb-1.5 group-hover:text-[#ECAB00] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-white/60 text-[13px] md:text-[14px] leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>
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