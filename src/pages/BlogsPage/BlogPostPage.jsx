import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

function useInView(threshold = 0.08) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
}

const CATEGORY_COLORS = {
    "SEO": "#F59E0B", "PPC": "#ECAB00", "Social Media": "#EC4899",
    "Analytics": "#7C3AED", "E-Commerce": "#10B981", "AI & Automation": "#0EA5E9",
};
function catColor(cat) { return CATEGORY_COLORS[cat] || "#FF6B00"; }

/* ── Reading progress ───────────────────────────────────────── */
function ReadingProgress() {
    const [p, setP] = useState(0);
    useEffect(() => {
        const fn = () => {
            const el = document.documentElement;
            const total = el.scrollHeight - el.clientHeight;
            setP(total > 0 ? (el.scrollTop / total) * 100 : 0);
        };
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);
    return (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999, height: 3, background: "rgba(255,107,0,0.12)", pointerEvents: "none" }}>
            <div style={{ height: "100%", background: "linear-gradient(to right,#FF6B00,#ECAB00)", width: `${p}%`, transition: "width 0.08s linear", borderRadius: "0 2px 2px 0" }} />
        </div>
    );
}

/* ── Cover Placeholder ──────────────────────────────────────── */
function CoverPlaceholder({ category, height = 420 }) {
    const color = catColor(category);
    return (
        <div style={{
            width: "100%", height,
            background: `linear-gradient(135deg, ${color}20 0%, ${color}08 100%)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative", overflow: "hidden",
        }}>
            <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 120, color: `${color}12`, letterSpacing: "-0.04em", userSelect: "none", position: "absolute" }}>
                {category.slice(0, 3).toUpperCase()}
            </span>
            <span style={{
                position: "absolute", bottom: 20, left: 20,
                fontFamily: "'Satoshi', sans-serif", fontWeight: 800, fontSize: 11,
                letterSpacing: "0.2em", textTransform: "uppercase", color: color,
                background: `${color}15`, border: `1px solid ${color}30`,
                padding: "6px 16px", borderRadius: 100,
            }}>{category}</span>
        </div>
    );
}

/* ── Sidebar: Latest Posts ──────────────────────────────────── */
function SidebarLatest({ currentSlug }) {
    const latest = blogs.filter(b => b.slug !== currentSlug).slice(0, 5);
    return (
        <div style={{ background: "#fff", borderRadius: 18, border: "1px solid #ece9e2", padding: "24px 22px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 15, color: "#0f172a", letterSpacing: "-0.02em", margin: "0 0 20px", paddingBottom: 14, borderBottom: "1.5px solid #f0ede6" }}>
                Latest Posts
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {latest.map((b, i) => {
                    const color = catColor(b.category);
                    return (
                        <Link key={b.slug} to={`/blogs/${b.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <div className="latest-item" style={{ display: "flex", gap: 12, alignItems: "flex-start", transition: "opacity 0.2s" }}>
                                {/* Thumb */}
                                <div style={{
                                    width: 56, height: 56, borderRadius: 10, flexShrink: 0, overflow: "hidden",
                                    background: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center",
                                    border: `1px solid ${color}20`,
                                }}>
                                    <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 13, color: color, letterSpacing: "-0.02em" }}>
                                        {b.category.slice(0, 3).toUpperCase()}
                                    </span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 13, color: "#0f172a", margin: "0 0 4px", lineHeight: 1.35 }}>{b.title}</p>
                                    <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 11, color: "#9ca3af", margin: 0 }}>{b.date}</p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

/* ── Sidebar: Categories ────────────────────────────────────── */
function SidebarCategories() {
    const cats = [...new Set(blogs.map(b => b.category))];
    return (
        <div style={{ background: "#fff", borderRadius: 18, border: "1px solid #ece9e2", padding: "24px 22px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 15, color: "#0f172a", letterSpacing: "-0.02em", margin: "0 0 18px", paddingBottom: 14, borderBottom: "1.5px solid #f0ede6" }}>
                Categories
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {cats.map((cat, i) => {
                    const color = catColor(cat);
                    const count = blogs.filter(b => b.category === cat).length;
                    return (
                        <Link key={cat} to={`/blogs?category=${cat}`} style={{ textDecoration: "none" }}>
                            <div className="cat-item" style={{
                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                padding: "10px 12px", borderRadius: 10, transition: "background 0.18s",
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
                                    <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 600, fontSize: 13, color: "#374151" }}>{cat}</span>
                                </div>
                                <span style={{
                                    fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 10,
                                    color: color, background: `${color}12`, border: `1px solid ${color}25`,
                                    padding: "2px 9px", borderRadius: 100,
                                }}>{count}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

/* ── Sidebar: Search ────────────────────────────────────────── */
function SidebarSearch() {
    const [q, setQ] = useState("");
    return (
        <div style={{ background: "#fff", borderRadius: 18, border: "1px solid #ece9e2", padding: "24px 22px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
            <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 15, color: "#0f172a", letterSpacing: "-0.02em", margin: "0 0 16px" }}>Search</h3>
            <div style={{ display: "flex", gap: 8 }}>
                <input
                    value={q} onChange={e => setQ(e.target.value)}
                    placeholder="Search articles…"
                    style={{
                        flex: 1, background: "#F7F6F3", border: "1.5px solid #E8E4DC",
                        borderRadius: 10, padding: "10px 14px",
                        fontFamily: "'Satoshi', sans-serif", fontSize: 13, fontWeight: 500, color: "#0f172a",
                        outline: "none",
                    }}
                    onFocus={e => e.target.style.borderColor = "#FF6B00"}
                    onBlur={e => e.target.style.borderColor = "#E8E4DC"}
                />
                <button style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: "#FF6B00", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s",
                }}
                    onMouseEnter={e => e.currentTarget.style.background = "#ea580c"}
                    onMouseLeave={e => e.currentTarget.style.background = "#FF6B00"}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

/* ── Comment Section ────────────────────────────────────────── */
function CommentSection() {
    const [form, setForm] = useState({ name: "", email: "", comment: "" });
    const [submitted, setSubmitted] = useState(false);
    const upd = f => e => setForm(p => ({ ...p, [f]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); setForm({ name: "", email: "", comment: "" }); }, 4000);
    };

    return (
        <div style={{
            background: "#fff", borderRadius: 20, border: "1px solid #ece9e2",
            padding: "36px 36px 40px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", marginTop: 32,
        }}>
            <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 20, color: "#0f172a", letterSpacing: "-0.03em", margin: "0 0 8px" }}>
                Leave a Comment
            </h3>
            <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 13, color: "#9ca3af", margin: "0 0 28px" }}>
                Your email address will not be published.
            </p>

            {submitted ? (
                <div style={{
                    padding: "20px 24px", borderRadius: 14,
                    background: "rgba(22,163,74,0.07)", border: "1.5px solid rgba(22,163,74,0.2)",
                    display: "flex", alignItems: "center", gap: 12,
                }}>
                    <span style={{ fontSize: 20 }}>✓</span>
                    <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 14, color: "#16a34a", margin: 0 }}>
                        Comment submitted! It will appear after review.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                        <input
                            className="ci" placeholder="Your Name" required
                            value={form.name} onChange={upd("name")}
                        />
                        <input
                            className="ci" type="email" placeholder="Your Email" required
                            value={form.email} onChange={upd("email")}
                        />
                    </div>
                    <textarea
                        className="ci" rows={5} placeholder="Enter Your Comment…" required
                        value={form.comment} onChange={upd("comment")}
                        style={{ resize: "none" }}
                    />
                    <div>
                        <button type="submit" style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            fontFamily: "'Satoshi', sans-serif", fontWeight: 900,
                            fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase",
                            padding: "14px 32px", borderRadius: 12, border: "none", cursor: "pointer",
                            background: "linear-gradient(135deg,#FF6B00,#ea580c)",
                            color: "#fff", boxShadow: "0 6px 20px rgba(255,107,0,0.28)",
                            transition: "transform 0.2s, box-shadow 0.2s",
                        }}
                            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(255,107,0,0.38)"; }}
                            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,107,0,0.28)"; }}
                        >
                            Submit Comment
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

/* ── Share Bar ──────────────────────────────────────────────── */
function ShareBar({ title }) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    const shares = [
        {
            name: "Facebook", color: "#1877F2",
            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
            href: `https://facebook.com/sharer/sharer.php?u=${url}`,
        },
        {
            name: "X / Twitter", color: "#000",
            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
            href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
        },
        {
            name: "LinkedIn", color: "#0A66C2",
            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
            href: `https://linkedin.com/sharing/share-offsite/?url=${url}`,
        },
        {
            name: "WhatsApp", color: "#25D366",
            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
            href: `https://wa.me/?text=${text}%20${url}`,
        },
        {
            name: "Pinterest", color: "#E60023",
            icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>,
            href: `https://pinterest.com/pin/create/button/?url=${url}`,
        },
    ];

    return (
        <div style={{
            background: "#fff", borderRadius: 18, border: "1px solid #ece9e2",
            padding: "22px 28px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16, marginTop: 40,
        }}>
            <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 800, fontSize: 14, color: "#0f172a", margin: 0 }}>
                Share Post :
            </p>
            <div style={{ display: "flex", gap: 10 }}>
                {shares.map(s => (
                    <a
                        key={s.name} href={s.href} target="_blank" rel="noreferrer"
                        title={s.name}
                        style={{
                            width: 36, height: 36, borderRadius: "50%",
                            background: "#f7f6f3", border: "1.5px solid #ece9e2",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#6b7280", textDecoration: "none",
                            transition: "all 0.2s",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = s.color; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = s.color; e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "#f7f6f3"; e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.borderColor = "#ece9e2"; e.currentTarget.style.transform = "none"; }}
                    >
                        {s.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}

/* ── Main ───────────────────────────────────────────────────── */
export default function BlogPostPage() {
    useFonts();
    const { slug } = useParams();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMounted(false);
        setTimeout(() => setMounted(true), 80);
    }, [slug]);

    const post = blogs.find(b => b.slug === slug);
    const [ctaRef, ctaInView] = useInView(0.1);

    if (!post) {
        return (
            <main style={{ fontFamily: "'Satoshi', sans-serif", background: "#F3F4F6", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 20 }}>
                <h1 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 48, color: "#0f172a", margin: 0 }}>Post not found</h1>
                <Link to="/blogs" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 15, color: "#FF6B00", textDecoration: "none", padding: "12px 24px", borderRadius: 12, background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.2)" }}>
                    ← Back to Blog
                </Link>
            </main>
        );
    }

    const color = catColor(post.category);

    return (
        <>
            <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        .blog-prose { font-family: 'Satoshi', sans-serif; color: #374151; line-height: 1.85; font-size: 16.5px; }
        .blog-prose h2 { font-family: 'Satoshi', sans-serif; font-weight: 900; font-size: clamp(1.2rem,2.2vw,1.55rem); color: #0f172a; letter-spacing: -0.03em; margin: 2.4em 0 0.7em; line-height: 1.2; }
        .blog-prose h3 { font-family: 'Satoshi', sans-serif; font-weight: 800; font-size: clamp(1rem,1.8vw,1.25rem); color: #0f172a; letter-spacing: -0.02em; margin: 2em 0 0.6em; line-height: 1.25; }
        .blog-prose p { font-family: 'Satoshi', sans-serif; margin: 0 0 1.35em; font-weight: 450; }
        .blog-prose strong { font-weight: 800; color: #111827; }
        .blog-prose em { font-style: italic; color: #4b5563; }
        .blog-prose ul, .blog-prose ol { margin: 0 0 1.35em; padding-left: 1.5em; }
        .blog-prose li { font-family: 'Satoshi', sans-serif; margin-bottom: 0.5em; }
        .blog-prose a { color: #FF6B00; font-weight: 700; text-decoration: none; border-bottom: 1.5px solid rgba(255,107,0,0.3); }
        .blog-prose a:hover { border-color: #FF6B00; }
        .blog-prose blockquote { border-left: 3px solid #FF6B00; padding: 14px 22px; margin: 2em 0; background: rgba(255,107,0,0.04); border-radius: 0 12px 12px 0; font-style: italic; font-weight: 500; color: #4b5563; }
        .blog-prose code { font-size: 13px; background: #f5f0e8; padding: 2px 7px; border-radius: 5px; font-family: monospace; color: #FF6B00; }
        .ci {
          width: 100%; background: #F7F6F3; border: 1.5px solid #E8E4DC;
          border-radius: 12px; padding: 13px 16px;
          font-size: 14px; font-weight: 500; color: #0f172a;
          font-family: 'Satoshi', sans-serif; outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          appearance: none; display: block;
        }
        .ci::placeholder { color: #b0a898; }
        .ci:focus { border-color: #FF6B00; background: #fff; box-shadow: 0 0 0 3px rgba(255,107,0,0.08); }
        .latest-item:hover { opacity: 0.75; }
        .cat-item:hover { background: #faf7f2; }
      `}</style>

            <ReadingProgress />

            <main style={{ fontFamily: "'Satoshi', sans-serif", background: "#F3F4F6", minHeight: "100vh" }}>

                {/* ── Breadcrumb bar ── */}
                <div style={{ background: "#fff", borderBottom: "1px solid #ece9e2", padding: "0 24px" }}>
                    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 0", display: "flex", alignItems: "center", gap: 8 }}>
                        <Link to="/" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 600, fontSize: 13, color: "#9ca3af", textDecoration: "none" }}>Home</Link>
                        <span style={{ color: "#d1c9b8", fontSize: 13 }}>›</span>
                        <Link to="/blogs" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 600, fontSize: 13, color: "#9ca3af", textDecoration: "none" }}>Blogs</Link>
                        <span style={{ color: "#d1c9b8", fontSize: 13 }}>›</span>
                        <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 600, fontSize: 13, color: "#374151" }}>{post.title}</span>
                    </div>
                </div>

                {/* ── Main content + sidebar ── */}
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 24px 80px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: 28, alignItems: "start" }}>

                        {/* ── LEFT: Article ── */}
                        <div>
                            {/* Article card */}
                            <div style={{
                                background: "#fff", borderRadius: 20, overflow: "hidden",
                                border: "1px solid #ece9e2", boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                                opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(24px)",
                                transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                            }}>
                                {/* Cover */}
                                <CoverPlaceholder category={post.category} height={380} />

                                {/* Meta row */}
                                <div style={{ padding: "28px 36px 0", display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                                    {/* Author */}
                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <div style={{
                                            width: 30, height: 30, borderRadius: "50%",
                                            background: `linear-gradient(135deg,${color},${color}88)`,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 11, color: "#fff",
                                        }}>
                                            {post.author.split(" ").map(w => w[0]).join("")}
                                        </div>
                                        <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 600, fontSize: 13, color: "#6b7280" }}>{post.author}</span>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                        <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 13, color: "#9ca3af" }}>{post.date}</span>
                                    </div>
                                    {post.readTime && (
                                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                            <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 13, color: "#9ca3af" }}>{post.readTime}</span>
                                        </div>
                                    )}
                                    <span style={{
                                        fontFamily: "'Satoshi', sans-serif", fontWeight: 800, fontSize: 10,
                                        letterSpacing: "0.18em", textTransform: "uppercase", color: color,
                                        background: `${color}12`, border: `1px solid ${color}25`,
                                        padding: "4px 12px", borderRadius: 100, marginLeft: "auto",
                                    }}>{post.category}</span>
                                </div>

                                {/* Title */}
                                <div style={{ padding: "18px 36px 0" }}>
                                    <h1 style={{
                                        fontFamily: "'Satoshi', sans-serif", fontWeight: 900,
                                        fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                                        color: "#0f172a", letterSpacing: "-0.035em", lineHeight: 1.2, margin: 0,
                                    }}>
                                        {post.title}
                                    </h1>
                                </div>

                                {/* Orange accent line under title */}
                                <div style={{ margin: "16px 36px 0", height: 3, width: 48, background: `linear-gradient(to right,${color},transparent)`, borderRadius: 2 }} />

                                {/* Body */}
                                <div style={{ padding: "28px 36px 36px" }}>
                                    <article className="blog-prose" dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>

                                {/* Tags */}
                                {post.tags && post.tags.length > 0 && (
                                    <div style={{ padding: "0 36px 28px", display: "flex", gap: 8, flexWrap: "wrap" }}>
                                        {post.tags.map((tag, i) => (
                                            <span key={i} style={{
                                                fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: 11,
                                                padding: "5px 14px", borderRadius: 100,
                                                background: "#f0ede6", color: "#6b7280", border: "1px solid #ece9e2", letterSpacing: "0.06em",
                                            }}>#{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Share bar */}
                            <ShareBar title={post.title} />

                            {/* CTA */}
                            <div
                                ref={ctaRef}
                                style={{
                                    marginTop: 32, borderRadius: 20,
                                    background: "linear-gradient(135deg,#0f172a,#1a2540)",
                                    padding: "40px 40px",
                                    display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24,
                                    position: "relative", overflow: "hidden",
                                    opacity: ctaInView ? 1 : 0, transform: ctaInView ? "translateY(0)" : "translateY(20px)",
                                    transition: "opacity 0.7s ease, transform 0.7s ease",
                                }}
                            >
                                <div style={{ position: "absolute", top: "-50%", right: "-5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,107,0,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
                                <div style={{ position: "relative", zIndex: 1 }}>
                                    <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.35em", color: "#FF6B00", margin: "0 0 10px" }}>✦ Learn from the best</p>
                                    <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: "clamp(1.1rem,2.5vw,1.65rem)", color: "#fff", letterSpacing: "-0.03em", margin: "0 0 8px", lineHeight: 1.2 }}>
                                        Want to learn digital marketing?
                                    </h3>
                                    <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.7 }}>
                                        Join 11,000+ students trained by the same experts who write these articles.
                                    </p>
                                </div>
                                <a href="/contact" style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: 14,
                                    padding: "14px 28px", borderRadius: 100,
                                    background: "linear-gradient(135deg,#FF6B00,#ea580c)",
                                    color: "#fff", textDecoration: "none", whiteSpace: "nowrap",
                                    boxShadow: "0 8px 24px rgba(255,107,0,0.3)", flexShrink: 0,
                                    position: "relative", zIndex: 1, transition: "transform 0.2s",
                                }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "none"}
                                >
                                    Book a Free Demo →
                                </a>
                            </div>

                            {/* Comment section */}
                            <CommentSection />
                        </div>

                        {/* ── RIGHT: Sidebar ── */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "sticky", top: 100 }}>
                            <SidebarSearch />
                            <SidebarCategories />
                            <SidebarLatest currentSlug={post.slug} />
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}