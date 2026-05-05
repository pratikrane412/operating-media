import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useInView,
  useTransform,
} from "framer-motion";
import {
  Users, BookOpen, Trophy, Star,
  ArrowUpRight, TrendingUp, ShieldCheck,
  CheckCircle, Zap,
} from "lucide-react";

/* ── Animated Counter Logic ── */
const CounterValue = ({ value, isDecimal = false }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 80 });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  const display = useTransform(springValue, (v) =>
    isDecimal ? v.toFixed(1) : Math.floor(v).toLocaleString()
  );

  return <motion.span ref={ref}>{display}</motion.span>;
};

/* ── Data ── */
const STATS = [
  {
    num: 11000, suffix: "+",
    label: "Professionals", sub: "Trained",
    Icon: Users,
    color: "orange"
  },
  {
    num: 1200, suffix: "+",
    label: "Successful", sub: "Batches",
    Icon: BookOpen,
    color: "amber"
  },
  {
    num: 15, suffix: "+",
    label: "Years of", sub: "Excellence",
    Icon: Trophy,
    color: "orange"
  },
  {
    num: 4.8, suffix: "★",
    label: "Google", sub: "Rating",
    Icon: Star,
    isDecimal: true,
    color: "amber"
  },
];

const TRUST = [
  { Icon: ShieldCheck, text: "ISO 9001 Certified" },
  { Icon: CheckCircle, text: "Google Partner" },
  { Icon: Zap, text: "100% Placement Support" },
  { Icon: TrendingUp, text: "94% Placement Rate" },
];

/* ── Stat Card Component ── */
const StatCard = ({ stat, index }) => {
  const isOrange = stat.color === "orange";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className={`group relative flex flex-col items-center justify-center text-center overflow-hidden rounded-3xl border bg-white/80 backdrop-blur-md px-4 py-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isOrange ? 'border-orange-100 hover:border-orange-300' : 'border-amber-100 hover:border-amber-300'}`}
    >
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl ${isOrange ? 'bg-orange-500' : 'bg-amber-400'}`} />

      {/* Background Glow on Hover */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none bg-gradient-to-b from-transparent ${isOrange ? 'to-orange-500' : 'to-amber-500'}`} />

      {/* Icon */}
      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl shadow-inner transition-transform duration-300 group-hover:scale-110 ${isOrange ? 'bg-orange-50 text-orange-500' : 'bg-amber-50 text-amber-500'}`}>
        <stat.Icon size={26} strokeWidth={2} />
      </div>

      {/* Animated Number */}
      <div className="mb-2 flex items-baseline gap-1 leading-none tracking-tight text-gray-900 font-black text-[clamp(2.2rem,4vw,3.2rem)]">
        <CounterValue value={stat.num} isDecimal={stat.isDecimal} />
        <span className={`${isOrange ? 'text-orange-500' : 'text-amber-500'}`} style={{ fontSize: "0.6em" }}>{stat.suffix}</span>
      </div>

      {/* Labels */}
      <p className="font-bold text-[13px] uppercase tracking-widest text-gray-800 leading-tight">
        {stat.label}
      </p>
      <p className="mt-1 font-semibold text-[11px] uppercase tracking-[0.15em] text-gray-400">
        {stat.sub}
      </p>
    </motion.div>
  );
};

/* ── Main Section ── */
export default function StatsSection() {
  
  // Inject Satoshi font dynamically
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 lg:py-24 selection:bg-orange-500 selection:text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>

      {/* ── Background Subtle Details ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-orange-300/20 to-transparent blur-[80px] pointer-events-none" />

      {/* ── Main Container Aligning with rest of page max-w-[1400px] ── */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-12">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-14 flex items-center justify-center gap-3"
        >
          <span className="h-[2px] w-10 bg-gradient-to-r from-transparent to-orange-400 rounded-full" />
          <span className="font-bold text-[12px] uppercase tracking-[0.2em] text-orange-600 text-center">
            Trusted by 16,000+ Professionals Across India
          </span>
          <span className="h-[2px] w-10 bg-gradient-to-l from-transparent to-orange-400 rounded-full" />
        </motion.div>

        {/* ── Stat Cards Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>

        {/* ── Bottom Trust & CTA Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-6 rounded-3xl border border-gray-200/60 bg-white p-6 sm:p-8 shadow-sm"
        >
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
            {TRUST.map(({ Icon, text }, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <Icon size={18} strokeWidth={2.5} className="shrink-0 text-green-500" />
                <span className="font-bold text-[13px] md:text-[14px] text-gray-700 tracking-wide">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="group relative overflow-hidden inline-flex shrink-0 items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-500 px-8 py-4 shadow-[0_8px_25px_-8px_rgba(249,115,22,0.6)] hover:shadow-[0_12px_30px_-10px_rgba(249,115,22,0.8)] active:scale-95 transition-all duration-300 w-full lg:w-auto justify-center">
            {/* Shimmer Effect */}
            <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-shine" />
            <span className="font-black text-[15px] text-white relative z-10">See Our Placements</span>
            <ArrowUpRight size={18} strokeWidth={2.5} className="text-white relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>

      {/* ── Custom Keyframes ── */}
      <style>{`
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 1.5s ease; }
      `}</style>
      
    </section>
  );
}