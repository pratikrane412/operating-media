import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
    MapPin, Calendar, Users, ArrowUpRight, ArrowRight,
    X, CheckCircle, Sparkles, Zap, Trophy, Star, Target
} from 'lucide-react';

const OUTCOMES = [
    {
        iconName: 'zap',
        title: 'Revenue-Focused Skills',
        desc: 'Learn the exact tools that drive leads, sales and ROI for real businesses',
        delay: 0.10,
    },
    {
        iconName: 'trophy',
        title: 'Agency-Style Training',
        desc: 'Work on actual client briefs — not mock projects or theory slides',
        delay: 0.18,
    },
    {
        iconName: 'sparkles',
        title: 'AI & Automation Tools',
        desc: 'WhatsApp chatbots, drip campaigns and AI content in every module',
        delay: 0.26,
    },
    {
        iconName: 'star',
        title: 'Placement Support',
        desc: '250+ hiring partners across agencies, brands and startups',
        delay: 0.34,
    },
];

const SPECS = [
    { iconName: 'mappin', label: 'Centers', value: 'Andheri & Borivali' },
    { iconName: 'calendar', label: 'Batches', value: 'Weekdays & Weekends' },
    { iconName: 'users', label: 'Batch Size', value: 'Max 12 Students' },
];

const CHECKLIST = [
    'Hands-on with 70+ premium tools',
    'Real ad budget campaigns included',
    'AI & WhatsApp automation training',
    'Job placement & interview prep',
];

const BATCH_STATS = [
    { target: 4, suffix: '', label: 'Months' },
    { target: 500, suffix: '+', label: 'Hours' },
    { target: 12, suffix: '', label: 'Students' },
];

const PILLS = [
    { iconName: 'zap', text: 'Fast-Track 4 Months' },
    { iconName: 'sparkles', text: 'AI Tools Included' },
    { iconName: 'trophy', text: '70+ Premium Tools' },
    { iconName: 'users', text: 'Max 12 Students' },
];

const AVATARS = [
    'https://i.pravatar.cc/40?img=1',
    'https://i.pravatar.cc/40?img=5',
    'https://i.pravatar.cc/40?img=8',
    'https://i.pravatar.cc/40?img=12',
];

function Icon({ name, size = 16, className = '' }) {
    const props = { size, className };
    switch (name) {
        case 'zap': return <Zap {...props} />;
        case 'trophy': return <Trophy {...props} />;
        case 'sparkles': return <Sparkles {...props} />;
        case 'star': return <Star {...props} />;
        case 'mappin': return <MapPin {...props} />;
        case 'calendar': return <Calendar {...props} />;
        case 'users': return <Users {...props} />;
        default: return <Target {...props} />;
    }
}

function Counter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const DURATION = 900;
        const STEPS = 50;
        const INTERVAL = DURATION / STEPS;
        let step = 0;
        const timer = setInterval(() => {
            step += 1;
            const ease = 1 - Math.pow(1 - step / STEPS, 3);
            const current = Math.round(ease * target);
            setCount(current);
            if (step >= STEPS) clearInterval(timer);
        }, INTERVAL);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

function FeaturePill({ iconName, text }) {
    return (
        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-50/50 rounded-full border border-blue-100 shadow-[0_2px_8px_rgba(37,99,235,0.05)] hover:border-[#2563eb]/30 transition-colors">
            <span className="text-[#2563eb]"><Icon name={iconName} size={15} /></span>
            <span className="text-[14px] font-bold text-[#0f172a] whitespace-nowrap">{text}</span>
        </div>
    );
}

function OutcomeCard({ iconName, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#2563eb]/40 hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
        >
            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-[#2563eb]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-[#2563eb] bg-blue-50 mb-5 group-hover:bg-[#2563eb] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                <Icon name={iconName} size={22} />
            </div>
            <p className="text-[18px] font-black text-[#0f172a] mb-2 relative z-10">{title}</p>
            <p className="text-[15px] font-medium text-gray-500 leading-relaxed relative z-10">{desc}</p>
        </motion.div>
    );
}

function SpecRow({ iconName, label, value, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="flex items-center gap-4 px-4 py-3.5 rounded-xl border border-transparent hover:bg-gray-50 hover:border-gray-100 transition-all group cursor-default"
        >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-[#2563eb] bg-blue-50 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                <Icon name={iconName} size={18} />
            </div>
            <div>
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.15em] mb-0.5">{label}</p>
                <p className="text-[16px] font-black text-[#0f172a]">{value}</p>
            </div>
        </motion.div>
    );
}

function BookDemoModal({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen, onClose]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div role="dialog" aria-modal="true" aria-label="Book a free demo class" className="fixed inset-0 z-[100] flex items-center justify-center p-4 font-['Satoshi',sans-serif]">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-md" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 24 }}
                        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                        className="relative z-10 w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                    >
                        <div className="hidden md:block md:w-1/2 relative min-h-[480px]">
                            <img src="https://www.operatingmedia.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-08-07-at-15.40.57.webp" alt="Operating Media campus" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-8">
                                <p className="text-[24px] font-black text-white leading-tight mb-1">Visit our campus.</p>
                                <p className="font-medium text-[16px] text-[#ECAB00]">Andheri &amp; Borivali</p>
                            </div>
                        </div>
                        <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#FAFCFF]">
                            <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-100 hover:text-[#0f172a] transition-colors cursor-pointer shadow-sm">
                                <X size={20} />
                            </button>
                            <p className="text-[11px] font-bold text-[#2563eb] tracking-[0.25em] uppercase mb-4">Book a Visit</p>
                            <h2 className="text-[32px] sm:text-[40px] font-black text-[#0f172a] leading-[1.1] tracking-tight mb-8">
                                Book a Free<br /><span className="text-[#ECAB00]">Demo Class</span>
                            </h2>
                            <div className="space-y-5">
                                <div className="flex items-center overflow-hidden rounded-xl bg-white border border-gray-200 focus-within:border-[#2563eb] focus-within:ring-2 focus-within:ring-[#2563eb]/20 transition-all shadow-sm">
                                    <div className="flex items-center gap-2 px-4 py-3.5 shrink-0 bg-gray-50 border-r border-gray-200">
                                        <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India flag" className="w-5 rounded-[2px]" />
                                        <span className="text-[16px] font-bold text-[#0f172a]">+91</span>
                                    </div>
                                    <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3.5 outline-none text-[16px] font-medium text-[#0f172a] placeholder-gray-400 bg-transparent" />
                                </div>
                                <button onClick={() => { }} className="group w-full flex items-center justify-center gap-2 py-4 rounded-xl cursor-pointer bg-[#ECAB00] hover:bg-[#0f172a] text-[#0f172a] hover:text-white text-[16px] font-black shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] hover:shadow-xl transition-all duration-300">
                                    Continue <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                                </button>
                                <p className="text-[12px] font-medium text-gray-500 text-center leading-relaxed mt-4">
                                    By continuing you agree to Operating Media&apos;s <span className="underline cursor-pointer hover:text-[#0f172a]">Terms</span> and <span className="underline cursor-pointer hover:text-[#0f172a]">Privacy Policy</span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default function TransformationSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 overflow-hidden bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white" aria-label="Transformation Roadmap">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[100px] animate-pulse-slow pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="grid lg:grid-cols-[1fr_450px] gap-12 lg:gap-16 items-start">

                    {/* LEFT COLUMN */}
                    <div>
                        <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">Career Roadmap</span>
                        </motion.div>

                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }} className="font-black text-[#0f172a] mb-6 leading-[1.1] tracking-tight text-[32px] md:text-[40px] lg:text-[46px]">
                            From Beginner to<br />
                            <span className="relative inline-block text-[#ECAB00]">
                                Digital Specialist
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span><br />
                            in 4 Months.
                        </motion.h2>

                        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }} className="text-[16px] md:text-[18px] font-medium text-gray-600 max-w-[500px] mb-10 leading-relaxed">
                            Not everyone needs a 12-month master&apos;s degree. The Advanced Diploma is designed for{' '}
                            <span className="font-bold text-[#0f172a]">action</span>. We have stripped away the theory and focused purely on the tools that generate revenue — you will learn how to rank websites (SEO), run profitable ads (PPC), and manage social media communities.
                        </motion.p>

                        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-wrap gap-3 mb-14">
                            {PILLS.map((pill) => <FeaturePill key={pill.text} iconName={pill.iconName} text={pill.text} />)}
                        </motion.div>

                        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="flex items-center gap-3 font-bold text-[11px] text-[#ECAB00] uppercase tracking-[0.3em] mb-6">
                            <span className="h-[2px] w-8 bg-[#ECAB00]" />
                            What You&apos;ll Walk Away With
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 lg:mb-0">
                            {OUTCOMES.map((o) => <OutcomeCard key={o.title} {...o} />)}
                        </div>
                    </div>

                    {/* RIGHT: ENROLMENT CARD */}
                    <div className="lg:sticky lg:top-24 self-start relative z-20">
                        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }} className="relative bg-white rounded-[2rem] overflow-hidden border border-gray-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">

                            <div className="bg-[#0f172a] px-8 pt-8 pb-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#2563eb]/20 rounded-full blur-[60px] pointer-events-none" />
                                <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-1.5 bg-[#ECAB00]/10 rounded-full border border-[#ECAB00]/20">
                                    <span className="w-2 h-2 rounded-full bg-[#ECAB00] animate-ping absolute" />
                                    <span className="w-2 h-2 rounded-full bg-[#ECAB00] relative z-10" />
                                    <span className="text-[10px] font-bold text-[#ECAB00] uppercase tracking-[0.15em]">Enrolling Now</span>
                                </div>
                                <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em] mb-2 relative z-10">Enrolment</p>
                                <h3 className="text-[28px] md:text-[32px] font-black text-white leading-[1.1] relative z-10">Batch Details</h3>
                                <p className="text-[15px] font-medium text-gray-400 mt-2 relative z-10">Limited to 12 seats per batch.</p>
                                <div className="grid grid-cols-3 gap-3 mt-8 relative z-10">
                                    {BATCH_STATS.map((s) => (
                                        <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                                            <span className="text-[28px] font-black text-white leading-none block"><Counter target={s.target} suffix={s.suffix} /></span>
                                            <span className="text-[10px] font-bold text-[#ECAB00] uppercase tracking-[0.1em] mt-2 block">{s.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="px-6 pt-5 pb-3 space-y-1">
                                {SPECS.map((item, i) => <SpecRow key={item.label} {...item} delay={0.2 + i * 0.07} />)}
                            </div>

                            <div className="px-6 pb-5">
                                <div className="bg-[#FAFCFF] rounded-2xl p-5 space-y-3 border border-blue-50">
                                    {CHECKLIST.map((text) => (
                                        <div key={text} className="flex items-start gap-3">
                                            <CheckCircle size={18} className="text-[#2563eb] shrink-0 mt-0.5" />
                                            <span className="text-[15px] font-medium text-gray-700 leading-snug">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="px-6 pb-8">
                                <a href="/contact">
                                    <button className="group w-full flex items-center justify-center gap-3 py-4 rounded-xl cursor-pointer bg-[#ECAB00] hover:bg-[#0f172a] text-[#0f172a] hover:text-white text-[16px] font-black shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] hover:shadow-2xl transition-all duration-300">
                                        Book Free Demo Class
                                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </button>
                                </a>
                                <p className="text-[13px] font-medium text-gray-400 text-center mt-4">No commitment &middot; Free of charge</p>
                            </div>

                        </motion.div>
                    </div>

                </div>
            </div>

            <BookDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <style>{`
        .animate-pulse-slow { animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
        </section>
    );
}