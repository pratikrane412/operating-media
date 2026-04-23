import { useState, useEffect, useRef } from "react";
import { Clock, Star, Users, TrendingUp, ArrowUpRight } from "lucide-react";

// ── Intersection Observer hook ───────────────────────────────
function useInView(threshold = 0.06) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── Animated counter hook ────────────────────────────────────
function useCounter(target, duration = 1600, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const n = parseFloat(String(target).replace(/[^0-9.]/g, ""));
    const isFloat = !Number.isInteger(n);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const cur = eased * n;
      setVal(isFloat ? parseFloat(cur.toFixed(1)) : Math.floor(cur));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(n);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

// ── Data ─────────────────────────────────────────────────────
const STATS = [
  { num: 15,  suffix: "+", label: "Years of Experience", Icon: Clock,      color: "orange" },
  { num: 4.8, suffix: "★", label: "Google Rating",       Icon: Star,       color: "yellow" },
  { num: 500, suffix: "+", label: "Students Placed",     Icon: Users,      color: "green"  },
  { num: 94,  suffix: "%", label: "Placement Rate",      Icon: TrendingUp, color: "green"  },
];

const FEATURES = [
  {
    emoji: "🎯",
    title: "Agency-Built Curriculum",
    desc: "Designed by working agency professionals — real tools, live campaigns, zero fluff.",
    accent: "orange",
  },
  {
    emoji: "💼",
    title: "100% Job Assistance",
    desc: "Resume prep, mock interviews, LinkedIn optimisation & direct recruiter connections.",
    accent: "yellow",
  },
  {
    emoji: "🏢",
    title: "Corporate Workshops",
    desc: "Custom in-house digital marketing training tailored to your team and business goals.",
    accent: "orange",
  },
];

const TRUST = [
  "Placement in 30 Days",
  "Live Projects Included",
  "Google Certified Trainers",
  "EMI Options Available",
  "Small Batch Sizes",
  "Lifetime LMS Access",
];

// ── Reusable SVG icons ───────────────────────────────────────
const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const IconCheck = () => (
  <svg className="shrink-0 w-4 h-4" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#22C55E" opacity="0.15" />
    <path d="M8 12l3 3 5-5" stroke="#16A34A" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarSVG = ({ cls = "w-3 h-3" }) => (
  <svg className={`${cls} fill-yellow-400`} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// ── Stat card ────────────────────────────────────────────────
function StatCard({ stat, inView, index }) {
  const counted = useCounter(stat.num, 1500 + index * 150, inView);

  const colors = {
    orange: {
      wrap:   "border-orange-100 hover:border-orange-300",
      icon:   "bg-orange-50 text-orange-500",
      num:    "text-orange-500",
      glow:   "from-orange-50",
    },
    yellow: {
      wrap:   "border-yellow-100 hover:border-yellow-300",
      icon:   "bg-yellow-50 text-yellow-500",
      num:    "text-yellow-500",
      glow:   "from-yellow-50",
    },
    green: {
      wrap:   "border-green-100 hover:border-green-300",
      icon:   "bg-green-50 text-green-500",
      num:    "text-green-500",
      glow:   "from-green-50",
    },
  };

  const c = colors[stat.color];

  return (
    <div
      className={`
        group relative overflow-hidden flex flex-col items-center text-center
        rounded-2xl border bg-white p-6 sm:p-7
        hover:shadow-xl transition-all duration-500 cursor-default
        ${c.wrap}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 100 + 150}ms`, transitionDuration: "700ms" }}
    >
      {/* Corner glow */}
      <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-gradient-to-bl ${c.glow} to-transparent opacity-70`} />

      {/* Icon */}
      <div className={`relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${c.icon} group-hover:scale-110 transition-transform duration-300`}>
        <stat.Icon size={20} strokeWidth={1.8} />
      </div>

      {/* Number — Inter 800, 44px responsive */}
      <p className={`relative font-inter font-extrabold text-4xl lg:text-[44px] leading-none tracking-tight mb-2 ${c.num}`}>
        {inView ? counted : 0}{stat.suffix}
      </p>

      {/* Label — Inter 700, 11px uppercase */}
      <p className="font-inter text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 leading-snug">
        {stat.label}
      </p>
    </div>
  );
}

// ── Feature card ─────────────────────────────────────────────
function FeatureCard({ emoji, title, desc, accent, inView, delay }) {
  const isYellow = accent === "yellow";
  return (
    <div
      className={`
        group flex items-start gap-4 rounded-2xl p-5 bg-white
        border transition-all duration-300 cursor-default
        hover:shadow-[0_6px_24px_rgba(0,0,0,0.07)]
        ${isYellow
          ? "border-yellow-100 hover:border-yellow-300"
          : "border-orange-100 hover:border-orange-300"}
        ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
      `}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: "600ms" }}
    >
      <div className={`
        w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0
        group-hover:scale-110 transition-transform duration-200
        ${isYellow ? "bg-yellow-50" : "bg-orange-50"}
      `}>
        {emoji}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-inter font-bold text-[14px] leading-snug tracking-tight text-gray-950 mb-1">
          {title}
        </h4>
        <p className="font-inter font-normal text-[12px] leading-relaxed text-gray-500">
          {desc}
        </p>
      </div>

      <div className={`
        shrink-0 mt-0.5 transition-all duration-200
        group-hover:translate-x-0.5 group-hover:-translate-y-0.5
        ${isYellow ? "text-yellow-200 group-hover:text-yellow-500" : "text-orange-200 group-hover:text-orange-500"}
      `}>
        <IconArrow />
      </div>
    </div>
  );
}

// ── Main Section ─────────────────────────────────────────────
export default function AboutSection() {
  const [rootRef, inView] = useInView(0.04);

  // Tailwind reveal class builder
  const fadeUp = (delay = "") =>
    `transition-all duration-700 ease-out ${delay} ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
    }`;

  return (
    <section
      ref={rootRef}
      className="relative w-full bg-white overflow-hidden font-inter"
    >

      {/* ── Soft ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-orange-100/40 blur-[110px]" />
        <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-yellow-100/35 blur-[100px]" />
      </div>

      {/* ══════════════════════════════════════
          MAIN 2-COL GRID
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ════ LEFT ════ */}
          <div className="flex flex-col gap-7">

            {/* Eyebrow pill */}
            <div className={fadeUp("delay-75")}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase bg-orange-50 text-orange-600 border border-orange-200">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                About Operating Media
              </span>
            </div>

            {/* H2 — Inter 800, -0.03em, lh 1.08 */}
            <div className={fadeUp("delay-100")}>
              <h2 className="font-inter font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06] tracking-[-0.03em] text-gray-950">
                India's Best
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                    Digital Marketing
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-1000 delay-500 ${inView ? "w-full" : "w-0"}`}
                  />
                </span>
                <br />
                Training Institute.
              </h2>
            </div>

            {/* Body — Inter 400, 16px, lh 1.85 */}
            <p className={`font-inter font-normal text-[16px] leading-[1.85] text-gray-500 max-w-[500px] ${fadeUp("delay-150")}`}>
              Operating Media bridges the gap between{" "}
              <strong className="font-semibold text-gray-900">textbook knowledge</strong>{" "}
              and real industry demands. Built by{" "}
              <strong className="font-semibold text-gray-900">agency professionals</strong>{" "}
              to make you job-ready from Day&nbsp;1 — whether you're a student,
              fresher, or a business owner scaling online.
            </p>

            {/* CTA buttons */}
            <div className={`flex flex-wrap items-center gap-3 ${fadeUp("delay-200")}`}>
              {/* Primary — orange */}
              <button className="group relative overflow-hidden inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-[15px] font-bold shadow-[0_6px_22px_rgba(249,115,22,0.38)] hover:shadow-[0_10px_32px_rgba(249,115,22,0.46)] active:scale-[0.97] transition-all duration-200">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                <span className="relative">Explore Courses</span>
                <span className="relative"><IconArrow /></span>
              </button>

              {/* Ghost */}
              <button className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border border-gray-200 hover:border-orange-300 text-[15px] font-bold text-gray-800 hover:text-orange-600 shadow-sm hover:shadow-md active:scale-[0.97] transition-all duration-200">
                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-orange-50 group-hover:bg-orange-100 shrink-0 transition-colors">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="#F97316">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                Free Demo Class
              </button>
            </div>

            {/* Trust checklist — 2-col sm: 3-col */}
            <div className={`grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5 ${fadeUp("delay-300")}`}>
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <IconCheck />
                  <span className="font-inter font-medium text-[13px] leading-snug text-gray-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Yellow highlight callout ── */}
            <div className={`rounded-2xl bg-yellow-50 border border-yellow-200 px-5 py-4 flex items-start gap-3 ${fadeUp("delay-[380ms]")}`}>
              <span className="text-xl shrink-0">🏆</span>
              <p className="font-inter font-semibold text-[13px] leading-[1.6] text-yellow-900">
                Ranked among India's top digital marketing institutes — trusted by
                500+ placed professionals across leading brands.
              </p>
            </div>

          </div>
          {/* ════ END LEFT ════ */}

          {/* ════ RIGHT ════ */}
          <div className="flex flex-col gap-4">

            {/* ── Classroom image card ── */}
            <div className={`relative ${fadeUp("delay-100")}`}>

              {/* Offset shadow layer */}
              <div className="absolute top-3 left-3 right-[-6px] bottom-[-6px] rounded-2xl -z-10 bg-gradient-to-br from-orange-200/50 to-yellow-200/30" />

              <div className="relative rounded-2xl overflow-hidden ring-1 ring-black/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.10)]">
                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-7 h-7 z-20 border-t-[2.5px] border-l-[2.5px] border-orange-500 rounded-tl-lg pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-7 h-7 z-20 border-b-[2.5px] border-r-[2.5px] border-orange-500 rounded-br-lg pointer-events-none" />

                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=85"
                    alt="Operating Media live classroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8000ms] ease-linear"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between gap-3">
                  <div>
                    <p className="font-inter font-bold text-[14px] text-white leading-snug mb-0.5 drop-shadow">
                      Live Classroom Sessions
                    </p>
                    <p className="font-inter font-normal text-[12px] text-white/65 drop-shadow">
                      Hands-on training by industry experts
                    </p>
                  </div>

                  {/* Rating badge */}
                  <div className="shrink-0 flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-lg">
                    <span className="font-inter font-extrabold text-[22px] leading-none tracking-tight text-gray-900">
                      4.8
                    </span>
                    <div className="flex flex-col gap-[3px]">
                      <div className="flex gap-[2px]">
                        {[...Array(5)].map((_, i) => <StarSVG key={i} />)}
                      </div>
                      <span className="font-inter font-bold text-[8px] tracking-[0.12em] uppercase text-gray-400">
                        Google
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Feature cards ── */}
            <div className="flex flex-col gap-2.5">
              {FEATURES.map(({ emoji, title, desc, accent }, i) => (
                <FeatureCard
                  key={title}
                  emoji={emoji}
                  title={title}
                  desc={desc}
                  accent={accent}
                  inView={inView}
                  delay={280 + i * 90}
                />
              ))}
            </div>

          </div>
          {/* ════ END RIGHT ════ */}

        </div>
      </div>

      {/* ══════════════════════════════════════
          STATS BAND — white cards on light bg
      ══════════════════════════════════════ */}
      <div className="relative z-10 bg-gray-50/80 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-5 lg:py-1">

          {/* Section label */}
          <p className={`font-inter text-[11px] font-bold uppercase tracking-[0.18em] text-gray-600 text-center mb-8 ${fadeUp("delay-100")}`}>
            Why 500+ Professionals Chose Operating Media
          </p>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} inView={inView} index={i} />
            ))}
          </div>

          {/* ── CTA strip — dark ── */}
          <div
            className={`
              relative overflow-hidden flex flex-col sm:flex-row
              items-center justify-between gap-5
              rounded-2xl bg-gray-950 px-7 py-6
              transition-all duration-700 ease-out delay-700
              ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
          >
            {/* Subtle orange glow inside */}
            <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none" />

            <div className="relative">
              <p className="font-inter font-bold text-[20px] leading-snug tracking-tight text-white">
                Ready to start your digital marketing career?
              </p>
              <p className="font-inter font-normal text-[14px] leading-[1.65] text-white/40 mt-1">
                Join 500+ placed professionals. Next batch starts June&nbsp;2025.
              </p>
            </div>

            <button className="group relative shrink-0 overflow-hidden inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-[15px] font-bold shadow-[0_6px_28px_rgba(249,115,22,0.50)] hover:shadow-[0_10px_36px_rgba(249,115,22,0.60)] active:scale-[0.97] transition-all duration-200 whitespace-nowrap">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              <span className="relative">Book Free Demo</span>
              <span className="relative"><IconArrow /></span>
            </button>
          </div>

        </div>
      </div>
      {/* ══ END STATS BAND ══ */}

    </section>
  );
}
