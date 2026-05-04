import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, Smartphone, Award } from 'lucide-react';

const certFeatures = [
    {
        icon: <Award size={22} />,
        title: "Operating Media Certificate",
        desc: "Receive an industry-recognised diploma certificate upon successful completion of the Search Engine Optimization course.",
    },
    {
        icon: <ShieldCheck size={22} />,
        title: "SEO Certification",
        desc: "Get fully prepared for and supported through the official SEO certification exam alongside your SEO training.",
    },
    {
        icon: <BookOpen size={22} />,
        title: "LMS Access & Course Notes",
        desc: "Lifetime access to our learning management system with updated course notes, recordings, and resources.",
    },
    {
        icon: <Smartphone size={22} />,
        title: "Android & iOS App",
        desc: "Continue learning on the go with our mobile app — available on both Android and iOS platforms.",
    },
];

export default function SEOCertification() {
    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ECAB00]/8 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#ECAB00] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#ECAB00] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#ECAB00] uppercase tracking-[0.2em]">Certification & Access</span>
                        </div>
                        <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                            Credentials That{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Open Doors
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-[16px] md:text-[18px] font-medium text-gray-600 leading-relaxed">
                            Walk away with certifications, tools access, and lifetime support — everything you need to land your next role.
                        </p>
                    </motion.div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certFeatures.map((feat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#ECAB00]/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#ECAB00] mb-5 group-hover:bg-[#ECAB00] group-hover:text-white transition-all duration-300">
                                {feat.icon}
                            </div>
                            <h3 className="font-black text-[17px] text-[#0f172a] leading-snug mb-3">{feat.title}</h3>
                            <p className="text-[14px] font-medium text-gray-500 leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 bg-[#0f172a] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)]"
                >
                    <div className="absolute top-[-40%] right-[-5%] w-[250px] h-[250px] bg-[#ECAB00]/15 rounded-full blur-[60px] pointer-events-none" />
                    <div className="text-center md:text-left relative z-10">
                        <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em] mb-2">100% Job Assistance</p>
                        <h3 className="text-white text-[22px] md:text-[28px] font-black leading-tight mb-2">
                            Placed at 250+ Companies
                        </h3>
                        <p className="text-gray-400 font-medium text-[15px] md:text-[16px]">
                            Our placement team works with you until you land the role you deserve.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row gap-3 shrink-0">
                        <div className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 border border-white/10">
                            <ShieldCheck size={28} className="text-[#ECAB00]" />
                            <div>
                                <p className="font-black text-white text-[15px] leading-tight">Google Certified</p>
                                <p className="font-medium text-gray-400 text-[12px]">Industry Recognised</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}