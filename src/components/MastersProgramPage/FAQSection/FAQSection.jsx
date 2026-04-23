import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

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

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .faq-wrap * { font-family: 'Inter', sans-serif; }
        .faq-item { border-bottom: 1px solid #EBEBEB; }
        .faq-item:last-child { border-bottom: none; }
      `}</style>

      <section className="faq-wrap w-full py-10 md:py-10 px-4" style={{ background: "#FAFAF8" }}>
        <div className="max-w-3xl mx-auto">

          {/* ── Header ── */}
          <div className="mb-12 md:mb-16 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 rounded-full bg-orange-500" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-orange-500">
                Got questions?
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight mb-3">
              Everything you need to know
            </h2>

            <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed max-w-sm">
              From admissions to placement — all your questions answered in one place.
            </p>
          </div>

          {/* ── FAQ List ── */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            {faqs.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-start justify-between gap-2 px-3 py-2 md:px-4 md:py-4 text-left group"
                >
                  <span
                    className={`text-[15px] md:text-[17px] font-semibold leading-snug transition-colors duration-200 ${
                      open === i ? "text-orange-500" : "text-gray-900 group-hover:text-orange-400"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      open === i
                        ? "bg-orange-500 text-white rotate-0"
                        : "bg-gray-100 text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-400"
                    }`}
                  >
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-7 text-gray-500 text-[14px] md:text-[15px] leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="mt-8 md:mt-10 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-orange-100 bg-orange-50">
            <div>
              <p className="text-gray-900 font-bold text-[16px] md:text-[18px] mb-1">
                Still have questions?
              </p>
              <p className="text-gray-400 text-[13px] md:text-[14px]">
                Our team is ready to help you plan your next step.
              </p>
            </div>
            <button className="shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-[14px] px-6 py-3.5 rounded-2xl transition-all duration-200 shadow-md shadow-orange-200">
              Speak to an Expert
              <ArrowUpRight size={16} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}