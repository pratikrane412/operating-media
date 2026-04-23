import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
//  OPERATING MEDIA — StudentReviews
//  Single-row infinite auto-scrolling marquee, left → right
//  Animation is self-contained — no index.css changes needed
//  Stack: React + Vite + Tailwind CSS v3
// ─────────────────────────────────────────────────────────────────────────────

const REVIEWS = [
  {
    name: "Amit Parithe",
    role: "Digital Marketing Executive",
    rating: 5,
    text: "Shraddha ma'am is too supportive and polite. Very good classes for learning. The practical exposure we get here is unmatched — I got placed within 2 months of completing the course.",
    initials: "A",
    bg: "#F26522",
  },
  {
    name: "Purva Madankar",
    role: "Social Media Manager",
    rating: 5,
    text: "I had a great experience at Operating Media. The best institute for digital marketing training. Staff is so helpful and friendly, they helped me in every situation. Highly recommend!",
    initials: "P",
    bg: "#3AAA35",
  },
  {
    name: "Shahreen Ansari",
    role: "Content Strategist",
    rating: 4,
    text: "Teaching methods are amazing. Polite behaviour towards students and attentive to all. My experience is great. The SEO and Google Ads modules were especially valuable.",
    initials: "S",
    bg: "#2196F3",
  },
  {
    name: "Nitin Pandey",
    role: "Digital Marketing Exec at Google",
    rating: 5,
    text: "I recommend Operating Media's Digital Marketing course. Covers social media, SEO, Website Dev, Google Ads and more. My friends and I strongly think we made the right decision.",
    initials: "N",
    bg: "#9C27B0",
  },
  {
    name: "Gargi Bhave",
    role: "Social Media Lead at Jio",
    rating: 5,
    text: "Operating Media's course was in-depth and covered every relevant detail. They provide study materials and a student portal. The teachers are outstanding and incredibly helpful.",
    initials: "G",
    bg: "#FFB81C",
    textDark: true,
  },
  {
    name: "Yaseen Mirza",
    role: "E-commerce Manager at Amazon",
    rating: 5,
    text: "Very informative course. It helped me set up my business digitally. Now I know how to handle my e-commerce business and profit from it without depending on anyone.",
    initials: "Y",
    bg: "#009688",
  },
  {
    name: "Shiva Manoharan",
    role: "Brand Strategist at Dentsu",
    rating: 5,
    text: "The best digital marketing training available. Top-notch instructors who are highly supportive and student-focused. The placement support was incredibly beneficial — landed my dream job.",
    initials: "S",
    bg: "#E91E63",
  },
  {
    name: "Riya Sharma",
    role: "Performance Marketing Analyst",
    rating: 5,
    text: "Hands-on projects and live ad budget experience made all the difference. I managed real Google and Meta campaigns which gave me immense confidence. Secured a top agency role right after.",
    initials: "R",
    bg: "#607D8B",
  },
];

// ── Google G icon ─────────────────────────────────────────────────────────────
const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

// ── Star rating ───────────────────────────────────────────────────────────────
const StarRating = ({ rating }) => (
  <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        size={13}
        className={i <= rating ? "fill-[#F26522] text-[#F26522]" : "fill-gray-200 text-gray-200"}
        aria-hidden="true"
      />
    ))}
  </div>
);

// ── Single review card ────────────────────────────────────────────────────────
function ReviewCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(242,101,34,0.12)] hover:border-[#F26522]/20 transition-all duration-300 flex flex-col gap-3 mx-3">

      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
            style={{
              background: review.bg,
              color: review.textDark ? "#0D0D0D" : "#ffffff",
            }}
            aria-hidden="true"
          >
            {review.initials}
          </div>
          <div>
            <p className="text-[14px] font-bold text-gray-900 leading-tight">{review.name}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">Google Review</p>
          </div>
        </div>
        <GoogleIcon />
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Text */}
      <p className="text-[13px] leading-relaxed text-gray-500 line-clamp-3 flex-1">
        {review.text}
      </p>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-50 flex items-center justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 truncate mr-2">
          {review.role}
        </span>
        <span className="text-[11px] font-semibold text-[#F26522] shrink-0">★ Verified</span>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────────
export default function StudentReviews() {
  const [paused, setPaused] = useState(false);

  // Duplicate reviews for seamless infinite loop
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <>
      {/* Self-contained keyframe — no index.css needed */}
      <style>{`
        @keyframes om-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .om-marquee-track {
          animation: om-marquee 40s linear infinite;
        }
        .om-marquee-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <section
        className="relative w-full py-5 sm:py-10 lg:py-14 bg-white font-inter overflow-hidden"
        aria-label="Student Reviews"
      >
        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-20 left-1/4 w-[500px] h-[300px] rounded-full blur-[80px]"
            style={{ background: "rgba(242,101,34,0.05)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full blur-[80px]"
            style={{ background: "rgba(255,184,28,0.06)" }}
          />
        </div>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[3px] w-8 rounded-full bg-[#F26522] shrink-0" aria-hidden="true" />
                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#F26522]">
                  Student Reviews
                </span>
              </div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-gray-950">
                Our Students{" "}
                <span
                  style={{
                    background: "linear-gradient(95deg, #F26522 0%, #FFB81C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Love Us
                </span>
              </h2>
              <p className="mt-3 text-[15px] text-gray-500 max-w-md leading-relaxed">
                Real reviews from real students — verified on Google.
              </p>
            </div>

            {/* Right — aggregate */}
            <div className="flex items-center gap-5 shrink-0">
              <div className="text-center">
                <p className="text-[52px] font-black leading-none tracking-tight text-gray-950">
                  4.8<span style={{ color: "#F26522" }}>★</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                  Google Rating
                </p>
              </div>

              <div className="w-px h-16 bg-gray-100" aria-hidden="true" />

              <div className="flex flex-col gap-2">
                {[
                  { dot: "#F26522", label: "1,600+ Students" },
                  { dot: "#FFB81C", label: "93% Placement Rate" },
                  { dot: "#3AAA35", label: "500+ Reviews" },
                ].map(({ dot, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dot }} aria-hidden="true" />
                    <span className="text-[13px] font-semibold text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Marquee track ── */}
        <div
          className="relative z-10 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* The moving track — contains doubled cards for seamless loop */}
          <div className={`flex om-marquee-track${paused ? " paused" : ""}`}>
            {doubled.map((review, i) => (
              <ReviewCard key={`${review.name}-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Left + right fade masks */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 z-20"
          style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-20"
          style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          aria-hidden="true"
        />

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 flex justify-center mt-12"
        >
          <a
            href="https://g.co/kgs/operating-media"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white border-[1.5px] border-[#F26522] text-[#F26522] hover:bg-[#F26522] hover:text-white font-bold text-[15px] px-10 py-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(242,101,34,0.30)]"
          >
            View All Reviews on Google
            <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" aria-hidden="true" />
          </a>
        </motion.div>

      </section>
    </>
  );
}