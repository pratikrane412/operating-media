import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Download } from 'lucide-react';

const modulesData = [
    {
        id: "01",
        title: "Online Reputation Management (ORM)",
        topics: [
            "Basics of ORM",
            "Engaging with customers & building positive links",
            "Reputation defending techniques",
            "ORM through social channels",
            "ORM through SEO",
            "SEO blog creation",
            "Positive seeding",
            "Measuring audience sentiments",
            "ORM tools",
            "Dealing with panic situations",
            "Social listening tools"
        ],
        tools: []
    },
    {
        id: "02",
        title: "Creative Designing (Canva + Adobe Express)",
        topics: [
            "Introduction to graphic design platforms",
            "Creating visual content",
            "Basic tools & features",
            "Templates & layouts",
            "Customization options",
            "Typography & branding",
            "Collaboration & sharing",
            "Exporting & printing",
            "Advanced features"
        ],
        tools: []
    },
    {
        id: "03",
        title: "Email Marketing",
        topics: [
            "Types of email marketing",
            "Email marketing basics",
            "Choosing platform",
            "Autoresponder & broadcasts",
            "Email content writing",
            "B2B & B2C practices",
            "Growing email list",
            "CTA strategies",
            "Reporting & optimization"
        ],
        tools: []
    },
    {
        id: "04",
        title: "Drip Marketing & Email Automation",
        topics: [
            "Lead generation & segmentation",
            "Re-engagement strategies",
            "Managing unopened emails",
            "Sales funnels",
            "CRM basics",
            "SMS & drip campaigns",
            "Retargeting",
            "Push notifications",
            "Abandoned cart emails"
        ],
        tools: []
    },
    {
        id: "05",
        title: "Affiliate Marketing",
        topics: [
            "Introduction to affiliate marketing",
            "Affiliate ecosystem",
            "Joining networks",
            "Building platform",
            "SEO & content",
            "Promotion strategies",
            "Tracking & analytics",
            "Conversion optimization",
            "Compliance & scaling"
        ],
        tools: []
    },
    {
        id: "06",
        title: "Influencer Marketing",
        topics: [
            "Basics of influencer marketing",
            "Identifying influencers",
            "Campaign planning",
            "Execution strategies",
            "Tracking performance",
            "Legal compliance"
        ],
        tools: []
    },
    {
        id: "07",
        title: "Media Buying & Planning",
        topics: [
            "Meaning & importance",
            "Formulas & KPIs",
            "Excel usage",
            "Brand requirement analysis",
            "Media strategy creation",
            "Execution planning"
        ],
        tools: []
    },
    {
        id: "08",
        title: "Mobile Marketing",
        topics: [
            "Mobile trends",
            "App ads & in-game marketing",
            "Location-based ads",
            "SMS & push notifications",
            "Mobile keyword research",
            "Landing page optimization",
            "Play store optimization"
        ],
        tools: []
    },
    {
        id: "09",
        title: "Blog Creation & Monetization",
        topics: [
            "Blog setup",
            "Choosing niche",
            "Content creation",
            "SEO basics",
            "Audience building",
            "Monetization",
            "Affiliate marketing",
            "Ad networks",
            "Performance analysis"
        ],
        tools: []
    },
    {
        id: "10",
        title: "Digital Marketing Freelancing",
        topics: [
            "Freelancing basics",
            "Setting up business",
            "Finding clients",
            "SEO, SEM, content marketing",
            "Portfolio building",
            "Project management",
            "Scaling business"
        ],
        tools: []
    },
    {
        id: "11",
        title: "Viral Marketing",
        topics: [
            "Understanding viral content",
            "Psychological triggers",
            "Content creation",
            "Distribution channels",
            "Campaign planning",
            "KPIs & analytics",
            "Case studies"
        ],
        tools: []
    },
    {
        id: "12",
        title: "Digital Planning & Strategy",
        topics: [
            "Importance of strategy",
            "Situational analysis",
            "Client requirements",
            "Strategy creation",
            "Practical implementation"
        ],
        tools: []
    },

    // SECOND COLUMN

    {
        id: "13",
        title: "Digital Marketing Basics",
        topics: [
            "Scope of digital marketing",
            "Channels",
            "Marketing fundamentals",
            "Paid media",
            "Social platforms",
            "SEO importance",
            "Marketing tactics",
            "Web analytics"
        ],
        tools: []
    },
    {
        id: "14",
        title: "Website Creation on WordPress",
        topics: [
            "WordPress intro",
            "Installation",
            "Dashboard",
            "Links",
            "Themes & plugins",
            "Slider",
            "Export/import"
        ],
        tools: []
    },
    {
        id: "15",
        title: "Landing Page Design using Elementor",
        topics: [
            "Landing pages",
            "Elementor basics",
            "Layout planning",
            "Widgets",
            "Optimization",
            "Email integration",
            "Analytics",
            "Case studies"
        ],
        tools: []
    },
    {
        id: "16",
        title: "Google Analytics 4",
        topics: [
            "GA4 setup",
            "Campaign tracking",
            "Goals & filters",
            "Segmentation",
            "Event tracking",
            "E-commerce tracking",
            "Reports"
        ],
        tools: []
    },
    {
        id: "17",
        title: "Webmaster Tools",
        topics: [
            "Search Console setup",
            "Performance metrics",
            "URL inspection",
            "Index coverage",
            "Sitemaps",
            "Mobile usability",
            "Security",
            "Backlinks"
        ],
        tools: []
    },
    {
        id: "18",
        title: "Google Tag Manager",
        topics: [
            "Tags, triggers, variables",
            "Setup GTM",
            "Implementation",
            "Custom tags",
            "E-commerce tracking",
            "GDPR compliance"
        ],
        tools: []
    },
    {
        id: "19",
        title: "Search Engine Marketing (SEM)",
        topics: [
            "Google Ads",
            "Campaign types",
            "Keyword research",
            "Ad copy",
            "Bidding",
            "Optimization",
            "Remarketing"
        ],
        tools: []
    },
    {
        id: "20",
        title: "Google AdSense",
        topics: [
            "AdSense basics",
            "Account setup",
            "Ad units",
            "Monetization"
        ],
        tools: []
    },
    {
        id: "21",
        title: "Social Media Marketing (Organic)",
        topics: [
            "Platforms",
            "Posting",
            "Followers growth",
            "Insights",
            "Hashtags",
            "Content strategy"
        ],
        tools: []
    },
    {
        id: "22",
        title: "Social Media Advertising",
        topics: [
            "Meta ads",
            "Campaign setup",
            "Targeting",
            "Ad formats",
            "Optimization",
            "Reporting"
        ],
        tools: []
    },
    {
        id: "23",
        title: "YouTube Advertising",
        topics: [
            "Channel setup",
            "Tracking",
            "Video optimization",
            "Targeting",
            "Retargeting",
            "Scaling campaigns"
        ],
        tools: []
    },
    {
        id: "24",
        title: "Content & Media Marketing",
        topics: [
            "Content strategy",
            "Audience research",
            "Content creation",
            "SEO",
            "Distribution",
            "Analytics"
        ],
        tools: []
    },
    {
        id: "25",
        title: "WhatsApp Chatbot & Automation",
        topics: [
            "Chatbot setup",
            "WhatsApp API",
            "Automation flows",
            "Personalization",
            "Analytics",
            "Optimization"
        ],
        tools: []
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
                        <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">Advanced Diploma Curriculum</span>
                    </div>
                    <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                        Industry-Approved <br className="hidden md:block" />
                        <span className="relative inline-block text-[#ECAB00]">
                            Syllabus & 25 Modules
                            <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] font-medium text-gray-600 leading-relaxed">
                        From SEO fundamentals to advanced paid advertising — featuring 25 modules and 70+ premium tools, all execution-focused.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
                    {modulesData.map((mod, index) => (
                        <ModuleCard key={index} data={mod} isOpen={openModules.includes(index)} onClick={() => toggleModule(index)} />
                    ))}
                </div>

                <div className="mt-14 flex flex-col items-center justify-center text-center">
                    <p className="font-medium text-[16px] text-gray-500 mb-6">Want to see the detailed curriculum and all 70+ tools?</p>
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