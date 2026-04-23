import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2, Users2, Trophy,
  Briefcase, ArrowUpRight, Sparkles, ShieldCheck,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
//  OPERATING MEDIA — WhyUsAuthority
// ─────────────────────────────────────────────────────────────────────────────

// ── Intersection hook ────────────────────────────────────────────────────────
function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { setInView(true); return; }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── Animation presets ────────────────────────────────────────────────────────
const fadeUp    = (d = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  viewport: { once: true, margin: "-40px" },
});
const fadeRight = (d = 0) => ({
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  viewport: { once: true },
});
const fadeLeft = (d = 0) => ({
  initial: { opacity: 0, x: 24 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  viewport: { once: true },
});
const scaleIn = (d = 0) => ({
  initial: { opacity: 0, scale: 0.93 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  viewport: { once: true, margin: "-40px" },
});

// ── Data ─────────────────────────────────────────────────────────────────────
const REASONS = [
  {
    title: "15+ Years of Legacy",
    desc: "Mumbai's pioneer in digital education since 2011 — the institute top agencies trust.",
    Icon: Trophy,
    iconBg: "bg-orange-50",
    iconColor: "#F26522",
    stat: "15+",
    statColor: "#F26522",
    hoverShadow: "hover:shadow-[0_16px_48px_rgba(242,101,34,0.12)]",
    hoverBorder: "hover:border-orange-200",
    hoverTitle: "group-hover:text-[#F26522]",
  },
  {
    title: "1,600+ Students Trained",
    desc: "A growing network of placed professionals working at top agencies across India.",
    Icon: Users2,
    iconBg: "bg-yellow-50",
    iconColor: "#FFB81C",
    stat: "1,600+",
    statColor: "#FFB81C",
    hoverShadow: "hover:shadow-[0_16px_48px_rgba(255,184,28,0.12)]",
    hoverBorder: "hover:border-yellow-200",
    hoverTitle: "group-hover:text-[#FFB81C]",
  },
  {
    title: "Google & Meta Certified",
    desc: "Validate your skills with globally recognised certifications from Google, Meta & HubSpot.",
    Icon: CheckCircle2,
    iconBg: "bg-orange-50",
    iconColor: "#F26522",
    stat: "5+",
    statColor: "#F26522",
    hoverShadow: "hover:shadow-[0_16px_48px_rgba(242,101,34,0.10)]",
    hoverBorder: "hover:border-orange-200",
    hoverTitle: "group-hover:text-[#F26522]",
  },
  {
    title: "400+ Hiring Partners",
    desc: "Direct access to full-time roles and internships through our active recruiter network.",
    Icon: Briefcase,
    iconBg: "bg-yellow-50",
    iconColor: "#FFB81C",
    stat: "400+",
    statColor: "#FFB81C",
    hoverShadow: "hover:shadow-[0_16px_48px_rgba(255,184,28,0.10)]",
    hoverBorder: "hover:border-yellow-200",
    hoverTitle: "group-hover:text-[#FFB81C]",
  },
];

export default function WhyUsAuthority() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white py-5 lg:py-10"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(242,101,34,0.09) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute -bottom-20 -left-24 h-[380px] w-[380px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,184,28,0.07) 0%, transparent 70%)", filter: "blur(80px)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div className="max-w-2xl" {...fadeRight(0)}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 shrink-0" style={{ background: "#F26522" }} />
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "#F26522" }}
              >
                Why Operating Media Beats the Rest
              </span>
            </div>

            <h2 className="mb-2 text-5xl font-extrabold leading-[0.9] tracking-[-0.04em] text-gray-950 sm:text-6xl lg:text-7xl">
              The Standard
              <br />
              of{" "}
              <span
                style={{
                  background: "linear-gradient(95deg, #F26522 0%, #FFB81C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Digital Mastery.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-sm border-l-[3px] pl-6"
            style={{ borderColor: "#F26522" }}
            {...fadeLeft(0.12)}
          >
            <p className="text-base italic leading-[1.75] text-gray-500">
              "We don't just teach modules — we build careers using the same AI tools
              that world-class agencies use every day."
            </p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F26522" }}>
              — Operating Media, Mumbai
            </p>
          </motion.div>
        </div>

        {/* Main 2-col grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* BENTO LEFT */}
          <div className="lg:col-span-7">
            <div className="grid h-[480px] grid-cols-12 grid-rows-6 gap-3 sm:h-[580px] sm:gap-4 lg:h-[640px]">
              <motion.div className="relative col-span-8 row-span-4 overflow-hidden rounded-3xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] group" {...scaleIn(0)}>
                <img src="/images/OM-images.jpg" alt="Classroom" className="h-full w-full object-cover transition-transform duration-[9000ms] group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute bottom-6 left-6 z-10">
                  <p className="text-xl font-black italic text-white">"Real Skills. <br />Real Results."</p>
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-widest text-white/60">Live Classroom Experience</p>
                </div>
              </motion.div>

              <motion.div className="col-span-4 row-span-3 flex flex-col items-center justify-center rounded-3xl p-5 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #FFB81C 0%, #F26522 100%)" }} {...scaleIn(0.08)}>
                <p className="relative z-10 text-5xl font-black text-white lg:text-6xl">89%</p>
                <p className="relative z-10 text-[9px] font-bold uppercase tracking-widest text-white/75">Placement Rate</p>
              </motion.div>

              <motion.div className="relative col-span-4 row-span-3 overflow-hidden rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.10)]" {...scaleIn(0.14)}>
                <img src="/images/OM-images2.jpg" alt="Student" className="h-full w-full object-cover" />
              </motion.div>

              <motion.a href="#brochure" className="relative col-span-8 row-span-2 flex cursor-pointer items-center justify-between gap-4 overflow-hidden rounded-3xl p-5 sm:p-6 group" style={{ background: "linear-gradient(95deg, #F26522 0%, #FFB81C 100%)", boxShadow: "0 8px 28px rgba(242,101,34,0.35)" }} {...scaleIn(0.18)}>
                <div className="relative z-10">
                  <h3 className="text-base font-black text-white sm:text-lg">Ready to Start?</h3>
                  <p className="text-xs text-white/80">Download our 2026 Master Syllabus</p>
                </div>
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white transition-all group-hover:scale-110">
                  <ArrowUpRight size={20} style={{ color: "#F26522" }} />
                </span>
              </motion.a>
            </div>
          </div>

          {/* RIGHT: REASON CARDS */}
          <div className="flex flex-col justify-center gap-3 lg:col-span-5">
            {REASONS.map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.08 }} viewport={{ once: true }} className={`group flex cursor-default items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 ${item.hoverBorder} ${item.hoverShadow}`}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all group-hover:scale-110 ${item.iconBg}`}>
                  <item.Icon size={22} style={{ color: item.iconColor }} />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-start justify-between">
                    <h4 className={`text-[15px] font-bold text-gray-950 transition-colors ${item.hoverTitle}`}>{item.title}</h4>
                    <span className="text-sm font-black" style={{ color: item.statColor }}>{item.stat}</span>
                  </div>
                  <p className="text-[13px] text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div {...fadeUp(0.36)} className="flex items-center gap-3 rounded-2xl border px-5 py-3.5" style={{ borderColor: "rgba(58,170,53,0.30)", background: "rgba(58,170,53,0.05)" }}>
              <ShieldCheck size={18} style={{ color: "#3AAA35" }} />
              <div className="flex-1">
                <p className="text-[13px] font-bold text-[#1a5c17]">ISO 9001:2015 Certified Training</p>
                <p className="text-[11px] text-[#3AAA35]">Govt. of India · MSME Registered</p>
              </div>
            </motion.div>

            <motion.a href="#courses" {...fadeUp(0.44)} className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-[15px] font-bold text-white" style={{ background: "linear-gradient(95deg, #F26522 0%, #FFB81C 100%)", boxShadow: "0 8px 28px rgba(242,101,34,0.38)" }}>
              <Sparkles size={16} className="text-white/70" />
              Explore All Courses
              <ArrowUpRight size={15} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}