import React, { useRef, useState, useEffect } from "react";
import { useModal } from "../../context/ModalContext";

// ── Icons (Pixel-Perfect) ─────────
const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const Download = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
  </svg>
);

// Green Circle Checkmark matching your image
const CheckCircleIcon = () => (
  <svg className="w-[18px] h-[18px] shrink-0 text-[#22C55E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

// ── Intersection Observer Hook ─────────
function useInView(t = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold: t }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [t]);
  return [ref, v];
}

// ── Course Data (Updated with Blue #2563EB Tag & Black Headings) ──
const COURSES = [
  {
    id: "masters",
    title: "Master's in Digital Marketing",
    desc: "Kickstart your digital career with hands-on training in SEO, Google Ads, social media marketing, and real-world projects.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
    badgeText: "Master's",
    
    // Updated Tag Colors
    topStripBg: "bg-[#2563EB]", 
    topStripText: "text-white",
    
    // Kept Border Colors
    borderColor: "border-[#2563eb]/60 hover:border-[#2563eb]",
    shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(132,204,22,0.3)]",
    titleColor: "text-[#0F172A]", // Set to Black
    
    features: [
      "8 Months / 200 Hours",
      "(AI) in Digital Marketing",
      "Shopify Shop Creation",
      "Funnel Marketing"
    ]
  },
  {
    id: "advanced",
    title: "Advanced Diploma in Digital Marketing",
    desc: "Kickstart your digital career with hands-on training in SEO, Google Ads, social media marketing, and real-world projects.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    badgeText: "Advance Diploma",
    
    // Updated Tag Colors
    topStripBg: "bg-[#2563EB]", 
    topStripText: "text-white",
    
    // Kept Border Colors
    borderColor: "border-[#2563eb]/60 hover:border-[#2563eb]",
    shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(236,171,0,0.3)]",
    titleColor: "text-[#0F172A]", // Set to Black
    
    features: [
      "4 Months / 200 Hours",
      "(AI) in Digital Marketing",
      "Shopify Shop Creation",
      "Funnel Marketing"
    ]
  },
  {
    id: "diploma",
    title: "Diploma in Digital Marketing",
    desc: "Kickstart your digital career with hands-on training in SEO, Google Ads, social media marketing, and real-world projects.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    badgeText: "Diploma",
    
    // Updated Tag Colors
    topStripBg: "bg-[#2563EB]", 
    topStripText: "text-white",
    
    // Kept Border Colors
    borderColor: "border-[#2563eb]/60 hover:border-[#2563eb]",
    shadowHover: "hover:shadow-[0_20px_40px_-15px_rgba(212,225,40,0.3)]",
    titleColor: "text-[#0F172A]", // Set to Black
    
    features: [
      "2-3 Months / 200 Hours",
      "(AI) in Digital Marketing",
      "Shopify Shop Creation",
      "Funnel Marketing"
    ]
  }
];

// ── Course Card Component ──────────────────────────────────────
function CourseCard({ course, inView, index }) {
  const { openBrochureModal } = useModal();
  return (
    <div
      className={`group bg-white rounded-[2rem] border-[1px] transition-all duration-500 ease-out overflow-hidden flex flex-col shadow-sm transform hover:-translate-y-2
        ${course.borderColor} ${course.shadowHover} 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* ── TOP BADGE STRIP (Blue #2563EB, White Text, 18px Font) ── */}
      <div className={`w-full py-3 text-center font-bold text-[18px] tracking-wide shadow-sm z-10 relative ${course.topStripBg} ${course.topStripText}`}>
        {course.badgeText}
      </div>

      {/* ── Image Section ── */}
      <div className="relative h-[200px] w-full overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-[8s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* ── Content Section ── */}
      <div className="pt-8 pb-7 px-6 flex flex-col flex-1 bg-white relative z-20">
        
        {/* Title & Desc */}
        <div className="text-center mb-7">
          <h3 className={`font-black text-[20px] md:text-[22px] leading-snug mb-3 transition-colors ${course.titleColor}`}>
            {course.title}
          </h3>
          <p className="font-medium text-[14px] text-gray-500 leading-relaxed">
            {course.desc}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-3 mb-8 flex-1">
          {course.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircleIcon />
              <span className="font-semibold text-[13px] text-gray-700 leading-tight pt-[1px]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100 mb-6" />

        {/* ── Buttons Section ── */}
        <div className="flex flex-col xl:flex-row gap-3 w-full mt-auto">
          {/* Primary Button */}
          <a href="/contact-us/">
          <button className="flex-1 w-full flex items-center justify-center gap-1.5 py-3.5 px-3 rounded-xl bg-[#FFB800] hover:bg-[#F5A500] text-gray-900 font-extrabold text-[14px] transition-all duration-300 active:scale-95 shadow-sm group/btn">
            <span className="whitespace-nowrap">Book Free Demo</span>
            <ArrowRight />
          </button>
          </a>
          
          {/* Secondary Button */}
          <button 
            onClick={openBrochureModal}
            className="flex-1 w-full flex items-center justify-center gap-1.5 py-3.5 px-3 rounded-xl bg-white border-2 border-[#FFB800] text-[#D97706] hover:bg-[#FFFBEB] font-extrabold text-[14px] transition-all duration-300 active:scale-95 group/btn"
          >
            <span className="whitespace-nowrap">Download Brochure</span>
            <Download />
          </button>
        </div>

      </div>
    </div>
  );
}

// ── Main Section Component ───────────────────────────────────
export default function CoursesSection() {
  const [ref, inView] = useInView(0.1);

  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section 
      ref={ref} 
      className="relative w-full bg-[#FAFAFA] pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden selection:bg-[#2563EB] selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ── Header Area ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 lg:mb-20">
          
          <div className={`lg:w-[60%] transition-all duration-[800ms] ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="font-black text-[32px] md:text-[38px] lg:text-[46px] leading-[1.15] tracking-tight text-[#0F172A]">
              Master Digital Marketing <br className="hidden md:block" />
              Through Hands-On <br className="hidden md:block" />
              <span className="relative inline-block text-[#ECAB00]">
                Practical Training.
                {/* Blue Animated Underline Effect */}
                <svg className={`absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/30 transition-all duration-1000 ease-out delay-500 ${inView ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} viewBox="0 0 100 20" preserveAspectRatio="none" style={{ transformOrigin: 'left' }}>
                  <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
          </div>

          <div className={`lg:w-[40%] text-left lg:text-right pb-1 transition-all duration-[800ms] ease-out delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-medium text-[16px] md:text-[18px] text-gray-500 leading-relaxed lg:ml-auto max-w-[500px]">
              Master in-demand digital marketing skills with hands-on training, live projects, and expert mentorship, empowering you to build a successful career.
            </p>
          </div>

        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 xl:gap-10">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} inView={inView} index={i} />
          ))}
        </div>

      </div>



    </section>
  );
}