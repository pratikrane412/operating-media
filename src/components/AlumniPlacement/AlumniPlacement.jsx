import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown, GraduationCap } from 'lucide-react';

// Added a specific 'theme' for each student to give that subtle color glow from the image
const placementData = [
  { name: "Shekhar Singh", role: "Social Media Marketing", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Shekhar-Singh-1-1.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-802-1.png", theme: "from-yellow-100/80 border-yellow-200/50 hover:border-yellow-400 hover:shadow-yellow-500/10" },
  { name: "Shahnawaaz Khan", role: "Ads Operation", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Shahnawaaz-Khan.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Hotstar_logo.svg.png", theme: "from-orange-100/80 border-orange-200/50 hover:border-orange-400 hover:shadow-orange-500/10" },
  { name: "Ashish Yadav", role: "E-commerce Executive", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-803.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Lumina-Datamatics-Logo-with-TradeMark-and-Registered-Mark-1-1.png", theme: "from-green-100/80 border-green-200/50 hover:border-green-400 hover:shadow-green-500/10" },
  { name: "Amruta Singh", role: "SEO Executive", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Amruta-Singh.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Untitled-design-77-Photoroom-1.png", theme: "from-amber-100/80 border-amber-200/50 hover:border-amber-400 hover:shadow-amber-500/10" },
  { name: "Bhavini Dave", role: "Social Media Marketing", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Bhavini.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Ibraine-Registered-Logo-Transparent-2.webp", theme: "from-rose-100/80 border-rose-200/50 hover:border-rose-400 hover:shadow-rose-500/10" },
  { name: "Tisha Soni", role: "Social Media Marketing", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Tisha-Soni-2.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-802-1.png", theme: "from-blue-100/80 border-blue-200/50 hover:border-blue-400 hover:shadow-blue-500/10" },
  { name: "Akansha Singh", role: "SEO Executive", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Akansha-Singh.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/qtq_95.webp", theme: "from-purple-100/80 border-purple-200/50 hover:border-purple-400 hover:shadow-purple-500/10" },
  { name: "Sakina Shaikh", role: "Digital Marketing Intern", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Sakeena.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/webisdom-black.png", theme: "from-emerald-100/80 border-emerald-200/50 hover:border-emerald-400 hover:shadow-emerald-500/10" },
  { name: "Aryan Pote", role: "Social Media Executive", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Aryan-Pote.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Ibraine-Registered-Logo-Transparent-2.webp", theme: "from-cyan-100/80 border-cyan-200/50 hover:border-cyan-400 hover:shadow-cyan-500/10" },
];

const doubled = [...placementData, ...placementData];

// ── Individual Card Component (Redesigned as per new image) ──
const StudentCard = ({ item }) => (
  <div className={`shrink-0 group cursor-default flex flex-col items-center text-center overflow-hidden rounded-[24px] bg-white border-[1.5px] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 w-[260px] md:w-[280px] p-6 relative ${item.theme}`}>
    
    {/* Subtle Gradient Glow at the top (Behind Photo) */}
    <div className={`absolute top-0 left-0 w-full h-[180px] bg-gradient-to-b ${item.theme.split(' ')[0]} to-transparent opacity-60 z-0 pointer-events-none`} />

    {/* Circular Photo */}
    <div className="relative z-10 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-5 border-[4px] border-white shadow-md group-hover:shadow-lg transition-all duration-500">
      <img
        src={item.photo}
        alt={item.name}
        loading="lazy"
        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
      />
    </div>

    {/* Student Info */}
    <div className="relative z-10 flex flex-col items-center gap-1 w-full flex-1">
      <h4 className="text-[18px] md:text-[20px] font-black text-gray-900 leading-tight tracking-tight group-hover:text-orange-500 transition-colors duration-300">
        {item.name}
      </h4>
      <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed">
        {item.role} <br />
        <span className="text-[12px] text-gray-400">at</span>
      </p>

      {/* Company Logo */}
      <div className="mt-4 h-12 flex items-center justify-center w-full">
        <img
          src={item.companyLogo}
          alt="Company"
          loading="lazy"
          className="max-h-8 md:max-h-9 max-w-[130px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  </div>
);

export default function AlumniPlacement() {

  // Inject Satoshi font dynamically
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.setAttribute('data-font', 'satoshi');
      link.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section 
      className="bg-[#FAFAFA] pt-16 pb-20 overflow-hidden font-sans selection:bg-orange-500 selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── Background Detail ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      {/* ── Header ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
            <GraduationCap size={16} className="text-orange-500" />
            <span className="font-bold text-[11px] uppercase tracking-widest text-gray-600">Alumni Success</span>
          </div>

          <h2 className="font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-gray-900">
            Meet Our <br className="block sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Placed Students
            </span>
          </h2>
          
          <p className="mt-4 text-gray-500 font-medium text-[16px] max-w-lg leading-relaxed">
            See where our graduates are making an impact. Over 1,600+ success stories and counting.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee Section (Slowed Down & Spaced Out) ── */}
      <div className="w-full relative py-6">
        {/* Edge Fade Masks for Smooth Scroll Blend Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        {/* The Track (Pauses on Hover, Slowed Speed) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          <div className="flex gap-6 md:gap-8 px-3 md:px-4">
            {doubled.map((item, i) => (
              <StudentCard key={i} item={item} />
            ))}
          </div>
          <div className="flex gap-6 md:gap-8 px-3 md:px-4">
            {doubled.map((item, i) => (
              <StudentCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA Button ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 flex flex-col items-center justify-center gap-3 px-6 relative z-20"
      >
        <button className="group relative overflow-hidden bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-[15px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:bg-black hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
          <span className="absolute inset-0 w-full h-full bg-white/10 -translate-x-full group-hover:animate-shine" />
          <FileDown size={18} className="text-gray-300 group-hover:text-white transition-colors" />
          <span className="relative z-10">Download Placements Report</span>
        </button>
        
        <p className="text-[12px] uppercase tracking-widest text-gray-400 font-bold mt-2">
          Hired by 100+ Top Companies
        </p>
      </motion.div>

      {/* ── Custom Animations ── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        /* Make it scroll much slower */
        .animate-marquee {
          animation: marquee 80s linear infinite; 
        }
        /* Mobile speed adjusted to be smooth but readable */
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 50s; }
        }
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 1.5s ease; }
      `}</style>
      
    </section>
  );
}