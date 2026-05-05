import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Star, Award, BookOpen, Target, TrendingUp, ShieldCheck, Globe } from 'lucide-react';
import StudentReviews from '../../components/StudentReviews/StudentReviews.jsx';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ── Font injection ──
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

// ── Animated Counter ──
function Counter({ target, suffix = "", duration = 2000 }) {
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

const facultyPoints = [
    "Complete professionals with actual experience in the field of Digital Marketing.",
    "Very amicable in nature and give 100% personalized focus on every student.",
    "Help in solving every doubt and query of a student.",
    "Teach and train students by applying very simple methods and approaches.",
    "Teach practically by assigning live projects to the students.",
    "Build the foundation of students strong by making them understand conventional theories of the field.",
];

const stats = [
    { num: 14, suffix: "+", label: "Years Experience" },
    { num: 11000, suffix: "+", label: "Students Trained" },
    { num: 250, suffix: "+", label: "Hiring Partners" },
    { num: 100, suffix: "%", label: "Placement Assistance" },
];

const brandLogos = [
    243, 244, 250, 251, 252, 255, 256, 263, 264, 265,
    266, 267, 268, 269, 270, 271, 272, 233, 237, 241,
];

// ── HERO ──
function AboutHero() {
    const [show, setShow] = useState(false);
    useEffect(() => { const t = setTimeout(() => setShow(true), 100); return () => clearTimeout(t); }, []);

    return (
        <section className="relative w-full overflow-hidden bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white">

            <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-14 py-16 md:py-24 lg:py-28">
                <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col items-start">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                                About Operating Media
                            </span>
                        </div>

                        <h1 className="font-black text-[36px] md:text-[48px] lg:text-[58px] text-[#0f172a] leading-[1.05] tracking-tight mb-6">
                            <div className={`transition-all duration-700 delay-100 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                Building a
                            </div>
                            <div className={`transition-all duration-700 delay-200 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                Better Future{' '}
                                <span className="relative inline-block text-[#ECAB00]">
                                    Together.
                                    <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                    </svg>
                                </span>
                            </div>
                        </h1>

                        <p className={`text-[16px] md:text-[18px] text-gray-600 font-medium leading-relaxed max-w-[520px] mb-10 transition-all duration-700 delay-300 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            One in Top 5 Institutes Since 14 Years — training <span className="font-bold text-[#0f172a]">11,000+ students</span> with one mission: genuine job-readiness, not just a certificate.
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <Link to="/contact-us/">
                                <button className="group relative flex items-center gap-3 bg-[#ECAB00] text-white px-8 py-4 rounded-xl font-bold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(236,171,0,0.5)] hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Enroll Today
                                        <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT — Stats card */}
                    <div className={`transition-all duration-1000 delay-300 ease-out ${show ? 'opacity-100 lg:translate-x-0 scale-100' : 'opacity-0 lg:translate-x-12 scale-95'}`}>
                        <div className="bg-[#0f172a] rounded-[2rem] p-8 border border-white/5 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)]">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-[2px] w-8 bg-[#ECAB00]" />
                                <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em]">By The Numbers</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((s, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="font-black text-[40px] text-[#ECAB00] leading-none mb-2">
                                            <Counter target={s.num} suffix={s.suffix} />
                                        </span>
                                        <span className="font-bold text-[12px] text-gray-400 uppercase tracking-widest leading-snug">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-3">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-[#ECAB00] text-[#ECAB00]" />
                                    ))}
                                </div>
                                <span className="text-[14px] font-bold text-white">4.8 Google Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats strip */}
            <div className="relative z-20 mx-6 lg:mx-14 max-w-[1400px] xl:mx-auto pb-16">
                <div className="bg-[#0f172a] rounded-2xl shadow-xl p-6 lg:p-8 flex flex-wrap lg:flex-nowrap justify-between gap-6">
                    {[
                        { icon: <Globe size={20} />, title: "Andheri & Borivali", sub: "Two Mumbai Campuses" },
                        { icon: <Users size={20} />, title: "Max 10 Students", sub: "Personalised Batches" },
                        { icon: <ShieldCheck size={20} />, title: "Google Certified", sub: "Industry Recognised" },
                        { icon: <Award size={20} />, title: "Since 2011", sub: "14 Years of Excellence" },
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
        </section>
    );
}

// ── WHO WE ARE ──
function WhoWeAre() {
    return (
        <section className="relative w-full bg-[#FAFCFF] font-['Satoshi',sans-serif] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ECAB00]/8 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-14 py-10 md:py-[50px] lg:py-[60px]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT */}
                    <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] text-[#2563eb] uppercase tracking-[0.2em]">Who We Are</span>
                        </div>

                        <h2 className="font-black text-[28px] md:text-[36px] lg:text-[42px] text-[#0f172a] leading-[1.15] tracking-tight mb-6">
                            One in Top 5{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Institutes
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>{' '}
                            Since 14 Years.
                        </h2>

                        <div className="space-y-5 text-gray-600 text-[16px] md:text-[17px] font-medium leading-relaxed mb-8">
                            <p>
                                We are <span className="font-bold text-[#0f172a]">Operating Media</span>, one of the leading Digital Marketing Training providers in India. If you aspire to be a Digital Marketing expert and want to excel in the domain of Internet Marketing, you are at the right place.
                            </p>
                            <p>
                                We also offer customised Digital Marketing Workshops for corporate organisations who are interested in taking their businesses to the next level by <span className="font-bold text-[#0f172a]">leveraging Digital Marketing</span>.
                            </p>
                            <p>
                                With leading industry experts and world class infrastructure, our team has certified professionals who are experts in their field. We have very well structured and comprehensive course content covering <span className="font-bold text-[#ECAB00]">all aspects of Digital Marketing</span>.
                            </p>
                        </div>

                        <Link to="/contact-us/">
                            <button className="group flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-[#ECAB00] hover:text-[#0f172a] transition-all duration-300 shadow-md hover:shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)]">
                                Explore Courses
                                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* RIGHT — office image + highlights */}
                    <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="flex flex-col gap-6">
                        <div className="rounded-[2rem] overflow-hidden">
                            <img
                                src="https://www.operatingmedia.com/wp-content/uploads/2025/01/office-desk-with-accessories-keyboard-smartphone-pens-marketing-milestones-concept-1.webp"
                                alt="Operating Media Institute"
                                className="w-full h-[280px] object-cover"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                "Live Projects Included",
                                "Google Certified Trainers",
                                "100% Placement Assistance",
                                "Small Batch Sizes",
                                "Weekday & Weekend Batches",
                                "Corporate Training Available",
                            ].map((t, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white border border-gray-100 px-4 py-3 rounded-xl shadow-sm hover:border-[#ECAB00]/30 transition-colors duration-300">
                                    <CheckCircle2 size={16} className="text-[#ECAB00] shrink-0" />
                                    <span className="text-[13px] font-bold text-[#0f172a]">{t}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ── FACULTY SECTION ──
function Faculty() {
    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] overflow-hidden">
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* LEFT */}
                    <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#ECAB00] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#ECAB00] relative z-10" />
                            <span className="font-bold text-[11px] text-[#ECAB00] uppercase tracking-[0.2em]">Our Faculty</span>
                        </div>

                        <h2 className="font-black text-[28px] md:text-[36px] lg:text-[42px] text-[#0f172a] leading-[1.15] tracking-tight mb-6">
                            Learn Tricks of the Trade{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                from the Best.
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>

                        <div className="space-y-4 text-gray-600 text-[16px] font-medium leading-relaxed">
                            <p>
                                When the question of faculty arises, we don't believe in just claiming that we have only the best. Our faculty encompasses a group of <span className="font-bold text-[#0f172a]">normal people blessed with astounding potential and experience</span>.
                            </p>
                            <p>
                                Our courses are <span className="font-bold text-[#ECAB00]">100% practical</span>, specially designed by our experts and trainers who have pooled in years of expertise to bring you a course that is guaranteed to make you a Digital Marketing Professional.
                            </p>
                            <p>
                                So if you want to enjoy learning from the specialists of Digital Marketing then join hands with Operating Media and explore a sparkling career.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT — Faculty points */}
                    <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <div className="bg-[#0f172a] rounded-[2rem] p-8 lg:p-10 border border-white/5 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25)]">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-[2px] w-8 bg-[#ECAB00]" />
                                <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em]">Faculty Attributes</p>
                            </div>
                            <h3 className="font-black text-[20px] md:text-[24px] text-white leading-tight mb-8">
                                What Makes Our Trainers Different
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {facultyPoints.map((pt, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-[#ECAB00] shrink-0 mt-0.5" />
                                        <span className="text-[14px] font-medium text-gray-300 leading-snug">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ── TRUSTED BY BRANDS ──
function TrustedBrands() {
    const logos = [
        233, 234, 235, 236, 237, 238, 239, 240, 241, 242,
        243, 244, 245, 246, 247, 248, 249, 250, 251, 252,
    ];

    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#FAFCFF] font-['Satoshi',sans-serif] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                        <span className="font-bold text-[11px] text-[#2563eb] uppercase tracking-[0.2em]">Our Alumni Work At</span>
                    </div>
                    <h2 className="font-black text-[28px] md:text-[36px] lg:text-[42px] text-[#0f172a] leading-[1.15] tracking-tight">
                        Trusted by{' '}
                        <span className="relative inline-block text-[#ECAB00]">
                            Top Brands
                            <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                            </svg>
                        </span>
                    </h2>
                </motion.div>

                {/* Logo grid */}
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4">
                    {logos.map((n, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.03 }}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm p-3 flex items-center justify-center hover:border-[#ECAB00]/30 hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={`https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-${n}.png`}
                                alt={`Brand ${n}`}
                                className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── CTA ──
function AboutCTA() {
    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)]"
                >
                    <div className="absolute top-[-40%] right-[-5%] w-[300px] h-[300px] bg-[#ECAB00]/15 rounded-full blur-[60px] pointer-events-none" />
                    <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-[#2563eb]/20 rounded-full blur-[80px] pointer-events-none" />

                    <div className="text-center md:text-left relative z-10">
                        <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em] mb-2">Start Today</p>
                        <h3 className="text-white text-[24px] md:text-[32px] font-black leading-tight mb-2">
                            Ready to Transform{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Your Career?
                                <svg className="absolute w-full h-[8px] -bottom-1 left-0 text-[#ECAB00]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h3>
                        <p className="text-gray-400 font-medium text-[15px] md:text-[16px]">
                            Join 11,000+ students who've built careers through Operating Media.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
                        <Link to="/contact-us/">
                            <button className="flex items-center gap-2 bg-[#ECAB00] hover:bg-white text-[#0f172a] font-black text-[15px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] active:scale-95 group">
                                Enroll Today
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ── ROOT ──
export default function AboutUs() {
    useFonts();

    const location = useLocation();

    // 🔥 Dynamic base URL
    const baseUrl = window.location.origin;

    // 🔥 Clean canonical
    const cleanPath = location.pathname.replace(/\/$/, '') || '/';
    const canonicalUrl = baseUrl + cleanPath;

    return (
        <>
            <Helmet>

                {/* ✅ Primary SEO */}
                <title>About Us - Operating Media</title>

                <meta
                    name="description"
                    content="Operating Media is a leading digital marketing institute in mumbai. Since its inception in 2011, it have trained over 11000 students."
                />

                <meta
                    name="keywords"
                    content="about digital marketing institute Mumbai, Operating Media, marketing training institute, digital marketing trainers"
                />

                {/* ✅ Canonical */}
                <link
                    rel="canonical"
                    href="https://www.operatingmedia.com/about-us/"
                />

                {/* ✅ Open Graph */}
                <meta property="og:title" content="About Operating Media" />
                <meta
                    property="og:description"
                    content="Know our journey, trainers & why 11,000+ students trust us."
                />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />

                {/* ✅ Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Operating Media" />
                <meta
                    name="twitter:description"
                    content="Explore our institute, trainers & student success stories."
                />

                {/* ✅ Robots */}
                <meta name="robots" content="index, follow" />

            </Helmet>

            <main className="font-['Satoshi',sans-serif]">
                <AboutHero />
                <WhoWeAre />
                <Faculty />
                <TrustedBrands />
                <AboutCTA />
                <StudentReviews />
            </main>
        </>
    );
}