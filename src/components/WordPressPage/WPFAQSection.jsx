import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowUpRight, MessageCircleQuestion } from 'lucide-react';

const faqs = [
    {
        q: "What is the WordPress Development course?",
        a: "The WordPress Development course is a hands-on certification program covering landing page design with Elementor, full website creation, plugin management, theme customisation, and integration of marketing tools — all without any coding knowledge required.",
    },
    {
        q: "What is WordPress and why should I learn it?",
        a: "WordPress is the world's most popular content management system, powering over 15% of the top 1 million websites globally. Learning WordPress opens doors to freelancing, agency roles, and building your own business — all without needing to write code.",
    },
    {
        q: "Who can enroll in this WordPress course?",
        a: "The course is open to everyone — students, entrepreneurs, marketing professionals, freelancers, and business owners who want to build and manage professional websites without hiring a developer.",
    },
    {
        q: "Do I need any coding knowledge to join?",
        a: "No coding knowledge is required at all. WordPress and Elementor are built for non-developers, and our course teaches you everything from scratch using a completely visual, drag-and-drop workflow.",
    },
    {
        q: "What will I be able to build after this course?",
        a: "You'll be able to design high-converting landing pages, build full multi-page websites, integrate email marketing platforms like Mailchimp, set up Google Analytics and Facebook Pixel tracking, and create lead capture forms and pop-ups.",
    },
    {
        q: "Are weekday and weekend batches available?",
        a: "Yes — we offer both weekday and weekend batches at our Andheri and Borivali campuses, making it accessible for working professionals and students alike.",
    },
    {
        q: "What certification will I receive?",
        a: "You'll receive the Operating Media WordPress Development Diploma Certificate upon completion, along with preparation support for Google certification — both recognised by top employers and digital agencies.",
    },
    {
        q: "Is placement assistance provided?",
        a: "Yes — 100% placement assistance including resume building, interview prep, and referrals to 250+ hiring partners across agencies and brands.",
    },
    {
        q: "What is the batch size and fee?",
        a: "Batches are limited to a maximum of 10 students to ensure personalised attention. The course fee is ₹9,000. Flexible EMI options are also available — speak to our counselors for details.",
    },
    {
        q: "Where are the training centers located?",
        a: "We have training centers in Andheri West and Borivali West, Mumbai. Missed lectures can be covered in dedicated makeup sessions at no extra charge.",
    },
];

export default function WPFAQSection() {
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
                            Everything you{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                need to know
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>
                        <p className="font-medium text-[16px] md:text-[18px] text-gray-500 max-w-xl mx-auto leading-relaxed">
                            From admissions to placement — all your questions about the WordPress Development course answered in one place.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 items-start">
                    {faqs.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={i} className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${isOpen ? 'border-[#ECAB00] shadow-[0_10px_30px_-10px_rgba(236,171,0,0.15)]' : 'border-gray-200 shadow-sm hover:border-[#ECAB00]/30 hover:shadow-md'}`}>
                                <button onClick={() => toggleFaq(i)} className="w-full flex items-start justify-between gap-4 px-5 py-5 md:px-6 md:py-6 text-left group focus:outline-none">
                                    <span className={`text-[16px] md:text-[17px] font-bold leading-snug transition-colors duration-300 ${isOpen ? "text-[#ECAB00]" : "text-[#0f172a] group-hover:text-[#ECAB00]"}`}>
                                        {item.q}
                                    </span>
                                    <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#ECAB00] text-[#0f172a]" : "bg-amber-50 text-[#ECAB00] group-hover:bg-[#ECAB00] group-hover:text-[#0f172a]"}`}>
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