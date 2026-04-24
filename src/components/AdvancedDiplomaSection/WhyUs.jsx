import { motion } from 'framer-motion';
import { Users, Wrench, TrendingUp, Download, CreditCard, Briefcase, Zap, ArrowRight } from 'lucide-react';

const FEATURES = [
    { Icon: Users, title: 'Industry Expert Masterclasses', desc: 'Learn directly from agency leaders through exclusive guest sessions.' },
    { Icon: Wrench, title: 'Master 60+ Essential Tools', desc: 'Get hands-on access to premium tools including SEO and AI platforms.' },
    { Icon: TrendingUp, title: 'Manage Real Ad Budgets', desc: 'We fund your actual campaigns so you learn with real money.' },
    { Icon: Briefcase, title: '100% Placement Assistance', desc: 'Dedicated career support to land roles in top agencies and brands.' },
    { Icon: Zap, title: 'Practical-First Training', desc: '120+ hours of learning built around real campaign workflows.' },
    { Icon: CreditCard, title: 'Financial Flexibility', desc: 'Start your career without stress using our 0% EMI payment options.' },
];

function FeatureCard({ Icon, title, desc, delay }) {
    return (
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }} className="group flex flex-col items-start">
            <div className="mb-3 p-3.5 rounded-2xl text-[#FF5A1F] bg-[#FF5A1F]/[0.08] group-hover:bg-[#FF5A1F] group-hover:text-white transition-all duration-300"><Icon size={22} /></div>
            <h4 className="font-semibold text-[#111111] tracking-tight mb-2 group-hover:text-[#FF5A1F] transition-colors duration-200" style={{ ...satoshi, fontSize: 17 }}>{title}</h4>
            <p className="font-normal text-[#111111]/55 leading-relaxed" style={{ ...satoshi, fontSize: 15 }}>{desc}</p>
        </motion.div>
    );
}

export function WhyUsSection() {
    return (
        <section className="py-6 sm:py-10 bg-white antialiased" aria-label="Why choose Operating Media" style={satoshi}>
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-8">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-[2px] bg-[#FF5A1F] flex-shrink-0 rounded-full" />
                            <span className="font-bold text-[#FF5A1F] uppercase tracking-widest" style={{ ...satoshi, fontSize: 12 }}>Core Advantages</span>
                        </div>
                        <h2 className="font-black text-[#111111] leading-tight tracking-tight mb-3" style={{ ...satoshi, fontSize: 'clamp(26px, 4vw, 36px)' }}>
                            What Makes Operating Media{' '}<span className="text-[#FF5A1F]">Mumbai's #1 Choice</span>
                        </h2>
                        <p className="font-normal text-[#111111]/55 max-w-xl leading-relaxed" style={{ ...satoshi, fontSize: 16 }}>Move beyond theory to hands-on campaign experience and get the technical edge.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8" role="list">
                    {FEATURES.map((item, i) => (<div key={item.title} role="listitem"><FeatureCard {...item} delay={i * 0.05} /></div>))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative mt-12 overflow-hidden bg-[#111111] rounded-[1.5rem] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,90,31,0.12) 0%, transparent 60%)' }} />
                    <div className="relative z-10 text-center lg:text-left">
                        <h3 className="font-bold text-white tracking-tight leading-tight mb-2" style={{ ...satoshi, fontSize: 'clamp(18px, 3vw, 22px)' }}>
                            Ready to accelerate your{' '}<span className="text-[#FF5A1F]">Digital Career?</span>
                        </h3>
                        <p className="font-normal text-white/50 max-w-md" style={{ ...satoshi, fontSize: 15 }}>Download our 2026 Advanced Diploma Syllabus for a breakdown of 60+ tools.</p>
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                        <button className="flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl bg-[#FF5A1F] hover:bg-white hover:text-[#111111] transition-all duration-300 border-none cursor-pointer" style={{ ...satoshi, fontSize: 15 }}>
                            Download Syllabus <Download size={16} />
                        </button>
                        <button className="flex items-center justify-center gap-2 font-bold text-white px-6 py-3 rounded-xl bg-transparent border border-white/15 hover:bg-white/10 transition-all duration-300 cursor-pointer" style={{ ...satoshi, fontSize: 15 }}>
                            Book Free Demo <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default WhyUsSection;