import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, X, Minus, ArrowRight } from 'lucide-react';
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
    {
        label: 'Duration',
        values: ['2 Months', '4 Months', '8 Months'],
    },
    {
        label: 'Learning Hours',
        values: ['80 Hours', '110 Hours', '200 Hours'],
    },
    {
        label: 'Core Modules',
        values: ['12 Modules', '28 Modules', '45 Modules'],
    },
    {
        label: 'Submodules & Tools',
        values: [
            '100 Submodules / 40+ Tools',
            '200 Submodules / 70+ Tools',
            '200+ Submodules / 120+ Tools (Agency Training)',
        ],
    },
    {
        label: 'Who is it for?',
        values: [
            'Undergrads & Fresh Graduates',
            'Working Professionals & Job Seekers',
            'Anyone who wants to Learn End-to-End Digital Marketing',
        ],
    },
    {
        label: 'AI Integration',
        values: [
            'Entry-level awareness',
            'Intermediate / Tool-focused',
            'Expert: Includes Gen-AI & Prompt Engineering',
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

// ── SYLLABUS DATA ─────────────────────────────────────────────
const SYLLABUS = [
    {
        num: '01',
        title: 'Fundamentals & Digital Strategy',
        desc: 'This vertical covers the essential groundwork for any digital marketer.',
        topics: [
            'Digital Marketing Fundamentals',
            'Content & Media Marketing',
            'Digital Planning & Strategy + Presentation',
            'Customer Journey & Behavior',
            'Brand Communication & Management',
        ],
    },
    {
        num: '02',
        title: 'Website Assets & Organic Visibility',
        desc: 'Focuses on building high-converting web properties and ranking them naturally.',
        topics: [
            'Website Creation on WordPress',
            'Landing Page Design using Elementor',
            'Search Engine Optimization (SEO)',
            'YouTube SEO',
            'Google Search Console (Webmaster Tools)',
            'Google My Business',
            'Blog Creation',
        ],
    },
    {
        num: '03',
        title: 'Performance Marketing & Paid Media',
        desc: 'Focuses on modules for driving immediate traffic through paid advertising.',
        topics: [
            'Performance Marketing',
            'Google Ads (PPC)',
            'YouTube Advertising',
            'Social Media Paid Advertising (7 Platforms)',
            'Media Buying & Planning',
            'Lead Generation',
            'Mobile Marketing',
        ],
    },
    {
        num: '04',
        title: 'Social Media, Creative & Viral Marketing',
        desc: 'Focused on engagement, branding, and content virality.',
        topics: [
            'Social Media Organic (FB, Insta, YT, Quora, Pinterest, Snapchat, LinkedIn, Twitter)',
            'Creative Designing using Canva Pro',
            'Video Editing Tools',
            'Viral Marketing',
            'Influencer Marketing',
            'Online Reputation Management',
        ],
    },
    {
        num: '05',
        title: 'Specialized AI & Advanced Tech',
        desc: 'Future-proofs your skills with the latest automation and AI integrations.',
        topics: [
            'Artificial Intelligence (AI) in Digital Marketing',
            'Generative AI – Prompt Engineering',
            'Drip Marketing & Email Automation',
            'Funnels in Digital Marketing',
            'Webinar Creation & Marketing',
            'Google Tag Manager',
            'International Digital Marketing',
        ],
    },
    {
        num: '06',
        title: 'E-commerce & Monetization',
        desc: 'Specific modules for selling products online and earning through content.',
        topics: [
            'WooCommerce E-commerce Shop Creation',
            'Shopify Shop Creation',
            'Shop Creation on Marketplaces (Amazon, Flipkart, Meesho)',
            'E-commerce Marketing Paid Ads (Amazon, Flipkart, Meesho)',
            'Dropshipping',
            'Affiliate Marketing',
            'Google AdSense and Monetization',
        ],
    },
    {
        num: '07',
        title: 'Analytics, Career & Business',
        desc: 'Covers data tracking and the transition from student to professional.',
        topics: [
            'Google Analytics 4',
            'Growth Marketing Strategies',
            'Email Marketing',
            'WhatsApp Business and WhatsApp Marketing API',
        ],
    },
];

// ── COMPARISON TABLE ──────────────────────────────────────────
function ComparisonTable() {
    return (
        <div className="overflow-x-auto rounded-[1.5rem] border border-gray-200 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.08)]">
            <table className="w-full min-w-[700px] border-collapse bg-white">
                {/* Header */}
                <thead>
                    <tr>
                        {/* Empty label col */}
                        <th className="w-[200px] p-6 text-left border-b border-gray-100 bg-white" />

                        {PROGRAMS.map((p) => (
                            <th
                                key={p.id}
                                className={`p-6 text-center border-b border-gray-100 ${p.highlight ? 'bg-[#FEFCE8]' : 'bg-white'}`}
                            >
                                <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${p.badgeColor}`}>
                                    {p.badge}
                                </span>
                                <p className="font-black text-[15px] text-[#0f172a] leading-snug m-0">
                                    {p.name}
                                </p>
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* Body */}
                <tbody>
                    {ROWS.map((row, ri) => (
                        <tr
                            key={row.label}
                            className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}
                        >
                            {/* Row label */}
                            <td className="p-5 pl-6 border-b border-gray-100 font-bold text-[14px] text-[#0f172a] align-middle">
                                {row.label}
                            </td>

                            {/* Values */}
                            {PROGRAMS.map((p, pi) => {
                                const val = row.values[pi];
                                const isNeg = row.negative?.[pi];
                                const isHighlighted = row.highlight?.[pi];
                                const isLastHighlight = p.highlight;

                                return (
                                    <td
                                        key={p.id}
                                        className={`p-5 text-center border-b border-gray-100 text-[14px] font-medium align-middle ${isLastHighlight ? 'bg-[#FEFCE8]' : ''}`}
                                    >
                                        {isNeg ? (
                                            <span className="inline-flex items-center gap-1.5 text-red-500 font-bold">
                                                <X size={14} />
                                                {val}
                                            </span>
                                        ) : isHighlighted ? (
                                            <span
                                                className="inline-block font-black text-[#0f172a] px-3 py-1 rounded-lg"
                                                style={{ background: `${p.accent}15`, color: p.accent }}
                                            >
                                                {val}
                                            </span>
                                        ) : (
                                            <span className={`text-gray-600 leading-snug ${isLastHighlight ? 'font-semibold text-[#0f172a]' : ''}`}>
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
                        <td className="p-5 pl-6" />
                        {PROGRAMS.map((p) => (
                            <td
                                key={p.id}
                                className={`p-5 text-center ${p.highlight ? 'bg-[#FEFCE8]' : ''}`}
                            >
                                <Link to={p.link}>
                                    <button
                                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-[13px] transition-all duration-300 hover:-translate-y-0.5"
                                        style={{
                                            background: p.highlight ? '#ECAB00' : '#0f172a',
                                            color: p.highlight ? '#0f172a' : '#fff',
                                            boxShadow: p.highlight
                                                ? '0 8px 20px -6px rgba(236,171,0,0.4)'
                                                : '0 8px 20px -6px rgba(15,23,42,0.3)',
                                        }}
                                    >
                                        Enroll Now
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 overflow-hidden bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white"
            aria-label="Program Comparison"
        >
            {/* ── Background system (matching TransformationSection) ── */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[100px] animate-pulse-slow pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">

                {/* ── Section header ── */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                                Program Comparison
                            </span>
                        </div>

                        <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-5">
                            Choose the Right{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Program for You
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>

                        <p className="text-[16px] md:text-[18px] font-medium text-gray-600 leading-relaxed">
                            Three programs. One mission — getting you job-ready with real skills that employers pay for.
                        </p>
                    </motion.div>
                </div>

                {/* ── Comparison Table ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <ComparisonTable />
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
            `}</style>
        </section>
    );
}