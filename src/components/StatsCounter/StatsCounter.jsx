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

/* ── Animated Counter ── */
const CounterValue = ({ value, isDecimal = false }) => {
  const ref         = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 55, stiffness: 90 });
  const isInView    = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
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
  },
  {
    num: 1200, suffix: "+",
    label: "Successful", sub: "Batches",
    Icon: BookOpen,
  },
  {
    num: 15, suffix: "+",
    label: "Years of", sub: "Excellence",
    Icon: Trophy,
  },
  {
    num: 4.8, suffix: "★",
    label: "Google", sub: "Rating",
    Icon: Star,
    isDecimal: true,
  },
];

const TRUST = [
  { Icon: ShieldCheck, text: "ISO 9001 Certified"      },
  { Icon: CheckCircle, text: "Google Partner"           },
  { Icon: Zap,         text: "100% Placement Support"  },
  { Icon: TrendingUp,  text: "94% Placement Rate"      },
];

/* ── Stat Card ── */
const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    className="group relative flex flex-col items-center justify-center text-center
      overflow-hidden rounded-2xl border border-gray-100 bg-white
      px-5 py-7 shadow-sm hover:shadow-md hover:border-orange-200
      transition-all duration-300 cursor-default"
  >
    {/* Orange top bar */}
    <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange-500 rounded-t-2xl" />

    {/* Icon */}
    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl
      bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
      <stat.Icon size={20} strokeWidth={1.6} className="text-orange-500" />
    </div>

    {/* Number */}
    <div className="mb-1.5 flex items-baseline gap-0.5 font-black leading-none
      tracking-tighter text-gray-950"
      style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}>
      <CounterValue value={stat.num} isDecimal={stat.isDecimal} />
      <span className="text-orange-500 text-[0.55em] ml-0.5">{stat.suffix}</span>
    </div>

    {/* Labels */}
    <p className="text-[11px] font-black uppercase tracking-[0.16em] text-gray-800 leading-tight">
      {stat.label}
    </p>
    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-gray-400">
      {stat.sub}
    </p>
  </motion.div>
);

/* ── Main Section ── */
export default function StatsSection() {
  return (
    <section className="w-full bg-white px-4 py-12 relative">

      {/* Dot grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, #9CA3AF 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden">
        <div className="mx-auto h-28 w-1/2 rounded-full bg-orange-50 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-orange-300 rounded-full" />
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-500">
            Trusted by 11,000+ Professionals Across India
          </span>
          <span className="h-px w-8 bg-orange-300 rounded-full" />
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5 mb-5">
          {STATS.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} />
          ))}
        </div>

        {/* Trust + CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="flex flex-col items-center gap-5 rounded-2xl
            border border-gray-100 bg-gray-50/60 px-6 py-4
            lg:flex-row lg:justify-between"
        >
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 lg:justify-start">
            {TRUST.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5">
                <Icon size={13} strokeWidth={1.9} className="shrink-0 text-orange-500" />
                <span className="text-[12px] font-semibold text-gray-500">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="group relative overflow-hidden inline-flex shrink-0 items-center
            gap-2 rounded-xl bg-orange-500 hover:bg-orange-600
            px-6 py-3 text-[13px] font-extrabold text-white
            shadow-[0_4px_16px_rgba(249,115,22,0.3)]
            hover:shadow-[0_8px_24px_rgba(249,115,22,0.4)]
            active:scale-[0.97] transition-all duration-200 cursor-pointer border-none">
            {/* Shimmer */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full
              bg-gradient-to-r from-transparent via-white/20 to-transparent
              transition-transform duration-500 ease-in-out" />
            <span className="relative z-10">See Our Placements</span>
            <ArrowUpRight size={14} className="relative z-10 group-hover:-translate-y-0.5
              group-hover:translate-x-0.5 transition-transform duration-200" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}