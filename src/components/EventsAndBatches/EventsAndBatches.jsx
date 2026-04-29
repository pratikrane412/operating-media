import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Rocket, ShieldCheck, ArrowUpRight, Sparkles, Clock } from 'lucide-react';

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
      className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(236,171,0,0.15)] hover:border-[#ecab00]/30 transition-all duration-500 relative z-10"
    >
      {/* ── Table Header (Clean Minimal Design) ── */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-6 py-5">
        <h4 className="flex items-center gap-3 font-bold text-[18px] text-[#0f172a] tracking-tight">
          <div className="w-9 h-9 rounded-full bg-[#ecab00]/10 flex items-center justify-center">
            <MapPin size={18} className="text-[#ecab00] shrink-0" strokeWidth={2.5} />
          </div>
          {campus}
        </h4>
        
        {/* Pulsating Premium Badge */}
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ecab00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ecab00]"></span>
          </span>
          <span className="font-bold text-[10px] tracking-widest uppercase text-gray-600">
            Enrolling
          </span>
        </div>
      </div>

      {/* ── Table Body ── */}
      <div className="px-5 pb-5 pt-2">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="pb-3 pt-3 text-left font-bold text-[11px] uppercase tracking-[0.15em] text-gray-400">Session Type</th>
              <th className="pb-3 pt-3 text-right font-bold text-[11px] uppercase tracking-[0.15em] text-gray-400">Timing</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {batches.map((b, i) => {
              const isSunday = b.type === 'Sunday';
              return (
                <tr key={i} className="group hover:bg-[#ecab00]/[0.03] transition-colors duration-300">
                  <td className="py-4 pr-3 rounded-l-xl">
                    {isSunday ? (
                      // Highlighted Sunday Badge
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#ecab00]/30 bg-[#ecab00]/10 px-2.5 py-1.5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <Sparkles size={12} className="text-[#ecab00]" />
                        <span className="font-bold text-[11px] uppercase tracking-widest text-[#d99c00]">Sunday Batch</span>
                      </span>
                    ) : (
                      // Standard Weekday Badge
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-gray-500">
                        <Clock size={12} />
                        <span className="font-bold text-[11px] uppercase tracking-widest">Weekday</span>
                      </span>
                    )}
                  </td>
                  <td className={`py-4 text-right font-black text-[15px] tracking-tight rounded-r-xl transition-colors duration-300 ${isSunday ? 'text-[#d99c00]' : 'text-[#0f172a] group-hover:text-[#ecab00]'}`}>
                    {b[dataKey]}
                  </td>
                </tr>
              );
            })}
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
      className="relative w-full overflow-hidden bg-white font-sans selection:bg-[#ecab00] selection:text-[#0f172a]"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      
      {/* ── Minimal Ambient Grid (Halka Line Background) ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* ── Subtle Orange Glow ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex justify-center z-0">
        <div className="absolute -top-[10%] right-[-5%] h-[600px] w-[600px] rounded-full bg-[#ecab00]/5 blur-[120px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12 pt-16 pb-20 lg:pt-20 lg:pb-28">

        {/* ── Section Header (Fixed Desktop 46px) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center lg:text-left flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
        >
          <div className="max-w-2xl mx-auto lg:mx-0 w-full">
            <div className="mb-4 flex items-center justify-center lg:justify-start gap-3">
              <span className="h-[2px] w-10 bg-[#ecab00] rounded-full" />
              <span className="font-bold text-[12px] uppercase tracking-[0.2em] text-[#0f172a]">
                Enrollment Schedule
              </span>
            </div>
            
            <h2 className="font-black text-[32px] md:text-[38px] lg:text-[46px] leading-[1.15] tracking-tight text-[#0f172a] mb-4 bg-white/50 backdrop-blur-sm inline-block rounded-lg px-2 -ml-2">
              Upcoming <br className="hidden lg:block"/>
              <span className="text-[#ecab00]">
                Batches 2025
              </span>
            </h2>
          </div>

          <div className="max-w-md mx-auto lg:mx-0 lg:pb-2 w-full">
            <p className="font-medium text-[16px] md:text-[18px] text-gray-500 leading-relaxed text-center lg:text-right bg-white/50 backdrop-blur-sm rounded-lg p-2">
              Flexible learning paths across our Mumbai campuses — tailored for students, freshers, and working professionals.
            </p>
          </div>
        </motion.div>

        {/* ── Batch Tables Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative z-10">
          <BatchTable campus="Andheri Campus" dataKey="andheri" delay={0.1} />
          <BatchTable campus="Borivali Campus" dataKey="borivali" delay={0.2} />
        </div>

        {/* ── Trust Indicators Strip (SINGLE LINE) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-3 rounded-full border border-gray-100 bg-white/90 backdrop-blur-md px-8 py-4 shadow-sm max-w-4xl mx-auto mb-16"
        >
          <ShieldCheck size={20} className="shrink-0 text-[#ecab00]" strokeWidth={2.5} />
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {TRUST.map((text, i) => (
              <span key={i} className="flex items-center gap-6">
                {i > 0 && <span className="hidden h-4 w-[2px] bg-gray-200 sm:block" />}
                <span className="font-bold text-[12px] md:text-[13px] uppercase tracking-[0.1em] text-[#0f172a] text-center">
                  {text}
                </span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* ════ CTA BENTO BOX (Clean & Floating) ════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative overflow-hidden w-full rounded-[32px] bg-[#0f172a] py-12 px-8 lg:px-14 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.4)] z-10"
        >
          {/* Faint Background Grid Lines inside CTA */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_right,_rgba(236,171,0,0.15)_0%,_transparent_80%)] pointer-events-none" />

          {/* Inner Container */}
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between w-full">

            {/* Left Text */}
            <div className="text-center lg:text-left">
              <h3 className="font-black text-[28px] md:text-[34px] lg:text-[40px] leading-[1.1] tracking-tight text-white drop-shadow-md">
                Start Your Career <br className="hidden md:block"/> Transformation Today.
              </h3>
              <p className="font-medium text-[16px] md:text-[18px] text-white/70 mt-3">Reserve your seat in the next batch before it fills up.</p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row shrink-0 gap-4 w-full lg:w-auto">
              
              {/* Primary Button */}
              <button className="group relative w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-[#ecab00] px-8 py-4 shadow-[0_10px_30px_rgba(236,171,0,0.4)] hover:shadow-[0_15px_40px_rgba(236,171,0,0.6)] active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shine" />
                <Rocket size={18} className="text-[#0f172a] relative z-10" />
                <span className="font-black text-[16px] text-[#0f172a] relative z-10">Enroll Today</span>
                <ArrowUpRight size={18} className="text-[#0f172a] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
              
              {/* Secondary Button */}
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 px-8 py-4 text-white hover:border-[#ecab00] hover:bg-[#ecab00]/10 active:scale-95 transition-all duration-300 font-bold text-[16px] cursor-pointer">
                Download Syllabus
              </button>

            </div>

          </div>
        </motion.div>

      </div>

      {/* ── Custom Animations ── */}
      <style>{`
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 1.5s ease; }
        .animate-pulse-slow { animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
      `}</style>
      
    </section>
  );
}