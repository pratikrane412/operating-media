import React from 'react';
import { motion } from 'framer-motion';

// ── AI TOOLS ──
const aiTools = [
  { name: "AiSensy", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-111.png" },
  { name: "Predis.ai", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-419.png" },
  { name: "Hootsuite", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-215.png" },
  { name: "Copy.ai", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-217.png" },
  { name: "Gemini", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-213.png" },
  { name: "Presentations.ai", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-216.png" },
  { name: "PlayHT", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-414.png" },
  { name: "Bing", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-415.png" },
  { name: "Bard", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-418.png" },
  { name: "Lumen5", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-417.png" },
  { name: "ChatGPT", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-153.png" },
  { name: "HeyGen", src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-416.png" },
];

// ── MARKETING TOOLS ──
const dmTools = [
  { name: "SimilarWeb", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-89-6.png" },
  { name: "AliExpress", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-134.png" },
  { name: "Leadpages", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-99.png" },
  { name: "Amazon", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-142.png" },
  { name: "Wistia", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-140.png" },
  { name: "Google Console", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-94-1.png" },
  { name: "CJ Dropship", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-132.png" },
  { name: "Canva", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-114.png" },
  { name: "Vimeo", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-135.png" },
  { name: "Kapwing", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-136.png" },
  { name: "Zapier", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-139.png" },
  { name: "Audacity", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-138.png" },
  { name: "Zoho", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-148.png" },
  { name: "Flipkart", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-155.png" },
  { name: "Upwork", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-128.png" },
  { name: "Freelancer", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-127.png" },
  { name: "Fiverr", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-126.png" },
  { name: "WebEngage", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-124-1.png" },
  { name: "Oberlo", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-133.png" },
  { name: "Elementor", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-85-1.png" },
  { name: "Photopea", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-116.png" },
  { name: "Adobe Express", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-115.png" },
  { name: "Clan Connect", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-120.png" },
  { name: "Outreach", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-118.png" },
  { name: "Razorpay", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-143.png" },
  { name: "Prezi", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-151.png" },
  { name: "Instapage", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-108.png" },
  { name: "OptimizePress", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-98.png" },
  { name: "Jasper", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-97.png" },
  { name: "H2C Ad Network", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-154.png" },
  { name: "YouTube", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-100.png" },
  { name: "Jotform", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-121.png" },
  { name: "ClickFunnels", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-129.png" },
  { name: "Mixpanel", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-117.png" },
  { name: "Zoom", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-92.png" },
  { name: "Google Analytics", src: "/images/Group-145.png" },
];

// Balance tools into two rows for sliders
const row1Tools = [...aiTools, ...dmTools.slice(0, 12)];
const row2Tools = [...dmTools.slice(12)];

// ── Single Logo Card Component ──
const LogoCard = ({ tool }) => (
  <div className="w-[140px] md:w-[180px] h-[70px] md:h-[85px] shrink-0 bg-white border border-gray-200 rounded-2xl flex items-center justify-center p-4 shadow-sm hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.2)] hover:border-[#2563eb]/40 transition-all duration-300 group">
    <img
      src={tool.src}
      alt={tool.name}
      // Removed grayscale filter, logo is full color normally. Kept hover scale for effect.
      className="max-w-full max-h-[30px] md:max-h-[40px] object-contain transition-all duration-300 group-hover:scale-110"
      loading="lazy"
    />
  </div>
);

// ── MAIN EXPORT COMPONENT ──
const ToolsTicker = () => {
  return (
    <section className="relative w-full py-10 md:py-[40px] lg:py-[50px] bg-[#fcfaf2] font-['Satoshi',sans-serif] overflow-hidden">
      
      {/* Subtle Glow behind the slider (Background Lines removed as requested) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#ECAB00]/10 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-0">

        {/* ── HEADER ── */}
        <div className="text-center mb-8 md:mb-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
              <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                Premium Access
              </span>
            </div>

            <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-4">
              Master <span className="relative inline-block text-[#ECAB00]">
                120+ Industry
                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
                </svg>
              </span> Leading Tools
            </h2>

            <p className="font-medium text-[16px] md:text-[18px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Get hands-on experience with the exact software stack used by top global agencies and AI-driven companies.
            </p>
          </motion.div>
        </div>

        {/* ── INFINITE SLIDERS ── */}
        <div className="flex flex-col gap-4 md:gap-5 mask-edges">
          
          {/* Slider 1: Moves Left */}
          <div className="flex overflow-hidden relative">
            <div className="flex gap-4 md:gap-5 animate-marquee-left w-max">
              {[...row1Tools, ...row1Tools].map((tool, idx) => (
                <LogoCard key={`row1-${idx}`} tool={tool} />
              ))}
            </div>
          </div>

          {/* Slider 2: Moves Right */}
          <div className="flex overflow-hidden relative">
            <div className="flex gap-4 md:gap-5 animate-marquee-right w-max">
              {[...row2Tools, ...row2Tools].map((tool, idx) => (
                <LogoCard key={`row2-${idx}`} tool={tool} />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ── CUSTOM ANIMATIONS ── */}
      <style>{`
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .animate-marquee-left {
          animation: scrollLeft 40s linear infinite;
        }

        .animate-marquee-right {
          animation: scrollRight 45s linear infinite; /* Slightly different speed */
        }

        /* Pause on Hover */
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ToolsTicker;