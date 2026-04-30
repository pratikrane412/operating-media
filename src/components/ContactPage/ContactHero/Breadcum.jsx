import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ContactUsStrip() {
  return (
    <section className="relative w-full h-auto md:h-[300px] flex items-center bg-[#0A0F1C] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-[#0f172a] overflow-hidden py-10 md:py-0">
      
      {/* ── 1. BACKGROUND IMAGE & OVERLAYS ── */}
      {/* Contact-themed background image (Replace with your office/support image if needed) */}
      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
        alt="Team working in office"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* Solid Dark Overlay for text readability (Dark on left, transparent on right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1C] via-[#0A0F1C]/90 to-transparent" />
      
      {/* Brand Color Blend (Subtle Blue Tint) */}
      <div className="absolute inset-0 bg-[#2563eb]/20 mix-blend-multiply" />

      {/* Gold Glow Effect behind text */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[300px] h-[300px] bg-[#ECAB00]/20 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* ── 2. MAIN CONTENT CONTAINER ── */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-14">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-[12px] md:text-[13px] font-bold text-gray-400 mb-4 uppercase tracking-widest">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={14} className="text-[#2563eb]" />
            <span className="text-[#ECAB00]">Contact Us</span>
          </nav>

          {/* Main Heading */}
          <h1 className="font-black text-[32px] md:text-[40px] text-white leading-[1.1] tracking-tight mb-3">
            Get in <span className="text-[#ECAB00]">Touch</span>
          </h1>

          {/* Short Description Text */}
          <p className="font-medium text-[15px] md:text-[16px] text-gray-300 leading-relaxed">
            Have questions about our digital marketing courses, admissions, or corporate training? Reach out to our team—we're here to help you accelerate your career.
          </p>

        </motion.div>
      </div>

    </section>
  );
}