import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight, ArrowLeft } from "lucide-react";

const MENTORS = [
  {
    name: "Shraddha Rane",
    role: "Organic Growth & SEO Specialist",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-410.png",
    linkedin: "#",
    bg: "#FFF7ED",
  },
  {
    name: "Harsh Pareek",
    role: "Performance Marketing Head",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-411.png",
    linkedin: "#",
    bg: "#FFF7ED",
  },
  {
    name: "Hemant Mane",
    role: "Search Strategy Director",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/11/WhatsApp-Image-2023-02-19-at-18.38.42-1.png",
    linkedin: "#",
    bg: "#FFF7ED",
  },
  {
    name: "Rahul Singh",
    role: "Media Buying Expert",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/rahul-1-1.png",
    linkedin: "#",
    bg: "#FFF7ED",
  },
  {
    name: "Zahid Shaikh",
    role: "Digital Marketing Trainer",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-413.png",
    linkedin: "#",
    bg: "#FFF7ED",
  },
  {
    name: "Vikram Kamble",
    role: "Digital Marketing Trainer",
    img: "https://www.operatingmedia.com/wp-content/uploads/2025/12/IMG_20251124_042955-1.png",
    linkedin: "#",
    bg: "#FFF7ED",
  },
];

const S = { fontFamily: "'Satoshi', sans-serif" };

function MentorCard({ mentor, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group flex-shrink-0 rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 cursor-default"
      style={{
        width: "clamp(200px, 19vw, 238px)",
        scrollSnapAlign: "start",
      }}
    >
      {/* Photo area */}
      <div
        className="relative overflow-hidden"
        style={{ height: "clamp(220px, 24vw, 270px)", background: mentor.bg }}
      >
        {/* LinkedIn badge */}
        <a
          href={mentor.linkedin}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-lg bg-[#0A66C2] flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
        >
          <Linkedin size={12} className="text-white" strokeWidth={2.5} />
        </a>

        {/* Photo */}
        <img
          src={mentor.img}
          alt={mentor.name}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
      </div>

      {/* Info area */}
      <div className="px-4 py-4 border-t border-gray-50">
        <h3 style={{ ...S, fontWeight: 800, fontSize: "14px", color: "#030712", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
          {mentor.name}
        </h3>
        <p style={{ ...S, fontWeight: 500, fontSize: "12px", color: "#9CA3AF", marginTop: "5px", lineHeight: 1.4 }}>
          {mentor.role}
        </p>
      </div>
    </motion.article >
  );
}

export default function TrainersSection() {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const updateScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    return () => el.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  const scroll = (dir) =>
    scrollRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });

  const PAD = "clamp(20px, 5vw, 72px)";

  return (
    <section className="w-full py-16 bg-white" style={S}>

      {/* Header */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        style={{ paddingLeft: PAD, paddingRight: PAD }}
      >
        {/* Left */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-px w-8 bg-orange-400 rounded-full" />
            <span style={{ ...S, fontWeight: 800, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "#F97316" }}>
              Our Instructors
            </span>
          </div>
          <h2 style={{ ...S, fontWeight: 900, fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)", color: "#030712", lineHeight: 1.1, letterSpacing: "-0.035em", margin: 0 }}>
            Learn from Industry<br />
            <span style={{ background: "linear-gradient(90deg,#F97316,#FBBF24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Experts & Practitioners
            </span>
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 md:items-end">
          <p style={{ ...S, fontWeight: 500, fontSize: "13px", color: "#4B5563", lineHeight: 1.65, maxWidth: "240px" }} className="md:text-right">
            Every trainer is an active industry professional — not just a teacher.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 disabled:opacity-20 transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canRight}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 disabled:opacity-20 transition-all duration-200 cursor-pointer"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel wrapper — overflow visible on section, hidden only on this div */}
      <div style={{ overflowX: "auto", overflowY: "visible", paddingBottom: "12px" }}>
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "16px",
            paddingLeft: PAD,
            paddingRight: PAD,
            scrollSnapType: "x mandatory",
            overflowX: "auto",
            overflowY: "visible",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "8px",
          }}
        >
          {MENTORS.map((m, i) => (
            <MentorCard key={m.name} mentor={m} index={i} />
          ))}

          {/* View all end-cap */}
          <div
            className="flex-shrink-0 flex flex-col items-center justify-center gap-3 opacity-30 hover:opacity-90 transition-opacity duration-200 cursor-pointer"
            style={{ width: 90, paddingRight: "16px", scrollSnapAlign: "start" }}
          >
            <div className="w-11 h-11 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
              <ArrowRight size={15} className="text-gray-400" />
            </div>
            <span style={{ ...S, fontWeight: 900, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#111827", textAlign: "center" }}>
              View All
            </span>
          </div>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}