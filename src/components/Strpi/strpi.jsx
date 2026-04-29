import React, { useEffect } from "react";

// --- Pixel-Perfect Laptop User Icon (Matched from Image) ---
const IconLaptopUser = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0A0F1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {/* Laptop Screen */}
    <rect x="4" y="5" width="16" height="11" rx="1.5" />
    {/* Laptop Base */}
    <path d="M2 20h20" />
    <path d="M4 16v4" />
    <path d="M20 16v4" />
    {/* User Head */}
    <circle cx="12" cy="10" r="2" />
    {/* User Shoulders */}
    <path d="M9 16v-1a3 3 0 0 1 6 0v1" />
  </svg>
);

// --- Data Array with Exact Colors from Image ---
const statsData = [
  {
    id: 1,
    num: "11,000+",
    label: "Professionals Trained",
    colorStr: "#FF7A00", // Orange
    iconBg: "bg-[#FF7A00]",
    gradient: "from-[#FF7A00]/50 via-transparent to-transparent",
    gradientHover: "group-hover:from-[#FF7A00]",
    glow: "group-hover:shadow-[0_0_40px_-15px_rgba(255,122,0,0.5)]",
  },
  {
    id: 2,
    num: "1200+",
    label: "Successful Batches",
    colorStr: "#FFB800", // Yellow-Orange
    iconBg: "bg-[#FFB800]",
    gradient: "from-[#FFB800]/50 via-transparent to-transparent",
    gradientHover: "group-hover:from-[#FFB800]",
    glow: "group-hover:shadow-[0_0_40px_-15px_rgba(255,184,0,0.5)]",
  },
  {
    id: 3,
    num: "75+",
    label: "Corporate Seminars",
    colorStr: "#D4FF00", // Lime/Neon Yellow
    iconBg: "bg-[#D4FF00]",
    gradient: "from-[#D4FF00]/40 via-transparent to-transparent",
    gradientHover: "group-hover:from-[#D4FF00]",
    glow: "group-hover:shadow-[0_0_40px_-15px_rgba(212,255,0,0.4)]",
  },
  {
    id: 4,
    num: "4.8+",
    label: "Student Rating",
    colorStr: "#52FF00", // Bright Green
    iconBg: "bg-[#52FF00]",
    gradient: "from-[#52FF00]/40 via-transparent to-transparent",
    gradientHover: "group-hover:from-[#52FF00]",
    glow: "group-hover:shadow-[0_0_40px_-15px_rgba(82,255,0,0.4)]",
  }
];

export default function GlassmorphicStats() {
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
    <section 
      // Very dark background matching the image aesthetic
      className="w-full relative z-30 py-20 bg-[#090C15] overflow-hidden"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* Subtle Background Mesh Gradient for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ffffff05] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Grid: 1 col (Mobile) -> 2 cols (Tablet) -> 4 cols (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          
          {statsData.map((stat) => (
            <div 
              key={stat.id}
              className="group relative cursor-default"
            >
              {/* 
                Fading Border Wrapper 
                Yeh trick image jaisa exact "top-left se fade hota hua border" banata hai
              */}
              <div 
                className={`relative p-[1.5px] rounded-2xl bg-gradient-to-br ${stat.gradient} ${stat.gradientHover} transition-all duration-700 ease-out h-full ${stat.glow}`}
              >
                {/* Inner Card Solid Dark Background */}
                <div className="bg-[#0D121E]/90 backdrop-blur-xl rounded-[15px] h-full p-6 xl:p-8 flex items-center gap-5 relative overflow-hidden">
                  
                  {/* Subtle hover background glow inside the card */}
                  <div 
                    className="absolute -left-10 -top-10 w-32 h-32 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20"
                    style={{ backgroundColor: stat.colorStr }}
                  />

                  {/* Colored Icon Circle */}
                  <div className="relative z-10">
                    <div 
                      className={`w-14 h-14 xl:w-16 xl:h-16 rounded-full ${stat.iconBg} flex items-center justify-center transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3`}
                    >
                      {/* Icon inside the circle */}
                      <span className="transform transition-transform duration-500 group-hover:scale-110">
                        <IconLaptopUser />
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 flex flex-col justify-center">
                    <h3 className="font-black text-[28px] xl:text-[34px] leading-tight text-white tracking-tight flex items-center drop-shadow-md">
                      {stat.num.replace('+', '')}
                      {/* Animated '+' Sign */}
                      <span 
                        className="ml-1 inline-block transform transition-transform duration-700 group-hover:scale-125"
                        style={{ color: stat.colorStr }}
                      >
                        +
                      </span>
                    </h3>
                    <p className="font-medium text-[14px] xl:text-[15px] text-white/70 leading-snug mt-1 transition-colors duration-300 group-hover:text-white/90">
                      {stat.label}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}