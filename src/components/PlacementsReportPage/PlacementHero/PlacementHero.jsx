import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function StatCard({ value, label, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-white/15 border border-white/25">
        <span className="text-white text-lg">{icon}</span>
      </div>
      <div>
        <p className="text-white font-black text-2xl leading-none">{value}</p>
        <p className="text-white/70 text-xs leading-tight mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

export default function PlacementHero() {
  return (
    <>
      {/* Inter font import */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');`}</style>

      <section
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0d2151 30%, #1a3a8f 60%, #1e4fc7 80%, #2563eb 100%)",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* Glow blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3 bg-sky-300/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3 bg-blue-500/15 blur-3xl" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Cross icons */}
        <div className="absolute top-6 right-8 opacity-60 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-8 opacity-40 pointer-events-none">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <line x1="0" y1="15" x2="30" y2="15" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="15" y1="0" x2="15" y2="30" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
          </svg>
        </div>

        {/* Main layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center min-h-screen py-20 gap-12">

          {/* LEFT — Text */}
          <div className="flex-1 flex flex-col gap-6 max-w-xl">

            {/* ── HEADLINE — Inter 36px 600 center ── */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: "1.25",
                letterSpacing: "normal",
                fontStyle: "normal",
                fontVariant: "normal",
                textTransform: "none",
                textDecoration: "none",
                textIndent: "0px",
                fontKerning: "auto",
                fontOpticalSizing: "auto",
                fontStretch: "100%",
                fontVariationSettings: "normal",
                fontFeatureSettings: "normal",
              }}
            >
              Bringing in the best education for the future gems
            </motion.h1>

            {/* Subtext pill */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white/85 border border-white/20 self-center text-center"
            >
              Achieve your goals, through every milestone you stay farther to the rest like you.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 font-semibold text-white text-sm px-7 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200 shadow-lg shadow-orange-500/40"
              >
                Get Started
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white/20">
                  <ArrowRight size={14} />
                </span>
              </motion.button>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="origin-left h-px bg-white/15"
            />

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/60 text-xs leading-relaxed text-center"
            >
              Providing you the quality education for our students to get breakthrough results and focus on the real-life experiments, workshops, and target on concept based learning.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8 pt-2"
            >
              <StatCard value="7.5K" label="Total active students taking gifted courses" icon="↗" delay={0.55} />
              <StatCard value="100+" label="Available teachers" icon="+" delay={0.65} />
            </motion.div>
          </div>

          {/* RIGHT — Photos */}
          <div className="relative flex-shrink-0 w-80 md:w-[420px] h-96 md:h-[520px]">

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute right-[-20px] top-[10%] w-[300px] h-[300px] rounded-full border-2 border-dashed border-orange-500/35 pointer-events-none"
            />

            {/* Large circle photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80"
                alt="Student"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small circle photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 bottom-10 w-44 h-44 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&q=80"
                alt="Student studying"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating glass card — Placement Rate */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-6 left-8 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
            >
              <p className="text-white font-bold text-xl leading-none">95%</p>
              <p className="text-white/70 text-[11px] mt-0.5">Placement Rate</p>
            </motion.div>

            {/* Floating glass card — Hiring Partners */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-4 right-4 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
            >
              <p className="text-white font-bold text-xl leading-none">500+</p>
              <p className="text-white/70 text-[11px] mt-0.5">Hiring Partners</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
