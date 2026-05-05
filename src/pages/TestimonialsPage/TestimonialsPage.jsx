import React, { useState, useEffect, useRef } from "react";
import { X, Play, Star, Quote, ArrowUpRight } from "lucide-react";
import { useModal } from "../../context/ModalContext";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import StudentReviews from "../../components/StudentReviews/StudentReviews";

// ── Font Loader ──
function useFonts() {
    useEffect(() => {
        if (!document.querySelector('link[data-font="satoshi"]')) {
            const l = document.createElement("link");
            l.rel = "stylesheet";
            l.setAttribute("data-font", "satoshi");
            l.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
            document.head.appendChild(l);
        }
    }, []);
}

function useInView(threshold = 0.08) {
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

// ── Data ──
const SHORT_ID = "kl8XbbODq8M";


const videos = [
  { id: "MFGeJ-_aYoQ", name: "Aryan Jain" },
  { id: "7jMBE5Yrqgk", name: "Gauri" },
  { id: "z5PQNWYtgs8", name: "Pranav" },
  { id: "e86nFlOC7f8", name: "Javal Desai" },
  { id: "ootRcNXIW9g", name: "Himanshi" },
  { id: "Vy1Ei-US_r8", name: "Shantanu" },
  { id: "GlvxX861O8Y", name: "Pooja Verma" },
  { id: "LtZpNs7XiCc", name: "Haldi Padiyar" },
  { id: "hAjwmJ-t82U", name: "Monali" },
  { id: "ltYRY5hYgoM", name: "Bhavini" },
  { id: "I2xj4eIsVP8", name: "Dhanshree" },
  { id: "kl8XbbODq8M", name: "Haransh" },
  { id: "oBM0j4dRM8E", name: "Sharanya" },
  { id: "k6xWMghXaAA", name: "Aman" },
  { id: "npF34n65GV8", name: "Prachi" },
  { id: "eRqK9oHb7IQ", name: "Dakshna" },
].map(v => ({
  ...v,
  thumb: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`
})).slice(0, 16);

const textTestimonials = [
    {
        name: "Priya Nair",
        role: "SEO Specialist",
        company: "MiQ Digital",
        avatar: "https://i.pravatar.cc/100?img=5",
        rating: 5,
        text: "The trainers here aren't just teachers — they're professionals running actual campaigns. Harsh showed me Google Ads strategies I couldn't find in any YouTube tutorial. Got placed within 3 weeks of completing the course.",
        highlight: "Placed in 3 weeks",
        accent: "#ECAB00",
    },
    {
        name: "Sameer Joshi",
        role: "Performance Marketer",
        company: "iProspect",
        avatar: "https://i.pravatar.cc/100?img=11",
        rating: 5,
        text: "I had tried two other institutes before Operating Media. The difference is night and day. Real assignments, real feedback, real mentorship. Zahid's SEO module alone was worth the entire fee.",
        highlight: "Best SEO training in Mumbai",
        accent: "#FF6B00",
    },
    {
        name: "Aishwarya Kulkarni",
        role: "Social Media Manager",
        company: "Publicis Sapient",
        avatar: "https://i.pravatar.cc/100?img=9",
        rating: 5,
        text: "The curriculum is updated every quarter — Shraddha integrated current AI tools like ChatGPT into content workflows. Landed a 7.5 LPA package straight out of training.",
        highlight: "7.5 LPA package",
        accent: "#10B981",
    },
    {
        name: "Dev Malhotra",
        role: "Data Analyst",
        company: "Merkle",
        avatar: "https://i.pravatar.cc/100?img=15",
        rating: 5,
        text: "Rahul Singh's analytics module is phenomenal. He showed us real dashboards, real attribution models, and how agencies actually report to clients. No fluff. Just industry-grade knowledge.",
        highlight: "Industry-grade analytics",
        accent: "#7C3AED",
    },
    {
        name: "Megha Thakur",
        role: "Brand Strategist",
        company: "Dentsu Creative",
        avatar: "https://i.pravatar.cc/100?img=21",
        rating: 5,
        text: "I was nervous about switching careers at 28. The trainers were incredibly supportive — Vikram personally helped me prep for interviews and reviewed my portfolio 3 times. Best investment of my career.",
        highlight: "Career switch at 28",
        accent: "#EC4899",
    },
    {
        name: "Rohan Bhatia",
        role: "E-Commerce Lead",
        company: "Nykaa",
        avatar: "https://i.pravatar.cc/100?img=33",
        rating: 5,
        text: "The placement network is genuinely strong. Got interviews at 4 companies simultaneously — all came through Operating Media's hiring partner connections. Chose Nykaa and couldn't be happier.",
        highlight: "4 interview calls at once",
        accent: "#0EA5E9",
    },
];

const stats = [
    { val: "16,000+", label: "Students Trained" },
    { val: "96%", label: "Placement Rate" },
    { val: "250+", label: "Hiring Partners" },
    { val: "4.8★", label: "Average Rating" },
];

// ── Video Modal ──
function VideoModal({ video, onClose }) {
    useEffect(() => {
        const h = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", h);
        return () => document.removeEventListener("keydown", h);
    }, [onClose]);

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#0a0f1c]/92 backdrop-blur-xl p-10"
            style={{ animation: "fadeIn 0.2s ease" }}
        >
            <div
                onClick={e => e.stopPropagation()}
                className="relative rounded-[2rem] overflow-hidden bg-black border border-[#ECAB00]/30"
                style={{
                    height: "85vh",
                    aspectRatio: "9/16",
                    maxWidth: 400,
                    boxShadow: "0 0 80px rgba(236,171,0,0.25)",
                    animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)",
                }}
            >
                <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&rel=0`}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                />
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white bg-black/60 border border-white/20 hover:bg-[#ECAB00] transition-colors duration-200 z-10"
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
}

// ── Video Card ──
function VideoCard({ video, index, onPlay }) {
    const [hovered, setHovered] = useState(false);
    const [ref, inView] = useInView(0.04);
    const timerRef = useRef(null);

    return (
        <div
            ref={ref}
            onClick={() => onPlay(video)}
            onMouseEnter={() => { timerRef.current = setTimeout(() => setHovered(true), 250); }}
            onMouseLeave={() => { clearTimeout(timerRef.current); setHovered(false); }}
            className="cursor-pointer"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
                transition: `opacity 0.55s ease ${(index % 8) * 55}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${(index % 8) * 55}ms`,
            }}
        >
            <div
                className="w-full rounded-[20px] overflow-hidden relative bg-[#111]"
                style={{
                    aspectRatio: "9/16",
                    border: `1.5px solid ${hovered ? "#ECAB00" : "rgba(255,255,255,0.07)"}`,
                    transform: hovered ? "translateY(-5px) scale(1.025)" : "translateY(0) scale(1)",
                    transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s",
                    boxShadow: hovered
                        ? "0 22px 52px rgba(236,171,0,0.2), 0 6px 16px rgba(0,0,0,0.2)"
                        : "0 4px 18px rgba(0,0,0,0.18)",
                }}
            >
                {/* Thumbnail */}
                <img
                    src={video.thumb}
                    alt={video.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                        opacity: hovered ? 0 : 1,
                        transform: hovered ? "scale(1.1)" : "scale(1)",
                        transition: "opacity 0.35s, transform 0.5s",
                    }}
                />

                {/* Hover preview */}
                {hovered && (
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&playsinline=1`}
                        title="preview"
                        allow="autoplay; encrypted-media"
                        className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                        style={{ transform: "scale(1.28)" }}
                    />
                )}

                {/* Gradient */}
                <div className="absolute inset-0 z-[2]" style={{ background: "linear-gradient(to bottom, transparent 38%, rgba(8,12,24,0.96) 100%)" }} />

                {/* Shorts badge */}
                <div className="absolute top-2.5 left-2.5 z-[3] flex items-center gap-1 px-2 py-1 rounded-full bg-black/55 border border-white/10" style={{ backdropFilter: "blur(8px)" }}>
                    <svg viewBox="0 0 24 24" style={{ width: 10, height: 10, fill: "#ECAB00" }}>
                        <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.27l-1.2-.5 1.05-.93c1.3-1.17 1.72-2.96 1.12-4.53-.6-1.56-2.1-2.58-3.8-2.58H13.8c-1.5 0-2.9.8-3.5 2.15L8.03 8.7l1.2.5-1.05.93c-1.3 1.17-1.72 2.96-1.12 4.53.6 1.56 2.1 2.58 3.8 2.58h1.16c1.5 0 2.9-.8 3.5-2.15l2.26-4.7z" />
                    </svg>
                    <span className="text-[8px] font-black text-white tracking-[0.12em]">SHORTS</span>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 z-[3] flex items-center justify-center" style={{ opacity: hovered ? 0 : 1, transition: "opacity 0.25s" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/14 border border-white/30" style={{ backdropFilter: "blur(8px)" }}>
                        <Play size={16} fill="#fff" color="#fff" style={{ marginLeft: 2 }} />
                    </div>
                </div>

                {/* Name / role */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-[4]">
                    <p className="m-0 text-[12px] font-black text-white leading-tight">{video.name}</p>
                    <div className="w-5 h-0.5 bg-[#ECAB00] rounded-sm my-1.5" />
                    <p className="m-0 text-[9px] font-semibold text-white/50 uppercase tracking-[0.1em]">{video.role}</p>
                </div>
            </div>
        </div>
    );
}

// ── Text Testimonial Card ──
function TextCard({ t, index }) {
    const [ref, inView] = useInView(0.08);
    const [hovered, setHovered] = useState(false);

    return (
        <div
            ref={ref}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="bg-white rounded-[20px] p-7 border transition-all duration-300"
            style={{
                borderColor: hovered ? `${t.accent}50` : "#f0ede6",
                boxShadow: hovered ? `0 12px 40px ${t.accent}14` : "0 2px 12px rgba(0,0,0,0.04)",
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                opacity: inView ? 1 : 0,
                transitionDelay: `${index * 60}ms`,
            }}
        >
            {/* Quote icon */}
            <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${t.accent}12`, border: `1px solid ${t.accent}25` }}
            >
                <Quote size={15} style={{ color: t.accent }} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-3">
                {Array(t.rating).fill(0).map((_, i) => (
                    <Star key={i} size={13} fill="#ECAB00" color="#ECAB00" />
                ))}
            </div>

            {/* Review text */}
            <p className="text-[14px] text-gray-600 leading-[1.8] font-medium mb-4">
                "{t.text}"
            </p>

            {/* Highlight tag */}
            <span
                className="inline-block text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1.5 rounded-full mb-5"
                style={{ background: `${t.accent}12`, color: t.accent, border: `1px solid ${t.accent}30` }}
            >
                ✦ {t.highlight}
            </span>

            {/* Divider */}
            <div className="h-px bg-[#f5f0e8] mb-4" />

            {/* Author */}
            <div className="flex items-center gap-3">
                <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                    style={{ border: `2px solid ${t.accent}30` }}
                />
                <div>
                    <p className="m-0 text-[13px] font-black text-[#0f172a]">{t.name}</p>
                    <p className="m-0 text-[11px] font-medium text-gray-400">{t.role} · {t.company}</p>
                </div>
            </div>
        </div>
    );
}

// ── Stats Strip ──
function StatsStrip() {
    const [ref, inView] = useInView(0.1);
    return (
        <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 rounded-[20px] overflow-hidden mb-20"
            style={{ background: "#ECAB00" }}
        >
            {stats.map((s, i) => (
                <div
                    key={i}
                    className="py-7 px-5 text-center"
                    style={{
                        borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0)" : "translateY(16px)",
                        transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                    }}
                >
                    <p className="m-0 mb-1 text-[30px] font-black text-[#0f172a] leading-none">{s.val}</p>
                    <p className="m-0 text-[11px] font-bold text-[#0f172a]/55 uppercase tracking-[0.12em]">{s.label}</p>
                </div>
            ))}
        </div>
    );
}

// ── Hero ──
function TestimonialsHero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

    return (
        <div className="text-center py-20 px-6 relative">
            <div
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6"
                style={{
                    background: "#ECAB0012", borderColor: "#ECAB0030",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
                }}
            >
                <Star size={12} fill="#ECAB00" color="#ECAB00" />
                <span className="text-[11px] font-black text-[#ECAB00] tracking-[0.25em] uppercase">Testimonials</span>
            </div>

            <h1
                className="font-black text-[#0f172a] leading-[1.08] tracking-tight mb-5"
                style={{
                    fontSize: "clamp(32px, 5vw, 58px)",
                    letterSpacing: "-0.02em",
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
                }}
            >
                Real Students.{" "}
                <span className="text-[#ECAB00] relative inline-block">
                    Real Results.
                    <span
                        className="absolute bottom-[-6px] left-0 h-[3px] rounded-sm block"
                        style={{
                            background: "linear-gradient(to right, #ECAB00, transparent)",
                            width: mounted ? "100%" : "0%",
                            transition: "width 1s cubic-bezier(0.16,1,0.3,1) 0.8s",
                        }}
                    />
                </span>
            </h1>

            <p
                className="text-[16px] font-medium text-gray-500 leading-relaxed max-w-[500px] mx-auto"
                style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(16px)",
                    transition: "opacity 0.65s ease 0.35s, transform 0.65s ease 0.35s",
                }}
            >
                16,000+ students trained. Placed at India's top agencies and brands. These are their stories — unscripted.
            </p>
        </div>
    );
}

// ── Video Grid Section ──
function VideoGrid({ onPlay }) {
    const [headerRef, headerInView] = useInView(0.1);

    return (
        <div className="mb-20">
            <div
                ref={headerRef}
                className="flex items-end justify-between flex-wrap gap-4 mb-8"
                style={{
                    opacity: headerInView ? 1 : 0,
                    transform: headerInView ? "none" : "translateY(16px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
            >
                <div>
                    <div className="flex items-center gap-2 mb-2.5">
                        <span className="w-6 h-px bg-[#ECAB00] block" />
                        <span className="text-[10px] font-black text-[#ECAB00] uppercase tracking-[0.3em]">Video Stories</span>
                    </div>
                    <h2 className="m-0 font-black text-[#0f172a] tracking-tight" style={{ fontSize: "clamp(22px, 3vw, 34px)", letterSpacing: "-0.02em" }}>
                        Watch Their Journey
                    </h2>
                </div>
                <p className="text-[13px] font-medium text-gray-400 m-0 text-right">
                    Hover to preview · Click to watch
                </p>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-4 gap-3 lg:gap-4">
                {videos.map((v, i) => (
                    <VideoCard key={i} video={v} index={i} onPlay={onPlay} />
                ))}
            </div>
        </div>
    );
}



// ── CTA Banner ──
function CTABanner() {
    const [ref, inView] = useInView(0.15);
    const { openBrochureModal } = useModal();

    return (
        <div
            ref={ref}
            className="rounded-3xl p-12 md:p-14 flex flex-wrap items-center justify-between gap-7 relative overflow-hidden"
            style={{
                background: "#0f172a",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
        >
            {/* Glow */}
            <div className="absolute top-[-80px] right-[-80px] w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(236,171,0,0.15) 0%, transparent 70%)" }} />

            <div className="relative z-10">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#ECAB00] mb-3">✦ Your turn</p>
                <h3 className="font-black text-white mb-2 leading-tight"
                    style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
                    Become our next{" "}
                    <span className="text-[#ECAB00]">success story.</span>
                </h3>
                <p className="text-[14px] font-medium text-white/45 leading-relaxed m-0">
                    One free demo. No pressure. Just see why 16,000+ chose us.
                </p>
            </div>

            <div className="relative z-10 flex flex-col gap-3 shrink-0">
                <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 font-black text-[14px] text-[#0f172a] px-8 py-4 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                        background: "#ECAB00",
                        boxShadow: "0 8px 24px rgba(236,171,0,0.3)",
                    }}
                >
                    Book Free Demo Class
                    <ArrowUpRight size={16} />
                </Link>
                <button
                    onClick={openBrochureModal}
                    className="inline-flex items-center justify-center font-bold text-[14px] text-white/60 px-8 py-4 rounded-full bg-transparent cursor-pointer transition-all duration-200 hover:text-white"
                    style={{ border: "1.5px solid rgba(255,255,255,0.15)" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"}
                >
                    Download Brochure
                </button>
            </div>
        </div>
    );
}

// ── ROOT ──
export default function TestimonialsPage() {
    useFonts();
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <>
            <Helmet>
                <title>Testimonials: See What Our Students Have to Say - Operating Media</title>
                <meta name="description" content="With over 11000 students trained in digital marketing course, we have some wonderful experiences shared by our alumni." />
                <meta name="keywords" content="digital marketing testimonials, operating media reviews, student success stories, digital marketing course reviews" />
                <link rel="canonical" href="https://www.operatingmedia.com/testimonials/" />
            </Helmet>

            <style>{`
                @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
                @keyframes scaleIn {
                    from { opacity: 0; transform: scale(0.92) translateY(30px) }
                    to   { opacity: 1; transform: scale(1) translateY(0) }
                }
            `}</style>

            <main
                className="font-['Satoshi',sans-serif] min-h-screen w-full overflow-x-hidden"
                style={{ background: "#FAFAF8" }}
            >
                {/* Dot grid bg */}
                <div
                    className="fixed inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, #00000007 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />

                {/* Constrained content */}
                <div className="relative z-[1] max-w-[1160px] mx-auto px-6 md:px-8">
                    <TestimonialsHero />
                    <StatsStrip />
                    <VideoGrid onPlay={setActiveVideo} />
                </div>

                {/* StudentReviews — full width, breaks out of container */}
                <div className="relative z-[1] w-full">
                    <StudentReviews />
                </div>

                {/* CTA — back in constrained container */}
                <div className="relative z-[1] max-w-[1160px] mx-auto px-6 md:px-8 pb-20">
                    <CTABanner />
                </div>
            </main>

            {/* Video Modal */}
            {activeVideo && (
                <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
            )}
        </>
    );
}