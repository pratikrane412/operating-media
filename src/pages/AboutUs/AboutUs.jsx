import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, ArrowUpRight } from "lucide-react";

// ── Font Injection ─────────────────────────────────────────
function useFonts() {
    useEffect(() => {
        if (!document.querySelector('link[data-font="satoshi"]')) {
            const l = document.createElement("link");
            l.rel = "stylesheet";
            l.setAttribute("data-font", "satoshi");
            l.href =
                "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
            document.head.appendChild(l);
        }
    }, []);
}

// ── Animated Counter ──────────────────────────────────────
function Counter({ target, suffix = "", duration = 2200 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!inView) return;
        const n = parseFloat(String(target).replace(/[^0-9.]/g, ""));
        const start = performance.now();
        const tick = (now) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 4);
            setVal(Number.isInteger(n) ? Math.floor(eased * n) : parseFloat((eased * n).toFixed(1)));
            if (p < 1) requestAnimationFrame(tick);
            else setVal(n);
        };
        requestAnimationFrame(tick);
    }, [inView, target, duration]);
    return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

// ── Scroll Reveal ─────────────────────────────────────────
function Reveal({ children, delay = 0, x = 0, className = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, x }}
            animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ═══════════════════════════════════════════════════════════
// SECTION 1 — HERO  (Diagonal split, editorial typography)
// ═══════════════════════════════════════════════════════════
function AboutHero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden"
            style={{ fontFamily: "'Satoshi', sans-serif", background: "#F5F0E8" }}
        >
            {/* Diagonal split */}
            <div
                className="absolute inset-0 z-0"
                style={{ background: "linear-gradient(108deg, #F5F0E8 52%, #0f172a 52%)" }}
            />
            {/* Dot texture on dark side */}
            <div
                className="absolute right-0 top-0 w-1/2 h-full z-0"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(236,171,0,0.18) 1px, transparent 1px)",
                    backgroundSize: "26px 26px",
                }}
            />

            <div className="relative z-10 max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 min-h-screen flex flex-col justify-center py-28 lg:py-0">

                {/* Top eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="flex items-center gap-4 mb-10"
                >
                    <div className="h-px w-12 bg-[#ECAB00]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#0f172a]">
                        About Operating Media
                    </span>
                </motion.div>

                {/* Mega headline */}
                <div className="mb-10">
                    {["Building", "India's", "Digital", "Generation."].map((word, i) => (
                        <div key={word} className="overflow-hidden">
                            <motion.div
                                initial={{ y: "110%" }}
                                animate={mounted ? { y: "0%" } : {}}
                                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 + i * 0.11 }}
                                style={{
                                    fontFamily: "'Satoshi', sans-serif",
                                    fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
                                    fontWeight: 900,
                                    lineHeight: 0.95,
                                    color: i === 1 ? "#ECAB00" : i === 3 ? "#F5F0E8" : "#0f172a",
                                    fontStyle: i === 3 ? "italic" : "normal",
                                }}
                            >
                                {word}
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Bottom row: subtext left, buttons right */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={mounted ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.56 }}
                    className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
                >
                    <p className="text-[17px] font-medium text-gray-600 leading-[1.8] max-w-[420px]">
                        Since 2011, we've trained{" "}
                        <span className="font-bold text-[#0f172a]">30,000+ students</span> with one mission —
                        genuine job-readiness, not just a certificate.
                    </p>
                    <div className="flex flex-wrap gap-3 shrink-0">
                        <button className="group flex items-center gap-2 bg-[#ECAB00] text-[#0f172a] font-bold text-[14px] px-7 py-3.5 rounded-full hover:bg-[#0f172a] hover:text-[#ECAB00] transition-all duration-300 active:scale-95">
                            Explore Courses
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center gap-2 border border-[#0f172a]/25 text-[#0f172a] font-bold text-[14px] px-7 py-3.5 rounded-full hover:border-[#ECAB00] hover:text-[#ECAB00] transition-all duration-300 active:scale-95">
                            Download Brochure
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Stats strip — pinned to bottom */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative z-10 grid grid-cols-2 lg:grid-cols-4 border-t border-[#0f172a]/10"
            >
                {[
                    { num: 14, suffix: "+", label: "Years Experience" },
                    { num: 30000, suffix: "+", label: "Students Trained" },
                    { num: 400, suffix: "+", label: "Hiring Partners" },
                    { num: 89, suffix: "%", label: "Placement Rate" },
                ].map((s, i) => (
                    <div
                        key={i}
                        className="group flex flex-col items-center justify-center py-8 px-6 bg-[#F5F0E8] hover:bg-[#0f172a] border-r border-[#0f172a]/10 last:border-r-0 transition-colors duration-400 cursor-default"
                    >
                        <span
                            className="font-black text-[42px] leading-none text-[#0f172a] group-hover:text-[#ECAB00] transition-colors duration-300 mb-2"
                            style={{ fontFamily: "'Satoshi', sans-serif" }}
                        >
                            <Counter target={s.num} suffix={s.suffix} />
                        </span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400 group-hover:text-[#F5F0E8]/50 transition-colors duration-300">
                            {s.label}
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════
// SECTION 2 — WHO WE ARE  (Magazine asymmetric layout)
// ═══════════════════════════════════════════════════════════
function WhoWeAre() {
    return (
        <section
            className="relative w-full bg-white overflow-hidden py-24 lg:py-36"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
            {/* Decorative bg letters */}
            <div
                className="absolute -right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[260px] font-black leading-none text-gray-50"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
                OM
            </div>

            <div className="relative z-10 max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

                    {/* Left sticky col */}
                    <div className="lg:col-span-4 lg:sticky lg:top-28">
                        <Reveal>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-px bg-[#ECAB00]" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-gray-400">Who We Are</span>
                            </div>
                            <h2
                                className="font-black leading-[1.05] text-[#0f172a] mb-8"
                                style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "clamp(2.4rem, 4vw, 3.8rem)" }}
                            >
                                One in Top 5<br />
                                <em className="text-[#ECAB00] not-italic">Since</em><br />
                                14 Years.
                            </h2>
                        </Reveal>

                        {/* Image card */}
                        <Reveal delay={0.1}>
                            <div className="relative rounded-2xl overflow-hidden h-[300px]">
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                                    alt="Classroom"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/75 to-transparent" />
                                <div className="absolute bottom-5 left-5 flex items-center gap-3 bg-white/95 px-4 py-2.5 rounded-xl shadow-lg">
                                    <div className="text-[#ECAB00] text-lg">★★★★★</div>
                                    <div>
                                        <p className="font-black text-[20px] text-[#0f172a] leading-none">4.8</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Google</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right content */}
                    <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-10 pt-2">
                        <Reveal delay={0.1}>
                            <p className="text-[20px] lg:text-[22px] font-medium text-gray-600 leading-[1.8] border-l-4 border-[#ECAB00] pl-6">
                                We are <span className="font-bold text-[#0f172a]">Operating Media</span> — one of India's leading
                                Digital Marketing training providers. If you aspire to master digital marketing and excel in internet
                                marketing, you are in exactly the right place.
                            </p>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <p className="text-[16px] text-gray-500 leading-[1.9] font-medium">
                                We also offer customised Digital Marketing Workshops for corporate organisations looking to leverage
                                digital marketing to take their businesses to the next level. With leading industry experts, world-class
                                infrastructure, and a curriculum covering every aspect of digital marketing — our certified professionals
                                ensure you walk out job-ready from Day 1.
                            </p>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-[16px] text-gray-500 leading-[1.9] font-medium">
                                Our training programs are designed by industry leaders. The course material is focused on serving the
                                local business community with the latest step-by-step workshop approach. We instruct students with the
                                latest techniques in digital marketing — from SEO and performance ads to AI-powered content workflows.
                            </p>
                        </Reveal>

                        <Reveal delay={0.25}>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "Live Projects Included",
                                    "Google Certified Trainers",
                                    "100% Placement Assistance",
                                    "EMI Options Available",
                                    "Small Batch Sizes",
                                    "ISO 9001:2015 Certified",
                                ].map((t) => (
                                    <div
                                        key={t}
                                        className="flex items-center gap-3 bg-[#F5F0E8] px-4 py-3 rounded-xl hover:bg-[#ECAB00]/15 transition-colors duration-300 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] shrink-0" />
                                        <span className="text-[13px] font-bold text-[#0f172a]">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════
// SECTION 3 — VALUES  (Full-bleed dark, alternating rows)
// ═══════════════════════════════════════════════════════════
const VALUES = [
    {
        num: "01",
        title: "Practical-First Learning",
        desc: "Every module is built around live projects and real campaigns — because theory alone never built a career. Students run actual ad campaigns with real budgets from Week 1.",
        img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
        accent: "#ECAB00",
    },
    {
        num: "02",
        title: "Industry-Built Curriculum",
        desc: "Crafted by working agency professionals who know exactly what employers want. Updated quarterly to include AI tools, automation, and the skills companies actually hire for.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        accent: "#2563EB",
    },
    {
        num: "03",
        title: "Placement Guaranteed",
        desc: "Our 400+ hiring partner network means real job opportunities — not just a LinkedIn post. Resume prep, mock interviews, and direct recruiter connects are all included.",
        img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
        accent: "#ECAB00",
    },
];

function OurValues() {
    return (
        <section
            className="relative w-full bg-[#0f172a] overflow-hidden"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
            {/* Header */}
            <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-16">
                <Reveal>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-10 bg-[#ECAB00]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ECAB00]">
                            What We Stand For
                        </span>
                    </div>
                    <h2
                        className="font-black leading-[1.0] text-[#F5F0E8]"
                        style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
                    >
                        Our Core{" "}
                        <em className="italic text-[#ECAB00]">Values.</em>
                    </h2>
                </Reveal>
            </div>

            {/* Alternating rows */}
            {VALUES.map((v, i) => {
                const isEven = i % 2 === 0;
                return (
                    <Reveal key={i} delay={0.05}>
                        <div
                            className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"} border-t border-white/10`}
                        >
                            {/* Image half */}
                            <div className="w-full lg:w-1/2 h-[260px] lg:h-[400px] overflow-hidden relative group">
                                <img
                                    src={v.img}
                                    alt={v.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-[#0f172a]/50 group-hover:bg-[#0f172a]/15 transition-colors duration-500" />
                                <span
                                    className="absolute top-6 left-6 font-black text-[64px] leading-none opacity-25"
                                    style={{ fontFamily: "'Satoshi', sans-serif", color: v.accent }}
                                >
                                    {v.num}
                                </span>
                            </div>
                            {/* Text half */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-16 py-14 lg:py-20">
                                <span className="font-black text-[13px] tracking-widest mb-5" style={{ color: v.accent }}>
                                    {v.num}
                                </span>
                                <h3
                                    className="font-black text-[#F5F0E8] leading-[1.1] mb-6"
                                    style={{
                                        fontFamily: "'Satoshi', sans-serif",
                                        fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                                    }}
                                >
                                    {v.title}
                                </h3>
                                <p className="text-[16px] font-medium text-[#F5F0E8]/55 leading-[1.9] max-w-md">{v.desc}</p>
                            </div>
                        </div>
                    </Reveal>
                );
            })}
        </section>
    );
}

// ═══════════════════════════════════════════════════════════
// SECTION 4 — TIMELINE  (Horizontal grid, warm cream bg)
// ═══════════════════════════════════════════════════════════
const MILESTONES = [
    { year: "2011", title: "Founded", desc: "Single batch. Bold vision. A promise to bridge classroom and real industry." },
    { year: "2015", title: "Andheri Campus", desc: "Rapid growth led to a dedicated centre, steps from Andheri station and Metro." },
    { year: "2018", title: "Corporate Wing", desc: "Launched customised workshops — upskilling moved into boardrooms." },
    { year: "2022", title: "AI Curriculum", desc: "Every course overhauled with AI tools, automation, and ChatGPT workflows." },
    { year: "2024", title: "Borivali Campus", desc: "Two campuses, one uncompromising standard of excellence." },
];

function Timeline() {
    return (
        <section
            className="relative w-full bg-[#F5F0E8] overflow-hidden py-24 lg:py-36"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
            <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16">
                <Reveal className="mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-4 mb-5">
                                <div className="h-px w-10 bg-[#ECAB00]" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-gray-400">Our Journey</span>
                            </div>
                            <h2
                                className="font-black leading-[1.0] text-[#0f172a]"
                                style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
                            >
                                14 Years of<br />
                                <em className="italic text-[#ECAB00]">Milestones.</em>
                            </h2>
                        </div>
                        <p className="text-[16px] font-medium text-gray-500 max-w-sm leading-relaxed lg:pb-3 border-l-4 border-[#ECAB00] pl-5">
                            From a single classroom in 2011 to Mumbai's most trusted digital marketing institute.
                        </p>
                    </div>
                </Reveal>

                {/* Timeline grid */}
                <div className="relative">
                    <div className="hidden lg:block absolute top-[26px] left-0 right-0 h-px bg-[#0f172a]/12" />
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
                        {MILESTONES.map((m, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div className="flex lg:flex-col gap-5 lg:gap-0">
                                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-0 mb-0 lg:mb-7">
                                        <div className="w-14 h-14 rounded-full border-2 border-[#ECAB00] bg-[#F5F0E8] flex items-center justify-center shrink-0 z-10 hover:bg-[#ECAB00] transition-colors duration-300 group cursor-default">
                                            <div className="w-3 h-3 rounded-full bg-[#ECAB00] group-hover:bg-[#F5F0E8] transition-colors" />
                                        </div>
                                        <span className="font-black text-[11px] tracking-[0.25em] text-[#ECAB00] lg:mt-5">{m.year}</span>
                                    </div>
                                    <div>
                                        <h3
                                            className="font-black text-[20px] text-[#0f172a] mb-3 leading-tight"
                                            style={{ fontFamily: "'Satoshi', sans-serif" }}
                                        >
                                            {m.title}
                                        </h3>
                                        <p className="text-[14px] font-medium text-gray-500 leading-relaxed">{m.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════
// SECTION 5 — CAMPUSES + CTA
// ═══════════════════════════════════════════════════════════
const CAMPUSES = [
    {
        name: "Andheri Campus",
        address: "Office No. 2, Chandra Niwas CHS, Off Old Police Lane, Andheri East, Mumbai – 400069",
        note: "2 mins walk from Andheri Station & Metro",
        since: "Est. 2015",
    },
    {
        name: "Borivali Campus",
        address: "705 Gold Crest Business Center, Opp. Manubhai Jewellers, LT Road, Borivali West, Mumbai – 400092",
        note: "Near Borivali Railway Station",
        since: "Est. 2024",
    },
];

function CampusCTA() {
    return (
        <section
            className="relative w-full bg-white overflow-hidden"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
            <div className="max-w-[1380px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 lg:pt-36 pb-20">
                <Reveal className="mb-14">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-10 bg-[#ECAB00]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-gray-400">Find Us</span>
                    </div>
                    <h2
                        className="font-black leading-[1.0] text-[#0f172a]"
                        style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "clamp(2.4rem, 5vw, 5rem)" }}
                    >
                        Visit Us in{" "}
                        <em className="italic text-[#ECAB00]">Mumbai.</em>
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {CAMPUSES.map((c, i) => (
                        <Reveal key={i} delay={i * 0.12}>
                            <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-[#F5F0E8] hover:border-[#ECAB00]/40 transition-all duration-500 cursor-default">
                                <div className="h-1 w-full bg-[#ECAB00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                <div className="p-8 lg:p-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 rounded-full bg-[#ECAB00]/15 border border-[#ECAB00]/30 flex items-center justify-center group-hover:bg-[#ECAB00] transition-colors duration-300">
                                            <MapPin size={20} className="text-[#ECAB00] group-hover:text-[#0f172a] transition-colors" strokeWidth={2} />
                                        </div>
                                        <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">{c.since}</span>
                                    </div>
                                    <h3
                                        className="font-black text-[26px] text-[#0f172a] mb-4 group-hover:text-[#ECAB00] transition-colors duration-300"
                                        style={{ fontFamily: "'Satoshi', sans-serif" }}
                                    >
                                        {c.name}
                                    </h3>
                                    <p className="text-[15px] font-medium text-gray-600 leading-relaxed mb-5">{c.address}</p>
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-campus-ping absolute inline-flex h-full w-full rounded-full bg-[#ECAB00] opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ECAB00]" />
                                        </span>
                                        <span className="text-[13px] font-bold text-[#ECAB00]">{c.note}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* CTA block */}
            <Reveal>
                <div className="relative overflow-hidden bg-[#0f172a] mx-6 sm:mx-10 lg:mx-16 mb-16 rounded-3xl">
                    <div
                        className="absolute inset-0 opacity-[0.06]"
                        style={{
                            backgroundImage: "radial-gradient(circle, #ECAB00 1px, transparent 1px)",
                            backgroundSize: "22px 22px",
                        }}
                    />
                    <div
                        className="absolute -right-16 top-0 bottom-0 w-[480px] opacity-10"
                        style={{ background: "linear-gradient(108deg, transparent 42%, #ECAB00 42%)" }}
                    />
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-10 lg:px-16 py-14 lg:py-16">
                        <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ECAB00] mb-4">Start Today</p>
                            <h3
                                className="font-black leading-[1.05] text-[#F5F0E8]"
                                style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                            >
                                Ready to Transform<br />
                                <em className="italic text-[#ECAB00]">Your Career?</em>
                            </h3>
                            <p className="text-[16px] font-medium text-[#F5F0E8]/50 mt-4 max-w-md">
                                Book a free demo class — no commitment, no pressure. Just clarity on your next move.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <button className="group flex items-center gap-3 bg-[#ECAB00] text-[#0f172a] font-bold text-[15px] px-8 py-4 rounded-full hover:bg-[#F5F0E8] transition-all duration-300 active:scale-95">
                                Book Free Demo
                                <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                            </button>
                            <button className="flex items-center gap-3 border border-[#F5F0E8]/20 text-[#F5F0E8] font-medium text-[15px] px-8 py-4 rounded-full hover:border-[#ECAB00] hover:text-[#ECAB00] transition-all duration-300 active:scale-95">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </Reveal>

            <style>{`
        @keyframes campus-ping { 0%,100%{transform:scale(1);opacity:0.75} 60%{transform:scale(2.4);opacity:0} }
        .animate-campus-ping { animation: campus-ping 2s ease-in-out infinite; }
      `}</style>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════
// ROOT EXPORT
// ═══════════════════════════════════════════════════════════
export default function AboutUs() {
    useFonts();
    return (
        <main style={{ fontFamily: "'Satoshi', sans-serif" }}>
            <AboutHero />
            <WhoWeAre />
            <OurValues />
            <Timeline />
            <CampusCTA />
        </main>
    );
}