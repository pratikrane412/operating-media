import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Course/Mentor Data ──
const MENTORS = [
  {
    name: "Shraddha Rane",
    desc: "Lorem Ipsum is simply dummy",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-410.png",
    themeClass: "bg-[#FCD2A1] border-[#FCD2A1]",
    gradientClass: "from-[#FFF6EE] to-[#FDE7CF]",
  },
  {
    name: "Harsh Pareek",
    desc: "Lorem Ipsum is simply dummy",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-411.png",
    themeClass: "bg-[#F3D779] border-[#F3D779]",
    gradientClass: "from-[#FEFBF2] to-[#F8EBB5]",
  },
  {
    name: "Hemant Mane",
    desc: "Lorem Ipsum is simply dummy",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/11/WhatsApp-Image-2023-02-19-at-18.38.42-1.png",
    themeClass: "bg-[#EEFA79] border-[#EEFA79]",
    gradientClass: "from-[#FCFEE5] to-[#F6FCB2]",
  },
  {
    name: "Zahid Shaikh",
    desc: "Lorem Ipsum is simply dummy",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-413.png",
    themeClass: "bg-[#D3FC91] border-[#D3FC91]",
    gradientClass: "from-[#F7FEE9] to-[#E6FDBE]",
  },
];

// ── Card Component ──
function MentorCard({ mentor }) {
  return (
    <div
      className={`group flex flex-col rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] cursor-default overflow-hidden w-full max-w-[300px] ${mentor.themeClass}`}
    >
      {/* ── Photo Area (Gradient Top) ── */}
      <div className={`relative h-[260px] sm:h-[280px] w-full bg-gradient-to-b ${mentor.gradientClass} overflow-hidden rounded-t-2xl`}>
        <img
          src={mentor.img}
          alt={mentor.name}
          className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* ── Info Area (Solid Bottom) ── */}
      <div className={`px-4 py-6 text-center ${mentor.themeClass}`}>
        <h3 className="font-bold text-[19px] text-gray-900 tracking-tight leading-tight mb-1.5">
          {mentor.name}
        </h3>
        <p className="font-medium text-[13px] text-gray-600 opacity-90">
          {mentor.desc}
        </p>
      </div>
    </div>
  );
}

export default function TrainersSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4); // Default to Desktop

  // Inject Satoshi font dynamically
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
      if (window.innerWidth < 640) setCardsToShow(1); // Mobile: 1 card
      else if (window.innerWidth < 1024) setCardsToShow(2); // Tablet: 2 cards
      else if (window.innerWidth < 1280) setCardsToShow(3); // Laptop: 3 cards
      else setCardsToShow(4); // Desktop: 4 cards
    };

    handleResize(); // Set initial
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

  // Get exactly the cards we need to show right now without overflow
  const visibleCards = MENTORS.slice(startIndex, startIndex + cardsToShow);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden selection:bg-orange-500 selection:text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>

      {/* ── Header ── */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center mb-10 lg:mb-14 px-6"
      >
        <div className="inline-flex items-center justify-center px-5 py-1.5 rounded-full border border-orange-400 mb-5 shadow-sm">
          <span className="font-bold text-[12px] text-orange-500 tracking-wide uppercase">
            Industry Expert Mentors
          </span>
        </div>

        <h2 className="font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-gray-900">
          Learn from Real <span className="text-[#FFB800]">Industry Professionals</span>
        </h2>
      </motion.div>

      {/* ── Main Controlled Carousel Area (No Cut Offs) ── */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-center px-4 sm:px-6">
        
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={startIndex === 0}
          className={`hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-orange-300 text-orange-500 hover:bg-orange-50 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none mr-4 lg:mr-8`}
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>

        {/* ── Exact Fit Container (Framer Motion Animated) ── */}
        {/* Instead of scrolling, we replace the grid content smoothly */}
        <div className="flex-1 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex} // Re-animates when startIndex changes
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center gap-6 lg:gap-8 w-full"
            >
              {visibleCards.map((mentor, i) => (
                <MentorCard key={i} mentor={mentor} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={startIndex + cardsToShow >= MENTORS.length}
          className={`hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full border border-orange-300 text-orange-500 hover:bg-orange-50 active:scale-95 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none ml-4 lg:ml-8`}
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Image-Style Pagination Dots ── */}
      {/* We only render dots if there is more than 1 page */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, i) => (
            <div 
              key={i} 
              className={`flex items-center justify-center rounded-full transition-all duration-300 ${currentPage === i ? 'w-6 h-6 border border-yellow-400' : 'w-6 h-6'}`}
            >
              <div className={`rounded-full transition-all duration-300 ${currentPage === i ? 'w-1.5 h-1.5 bg-yellow-500' : 'w-1.5 h-1.5 bg-gray-300'}`} />
            </div>
          ))}
        </div>
      )}

    </section>
  );
}