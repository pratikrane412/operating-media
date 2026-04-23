import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const AboutCTA = () => {
  return (
    <section className="relative py-32 px-6 bg-[#0A0A0B] overflow-hidden font-['Inter',sans-serif]">
      
      {/* ── BACKGROUND ARCHITECTURE ────────────────────────────────────── */}
      {/* Dynamic Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF5A1F] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Grain Overlay (Premium Look) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Modern Watermark - Replaces the old 'OM' */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[22vw] font-[900] text-white/[0.02] tracking-tighter leading-none uppercase">
          FUTURE
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Eyebrow with Icon */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles size={14} className="text-[#FF5A1F]" />
          <span className="text-[11px] font-bold text-white/60 uppercase tracking-[0.3em]">
            Limited Intake Available
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-[900] text-white tracking-[-0.04em] leading-[1.05] mb-8"
        >
          Your Digital Mastery <br />
          Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] to-[#FF8A5C]">Right Here.</span>
        </motion.h2>

        {/* ── THE INTER 700 / 24PX SPEC ────────────────────────────────── */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Inter'] font-[700] text-[24px] text-white/80 max-w-2xl mx-auto leading-snug mb-12 tracking-tight"
        >
          Accelerate your career with Operating Media. Join thousands of high-earning graduates today.
        </motion.p>
        
        {/* ── CTA GROUP ─────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-[#FF5A1F] text-white font-bold px-12 py-6 rounded-2xl transition-all duration-300 shadow-[0_20px_50px_rgba(255,90,31,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="flex items-center gap-3">
              <span className="text-[15px] uppercase tracking-widest font-black">Secure Your Seat</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>

          <button className="text-white/40 hover:text-[#FF5A1F] font-bold text-[14px] uppercase tracking-widest transition-all px-4 py-2 border-b-2 border-transparent hover:border-[#FF5A1F]">
            View Curriculum
          </button>
        </div>

        {/* Trust Badge Footer */}
        <div className="mt-20 pt-10 border-t border-white/5 opacity-30">
          <p className="text-[10px] font-bold text-white uppercase tracking-[0.5em]">
            ISO 9001:2015 Certified Institution
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;