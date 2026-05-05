import React from 'react';
import { motion } from 'framer-motion';
import {
    Users, Wrench, TrendingUp, Download,
    CreditCard, Briefcase, Zap, ArrowRight,
} from 'lucide-react';

const FEATURES = [
    {
        Icon: Users,
        title: 'Trusted Since 2011',
        desc: 'Over 11,000 students trained across Andheri and Borivali — Mumbai\'s most experienced digital marketing institute.',
    },
    {
        Icon: Wrench,
        title: 'Master 50+ Essential Tools',
        desc: 'Hands-on premium access to the world\'s top SEO, Analytics, and Advertising platforms — not just theory.',
    },
    {
        Icon: TrendingUp,
        title: 'Manage Real Ad Budgets',
        desc: 'We fund your actual Google & Meta campaigns so you learn with real money from day one.',
    },
    {
        Icon: Briefcase,
        title: '100% Placement Assistance',
        desc: 'Dedicated career support, interview prep, and direct referrals to 250+ hiring partners across agencies and brands.',
    },
    {
        Icon: Zap,
        title: 'Small Personalized Batches',
        desc: 'Maximum 10 students per batch ensures focused, one-on-one attention from expert trainers throughout the program.',
    },
    {
        Icon: CreditCard,
        title: 'Flexible 0% EMI Options',
        desc: 'Start your digital marketing career without financial stress. Cover-up sessions for any missed lectures included.',
    },
];

function FeatureCard({ Icon, title, desc, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="group relative bg-white rounded-[1.5rem] p-8 border border-gray-200 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] hover:border-[#ECAB00]/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#ECAB00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-[#ECAB00] bg-blue-50 group-hover:bg-[#ECAB00] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                <Icon size={26} strokeWidth={2} />
            </div>
            <h4 className="text-[20px] font-black text-[#0f172a] mb-3 leading-tight">{title}</h4>
            <p className="text-[16px] font-medium text-gray-500 leading-relaxed relative z-10">{desc}</p>
        </motion.div>
    );
}

export default function WhyUsSection() {
    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden" aria-label="Why choose Operating Media">
            <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#ECAB00]/10 blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ECAB00]/5 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#ECAB00] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#ECAB00] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#ECAB00] uppercase tracking-[0.2em]">Core Advantages</span>
                        </div>
                        <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                            What Makes Operating Media <br className="hidden md:block" />
                            <span className="relative inline-block text-[#ECAB00]">
                                Mumbai's #1 Choice
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-medium text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            Strip away the theory. The Diploma is built purely around the tools, channels and strategies that generate real results — from day one.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                    {FEATURES.map((item, i) => <FeatureCard key={item.title} {...item} delay={i * 0.1} />)}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mt-16 overflow-hidden bg-[#0f172a] rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.3)] border border-white/5"
                >
                    <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-[#ECAB00]/20 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-[-50%] left-[-10%] w-[300px] h-[300px] bg-[#ECAB00]/15 rounded-full blur-[80px] pointer-events-none" />
                    <div className="relative z-10 text-center lg:text-left max-w-xl">
                        <h3 className="font-black text-white leading-[1.15] mb-4 text-[28px] md:text-[36px]">
                            Ready to start your{' '}
                            <span className="text-[#ECAB00]">Digital Career?</span>
                        </h3>
                        <p className="font-medium text-gray-400 text-[16px] md:text-[18px] leading-relaxed">
                            Download our 2026 Diploma Syllabus for a detailed breakdown of all 11 modules, projects, and 50+ tools.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                        <button className="group flex items-center justify-center gap-2 font-black text-[#0f172a] px-8 py-4 rounded-xl bg-[#ECAB00] hover:bg-white hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.4)] transition-all duration-300 cursor-pointer active:scale-95 text-[16px]">
                            Download Syllabus <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <a href="/contact-us/">
                            <button className="group flex items-center justify-center gap-2 font-bold text-white px-8 py-4 rounded-xl bg-transparent border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer active:scale-95 text-[16px]">
                                Book Free Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}