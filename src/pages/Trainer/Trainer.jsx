import React, { useRef, useEffect, useState } from "react";

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

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

const LI = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const Arrow = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
);

const Check = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const trainers = [
    {
        name: "Shraddha Rane",
        role: "Corporate Trainer & Digital Strategist",
        exp: "8+ Years",
        tag: "Gen-Z Favourite",
        bio: "Shraddha designs programs that empower teams to reach their full potential. Known for innovative, collaborative sessions — she's become a go-to expert in digital marketing education.",
        skills: ["Corporate Training", "Content Strategy", "Social Media", "Brand Building"],
        img: "/images/shraddha.png",
        linkedin: "https://www.linkedin.com/in/shraddha-rane-95025b128/",
        accent: "#FF6B00",
        num: "01",
    },
    {
        name: "Harsh Pareek",
        role: "Digital Marketing Agency Owner",
        exp: "15+ Years",
        tag: "1000+ Campaigns",
        bio: "A savvy strategist who turns small ideas into profitable businesses. Harsh runs an agency serving clients across 18+ countries — deep expertise in high-performance marketing.",
        skills: ["SEM & PPC", "Campaign Strategy", "Business Growth", "Global Marketing"],
        img: "/images/Harsh-Ibraine.webp",
        linkedin: "https://www.linkedin.com/in/pharsh88/",
        accent: "#ECAB00",
        num: "02",
    },
    {
        name: "Hemant Mane",
        role: "Digital Marketing Manager & Trainer",
        exp: "12+ Years",
        tag: "Technical Expert",
        bio: "Passionate about helping businesses harness digital. Hemant focuses on deep technical implementation and data-driven growth strategies that deliver measurable results.",
        skills: ["SEO & Analytics", "Technical Marketing", "Data Growth", "Training Design"],
        img: "/images/hemant.png",
        linkedin: "https://www.linkedin.com/in/hemantm26/",
        accent: "#10B981",
        num: "03",
    },
    {
        name: "Rahul Singh",
        role: "Analytics & Data Specialist",
        exp: "12+ Years",
        tag: "Data is his game",
        bio: "The backbone of analytics at Operating Media. A software engineer by qualification, Rahul has worked with top Indian brands delivering high-performance analytics for multiple agencies.",
        skills: ["Web Analytics", "Data Strategy", "Performance Marketing", "Reporting"],
        img: "/images/rahuls.png",
        linkedin: "https://www.linkedin.com/in/therahulsingh/",
        accent: "#7C3AED",
        num: "04",
    },
    {
        name: "Zahid Shaikh",
        role: "SEO & Internet Marketing Expert",
        exp: "14+ Years",
        tag: "SEO Authority",
        bio: "A Strategic Internet Marketing Expert with 14+ years of online branding experience. Expert in ethical Google SEO, ranking websites to the top of Google and Bing.",
        skills: ["SEO Strategy", "Link Building", "Google Rankings", "Online Branding"],
        img: "/images/zahid.png",
        linkedin: "https://www.linkedin.com/in/zahid-shaikh/",
        accent: "#F59E0B",
        num: "05",
    },
    {
        name: "Vikram Kamble",
        role: "Digital Marketing Coach & Mentor",
        exp: "8+ Years",
        tag: "Career Transformer",
        bio: "Vikram empowers students with hands-on digital skills. He bridges the gap between theory and industry through practical sessions, 1:1 mentorship, and corporate training.",
        skills: ["SEO", "Social Media", "Content Strategy", "Performance Ads"],
        img: "/images/vikram.png",
        linkedin: "https://www.linkedin.com/in/vikram-kamble/",
        accent: "#059669",
        num: "06",
    },
    {
        name: "Neelkamal Mukharjee",
        role: "E-Commerce & Marketplace Specialist",
        exp: "10+ Years",
        tag: "Amazon Expert",
        bio: "Neelkamal has built and scaled dozens of e-commerce brands from zero to revenue. His D2C expertise and marketplace strategy make him one of India's most sought-after educators.",
        skills: ["E-Commerce", "Amazon Ads", "D2C Growth", "Marketplace SEO"],
        img: "/images/neel.png",
        linkedin: "https://www.linkedin.com/",
        accent: "#EC4899",
        num: "07",
    },
    {
        name: "Rahul Shinde",
        role: "AI & Automation Marketing Lead",
        exp: "9+ Years",
        tag: "AI Pioneer",
        bio: "Arjun is at the frontier of AI-powered marketing, helping brands integrate ChatGPT, automation, and ML into everyday campaigns. 50+ companies transformed across India and SEA.",
        skills: ["AI Marketing", "Automation", "ChatGPT Workflows", "Growth Hacking"],
        img: "/images/rahul.png",
        linkedin: "https://www.linkedin.com/",
        accent: "#0EA5E9",
        num: "08",
    },
];

// ── HERO ──────────────────────────────────────────────────────
function Hero() {
    const [mounted, setMounted] = useState(false);
    const isMobile = useIsMobile();
    useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

    return (
        <section style={{
            fontFamily: "'Satoshi', sans-serif",
            position: "relative",
            width: "100%",
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#FAFCFF",
            overflow: "hidden",
        }}>
            {/* Grid background */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
                backgroundSize: "40px 40px",
            }} />

            {/* Glow orbs */}
            <div style={{
                position: "absolute", top: "-20%", right: "-10%",
                width: isMobile ? 300 : 600, height: isMobile ? 300 : 600,
                borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(236,171,0,0.18) 0%, rgba(251,146,60,0.10) 60%, transparent 100%)",
                filter: "blur(80px)", animation: "heroGlow 8s cubic-bezier(0.4,0,0.6,1) infinite",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: "-10%", left: "-10%",
                width: isMobile ? 280 : 500, height: isMobile ? 280 : 500,
                borderRadius: "50%",
                background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)",
                filter: "blur(80px)", pointerEvents: "none",
            }} />

            {/* Main layout */}
            <div style={{
                position: "relative", zIndex: 10,
                width: "100%", maxWidth: 1400,
                margin: "0 auto",
                padding: isMobile ? "72px 20px 56px" : "80px 24px",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 40 : 48,
                alignItems: "center",
            }}>

                {/* ── LEFT: Text ── */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

                    {/* Badge */}
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "8px 16px", borderRadius: 100,
                        background: "rgba(37,99,235,0.07)", border: "1px solid rgba(37,99,235,0.15)",
                        marginBottom: 20,
                        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                    }}>
                        <span style={{
                            width: 8, height: 8, borderRadius: "50%", background: "#2563eb",
                            boxShadow: "0 0 0 3px rgba(37,99,235,0.2)",
                            animation: "heroPing 1.5s ease-in-out infinite",
                            display: "inline-block",
                        }} />
                        <span style={{ fontSize: isMobile ? 11 : 13, fontWeight: 700, color: "#2563eb", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                            #1 Digital Marketing Academy
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 style={{ fontSize: isMobile ? "clamp(32px, 9vw, 44px)" : "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#0f172a", lineHeight: 1.1, margin: "0 0 8px" }}>
                        <div style={{ overflow: "hidden", paddingBottom: 4 }}>
                            <div style={{
                                transform: mounted ? "translateY(0)" : "translateY(100%)",
                                opacity: mounted ? 1 : 0,
                                transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s, opacity 0.7s ease 0.2s",
                            }}>
                                Learn From{" "}
                                <span style={{ color: "#ECAB00" }}>Real</span>
                            </div>
                        </div>
                        <div style={{ overflow: "hidden", paddingBottom: 4 }}>
                            <div style={{
                                transform: mounted ? "translateY(0)" : "translateY(100%)",
                                opacity: mounted ? 1 : 0,
                                transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s, opacity 0.7s ease 0.3s",
                            }}>
                                Industry Experts
                            </div>
                        </div>
                        <div style={{ overflow: "hidden", paddingBottom: 4 }}>
                            <div style={{
                                transform: mounted ? "translateY(0)" : "translateY(100%)",
                                opacity: mounted ? 1 : 0,
                                transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s, opacity 0.7s ease 0.4s",
                            }}>
                                <span style={{ position: "relative", display: "inline-block", color: "#2563eb" }}>
                                    Who Actually Do It.
                                    <span style={{
                                        position: "absolute", bottom: -6, left: 0,
                                        height: 6, borderRadius: 100, background: "#ECAB00",
                                        width: mounted ? "100%" : "0%",
                                        transition: "width 1s cubic-bezier(0.16,1,0.3,1) 0.8s",
                                        display: "block",
                                    }} />
                                </span>
                            </div>
                        </div>
                    </h1>

                    {/* Subtext */}
                    <p style={{
                        fontSize: isMobile ? 15 : 17, fontWeight: 500, color: "#6b7280",
                        lineHeight: 1.75, maxWidth: 480, margin: "20px 0 28px",
                        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
                    }}>
                        Not lecturers reading off slides — our 8 trainers are{" "}
                        <strong style={{ color: "#0f172a", fontWeight: 700 }}>agency owners, campaign runners, and brand builders</strong>{" "}
                        who teach what they live every day.
                    </p>

                    {/* Buttons */}
                    <div style={{
                        display: "flex", gap: 12, flexWrap: "wrap",
                        alignItems: "center", width: isMobile ? "100%" : "auto",
                        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
                    }}>
                        <a href="#" className="tp-btn-primary" style={{ flex: isMobile ? "1 1 auto" : "0 0 auto", justifyContent: "center", minHeight: 52 }}>
                            Book a Demo
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#" className="tp-btn-secondary" style={{ flex: isMobile ? "1 1 auto" : "0 0 auto", justifyContent: "center", minHeight: 52 }}>
                            Download Brochure
                        </a>
                    </div>

                    {/* Avatar rating row */}
                    <div style={{
                        display: "flex", alignItems: "center", gap: 14, marginTop: 28,
                        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
                    }}>
                        <div style={{ display: "flex" }}>
                            {[11, 12, 13, 14].map((n, i) => (
                                <div key={i} style={{
                                    width: isMobile ? 34 : 38, height: isMobile ? 34 : 38,
                                    borderRadius: "50%", border: "2px solid #fff",
                                    marginLeft: i === 0 ? 0 : -10, overflow: "hidden",
                                    background: "#e5e7eb", boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                }}>
                                    <img src={`https://i.pravatar.cc/100?img=${n}`} alt="student" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div style={{ fontSize: 13, color: "#ECAB00", letterSpacing: 2 }}>★★★★★</div>
                            <div style={{ fontSize: 12, fontWeight: 700, color: "#374151" }}>30,000+ happy learners</div>
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: Floating stat cards — hidden on mobile ── */}
                {!isMobile && (
                    <div style={{
                        position: "relative", height: 560,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        opacity: mounted ? 1 : 0, transform: mounted ? "translateX(0)" : "translateX(40px)",
                        transition: "opacity 1s ease 0.3s, transform 1s ease 0.3s",
                    }}>
                        {/* Central visual block */}
                        <div style={{
                            width: "80%", maxWidth: 400,
                            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                            borderRadius: 28, overflow: "hidden",
                            boxShadow: "0 32px 80px rgba(15,23,42,0.18)",
                            padding: 36, position: "relative",
                        }}>
                            <div style={{
                                position: "absolute", inset: 0, pointerEvents: "none",
                                backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
                                backgroundSize: "24px 24px",
                            }} />
                            <div style={{ position: "relative", zIndex: 2 }}>
                                <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20 }}>Faculty Roster 2025</div>
                                {[
                                    { name: "Harsh Pareek", role: "Agency Owner", exp: "15+ Yrs", color: "#ECAB00" },
                                    { name: "Zahid Shaikh", role: "SEO Authority", exp: "14+ Yrs", color: "#10B981" },
                                    { name: "Rahul Singh", role: "Data Specialist", exp: "12+ Yrs", color: "#7C3AED" },
                                ].map((t, i) => (
                                    <div key={i} style={{
                                        display: "flex", alignItems: "center", gap: 12,
                                        padding: "12px 0",
                                        borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                                    }}>
                                        <div style={{
                                            width: 38, height: 38, borderRadius: 10,
                                            background: `${t.color}25`, border: `1.5px solid ${t.color}50`,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: 14, fontWeight: 900, color: t.color, flexShrink: 0,
                                        }}>
                                            {t.name.split(" ").map(w => w[0]).join("")}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{t.name}</div>
                                            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{t.role}</div>
                                        </div>
                                        <span style={{
                                            fontSize: 10, fontWeight: 900, color: t.color,
                                            background: `${t.color}18`, border: `1px solid ${t.color}30`,
                                            padding: "3px 9px", borderRadius: 100,
                                        }}>{t.exp}</span>
                                    </div>
                                ))}
                                <div style={{ marginTop: 20, padding: "12px 16px", background: "rgba(236,171,0,0.1)", borderRadius: 12, border: "1px solid rgba(236,171,0,0.2)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>+5 more experts</span>
                                    <span style={{ fontSize: 12, fontWeight: 700, color: "#ECAB00" }}>View All →</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating stat cards */}
                        <div style={{
                            position: "absolute", top: "8%", right: "-4%",
                            background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.6)",
                            borderRadius: 18, padding: "16px 20px",
                            boxShadow: "0 16px 40px rgba(15,23,42,0.1)",
                            animation: "float1 5s ease-in-out infinite",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#fef3c7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏆</div>
                                <div>
                                    <div style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>400+</div>
                                    <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", marginTop: 3 }}>Hiring Partners</div>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            position: "absolute", bottom: "10%", left: "-4%",
                            background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.6)",
                            borderRadius: 18, padding: "16px 20px",
                            boxShadow: "0 16px 40px rgba(15,23,42,0.1)",
                            animation: "float2 6s ease-in-out infinite",
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#ecfdf5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🎓</div>
                                <div>
                                    <div style={{ fontSize: 22, fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>80+</div>
                                    <div style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", marginTop: 3 }}>Yrs Combined Exp.</div>
                                </div>
                            </div>
                        </div>

                        {[
                            { icon: "https://cdn-icons-png.flaticon.com/512/300/300221.png", top: "38%", left: "2%", delay: "0s" },
                            { icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", top: "3%", left: "28%", delay: "-1.5s" },
                        ].map((ic, i) => (
                            <div key={i} style={{
                                position: "absolute", top: ic.top, left: ic.left,
                                width: 48, height: 48, borderRadius: 14,
                                background: "rgba(255,255,255,0.85)", backdropFilter: "blur(8px)",
                                border: "1px solid rgba(255,255,255,0.6)",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                padding: 10,
                                animation: `float1 ${5 + i}s ease-in-out infinite`,
                                animationDelay: ic.delay,
                            }}>
                                <img src={ic.icon} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                            </div>
                        ))}
                    </div>
                )}

                {/* ── MOBILE: Compact stat strip (replaces right panel) ── */}
                {isMobile && (
                    <div style={{
                        display: "grid", gridTemplateColumns: "1fr 1fr",
                        gap: 12,
                        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition: "opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s",
                    }}>
                        {[
                            { emoji: "🏆", val: "400+", label: "Hiring Partners" },
                            { emoji: "🎓", val: "80+", label: "Yrs Combined Exp." },
                            { emoji: "📊", val: "1000+", label: "Campaigns Run" },
                            { emoji: "🌍", val: "18+", label: "Countries Served" },
                        ].map((s, i) => (
                            <div key={i} style={{
                                background: "rgba(255,255,255,0.85)", backdropFilter: "blur(12px)",
                                border: "1px solid rgba(255,255,255,0.6)",
                                borderRadius: 16, padding: "16px 14px",
                                boxShadow: "0 4px 20px rgba(15,23,42,0.07)",
                                display: "flex", alignItems: "center", gap: 10,
                            }}>
                                <div style={{ fontSize: 22, lineHeight: 1 }}>{s.emoji}</div>
                                <div>
                                    <div style={{ fontSize: 18, fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>{s.val}</div>
                                    <div style={{ fontSize: 10, fontWeight: 600, color: "#9ca3af", marginTop: 3 }}>{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
        @keyframes heroPing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(37,99,235,0); }
        }
        @keyframes heroGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(-1deg); }
        }
        .tp-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: #ECAB00; color: #fff; font-weight: 700;
          font-size: 15px; padding: 14px 24px; border-radius: 14px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(236,171,0,0.35);
          transition: background 0.3s, transform 0.2s, box-shadow 0.3s;
          font-family: 'Satoshi', sans-serif; position: relative; overflow: hidden;
          -webkit-tap-highlight-color: transparent;
        }
        .tp-btn-primary:hover { background: #d49a00; transform: translateY(-2px); box-shadow: 0 14px 32px rgba(236,171,0,0.45); }
        .tp-btn-primary:active { transform: scale(0.97); }
        .tp-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          border: 2px solid #2563eb; color: #2563eb; font-weight: 700;
          font-size: 15px; padding: 12px 24px; border-radius: 14px;
          text-decoration: none; transition: background 0.3s, color 0.3s, transform 0.2s;
          font-family: 'Satoshi', sans-serif;
          -webkit-tap-highlight-color: transparent;
        }
        .tp-btn-secondary:hover { background: #2563eb; color: #fff; transform: translateY(-1px); }
        .tp-btn-secondary:active { transform: scale(0.97); }
        .tp-li-btn {
          flex-shrink: 0; width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid #e5e7eb; color: #9ca3af;
          text-decoration: none; transition: all 0.2s;
          -webkit-tap-highlight-color: transparent;
        }
        .tp-li-btn:hover { border-color: #0077b5; color: #0077b5; background: #f0f8ff; }
        .tp-why-card {
          background: #fff; border: 1px solid #f0ede6; border-radius: 16px;
          padding: 24px 20px; cursor: default;
          transition: border-color 0.25s, box-shadow 0.25s, opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .tp-why-card:hover { border-color: #ECAB00; box-shadow: 0 4px 20px rgba(236,171,0,0.1); }
        .tp-cta-primary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          background: #ECAB00; color: #0f172a; font-weight: 900; font-size: 15px;
          padding: 16px 32px; border-radius: 100px; text-decoration: none;
          box-shadow: 0 8px 24px rgba(236,171,0,0.3);
          transition: transform 0.2s, box-shadow 0.2s; white-space: nowrap;
          font-family: 'Satoshi', sans-serif;
          -webkit-tap-highlight-color: transparent;
        }
        .tp-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(236,171,0,0.4); }
        .tp-cta-primary:active { transform: scale(0.97); }
        .tp-cta-secondary {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          border: 1.5px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7);
          font-weight: 700; font-size: 15px; padding: 15px 32px; border-radius: 100px;
          text-decoration: none; transition: border-color 0.2s, color 0.2s; white-space: nowrap;
          font-family: 'Satoshi', sans-serif;
          -webkit-tap-highlight-color: transparent;
        }
        .tp-cta-secondary:hover { border-color: rgba(255,255,255,0.4); color: #fff; }
      `}</style>
        </section>
    );
}

function SkillChip({ skill, accentColor }) {
    const [hovered, setHovered] = useState(false);
    return (
        <span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                fontSize: 11, fontWeight: 700,
                padding: "5px 12px", borderRadius: 100,
                display: "inline-block", cursor: "default", userSelect: "none",
                transition: "background 0.15s, color 0.15s, border-color 0.15s",
                background: hovered ? accentColor : "#f9f7f3",
                color: hovered ? "#fff" : "#374151",
                border: `1px solid ${hovered ? accentColor : "#ede9e0"}`,
            }}
        >
            {skill}
        </span>
    );
}

function TrainerCard({ trainer, index }) {
    const [ref, inView] = useInView(0.08);
    const isMobile = useIsMobile();

    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(52px) scale(0.97)",
                transition: `opacity 0.65s ease ${index * 60}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms`,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid #ede9e0",
                background: "#fff",
                boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                width: "100%",
            }}
        >
            <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : (index % 2 === 0 ? "row" : "row-reverse"),
                minHeight: isMobile ? "auto" : 280,
            }}>
                {/* ── Photo Panel ── */}
                <div style={{
                    position: "relative",
                    flexShrink: 0,
                    width: isMobile ? "100%" : "36%",
                    height: isMobile ? 200 : "auto",
                    overflow: "hidden",
                    background: "#f5f0e8",
                }}>
                    {/* Blobs */}
                    <div style={{
                        position: "absolute", bottom: -40, right: -40,
                        width: 180, height: 180, borderRadius: "50%",
                        opacity: 0.25, filter: "blur(36px)",
                        background: trainer.accent, pointerEvents: "none",
                    }} />
                    <div style={{
                        position: "absolute", top: -32, left: -32,
                        width: 120, height: 120, borderRadius: "50%",
                        opacity: 0.12, filter: "blur(28px)",
                        background: trainer.accent, pointerEvents: "none",
                    }} />

                    {/* Image */}
                    <img
                        src={trainer.img}
                        alt={trainer.name}
                        style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            objectFit: "cover", objectPosition: "top",
                            display: "block",
                        }}
                    />

                    {/* Gradient fade */}
                    <div style={{
                        position: "absolute", bottom: 0, left: 0, right: 0,
                        height: isMobile ? 80 : 100, zIndex: 2,
                        background: `linear-gradient(to top, #f5f0e8DD, transparent)`,
                        pointerEvents: "none",
                    }} />

                    {/* Accent bar */}
                    <div style={{
                        position: "absolute",
                        [isMobile ? "bottom" : (index % 2 === 0 ? "left" : "right")]: 0,
                        [isMobile ? "left" : "top"]: 0,
                        [isMobile ? "right" : "bottom"]: 0,
                        [isMobile ? "height" : "width"]: 4,
                        zIndex: 3,
                        background: trainer.accent,
                    }} />

                    {/* Exp badge */}
                    <span style={{
                        position: "absolute", bottom: 12, left: 12, zIndex: 4,
                        background: "#fff", color: "#0f172a",
                        fontSize: 10, fontWeight: 900,
                        textTransform: "uppercase", letterSpacing: "0.08em",
                        padding: "5px 12px", borderRadius: 100,
                        border: `1.5px solid ${trainer.accent}`,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.10)",
                    }}>
                        {trainer.exp}
                    </span>

                    {/* Number watermark */}
                    <span style={{
                        position: "absolute", top: 8, right: 10, zIndex: 4,
                        fontSize: 48, fontWeight: 900,
                        color: "rgba(15,23,42,0.06)", lineHeight: 1,
                        userSelect: "none", pointerEvents: "none",
                    }}>
                        {trainer.num}
                    </span>
                </div>

                {/* ── Info Panel ── */}
                <div style={{
                    flex: 1,
                    padding: isMobile ? "20px 18px 22px" : "28px 28px",
                    display: "flex", flexDirection: "column",
                    justifyContent: "center", gap: 14,
                }}>
                    {/* Name + role + LinkedIn */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{
                                fontSize: isMobile ? 17 : 20, fontWeight: 900, color: "#0f172a",
                                margin: 0, lineHeight: 1.2,
                            }}>
                                {trainer.name}
                            </h3>
                            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 5 }}>
                                <span style={{
                                    width: 6, height: 6, borderRadius: "50%",
                                    flexShrink: 0, background: trainer.accent,
                                }} />
                                <p style={{ fontSize: 11, fontWeight: 500, color: "#9ca3af", margin: 0 }}>
                                    {trainer.role}
                                </p>
                            </div>
                        </div>
                        <a href={trainer.linkedin} target="_blank" rel="noopener noreferrer" className="tp-li-btn">
                            <LI />
                        </a>
                    </div>

                    {/* Bio */}
                    <p style={{ fontSize: isMobile ? 12.5 : 13, color: "#6b7280", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        {trainer.bio}
                    </p>

                    {/* Skills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {trainer.skills.map((s, i) => (
                            <SkillChip key={i} skill={s} accentColor={trainer.accent} />
                        ))}
                    </div>

                    {/* Tag */}
                    <div>
                        <span style={{
                            display: "inline-flex", alignItems: "center",
                            fontSize: 10, fontWeight: 700,
                            textTransform: "uppercase", letterSpacing: "0.1em",
                            padding: "4px 12px", borderRadius: 100,
                            background: `${trainer.accent}18`,
                            color: trainer.accent,
                            border: `1px solid ${trainer.accent}35`,
                        }}>
                            {trainer.tag}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── ROSTER SECTION ────────────────────────────────────────────
function RosterGrid() {
    const [ref, inView] = useInView(0.05);
    const isMobile = useIsMobile();

    return (
        <section style={{
            fontFamily: "'Satoshi', sans-serif",
            background: "#FAFAF8",
            padding: isMobile ? "56px 16px" : "80px 32px",
            borderTop: "1px solid #f0ede6",
        }}>
            <div style={{ maxWidth: 1320, margin: "0 auto" }}>
                {/* Header */}
                <div
                    ref={ref}
                    style={{
                        marginBottom: isMobile ? 32 : 48,
                        opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(16px)",
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                    }}
                >
                    <p style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.3em", color: "#ECAB00", margin: "0 0 10px" }}>
                        ✦ Our Faculty
                    </p>
                    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
                        <h2 style={{ fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(26px, 3.5vw, 40px)", fontWeight: 900, color: "#0f172a", margin: 0, lineHeight: 1.1, fontFamily: "'Satoshi', sans-serif" }}>
                            08 Industry Experts.
                            <br />
                            <span style={{ color: "#9ca3af", fontWeight: 700 }}>Zero theoretical baggage.</span>
                        </h2>
                        {!isMobile && (
                            <p style={{ fontSize: 14, fontWeight: 500, color: "#9ca3af", maxWidth: 260, textAlign: "right", lineHeight: 1.65, margin: 0 }}>
                                Every trainer is actively working in the industry. Real experience, real results.
                            </p>
                        )}
                    </div>
                    {isMobile && (
                        <p style={{ fontSize: 13, fontWeight: 500, color: "#9ca3af", lineHeight: 1.65, margin: "12px 0 0" }}>
                            Every trainer is actively working in the industry. Real experience, real results.
                        </p>
                    )}
                </div>

                {/* Cards */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(min(100%, 520px), 1fr))",
                    gap: isMobile ? 14 : 16,
                }}>
                    {trainers.map((trainer, i) => (
                        <TrainerCard key={i} trainer={trainer} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── WHY SECTION ───────────────────────────────────────────────
const differentiators = [
    { num: "01", title: "Real Campaigns, Real Results", desc: "Every trainer has personally managed live campaigns with real budgets. What they teach, they've done — for actual brands with actual stakes.", icon: "📈" },
    { num: "02", title: "Industry-Active, Not Retired", desc: "Our trainers aren't ex-practitioners. They're currently working professionals who bring this week's insights into the classroom.", icon: "⚡" },
    { num: "03", title: "15+ Years Average Experience", desc: "Collectively over 90 years of combined digital marketing experience. That's not a number — that's pattern recognition money can't buy.", icon: "🏆" },
    { num: "04", title: "Mentorship Beyond the Classroom", desc: "Sessions don't end when the clock does. Our trainers are accessible for career guidance, portfolio reviews, and real-world problem solving.", icon: "🤝" },
    { num: "05", title: "18+ Country Client Exposure", desc: "Global campaigns. Local nuance. Our trainers have worked across markets and bring a cross-cultural strategic perspective to every lesson.", icon: "🌍" },
    { num: "06", title: "Curriculum Built from Failures", desc: "The most valuable lessons come from what went wrong. Our trainers openly share mistakes, pivots, and hard-won learnings you won't find in any textbook.", icon: "🔥" },
];

function WhyItem({ item, index }) {
    const [ref, inView] = useInView(0.1);
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <div
                ref={ref}
                style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 0.6s ease ${index * 70}ms, transform 0.6s ease ${index * 70}ms`,
                    display: "flex", alignItems: "flex-start", gap: 14,
                    padding: "18px 0",
                    borderBottom: "1px solid #f0ede6",
                }}
            >
                {/* Number + icon stacked */}
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, paddingTop: 2 }}>
                    <span style={{
                        fontSize: 10, fontWeight: 900,
                        color: "#d1c9b8", letterSpacing: "0.1em",
                        fontFamily: "'Satoshi', sans-serif",
                    }}>{item.num}</span>
                    <span style={{
                        fontSize: 22, lineHeight: 1,
                        padding: "7px 8px",
                        background: "#ECAB0010",
                        borderRadius: 10,
                        border: "1px solid #ECAB0025",
                    }}>{item.icon}</span>
                </div>

                {/* Left accent line */}
                <div style={{
                    flexShrink: 0, width: 2, alignSelf: "stretch",
                    background: inView ? "linear-gradient(to bottom, #ECAB00, #ECAB0020)" : "transparent",
                    borderRadius: 2,
                    transition: `background 0.8s ease ${index * 70 + 200}ms`,
                }} />

                {/* Content */}
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 800, color: "#0f172a", margin: "0 0 6px", lineHeight: 1.3, fontFamily: "'Satoshi', sans-serif" }}>
                        {item.title}
                    </h3>
                    <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                        {item.desc}
                    </p>
                </div>
            </div>
        );
    }

    const isEven = index % 2 === 0;
    return (
        <div
            ref={ref}
            style={{
                display: "flex",
                flexDirection: isEven ? "row" : "row-reverse",
                alignItems: "flex-start",
                gap: 0,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : isEven ? "translateX(-40px)" : "translateX(40px)",
                transition: `opacity 0.7s ease ${index * 90}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 90}ms`,
            }}
        >
            <div style={{
                flexShrink: 0, width: 100,
                display: "flex", flexDirection: "column",
                alignItems: isEven ? "flex-end" : "flex-start",
                paddingTop: 4,
            }}>
                <span style={{
                    fontSize: 64, fontWeight: 900, lineHeight: 1,
                    color: "transparent",
                    WebkitTextStroke: "1.5px #ECAB0040",
                    userSelect: "none", fontFamily: "'Satoshi', sans-serif",
                }}>{item.num}</span>
            </div>
            <div style={{
                flexShrink: 0, width: 1, alignSelf: "stretch",
                background: inView ? "linear-gradient(to bottom, #ECAB00, #ECAB0020)" : "transparent",
                margin: isEven ? "0 28px 0 16px" : "0 16px 0 28px",
                transition: `background 0.8s ease ${index * 90 + 200}ms`,
            }} />
            <div style={{ flex: 1, paddingBottom: 8 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 18, lineHeight: 1, padding: "6px 8px", background: "#ECAB0010", borderRadius: 10, border: "1px solid #ECAB0025" }}>{item.icon}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "#0f172a", margin: 0, lineHeight: 1.2, fontFamily: "'Satoshi', sans-serif", letterSpacing: "-0.01em" }}>
                        {item.title}
                    </h3>
                </div>
                <p style={{ fontSize: 13.5, color: "#6b7280", lineHeight: 1.75, margin: 0, fontWeight: 500, maxWidth: 420 }}>
                    {item.desc}
                </p>
            </div>
        </div>
    );
}

function WhyOurTrainers() {
    const [headerRef, headerInView] = useInView(0.1);
    const isMobile = useIsMobile();

    return (
        <section style={{
            fontFamily: "'Satoshi', sans-serif",
            background: "#FAFAF8",
            padding: isMobile ? "56px 16px 64px" : "90px 32px 100px",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid #f0ede6",
        }}>
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `radial-gradient(circle, #00000008 1px, transparent 1px)`,
                backgroundSize: "28px 28px",
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", top: -120, right: -80,
                width: 500, height: 500, borderRadius: "50%",
                background: "radial-gradient(circle, #ECAB0010 0%, transparent 70%)",
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* Header */}
                <div
                    ref={headerRef}
                    style={{
                        marginBottom: isMobile ? 32 : 72,
                        opacity: headerInView ? 1 : 0,
                        transform: headerInView ? "none" : "translateY(20px)",
                        transition: "opacity 0.7s ease, transform 0.7s ease",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <span style={{ display: "inline-block", width: 24, height: 1.5, background: "#ECAB00", borderRadius: 2 }} />
                        <p style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.35em", color: "#ECAB00", margin: 0 }}>
                            What sets them apart
                        </p>
                    </div>
                    <h2 style={{
                        fontSize: isMobile ? "clamp(26px, 7.5vw, 36px)" : "clamp(30px, 4vw, 48px)",
                        fontWeight: 900, color: "#0f172a",
                        margin: "0 0 14px", lineHeight: 1.05,
                        fontFamily: "'Satoshi', sans-serif",
                        letterSpacing: "-0.02em",
                    }}>
                        Not just teachers.{" "}
                        <span style={{ color: "#ECAB00", position: "relative", display: "inline-block" }}>
                            Practitioners.
                            <span style={{
                                position: "absolute", bottom: -4, left: 0, right: 0,
                                height: 2, background: "linear-gradient(to right, #ECAB00, transparent)", borderRadius: 2,
                            }} />
                        </span>
                    </h2>
                    <p style={{ fontSize: isMobile ? 14 : 15, fontWeight: 500, color: "#6b7280", lineHeight: 1.7, margin: 0, maxWidth: 460 }}>
                        The difference between a good course and a career-changing one is who teaches it.
                    </p>
                </div>

                {/* Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 0 : 40 }}>
                    {differentiators.map((d, i) => (
                        <WhyItem key={i} item={d} index={i} />
                    ))}
                </div>

                {/* Bottom rule */}
                <div style={{ marginTop: isMobile ? 40 : 72, height: 1, background: "linear-gradient(to right, transparent, #ECAB0060, transparent)" }} />

                {/* Bottom stat strip */}
                <div style={{
                    marginTop: isMobile ? 28 : 40,
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                    gap: isMobile ? 20 : 24,
                }}>
                    {[
                        { val: "90+", label: "Years combined experience" },
                        { val: "18+", label: "Countries served" },
                        { val: "11K+", label: "Students trained" },
                        { val: "1000+", label: "Live campaigns managed" },
                    ].map((s, i) => {
                        const [sRef, sInView] = useInView(0.1);
                        return (
                            <div
                                key={i}
                                ref={sRef}
                                style={{
                                    opacity: sInView ? 1 : 0,
                                    transform: sInView ? "translateY(0)" : "translateY(16px)",
                                    transition: `opacity 0.6s ease ${i * 100}ms, transform 0.6s ease ${i * 100}ms`,
                                    textAlign: "center",
                                }}
                            >
                                <p style={{
                                    fontSize: isMobile ? 26 : 32, fontWeight: 900, color: "#ECAB00",
                                    margin: "0 0 4px", lineHeight: 1,
                                    fontFamily: "'Satoshi', sans-serif",
                                }}>{s.val}</p>
                                <p style={{
                                    fontSize: 10, fontWeight: 600,
                                    color: "#9ca3af", textTransform: "uppercase",
                                    letterSpacing: "0.08em", margin: 0,
                                }}>{s.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// ── CTA SECTION ───────────────────────────────────────────────
function CTA() {
    const [ref, inView] = useInView(0.2);
    const isMobile = useIsMobile();

    return (
        <section style={{
            fontFamily: "'Satoshi', sans-serif",
            background: "#0f172a",
            padding: isMobile ? "56px 20px" : "80px 32px",
        }}>
            <div
                ref={ref}
                style={{
                    maxWidth: 1320, margin: "0 auto",
                    display: "flex", flexWrap: "wrap",
                    gap: isMobile ? 32 : 48,
                    alignItems: "center", justifyContent: "space-between",
                    opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(20px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
            >
                {/* Left */}
                <div style={{ maxWidth: 540, flex: 1 }}>
                    <p style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.3em", color: "#ECAB00", margin: "0 0 14px" }}>
                        ✦ Your next move
                    </p>
                    <h2 style={{
                        fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(26px, 3.5vw, 44px)",
                        fontWeight: 900, color: "#fff", margin: "0 0 12px", lineHeight: 1.1,
                        fontFamily: "'Satoshi', sans-serif",
                    }}>
                        Sit with our trainers.
                        <br />
                        <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.45)" }}>Feel the difference.</em>
                    </h2>
                    <p style={{ fontSize: isMobile ? 14 : 16, fontWeight: 500, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, margin: "0 0 24px" }}>
                        One free demo class. No pressure, no pitch — just complete clarity on your next step.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 10 : 20 }}>
                        {["100% Free", "No obligation", "Live session", "Expert trainer"].map((item, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                                <span style={{ color: "#ECAB00" }}><Check /></span>
                                <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.55)" }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div style={{
                    display: "flex", flexDirection: "column", gap: 12, flexShrink: 0,
                    width: isMobile ? "100%" : "auto",
                }}>
                    <a href="#" className="tp-cta-primary" style={{ width: isMobile ? "100%" : "auto" }}>
                        Book Free Demo Class <Arrow size={16} />
                    </a>
                    <a href="#" className="tp-cta-secondary" style={{ width: isMobile ? "100%" : "auto" }}>
                        Download Brochure
                    </a>
                </div>
            </div>
        </section>
    );
}

// ── ROOT ──────────────────────────────────────────────────────
export default function TrainersPage() {
    useFonts();
    return (
        <main style={{ fontFamily: "'Satoshi', sans-serif" }}>
            <Hero />
            <RosterGrid />
            <WhyOurTrainers />
            <CTA />
        </main>
    );
}