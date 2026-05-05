import React, { useState, useEffect, useRef, useCallback } from "react";
import { X, Play, Star, Quote } from "lucide-react";
import { useModal } from "../../context/ModalContext";
import { HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";


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
    { id: SHORT_ID, name: "Simran Kakwani", role: "Placed at Dentsu", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Hemlata Dangi", role: "SEO Manager, Agency", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Teena Dangi", role: "Performance Marketer", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Aryan Pote", role: "Google Ads Specialist", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Riya Sharma", role: "Social Media Lead", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Karan Mehta", role: "E-Commerce Manager", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Pooja Verma", role: "Content Strategist", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Nikhil Desai", role: "Digital Analyst", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Anjali Singh", role: "Brand Manager", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Rahul Patil", role: "Growth Hacker", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Meera Pillai", role: "PPC Specialist", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Yash Agarwal", role: "Analytics Lead", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Divya Nair", role: "Social Media Manager", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Akash Tiwari", role: "SEO Consultant", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Sneha Borse", role: "Email Marketing Lead", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
    { id: SHORT_ID, name: "Varun Chaudhary", role: "Campaign Manager", thumb: `https://i.ytimg.com/vi/${SHORT_ID}/hqdefault.jpg` },
].slice(0, 16);

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
        text: "The curriculum is updated every quarter — something I noticed immediately when Shraddha integrated current AI tools like ChatGPT into content workflows. Landed a 7.5 LPA package straight out of training.",
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
    { val: "11,000+", label: "Students Trained" },
    { val: "94%", label: "Placement Rate" },
    { val: "400+", label: "Hiring Partners" },
    { val: "4.9★", label: "Average Rating" },
];

// ── Video Modal ──
function VideoModal({ video, onClose }) {
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed", inset: 0, zIndex: 1000,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(10,15,28,0.92)", backdropFilter: "blur(20px)",
                padding: "40px 16px",
                animation: "fadeIn 0.2s ease",
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    position: "relative",
                    height: "85vh",
                    aspectRatio: "9/16",
                    maxWidth: 400,
                    borderRadius: 32,
                    overflow: "hidden",
                    background: "#000",
                    boxShadow: "0 0 80px rgba(236,171,0,0.25)",
                    border: "1px solid rgba(236,171,0,0.3)",
                    animation: "scaleIn 0.3s cubic-bezier(0.16,1,0.3,1)",
                }}
            >
                <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&controls=1&rel=0`}
                    title={video.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", border: "none" }}
                />
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute", top: 14, right: 14,
                        width: 40, height: 40, borderRadius: "50%",
                        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", cursor: "pointer", zIndex: 10,
                        transition: "background 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#ECAB00"}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.6)"}
                >
                    <X size={18} />
                </button>
            </div>
        </div>
    );
}

// ── Video Card (grid version) ──
function VideoCard({ video, index, onPlay }) {
    const [hovered, setHovered] = useState(false);
    const [ref, inView] = useInView(0.04);
    const timerRef = useRef(null);

    const handleEnter = () => { timerRef.current = setTimeout(() => setHovered(true), 280); };
    const handleLeave = () => { clearTimeout(timerRef.current); setHovered(false); };

    return (
        <div
            ref={ref}
            onClick={() => onPlay(video)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{
                cursor: "pointer",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(28px) scale(0.96)",
                transition: `opacity 0.55s ease ${(index % 8) * 55}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${(index % 8) * 55}ms`,
            }}
        >
            {/* 9:16 card */}
            <div style={{
                width: "100%",
                aspectRatio: "9/16",
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
                background: "#111",
                border: `1.5px solid ${hovered ? "#ECAB00" : "rgba(255,255,255,0.07)"}`,
                transform: hovered ? "translateY(-5px) scale(1.025)" : "translateY(0) scale(1)",
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.3s, box-shadow 0.3s",
                boxShadow: hovered
                    ? "0 22px 52px rgba(236,171,0,0.2), 0 6px 16px rgba(0,0,0,0.2)"
                    : "0 4px 18px rgba(0,0,0,0.18)",
            }}>
                {/* Thumbnail */}
                <img
                    src={video.thumb}
                    alt={video.name}
                    style={{
                        position: "absolute", inset: 0,
                        width: "100%", height: "100%",
                        objectFit: "cover",
                        transition: "opacity 0.35s, transform 0.5s",
                        opacity: hovered ? 0 : 1,
                        transform: hovered ? "scale(1.1)" : "scale(1)",
                    }}
                />

                {/* Hover preview iframe */}
                {hovered && (
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.id}&playsinline=1`}
                        title="preview"
                        allow="autoplay; encrypted-media"
                        style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            border: "none", pointerEvents: "none",
                            transform: "scale(1.28)",
                        }}
                    />
                )}

                {/* Gradient overlay */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 38%, rgba(8,12,24,0.96) 100%)",
                    zIndex: 2,
                }} />

                {/* Shorts badge */}
                <div style={{
                    position: "absolute", top: 10, left: 10, zIndex: 3,
                    display: "flex", alignItems: "center", gap: 4,
                    background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
                    padding: "4px 9px", borderRadius: 100,
                    border: "1px solid rgba(255,255,255,0.1)",
                }}>
                    <svg viewBox="0 0 24 24" style={{ width: 11, height: 11, fill: "#ECAB00" }}>
                        <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.27l-1.2-.5 1.05-.93c1.3-1.17 1.72-2.96 1.12-4.53-.6-1.56-2.1-2.58-3.8-2.58H13.8c-1.5 0-2.9.8-3.5 2.15L8.03 8.7l1.2.5-1.05.93c-1.3 1.17-1.72 2.96-1.12 4.53.6 1.56 2.1 2.58 3.8 2.58h1.16c1.5 0 2.9-.8 3.5-2.15l2.26-4.7z" />
                    </svg>
                    <span style={{ fontSize: 8, fontWeight: 900, color: "#fff", letterSpacing: "0.12em" }}>SHORTS</span>
                </div>

                {/* Play button (visible when not hovered) */}
                <div style={{
                    position: "absolute", inset: 0, zIndex: 3,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    opacity: hovered ? 0 : 1,
                    transition: "opacity 0.25s",
                }}>
                    <div style={{
                        width: 42, height: 42, borderRadius: "50%",
                        background: "rgba(255,255,255,0.14)", backdropFilter: "blur(8px)",
                        border: "1.5px solid rgba(255,255,255,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <Play size={17} fill="#fff" color="#fff" style={{ marginLeft: 2 }} />
                    </div>
                </div>

                {/* Name / role */}
                <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    padding: "12px 13px 14px", zIndex: 4,
                }}>
                    <p style={{ margin: 0, fontSize: 12, fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>{video.name}</p>
                    <div style={{ width: 20, height: 2, background: "#ECAB00", borderRadius: 2, margin: "5px 0 4px" }} />
                    <p style={{ margin: 0, fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{video.role}</p>
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
            style={{
                background: "#fff",
                borderRadius: 20,
                padding: "28px 26px",
                border: `1.5px solid ${hovered ? t.accent + "50" : "#f0ede6"}`,
                boxShadow: hovered ? `0 12px 40px ${t.accent}14` : "0 2px 12px rgba(0,0,0,0.04)",
                transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
                opacity: inView ? 1 : 0,
                transitionDelay: `${index * 60}ms`,
                transitionProperty: "opacity, transform, border-color, box-shadow",
                transitionDuration: "0.6s, 0.3s, 0.3s, 0.3s",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1), ease, ease, ease",
                breakInside: "avoid",
                marginBottom: 16,
                display: "block",
            }}
        >
            <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: `${t.accent}12`, border: `1px solid ${t.accent}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
            }}>
                <Quote size={16} style={{ color: t.accent }} />
            </div>
            <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
                {Array(t.rating).fill(0).map((_, i) => <Star key={i} size={13} fill="#ECAB00" color="#ECAB00" />)}
            </div>
            <p style={{ fontSize: 14, color: "#374151", lineHeight: 1.75, margin: "0 0 18px", fontWeight: 500 }}>
                "{t.text}"
            </p>
            <span style={{
                display: "inline-block",
                fontSize: 10, fontWeight: 800,
                textTransform: "uppercase", letterSpacing: "0.1em",
                padding: "4px 12px", borderRadius: 100,
                background: `${t.accent}12`, color: t.accent,
                border: `1px solid ${t.accent}30`, marginBottom: 18,
            }}>
                ✦ {t.highlight}
            </span>
            <div style={{ height: 1, background: "#f5f0e8", marginBottom: 16 }} />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src={t.avatar} alt={t.name} style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover", border: `2px solid ${t.accent}30` }} />
                <div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 800, color: "#0f172a" }}>{t.name}</p>
                    <p style={{ margin: 0, fontSize: 11, fontWeight: 500, color: "#9ca3af" }}>{t.role} · {t.company}</p>
                </div>
            </div>
        </div>
    );
}

// ── Stats Strip ──
function StatsStrip() {
    const [ref, inView] = useInView(0.1);
    return (
        <div ref={ref} style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: 0,
            background: "#ECAB00", borderRadius: 20,
            overflow: "hidden", marginBottom: 80,
        }}>
            {stats.map((s, i) => (
                <div key={i} style={{
                    flex: "1 1 160px", padding: "28px 20px", textAlign: "center",
                    borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                }}>
                    <p style={{ margin: "0 0 4px", fontSize: 30, fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>{s.val}</p>
                    <p style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "rgba(15,23,42,0.55)", textTransform: "uppercase", letterSpacing: "0.12em" }}>{s.label}</p>
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
        <div style={{ textAlign: "center", padding: "80px 24px 64px", position: "relative" }}>
            <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "8px 18px", borderRadius: 100,
                background: "#ECAB0012", border: "1px solid #ECAB0030",
                marginBottom: 22,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
            }}>
                <Star size={12} fill="#ECAB00" color="#ECAB00" />
                <span style={{ fontSize: 11, fontWeight: 800, color: "#ECAB00", letterSpacing: "0.25em", textTransform: "uppercase" }}>
                    Hear From Achievers
                </span>
            </div>

            <h1 style={{
                fontSize: "clamp(32px, 5vw, 58px)",
                fontWeight: 900, color: "#0f172a",
                lineHeight: 1.08, letterSpacing: "-0.02em",
                margin: "0 0 18px",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
            }}>
                Real Students.{" "}
                <span style={{ color: "#ECAB00", position: "relative", display: "inline-block" }}>
                    Real Results.
                    <span style={{
                        position: "absolute", bottom: -6, left: 0,
                        height: 3, background: "linear-gradient(to right, #ECAB00, transparent)",
                        borderRadius: 2,
                        width: mounted ? "100%" : "0%",
                        transition: "width 1s cubic-bezier(0.16,1,0.3,1) 0.8s",
                        display: "block",
                    }} />
                </span>
            </h1>

            <p style={{
                fontSize: 16, fontWeight: 500, color: "#6b7280",
                lineHeight: 1.75, maxWidth: 520, margin: "0 auto",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.65s ease 0.35s, transform 0.65s ease 0.35s",
            }}>
                11,000+ students trained. Placed at India's top agencies and brands.
                These are their stories — unscripted.
            </p>
        </div>
    );
}

// ── Video Grid Section ──
function VideoGrid({ onPlay }) {
    const [headerRef, headerInView] = useInView(0.1);
    // Cap at 16
    const gridVideos = videos.slice(0, 16);

    return (
        <div style={{ marginBottom: 80 }}>
            {/* Header */}
            <div
                ref={headerRef}
                style={{
                    marginBottom: 32,
                    display: "flex", alignItems: "flex-end", justifyContent: "space-between",
                    flexWrap: "wrap", gap: 16,
                    opacity: headerInView ? 1 : 0,
                    transform: headerInView ? "none" : "translateY(16px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
            >
                <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                        <span style={{ width: 24, height: 1.5, background: "#ECAB00", borderRadius: 2, display: "block" }} />
                        <span style={{ fontSize: 10, fontWeight: 900, color: "#ECAB00", textTransform: "uppercase", letterSpacing: "0.3em" }}>Video Stories</span>
                    </div>
                    <h2 style={{ margin: 0, fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                        Watch Their Journey
                    </h2>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                        fontSize: 12, fontWeight: 700, color: "#9ca3af",
                        background: "#f0ede6", padding: "6px 14px", borderRadius: 100,
                    }}>
                        {gridVideos.length} Stories
                    </span>
                    <p style={{ fontSize: 13, fontWeight: 500, color: "#9ca3af", margin: 0, lineHeight: 1.5, maxWidth: 200, textAlign: "right" }}>
                        Hover to preview · Click to watch
                    </p>
                </div>
            </div>

            {/*
                Responsive grid:
                  - ≥1280px  → 8 cols (all 16 in 2 rows)
                  - ≥900px   → 6 cols
                  - ≥640px   → 4 cols
                  - <640px   → 3 cols
                Each cell is a 9:16 Short card.
            */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
            }}>
                {gridVideos.map((v, i) => (
                    <VideoCard key={i} video={v} index={i} onPlay={onPlay} />
                ))}
            </div>
        </div>
    );
}

// ── Text Testimonials Section ──
function TextTestimonialsSection() {
    const [headerRef, headerInView] = useInView(0.1);
    const col1 = textTestimonials.filter((_, i) => i % 3 === 0);
    const col2 = textTestimonials.filter((_, i) => i % 3 === 1);
    const col3 = textTestimonials.filter((_, i) => i % 3 === 2);

    return (
        <div style={{ marginBottom: 80 }}>
            <div ref={headerRef} style={{
                marginBottom: 40, padding: "0 4px",
                opacity: headerInView ? 1 : 0,
                transform: headerInView ? "none" : "translateY(16px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ width: 24, height: 1.5, background: "#ECAB00", borderRadius: 2, display: "block" }} />
                    <span style={{ fontSize: 10, fontWeight: 900, color: "#ECAB00", textTransform: "uppercase", letterSpacing: "0.3em" }}>Written Reviews</span>
                </div>
                <h2 style={{ margin: 0, fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                    What Our Students Say
                </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 16, alignItems: "start" }}>
                <div>{col1.map((t, i) => <TextCard key={i} t={t} index={i * 3} />)}</div>
                <div style={{ marginTop: 32 }}>{col2.map((t, i) => <TextCard key={i} t={t} index={i * 3 + 1} />)}</div>
                <div>{col3.map((t, i) => <TextCard key={i} t={t} index={i * 3 + 2} />)}</div>
            </div>
        </div>
    );
}

// ── CTA Banner ──
function CTABanner() {
    const [ref, inView] = useInView(0.15);
    const { openBrochureModal } = useModal();
    return (
        <div ref={ref} style={{
            borderRadius: 24,
            background: "#0f172a",
            padding: "52px 48px",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 28,
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            position: "relative", overflow: "hidden",
        }}>
            <div style={{
                position: "absolute", top: -80, right: -80,
                width: 300, height: 300, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(236,171,0,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.3em", color: "#ECAB00", margin: "0 0 12px" }}>
                    ✦ Your turn
                </p>
                <h3 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 900, color: "#fff", margin: "0 0 10px", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                    Become our next <span style={{ color: "#ECAB00" }}>success story.</span>
                </h3>
                <p style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.45)", margin: 0, lineHeight: 1.7 }}>
                    One free demo. No pressure. Just see why 11,000+ chose us.
                </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flexShrink: 0, position: "relative", zIndex: 1 }}>
                <a href="/contact-us/" style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
                    background: "#ECAB00", color: "#0f172a",
                    fontWeight: 900, fontSize: 14,
                    padding: "15px 34px", borderRadius: 100,
                    textDecoration: "none",
                    boxShadow: "0 8px 24px rgba(236,171,0,0.3)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 32px rgba(236,171,0,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(236,171,0,0.3)"; }}
                >
                    Book Free Demo Class →
                </a>
                <button
                    onClick={openBrochureModal}
                    style={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center",
                        border: "1.5px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)",
                        fontWeight: 700, fontSize: 14,
                        padding: "14px 34px", borderRadius: 100,
                        textDecoration: "none", transition: "border-color 0.2s, color 0.2s",
                        background: "transparent", cursor: "pointer",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                >
                    Download Brochure
                </button>
            </div>
        </div>
    );
}

// ── ROOT ──
import { Helmet } from "react-helmet-async";

export default function TestimonialsPage() {
    useFonts();
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <>
            {/* ✅ SEO Helmet (TOP PE hona chahiye) */}
            <Helmet>
                <title>Testimonials: See What Our Students Have to Say - Operating Media</title>
                
                <meta 
                    name="description" 
                    content="With over 11000 students trained in digital marketing course, we have some wonderful experiences shared by our alumni." 
                />

                <meta 
                    name="keywords" 
                    content="digital marketing testimonials, operating media reviews, student success stories, digital marketing course reviews" 
                />

                {/* ✅ Canonical */}
                <link 
                    rel="canonical" 
                    href="https://www.operatingmedia.com/testimonials/" 
                />
            </Helmet>

            {/* Styles */}
            <style>{`
                * { box-sizing: border-box; }
                body { margin: 0; }
                @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
                @keyframes scaleIn { 
                    from { opacity: 0; transform: scale(0.92) translateY(30px) } 
                    to { opacity: 1; transform: scale(1) translateY(0) } 
                }
                ::-webkit-scrollbar { display: none; }
            `}</style>

            <main 
                style={{ 
                    fontFamily: "'Satoshi', sans-serif", 
                    background: "#FAFAF8", 
                    minHeight: "100vh" 
                }}
            >
                {/* Background Grid */}
                <div style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                    backgroundImage: "radial-gradient(circle, #00000007 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }} />

                {/* Content */}
                <div style={{ 
                    position: "relative", 
                    zIndex: 1, 
                    maxWidth: 1160, 
                    margin: "0 auto", 
                    padding: "0 32px 80px" 
                }}>
                    <TestimonialsHero />
                    <StatsStrip />
                    <VideoGrid onPlay={setActiveVideo} />
                    <TextTestimonialsSection />
                    <CTABanner />
                </div>
            </main>

            {/* Video Modal */}
            {activeVideo && (
                <VideoModal 
                    video={activeVideo} 
                    onClose={() => setActiveVideo(null)} 
                />
            )}
        </>
    );
}