import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileDown, GraduationCap, ArrowRight } from 'lucide-react';

const placementData = [
  { name: "Shekhar Singh", role: "Social Media Marketing", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Shekhar-Singh-1-1.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-802-1.png" },
  { name: "Shahnawaaz Khan", role: "Ads Operation", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Shahnawaaz-Khan.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Hotstar_logo.svg.png" },
  { name: "Ashish Yadav", role: "E-commerce Executive", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-803.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Lumina-Datamatics-Logo-with-TradeMark-and-Registered-Mark-1-1.png" },
  { name: "Amruta Singh", role: "SEO Executive", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Amruta-Singh.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Untitled-design-77-Photoroom-1.png" },
  { name: "Bhavini Dave", role: "Social Media Marketing", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Bhavini.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Ibraine-Registered-Logo-Transparent-2.webp" },
  { name: "Tisha Soni", role: "Social Media Marketing", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Tisha-Soni-2.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-802-1.png" },
  { name: "Akansha Singh", role: "SEO Executive", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Akansha-Singh.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/qtq_95.webp" },
  { name: "Sakina Shaikh", role: "Digital Marketing Intern", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Sakeena.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/webisdom-black.png" },
  { name: "Aryan Pote", role: "Social Media Executive", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Aryan-Pote.png", companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Ibraine-Registered-Logo-Transparent-2.webp" },
];

// Doubled to ensure seamless infinite marquee scrolling
const doubled = [...placementData, ...placementData];

// ── Individual Premium Card Component ──
const StudentCard = ({ item }) => (
  <div className="shrink-0 group cursor-default flex flex-col items-center text-center overflow-hidden rounded-[24px] bg-white border border-gray-100 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(236,171,0,0.2)] hover:border-[#ecab00]/30 transition-all duration-500 w-[260px] md:w-[280px] p-6 pb-8 relative">
    
    {/* Animated Golden Top Border */}
    <div className="absolute top-0 left-0 w-full h-[4px] bg-[#ecab00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

    {/* Subtle Glow Behind Photo */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-[#ecab00] opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-700 pointer-events-none rounded-full" />

    {/* Circular Photo */}
    <div className="relative z-10 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-5 border-[4px] border-white shadow-md group-hover:shadow-[0_10px_20px_-10px_rgba(236,171,0,0.4)] transition-all duration-500">
      <img
        src={item.photo}
        alt={item.name}
        loading="lazy"
        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
      />
    </div>

    {/* Student Info */}
    <div className="relative z-10 flex flex-col items-center gap-1 w-full flex-1">
      <h4 className="text-[18px] md:text-[20px] font-black text-[#0f172a] leading-tight tracking-tight group-hover:text-[#ecab00] transition-colors duration-300">
        {item.name}
      </h4>
      <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-relaxed">
        {item.role} <br />
        <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mt-1 inline-block">at</span>
      </p>

      {/* Company Logo */}
      <div className="mt-4 h-12 flex items-center justify-center w-full">
        <img
          src={item.companyLogo}
          alt="Company"
          loading="lazy"
          className="max-h-8 md:max-h-9 max-w-[130px] object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
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
      className="bg-[#FAFCFF] pt-16 pb-20 overflow-hidden font-sans selection:bg-[#ecab00] selection:text-[#0f172a]"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── Background Subtle Grid ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* ── Header ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
            <GraduationCap size={16} className="text-[#ecab00]" strokeWidth={2.5} />
            <span className="font-bold text-[11px] uppercase tracking-widest text-[#0f172a]">Alumni Success</span>
          </div>

          {/* Fixed 46px Heading on Desktop */}
          <h2 className="font-black text-[32px] md:text-[38px] lg:text-[46px] leading-[1.15] tracking-tight text-[#0f172a]">
            Meet Our <br className="block sm:hidden" />
            <span className="relative inline-block text-[#ecab00]">
              Placed Students.
              {/* Animated Orange Underline */}
              <svg className="absolute w-full h-[8px] -bottom-1 left-0 text-[#ecab00]/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  d="M0 15 Q 50 0 100 15" 
                  fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          
          <p className="mt-5 text-gray-500 font-medium text-[16px] md:text-[18px] max-w-lg leading-relaxed">
            See where our graduates are making an impact. Over 1,600+ success stories and counting.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee Section ── */}
      <div className="w-full relative py-6 z-10">
        {/* Edge Fade Masks for Smooth Scroll Blend Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#FAFCFF] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#FAFCFF] to-transparent z-20 pointer-events-none" />

        {/* The Track (Pauses on Hover, Optimized Speed) */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing">
          <div className="flex gap-6 md:gap-8 px-3 md:px-4">
            {doubled.map((item, i) => (
              <StudentCard key={i} item={item} />
            ))}
          </div>
          <div className="flex gap-6 md:gap-8 px-3 md:px-4" aria-hidden="true">
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
        className="mt-12 flex flex-col items-center justify-center gap-4 px-6 relative z-20"
      >
        <button className="group relative overflow-hidden bg-[#0f172a] text-white px-8 py-4 md:px-10 md:py-4.5 rounded-2xl font-bold text-[15px] md:text-[16px] shadow-[0_10px_20px_rgba(15,23,42,0.15)] hover:shadow-[0_15px_30px_rgba(236,171,0,0.3)] hover:bg-[#ecab00] hover:text-[#0f172a] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3">
          <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shine" />
          <FileDown size={20} className="text-[#ecab00] group-hover:text-[#0f172a] transition-colors" />
          <span className="relative z-10">Download Placements Report</span>
          <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform hidden sm:block" />
        </button>
        
        <p className="text-[11px] md:text-[12px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-2">
          Hired by 100+ Top Companies
        </p>
      </motion.div>

      {/* ── Custom Animations ── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        /* Make it scroll smoothly */
        .animate-marquee {
          animation: marquee 60s linear infinite; 
        }
        /* Mobile speed adjusted to be smooth but readable */
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 40s; }
        }
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 1.5s ease; }
      `}</style>
      
    </section>
  );
}