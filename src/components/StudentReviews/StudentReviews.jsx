import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

// Doubling the array to create a seamless infinite loop
const doubledReviews = [...REVIEWS, ...REVIEWS];

// Custom Quote Icon exactly like the image
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 lg:w-12 lg:h-12 fill-[#FBBF24] opacity-90 drop-shadow-sm">
    <path d="M9 10.5C9 12.433 7.433 14 5.5 14C3.567 14 2 12.433 2 10.5C2 7.462 4.462 5 7.5 5V7C5.567 7 4 8.567 4 10.5C4 10.776 4.045 11.036 4.126 11.284C4.524 10.822 5.163 10.5 5.866 10.5H9ZM20 10.5C20 12.433 18.433 14 16.5 14C14.567 14 13 12.433 13 10.5C13 7.462 15.462 5 18.5 5V7C16.567 7 15 8.567 15 10.5C15 10.776 15.045 11.036 15.126 11.284C15.524 10.822 16.163 10.5 16.866 10.5H20Z" />
  </svg>
);

function ReviewCard({ review }) {
  return (
    <div
      className="shrink-0 flex flex-col items-center text-center bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 relative w-[280px] md:w-[320px] lg:w-[340px] h-[280px] md:h-[320px] group cursor-default"
      style={S}
    >
      {/* Top Left Quote Icon */}
      <div className="absolute top-5 left-5 md:top-6 md:left-6 transition-transform duration-300 group-hover:scale-110">
        <QuoteIcon />
      </div>

      {/* Round Image */}
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[3px] border-white shadow-md z-10 mb-4 bg-gray-100 transition-transform duration-300 group-hover:scale-105">
        <img
          src={review.img}
          alt={review.name}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      </div>

      {/* Name */}
      <h3 className="font-bold text-[16px] md:text-[18px] text-gray-900 tracking-tight leading-tight mb-2 md:mb-3">
        {review.name}
      </h3>

      {/* Review Text */}
      <p className="font-medium text-[13px] md:text-[14px] text-gray-500 leading-relaxed max-w-[280px] line-clamp-5">
        "{review.text}"
      </p>
    </div>
  );
}

export default function StudentReviews() {
  
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

  return (
    <section className="relative w-full py-16 lg:py-24 bg-[#FAFAFA] overflow-hidden selection:bg-orange-500 selection:text-white" style={S}>
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-0">
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16 px-6"
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

        {/* ── Infinite Marquee Viewport ── */}
        <div className="w-full relative py-4">
          
          {/* Edge Fade Masks for Smooth Disappearance */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* The Track (Pauses on Hover) */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            
            <div className="flex gap-4 md:gap-6 px-2 md:px-3">
              {doubledReviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
            
            {/* Render a second exact copy to keep the scroll loop seamless */}
            <div className="flex gap-4 md:gap-6 px-2 md:px-3">
              {doubledReviews.map((review, i) => (
                <ReviewCard key={i + 100} review={review} />
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* ── Custom Infinite Scroll Animation CSS ── */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        /* Base desktop scroll speed */
        .animate-marquee {
          animation: marquee 50s linear infinite; 
        }
        /* Slower on mobile to make it readable */
        @media (max-width: 768px) {
          .animate-marquee { animation-duration: 35s; }
        }
      `}</style>

    </section>
  );
}