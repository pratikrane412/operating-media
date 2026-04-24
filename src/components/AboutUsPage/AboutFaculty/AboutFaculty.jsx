import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  MessageCircle,
  Zap,
  Layout,
  Briefcase
} from 'lucide-react';

const SATOSHI = "'Satoshi', sans-serif";

const POINTS = [
  {
    title: "Actual Experience",
    desc: "Our faculty isn't just academic; they are practitioners who manage million-dollar ad spends daily.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Personalized Focus",
    desc: "Small batch sizes ensure our mentors can focus on your specific career roadmap and skill gaps.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Real-time Query Solving",
    desc: "Access a dedicated discord/slack community for instant feedback on your live campaign hurdles.",
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    title: "Methodical Simplicity",
    desc: "We break down complex algorithmic logic into actionable, easy-to-understand marketing frameworks.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Practical Immersion",
    desc: "Work on real-world client briefs from partner agencies. Build a portfolio that actually gets you hired.",
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "Core Foundation",
    desc: "Master the evergreen psychological theories of marketing alongside modern AI-driven tools.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
];

const FeatureCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden"
      style={{ fontFamily: SATOSHI }}
    >
      {/* Subtle Background Number */}
      <span
        className="absolute -right-4 -bottom-4 font-black text-gray-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none pointer-events-none"
        style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: "9rem", lineHeight: 1 }}
      >
        0{index + 1}
      </span>

      {/* Icon Wrapper */}
      <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
        {item.icon}
      </div>

      {/* Title */}
      <h3
        className="mb-4 text-gray-900 leading-tight"
        style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: "22px", letterSpacing: "-0.02em" }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="text-gray-500 opacity-80 group-hover:opacity-100 transition-opacity"
        style={{ fontFamily: SATOSHI, fontWeight: 500, fontSize: "15px", lineHeight: 1.75 }}
      >
        {item.desc}
      </p>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
    </motion.div>
  );
};

const AboutFaculty = () => {
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
      className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden"
      style={{ fontFamily: SATOSHI }}
    >

      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50/50 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-10 bg-orange-500" />
              <span
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.25em", color: "#F97316" }}
              >
                Methodology
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", color: "#030712", letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Redefining Digital <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #F97316, #EA580C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Learning Standards.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-400 max-w-sm"
            style={{ fontFamily: SATOSHI, fontWeight: 500, fontSize: "17px", lineHeight: 1.75 }}
          >
            We don't just teach tools; we build the strategic mindset required to lead the industry.
          </motion.p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {POINTS.map((point, i) => (
            <FeatureCard key={i} item={point} index={i} />
          ))}
        </div>

        {/* Institutional Authority Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          <span
            style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.18em", color: "#9CA3AF" }}
          >
            Trusted by Global Marketing Teams
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFaculty;