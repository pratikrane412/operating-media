import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight, MessageCircleQuestion } from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is digital marketing?",
    a: "Digital marketing promotes products or services through digital channels — search engines, social media, email, and websites. It includes SEO, content marketing, PPC, and social media strategy.",
  },
  {
    q: "Who can enroll in your digital marketing courses?",
    a: "Our courses are designed for students, marketing professionals, business owners, and anyone looking to enhance their digital marketing skills — no background required.",
  },
  {
    q: "Do I need any prior experience to join?",
    a: "No prior experience is required. We offer beginner to advanced levels so everyone can find the right starting point for their career.",
  },
  {
    q: "I don't know which course suits me. How do I decide?",
    a: "We provide personalized career counseling. Book a one-to-one session with our experts to discuss your goals and find the perfect specialization.",
  },
  {
    q: "What courses do you offer?",
    a: "We offer MBA-Level PG Programs, Online AI Programs, 4–6 Month Certifications, Free Masterclasses, and Short Term Courses across all major digital marketing disciplines.",
  },
  {
    q: "How long do the courses take to complete?",
    a: "Foundational courses take 2–3 months. MBA-level and Advanced Diploma programs range from 7 to 11 months depending on your pace.",
  },
  {
    q: "Are the courses available online?",
    a: "Yes — all courses are available online with live interactive sessions, giving full flexibility to working professionals and outstation students.",
  },
  {
    q: "What is the format of the courses?",
    a: "Agency-style learning: live lectures, real case studies, hands-on assignments, and live projects with actual ad budgets from day one.",
  },
  {
    q: "Do you offer job placement assistance?",
    a: "Yes — 100% placement assistance through resume building, mock interviews, and direct connections to our 250+ hiring partner network.",
  },
  {
    q: "Do you offer any discounts or scholarships?",
    a: "Yes — merit-based scholarships, early-bird discounts, and No-Cost EMI options are available to make elite training accessible to all.",
  },
  {
    q: "Will I receive a certificate upon completion?",
    a: "You will receive an industry-recognised Operating Media certification plus Google and Meta certifications upon successful completion.",
  },
  {
    q: "Where are your campuses located?",
    a: "We have state-of-the-art training centres in Andheri West (Mumbai) and Borivali West. Visit our Contact page for exact addresses.",
  },
];

// ─── MAIN EXPORT COMPONENT ────────────────────────────────────────────────────
export default function FAQSection() {
  // Set to null so NO toggle is open by default
  const [open, setOpen] = useState(null);

  const toggleFaq = (index) => {
    // If clicking the currently open FAQ, close it. Otherwise open the new one (closes others)
    setOpen(open === index ? null : index);
  };

  return (
    <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden">
      
      {/* ── Subtle Background Glow ── */}
      <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ECAB00]/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <MessageCircleQuestion size={16} className="text-[#2563eb]" />
              <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
                Got Questions?
              </span>
            </div>

            {/* Heading (Max 46px on Desktop) */}
            <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-4">
              Everything you <span className="relative inline-block text-[#ECAB00]">
                need to know
                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
                </svg>
              </span>
            </h2>

            <p className="font-medium text-[16px] md:text-[18px] text-gray-500 max-w-xl mx-auto leading-relaxed">
              From admissions to placement — all your questions answered in one place.
            </p>
          </motion.div>
        </div>

        {/* ── 2-COLUMN FAQ GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 items-start">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div 
                key={i} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border 
                  ${isOpen ? 'border-[#2563eb] shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)]' : 'border-gray-200 shadow-sm hover:border-[#2563eb]/30 hover:shadow-md'}`}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-start justify-between gap-4 px-5 py-5 md:px-6 md:py-6 text-left group focus:outline-none"
                >
                  <span
                    className={`text-[16px] md:text-[18px] font-bold leading-snug transition-colors duration-300 ${
                      isOpen ? "text-[#2563eb]" : "text-[#0f172a] group-hover:text-[#2563eb]"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#2563eb] text-white rotate-180"
                        : "bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 pt-0 text-gray-600 text-[15px] md:text-[16px] font-medium leading-relaxed">
                        <div className="w-full h-px bg-gray-100 mb-4" /> {/* Divider line */}
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── BOTTOM CTA (Dark Premium Box) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 md:mt-16 bg-[#0f172a] rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)] relative overflow-hidden"
        >
          {/* Subtle Glow inside the dark box */}
          <div className="absolute top-[-50%] right-[-10%] w-[200px] h-[200px] bg-[#ECAB00]/20 rounded-full blur-[50px] pointer-events-none" />

          <div className="text-center sm:text-left relative z-10">
            <h3 className="text-white text-[22px] md:text-[26px] font-black leading-tight mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-400 font-medium text-[15px] md:text-[16px]">
              Our team is ready to help you plan your next step.
            </p>
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