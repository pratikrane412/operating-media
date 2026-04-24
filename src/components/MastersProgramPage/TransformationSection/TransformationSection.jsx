import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  MapPin, Calendar, Users, ArrowUpRight, ArrowRight,
  X, CheckCircle, Sparkles, Zap, Trophy, Star,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SETUP REQUIRED IN YOUR PROJECT:
//
// 1. index.html <head> — add fonts:
//    <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap" rel="stylesheet">
//    <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,500&display=swap" rel="stylesheet">
//
// 2. No Tailwind font extension needed — we use inline fontFamily styles.
// ─────────────────────────────────────────────────────────────────────────────

// Shared font style objects for cleanliness
const satoshi = { fontFamily: "'Satoshi', sans-serif" };

// ── DATA (outside component — pure data, no JSX) ─────────────────────────────

const OUTCOMES = [
  {
    iconName: 'zap',
    title: 'Live Ad Budgets',
    desc: 'Manage real Google & Meta campaigns funded by us',
    delay: 0.10,
  },
  {
    iconName: 'trophy',
    title: 'Agency Experience',
    desc: 'Work on actual client briefs — not mock projects',
    delay: 0.18,
  },
  {
    iconName: 'sparkles',
    title: 'AI-First Training',
    desc: 'ChatGPT, Gemini & automation tools in every module',
    delay: 0.26,
  },
  {
    iconName: 'star',
    title: 'Placement Support',
    desc: "200+ hiring partners across India's top agencies",
    delay: 0.34,
  },
];

const SPECS = [
  { iconName: 'mappin', label: 'Centers', value: 'Andheri & Borivali' },
  { iconName: 'calendar', label: 'Batches', value: 'Weekdays & Weekends' },
  { iconName: 'users', label: 'Batch Size', value: 'Max 12 Students' },
];

const CHECKLIST = [
  'Live project work on real brands',
  'Real ad budget funded by us',
  'AI & automation tools included',
  'Job placement & interview prep',
];

const BATCH_STATS = [
  { target: 7, suffix: '', label: 'Months' },
  { target: 200, suffix: '+', label: 'Hours' },
  { target: 12, suffix: '', label: 'Students' },
];

const PILLS = [
  { iconName: 'zap', text: 'Real Ad Budgets' },
  { iconName: 'sparkles', text: 'AI Tools Included' },
  { iconName: 'trophy', text: '7-Month Program' },
  { iconName: 'users', text: 'Max 12 Students' },
];

const AVATARS = [
  'https://i.pravatar.cc/40?img=1',
  'https://i.pravatar.cc/40?img=5',
  'https://i.pravatar.cc/40?img=8',
  'https://i.pravatar.cc/40?img=12',
];

// ── ICON RESOLVER ─────────────────────────────────────────────────────────────
function Icon({ name, size = 16, className = '' }) {
  const props = { size, className };
  switch (name) {
    case 'zap': return <Zap      {...props} />;
    case 'trophy': return <Trophy   {...props} />;
    case 'sparkles': return <Sparkles {...props} />;
    case 'star': return <Star     {...props} />;
    case 'mappin': return <MapPin   {...props} />;
    case 'calendar': return <Calendar {...props} />;
    case 'users': return <Users    {...props} />;
    default: return null;
  }
}

// ── ANIMATED COUNTER ──────────────────────────────────────────────────────────
function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const DURATION = 900;
    const STEPS = 50;
    const INTERVAL = DURATION / STEPS;
    let step = 0;

    const timer = setInterval(() => {
      step += 1;
      const ease = 1 - Math.pow(1 - step / STEPS, 3);
      const current = Math.round(ease * target);
      setCount(current);
      if (step >= STEPS) clearInterval(timer);
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// ── FEATURE PILL ──────────────────────────────────────────────────────────────
function FeaturePill({ iconName, text }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white rounded-full
                    border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
      <span className="text-[#FF5A1F]" aria-hidden="true">
        <Icon name={iconName} size={15} />
      </span>
      <span
        className="text-[15px] font-medium text-gray-700 whitespace-nowrap"
        style={satoshi}
      >
        {text}
      </span>
    </div>
  );
}

// ── OUTCOME CARD ──────────────────────────────────────────────────────────────
function OutcomeCard({ iconName, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 rounded-2xl bg-white border border-gray-100
                 hover:border-[#FF5A1F]/30
                 hover:shadow-[0_8px_32px_rgba(255,90,31,0.08)]
                 transition-all duration-300 cursor-default overflow-hidden"
    >
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none
                   bg-gradient-to-br from-transparent to-transparent
                   group-hover:from-[#FF5A1F]/[0.02] group-hover:to-[#FF5A1F]/[0.04]
                   transition-all duration-300"
        aria-hidden="true"
      />
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center
                   text-[#FF5A1F] bg-[#FF5A1F]/[0.08] mb-4
                   group-hover:bg-[#FF5A1F] group-hover:text-white
                   transition-all duration-300"
        aria-hidden="true"
      >
        <Icon name={iconName} size={17} />
      </div>
      <p
        className="text-[17px] font-bold text-[#111111] mb-1"
        style={satoshi}
      >
        {title}
      </p>
      <p
        className="text-[15px] font-normal text-gray-500 leading-relaxed"
        style={satoshi}
      >
        {desc}
      </p>
    </motion.div>
  );
}

// ── SPEC ROW ──────────────────────────────────────────────────────────────────
function SpecRow({ iconName, label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex items-center gap-4 px-4 py-3.5 rounded-xl
                 border border-transparent
                 hover:bg-gray-50 hover:border-gray-100
                 transition-all group cursor-default"
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0
                   text-[#FF5A1F] bg-[#FF5A1F]/[0.08]
                   group-hover:bg-[#FF5A1F] group-hover:text-white
                   transition-all duration-300"
        aria-hidden="true"
      >
        <Icon name={iconName} size={16} />
      </div>
      <div>
        <p
          className="text-[12px] font-semibold text-gray-400 uppercase tracking-[0.15em] mb-0.5"
          style={satoshi}
        >
          {label}
        </p>
        <p
          className="text-[16px] font-semibold text-[#111111]"
          style={satoshi}
        >
          {value}
        </p>
      </div>
    </motion.div>
  );
}

// ── BOOK DEMO MODAL ───────────────────────────────────────────────────────────
function BookDemoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a free demo class"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: 'spring', damping: 22, stiffness: 300 }}
            className="relative z-10 w-full max-w-3xl bg-white rounded-[2.5rem]
                       overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            {/* Left: campus photo */}
            <div className="hidden md:block md:w-1/2 relative min-h-[480px]">
              <img
                src="https://www.operatingmedia.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-07-at-15.40.57.webp"
                alt="Operating Media campus"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#FF5A1F]/60 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-8 left-8 right-8">
                <p
                  className="text-[18px] font-semibold text-white leading-snug"
                  style={satoshi}
                >
                  Visit our campus.<br />
                  <span className="font-normal text-base text-white/70">
                    Andheri &amp; Borivali
                  </span>
                </p>
              </div>
            </div>

            {/* Right: input */}
            <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-full
                           bg-gray-100 text-gray-400
                           hover:bg-gray-200 hover:text-black
                           transition-colors border-none cursor-pointer"
              >
                <X size={18} aria-hidden="true" />
              </button>

              <p
                className="text-[12px] font-semibold text-[#FF5A1F] tracking-[0.3em] uppercase mb-3"
                style={satoshi}
              >
                Book a Visit
              </p>

              <h2
                className="text-[40px] sm:text-[48px] font-black text-[#111111]
                           leading-tight tracking-tight mb-8"
                style={satoshi}
              >
                Book a Free<br />
                <span className="text-[#FF5A1F]">Demo Class</span>
              </h2>

              {/* Phone field — div-based, no <form> */}
              <div className="space-y-5">
                <div
                  className="flex items-center overflow-hidden rounded-xl
                             border border-gray-200
                             focus-within:border-[#FF5A1F] focus-within:ring-1
                             focus-within:ring-[#FF5A1F] transition-all"
                >
                  {/* Country prefix */}
                  <div className="flex items-center gap-2 px-4 py-3 shrink-0
                                  bg-gray-50 border-r border-gray-200">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt="India flag"
                      className="w-5"
                    />
                    <span
                      className="text-[16px] font-bold text-black"
                      style={satoshi}
                    >
                      +91
                    </span>
                  </div>

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    aria-label="Mobile number"
                    className="w-full px-4 py-3 outline-none text-[16px] font-normal
                               text-black placeholder-gray-400 bg-white"
                    style={satoshi}
                  />
                </div>

                {/* CTA */}
                <button
                  onClick={() => { }}
                  aria-label="Continue booking"
                  className="group w-full flex items-center justify-center gap-2
                             py-4 rounded-xl border-none cursor-pointer
                             bg-[#FF5A1F] hover:bg-[#111111]
                             text-white text-[16px] font-bold
                             transition-all duration-300"
                  style={satoshi}
                >
                  Continue
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>

                <p
                  className="text-[13px] font-normal text-gray-400 text-center leading-relaxed"
                  style={satoshi}
                >
                  By continuing you agree to Operating Media&apos;s{' '}
                  <span className="underline cursor-pointer">Terms</span> and{' '}
                  <span className="underline cursor-pointer">Privacy Policy</span>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export default function TransformationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="relative py-10 px-6 lg:px-16 bg-[#FAFAF9] overflow-hidden"
      aria-label="Transformation Roadmap"
      style={satoshi}
    >
      {/* ── Dot-grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* ── Glow blobs ── */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 85% 0%, rgba(255,90,31,0.09) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 10% 100%, rgba(255,90,31,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-start">

          {/* ════════════════ LEFT COLUMN ════════════════ */}
          <div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <span
                className="h-[2px] w-7 bg-[#FF5A1F] rounded-full"
                aria-hidden="true"
              />
              <span
                className="text-[13px] font-semibold text-[#FF5A1F] uppercase tracking-[0.32em]"
                style={satoshi}
              >
                Transformation Roadmap
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="font-black text-[#111111] mb-5
                         leading-[1.0] tracking-[-0.035em]
                         text-[clamp(32px,5vw,56px)]"
              style={satoshi}
            >
              From Beginner to<br />
              <span className="text-[#FF5A1F]">Digital Manager</span><br />
              in 7 Months.
            </motion.h2>

            {/* Sub-copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-[18px] font-normal text-[#111111]/60
                         max-w-[500px] mb-10 leading-[1.75]"
              style={satoshi}
            >
              This isn&apos;t a theory course — it&apos;s a{' '}
              <span className="font-semibold text-[#111111]">
                simulated agency experience
              </span>
              . You&apos;ll build, launch, and manage real digital campaigns
              before you ever graduate.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-2.5 mb-14"
              role="list"
              aria-label="Program highlights"
            >
              {PILLS.map((pill) => (
                <div key={pill.text} role="listitem">
                  <FeaturePill iconName={pill.iconName} text={pill.text} />
                </div>
              ))}
            </motion.div>

            {/* Section label */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="text-[13px] font-semibold text-[#111111]/35
                         uppercase tracking-[0.22em] mb-5"
              style={satoshi}
            >
              What You&apos;ll Walk Away With
            </motion.p>

            {/* Outcome cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
              {OUTCOMES.map((o) => (
                <OutcomeCard key={o.title} {...o} />
              ))}
            </div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-6 p-5 bg-white rounded-2xl
                         border border-gray-100 shadow-sm"
              aria-label="Alumni ratings"
            >
              {/* Stacked avatars */}
              <div className="flex -space-x-2.5 shrink-0" aria-hidden="true">
                {AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Alumni ${i + 1}`}
                    loading="lazy"
                    className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              {/* Stars + copy */}
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      className="text-amber-400 fill-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                  <span
                    className="text-[14px] font-bold text-gray-800 ml-1"
                    style={satoshi}
                  >
                    4.9/5
                  </span>
                </div>
                <p
                  className="text-[15px] font-normal text-gray-500"
                  style={satoshi}
                >
                  Rated by{' '}
                  <span className="font-bold text-[#111111]">1,200+ alumni</span>{' '}
                  across batches
                </p>
              </div>

              {/* Placement stat */}
              <div
                className="ml-auto hidden md:block h-10 w-px bg-gray-100"
                aria-hidden="true"
              />
              <div className="hidden md:block" aria-label="94% placement rate">
                <p
                  className="text-[22px] font-black text-[#111111] leading-none"
                  style={satoshi}
                >
                  94%
                </p>
                <p
                  className="text-[14px] font-normal text-gray-400 mt-0.5"
                  style={satoshi}
                >
                  Placement rate
                </p>
              </div>
            </motion.div>
          </div>

          {/* ════════════════ RIGHT: ENROLMENT CARD ════════════════ */}
          <div className="lg:sticky lg:top-24 self-start">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative bg-white rounded-3xl overflow-hidden
                         border border-gray-100
                         shadow-[0_32px_80px_rgba(0,0,0,0.10)]"
            >

              {/* ── Dark header ── */}
              <div className="bg-[#0F0F0F] px-8 pt-8 pb-6 relative overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse at 90% 0%, rgba(255,90,31,0.22) 0%, transparent 60%)',
                  }}
                  aria-hidden="true"
                />

                {/* Live badge */}
                <div
                  className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1
                             bg-[#FF5A1F]/15 rounded-full border border-[#FF5A1F]/20"
                  aria-label="Currently enrolling"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-pulse"
                    aria-hidden="true"
                  />
                  <span
                    className="text-[11px] font-bold text-[#FF5A1F] uppercase tracking-[0.1em]"
                    style={satoshi}
                  >
                    Enrolling Now
                  </span>
                </div>

                <p
                  className="text-[12px] font-semibold text-[#FF5A1F] uppercase tracking-[0.28em] mb-2 relative z-10"
                  style={satoshi}
                >
                  Enrolment
                </p>
                <h3
                  className="text-[30px] font-black text-white leading-[1.1] relative z-10"
                  style={satoshi}
                >
                  Batch Details
                </h3>
                <p
                  className="text-[15px] font-normal text-white/40 mt-1.5 relative z-10"
                  style={satoshi}
                >
                  Limited to 12 seats per batch.
                </p>

                {/* Animated stats */}
                <div className="grid grid-cols-3 gap-2.5 mt-6 relative z-10">
                  {BATCH_STATS.map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/[0.07] border border-white/[0.08]
                                 rounded-2xl p-3 text-center"
                    >
                      <span
                        className="text-[24px] font-black text-white leading-none block"
                        style={satoshi}
                      >
                        <Counter target={s.target} suffix={s.suffix} />
                      </span>
                      <span
                        className="text-[11px] font-normal text-white/35 uppercase tracking-[0.08em] mt-1 block"
                        style={satoshi}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Specs list ── */}
              <div className="px-5 pt-4 pb-2 space-y-1">
                {SPECS.map((item, i) => (
                  <SpecRow
                    key={item.label}
                    {...item}
                    delay={0.2 + i * 0.07}
                  />
                ))}
              </div>

              {/* ── Checklist ── */}
              <div className="px-5 pb-4">
                <div className="bg-[#FAFAF9] rounded-2xl p-5 space-y-2.5
                                border border-gray-100">
                  {CHECKLIST.map((text) => (
                    <div key={text} className="flex items-center gap-3">
                      <CheckCircle
                        size={13}
                        className="text-[#FF5A1F] shrink-0"
                        aria-hidden="true"
                      />
                      <span
                        className="text-[15px] font-normal text-[#111111]/65"
                        style={satoshi}
                      >
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── CTA button ── */}
              <div className="px-5 pb-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Book a free demo class"
                  className="group w-full flex items-center justify-center gap-3
                             py-4 rounded-2xl border-none cursor-pointer
                             bg-[#FF5A1F] hover:bg-[#111111]
                             text-white text-[16px] font-bold
                             shadow-lg shadow-orange-200
                             transition-all duration-300
                             focus-visible:outline-2 focus-visible:outline-offset-2
                             focus-visible:outline-[#FF5A1F]"
                  style={satoshi}
                >
                  Book Free Demo Class
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                               transition-transform duration-200"
                    aria-hidden="true"
                  />
                </button>

                <p
                  className="text-[13px] font-normal text-gray-400 text-center mt-3"
                  style={satoshi}
                >
                  No commitment &middot; Free of charge
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}