import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Download } from 'lucide-react';

// ONLY modulesData UPDATED — rest of your code is SAME

const modulesData = [
    {
        id: "01",
        title: "Google Analytics 4",
        topics: [
            "Introduction & Installing analytics Code",
            "Account Administration & Campaign Tracking",
            "Goals, Cookies, Filters in Google Analytics",
            "Advanced Segmentation & Internal Site Search",
            "Event Tracking and Virtual Pageviews",
            "E-commerce & Revenue Tracking",
            "Page-views, Traffic Source and visitors",
            "Content, Conversion & E-commerce Reports"
        ],
        tools: [
            { name: "Google Analytics 4", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" }
        ]
    },
    {
        id: "02",
        title: "Webmaster Tools",
        topics: [
            "Introduction to Webmaster Tools",
            "Setting Up Search Console",
            "Verifying website ownership",
            "Basic dashboard navigation",
            "Performance Reports",
            "Clicks, Impressions, CTR, Position",
            "URL Inspection Tool",
            "Index Coverage Report",
            "Sitemaps and Robots.txt",
            "Mobile Usability",
            "Structured Data & Enhancements",
            "Security and Manual Actions",
            "Link Reports & Backlinks"
        ],
        tools: [
            { name: "Google Search Console", logo: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg" }
        ]
    },
    {
        id: "03",
        title: "Digital Marketing Basics",
        topics: [
            "Scope of digital marketing",
            "Assessing various digital channels",
            "Fundamentals of marketing",
            "Paid media portals and networks",
            "Social media platforms",
            "Importance of SEO rankings",
            "Marketing strategies",
            "Web Analytics basics"
        ],
        tools: []
    },
    {
        id: "04",
        title: "Website Creation on WordPress",
        topics: [
            "Introduction to WordPress",
            "WordPress installation and settings",
            "Dashboard & user management",
            "Links structure",
            "Contact form & themes",
            "Plugins management",
            "Slider customization",
            "Import & export website"
        ],
        tools: [
            { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" }
        ]
    },
    {
        id: "05",
        title: "Landing Page Design using Elementor",
        topics: [
            "Introduction to Landing Pages",
            "Importance in marketing",
            "High-converting pages",
            "Elementor basics",
            "Designing layouts",
            "Widgets customization",
            "Conversion optimization",
            "Email integrations",
            "Analytics & tracking",
            "Social proof",
            "Publishing & analysis"
        ],
        tools: [
            { name: "Elementor", logo: "https://cdn.worldvectorlogo.com/logos/elementor.svg" }
        ]
    },
    {
        id: "06",
        title: "Social Media Advertising",
        topics: [
            "Ads on Meta, Instagram, Twitter, LinkedIn, YouTube",
            "Ads account setup",
            "Pixel setup",
            "Campaign types",
            "Targeting strategies",
            "Ad formats & video ads",
            "Bidding & budget",
            "Campaign optimization",
            "Reporting"
        ],
        tools: [
            { name: "Meta Ads", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" }
        ]
    },
    {
        id: "07",
        title: "YouTube Advertising",
        topics: [
            "Channel creation & setup",
            "Analytics setup",
            "Conversion tracking",
            "Video optimization",
            "Audience targeting",
            "Keyword research",
            "Retargeting ads",
            "Scaling campaigns",
            "Competitor analysis"
        ],
        tools: [
            { name: "YouTube", logo: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg" }
        ]
    },
    {
        id: "08",
        title: "Google Tag Manager",
        topics: [
            "Overview of GTM",
            "Tags, triggers, variables",
            "GTM setup",
            "Installing GTM",
            "Tag implementation",
            "Custom HTML & JS tags",
            "E-commerce tracking",
            "Third-party integrations",
            "GDPR compliance"
        ],
        tools: [
            { name: "Google Tag Manager", logo: "https://cdn.worldvectorlogo.com/logos/google-tag-manager.svg" }
        ]
    },
    {
        id: "09",
        title: "Social Media Marketing (Organic)",
        topics: [
            "Understanding platforms",
            "Creating business pages",
            "Posting strategies",
            "Growing followers",
            "Best practices",
            "Audience insights",
            "Viral marketing",
            "Hashtags",
            "Content strategy",
            "Case studies"
        ],
        tools: [
            { name: "Instagram", logo: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" }
        ]
    },
    {
        id: "10",
        title: "Search Engine Marketing (SEM)",
        topics: [
            "Google Ads basics",
            "Campaign structure",
            "Keyword research",
            "Ad copywriting",
            "Bidding strategies",
            "Quality score",
            "Campaign optimization",
            "Remarketing",
            "Budget management",
            "Advanced SEM techniques"
        ],
        tools: [
            { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" }
        ]
    }
];

function ModuleCard({ data, isOpen, onClick }) {
    return (
        <div className={`relative w-full rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen ? 'border-[#2563eb] shadow-[0_15px_30px_-10px_rgba(37,99,235,0.15)]' : 'border-gray-200 hover:border-[#2563eb]/40 hover:shadow-md'}`}>
            <button onClick={onClick} className="w-full flex items-center justify-between p-5 md:px-6 md:py-5 text-left focus:outline-none">
                <div className="flex items-center gap-4 md:gap-5 w-full pr-4">
                    <span className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-xl text-[15px] font-black tracking-wide transition-colors duration-300 ${isOpen ? 'bg-[#2563eb] text-white shadow-md' : 'bg-blue-50/70 text-[#2563eb]'}`}>
                        {data.id}
                    </span>
                    <div className="flex flex-col">
                        <h3 className={`text-[17px] md:text-[19px] font-black leading-[1.25] transition-colors duration-300 ${isOpen ? 'text-[#2563eb]' : 'text-[#0f172a]'}`}>
                            {data.title}
                        </h3>
                        <p className="text-[13px] font-medium text-gray-500 mt-1 md:hidden">{data.topics.length} topics covered</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden md:flex items-center justify-center text-[13px] font-bold text-gray-500 bg-gray-50 border border-gray-100 px-3.5 py-1.5 rounded-full">
                        {data.topics.length} topics
                    </span>
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? 'bg-[#ECAB00] text-[#0f172a]' : 'bg-gray-100 text-gray-400'}`}>
                        <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                    </div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
                        <div className="px-5 md:px-6 pb-6 pt-3 border-t border-gray-100">
                            <ul className="space-y-3.5 mb-8">
                                {data.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start gap-3.5">
                                        <CheckCircle2 size={18} className="text-[#ECAB00] shrink-0 mt-0.5" />
                                        <span className="text-[15px] font-medium text-gray-600 leading-snug">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="bg-[#fcfaf2] rounded-xl p-4 border border-orange-50">
                                <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.2em] mb-4">Tools Covered</p>
                                <div className="relative flex overflow-hidden mask-edges py-1">
                                    <div className="flex whitespace-nowrap animate-slide-infinite gap-4">
                                        {[...data.tools, ...data.tools].map((tool, i) => (
                                            <div key={i} title={tool.name} className="w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-[#2563eb] hover:shadow-md transition-all duration-300">
                                                <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" loading="lazy" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function SyllabusSection() {
    const [openModules, setOpenModules] = useState([]);

    const toggleModule = (index) => {
        if (openModules.includes(index)) {
            setOpenModules(openModules.filter(i => i !== index));
        } else {
            setOpenModules([...openModules, index]);
        }
    };

    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden">
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[120px] animate-pulse-slow pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                        <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                        <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">Diploma Curriculum</span>
                    </div>
                    <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                        Industry-Approved <br className="hidden md:block" />
                        <span className="relative inline-block text-[#ECAB00]">
                            Syllabus & 11 Modules
                            <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] font-medium text-gray-600 leading-relaxed">
                        From SEO fundamentals to paid social advertising — 11 modules and 50+ premium tools, all execution-focused and beginner-friendly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                    {modulesData.map((mod, index) => (
                        <ModuleCard key={index} data={mod} isOpen={openModules.includes(index)} onClick={() => toggleModule(index)} />
                    ))}
                </div>

                <div className="mt-14 flex flex-col items-center justify-center text-center">
                    <p className="font-medium text-[16px] text-gray-500 mb-6">Want to see the detailed curriculum and all 50+ tools?</p>
                    <div className="bg-[#0f172a] text-white hover:bg-[#ECAB00] hover:text-[#0f172a] transition-all duration-300 rounded-xl px-8 py-4 font-bold text-[15px] flex items-center justify-center cursor-pointer shadow-lg active:scale-95 group">
                        <span className="flex items-center gap-2">Download Full Syllabus <Download size={18} className="group-hover:-translate-y-1 transition-transform" /></span>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-slide-infinite { animation: slide 20s linear infinite; }
        .animate-slide-infinite:hover { animation-play-state: paused; }
        .mask-edges { -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .animate-pulse-slow { animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.1); } }
      `}</style>
        </section>
    );
}