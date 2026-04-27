import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

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
   LOGOS DATA
═══════════════════════════════════════════════════════════ */
const ROW_1 = [
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "LinkedIn", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" },
  { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  { name: "Swiggy", url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.svg" },
  { name: "Zomato", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
  { name: "Flipkart", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flipkart_logo.svg" },
  { name: "Myntra", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Myntra_logo.svg" },
  { name: "Puma", url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg" },
  { name: "Airtel", url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Bharti_Airtel_logo.svg" },
];

const ROW_2 = [
  { name: "ICICI Bank", url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  { name: "HDFC Bank", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "Colgate", url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Colgate-Palmolive_logo.svg" },
  { name: "Godrej", url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Godrej_logo.svg" },
  { name: "Marico", url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Marico_Logo.svg" },
  { name: "Bajaj", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bajaj_Auto_Logo.svg" },
  { name: "Jio", url: "https://upload.wikimedia.org/wikipedia/commons/8/83/Jio_logo.svg" },
  { name: "Naukri", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Naukri.com_logo_with_tagline.svg" },
  { name: "Hotstar", url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_Hotstar_new_logo.svg" },
  { name: "Ogilvy", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ogilvy_logo.svg" },
  { name: "GroupM", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/GroupM_logo.svg" },
  { name: "WPP", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/WPP_Logo.svg" },
];

const ROW_3 = [
  { name: "Publicis", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Publicis_Groupe_logo.svg" },
  { name: "Dentsu", url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Dentsu_logo.svg" },
  { name: "Havas", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Havas_logo.svg" },
  { name: "Nykaa", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Nykaa_Logo.svg" },
  { name: "boAt", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Boat_lifestyle_logo.svg/1280px-Boat_lifestyle_logo.svg.png" },
  { name: "Unilever", url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Unilever_logo.svg" },
  { name: "McDonald's", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg" },
  { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Razorpay", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" },
  { name: "PhonePe", url: "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" },
];

/* ═══════════════════════════════════════════════════════════
   LOGO CARD
═══════════════════════════════════════════════════════════ */
function LogoCard({ logo }) {
  return (
    <div className="shrink-0 group cursor-default flex items-center justify-center bg-white rounded-2xl w-[140px] md:w-[160px] h-[64px] md:h-[72px] border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_20px_rgba(249,115,22,0.15)] hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 px-6">
      <img
        src={logo.url}
        alt={logo.name}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling?.classList.remove("hidden");
        }}
        className="max-h-[28px] max-w-full w-auto h-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out"
      />
      <span className="hidden text-center leading-tight font-bold text-[12px] text-gray-400">
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
    <div className="flex overflow-hidden select-none py-1.5 w-full hover:[&>div]:![animation-play-state:paused]">
      <div 
        className={`flex gap-3 md:gap-4 shrink-0 items-center w-max ${isLeft ? 'animate-marquee-left' : 'animate-marquee-right'}`}
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
    <section className="relative bg-[#FAFAFA] overflow-hidden py-20 lg:py-24 font-sans selection:bg-orange-500 selection:text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>
      
      {/* ── Subtle Dot Grid ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at center, #000 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />

      {/* ── Glow Orbs ── */}
      <div className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-orange-400/20 to-transparent blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-amber-300/20 to-transparent blur-[100px] pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* ── Header ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">

          {/* Left Area */}
          <FadeUp delay={0} className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-[2px] w-10 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
              <span className="font-bold text-[12px] uppercase tracking-[0.2em] text-orange-600">
                Placement Network
              </span>
            </div>

            <h2 className="font-black text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1.05] tracking-tight text-gray-900 mb-4">
              Trusted by <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 relative inline-block">
                Top Brands
                <svg className="absolute w-full h-[12px] -bottom-1 left-0 text-amber-400 opacity-50" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>

            <p className="font-medium text-[16px] md:text-[18px] text-gray-500 max-w-[500px] leading-relaxed">
              Join 11,000+ successful alumni placed at India's leading agencies, global brands, and fastest-growing startups.
            </p>
          </FadeUp>

          {/* Right Area: Stats Row */}
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12 bg-white px-8 py-6 rounded-3xl border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]">
              {[
                { value: "400+", label: "Hiring Partners", color: "text-orange-500" },
                { value: "11k+", label: "Alumni Placed", color: "text-amber-500" },
                { value: "89%", label: "Placement Rate", color: "text-green-500" },
              ].map((stat, idx) => (
                <div key={stat.label} className={`flex flex-col text-center ${idx !== 2 ? 'border-r border-gray-100 pr-8 lg:pr-12' : ''}`}>
                  <span className={`font-black text-[28px] md:text-[34px] leading-none tracking-tight ${stat.color} mb-1.5`}>
                    {stat.value}
                  </span>
                  <span className="font-bold text-[11px] md:text-[12px] text-gray-500 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </div>

      {/* ── Marquee Section ── */}
      <div className="relative z-10 flex flex-col gap-3 md:gap-4 w-full">
        {/* Edge Fade Masks for smooth blend */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 z-20 pointer-events-none bg-gradient-to-r from-[#FAFAFA] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 z-20 pointer-events-none bg-gradient-to-l from-[#FAFAFA] to-transparent" />

        {/* 3 Infinite Moving Rows */}
        <MarqueeRow logos={ROW_1} direction="left" duration={50} />
        <MarqueeRow logos={ROW_2} direction="right" duration={60} />
        <MarqueeRow logos={ROW_3} direction="left" duration={55} />
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