import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, TrendingUp, MapPin, Award, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

// ── DATA ──────────────────────────────────────────────────────

const CAREER_OUTCOMES = [
    {
        role: "Digital Marketing Executive",
        salary: "₹15K–₹35K/month",
        hasSalary: true,
    },
    { role: "SEO Specialist", hasSalary: false },
    { role: "Google Ads Expert", hasSalary: false },
    { role: "Social Media Manager", hasSalary: false },
    { role: "Freelancer / Consultant", hasSalary: false },
    { role: "Start Your Own Agency", hasSalary: false },
];

const PROGRAMS = [
    {
        emoji: "🎓",
        badge: "Master's Program",
        duration: "8 Months",
        highlight: true,
        bestFor: "Career switch, freshers, job seekers",
        features: [
            "120+ Tools Covered",
            "Advanced Strategy + Execution",
            "Placement Focused",
        ],
        link: "/courses/masters-digital-marketing",
    },
    {
        emoji: "🎓",
        badge: "Advanced Diploma",
        duration: "4 Months",
        highlight: false,
        bestFor: "Skill upgrade, working professionals",
        features: [
            "70+ Tools",
            "Hands-on Campaign Training",
        ],
        link: "/courses/advance-diploma-digital-marketing",
    },
    {
        emoji: "🎓",
        badge: "Diploma",
        duration: "2 Months",
        highlight: false,
        bestFor: "Beginners exploring digital marketing",
        features: [
            "Core Fundamentals",
            "Practical Basics",
        ],
        link: "/courses/diploma-digital-marketing",
    },
];

const LOCAL_FAQS = [
    {
        q: "What is the best digital marketing course in Andheri?",
        a: "Operating Media is widely regarded as the best digital marketing institute in Andheri West, Mumbai. Our industry-led programs cover SEO, Google Ads, Social Media, AI tools, and more — with small batches of 12 students ensuring personalised mentorship and guaranteed placement support.",
    },
    {
        q: "Which is the top digital marketing institute in Borivali?",
        a: "Operating Media's Borivali West campus is the top choice for digital marketing training in the area. Students get hands-on training on live campaigns, 120+ tools, and direct placement assistance from industry professionals with 10+ years of experience.",
    },
    {
        q: "How long does the digital marketing course take?",
        a: "Our programs range from 2 months (Diploma) to 4 months (Advanced Diploma) to 8 months (Master's Program). Each is designed for different career goals — beginners, working professionals, and serious career-switchers.",
    },
    {
        q: "Do you offer placement support after the course?",
        a: "Yes. Operating Media has a dedicated placement cell with 250+ hiring partners across agencies, brands, and startups in Mumbai and across India. 96% of our students secure roles within 90 days of completing the program.",
    },
];

// ── FAQ ACCORDION ─────────────────────────────────────────────
function FAQItem({ faq, index }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open ? 'border-[#ECAB00]/40 shadow-[0_8px_24px_-8px_rgba(236,171,0,0.15)]' : 'border-gray-200 bg-white hover:border-[#ECAB00]/25'}`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left bg-white"
            >
                <span className="font-bold text-[15px] text-[#0f172a] leading-snug">{faq.q}</span>
                <div
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5"
                    style={{ background: open ? '#ECAB00' : '#f0ede6', color: open ? '#0f172a' : '#9ca3af' }}
                >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </div>
            </button>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-5 pt-0 bg-white border-t border-gray-100"
                >
                    <p className="text-[14px] font-medium text-gray-500 leading-relaxed pt-4">{faq.a}</p>
                </motion.div>
            )}
        </motion.div>
    );
}

// ── ROOT COMPONENT ────────────────────────────────────────────
export default function CareerOutcomes() {
    return (
        <section
            className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-14 bg-[#FAFAFA] font-['Satoshi',sans-serif] selection:bg-[#2563EB] selection:text-white overflow-hidden"
            aria-label="Career Outcomes and Program Chooser"
        >
            {/* ── Background — matches CoursesSection exactly ── */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="relative z-10 max-w-[1400px] mx-auto space-y-20 md:space-y-28">

                {/* ══════════════════════════════════════════
                    SECTION 1 — CAREER OUTCOMES
                ══════════════════════════════════════════ */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT — heading + tagline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] text-[#2563eb] uppercase tracking-[0.2em]">Career Outcomes</span>
                        </div>

                        <h2 className="font-black text-[30px] sm:text-[36px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-5">
                            💼 What You'll{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Become
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>

                        <p className="text-[16px] md:text-[17px] font-medium text-gray-600 leading-relaxed mb-8 max-w-[460px]">
                            After completing this course, you can work as any of these high-demand roles — or build your own income on your terms.
                        </p>

                        {/* Dark CTA card */}
                        <div className="bg-[#0f172a] rounded-2xl px-6 py-5 flex items-center gap-4 max-w-[420px]">
                            <div className="w-10 h-10 rounded-xl bg-[#ECAB00] flex items-center justify-center shrink-0">
                                <TrendingUp size={18} className="text-[#0f172a]" />
                            </div>
                            <div>
                                <p className="font-black text-[14px] text-white leading-tight">We don't just teach.</p>
                                <p className="font-bold text-[13px] text-[#ECAB00] mt-0.5">We help you earn. 👉</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT — career outcome cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CAREER_OUTCOMES.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.07 }}
                                className="group relative bg-white border border-gray-200 rounded-2xl px-5 py-4 flex items-start gap-3.5 hover:border-[#ECAB00]/40 hover:shadow-[0_8px_24px_-8px_rgba(236,171,0,0.15)] hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <div className="shrink-0 w-8 h-8 rounded-xl bg-[#ECAB00]/10 border border-[#ECAB00]/20 flex items-center justify-center mt-0.5 group-hover:bg-[#ECAB00] group-hover:border-[#ECAB00] transition-all duration-300">
                                    <Briefcase size={14} className="text-[#ECAB00] group-hover:text-[#0f172a] transition-colors duration-300" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-black text-[14px] text-[#0f172a] leading-tight">{item.role}</p>
                                    {item.hasSalary && (
                                        <p className="text-[12px] font-bold text-[#ECAB00] mt-1">{item.salary}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                

               

            </div>


        </section>
    );
}