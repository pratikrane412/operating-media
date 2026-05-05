import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, MessageCircleQuestion } from "lucide-react";

const faqs = [
    {
        q: "What is the Diploma in Digital Marketing?",
        a: "The Diploma is a 2-month beginner-friendly program covering 11 modules including WordPress website creation, SEO, Google Ads, Social Media Marketing & Advertising, Google Analytics 4, Google Tag Manager, YouTube Advertising, and Creative Design. It's designed for complete beginners who want to get job-ready fast.",
    },
    {
        q: "Who should enroll in the Diploma?",
        a: "It's perfect for three types of learners: freshers and recent graduates looking to enter the digital marketing industry, business owners who want to run their own ads and rank their website, and working professionals who want to quickly add digital skills to their resume without a long commitment.",
    },
    {
        q: "Do I need any prior experience to join?",
        a: "Absolutely not. The Diploma is designed from the ground up for complete beginners. We start with digital marketing basics and progressively build up to live campaign execution — no prior experience in marketing, tech, or design is required.",
    },
    {
        q: "How is the Diploma different from the Advanced Diploma?",
        a: "The Diploma is a 2-month foundational program (65+ hours, 50+ tools) covering the core channels — ideal for beginners and those wanting a quick, focused entry into digital marketing. The Advanced Diploma is a 4-month fast-track (500+ hours, 70+ tools) that goes deeper into execution, AI automation, WhatsApp marketing, influencer marketing, and more.",
    },
    {
        q: "What tools will I learn during the course?",
        a: "You'll get hands-on with 50+ premium tools including Google Ads, Meta Ads Manager, Google Analytics 4, Google Search Console, Google Tag Manager, WordPress, Elementor, Canva, Adobe Express, YouTube Studio, Mailchimp, and many more industry-standard platforms.",
    },
    {
        q: "Are the courses available on weekends?",
        a: "Yes — we offer both weekday and weekend batches at our Andheri and Borivali campuses, making it easy for working professionals and students to attend without disrupting their existing schedule.",
    },
    {
        q: "What certification will I receive?",
        a: "Upon successful completion you will receive the Operating Media Diploma Certification. The course also prepares you for Google Ads and Meta Blueprint global certifications, which significantly boost your employability and professional credibility.",
    },
    {
        q: "Do you offer job placement assistance?",
        a: "Yes — 100% placement assistance is included. This covers resume building, mock interviews, LinkedIn profile optimization, and direct introductions to our network of 250+ hiring partners spanning agencies, startups, and established brands.",
    },
    {
        q: "What is the batch size?",
        a: "We keep Diploma batches to a maximum of 10 students to ensure every student receives personalized attention, hands-on practice time, and a genuine learning environment without distractions.",
    },
    {
        q: "Are there any EMI options available?",
        a: "Yes — we offer flexible 0% EMI payment options so the program is financially accessible for students and freshers. Speak to our counselors for a customized payment plan that fits your budget.",
    },
    {
        q: "Where are your campuses located?",
        a: "We have training centers in Andheri West and Borivali West, Mumbai. If you miss any lecture, we offer dedicated make-up sessions at no additional charge so you never fall behind.",
    },
    {
        q: "Is there an online learning platform?",
        a: "Yes — all students get access to our LMS (Learning Management System) with course notes, batch schedules, attendance tracking, a resource library with future updates, and a student forum for peer collaboration. An Android and iOS app is also available.",
    },
];

export default function FAQSection() {
    const [open, setOpen] = useState(null);
    const toggleFaq = (index) => setOpen(open === index ? null : index);

    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden">
            <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ECAB00]/10 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <MessageCircleQuestion size={16} className="text-[#2563eb]" />
                            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">Got Questions?</span>
                        </div>
                        <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-4">
                            Everything you <span className="relative inline-block text-[#ECAB00]">
                                need to know
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>
                        <p className="font-medium text-[16px] md:text-[18px] text-gray-500 max-w-xl mx-auto leading-relaxed">
                            From admissions to placement — all your questions about the Diploma in Digital Marketing answered in one place.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 items-start">
                    {faqs.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={i} className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-[#2563eb] shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)]' : 'border-gray-200 shadow-sm hover:border-[#2563eb]/30 hover:shadow-md'}`}>
                                <button onClick={() => toggleFaq(i)} className="w-full flex items-start justify-between gap-4 px-5 py-5 md:px-6 md:py-6 text-left group focus:outline-none">
                                    <span className={`text-[16px] md:text-[18px] font-bold leading-snug transition-colors duration-300 ${isOpen ? "text-[#2563eb]" : "text-[#0f172a] group-hover:text-[#2563eb]"}`}>
                                        {item.q}
                                    </span>
                                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#2563eb] text-white rotate-180" : "bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white"}`}>
                                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
                                            <div className="px-5 md:px-6 pb-6 pt-0 text-gray-600 text-[15px] md:text-[16px] font-medium leading-relaxed">
                                                <div className="w-full h-px bg-gray-100 mb-4" />
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-12 md:mt-16 bg-[#0f172a] rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] relative overflow-hidden"
                >
                    <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] bg-[#ECAB00]/20 rounded-full blur-[50px] pointer-events-none" />
                    <div className="text-center sm:text-left relative z-10">
                        <h3 className="text-white text-[22px] md:text-[26px] font-black leading-tight mb-2">Still have questions?</h3>
                        <p className="text-gray-400 font-medium text-[15px] md:text-[16px]">Our team is ready to help you plan your next step.</p>
                    </div>
                    <button className="relative z-10 shrink-0 flex items-center justify-center gap-2 bg-[#ECAB00] hover:bg-white text-[#0f172a] font-black text-[15px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] active:scale-95 group">
                        Speak to an Expert
                        <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}