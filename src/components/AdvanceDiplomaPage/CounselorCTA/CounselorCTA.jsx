import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, ChevronDown, ArrowRight } from 'lucide-react';

export default function CounselorCTA() {
    useEffect(() => {
        if (!document.querySelector('link[data-font="satoshi"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.setAttribute("data-font", "satoshi");
            link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
            document.head.appendChild(link);
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="relative w-full bg-[#0A0F1C] overflow-hidden z-10 selection:bg-[#ecab00] selection:text-[#0A0F1C]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#ecab00]/10 blur-[150px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

            <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-12 pt-14 lg:pt-20 pb-0 flex flex-col lg:flex-row lg:items-end justify-between relative z-10">

                {/* LEFT: FORM */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center pb-12 lg:pb-20 z-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#ecab00]/30 bg-[#ecab00]/10 backdrop-blur-md mb-5 shadow-sm">
                            <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-[#ecab00]">Speak to our Experts</span>
                        </div>
                        <h2 className="font-black text-white text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.05] tracking-tight mb-8">
                            Book Your Free <br className="hidden sm:block" />
                            <span className="text-[#ecab00]">Consultation Today.</span>
                        </h2>

                        <motion.form variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col gap-5 w-full max-w-xl">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 focus-within:border-[#ecab00] focus-within:bg-white/10 transition-all rounded-2xl px-5 py-4 flex items-center gap-3 group">
                                    <User size={18} className="text-white/40 group-focus-within:text-[#ecab00] transition-colors" />
                                    <input type="text" placeholder="Enter Full Name" className="bg-transparent outline-none w-full text-white text-[15px] placeholder:text-white/60 font-medium" required />
                                </motion.div>
                                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 focus-within:border-[#ecab00] focus-within:bg-white/10 transition-all rounded-2xl px-5 py-4 flex items-center gap-3 group">
                                    <span className="flex items-center gap-1.5 text-white/60 text-[15px] font-medium border-r border-white/10 pr-3 shrink-0 group-focus-within:text-white transition-colors">🇮🇳 +91</span>
                                    <input type="tel" placeholder="Phone Number" className="bg-transparent outline-none w-full text-white text-[15px] placeholder:text-white/60 font-medium" required />
                                </motion.div>
                                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 focus-within:border-[#ecab00] focus-within:bg-white/10 transition-all rounded-2xl px-5 py-4 flex items-center gap-3 group">
                                    <Mail size={18} className="text-white/40 group-focus-within:text-[#ecab00] transition-colors" />
                                    <input type="email" placeholder="Email Address" className="bg-transparent outline-none w-full text-white text-[15px] placeholder:text-white/60 font-medium" required />
                                </motion.div>
                                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 transition-all rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer group relative">
                                    <select defaultValue="" className="bg-transparent outline-none w-full text-white/60 hover:text-white focus:text-white text-[15px] font-medium appearance-none cursor-pointer relative z-10 w-[110%]">
                                        <option value="" disabled hidden>Select Course</option>
                                        <option value="advanced" className="text-black">Advance Diploma in Digital Marketing</option>
                                        <option value="master" className="text-black">Master's Program in Digital Marketing</option>
                                        <option value="diploma" className="text-black">Diploma in Digital Marketing</option>
                                    </select>
                                    <ChevronDown size={18} className="text-white/40 group-hover:text-[#ecab00] transition-colors absolute right-5 z-0" />
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 transition-all rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer group relative mt-1">
                                <select defaultValue="" className="bg-transparent outline-none w-full text-white/60 hover:text-white focus:text-white text-[15px] font-medium appearance-none cursor-pointer relative z-10">
                                    <option value="" disabled hidden>Select Preferred Location</option>
                                    <option value="andheri" className="text-black">Andheri Campus</option>
                                    <option value="borivali" className="text-black">Borivali Campus</option>
                                    <option value="online" className="text-black">Online Batch</option>
                                </select>
                                <ChevronDown size={18} className="text-white/40 group-hover:text-[#ecab00] transition-colors absolute right-5 z-0" />
                            </motion.div>

                            <motion.div variants={itemVariants} className="mt-4">
                                <button type="button" className="group relative bg-[#ecab00] hover:bg-[#d99c00] text-[#0A0F1C] flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-[16px] shadow-[0_10px_30px_-10px_rgba(236,171,0,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(236,171,0,0.8)] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden">
                                    <span className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-shine" />
                                    <span className="relative z-10">Request A Quote</span>
                                    <ArrowRight size={18} strokeWidth={3} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </div>

                {/* RIGHT: IMAGE */}
                <div className="w-full lg:w-[45%] flex items-end justify-center lg:justify-end z-10 pt-10 lg:pt-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative w-[90%] sm:w-[75%] lg:w-[130%] xl:w-[140%] flex items-end justify-center lg:justify-end origin-bottom lg:translate-x-8 xl:translate-x-12"
                    >
                        <img src="/images/op-img.png" alt="Student Counselor" className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20 relative pointer-events-auto" />
                        <div className="absolute top-[48%] left-[45%] lg:top-[50%] lg:left-[45%] -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-multiply pointer-events-none transform -rotate-3 z-30">
                            <img src="https://www.operatingmedia.com/wp-content/uploads/2023/07/OM-Logo.png" alt="" className="w-[22%] grayscale-[20%] contrast-125" />
                        </div>
                        <div className="absolute bottom-0 right-0 w-full h-[50%] bg-gradient-to-t from-[#0A0F1C] to-transparent z-10 pointer-events-none" />
                    </motion.div>
                </div>
            </div>

            <style>{`
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes shine { 100% { transform: translateX(100%); } }
        .animate-shine { animation: shine 1.5s ease; }
      `}</style>
        </section>
    );
}