import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight, Quote } from 'lucide-react';

const S = { fontFamily: "'Satoshi', sans-serif" };

const videos = [
  {
    id: 'VIDEO_ID_1',
    name: 'Simran Kakwani',
    role: 'Digital Marketing Executive',
    company: 'Operating Media Alumni',
    thumb: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=85',
    quote: 'Operating Media changed how I think about digital. Got placed within 2 months.',
    tag: 'Placed ✦',
  },
  {
    id: 'VIDEO_ID_2',
    name: 'Dhanshree Pawar',
    role: 'Performance Marketer',
    company: 'Digital Marketing Institute',
    thumb: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=85',
    quote: "The agency-style training is unlike anything you'll find at regular institutes.",
    tag: 'Top Performer ✦',
  },
  {
    id: 'VIDEO_ID_3',
    name: 'Rasika Karjavkar',
    role: 'SEO Specialist',
    company: 'Operating Media Alumni',
    thumb: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85',
    quote: 'Real projects, real mentors. I built my entire portfolio during the course itself.',
    tag: 'Placed ✦',
  },
  {
    id: 'VIDEO_ID_4',
    name: 'Nishi Chandrakant More',
    role: 'Social Media Strategist',
    company: 'Operating Media Alumni',
    thumb: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=600&q=85',
    quote: 'From zero knowledge to running live campaigns — this course truly delivers.',
    tag: 'Top Performer ✦',
  },
];

function VideoModal({ video, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black transition-colors"
        >
          <X size={16} strokeWidth={2.5} />
        </button>
      </motion.div>
    </motion.div>
  );
}

function VideoCard({ video, index, onPlay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.09, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-col gap-4 group cursor-pointer"
      onClick={() => onPlay(video)}
      style={S}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/14] rounded-2xl overflow-hidden bg-gray-100 shadow-md">
        <img
          src={video.thumb}
          alt={video.name}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ${hovered ? 'scale-105' : 'scale-100'}`}
        />

        {/* Dark overlay */}
        <div className={`absolute inset-0 transition-all duration-400 ${hovered ? 'bg-black/50' : 'bg-black/25'}`} />

        {/* Orange tint */}
        <div className={`absolute inset-0 bg-[#FF5A1F] transition-opacity duration-400 ${hovered ? 'opacity-15' : 'opacity-0'}`} />

        {/* Tag top-left */}
        <div className="absolute top-3 left-3">
          <span
            style={{
              ...S,
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.08em",
              padding: "5px 12px",
              display: "inline-block",
              background: "#FF5A1F",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            {video.tag}
          </span>
        </div>

        {/* Play button center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
            className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-2xl"
          >
            <Play size={22} className="text-[#FF5A1F] ml-1" fill="#FF5A1F" />
          </motion.div>
        </div>

        {/* Bottom quote overlay — always slightly visible, more on hover */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, transparent 100%)",
            padding: "40px 16px 16px",
            opacity: hovered ? 1 : 0.85,
            transform: hovered ? "translateY(0)" : "translateY(4px)",
            transition: "all 0.35s ease",
          }}
        >
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
            <Quote size={13} style={{ color: "#FF5A1F", flexShrink: 0, marginTop: "2px" }} fill="#FF5A1F" />
            <p style={{ ...S, fontWeight: 500, fontSize: "13px", lineHeight: 1.6, color: "rgba(255,255,255,0.95)", fontStyle: "italic", margin: 0 }}>
              {video.quote}
            </p>
          </div>
        </div>

        {/* OM logo watermark bottom-right */}
        <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1">
          <span style={{ ...S, fontWeight: 800, fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff" }}>
            OM
          </span>
        </div>
      </div>

      {/* Name + role */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h4
            style={{
              ...S,
              fontWeight: 800,
              fontSize: "16px",
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
              color: hovered ? '#FF5A1F' : '#030712',
              transition: "color 0.2s",
              margin: 0,
            }}
          >
            {video.name}
          </h4>
          <p style={{ ...S, fontWeight: 500, fontSize: "13px", color: "#6B7280", marginTop: "4px", lineHeight: 1.4 }}>
            {video.role}
          </p>
        </div>
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          className={`mt-0.5 shrink-0 transition-all duration-300 ${hovered ? 'text-[#FF5A1F] translate-x-0.5 -translate-y-0.5' : 'text-gray-300'}`}
        />
      </div>
    </motion.div>
  );
}

export default function LearningSection() {
  const [activeVideo, setActiveVideo] = useState(null);

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
    <>
      <section className="relative bg-white py-16 px-6 overflow-hidden" style={S}>

        {/* Dot grid */}
        <div className="absolute inset-0 z-0 opacity-[0.035] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

        {/* Orange glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF5A1F] opacity-[0.05] blur-[100px] pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex justify-center items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#FF5A1F]" />
              <span style={{ ...S, fontWeight: 800, fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#FF5A1F" }}>
                Student Testimonials
              </span>
              <span className="h-px w-10 bg-[#FF5A1F]" />
            </div>

            <h2
              style={{
                ...S,
                fontWeight: 900,
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                letterSpacing: "-0.04em",
                lineHeight: 1.08,
                color: "#030712",
                marginBottom: "20px",
              }}
            >
              Success{' '}
              <span className="relative inline-block">
                Stories
                <span className="absolute inset-x-0 bottom-1 h-3 bg-[#FF5A1F] opacity-20 rounded-sm -z-10 block" />
              </span>
            </h2>

            <p style={{ ...S, fontWeight: 500, fontSize: "16px", color: "#6B7280", maxWidth: "400px", margin: "0 auto", lineHeight: 1.7 }}>
              Real students. Real results. Hear directly from our alumni.
            </p>
          </motion.div>

          {/* Video grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {videos.map((video, i) => (
              <VideoCard key={video.id} video={video} index={i} onPlay={setActiveVideo} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100"
          >
            <p style={{ ...S, fontWeight: 600, fontSize: "15px", color: "#374151" }}>
              500+ students placed across top agencies & brands
            </p>
            <a
              href="https://www.youtube.com/@operatingmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gray-950 text-white rounded-xl hover:bg-[#FF5A1F] transition-all duration-200"
              style={{ ...S, fontWeight: 700, fontSize: "14px", padding: "14px 28px", whiteSpace: "nowrap" }}
            >
              Watch More Stories
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

        </div>
      </section >

      {/* Modal */}
      < AnimatePresence >
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )
        }
      </AnimatePresence >
    </>
  );
}