import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const whyPoints = [
    "Trusted Institute since 2011",
    "Trained over 11,000 students",
    "Personalized Batches of around 10 students",
    "Cover up sessions for missed lectures",
    "Flexible Timings",
    "Weekdays and Weekend Batch",
    "Diploma Certificate upon Completion",
    "Official Google Certification",
    "Course Notes with Future Updates",
    "100% Job Assistance",
    "Android and iOS App",
    "LMS Access",
];

export default function GAOverview() {
    return (
        <section className="relative w-full bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ECAB00]/8 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-14 py-10 md:py-[50px] lg:py-[60px]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT — Overview Text */}
                    <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] text-[#2563eb] uppercase tracking-[0.2em]">Course Overview</span>
                        </div>

                        <h2 className="font-black text-[28px] md:text-[36px] lg:text-[42px] text-[#0f172a] leading-[1.15] tracking-tight mb-6">
                            Mumbai's Most Practical{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Google Analytics
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>{' '}
                            Course.
                        </h2>

                        <div className="space-y-5 text-gray-600 text-[16px] md:text-[17px] font-medium leading-relaxed mb-8">
                            <p>
                                Our Google Analytics training program is designed for individuals who want to gain <span className="font-bold text-[#0f172a]">in-depth knowledge of website analytics and data-driven marketing</span>. This course provides a detailed and practical approach to tracking, analysing, and optimising digital performance using Google Analytics 4.
                            </p>
                            <p>
                                The course covers everything from <span className="font-bold text-[#0f172a]">setting up GA4 accounts and installing tracking codes</span> to advanced segmentation, e-commerce tracking, goal configuration, and campaign performance analysis — all with real website data.
                            </p>
                            <p>
                                As businesses increasingly rely on data to make decisions, skilled Google Analytics professionals can <span className="font-bold text-[#ECAB00]">command top roles across agencies, brands, and startups</span> — or use these skills to grow their own ventures.
                            </p>
                        </div>

                        <Link to="/contact">
                            <button className="group flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-[#ECAB00] hover:text-[#0f172a] transition-all duration-300 shadow-md hover:shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)]">
                                Start Your Analytics Journey
                                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* RIGHT — Why Operating Media */}
                    <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <div className="bg-[#0f172a] rounded-[2rem] p-8 lg:p-10 border border-white/5 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25)]">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-[2px] w-8 bg-[#ECAB00]" />
                                <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em]">Why Operating Media</p>
                            </div>
                            <h3 className="font-black text-[22px] md:text-[26px] text-white leading-tight mb-8">
                                #1 Digital Marketing Institute In Mumbai
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                {whyPoints.map((pt, i) => (
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