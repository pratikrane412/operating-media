import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Rocket, ShieldCheck, ArrowUpRight, Sparkles, Zap } from 'lucide-react';

const batches = [
  { type: 'Weekday', andheri: '12:00 PM – 2:00 PM', borivali: '08:00 AM – 09:30 AM' },
  { type: 'Weekday', andheri: '04:00 PM – 06:00 PM', borivali: '10:00 AM – 12:00 PM' },
  { type: 'Weekday', andheri: '07:00 PM – 09:00 PM', borivali: '02:30 PM – 04:30 PM' },
  { type: 'Sunday', andheri: '11:00 AM – 04:00 PM', borivali: '11:00 AM – 04:00 PM' },
];

const TRUST = [
  'ISO 9001:2015 Certified',
  'Google Certified Trainers',
  '100% Placement Assistance',
];

function BatchTable({ campus, dataKey, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className="overflow-hidden rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-500"
    >
      {/* ── Table Header ── */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-orange-50/50 px-6 py-5">
        <h4 className="flex items-center gap-2.5 font-bold text-[18px] text-gray-900 tracking-tight">
          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
            <MapPin size={16} className="text-orange-600 shrink-0" strokeWidth={2.5} />
          </div>
          {campus}
        </h4>
        
        {/* Pulsating Badge */}
        <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="font-bold text-[10px] tracking-widest uppercase text-green-700">
            Enrolling
          </span>
        </div>
      </div>

      {/* ── Table Body ── */}
      <div className="px-5 pb-5 pt-2">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="pb-3 pt-3 text-left font-bold text-[11px] uppercase tracking-widest text-gray-400">Session Type</th>
              <th className="pb-3 pt-3 text-right font-bold text-[11px] uppercase tracking-widest text-gray-400">Timing</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {batches.map((b, i) => (
              <tr key={i} className="group hover:bg-orange-50/40 transition-colors duration-300">
                <td className="py-4 pr-3 rounded-l-xl">
                  {b.type === 'Sunday' ? (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1.5 shadow-sm">
                      <Sparkles size={12} className="text-amber-500" />
                      <span className="font-bold text-[11px] uppercase tracking-widest text-amber-700">Weekend</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-2.5 py-1.5 shadow-sm">
                      <Zap size={12} className="text-orange-500" />
                      <span className="font-bold text-[11px] uppercase tracking-widest text-orange-700">Weekday</span>
                    </span>
                  )}
                </td>
                <td className="py-4 text-right font-black text-[15px] tracking-tight text-gray-900 rounded-r-xl group-hover:text-orange-600 transition-colors">
                  {b[dataKey]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default function EventsAndBatches() {
  
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
      className="relative w-full overflow-hidden bg-[#FAFAFA] font-sans selection:bg-orange-500 selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >

      {/* ── Background Subtle Dot Grid & Glows ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-60 mix-blend-multiply z-0" />
      
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center z-0">
        <div className="absolute -top-[10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-orange-400/20 to-transparent blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-[10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-400/20 to-transparent blur-[100px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* ════ MAIN CONTAINER (Aligned with rest of the page: max-w-[1400px]) ════ */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12 pt-20 pb-16 lg:pt-24 lg:pb-24">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-2xl mx-auto lg:mx-0 w-full">
            <div className="mb-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="h-[2px] w-10 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />
              <span className="font-bold text-[12px] uppercase tracking-[0.2em] text-orange-600">
                Enrollment Schedule
              </span>
            </div>
            
            <h2 className="font-black text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight text-gray-900 mb-4">
              Upcoming <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                Batches 2025
              </span>
            </h2>
          </div>

          <div className="max-w-md mx-auto lg:mx-0 lg:pb-2 w-full">
            <p className="font-medium text-[16px] md:text-[18px] text-gray-500 leading-relaxed text-center lg:text-right">
              Flexible learning paths across our Mumbai campuses — tailored for students, freshers, and working professionals.
            </p>
          </div>
        </motion.div>

        {/* ── Batch Tables Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <BatchTable campus="Andheri Campus" dataKey="andheri" delay={0.1} />
          <BatchTable campus="Borivali Campus" dataKey="borivali" delay={0.2} />
        </div>

        {/* ── Trust Indicators Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-3xl border border-green-200/60 bg-green-50/80 backdrop-blur-sm px-6 py-5 shadow-sm max-w-4xl mx-auto"
        >
          <ShieldCheck size={24} className="shrink-0 text-green-600" strokeWidth={2.5} />
          {TRUST.map((text, i) => (
            <span key={i} className="flex items-center gap-4">
              {i > 0 && <span className="hidden h-4 w-[2px] bg-green-200 sm:block" />}
              <span className="font-bold text-[13px] md:text-[14px] uppercase tracking-widest text-green-800 text-center">
                {text}
              </span>
            </span>
          ))}
        </motion.div>

      </div>

      {/* ════ EDGE-TO-EDGE CTA BANNER ════ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden w-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 py-12 lg:py-16 shadow-[0_-15px_50px_rgba(249,115,22,0.15)]"
      >
        {/* Subtle Diagonal Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

        {/* Inner Container matched with Main Container width & padding */}
        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">

          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h3 className="font-black text-[clamp(1.8rem,3vw,2.5rem)] leading-tight tracking-tight text-white drop-shadow-md">
              Start Your Career Transformation Today.
            </h3>
            <p className="font-medium text-[16px] text-white/80 mt-2">Reserve your seat in the next batch before it fills up.</p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row shrink-0 gap-4 w-full lg:w-auto">
            
            {/* Primary Button */}
            <button className="group relative w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-white px-10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)] active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-orange-100/50 to-transparent -translate-x-full group-hover:animate-shine" />
              <Rocket size={18} className="text-orange-500 relative z-10" />
              <span className="font-black text-[16px] text-gray-900 relative z-10">Enroll Today</span>
              <ArrowUpRight size={18} className="text-gray-900 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            
            {/* Secondary Button */}
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 px-10 py-4 text-white hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-300 font-bold text-[16px] cursor-pointer backdrop-blur-sm">
              Download Syllabus
            </button>

          </div>

        </div>
      </motion.div>

      {/* ── Custom Animations ── */}
      <style>{`
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 1.5s ease; }
        .animate-pulse-slow { animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
      
    </section>
  );
}