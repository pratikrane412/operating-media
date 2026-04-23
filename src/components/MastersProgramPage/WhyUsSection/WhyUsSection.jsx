import { motion } from 'framer-motion';
import {
  Users, Wrench, TrendingUp, Download,
  CreditCard, Briefcase, Zap, ArrowRight,
} from 'lucide-react';

const FEATURES = [
  {
    Icon: Users,
    title: 'Industry Expert Masterclasses',
    desc: 'Learn directly from agency leaders through exclusive guest sessions.',
  },
  {
    Icon: Wrench,
    title: 'Master 120+ Essential Tools',
    desc: 'Get hands-on access to premium tools including SEO and AI platforms.',
  },
  {
    Icon: TrendingUp,
    title: 'Manage Real Ad Budgets',
    desc: 'We fund your actual campaigns so you learn with real money.',
  },
  {
    Icon: Briefcase,
    title: '100% Placement Assistance',
    desc: 'Dedicated career support to land roles in top agencies and brands.',
  },
  {
    Icon: Zap,
    title: 'Agency-Style Training',
    desc: '200+ hours of learning built around simulated agency workflows.',
  },
  {
    Icon: CreditCard,
    title: 'Financial Flexibility',
    desc: 'Start your career without stress using our 0% EMI payment options.',
  },
];

function FeatureCard({ Icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col items-start"
    >
      {/* Reduced padding from p-5 to p-3.5 and icon size from 24 to 20 */}
      <div
        className="mb-3 p-3.5 rounded-2xl
                   text-[#FF5A1F] bg-[#FF5A1F]/[0.08]
                   group-hover:bg-[#FF5A1F] group-hover:text-white
                   transition-all duration-300"
        aria-hidden="true"
      >
        <Icon size={20} />
      </div>

      <h4
        className="font-inter font-semibold text-[#111111] tracking-tight mb-1.5
                   group-hover:text-[#FF5A1F] transition-colors duration-200
                   text-[16px]"
      >
        {title}
      </h4>

      <p className="font-inter font-normal text-[#111111]/55 leading-relaxed
                    text-[13.5px]">
        {desc}
      </p>
    </motion.div>
  );
}

export default function WhyUsSection() {
  return (
    <section
      className="py-6 sm:py-10 bg-white antialiased"
      aria-label="Why choose Operating Media"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* ── HEADER ── */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-[2px] bg-[#FF5A1F] flex-shrink-0 rounded-full" aria-hidden="true" />
              <span className="font-inter font-bold text-[#FF5A1F] uppercase tracking-widest text-[10px]">
                Core Advantages
              </span>
            </div>

            <h2 className="font-inter font-bold text-[#111111] leading-tight tracking-tight mb-3 text-[28px] sm:text-[32px]">
              What Makes Operating Media <span className="text-[#FF5A1F]">Mumbai's #1 Choice</span>
            </h2>

            <p className="font-inter font-normal text-[#111111]/55 max-w-xl leading-relaxed text-[15px]">
              Move beyond theory to simulated agency experience and get the technical edge.
            </p>
          </motion.div>
        </div>

        {/* ── FEATURES GRID ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8"
          role="list"
        >
          {FEATURES.map((item, i) => (
            <div key={item.title} role="listitem">
              <FeatureCard {...item} delay={i * 0.05} />
            </div>
          ))}
        </div>

        {/* ── CTA CARD ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden bg-[#111111] rounded-[1.5rem] p-6 sm:p-8
                     flex flex-col lg:flex-row items-center justify-between gap-6
                     shadow-xl"
        >
          {/* Subtle Glow */}
          <div
            className="absolute top-0 right-0 w-[300px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,90,31,0.12) 0%, transparent 60%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center lg:text-left">
            <h3 className="font-inter font-bold text-white tracking-tight leading-tight mb-2 text-[20px]">
              Ready to accelerate your <span className="text-[#FF5A1F]">Digital Career?</span>
            </h3>
            <p className="font-inter font-normal text-white/45 max-w-md text-[13px]">
              Download our 2026 Master's Syllabus for a breakdown of 120+ tools.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button className="flex items-center justify-center gap-2 font-inter font-bold text-white text-[14px] px-6 py-3 rounded-xl bg-[#FF5A1F] hover:bg-white hover:text-[#111111] transition-all duration-300">
              Download Syllabus <Download size={16} />
            </button>

            <button className="flex items-center justify-center gap-2 font-inter font-bold text-white text-[14px] px-6 py-3 rounded-xl bg-transparent border border-white/15 hover:bg-white/10 transition-all duration-300">
              Book Free Demo <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}