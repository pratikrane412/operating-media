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
const fadeUp = (d = 0) => ({
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

const SATOSHI = "'Satoshi', sans-serif";

export default function WhyUsAuthority() {
  // Inject Satoshi font
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
    <section
      className="relative w-full overflow-hidden bg-white py-5 lg:py-10"
      style={{ fontFamily: SATOSHI }}
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

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

          <motion.div className="max-w-2xl" {...fadeRight(0)}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 shrink-0" style={{ background: "#F26522" }} />
              <span
                style={{
                  color: "#F26522",
                  fontFamily: SATOSHI,
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                Why Operating Media Beats the Rest
              </span>
            </div>

            <h2
              style={{
                fontFamily: SATOSHI,
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                color: "#030712",
                marginBottom: "8px",
              }}
            >
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
            <p
              style={{
                fontFamily: SATOSHI,
                fontWeight: 400,
                fontSize: "16.5px",
                fontStyle: "italic",
                lineHeight: 1.8,
                color: "#6B7280",
              }}
            >
              "We don't just teach modules — we build careers using the same AI tools
              that world-class agencies use every day."
            </p>
            <p
              style={{
                fontFamily: SATOSHI,
                fontWeight: 700,
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "#F26522",
                marginTop: "12px",
              }}
            >
              — Operating Media, Mumbai
            </p>
          </motion.div>
        </div>

        {/* ── Main 2-col grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">

          {/* BENTO LEFT */}
          <div className="lg:col-span-7">
            <div className="grid h-[480px] grid-cols-12 grid-rows-6 gap-3 sm:h-[580px] sm:gap-4 lg:h-[640px]">

              {/* Main classroom image */}
              <motion.div
                className="relative col-span-8 row-span-4 overflow-hidden rounded-3xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] group"
                {...scaleIn(0)}
              >
                <img
                  src="/images/OM-images.jpg"
                  alt="Classroom"
                  className="h-full w-full object-cover transition-transform duration-[9000ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <div className="absolute bottom-6 left-6 z-10">
                  <p
                    style={{
                      fontFamily: SATOSHI,
                      fontWeight: 900,
                      fontSize: "23px",
                      fontStyle: "italic",
                      color: "#fff",
                      lineHeight: 1.25,
                    }}
                  >
                    "Real Skills. <br />Real Results."
                  </p>
                  <p
                    style={{
                      fontFamily: SATOSHI,
                      fontWeight: 700,
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color: "rgba(255,255,255,0.6)",
                      marginTop: "6px",
                    }}
                  >
                    Live Classroom Experience
                  </p>
                </div>
              </motion.div>

              {/* Placement rate badge */}
              <motion.div
                className="col-span-4 row-span-3 flex flex-col items-center justify-center rounded-3xl p-5 text-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #FFB81C 0%, #F26522 100%)" }}
                {...scaleIn(0.08)}
              >
                <p
                  className="relative z-10"
                  style={{
                    fontFamily: SATOSHI,
                    fontWeight: 900,
                    color: "#fff",
                    fontSize: "clamp(2.8rem, 5vw, 3.75rem)",
                    lineHeight: 1,
                  }}
                >
                  89%
                </p>
                <p
                  className="relative z-10"
                  style={{
                    fontFamily: SATOSHI,
                    fontWeight: 700,
                    fontSize: "11px",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.75)",
                    marginTop: "8px",
                  }}
                >
                  Placement Rate
                </p>
              </motion.div>

              {/* Student image */}
              <motion.div
                className="relative col-span-4 row-span-3 overflow-hidden rounded-3xl shadow-[0_12px_32px_rgba(0,0,0,0.10)]"
                {...scaleIn(0.14)}
              >
                <img
                  src="/images/OM-images2.jpg"
                  alt="Student"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* CTA strip */}
              <motion.a
                href="#brochure"
                className="relative col-span-8 row-span-2 flex cursor-pointer items-center justify-between gap-4 overflow-hidden rounded-3xl p-5 sm:p-6 group"
                style={{
                  background: "linear-gradient(95deg, #F26522 0%, #FFB81C 100%)",
                  boxShadow: "0 8px 28px rgba(242,101,34,0.35)",
                }}
                {...scaleIn(0.18)}
              >
                <div className="relative z-10">
                  <h3
                    style={{
                      fontFamily: SATOSHI,
                      fontWeight: 900,
                      fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                      color: "#fff",
                    }}
                  >
                    Ready to Start?
                  </h3>
                  <p
                    style={{
                      fontFamily: SATOSHI,
                      fontWeight: 400,
                      fontSize: "13.5px",
                      color: "rgba(255,255,255,0.8)",
                      marginTop: "2px",
                    }}
                  >
                    Download our 2026 Master Syllabus
                  </p>
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
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`group flex cursor-default items-start gap-4 rounded-2xl border border-gray-100 bg-white p-5 transition-all duration-300 ${item.hoverBorder} ${item.hoverShadow}`}
              >
                <div
                  className={`flex shrink-0 items-center justify-center rounded-2xl transition-all group-hover:scale-110 ${item.iconBg}`}
                  style={{ width: "52px", height: "52px" }}
                >
                  <item.Icon size={24} style={{ color: item.iconColor }} />
                </div>
                <div className="flex-1">
                  <div className="mb-1.5 flex items-start justify-between gap-2">
                    <h4
                      className={`transition-colors leading-snug ${item.hoverTitle}`}
                      style={{
                        fontFamily: SATOSHI,
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#030712",
                      }}
                    >
                      {item.title}
                    </h4>
                    <span
                      style={{
                        fontFamily: SATOSHI,
                        fontWeight: 900,
                        fontSize: "15px",
                        color: item.statColor,
                        flexShrink: 0,
                      }}
                    >
                      {item.stat}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: SATOSHI,
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "#6B7280",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* ISO badge */}
            <motion.div
              {...fadeUp(0.36)}
              className="flex items-center gap-3 rounded-2xl border px-5 py-4"
              style={{ borderColor: "rgba(58,170,53,0.30)", background: "rgba(58,170,53,0.05)" }}
            >
              <ShieldCheck size={20} style={{ color: "#3AAA35" }} />
              <div className="flex-1">
                <p
                  style={{
                    fontFamily: SATOSHI,
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#1a5c17",
                  }}
                >
                  ISO 9001:2015 Certified Training
                </p>
                <p
                  style={{
                    fontFamily: SATOSHI,
                    fontWeight: 500,
                    fontSize: "12px",
                    color: "#3AAA35",
                    marginTop: "2px",
                  }}
                >
                  Govt. of India · MSME Registered
                </p>
              </div>
            </motion.div>

            {/* CTA button */}
            <motion.a
              href="#courses"
              {...fadeUp(0.44)}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(242,101,34,0.44)]"
              style={{
                fontFamily: SATOSHI,
                fontWeight: 700,
                fontSize: "16px",
                background: "linear-gradient(95deg, #F26522 0%, #FFB81C 100%)",
                boxShadow: "0 8px 28px rgba(242,101,34,0.38)",
              }}
            >
              <Sparkles size={17} className="text-white/70" />
              Explore All Courses
              <ArrowUpRight size={16} />
            </motion.a>

          </div>
        </div>
      </div>
    </section>
  );
}