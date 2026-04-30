import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // Added for premium 5-star rating

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
    text: "I'm really happy with the learning environment at Operating Media. The practical approach helped me grow both personally and professionally.",
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

// Custom Premium Quote Icon
const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-[#ecab00] opacity-20 transition-opacity duration-300 group-hover:opacity-40">
    <path d="M9 10.5C9 12.433 7.433 14 5.5 14C3.567 14 2 12.433 2 10.5C2 7.462 4.462 5 7.5 5V7C5.567 7 4 8.567 4 10.5C4 10.776 4.045 11.036 4.126 11.284C4.524 10.822 5.163 10.5 5.866 10.5H9ZM20 10.5C20 12.433 18.433 14 16.5 14C14.567 14 13 12.433 13 10.5C13 7.462 15.462 5 18.5 5V7C16.567 7 15 8.567 15 10.5C15 10.776 15.045 11.036 15.126 11.284C15.524 10.822 16.163 10.5 16.866 10.5H20Z" />
  </svg>
);

function ReviewCard({ review }) {
  return (
    <div
      className="shrink-0 flex flex-col justify-between bg-white rounded-[2rem] p-7 md:p-8 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(236,171,0,0.2)] hover:border-[#ecab00]/30 hover:-translate-y-2 transition-all duration-500 relative w-[300px] md:w-[360px] h-[320px] md:h-[340px] group cursor-default overflow-hidden"
      style={S}
    >
      {/* Background Subtle Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#ecab00]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Section: Stars & Quote Icon */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#ecab00] text-[#ecab00]" />
          ))}
        </div>
        <div className="absolute -top-2 -right-2">
          <QuoteIcon />
        </div>
      </div>

      {/* Review Text */}
      <p className="relative z-10 font-medium text-[15px] md:text-[16px] text-gray-600 leading-relaxed line-clamp-5 flex-1 italic">
        "{review.text}"
      </p>

      {/* Bottom Section: User Profile */}
      <div className="relative z-10 flex items-center gap-4 mt-6 pt-6 border-t border-gray-50 group-hover:border-[#ecab00]/20 transition-colors duration-300">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-[#ecab00] transition-colors duration-300 shadow-sm shrink-0">
          <img
            src={review.img}
            alt={review.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-[16px] text-[#0A0F1C] leading-tight">
            {review.name}
          </h3>
          <p className="font-semibold text-[12px] text-[#ecab00] uppercase tracking-wide mt-0.5">
            {review.role}
          </p>
        </div>
      </div>
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
    <section className="relative w-full py-16 lg:py-24 bg-[#FCFAF2] overflow-hidden selection:bg-[#ecab00] selection:text-[#0A0F1C]" style={S}>
      
      {/* ── Subtle Background Line Shade (Matches Theme) ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* ── Glow Orbs ── */}
      <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full bg-[#ecab00]/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-[#0A0F1C]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-0">
        
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16 px-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ecab00]/30 bg-[#ecab00]/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#ecab00] animate-pulse" />
            <span className="font-bold text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-[#ecab00]">
              Testimonials
            </span>
          </div>

          {/* Heading - Exactly 46px on desktop */}
          <h2 className="font-black text-[2.2rem] sm:text-[2.8rem] lg:text-[46px] leading-[1.1] tracking-tight text-[#0A0F1C]">
            Experiences That Inspire <span className="text-[#ecab00] relative inline-block">Confidence</span>
          </h2>
        </motion.div>

        {/* ── Infinite Marquee Viewport ── */}
        <div className="w-full relative py-6">
          
          {/* Edge Fade Masks tailored to #FCFAF2 background */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#FCFAF2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#FCFAF2] to-transparent z-10 pointer-events-none" />

          {/* The Track (Pauses on Hover) */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            
            <div className="flex gap-5 md:gap-8 px-2.5 md:px-4">
              {doubledReviews.map((review, i) => (
                <ReviewCard key={`first-${i}`} review={review} />
              ))}
            </div>
            
            {/* Render a second exact copy to keep the scroll loop seamless */}
            <div className="flex gap-5 md:gap-8 px-2.5 md:px-4">
              {doubledReviews.map((review, i) => (
                <ReviewCard key={`second-${i}`} review={review} />
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
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

    </section>
  );
}