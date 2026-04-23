import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";

/**
 * AboutNarrative refactored for React + Vite + Tailwind.
 * All inline CSS removed and replaced with Tailwind utility classes.
 */

/* ─────────────────────────────────────────────
   COUNT-UP HOOK
───────────────────────────────────────────── */
function useCountUp(to, duration = 2.2) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return c.stop;
  }, [inView, to, duration]);
  return [ref, val];
}

/* ─────────────────────────────────────────────
   ANIMATION WRAPPERS
───────────────────────────────────────────── */
function FadeUp({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function FadeLeft({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function FadeRight({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   SECTION LABEL
───────────────────────────────────────────── */
function Label({ children }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5">
      <span className="w-5 h-px bg-orange-500" />
      <span className="font-inter font-bold text-[11px] tracking-[0.18em] text-orange-500 uppercase">
        {children}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PARALLAX IMAGE
───────────────────────────────────────────── */
function ParallaxImage({ src, alt, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="w-full h-[115%] object-cover scale-105"
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80";
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   TICKER
───────────────────────────────────────────── */
const TICKS = [
  "Est. 2011",
  "11,000+ Students",
  "98% Placement Rate",
  "250+ Hiring Partners",
  "Google Certified",
  "Meta Certified",
  "Live Agency Training",
  "Mumbai's #1",
  "AI Programs",
  "100% Practical",
];

function Ticker() {
  const items = [...TICKS, ...TICKS, ...TICKS, ...TICKS];
  return (
    <div className="overflow-hidden bg-neutral-950 py-4">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-25%"] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        {items.map((t, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-inter font-bold text-[10px] tracking-[0.2em] text-white/30 uppercase whitespace-nowrap px-7">
              {t}
            </span>
            <span className="text-orange-500 text-[8px]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FEATURE PILL
───────────────────────────────────────────── */
function FeaturePill({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-2.5 bg-white border border-neutral-100 rounded-2xl px-4 py-3 shadow-sm hover:border-orange-200 hover:shadow-md transition-all duration-200 cursor-default">
      <span className="text-base">{icon}</span>
      <span className="font-inter font-semibold text-[13px] text-neutral-800 whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    role: "Performance Marketer @ Accenture",
    text: "Operating Media didn't just teach me digital marketing — it gave me the confidence to run ₹1 crore campaigns from day one.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Rohan Mehta",
    role: "SEO Lead @ InfiDigit",
    text: "The live project model is unmatched. I had 3 real campaigns in my portfolio before I even graduated.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Sneha Patel",
    role: "Social Media Manager @ Jio Studios",
    text: "Within 45 days of completing the MBA program I had two job offers. The placement team is incredible.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
];

function TestimonialSlider() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setActive((p) => (p + 1) % TESTIMONIALS.length),
      4500
    );
    return () => clearInterval(t);
  }, []);
  return (
    <div className="grid md:grid-cols-[1fr_260px] gap-6 items-start">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35 }}
          className="bg-neutral-950 rounded-3xl p-8 md:p-10"
        >
          <span className="text-[56px] leading-none text-orange-500/25 font-serif block mb-4">
            "
          </span>
          <p className="font-inter font-medium text-[clamp(16px,2vw,20px)] lg:leading-[1.8] tracking-[-0.01em] text-white/80 mb-8">
            {TESTIMONIALS[active].text}
          </p>
          <div className="flex items-center gap-4">
            <img
              src={TESTIMONIALS[active].img}
              alt={TESTIMONIALS[active].name}
              className="w-11 h-11 rounded-full object-cover border-2 border-orange-500/30"
            />
            <div>
              <p className="font-inter font-bold text-sm text-white">
                {TESTIMONIALS[active].name}
              </p>
              <p className="font-inter font-medium text-[12px] text-orange-400/70">
                {TESTIMONIALS[active].role}
              </p>
            </div>
            <div className="ml-auto flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="#f97316"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex flex-col gap-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
              active === i
                ? "bg-orange-50 border-orange-200"
                : "bg-white border-neutral-100 hover:border-neutral-200"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <p
                  className={`font-inter font-bold text-[12px] ${
                    active === i ? "text-orange-600" : "text-neutral-600"
                  }`}
                >
                  {t.name}
                </p>
                <p className="font-inter font-normal text-[11px] text-neutral-400 truncate max-w-[160px]">
                  {t.role.split("@")[1]?.trim()}
                </p>
              </div>
            </div>
          </button>
        ))}
        <div className="flex gap-1.5 pl-1 pt-1">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 cursor-pointer border-none ${
                active === i ? "w-6 h-2 bg-orange-500" : "w-2 h-2 bg-neutral-200 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═════════════════════════════════════════════
   MAIN COMPONENT
═════════════════════════════════════════════ */
export default function AboutNarrative() {
  return (
    <section className="bg-white overflow-x-hidden selection:bg-orange-500 selection:text-white font-inter">
      {/* ── TICKER ── */}
      <Ticker />

      {/* ══════════════════════════════════════
          01 — HERO STATEMENT
      ══════════════════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="pt-20 lg:pt-28 pb-16 lg:pb-20 border-b border-neutral-100">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-end">
            <FadeLeft>
              <Label>Our Story</Label>
              <h1 className="font-inter font-extrabold text-[clamp(46px,6.5vw,88px)] tracking-[-0.04em] leading-[0.96] text-neutral-950">
                One of India's{" "}
                <span className="relative inline-block">
                  <span className="text-orange-500">Top 5</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 h-[3px] bg-orange-500 rounded-full block w-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                  />
                </span>
                <br />
                Digital Marketing
                <br />
                Institutes.
              </h1>
            </FadeLeft>

            <FadeRight delay={0.2}>
              <p className="font-inter font-normal text-base leading-[1.85] text-neutral-500 mb-6">
                Since 2011, Operating Media has been shaping digital marketing professionals with
                world-class training, industry-certified instructors, and a relentlessly practical approach.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-inter font-bold text-[13px] text-neutral-900">Est. 2011</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span className="font-inter font-bold text-[13px] text-neutral-900">Mumbai, India</span>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span className="font-inter font-bold text-[13px] text-orange-500">14 Years Strong</span>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          02 — HERO IMAGE
      ══════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="mx-6 lg:mx-12 my-10 rounded-[2rem] overflow-hidden relative h-[clamp(300px,46vw,600px)]"
      >
        <ParallaxImage
          src="https://www.operatingmedia.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-07-at-15.40.57.webp"
          alt="Operating Media Campus"
          className="w-full h-full rounded-[2rem]"
        />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-orange-950/65 via-transparent to-transparent" />
        <motion.div
          className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-8 items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div>
            <p className="font-inter font-bold text-[10px] tracking-[0.18em] text-white/45 uppercase mb-1">Established</p>
            <p className="font-inter font-extrabold text-[clamp(32px,5vw,52px)] tracking-[-0.04em] leading-none text-white">2011</p>
          </div>
          <div>
            <p className="font-inter font-bold text-[10px] tracking-[0.18em] text-white/45 uppercase mb-1">Students Trained</p>
            <p className="font-inter font-extrabold text-[clamp(32px,5vw,52px)] tracking-[-0.04em] leading-none text-white">11,000+</p>
          </div>
          <div>
            <p className="font-inter font-bold text-[10px] tracking-[0.18em] text-white/45 uppercase mb-1">Placement Rate</p>
            <p className="font-inter font-extrabold text-[clamp(32px,5vw,52px)] tracking-[-0.04em] leading-none text-white">98%</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="w-full h-px bg-neutral-100" />

      {/* ══════════════════════════════════════
          04 — WHO WE ARE
      ══════════════════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeLeft>
            <Label>Who We Are</Label>
            <h2 className="font-inter font-extrabold text-[clamp(32px,4vw,52px)] tracking-[-0.04em] leading-[1.05] text-neutral-950 mb-8">
              A local initiative
              <br />
              with <span className="text-orange-500">global influence.</span>
            </h2>
            <div className="space-y-5 mb-10 text-neutral-500 font-inter font-normal text-[15px] leading-[1.9]">
              <p>
                We are <strong className="font-bold text-neutral-900">Operating Media</strong>, one of the leading Digital Marketing Training providers in India. If you aspire to be a Digital Marketing expert and want to excel in Internet Marketing, you are at the right place.
              </p>
              <p>
                We also offer customized Digital Marketing Workshops for <strong className="font-bold text-neutral-900">corporate organizations</strong> who want to take their businesses to the next level by leveraging Digital Marketing.
              </p>
              <p>
                With leading industry experts and <strong className="font-bold text-neutral-900">world-class infrastructure</strong>, our team consists of <span className="text-orange-500 font-semibold">certified professionals</span> with deep field experience in their respective domains.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: "🎯", text: "Practical-First Training" },
                { icon: "🏆", text: "Top 5 Institute" },
                { icon: "👨‍💼", text: "Certified Instructors" },
                { icon: "🏢", text: "Corporate Workshops" },
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <FeaturePill icon={f.icon} text={f.text} />
                </motion.div>
              ))}
            </div>
          </FadeLeft>

          <FadeRight delay={0.15}>
            <div className="relative">
              <span className="absolute font-inter font-black text-[clamp(120px,18vw,200px)] tracking-[-0.05em] text-neutral-100 leading-none select-none pointer-events-none z-0 -top-10 -right-4">
                14
              </span>
              <div className="relative z-10 rounded-[1.75rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.14)] h-[500px]">
                <ParallaxImage
                  src="https://www.operatingmedia.com/wp-content/uploads/2025/01/office-desk-with-accessories-keyboard-smartphone-pens-marketing-milestones-concept-1.webp"
                  alt="Operating Media"
                  className="w-full h-full"
                />
              </div>
              <motion.div
                className="absolute -bottom-5 -left-5 z-20 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-neutral-100 flex items-center gap-3"
                initial={{ opacity: 0, scale: 0.85, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-lg shrink-0">🏆</div>
                <div>
                  <p className="font-inter font-bold text-[12px] tracking-[0.05em] text-neutral-900 leading-tight uppercase">Top 5 Institute</p>
                  <p className="font-inter font-normal text-[11px] text-neutral-400 mt-0.5">India Rankings 2024</p>
                </div>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 z-20 bg-orange-500 rounded-2xl px-5 py-3 shadow-[0_12px_40px_rgba(249,115,22,0.38)]"
                initial={{ opacity: 0, scale: 0.85, y: -12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-inter font-extrabold text-[28px] tracking-[-0.04em] leading-none text-white">14</p>
                <p className="font-inter font-bold text-[10px] tracking-[0.18em] text-white/65 uppercase mt-0.5">Years</p>
              </motion.div>
            </div>
          </FadeRight>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-100" />

      {/* ══════════════════════════════════════
          05 — WHY CHOOSE US (dark)
      ══════════════════════════════════════ */}
      <div className="bg-neutral-950 py-10 lg:py-10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
            <FadeLeft>
              <Label>Why Choose Us</Label>
              <h2 className="font-inter font-extrabold text-[clamp(30px,3.8vw,50px)] tracking-[-0.04em] leading-[1.05] text-white">
                Unique because
                <br />
                we train <span className="text-orange-500">dynamic</span>,
                <br />
                not just disciplined.
              </h2>
            </FadeLeft>

            <FadeRight delay={0.15}>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Practical Workshop Approach", desc: "Real campaigns from day one. Live ad budgets, real accounts — no fluff, only skills that work in the industry." },
                  { num: "02", title: "Industry-Certified Instructors", desc: "Our faculty are active practitioners with Google & Meta certifications and agency experience." },
                  { num: "03", title: "Corporate Training Programs", desc: "Bespoke workshops built around your business goals, not a one-size-fits-all syllabus." },
                  { num: "04", title: "Comprehensive Curriculum", desc: "SEO, SEM, Social Media, Analytics, AI — every vertical of digital marketing covered in depth." },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.09, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-neutral-900 border border-neutral-800 rounded-2xl p-7 hover:border-orange-500/40 transition-all duration-300 group cursor-default"
                  >
                    <p className="font-inter font-bold text-[10px] tracking-[0.2em] text-orange-500 uppercase mb-4">{card.num}</p>
                    <h3 className="font-inter font-bold text-[15px] leading-[1.4] text-white mb-2 group-hover:text-orange-50 transition-colors">{card.title}</h3>
                    <p className="font-inter font-normal text-[13px] leading-[1.75] text-neutral-500">{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </FadeRight>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          07 — TESTIMONIALS
      ══════════════════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 lg:py-10">
        <FadeUp className="mb-12">
          <Label>Student Stories</Label>
          <h2 className="font-inter font-extrabold text-[clamp(30px,3.8vw,50px)] tracking-[-0.04em] leading-[1.05] text-neutral-950">
            What our alumni <span className="text-orange-500">are saying.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <TestimonialSlider />
        </FadeUp>
      </div>

      <div className="w-full h-px bg-neutral-100" />

      {/* ══════════════════════════════════════
          08 — QUOTE + COPY + CTA
      ══════════════════════════════════════ */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 lg:py-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-24 items-center">
          <FadeLeft>
            <div className="relative bg-neutral-950 rounded-3xl px-10 py-10 overflow-hidden">
              <div className="absolute top-5 left-8 text-[72px] leading-none text-orange-500/20 font-serif select-none">"</div>
              <p className="font-inter font-extrabold text-[clamp(18px,2.2vw,26px)] tracking-[-0.025em] leading-[1.35] relative z-10 text-white mb-6">
                We don't just teach digital marketing.
                <br />
                We build digital marketing <span className="text-orange-500">practitioners.</span>
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-orange-500" />
                <span className="font-inter font-bold text-[11px] tracking-[0.18em] text-white/35 uppercase">Operating Media</span>
              </div>
            </div>
          </FadeLeft>

          <FadeRight delay={0.2}>
            <Label>Operating Media</Label>
            <div className="space-y-5 mb-10 font-inter font-normal text-[15px] leading-[1.9] text-neutral-500">
              <p>
                We have a very well structured and comprehensive course content covering all aspects of Digital Marketing. Our training programs are designed by industry leaders, focused on serving the local business community with the latest step-by-step workshop approach.
              </p>
              <p>
                Operating Media is one of the top Digital Marketing Institutes in India having satisfied students and corporate trainees. Here you can get training from superlative instructors — making you capable in all the tools of Digital Marketing.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-colors duration-200 shadow-[0_8px_28px_rgba(249,115,22,0.32)] hover:shadow-[0_12px_40px_rgba(249,115,22,0.45)] cursor-pointer border-none font-inter font-bold text-sm tracking-[0.02em]"
            >
              Explore Our Programs
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </FadeRight>
        </div>
      </div>

      {/* ══════════════════════════════════════
          09 — BOTTOM CTA BANNER
      ══════════════════════════════════════ */}
      <div className="mx-6 lg:mx-12 mb-12 rounded-[2rem] overflow-hidden relative h-[clamp(240px,36vw,460px)]">
        <ParallaxImage
          src="https://www.operatingmedia.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-07-at-15.40.57.webp"
          alt="Operating Media Campus"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-950/75 via-orange-950/20 to-transparent" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center px-10 lg:px-20"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="font-inter font-bold text-[10px] tracking-[0.22em] text-white/40 uppercase mb-3">Ready to start?</p>
          <h2 className="font-inter font-extrabold text-[clamp(26px,4vw,52px)] tracking-[-0.035em] leading-[1.1] text-white max-w-lg mb-6">
            Your digital career
            <br />
            starts <span className="text-orange-500">here.</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}