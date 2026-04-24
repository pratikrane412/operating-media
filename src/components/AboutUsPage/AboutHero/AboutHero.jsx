import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Globe, Layers, Zap, Check,
  Search, Sparkles, MousePointer2, Target, Eye, Heart
} from 'lucide-react';

const SATOSHI = "'Satoshi', sans-serif";

const AboutHero = () => {
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

  // 1. Data Definitions
  const PROGRAMS = [
    { title: "Digital Marketing", icon: "🚀", rotate: -12, color: "bg-emerald-50" },
    { title: "Master's Program", icon: "🎓", rotate: 0, color: "bg-white" },
    { title: "Short-term Certification", icon: "📑", rotate: 12, color: "bg-emerald-50" }
  ];

  const PARTNERS = ["Google", "Meta", "Amazon", "Microsoft", "Netflix", "Adobe", "Spotify"];

  const CORE_VALUES = [
    {
      title: "Mission",
      desc: "To provide industry-first digital training powered by real agency field experience, making world-class marketing skills accessible to everyone.",
      icon: <Target className="w-5 h-5 text-orange-500" />,
      highlight: false
    },
    {
      title: "Vision",
      desc: "To be India's leading digital talent incubator, recognized for redefining how students learn and setting new benchmarks in placement.",
      icon: <Eye className="w-5 h-5 text-white" />,
      highlight: true
    },
    {
      title: "Our Values",
      desc: "Integrity, innovation, and impact. We guide every student with transparency, building trust while driving excellence in digital strategy.",
      icon: <Heart className="w-5 h-5 text-orange-500" />,
      highlight: false
    }
  ];

  // 2. Motion Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, rotate: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      rotate: custom.rotate,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.5 + custom.index * 0.1 }
    })
  };

  return (
    <div
      className="bg-[#FAF9F6] selection:bg-orange-500 selection:text-white antialiased"
      style={{ fontFamily: SATOSHI }}
    >

      {/* ── SECTION 1: THE VIBRANT GRADIENT HERO ─────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-32 px-6 bg-gradient-to-br from-[#854909] via-[#f07e37] to-[#f07e37]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/20 rounded-full blur-3xl -ml-20 -mb-20" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={containerVars}>

            {/* Eyebrow pill */}
            <motion.div
              variants={itemVars}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8"
            >
              <Sparkles size={14} className="text-yellow-300" />
              <span
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.25em', color: '#fff' }}
              >
                Learning Today. Leading Tomorrow.
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVars}
              style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', letterSpacing: '-0.05em', lineHeight: 0.9, color: '#fff', marginBottom: '32px' }}
            >
              The World's Best <br />
              <span style={{ color: '#bef264' }}>Online Institute.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVars}
              style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '40px', maxWidth: '520px' }}
            >
              Operating Media is Mumbai's premier engine for outcome-driven digital marketing education.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={itemVars} className="flex flex-wrap items-center gap-6">
              <button
                className="bg-white text-[#064e3b] rounded-2xl hover:bg-[#bef264] transition-all shadow-2xl"
                style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', padding: '20px 40px' }}
              >
                Find Your Programme
              </button>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#064e3b] bg-gray-200" />
                ))}
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#bef264] border-2 border-[#064e3b]"
                  style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '10px', color: '#064e3b' }}
                >
                  +11K
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Program cards */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-[48px] border border-white/10 overflow-hidden shadow-2xl">
              <div className="relative h-full w-full flex flex-col items-center justify-center pt-10">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white rounded-full px-6 py-3 flex items-center gap-3 shadow-lg z-30 mb-auto mt-10 border border-emerald-100"
                >
                  <Search className="w-4 h-4 text-[#065f46]" />
                  <span
                    style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#9CA3AF' }}
                  >
                    Find your programme
                  </span>
                </motion.div>

                <div className="relative w-full flex justify-center h-64 mt-auto mb-[-40px]">
                  {PROGRAMS.map((prog, i) => (
                    <motion.div
                      key={i}
                      custom={{ rotate: prog.rotate, index: i }}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05, zIndex: 50, y: -20 }}
                      className={`absolute w-44 md:w-56 aspect-[3/4] ${prog.color} rounded-2xl shadow-2xl p-6 border border-emerald-100/50 flex flex-col items-center text-center justify-center transition-all cursor-pointer`}
                      style={{ zIndex: i === 1 ? 20 : 10 }}
                    >
                      <span className="text-4xl mb-4">{prog.icon}</span>
                      <h3
                        style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: 'clamp(14px, 1.5vw, 18px)', color: '#0A0A0B', lineHeight: 1.2, textTransform: 'uppercase', letterSpacing: '-0.01em' }}
                      >
                        {prog.title}
                      </h3>
                      <div className="mt-4 w-8 h-1 bg-[#065f46] rounded-full" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: INSTITUTIONAL CORE ────────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_VALUES.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[32px] border transition-all duration-500 shadow-sm flex flex-col gap-10
                  ${item.highlight ? 'bg-orange-500 border-orange-400 shadow-2xl shadow-orange-500/20' : 'bg-[#FAF9F6] border-slate-100'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg
                  ${item.highlight ? 'bg-white/20 backdrop-blur-md' : 'bg-orange-50'}`}>
                  {item.icon}
                </div>

                <div className="space-y-4">
                  <h3
                    style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '26px', letterSpacing: '-0.02em', textTransform: 'uppercase', lineHeight: 1, color: item.highlight ? '#fff' : '#0f172a' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ fontFamily: SATOSHI, fontWeight: 500, fontSize: '15.5px', lineHeight: 1.7, color: item.highlight ? 'rgba(255,255,255,0.82)' : '#64748b' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BENTO GRID ───────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Vision card */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-2 bg-white p-12 rounded-[40px] border border-gray-100 flex flex-col justify-between h-[450px]"
            >
              <div>
                <Layers className="text-orange-500 w-10 h-10 mb-8" />
                <h3
                  style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '26px', color: '#0A0A0B', marginBottom: '24px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}
                >
                  Our Institutional Vision
                </h3>
                <p
                  style={{ fontFamily: SATOSHI, fontWeight: 500, fontSize: '17px', lineHeight: 1.7, color: '#6B7280', maxWidth: '560px' }}
                >
                  To democratize elite marketing education by bridging the gap between theoretical knowledge and real-world agency performance.
                </p>
              </div>
              <div
                className="flex items-center gap-4 text-orange-500 cursor-pointer group"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase' }}
              >
                LEARN MORE <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>

            {/* Placement rate */}
            <div className="bg-[#0A0A0B] p-10 rounded-[40px] text-white flex flex-col justify-center items-center text-center shadow-xl">
              <span
                style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: 'clamp(4rem, 8vw, 5rem)', color: '#F97316', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '8px' }}
              >
                98%
              </span>
              <p
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '22px', letterSpacing: '-0.02em', color: '#fff' }}
              >
                Placement Rate
              </p>
            </div>

            {/* Agency First */}
            <div className="bg-orange-50 p-10 rounded-[40px] border border-orange-100 flex flex-col justify-center items-center text-center">
              <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-6">
                <Zap fill="white" />
              </div>
              <h3
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '24px', color: '#0A0A0B', letterSpacing: '-0.02em', textTransform: 'uppercase' }}
              >
                Agency First
              </h3>
            </div>

            {/* Practical mission */}
            <div className="md:col-span-2 bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-[40%] aspect-video rounded-3xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center text-gray-300">
                <Globe size={40} />
              </div>
              <div className="flex-1">
                <h3
                  style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '24px', color: '#0A0A0B', marginBottom: '16px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}
                >
                  Practical Mission
                </h3>
                <p
                  style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '15px', lineHeight: 1.7, color: '#6B7280' }}
                >
                  Our mission is simple: Providing high-pressure hands-on experience on real ad accounts and real budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: AUTHORITY BLOCK ──────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#0A0A0B', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: '32px' }}
            >
              Industry Leading <br /> Experts &{' '}
              <span style={{ color: '#F97316' }}>Mentors.</span>
            </motion.h2>
            <div className="space-y-6">
              {[
                "15+ Years of Industry Leadership",
                "Certified Training Professionals",
                "250+ Global Hiring Partners",
                "Advanced Lab Infrastructure",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span
                    style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '18px', color: '#0A0A0B', letterSpacing: '-0.01em' }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Why choose us card */}
          <div className="bg-white p-12 rounded-[50px] shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-[100px] -z-0" />
            <h3
              className="relative z-10"
              style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '22px', color: '#0A0A0B', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '-0.01em' }}
            >
              Why Professionals Choose Us?
            </h3>
            <p
              className="relative z-10"
              style={{ fontFamily: SATOSHI, fontWeight: 500, fontSize: '15.5px', lineHeight: 1.75, color: '#6B7280', marginBottom: '32px' }}
            >
              Operating Media has evolved into a powerhouse of knowledge. We don't just provide a certificate; we provide a career launchpad with alumni in top global roles.
            </p>
            <button
              className="flex items-center gap-3 text-orange-500 group"
              style={{ fontFamily: SATOSHI, fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em' }}
            >
              VIEW OUR CAREER PORTAL
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-all" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;