import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, Download, TrendingUp, Megaphone } from 'lucide-react';

const organicTopics = [
    "Understanding Social Media Platforms",
    "Creating Business Pages",
    "Posting on Pages",
    "Increasing Followers",
    "Best Practices",
    "Audience Insight",
    "Influence of Social Media",
    "Viral Marketing",
    "Generating Word of Mouth",
    "Hashtag Uses",
    "Social Media Content",
    "Case Studies",
];

const paidTopics = [
    "Introduction to Ads on Meta, Instagram, Twitter, LinkedIn, YouTube",
    "Setting Up Ads Account",
    "Pixel Setup",
    "Different Campaign Types",
    "Choosing Right Targeting",
    "Layer Targeting",
    "Different Types of Ads",
    "Video Advertising",
    "Campaign Bids and Budgets",
    "Ad Placements",
    "Campaign Analysis",
    "Campaign Optimization",
    "Reporting",
];

const modules = [
    {
        id: "01",
        title: "Social Media Marketing (Organic)",
        icon: <TrendingUp size={20} />,
        platforms: "Instagram · Facebook · LinkedIn · Twitter · Pinterest",
        desc: "Discover organic strategies for marketing on social media platforms to build brand awareness, engage with audiences, and drive traffic without paid spend.",
        topics: organicTopics,
    },
    {
        id: "02",
        title: "Social Media Advertising",
        icon: <Megaphone size={20} />,
        platforms: "Meta · Instagram · Twitter · LinkedIn · YouTube",
        desc: "Dive deeper into paid advertising on social media platforms to reach specific target audiences and achieve marketing objectives at scale.",
        topics: paidTopics,
    },
];

function ModuleCard({ data, isOpen, onClick }) {
    return (
        <div className={`relative w-full rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${isOpen ? 'border-[#ECAB00] shadow-[0_15px_30px_-10px_rgba(236,171,0,0.15)]' : 'border-gray-200 hover:border-[#ECAB00]/40 hover:shadow-md'}`}>
            <button onClick={onClick} className="w-full flex items-center justify-between p-5 md:px-6 md:py-6 text-left focus:outline-none">
                <div className="flex items-center gap-4 md:gap-5 w-full pr-4">
                    <span className={`shrink-0 flex items-center justify-center w-12 h-12 rounded-xl text-[15px] font-black tracking-wide transition-colors duration-300 ${isOpen ? 'bg-[#ECAB00] text-[#0f172a] shadow-md' : 'bg-amber-50/70 text-[#ECAB00]'}`}>
                        {data.icon}
                    </span>
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-1">
                            <span className={`text-[11px] font-black uppercase tracking-widest ${isOpen ? 'text-[#ECAB00]' : 'text-gray-400'}`}>Module {data.id}</span>
                            {data.platforms && (
                                <span className="hidden sm:inline text-[11px] font-semibold text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                                    {data.platforms}
                                </span>
                            )}
                        </div>
                        <h3 className={`text-[18px] md:text-[21px] font-black leading-[1.25] transition-colors duration-300 ${isOpen ? 'text-[#ECAB00]' : 'text-[#0f172a]'}`}>
                            {data.title}
                        </h3>
                    </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
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
                            <p className="text-[15px] font-medium text-gray-500 mb-6 leading-relaxed">{data.desc}</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                {data.topics.map((topic, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={16} className="text-[#ECAB00] shrink-0 mt-0.5" />
                                        <span className="text-[14px] font-medium text-gray-600 leading-snug">{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function SMOSyllabus() {
    const [openModules, setOpenModules] = useState([0]);

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
            <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#ECAB00] animate-ping absolute" />
                        <span className="w-2 h-2 rounded-full bg-[#ECAB00] relative z-10" />
                        <span className="font-bold text-[11px] md:text-xs text-[#ECAB00] uppercase tracking-[0.2em]">SMO Syllabus</span>
                    </div>
                    <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                        Industry-Approved{' '}
                        <span className="relative inline-block text-[#ECAB00]">
                            Curriculum & 2 Modules
                            <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-[16px] md:text-[18px] font-medium text-gray-600 leading-relaxed">
                        From organic social media growth to advanced paid advertising across 5 platforms — all execution-focused with real campaign practice.
                    </p>
                </div>

                <div className="flex flex-col gap-5 max-w-4xl mx-auto">
                    {modules.map((mod, index) => (
                        <ModuleCard
                            key={index}
                            data={mod}
                            isOpen={openModules.includes(index)}
                            onClick={() => toggleModule(index)}
                        />
                    ))}
                </div>

                <div className="mt-14 flex flex-col items-center justify-center text-center">
                    <p className="font-medium text-[16px] text-gray-500 mb-6">Want to see the complete curriculum and tools list?</p>
                    <button className="group bg-[#0f172a] text-white hover:bg-[#ECAB00] hover:text-[#0f172a] transition-all duration-300 rounded-xl px-8 py-4 font-bold text-[15px] flex items-center gap-2 cursor-pointer shadow-lg active:scale-95">
                        Download Full Syllabus
                        <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}