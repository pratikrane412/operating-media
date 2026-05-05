import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// ── DATA ──────────────────────────────────────────────────────

const PROGRAMS = [
    {
        id: 'diploma',
        badge: 'Diploma',
        badgeColor: 'bg-gray-100 text-gray-600 border border-gray-200',
        name: 'Diploma in Digital Marketing',
        highlight: false,
        accent: '#2563eb',
        link: '/contact-us/',
    },
    {
        id: 'advanced',
        badge: 'Adv. Diploma',
        badgeColor: 'bg-blue-50 text-[#2563eb] border border-blue-200',
        name: 'Advanced Diploma in Digital Marketing',
        highlight: false,
        accent: '#2563eb',
        link: '/contact-us/',
    },
    {
        id: 'masters',
        badge: "Master's",
        badgeColor: 'bg-[#ECAB00] text-[#0f172a] border border-[#ECAB00]',
        name: "Master's Program (Digital Strategy & AI)",
        highlight: true,
        accent: '#ECAB00',
        link: '/contact-us/',
    },
];

const ROWS = [
    { label: 'Duration', values: ['2 Months', '4 Months', '8 Months'] },
    { label: 'Learning Hours', values: ['80 Hours', '110 Hours', '200 Hours'] },
    { label: 'Core Modules', values: ['12 Modules', '28 Modules', '45 Modules'] },
    {
        label: 'Submodules & Tools',
        values: [
            '100 Submodules / 40+ Tools',
            '200 Submodules / 70+ Tools',
            '200+ Submodules / 120+ Tools',
        ],
    },
    {
        label: 'Who is it for?',
        values: [
            'Undergrads & Fresh Graduates',
            'Working Professionals & Job Seekers',
            'Anyone wanting End-to-End Digital Marketing',
        ],
    },
    {
        label: 'AI Integration',
        values: [
            'Entry-level awareness',
            'Intermediate / Tool-focused',
            'Expert: Gen-AI & Prompt Engineering',
        ],
        highlight: [false, false, true],
    },
    {
        label: 'Certifications',
        values: [
            '3+ Industry Certificates',
            '5+ Industry Certificates',
            '12+ Industry-Recognized Certificates',
        ],
    },
    {
        label: 'Key Outcomes',
        values: [
            'Digital Marketing Executive',
            'Specialist (SEO, PPC, Social Media)',
            'Growth Manager, CMO, or Agency Owner',
        ],
    },
    {
        label: 'Exclusive Benefits',
        values: [
            'NO LMS Access',
            'Standard LMS Access',
            'LMS + ₹25,000+ Benefits (Own Website, Canva Pro)',
        ],
        negative: [true, false, false],
    },
];

// ── MOBILE: Tabbed Cards ──────────────────────────────────────
function MobileTable() {
    const [activeTab, setActiveTab] = useState(2); // default to Master's (highlighted)

    return (
        <div className="md:hidden">
            {/* Tab switcher */}
            <div className="flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
                {PROGRAMS.map((p, i) => (
                    <button
                        key={p.id}
                        onClick={() => setActiveTab(i)}
                        className={`shrink-0 px-4 py-2.5 rounded-xl font-black text-[12px] transition-all duration-300 border ${activeTab === i
                            ? p.highlight
                                ? 'bg-[#ECAB00] text-[#0f172a] border-[#ECAB00] shadow-[0_4px_12px_-4px_rgba(236,171,0,0.4)]'
                                : 'bg-[#0f172a] text-white border-[#0f172a] shadow-[0_4px_12px_-4px_rgba(15,23,42,0.3)]'
                            : 'bg-white text-gray-500 border-gray-200'
                            }`}
                    >
                        {p.badge}
                    </button>
                ))}
            </div>

            {/* Active program card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`rounded-2xl overflow-hidden border ${PROGRAMS[activeTab].highlight
                        ? 'border-[#ECAB00]/40 shadow-[0_12px_40px_-10px_rgba(236,171,0,0.2)]'
                        : 'border-gray-200 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.08)]'
                        }`}
                >
                    {/* Card header */}
                    <div
                        className={`px-5 py-5 ${PROGRAMS[activeTab].highlight ? 'bg-[#FEFCE8]' : 'bg-white'}`}
                    >
                        <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${PROGRAMS[activeTab].badgeColor}`}>
                            {PROGRAMS[activeTab].badge}
                        </span>
                        <p className="font-black text-[17px] text-[#0f172a] leading-snug m-0">
                            {PROGRAMS[activeTab].name}
                        </p>
                    </div>

                    {/* Rows */}
                    <div className="bg-white divide-y divide-gray-100">
                        {ROWS.map((row, ri) => {
                            const val = row.values[activeTab];
                            const isNeg = row.negative?.[activeTab];
                            const isHighlighted = row.highlight?.[activeTab];
                            const p = PROGRAMS[activeTab];

                            return (
                                <div key={row.label} className={`flex items-start justify-between gap-3 px-5 py-4 ${ri % 2 !== 0 ? 'bg-gray-50/60' : ''}`}>
                                    <span className="font-bold text-[13px] text-[#0f172a] shrink-0 w-[110px] leading-snug pt-0.5">
                                        {row.label}
                                    </span>
                                    <span className="text-right text-[13px] font-medium leading-snug">
                                        {isNeg ? (
                                            <span className="inline-flex items-center gap-1 text-red-500 font-bold">
                                                <X size={13} />
                                                {val}
                                            </span>
                                        ) : isHighlighted ? (
                                            <span
                                                className="inline-block font-black px-2.5 py-1 rounded-lg text-[12px]"
                                                style={{ background: `${p.accent}15`, color: p.accent }}
                                            >
                                                {val}
                                            </span>
                                        ) : (
                                            <span className="text-gray-600">{val}</span>
                                        )}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className={`px-5 py-5 ${PROGRAMS[activeTab].highlight ? 'bg-[#FEFCE8]' : 'bg-white'}`}>
                        <Link to={PROGRAMS[activeTab].link} className="block">
                            <button
                                className="group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-[14px] transition-all duration-300 active:scale-95"
                                style={{
                                    background: PROGRAMS[activeTab].highlight ? '#ECAB00' : '#0f172a',
                                    color: PROGRAMS[activeTab].highlight ? '#0f172a' : '#fff',
                                    boxShadow: PROGRAMS[activeTab].highlight
                                        ? '0 8px 20px -6px rgba(236,171,0,0.4)'
                                        : '0 8px 20px -6px rgba(15,23,42,0.3)',
                                }}
                            >
                                Enroll Now
                                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Quick switch hint */}
            <p className="text-center text-[11px] font-medium text-gray-400 mt-3">
                Tap a tab above to compare programs
            </p>
        </div>
    );
}

// ── DESKTOP: Full Table ───────────────────────────────────────
function DesktopTable() {
    return (
        <div className="hidden md:block overflow-x-auto rounded-[1.5rem] border border-gray-200 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]">
            <table className="w-full min-w-[680px] border-collapse bg-white">
                <thead>
                    <tr>
                        <th className="w-[180px] lg:w-[210px] p-5 lg:p-6 text-left border-b border-gray-100 bg-white" />
                        {PROGRAMS.map((p) => (
                            <th
                                key={p.id}
                                className={`p-5 lg:p-6 text-center border-b border-gray-100 ${p.highlight ? 'bg-[#FEFCE8]' : 'bg-white'}`}
                            >
                                <span className={`inline-block text-[9px] lg:text-[10px] font-black uppercase tracking-widest px-2.5 lg:px-3 py-1 rounded-full mb-3 ${p.badgeColor}`}>
                                    {p.badge}
                                </span>
                                <p className="font-black text-[13px] lg:text-[15px] text-[#0f172a] leading-snug m-0">
                                    {p.name}
                                </p>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {ROWS.map((row, ri) => (
                        <tr key={row.label} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                            <td className="p-4 lg:p-5 pl-5 lg:pl-6 border-b border-gray-100 font-bold text-[13px] lg:text-[14px] text-[#0f172a] align-middle">
                                {row.label}
                            </td>
                            {PROGRAMS.map((p, pi) => {
                                const val = row.values[pi];
                                const isNeg = row.negative?.[pi];
                                const isHighlighted = row.highlight?.[pi];

                                return (
                                    <td
                                        key={p.id}
                                        className={`p-4 lg:p-5 text-center border-b border-gray-100 text-[13px] lg:text-[14px] font-medium align-middle ${p.highlight ? 'bg-[#FEFCE8]' : ''}`}
                                    >
                                        {isNeg ? (
                                            <span className="inline-flex items-center justify-center gap-1.5 text-red-500 font-bold">
                                                <X size={13} />
                                                {val}
                                            </span>
                                        ) : isHighlighted ? (
                                            <span
                                                className="inline-block font-black px-2.5 py-1 rounded-lg text-[12px]"
                                                style={{ background: `${p.accent}15`, color: p.accent }}
                                            >
                                                {val}
                                            </span>
                                        ) : (
                                            <span className={`leading-snug ${p.highlight ? 'font-semibold text-[#0f172a]' : 'text-gray-600'}`}>
                                                {val}
                                            </span>
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}

                    {/* CTA row */}
                    <tr>
                        <td className="p-4 lg:p-5 pl-5 lg:pl-6" />
                        {PROGRAMS.map((p) => (
                            <td key={p.id} className={`p-4 lg:p-5 text-center ${p.highlight ? 'bg-[#FEFCE8]' : ''}`}>
                                <Link to={p.link}>
                                    <button
                                        className="group inline-flex items-center gap-2 px-5 lg:px-6 py-2.5 lg:py-3 rounded-xl font-black text-[12px] lg:text-[13px] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                                        style={{
                                            background: p.highlight ? '#ECAB00' : '#0f172a',
                                            color: p.highlight ? '#0f172a' : '#fff',
                                            boxShadow: p.highlight
                                                ? '0 8px 20px -6px rgba(236,171,0,0.4)'
                                                : '0 8px 20px -6px rgba(15,23,42,0.3)',
                                        }}
                                    >
                                        Enroll Now
                                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

// ── ROOT COMPONENT ────────────────────────────────────────────
export default function ProgramComparisonTable() {
    return (
        <section
            className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-14 overflow-hidden bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white"
            aria-label="Program Comparison"
        >
            {/* ── Background (matching TransformationSection) ── */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-[#ECAB00]/10 blur-[100px] animate-pulse-slow pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">

                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-5">
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                                Program Comparison
                            </span>
                        </div>

                        <h2 className="font-black text-[28px] sm:text-[36px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-4">
                            Choose the Right{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Program for You
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>

                        <p className="text-[15px] md:text-[17px] lg:text-[18px] font-medium text-gray-600 leading-relaxed">
                            Three programs. One mission — getting you job-ready with real skills that employers pay for.
                        </p>
                    </motion.div>
                </div>

                {/* Mobile: Tabbed cards */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <MobileTable />
                    <DesktopTable />
                </motion.div>

            </div>

            <style>{`
                .animate-pulse-slow {
                    animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.1); }
                }
                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}