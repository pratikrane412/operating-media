import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award } from 'lucide-react';

// ── Added 2 new logos (Microsoft Ads & Google Analytics) ──
const globalPartners = [
  { name: "Google Ads", url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
  { name: "Meta Blueprint", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Microsoft Ads", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
];

export default function CertificationSection() {
  return (
    <section
      className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#0A0F1C] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-[#0A0F1C] overflow-hidden"
    >
      {/* ── Background Subtle Grid & Glow for Dark Theme ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#ECAB00]/15 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#2563eb]/15 blur-[120px] animate-pulse-slow pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ── SPLIT GRID LAYOUT ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: TEXT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            {/* Eyebrow Badge (Adapted for Dark Mode) */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563eb]/15 border border-[#2563eb]/30 mb-6">
              <ShieldCheck size={16} className="text-[#3b82f6]" />
              <span className="font-bold text-[11px] md:text-xs text-[#3b82f6] uppercase tracking-[0.2em]">
                Industry Recognized
              </span>
            </div>

            {/* Main Heading (White Text for Dark Theme) */}
            <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-white leading-[1.1] tracking-tight mb-6">
              Get Certified. <br />
              <span className="relative inline-block text-[#ECAB00]">
                Lead the Industry.
                {/* Underline Effect */}
                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
                </svg>
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-5 text-gray-300 text-[16px] md:text-[18px] font-medium leading-relaxed max-w-xl mb-10">
              <p>
                Operating Media's Masters Program is meticulously designed to ensure
                you don't just hold a paper, but a{' '}
                <span className="text-white font-bold">prestigious credential</span>{' '}
                valued by elite digital agencies.
              </p>
              <p>
                Upon completion, you earn the{' '}
                <span className="text-white font-bold border-b-2 border-[#ECAB00]">
                  Advanced Master's Certification
                </span>
                . Our curriculum aligns with global standards, making your profile stand out in any interview.
              </p>
            </div>

            {/* ── NAVY BLUE BOX: Global Certifications ── */}
            <div className="relative overflow-hidden bg-[#131B2F] rounded-[1.5rem] p-6 lg:p-8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10">
              {/* Inner Box Glow */}
              <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] bg-[#ECAB00]/20 rounded-full blur-[50px] pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <Award className="text-[#ECAB00]" size={24} />
                  <p className="text-[12px] md:text-[13px] text-[#ECAB00] uppercase font-black tracking-[0.2em]">
                    Preparation for Global Exams
                  </p>
                </div>
                
                {/* Logos Grid */}
                <div className="flex flex-wrap gap-3">
                  {globalPartners.map((partner, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center bg-white px-4 py-3 rounded-xl shadow-sm hover:shadow-[0_5px_15px_rgba(236,171,0,0.2)] transition-all duration-300 hover:-translate-y-1 group cursor-default"
                      title={partner.name}
                    >
                      <img 
                        src={partner.url} 
                        alt={partner.name} 
                        className="h-5 md:h-6 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </motion.div>

          {/* ── RIGHT: FLOATING CERTIFICATES ── */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Center Background Glow for certificates */}
            <div className="absolute w-[400px] h-[400px] bg-[#2563eb]/20 rounded-full blur-[80px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 relative z-10 w-full max-w-[600px]">
              
              {/* Diploma Card (Floats Up & Down) */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="bg-white p-3 md:p-4 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 w-full sm:w-1/2 z-20 group transform rotate-[-2deg] hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500"
              >
                <div className="overflow-hidden rounded-xl border border-gray-100 bg-[#fdfdfd] p-1 shadow-inner relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0F1C]/5 to-transparent pointer-events-none" />
                  <img
                    src="https://www.operatingmedia.com/wp-content/uploads/2024/06/OM-Certificate-New-724x1024.png"
                    alt="Diploma Certificate"
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 px-2 pb-2 text-center">
                  <p className="text-[10px] md:text-[11px] uppercase text-[#2563eb] font-bold tracking-[0.2em] mb-1">
                    Outcome 01
                  </p>
                  <p className="text-[#0f172a] text-[15px] md:text-[16px] font-black">
                    Professional Diploma
                  </p>
                </div>
              </motion.div>

              {/* Master's Card (Floats Down & Up - delayed) */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="bg-white p-3 md:p-4 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 w-full sm:w-1/2 sm:mt-16 z-10 group transform rotate-[3deg] hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500"
              >
                <div className="overflow-hidden rounded-xl border border-gray-100 bg-[#fdfdfd] p-1 shadow-inner relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#ECAB00]/10 to-transparent pointer-events-none" />
                  <img
                    src="https://www.operatingmedia.com/wp-content/uploads/2024/06/Om-Certificate-Masters-724x1024.png"
                    alt="Master's Certificate"
                    className="w-full h-auto object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 px-2 pb-2 text-center">
                  <p className="text-[10px] md:text-[11px] uppercase text-[#ECAB00] font-bold tracking-[0.2em] mb-1">
                    Outcome 02
                  </p>
                  <p className="text-[#0f172a] text-[15px] md:text-[16px] font-black">
                    Master's Designation
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>

      {/* ── Custom Pulse Animation ── */}
      <style>{`
        .animate-pulse-slow { 
          animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; 
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}