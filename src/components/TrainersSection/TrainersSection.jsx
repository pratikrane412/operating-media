import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, GraduationCap, Linkedin } from "lucide-react";

// ── Shared Image & Base Data ──
const DEFAULT_IMAGE = "/images/Harsh-Ibraine.webp";

// Add up to 8 mentors here.
const MENTORS = [
  { name: "Shraddha Rane", role: "Digital Marketing Expert", img: DEFAULT_IMAGE },
  { name: "Harsh Pareek", role: "SEO & Growth Strategist", img: DEFAULT_IMAGE },
  { name: "Hemant Mane", role: "Performance Marketing Lead", img: DEFAULT_IMAGE },
  { name: "Zahid Shaikh", role: "Social Media Specialist", img: DEFAULT_IMAGE },
  { name: "Pooja Sharma", role: "Content Strategy Head", img: DEFAULT_IMAGE },
  { name: "Rahul Verma", role: "E-Commerce Expert", img: DEFAULT_IMAGE },
  { name: "Amit Singh", role: "Analytics Lead", img: DEFAULT_IMAGE },
  { name: "Sneha Patil", role: "Brand Manager", img: DEFAULT_IMAGE },
];

// ── Ultra-Premium Full-Bleed Card Component ──
function MentorCard({ mentor }) {
  return (
    <div className="group flex flex-col rounded-[24px] bg-white border border-gray-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(236,171,0,0.25)] hover:border-[#ecab00]/40 transition-all duration-500 cursor-default overflow-hidden w-full max-w-[290px] mx-auto relative">
      
      {/* ── Photo Area (Full Bleed Object Cover) ── */}
      <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden bg-gray-100">
        <img
          src={mentor.img}
          alt={mentor.name}
          // Changed to object-cover so it completely fills the space without weird borders
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-[8s] ease-out"
        />
        
        {/* Dark Overlay that rises on hover to make text/icons pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hidden LinkedIn Icon that pops up on hover (Premium Touch) */}
        <div className="absolute bottom-4 right-4 bg-[#ecab00] p-2.5 rounded-full text-[#0f172a] translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg cursor-pointer">
          <Linkedin size={18} fill="currentColor" strokeWidth={1} />
        </div>
      </div>

      {/* ── Info Area ── */}
      <div className="px-6 py-6 text-center bg-white relative z-20">
        <h3 className="font-black text-[20px] md:text-[22px] text-[#0f172a] tracking-tight leading-tight mb-1 transition-colors group-hover:text-[#ecab00]">
          {mentor.name}
        </h3>
        <p className="font-bold text-[12px] uppercase tracking-widest text-[#ecab00]">
          {mentor.role}
        </p>
      </div>
      
    </div>
  );
}

export default function TrainersSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  // Inject Satoshi font
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  // Update cards per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1); // Mobile
      else if (window.innerWidth < 1024) setCardsToShow(2); // Tablet
      else if (window.innerWidth < 1280) setCardsToShow(3); // Laptop
      else setCardsToShow(4); // Large Desktop
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(MENTORS.length / cardsToShow);
  const currentPage = Math.floor(startIndex / cardsToShow);

  const nextSlide = () => {
    if (startIndex + cardsToShow < MENTORS.length) {
      setStartIndex((prev) => prev + cardsToShow);
    }
  };

  const prevSlide = () => {
    if (startIndex - cardsToShow >= 0) {
      setStartIndex((prev) => prev - cardsToShow);
    }
  };

  const visibleCards = MENTORS.slice(startIndex, startIndex + cardsToShow);

  return (
    <section 
      className="relative w-full py-16 lg:py-24 bg-[#FAFCFF] overflow-hidden selection:bg-[#ecab00] selection:text-[#0f172a]" 
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── Background Grid ── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* ── Header ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center mb-12 lg:mb-16 px-6"
      >
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-5">
          <GraduationCap size={16} className="text-[#ecab00]" strokeWidth={2.5} />
          <span className="font-bold text-[11px] text-[#0f172a] uppercase tracking-widest">
            Industry Expert Mentors
          </span>
        </div>

        {/* Fixed 46px Desktop Heading */}
        <h2 className="font-black text-[32px] md:text-[38px] lg:text-[46px] leading-[1.1] tracking-tight text-[#0f172a]">
          Learn from Real <br className="block sm:hidden"/>
          <span className="text-[#ecab00]">Industry Professionals.</span>
        </h2>
      </motion.div>

      {/* ── Carousel Area ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center px-4 sm:px-6">
        
        <div className="flex w-full items-center justify-center">
          
          {/* Left Arrow (Desktop/Tablet) */}
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="hidden sm:flex shrink-0 items-center justify-center w-14 h-14 rounded-full border border-gray-200 bg-white text-[#0f172a] hover:bg-[#ecab00] hover:text-[#0f172a] hover:border-[#ecab00] hover:shadow-md active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none mr-4 lg:mr-8 shadow-sm"
          >
            <ChevronLeft size={28} strokeWidth={2} />
          </button>

          {/* ── Animated Card Grid ── */}
          <div className="flex-1 w-full flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`grid gap-6 lg:gap-8 w-full max-w-[1250px] mx-auto ${
                  cardsToShow === 1 ? 'grid-cols-1' : 
                  cardsToShow === 2 ? 'grid-cols-2' : 
                  cardsToShow === 3 ? 'grid-cols-3' : 'grid-cols-4'
                }`}
              >
                {visibleCards.map((mentor, i) => (
                  <MentorCard key={`${startIndex}-${i}`} mentor={mentor} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow (Desktop/Tablet) */}
          <button
            onClick={nextSlide}
            disabled={startIndex + cardsToShow >= MENTORS.length}
            className="hidden sm:flex shrink-0 items-center justify-center w-14 h-14 rounded-full border border-gray-200 bg-white text-[#0f172a] hover:bg-[#ecab00] hover:text-[#0f172a] hover:border-[#ecab00] hover:shadow-md active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none ml-4 lg:ml-8 shadow-sm"
          >
            <ChevronRight size={28} strokeWidth={2} />
          </button>

        </div>

        {/* ── Mobile Navigation Controls (Dots & Arrows) ── */}
        <div className="flex sm:hidden items-center justify-between w-full max-w-[280px] mt-10">
          <button
            onClick={prevSlide}
            disabled={startIndex === 0}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white text-[#0f172a] hover:bg-[#ecab00] hover:text-[#0f172a] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm"
          >
            <ChevronLeft size={22} strokeWidth={2} />
          </button>

          {totalPages > 1 && (
            <div className="flex items-center gap-2.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <div 
                  key={i} 
                  className={`transition-all duration-300 rounded-full ${currentPage === i ? 'w-6 h-2 bg-[#ecab00]' : 'w-2 h-2 bg-gray-300'}`}
                />
              ))}
            </div>
          )}

          <button
            onClick={nextSlide}
            disabled={startIndex + cardsToShow >= MENTORS.length}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 bg-white text-[#0f172a] hover:bg-[#ecab00] hover:text-[#0f172a] disabled:opacity-30 disabled:pointer-events-none transition-all shadow-sm"
          >
            <ChevronRight size={22} strokeWidth={2} />
          </button>
        </div>

      </div>

    </section>
  );
}