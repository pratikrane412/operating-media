import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

// ── Smooth Scroll Reveal Animation Component ──
function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   LOGOS DATA (Fixed Broken Links - Only Stable SVGs)
═══════════════════════════════════════════════════════════ */
const ROW_1 = [
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "LinkedIn", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
  { name: "Airbnb", url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  { name: "Oyo", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_Logo.svg" },
  { name: "Paytm", url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" },
  { name: "MakeMyTrip", url: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Makemytrip_logo.svg" },
];

const ROW_2 = [
  { name: "Ogilvy", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ogilvy_logo.svg" },
  { name: "GroupM", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/GroupM_logo.svg" },
  { name: "WPP", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/WPP_Logo.svg" },
  { name: "Publicis", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Publicis_Groupe_logo.svg" },
  { name: "Dentsu", url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Dentsu_logo.svg" },
  { name: "Havas", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Havas_logo.svg" },
  { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg" },
  { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
];

const ROW_3 = [
  { name: "ICICI Bank", url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  { name: "HDFC Bank", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "Colgate", url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Colgate-Palmolive_logo.svg" },
  { name: "Godrej", url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Godrej_logo.svg" },
  { name: "Marico", url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Marico_Logo.svg" },
  { name: "Bajaj", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bajaj_Auto_Logo.svg" },
  { name: "Jio", url: "https://upload.wikimedia.org/wikipedia/commons/8/83/Jio_logo.svg" },
  { name: "Airtel", url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Bharti_Airtel_logo.svg" },
];

/* ═══════════════════════════════════════════════════════════
   LOGO CARD
═══════════════════════════════════════════════════════════ */
function LogoCard({ logo }) {
  return (
    <div className="shrink-0 group cursor-default flex items-center justify-center bg-white rounded-2xl w-[140px] md:w-[170px] h-[64px] md:h-[76px] border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-[#ecab00]/40 hover:shadow-[0_10px_30px_rgba(236,171,0,0.15)] hover:-translate-y-1 transition-all duration-300 px-6">
      <img
        src={logo.url}
        alt={logo.name}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling?.classList.remove("hidden");
        }}
        // Light theme setting: Grayscale by default, color on hover
        className="max-h-[30px] max-w-full w-auto h-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
      />
      <span className="hidden text-center leading-tight font-bold text-[13px] text-gray-500 group-hover:text-gray-900 transition-colors">
        {logo.name}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MARQUEE ROW
═══════════════════════════════════════════════════════════ */
function MarqueeRow({ logos, direction = "left", duration = 40 }) {
  const isLeft = direction === "left";
  return (
    <div className="flex overflow-hidden select-none py-2 w-full hover:[&>div]:![animation-play-state:paused]">
      <div 
        className={`flex gap-4 md:gap-5 shrink-0 items-center w-max ${isLeft ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <LogoCard key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function HiringPartners() {

  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    // Background updated to #FCFAF2, Spacing reduced to py-12 lg:py-16
    <section className="relative bg-[#FCFAF2] overflow-hidden py-12 lg:py-16 selection:bg-[#ecab00] selection:text-[#0A0F1C]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
      
      {/* ── Subtle Background Pattern ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Glow Orbs matched to Theme */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] rounded-full bg-[#ecab00]/15 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[#ecab00]/10 blur-[120px] pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* ── Header & Stats Area ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mb-10 lg:mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-10">

          {/* Left Text Area */}
          <FadeUp delay={0} className="w-full lg:w-[50%]">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ecab00]/30 bg-[#ecab00]/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#ecab00] animate-pulse" />
              <span className="font-bold text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-[#ecab00]">
                Placement Network
              </span>
            </div>

            {/* Exactly 46px on Desktop, Dark Gray Text */}
            <h2 className="font-black text-[2.2rem] sm:text-[2.8rem] lg:text-[46px] leading-[1.1] tracking-tight text-gray-900 mb-5">
              Trusted by <br className="hidden sm:block" />
              <span className="text-[#ecab00] relative inline-block">
                Top Brands & Agencies
              </span>
            </h2>

            <p className="font-medium text-[16px] md:text-[18px] text-gray-600 leading-relaxed max-w-lg">
              Join 16,000+ successful alumni placed at India's leading agencies, global brands, and fastest-growing startups.
            </p>
          </FadeUp>

          {/* Right Area: Premium Stats Box (Light Theme) */}
          <FadeUp delay={0.2} className="w-full lg:w-auto">
            <div className="relative flex flex-wrap sm:flex-nowrap justify-between gap-8 sm:gap-12 bg-white px-8 sm:px-10 py-8 rounded-[2rem] border border-gray-100 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] overflow-hidden">
              
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ecab00]/5 to-transparent opacity-50" />

              {[
                { value: "250+", label: "Hiring Partners" },
                { value: "16k+", label: "Alumni Placed" },
                { value: "96%", label: "Placement Rate" },
              ].map((stat, idx) => (
                <div key={stat.label} className={`relative z-10 flex flex-col text-center ${idx !== 2 ? 'sm:border-r border-gray-100 sm:pr-12' : ''}`}>
                  <span className="font-black text-[32px] md:text-[38px] leading-none tracking-tight text-[#ecab00] mb-2 drop-shadow-sm">
                    {stat.value}
                  </span>
                  <span className="font-bold text-[11px] md:text-[13px] text-gray-500 uppercase tracking-widest whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>

      {/* ── Marquee Section ── */}
      <div className="relative z-10 flex flex-col gap-4 md:gap-5 w-full">
        {/* Edge Fade Masks for smooth blend with #FCFAF2 Background */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 z-20 pointer-events-none bg-gradient-to-r from-[#FCFAF2] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 z-20 pointer-events-none bg-gradient-to-l from-[#FCFAF2] to-transparent" />

        {/* 3 Infinite Moving Rows with different speeds */}
        <MarqueeRow logos={ROW_1} direction="left" duration={55} />
        <MarqueeRow logos={ROW_2} direction="right" duration={65} />
        <MarqueeRow logos={ROW_3} direction="left" duration={60} />
      </div>

      {/* ── Custom Animations ── */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marqueeLeft linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}