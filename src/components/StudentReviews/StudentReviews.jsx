import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const S = { fontFamily: "'Satoshi', sans-serif" };

const REVIEWS = [
  {
    name: "Rohit S.",
    role: "Performance Marketer",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-411.png",
    text: "The practical training and live projects helped me understand real digital marketing. I am now confident and job-ready immediately after completing the course.",
  },
  {
    name: "Neha Patil",
    role: "SEO Specialist",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-410.png",
    text: "I'm really happy with the learning environment at Operating Media. The practical approach helped my child grow both personally and professionally.",
  },
  {
    name: "Aarav Kumar",
    role: "Social Media Manager",
    img: "https://www.operatingmedia.com/wp-content/uploads/2025/12/IMG_20251124_042955-1.png",
    text: "The live projects and expert guidance gave me real industry exposure. Every session was practical and focused on building real skills.",
  },
  {
    name: "Simran Singh",
    role: "Digital Entrepreneur",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/11/WhatsApp-Image-2023-02-19-at-18.38.42-1.png",
    text: "Operating Media helped me scale my business online. I learned ads, social media, and lead generation with real measurable results.",
  },
  {
    name: "Aditya M.",
    role: "Media Buyer",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-413.png",
    text: "The trainers are highly supportive. The course built my confidence and skills to run successful high-budget ad campaigns.",
  },
];

// Custom Quote Icon exactly like the image
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#FBBF24] opacity-90 drop-shadow-sm">
    <path d="M9 10.5C9 12.433 7.433 14 5.5 14C3.567 14 2 12.433 2 10.5C2 7.462 4.462 5 7.5 5V7C5.567 7 4 8.567 4 10.5C4 10.776 4.045 11.036 4.126 11.284C4.524 10.822 5.163 10.5 5.866 10.5H9ZM20 10.5C20 12.433 18.433 14 16.5 14C14.567 14 13 12.433 13 10.5C13 7.462 15.462 5 18.5 5V7C16.567 7 15 8.567 15 10.5C15 10.776 15.045 11.036 15.126 11.284C15.524 10.822 16.163 10.5 16.866 10.5H20Z" />
  </svg>
);

function ReviewCard({ review }) {
  return (
    <div
      className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.12)] transition-shadow duration-300 relative w-full h-[320px] max-w-[340px]"
      style={S}
    >
      {/* Top Left Quote Icon */}
      <div className="absolute top-6 left-6">
        <QuoteIcon />
      </div>

      {/* Round Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-white shadow-md z-10 mb-4 bg-gray-100">
        <img
          src={review.img}
          alt={review.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* Name */}
      <h3 className="font-bold text-[18px] text-gray-900 tracking-tight leading-tight mb-3">
        {review.name}
      </h3>

      {/* Review Text */}
      <p className="font-medium text-[14px] text-gray-500 leading-relaxed max-w-[280px] line-clamp-5">
        "{review.text}"
      </p>
    </div>
  );
}

export default function StudentReviews() {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

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

  // Handle Responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => 
        (prev + cardsToShow) >= REVIEWS.length ? 0 : prev + cardsToShow
      );
    }, 5000); // changes every 5 seconds
    return () => clearInterval(timer);
  }, [cardsToShow]);

  const totalPages = Math.ceil(REVIEWS.length / cardsToShow);
  const currentPage = Math.floor(startIndex / cardsToShow);

  const visibleReviews = REVIEWS.slice(startIndex, startIndex + cardsToShow);

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFAFA] overflow-hidden selection:bg-orange-500 selection:text-white" style={S}>
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center px-6 py-1.5 rounded-full border border-orange-300 mb-5 bg-white shadow-sm">
            <span className="font-bold text-[12px] uppercase tracking-widest text-orange-500">
              Testimonials
            </span>
          </div>

          <h2 className="font-black text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] tracking-tight text-gray-900">
            Experiences That Inspire <span className="text-[#FFB800]">Confidence</span>
          </h2>
        </motion.div>

        {/* ── Cards Viewport ── */}
        <div className="w-full flex justify-center mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center gap-6 lg:gap-10 w-full"
            >
              {visibleReviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Custom Dots Pagination ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button 
                key={i}
                onClick={() => setStartIndex(i * cardsToShow)}
                className={`flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${currentPage === i ? 'w-8 h-8 border-[1.5px] border-[#FFB800]' : 'w-8 h-8'}`}
              >
                <div className={`rounded-full transition-all duration-300 ${currentPage === i ? 'w-2 h-2 bg-[#FFB800]' : 'w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400'}`} />
              </button>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}