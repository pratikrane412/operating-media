import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, ChevronDown, ArrowRight } from 'lucide-react';
import emailjs from "@emailjs/browser";

// ── YOUR EMAILJS CREDENTIALS (same as ContactHero) ──
const EMAILJS_SERVICE_ID = "service_h6tdnuh";   // ← replace
const EMAILJS_TEMPLATE_USER = "template_adrduww";  // ← Template 3 ID (user auto-reply)
const EMAILJS_TEMPLATE_TEAM = "template_tm7en9q";  // ← Template 4 ID (team notification)
const EMAILJS_PUBLIC_KEY = "6nnnQ21cpn6nf4g7y";   // ← replace

export default function CounselorCTA() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const nameRef = useRef('');
    const phoneRef = useRef('');
    const emailRef = useRef('');
    const courseRef = useRef('');
    const locationRef = useRef('');

    useEffect(() => {
        if (!document.querySelector('link[data-font="satoshi"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.setAttribute("data-font", "satoshi");
            link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
            document.head.appendChild(link);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        const templateParams = {
            user_name: nameRef.current,
            user_email: emailRef.current,
            user_phone: phoneRef.current,
            user_course: courseRef.current,
            user_branch: locationRef.current,
        };

        try {
            // Auto-reply to user
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_USER,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            // Notification to your team
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_TEAM,
                templateParams,
                EMAILJS_PUBLIC_KEY
            );

            setSent(true);
            setTimeout(() => setSent(false), 3000);

        } catch (err) {
            console.error("Email failed:", err);
            setError(true);
            setTimeout(() => setError(false), 3000);
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="relative w-full bg-[#0A0F1C] overflow-hidden z-10 selection:bg-[#ecab00] selection:text-[#0A0F1C]" style={{ fontFamily: "'Satoshi', sans-serif" }}>

            {/* ── Background Premium Effects ── */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#ecab00]/10 blur-[150px] pointer-events-none animate-pulse-slow" />
            <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />

            {/* ── MAIN LAYOUT ── */}
            <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-12 pt-14 lg:pt-20 pb-0 flex flex-col lg:flex-row lg:items-end justify-between relative z-10">

                {/* ════ LEFT SIDE: FORM & CONTENT ════ */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center pb-12 lg:pb-20 z-20">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        {/* Tag / Badge */}
                        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#ecab00]/30 bg-[#ecab00]/10 backdrop-blur-md mb-5 shadow-sm">
                            <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest text-[#ecab00]">
                                Speak to our Experts
                            </span>
                        </div>

                        {/* Headline */}
                        <h2 className="font-black text-white text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.05] tracking-tight mb-8">
                            Book Your Free <br className="hidden sm:block" />
                            <span className="text-[#ecab00]">Consultation Today.</span>
                        </h2>

                        {/* ── Form Container ── */}
                        <motion.form
                            onSubmit={handleSubmit}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-col gap-5 w-full max-w-xl"
                        >

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Name Input */}
                                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 focus-within:border-[#ecab00] focus-within:bg-white/10 transition-all rounded-2xl px-5 py-4 flex items-center gap-3 group">
                                    <User size={18} className="text-white/40 group-focus-within:text-[#ecab00] transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Enter Full Name"
                                        onChange={(e) => nameRef.current = e.target.value}
                                        className="bg-transparent outline-none w-full text-white text-[15px] placeholder:text-white/60 font-medium"
                                        required
                                    />
                                </motion.div>

                                {/* Phone Input */}
                                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 focus-within:border-[#ecab00] focus-within:bg-white/10 transition-all rounded-2xl px-5 py-4 flex items-center gap-3 group">
                                    <span className="flex items-center gap-1.5 text-white/60 text-[15px] font-medium border-r border-white/10 pr-3 shrink-0 group-focus-within:text-white transition-colors">
                                        🇮🇳 +91
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        onChange={(e) => phoneRef.current = e.target.value}
                                        className="bg-transparent outline-none w-full text-white text-[15px] placeholder:text-white/60 font-medium"
                                        required
                                    />
                                </motion.div>

                                {/* Email Input */}
                                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 focus-within:border-[#ecab00] focus-within:bg-white/10 transition-all rounded-2xl px-5 py-4 flex items-center gap-3 group">
                                    <Mail size={18} className="text-white/40 group-focus-within:text-[#ecab00] transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        onChange={(e) => emailRef.current = e.target.value}
                                        className="bg-transparent outline-none w-full text-white text-[15px] placeholder:text-white/60 font-medium"
                                        required
                                    />
                                </motion.div>

                                {/* Course Dropdown */}
                                <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 transition-all rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer group relative">
                                    <select
                                        defaultValue=""
                                        onChange={(e) => courseRef.current = e.target.value}
                                        className="bg-transparent outline-none w-full text-white/60 hover:text-white focus:text-white text-[15px] font-medium appearance-none cursor-pointer relative z-10 w-[110%]"
                                    >
                                        <option value="" disabled hidden>Select Course</option>
                                        <option value="Diploma in Digital Marketing" className="text-black">Diploma in Digital Marketing</option>
                                        <option value="Advanced Diploma in Digital Marketing" className="text-black">Advanced Diploma</option>
                                        <option value="Master's Program in Digital Marketing" className="text-black">Master's Program</option>
                                    </select>
                                    <ChevronDown size={18} className="text-white/40 group-hover:text-[#ecab00] transition-colors absolute right-5 z-0" />
                                </motion.div>
                            </div>

                            {/* Location Dropdown (Full Width) */}
                            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#ecab00]/40 transition-all rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer group relative mt-1">
                                <select
                                    defaultValue=""
                                    onChange={(e) => locationRef.current = e.target.value}
                                    className="bg-transparent outline-none w-full text-white/60 hover:text-white focus:text-white text-[15px] font-medium appearance-none cursor-pointer relative z-10"
                                >
                                    <option value="" disabled hidden>Select Preferred Location</option>
                                    <option value="Andheri Campus" className="text-black">Andheri Campus</option>
                                    <option value="Borivali Campus" className="text-black">Borivali Campus</option>
                                    <option value="Online Batch" className="text-black">Online Batch</option>
                                </select>
                                <ChevronDown size={18} className="text-white/40 group-hover:text-[#ecab00] transition-colors absolute right-5 z-0" />
                            </motion.div>

                            {/* Submit Button */}
                            <motion.div variants={itemVariants} className="mt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group relative bg-[#ecab00] hover:bg-[#d99c00] text-[#0A0F1C] flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-2xl font-black text-[16px] shadow-[0_10px_30px_-10px_rgba(236,171,0,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(236,171,0,0.8)] hover:-translate-y-1 active:scale-95 transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-white/30 -translate-x-full group-hover:animate-shine" />

                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4 text-[#0A0F1C] relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                            </svg>
                                            <span className="relative z-10">Sending...</span>
                                        </>
                                    ) : sent ? (
                                        <span className="relative z-10">✓ Request Sent!</span>
                                    ) : error ? (
                                        <span className="relative z-10">✗ Failed. Try again.</span>
                                    ) : (
                                        <>
                                            <span className="relative z-10">Request A Callback</span>
                                            <ArrowRight size={18} strokeWidth={3} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </motion.div>

                        </motion.form>
                    </motion.div>
                </div>

                {/* ════ RIGHT SIDE: GIRL IMAGE ════ */}
                <div className="w-full lg:w-[50%] flex items-end justify-center lg:justify-end z-10 pt-10 lg:pt-0 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="relative w-[90%] sm:w-[75%] lg:w-[130%] xl:w-[140%] flex items-end justify-center lg:justify-end origin-bottom lg:translate-x-8 xl:translate-x-12"
                    >
                        <img
                            src="/images/op-img.png"
                            alt="Student Counselor"
                            className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-20 relative pointer-events-auto"
                            style={{ transform: 'scale(1.4)', transformOrigin: 'bottom center' }}
                        />

                        {/* Logo on shirt */}
                        <div className="absolute top-[48%] left-[45%] lg:top-[50%] lg:left-[45%] -translate-x-1/2 -translate-y-1/2 opacity-80 mix-blend-multiply pointer-events-none transform -rotate-3 z-30">
                            <img
                                src="https://www.operatingmedia.com/wp-content/uploads/2023/07/OM-Logo.png"
                                alt=""
                                className="w-[22%] grayscale-[20%] contrast-125"
                            />
                        </div>

                        {/* Dark Glow behind image */}
                        <div className="absolute bottom-0 right-0 w-full h-[50%] bg-gradient-to-t from-[#0A0F1C] to-transparent z-10 pointer-events-none" />
                    </motion.div>
                </div>

            </div>

            <style>{`
                .animate-pulse-slow {
                    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                @keyframes shine { 100% { transform: translateX(100%); } }
                .animate-shine { animation: shine 1.5s ease; }
            `}</style>
        </section>
    );
}