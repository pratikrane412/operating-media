import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../../data/blogs";

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

const CATEGORY_COLORS = {
    "SEO": "#F59E0B",
    "PPC": "#ECAB00",
    "Social Media": "#EC4899",
    "Analytics": "#7C3AED",
    "E-Commerce": "#10B981",
    "AI & Automation": "#0EA5E9",
};

function categoryColor(cat) {
    return CATEGORY_COLORS[cat] || "#ECAB00";
}

function CoverPlaceholder({ category, height = 260 }) {
    const color = categoryColor(category);
    return (
        <div style={{
            width: "100%", height,
            background: `linear-gradient(135deg, ${color}22 0%, ${color}08 100%)`,
            border: `1px solid ${color}20`,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
        }}>
            <span style={{
                fontFamily: "'Satoshi', sans-serif", fontWeight: 900,
                fontSize: Math.min(typeof height === "number" ? height / 2.5 : 80, 80),
                color: `${color}18`, letterSpacing: "-0.04em",
                userSelect: "none", position: "absolute",
            }}>
                {category.toUpperCase()}
            </span>
            <span style={{
                position: "absolute", bottom: 16, left: 16,
                fontFamily: "'Satoshi', sans-serif", fontWeight: 800,
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                color: color, background: `${color}15`,
                border: `1px solid ${color}30`,
                padding: "5px 14px", borderRadius: 100,
            }}>
                {category}
            </span>
        </div>
    );
}

function FeaturedCard({ blog }) {
    const [hovered, setHovered] = useState(false);
    const [ref, inView] = useInView(0.04);
    const isMobile = useIsMobile();
    const color = categoryColor(blog.category);

    return (
        <Link to={`/blogs/${blog.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div
                ref={ref}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    borderRadius: 24, overflow: "hidden",
                    border: `1.5px solid ${hovered ? color + "50" : "#ece9e2"}`,
                    background: "#fff",
                    boxShadow: hovered ? `0 20px 60px ${color}14` : "0 4px 24px rgba(0,0,0,0.05)",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(28px)",
                    transitionProperty: "opacity, transform, border-color, box-shadow",
                    transitionDuration: "0.65s, 0.65s, 0.3s, 0.3s",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    minHeight: isMobile ? "auto" : 340,
                }}
            >
                {/* Cover */}
                <div style={{ position: "relative", overflow: "hidden", background: `${color}10`, minHeight: isMobile ? 220 : "auto" }}>
                    {blog.cover ? (
                        <img
                            src={blog.cover}
                            alt={blog.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: isMobile ? 220 : 340 }}
                        />
                    ) : (
                        <CoverPlaceholder category={blog.category} height={isMobile ? 220 : "100%"} />
                    )}
                    <span style={{
                        position: "absolute", top: 18, left: 18, zIndex: 5,
                        fontFamily: "'Satoshi', sans-serif", fontWeight: 900,
                        fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase",
                        color: "#fff", background: "#ECAB00",
                        padding: "6px 14px", borderRadius: 100,
                    }}>
                        ✦ Featured
                    </span>
                </div>

                {/* Text */}
                <div style={{
                    padding: isMobile ? "28px 24px" : "40px 40px",
                    display: "flex", flexDirection: "column", justifyContent: "center", gap: 16,
                }}>
                    <span style={{
                        fontFamily: "'Satoshi', sans-serif", fontWeight: 800, fontSize: 10,
                        letterSpacing: "0.2em", textTransform: "uppercase",
                        color: color, background: `${color}10`,
                        border: `1px solid ${color}25`,
                        padding: "5px 14px", borderRadius: 100, alignSelf: "flex-start",
                    }}>
                        {blog.category}
                    </span>

                    <h2 style={{
                        fontFamily: "'Satoshi', sans-serif", fontWeight: 900,
                        fontSize: isMobile ? "1.3rem" : "clamp(1.3rem, 2vw, 1.9rem)",
                        color: "#0f172a", letterSpacing: "-0.03em",
                        lineHeight: 1.2, margin: 0,
                    }}>
                        {blog.title}
                    </h2>

                    <p style={{
                        fontFamily: "'Satoshi', sans-serif", fontWeight: 500,
                        fontSize: 14, color: "#6b7280", lineHeight: 1.75, margin: 0,
                        display: "-webkit-box", WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}>
                        {blog.excerpt}
                    </p>

                    <div style={{ height: 1, background: "#f0ede6" }} />

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div style={{
                                width: 36, height: 36, borderRadius: "50%",
                                background: `linear-gradient(135deg, ${color}, ${color}99)`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 12, color: "#fff",
                            }}>
                                {blog.author.split(" ").map(w => w[0]).join("")}
                            </div>
                            <div>
                                <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 13, color: "#0f172a", margin: 0 }}>
                                    {blog.author}
                                </p>
                                <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 11, color: "#9ca3af", margin: 0 }}>
                                    {blog.date} · {blog.readTime || "5 min read"}
                                </p>
                            </div>
                        </div>
                        <span style={{
                            fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 13,
                            color: hovered ? color : "#c4b89a", transition: "color 0.2s",
                        }}>
                            Read →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function BlogCard({ blog, index }) {
    const [hovered, setHovered] = useState(false);
    const [ref, inView] = useInView(0.06);
    const color = categoryColor(blog.category);

    return (
        <Link to={`/blogs/${blog.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div
                ref={ref}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    borderRadius: 20, overflow: "hidden",
                    border: `1.5px solid ${hovered ? color + "45" : "#ece9e2"}`,
                    background: "#fff",
                    boxShadow: hovered ? `0 16px 48px ${color}12` : "0 2px 12px rgba(0,0,0,0.04)",
                    transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
                    transform: hovered ? "translateY(-5px)" : "translateY(0)",
                    opacity: inView ? 1 : 0,
                    transitionProperty: "opacity, transform, border-color, box-shadow",
                    transitionDuration: "0.6s, 0.3s, 0.3s, 0.3s",
                    transitionDelay: `${index * 60}ms`,
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    display: "flex", flexDirection: "column",
                    height: "100%",
                }}
            >
                {blog.cover ? (
                    <img
                        src={blog.cover}
                        alt={blog.title}
                        style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                    />
                ) : (
                    <CoverPlaceholder category={blog.category} height={180} />
                )}

                <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                    <h3 style={{
                        fontFamily: "'Satoshi', sans-serif", fontWeight: 900,
                        fontSize: 16, color: "#0f172a", letterSpacing: "-0.025em",
                        lineHeight: 1.35, margin: 0,
                        display: "-webkit-box", WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}>
                        {blog.title}
                    </h3>
                    <p style={{
                        fontFamily: "'Satoshi', sans-serif", fontWeight: 500,
                        fontSize: 13, color: "#6b7280", lineHeight: 1.7, margin: 0,
                        display: "-webkit-box", WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                    }}>
                        {blog.excerpt}
                    </p>
                    <div style={{ height: 1, background: "#f5f0e8" }} />
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{
                                width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                                background: `linear-gradient(135deg, ${color}, ${color}99)`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 10, color: "#fff",
                            }}>
                                {blog.author.split(" ").map(w => w[0]).join("")}
                            </div>
                            <div>
                                <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 12, color: "#374151", margin: 0, lineHeight: 1.2 }}>
                                    {blog.author}
                                </p>
                                <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 10, color: "#9ca3af", margin: 0 }}>
                                    {blog.date}
                                </p>
                            </div>
                        </div>
                        <span style={{
                            fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 12,
                            color: hovered ? color : "#c4b89a", transition: "color 0.2s",
                        }}>
                            {blog.readTime || "5 min"} →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function BlogsHero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);

    return (
        <section style={{
            position: "relative", background: "#080C18",
            overflow: "hidden", padding: "96px 24px 88px",
        }}>
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: "linear-gradient(rgba(255,107,0,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,0.05) 1px,transparent 1px)",
                backgroundSize: "56px 56px",
            }} />
            <div style={{
                position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)",
                width: 700, height: 400, borderRadius: "50%",
                background: "radial-gradient(ellipse,rgba(255,107,0,0.12) 0%,transparent 70%)",
                filter: "blur(70px)", pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 10 }}>
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24,
                    opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)",
                    transition: "all 0.6s ease 0.1s",
                }}>
                    <span style={{ display: "block", width: 28, height: 1.5, background: "#ECAB00", borderRadius: 2 }} />
                    <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 11, letterSpacing: "0.35em", textTransform: "uppercase", color: "#ECAB00" }}>
                        Operating Media Blog
                    </span>
                </div>

                <div style={{ overflow: "hidden", marginBottom: 4 }}>
                    <h1 style={{
                        fontFamily: "'Satoshi', sans-serif", fontWeight: 900,
                        fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                        color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.28, margin: 0,
                        transform: mounted ? "translateY(0)" : "translateY(110%)",
                        opacity: mounted ? 1 : 0,
                        transition: "transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.2s, opacity 0.85s ease 0.2s",
                    }}>
                        Insights from the
                    </h1>
                </div>
                <div style={{ overflow: "hidden", marginBottom: 24 }}>
                    <h1 style={{
                        fontFamily: "'Satoshi', sans-serif", fontWeight: 900,
                        fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                        color: "#ECAB00", letterSpacing: "-0.04em", lineHeight: 1.28, margin: 0,
                        transform: mounted ? "translateY(0)" : "translateY(110%)",
                        opacity: mounted ? 1 : 0,
                        transition: "transform 0.85s cubic-bezier(0.16,1,0.3,1) 0.32s, opacity 0.85s ease 0.32s",
                    }}>
                        industry's front line.
                    </h1>
                </div>

                <p style={{
                    fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 16,
                    color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 500, margin: 0,
                    opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.7s ease 0.5s",
                }}>
                    Practical strategies, real campaign breakdowns, and career advice — straight from our trainers who are actively doing it.
                </p>
            </div>
        </section>
    );
}

export default function BlogsPage() {
    useFonts();
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", ...new Set(blogs.map(b => b.category))];
    const filtered = activeCategory === "All" ? blogs : blogs.filter(b => b.category === activeCategory);
    const featured = filtered[0];
    const rest = filtered.slice(1);
    const [headerRef, headerInView] = useInView(0.05);

    return (
        <>
            <style>{`
                * { box-sizing: border-box; }
                .cat-btn {
                    font-family: 'Satoshi', sans-serif; font-weight: 700; font-size: 13px;
                    padding: 9px 20px; border-radius: 100px;
                    border: 1.5px solid #ece9e2; background: #fff; color: #6b7280;
                    cursor: pointer; transition: all 0.2s; white-space: nowrap;
                    -webkit-tap-highlight-color: transparent;
                }
                .cat-btn:hover { border-color: #ECAB00; color: #ECAB00; }
                .cat-btn.active { background: #ECAB00; color: #fff; border-color: #ECAB00; box-shadow: 0 4px 16px rgba(255,107,0,0.28); }

                @media (max-width: 767px) {
                    .blogs-filter-row { flex-direction: column !important; align-items: flex-start !important; }
                    .blogs-filter-scroll { overflow-x: auto; padding-bottom: 4px; flex-wrap: nowrap !important; }
                    .blogs-filter-scroll::-webkit-scrollbar { display: none; }
                }
            `}</style>

            <main style={{ fontFamily: "'Satoshi', sans-serif", background: "#FAFAF8", minHeight: "100vh" }}>
                <BlogsHero />

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 16px 80px" }}>

                    {/* Filter row */}
                    <div
                        ref={headerRef}
                        className="blogs-filter-row"
                        style={{
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            flexWrap: "wrap", gap: 14, marginBottom: 44,
                            opacity: headerInView ? 1 : 0, transform: headerInView ? "none" : "translateY(16px)",
                            transition: "opacity 0.6s ease, transform 0.6s ease",
                        }}
                    >
                        <div className="blogs-filter-scroll" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {categories.map(cat => (
                                <button key={cat} className={`cat-btn${activeCategory === cat ? " active" : ""}`} onClick={() => setActiveCategory(cat)}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 13, color: "#9ca3af", background: "#f0ede6", padding: "8px 16px", borderRadius: 100 }}>
                            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
                        </span>
                    </div>

                    {/* Featured */}
                    {featured && <div style={{ marginBottom: 20 }}><FeaturedCard blog={featured} /></div>}

                    {/* Divider */}
                    {rest.length > 0 && (
                        <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "36px 0 32px" }}>
                            <span style={{ display: "block", width: 20, height: 1.5, background: "#ECAB00", borderRadius: 2 }} />
                            <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", color: "#ECAB00" }}>More Articles</span>
                            <div style={{ flex: 1, height: 1, background: "#f0ede6" }} />
                        </div>
                    )}

                    {/* Grid */}
                    {rest.length > 0 && (
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                            gap: 16,
                            alignItems: "stretch",
                        }}>
                            {rest.map((blog, i) => <BlogCard key={blog.slug} blog={blog} index={i} />)}
                        </div>
                    )}

                    {filtered.length === 0 && (
                        <div style={{ textAlign: "center", padding: "80px 24px" }}>
                            <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 18, color: "#9ca3af" }}>No articles in this category yet.</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}