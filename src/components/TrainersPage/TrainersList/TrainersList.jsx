import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const trainers = [
  {
    name: "Shraddha Rane",
    role: "Corporate Trainer & Digital Strategist",
    exp: "8+ Years",
    tag: "Gen-Z Favourite",
    tagColor: "#FF6B00",
    bio: "Shraddha designs and delivers engaging training programs that empower teams to reach their full potential. Known for her innovative approach and collaborative sessions, she's become a go-to expert in digital marketing education.",
    skills: ["Corporate Training", "Content Strategy", "Social Media", "Brand Building"],
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-410.png",
    linkedin: "https://www.linkedin.com/in/shraddha-rane-95025b128/",
    accentBg: "#FFF4EE",
    accentColor: "#FF6B00",
  },
  {
    name: "Harsh Pareek",
    role: "Digital Marketing Agency Owner",
    exp: "15+ Years",
    tag: "1000+ Campaigns",
    tagColor: "#FF6B00",
    bio: "A savvy strategist who turns small ideas into profitable businesses. Harsh runs a successful Digital Marketing Agency serving clients across 18+ countries, with deep expertise in high-performance online marketing.",
    skills: ["SEM & PPC", "Campaign Strategy", "Business Growth", "Global Marketing"],
    img: "https://www.operatingmedia.com/wp-content/uploads/2023/10/Harsh-Pareek.webp",
    linkedin: "https://www.linkedin.com/in/pharsh88/",
    accentBg: "#EEF2FF",
    accentColor: "#4F6EF7",
  },
  {
    name: "Hemant Mane",
    role: "Digital Marketing Manager & Trainer",
    exp: "12+ Years",
    tag: "Technical Expert",
    tagColor: "#FF6B00",
    bio: "Passionate about helping individuals and businesses harness the power of digital. Hemant focuses on deep technical implementation and data-driven growth strategies that deliver measurable results.",
    skills: ["SEO & Analytics", "Technical Marketing", "Data-Driven Growth", "Training Design"],
    img: "https://www.operatingmedia.com/wp-content/uploads/2023/10/Hemant-Mane.webp",
    linkedin: "https://www.linkedin.com/in/hemantm26/",
    accentBg: "#ECFDF5",
    accentColor: "#10B981",
  },
  {
    name: "Rahul Singh",
    role: "Analytics & Data Specialist",
    exp: "12+ Years",
    tag: "Data is his game",
    tagColor: "#FF6B00",
    bio: "The backbone of analytics at Operating Media. A software engineer by qualification, Rahul has worked with top Indian brands, delivering high-performance analytics and handling data departments for multiple agencies.",
    skills: ["Web Analytics", "Data Strategy", "Performance Marketing", "Reporting Systems"],
    img: "https://www.operatingmedia.com/wp-content/uploads/2023/10/Rahul-Singh.webp",
    linkedin: "https://www.linkedin.com/in/therahulsingh/",
    accentBg: "#F5F3FF",
    accentColor: "#7C3AED",
  },
  {
    name: "Zahid Shaikh",
    role: "SEO Specialist & Internet Marketing Expert",
    exp: "14+ Years",
    tag: "SEO Authority",
    tagColor: "#FF6B00",
    bio: "A Strategic Internet Marketing Expert & SEO Specialist with over 14 years of online branding experience. Zahid is an expert in ethical Google SEO, building and ranking websites to the top levels of Google and Bing search engines.",
    skills: ["SEO Strategy", "Link Building", "Google Rankings", "Online Branding"],
    img: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-413.png",
    linkedin: "https://www.linkedin.com/in/zahid-shaikh/",
    accentBg: "#FFF8E7",
    accentColor: "#F59E0B",
  },
  {
    name: "Vikram Kamble",
    role: "Digital Marketing Coach & Mentor",
    exp: "8+ Years",
    tag: "Career Transformer",
    tagColor: "#FF6B00",
    bio: "Vikram empowers students and professionals with hands-on digital marketing skills. He excels at practical classroom sessions, 1:1 mentorship, and corporate training — bridging the gap between theory and industry requirements.",
    skills: ["SEO", "Social Media Marketing", "Content Strategy", "Performance Ads"],
    img: "https://www.operatingmedia.com/wp-content/uploads/2025/12/IMG_20251124_042955-1.png",
    linkedin: "https://www.linkedin.com/in/vikram-kamble/",
    accentBg: "#F0FDF4",
    accentColor: "#059669",
  },
];

function SkillChip({ skill, index, accentColor }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      whileHover={{
        scale: 1.08,
        backgroundColor: accentColor,
        color: "#fff",
        borderColor: accentColor,
        transition: { duration: 0.15 },
      }}
      className="text-[11px] font-semibold px-3 py-1.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 cursor-default select-none"
      style={{ display: "inline-block" }}
    >
      {skill}
    </motion.span>
  );
}

function TrainerCard({ trainer, index }) {
  const isEven = index % 2 === 0;
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
      className="w-full rounded-3xl overflow-hidden border border-gray-100 bg-white shadow-sm transition-shadow duration-300"
    >
      <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>

        {/* ── Image Panel ── */}
        <div
          className="relative flex-shrink-0 w-full md:w-[36%] overflow-hidden"
          style={{ background: trainer.accentBg, minHeight: 300 }}
          onMouseEnter={() => setImgHovered(true)}
          onMouseLeave={() => setImgHovered(false)}
        >
          {/* Subtle decorative blob */}
          <div
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full opacity-20 blur-2xl"
            style={{ background: trainer.accentColor }}
          />
          <div
            className="absolute -top-8 -left-8 w-32 h-32 rounded-full opacity-10 blur-xl"
            style={{ background: trainer.accentColor }}
          />

          {/* Full-height image */}
          <motion.img
            src={trainer.img}
            alt={trainer.name}
            animate={{ scale: imgHovered ? 1.06 : 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full h-full object-cover object-top"
            style={{ minHeight: 300, maxHeight: 380 }}
          />

          {/* Gradient fade at bottom on image panel */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 z-20"
            style={{
              background: `linear-gradient(to top, ${trainer.accentBg}EE, transparent)`,
            }}
          />

          {/* Exp badge floating */}
          <div className="absolute top-4 left-4 z-30">
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full text-white shadow-md"
              style={{ background: trainer.accentColor }}
            >
              {trainer.exp} Experience
            </span>
          </div>
        </div>

        {/* ── Content Panel ── */}
        <div className="flex-1 p-7 md:p-10 flex flex-col justify-center gap-4">

          {/* Tag pill */}
          <div className="flex flex-wrap items-center gap-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-sm"
              style={{ background: trainer.tagColor }}
            >
              {trainer.tag}
            </motion.span>
          </div>

          {/* Name + Role */}
          <div>
            <h3 className="text-2xl md:text-[28px] font-black text-gray-900 tracking-tight leading-tight">
              {trainer.name}
            </h3>
            <div className="flex items-center gap-2 mt-1.5">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: trainer.accentColor }}
              />
              <p className="text-sm font-medium text-gray-400">{trainer.role}</p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed">
            {trainer.bio}
          </p>

          {/* Skill chips — animated */}
          <div className="flex flex-wrap gap-2">
            {trainer.skills.map((s, i) => (
              <SkillChip
                key={i}
                skill={s}
                index={i}
                accentColor={trainer.accentColor}
              />
            ))}
          </div>

          {/* LinkedIn */}
          <div className="pt-1">
            <motion.a
              href={trainer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-gray-500 hover:text-blue-600 transition-colors duration-200 group"
            >
              <span
                className="w-8 h-8 rounded-xl flex items-center justify-center bg-gray-100 group-hover:bg-blue-50 transition-colors duration-200"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
              Connect on LinkedIn
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TrainersList() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        .trainers-wrap * { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      <section className="trainers-wrap w-full py-14 md:py-10 px-4" style={{ background: "#F8F7F4" }}>
        <div className="max-w-5xl mx-auto">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 md:mb-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 rounded-full bg-orange-500" />
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-orange-500">
                Learn from the best
              </span>
            </div>
            <h2 className="text-3xl md:text-[42px] font-black text-gray-900 tracking-tight leading-tight mb-3">
              Meet your trainers
            </h2>
            <p className="text-gray-400 text-[13px] md:text-[15px] leading-relaxed max-w-md">
              Industry veterans with decades of real-world experience — not just educators, but practitioners.
            </p>
          </motion.div>

          {/* ── Cards ── */}
          <div className="flex flex-col gap-5">
            {trainers.map((trainer, i) => (
              <TrainerCard key={i} trainer={trainer} index={i} />
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 rounded-3xl p-7 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border border-orange-100 bg-orange-50"
          >
            <div>
              <p className="text-gray-900 font-black text-[18px] md:text-[22px] leading-tight mb-1">
                Ready to learn from experts?
              </p>
              <p className="text-gray-400 text-[13px] md:text-[14px]">
                Join 11,000+ students already trained by this team.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-[14px] px-7 py-4 rounded-2xl transition-colors duration-200 shadow-md shadow-orange-200"
            >
              Enroll Today
              <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

        </div>
      </section>
    </>
  );
}