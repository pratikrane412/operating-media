import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const SATOSHI = "'Satoshi', sans-serif";

const AboutCTA = () => {
  // Inject Satoshi font
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
      className="relative py-32 px-6 bg-[#0A0A0B] overflow-hidden"
      style={{ fontFamily: SATOSHI }}
    >

      {/* ── BACKGROUND ARCHITECTURE ────────────────────────────────────── */}
      {/* Dynamic Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF5A1F] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

      {/* Subtle Grain Overlay (Premium Look) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Modern Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span
          className="uppercase leading-none"
          style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: "22vw", color: "rgba(255,255,255,0.02)", letterSpacing: "-0.04em" }}
        >
          FUTURE
        </span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Eyebrow with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <Sparkles size={14} className="text-[#FF5A1F]" />
          <span
            style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: "11px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.3em" }}
          >
            Limited Intake Available
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
          style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: "clamp(2.4rem, 7vw, 5rem)", color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.05 }}
        >
          Your Digital Mastery <br />
          Starts{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #FF5A1F, #FF8A5C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Right Here.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
          style={{ fontFamily: SATOSHI, fontWeight: 600, fontSize: "clamp(1.1rem, 2.2vw, 1.45rem)", color: "rgba(255,255,255,0.8)", lineHeight: 1.5, letterSpacing: "-0.01em" }}
        >
          Accelerate your career with Operating Media. Join thousands of high-earning graduates today.
        </motion.p>

        {/* ── CTA GROUP ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-[#FF5A1F] text-white px-12 py-6 rounded-2xl transition-all duration-300 shadow-[0_20px_50px_rgba(255,90,31,0.2)] overflow-hidden"
            style={{ fontFamily: SATOSHI }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="flex items-center gap-3">
              <span
                style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.12em" }}
              >
                Secure Your Seat
              </span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>

          <button
            className="text-white/40 hover:text-[#FF5A1F] px-4 py-2 border-b-2 border-transparent hover:border-[#FF5A1F] transition-all"
            style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.14em" }}
          >
            View Curriculum
          </button>
        </motion.div>

        {/* Trust Badge Footer */}
        {/* <div className="mt-20 pt-10 border-t border-white/5 opacity-30">
          <p
            style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: "10px", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5em" }}
          >
            ISO 9001:2015 Certified Institution
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default AboutCTA;