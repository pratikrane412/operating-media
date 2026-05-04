import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

// Triple so the seamless loop always has enough cards visible
const loopedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

const QuoteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-10 h-10 fill-[#ecab00] opacity-15 group-hover:opacity-35 transition-opacity duration-300"
  >
    <path d="M9 10.5C9 12.433 7.433 14 5.5 14C3.567 14 2 12.433 2 10.5C2 7.462 4.462 5 7.5 5V7C5.567 7 4 8.567 4 10.5C4 10.776 4.045 11.036 4.126 11.284C4.524 10.822 5.163 10.5 5.866 10.5H9ZM20 10.5C20 12.433 18.433 14 16.5 14C14.567 14 13 12.433 13 10.5C13 7.462 15.462 5 18.5 5V7C16.567 7 15 8.567 15 10.5C15 10.776 15.045 11.036 15.126 11.284C15.524 10.822 16.163 10.5 16.866 10.5H20Z" />
  </svg>
);

function ReviewCard({ review }) {
  return (
    <div
      className="shrink-0 flex flex-col bg-white rounded-[2rem] p-7 md:p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_48px_-12px_rgba(236,171,0,0.18)] hover:-translate-y-2 transition-all duration-500 relative w-[300px] md:w-[360px] group cursor-default"
      style={S}
    >
      {/* Subtle hover glow overlay */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#ecab00]/4 via-transparent to-transparent pointer-events-none" />

      {/* Stars + Quote icon */}
      <div className="relative z-10 flex items-center justify-between mb-5">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} className="fill-[#ecab00] text-[#ecab00]" />
          ))}
        </div>
        <QuoteIcon />
      </div>

      {/* Review text — no fixed height, no line-clamp, no overflow */}
      <p className="relative z-10 font-medium text-[14px] md:text-[15px] text-gray-500 leading-[1.8] italic flex-1 mb-7">
        "{review.text}"
      </p>

      {/* Author — no border-t, just visual separation via spacing */}
      <div className="relative z-10 flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-gray-100 group-hover:ring-[#ecab00]/30 transition-all duration-300 shrink-0">
          <img
            src={review.img}
            alt={review.name}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>
        <div>
          <h3 className="font-black text-[15px] text-[#0f172a] leading-tight">{review.name}</h3>
          <p className="font-bold text-[11px] text-[#ecab00] uppercase tracking-widest mt-0.5">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function StudentReviews() {
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
      className="relative w-full py-16 lg:py-24 bg-[#FCFAF2] overflow-hidden selection:bg-[#ecab00] selection:text-[#0f172a]"
      style={S}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full bg-[#ecab00]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] rounded-full bg-[#0f172a]/4 blur-[120px] pointer-events-none" />

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16 px-6 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ecab00]/30 bg-[#ecab00]/10 mb-6">
          <span className="h-2 w-2 rounded-full bg-[#ecab00] animate-pulse" />
          <span className="font-bold text-[11px] uppercase tracking-[0.18em] text-[#ecab00]">
            Testimonials
          </span>
        </div>

        <h2 className="font-black text-[2rem] sm:text-[2.6rem] lg:text-[46px] leading-[1.1] tracking-tight text-[#0f172a]">
          Experiences That Inspire{' '}
          <span className="relative inline-block text-[#ecab00]">
            Confidence
            <svg
              className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ecab00]/35"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
            </svg>
          </span>
        </h2>
      </motion.div>

      {/* ── Marquee ── */}
      <div className="relative w-full">

        {/* Left fade mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-r from-[#FCFAF2] to-transparent z-10 pointer-events-none" />
        {/* Right fade mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-l from-[#FCFAF2] to-transparent z-10 pointer-events-none" />

        {/*
          overflow-hidden is on this inner wrapper only, with py-6 padding
          so the hover lift (translate-y) is never clipped by the edge.
        */}
        <div className="overflow-hidden py-6">
          <div className="flex w-max gap-6 md:gap-7 px-6 marquee-track hover:[animation-play-state:paused]">
            {loopedReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          /* Scroll exactly 1/3 of the total width (one full set of REVIEWS) */
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .marquee-track {
          animation: marqueeScroll 45s linear infinite;
        }
        @media (max-width: 768px) {
          .marquee-track { animation-duration: 30s; }
        }
      `}</style>
    </section>
  );
}