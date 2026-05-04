import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Globe, Zap, ShieldCheck, Target, Star, Users } from 'lucide-react';
import DownloadBrochure from "../../Navbar/DownloadBrochure";

const features = [
    "WordPress Website Creation", "Landing Page Design (Elementor)", "Search Engine Optimization",
    "Google Analytics 4", "Search Engine Marketing (SEM)", "Social Media Marketing (Organic)",
    "Social Media Advertising", "Creative Designing",
];

export default function HeroSection() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setShow(true), 100);
        return () => clearTimeout(t);
    }, []);

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
        <section className="relative w-full overflow-hidden bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white">

            {/* ── BACKGROUND GRID & GLOW ── */}
            <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[100px] animate-pulse-slow pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

            {/* ── HERO SECTION ── */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-14 py-10 md:py-[50px] lg:py-[60px]">
                <div className="grid lg:grid-cols-[1fr_550px] gap-16 items-center">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col items-start">

                        {/* Eyebrow Badge */}
                        <div
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                        >
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                                Diploma · Mumbai
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                            <div className={`transition-all duration-700 delay-100 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                The Diploma in
                            </div>
                            <div className={`transition-all duration-700 delay-200 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <span className="relative inline-block text-[#ECAB00]">
                                    Digital Marketing
                                    <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                    </svg>
                                </span>
                            </div>
                            <div className={`transition-all duration-700 delay-300 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <span className="text-[#2563eb]">That Gets You Hired.</span>
                            </div>
                        </h1>

                        {/* Subtext */}
                        <p className={`text-[16px] md:text-[18px] text-gray-600 font-medium leading-relaxed max-w-[500px] mb-10 transition-all duration-700 delay-400 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            The perfect entry point for beginners &amp; career switchers. Master SEO, Google Ads, Social Media &amp; more — <span className="font-bold text-[#ECAB00]">65+ hours</span> of hands-on training across 50+ industry tools.
                        </p>

                        {/* Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 transition-all duration-700 delay-500 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <button className="group relative w-full flex items-center justify-center gap-3 bg-[#ECAB00] text-white px-8 py-4 rounded-xl font-bold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(236,171,0,0.5)] hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Apply for Batch
                                        <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                                    </span>
                                </button>
                            </Link>
                            <div className="w-full sm:w-auto">
                                <div className="w-full sm:w-auto border-2 border-[#2563eb] text-[#2563eb] rounded-xl flex items-center justify-center font-bold overflow-hidden transition-all duration-300 hover:bg-[#2563eb] hover:text-white cursor-pointer">
                                    <DownloadBrochure />
                                </div>
                            </div>
                        </div>

                        {/* Trust Proof */}
                        <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition-all duration-700 delay-600 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-[#ECAB00] fill-[#ECAB00]" />
                                    ))}
                                </div>
                                <span className="font-bold text-[15px] text-[#0f172a]">3,500+ Alumni</span>
                            </div>
                            <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300" />
                            <div className="flex items-center gap-2">
                                <Users size={18} className="text-[#2563eb]" />
                                <span className="font-medium text-[15px] text-gray-500">Placed at 200+ companies</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className={`relative transition-all duration-1000 delay-300 ease-out ${show ? 'opacity-100 lg:translate-x-0 scale-100' : 'opacity-0 lg:translate-x-12 scale-95'}`}>

                        <div className="relative z-10 bg-white rounded-[2rem] p-3 border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hero-float">
                            <div className="rounded-[1.5rem] overflow-hidden relative group">
                                <div className="absolute inset-0 bg-black/5 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10 pointer-events-none" />
                                <img
                                    src="https://www.operatingmedia.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-15-at-10.45.59-2-1.png"
                                    alt="Diploma Student"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Inside Card Stats */}
                            <div className="px-2 py-6 grid grid-cols-3 divide-x divide-gray-100">
                                {[{ v: '2', l: 'Months' }, { v: '65+', l: 'Hours' }, { v: '50+', l: 'Tools' }].map((s, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <span className="font-black text-2xl text-[#0f172a] leading-none mb-1">{s.v}</span>
                                        <span className="font-bold text-[10px] text-[#2563eb] uppercase tracking-widest">{s.l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -bottom-6 -left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 float-anim-1">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#2563eb]">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="font-bold text-sm text-[#0f172a] leading-tight">100% Placement</p>
                                    <p className="font-medium text-xs text-gray-500">Industry Recognised</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-6 -right-6 z-20 bg-[#ECAB00] p-4 rounded-2xl shadow-[0_15px_30px_-10px_rgba(236,171,0,0.4)] float-anim-2">
                            <div className="flex items-center gap-3">
                                <Target size={24} className="text-white" />
                                <div>
                                    <p className="font-bold text-sm text-white leading-tight">Beginner-Friendly</p>
                                    <p className="font-medium text-xs text-white/90">Zero Prior Exp. Needed</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── QUICK STATS STRIP ── */}
            <div className="relative z-20 mx-6 lg:mx-14 max-w-[1400px] xl:mx-auto py-10 md:py-[50px] lg:py-[60px]">
                <div className="bg-[#0f172a] rounded-2xl shadow-xl p-6 lg:p-8 flex flex-wrap lg:flex-nowrap justify-between gap-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/20">
                    {[
                        { icon: <Globe size={20} />, title: "Andheri & Borivali", sub: "On-Campus Training" },
                        { icon: <Zap size={20} />, title: "50+ Industry Tools", sub: "Hands-On Practice" },
                        { icon: <ShieldCheck size={20} />, title: "100% Placement", sub: "Dedicated Job Support" },
                        { icon: <Users size={20} />, title: "Small Batches", sub: "Only 10 Students/Batch" },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-4 flex-1 min-w-[200px]">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                {s.icon}
                            </div>
                            <div>
                                <p className="font-bold text-[15px] text-white">{s.title}</p>
                                <p className="font-medium text-[13px] text-blue-100">{s.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── CUSTOM ANIMATIONS ── */}
            <style>{`
        .hero-float { animation: floatImage 6s ease-in-out infinite; }
        .float-anim-1 { animation: floatBadge 5s ease-in-out infinite; animation-delay: 1s; }
        .float-anim-2 { animation: floatBadge 6s ease-in-out infinite; animation-delay: 2.5s; }
        .animate-pulse-slow { animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
        </section>
    );
}