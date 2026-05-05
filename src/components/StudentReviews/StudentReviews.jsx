import { useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const S = { fontFamily: "'Satoshi', sans-serif" };

const REVIEWS = [
  {
    name: "Umar Siddiki",
    text: "Operating Media is one of Mumbai's well-rated digital marketing training institutes — known for its practical, hands-on courses and supportive trainers. Students often highlight small batch sizes, flexible timings, and job/placement support.",
  },
  {
    name: "Siddhi Kudekar",
    text: "I recently completed my Advanced Digital Marketing course from Operating Media, and it was a great experience. The course covered Google Ads, Meta Ads, SEO, analytics, and many useful tools. I also received a paid internship through the institute's reference.",
  },
  {
    name: "Yogesh Palkar",
    text: "Operating Media provided exceptional support and flexibility, allowing me to continue my learning without interruption. Their faculty is knowledgeable, the course content is well-structured, and the practical approach helped me develop real industry skills.",
  },
  {
    name: "Faijur Rahman",
    text: "After researching multiple institutes in Mumbai, I chose Operating Media for their masters program and it exceeded all my expectations. The trainers are very approachable. Got my first freelancing project even before completing the course.",
  },
  {
    name: "Dhananjay Satpute",
    text: "Finished this course and learned way more than expected. Hemant Sir was experienced, the hands-on projects were actually useful, and I now feel confident running ads, understanding analytics, and creating content that works.",
  },
  {
    name: "Aditya Mhatre",
    text: "Operating Media exceeded my expectations! The training was practical, the instructors were excellent, and the quality of education was truly top-notch. Their placement support was outstanding — I secured a great internship soon after completing the course.",
  },
  {
    name: "Sakshi Kesharwani",
    text: "I am doing Masters in Digital Marketing from Operating Media Borivali. I am learning new trends and tools of digital marketing. The experience is nice and the content is very relevant to current industry needs.",
  },
  {
    name: "Srushti Pednekar",
    text: "Operating Media in Andheri is a great place for digital marketing. Special thanks to Hemant Maane sir who teaches concepts very well. A big thanks to Aniket sir for giving a placement during my ongoing classes.",
  },
  {
    name: "Himanshu Panchal",
    text: "I had an amazing learning experience at Operating Media. Sessions were well-structured, covering SEO, social media, Google Ads, content strategy and analytics. The hands-on projects helped me apply what I learned directly to real campaigns.",
  },
];

const loopedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

const LOGO_URL =
  "https://www.operatingmedia.com/wp-content/uploads/2024/10/OM-Logo.png";

function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const QuoteIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[38px] h-[38px] fill-[#ecab00] opacity-15 group-hover:opacity-35 transition-opacity duration-300"
  >
    <path d="M9 10.5C9 12.433 7.433 14 5.5 14C3.567 14 2 12.433 2 10.5C2 7.462 4.462 5 7.5 5V7C5.567 7 4 8.567 4 10.5C4 10.776 4.045 11.036 4.126 11.284C4.524 10.822 5.163 10.5 5.866 10.5H9ZM20 10.5C20 12.433 18.433 14 16.5 14C14.567 14 13 12.433 13 10.5C13 7.462 15.462 5 18.5 5V7C16.567 7 15 8.567 15 10.5C15 10.776 15.045 11.036 15.126 11.284C15.524 10.822 16.163 10.5 16.866 10.5H20Z" />
  </svg>
);

function Avatar({ name }) {
  return (
    <div className="relative w-11 h-11 shrink-0">
      {/* Initials layer — always rendered underneath */}
      <div className="absolute inset-0 rounded-full bg-[#ecab00] flex items-center justify-center">
        <span
          className="text-white font-black text-[13px] leading-none select-none"
          style={S}
        >
          {getInitials(name)}
        </span>
      </div>
      {/* Logo on top — hides itself on error, revealing initials */}
      <img
        src={LOGO_URL}
        alt="Operating Media"
        className="absolute inset-0 w-full h-full rounded-full object-contain bg-white p-1 border-2 border-gray-200 group-hover:border-[#ecab00]/50 transition-all duration-300"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div
      className="shrink-0 flex flex-col bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.07)] hover:shadow-[0_24px_48px_-12px_rgba(236,171,0,0.18)] hover:-translate-y-2 transition-all duration-500 relative w-[380px] group cursor-default"
      style={S}
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#ecab00]/4 via-transparent to-transparent pointer-events-none" />

      {/* Stars + Quote icon */}
      <div className="relative z-10 flex items-center justify-between mb-[18px]">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} className="fill-[#ecab00] text-[#ecab00]" />
          ))}
        </div>
        <QuoteIcon />
      </div>

      {/* Review text */}
      <p className="relative z-10 font-medium text-[14.5px] text-gray-500 leading-[1.85] italic flex-1 mb-6 line-clamp-4">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="relative z-10 flex items-center gap-3">
        <Avatar name={review.name} />
        <h3 className="font-black text-[15px] text-[#0f172a] leading-tight">
          {review.name}
        </h3>
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
      link.href =
        "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
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

      {/* Header */}
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
          Experiences That Inspire{" "}
          <span className="relative inline-block text-[#ecab00]">
            Confidence
            <svg
              className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ecab00]/35"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
              />
            </svg>
          </span>
        </h2>
      </motion.div>

      {/* Marquee */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#FCFAF2] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#FCFAF2] to-transparent z-10 pointer-events-none" />

        <div className="overflow-hidden py-6">
          <div className="flex w-max gap-[26px] px-6 marquee-track hover:[animation-play-state:paused]">
            {loopedReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .marquee-track {
          animation: marqueeScroll 50s linear infinite;
        }
        @media (max-width: 768px) {
          .marquee-track { animation-duration: 32s; }
        }
      `}</style>
    </section>
  );
}