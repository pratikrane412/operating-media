import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight, ArrowLeft, Clock } from "lucide-react";

const MENTORS = [
  {
    name: "Shraddha Rane",
    role: "Organic Growth & SEO Specialist",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-410.png",
    linkedin: "#",
    accent: "#F97316",
    bg: "#FFF7ED",
  },
  {
    name: "Harsh Pareek",
    role: "Performance Marketing Head",
    
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-411.png",
    linkedin: "#",
    accent: "#F97316",
    bg: "#FFF7ED",
  },
  {
    name: "Hemant Mane",
    role: "Search Strategy Director",
  
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/11/WhatsApp-Image-2023-02-19-at-18.38.42-1.png",
    linkedin: "#",
    accent: "#F97316",
    bg: "#FFF7ED",
  },
  {
    name: "Rahul Singh",
    role: "Media Buying Expert",
   
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/rahul-1-1.png",
    linkedin: "#",
    accent: "#F97316",
    bg: "#FFF7ED",
  },
  {
    name: "Zahid Shaikh",
    role: "Digital Marketing Trainer",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/zahid-shaikh.png",
    linkedin: "#",
    accent: "#F97316",
    bg: "#FFF7ED",
  },
  {
    name: "Vikram Kamble",
    role: "Digital Marketing Trainer",
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/vikram-kamble.png",
    linkedin: "#",
    accent: "#F97316",
    bg: "#FFF7ED",
  },
];

function MentorCard({ mentor, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group flex-shrink-0 rounded-2xl border border-gray-100 bg-white
        overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-200
        transition-all duration-300 hover:-translate-y-1 cursor-default"
      style={{ width: "clamp(200px, 19vw, 238px)" }}
    >
      {/* ── Photo area ── */}
      <div
        className="relative overflow-hidden"
        style={{ height: "clamp(220px, 24vw, 270px)", background: mentor.bg }}
      >
    
        {/* LinkedIn badge */}
        <a
          href={mentor.linkedin}
          onClick={e => e.stopPropagation()}
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-lg bg-[#0A66C2]
            flex items-center justify-center shadow-md
            hover:scale-110 transition-transform duration-200"
        >
          <Linkedin size={12} className="text-white" strokeWidth={2.5} />
        </a>

        {/* Photo — full cover, face centered */}
        <img
          src={mentor.img}
          alt={mentor.name}
          className="w-full h-full object-cover object-top
            group-hover:scale-[1.03] transition-transform duration-500"
        />

        {/* Bottom fade for readability */}
        <div className="absolute bottom-0 left-0 right-0 h-16
          bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
      </div>

      {/* ── Info area ── */}
      <div className="px-4 py-4 border-t border-gray-50">

        {/* Name */}
        <h3 className="text-[14px] font-extrabold text-gray-950 leading-tight tracking-tight">
          {mentor.name}
        </h3>

        {/* Role */}
        <p className="text-[11.5px] text-gray-400 mt-1 leading-snug font-medium">
          {mentor.role}
        </p>

  

      </div>
    </motion.article>
  );
}

export default function TrainersSection() {
  const scrollRef = useRef(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

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
    <section className="w-full py-16 bg-white overflow-hidden">

      {/* ── Header ── */}
      <div
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        style={{ paddingLeft: PAD, paddingRight: PAD }}
      >
        {/* Left */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="h-px w-8 bg-orange-400 rounded-full" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-orange-500">
              Our Instructors
            </span>
          </div>
          <h2
            className="font-black text-gray-950 leading-[1.1] tracking-tight"
            style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)" }}
          >
            Learn from Industry<br />
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Experts & Practitioners
            </span>
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 md:items-end">
          <p className="text-[13px] text-gray-600 leading-relaxed max-w-[240px] md:text-right">
            Every trainer is an active industry professional — not just a teacher.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              disabled={!canLeft}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center
                justify-center text-gray-600 hover:border-orange-400 hover:text-orange-500
                hover:bg-orange-50 disabled:opacity-20 transition-all duration-200 cursor-pointer"
            >
              <ArrowLeft size={15} />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={!canRight}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center
                justify-center text-gray-600 hover:border-orange-400 hover:text-orange-500
                hover:bg-orange-50 disabled:opacity-20 transition-all duration-200 cursor-pointer"
            >
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Carousel ── */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto"
        style={{
          paddingLeft: PAD,
          paddingRight: PAD,
          scrollSnapType: "x mandatory",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {MENTORS.map((m, i) => (
          <MentorCard key={m.name} mentor={m} index={i} />
        ))}

        {/* View all end-cap */}
        <div
          className="flex-shrink-0 flex flex-col items-center justify-center gap-3
            opacity-30 hover:opacity-90 transition-opacity duration-200 cursor-pointer pr-4"
          style={{ width: 90 }}
        >
          <div className="w-11 h-11 rounded-full border-2 border-dashed border-gray-300
            flex items-center justify-center">
            <ArrowRight size={15} className="text-gray-400" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-900 text-center">
            View All
          </span>
        </div>
      </div>

      <style>{`.scrollbar-hide::-webkit-scrollbar{display:none}`}</style>
    </section>
  );
}