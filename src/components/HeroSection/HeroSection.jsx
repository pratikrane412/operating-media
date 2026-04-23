import { useEffect, useState } from "react";

// Icons Components
const IconBook = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>);
const IconGrid = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>);
const IconArrow = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>);
const IconPlay = () => (<svg width="10" height="10" viewBox="0 0 24 24" fill="#F97316"><polygon points="5 3 19 12 5 21 5 3" /></svg>);
const StarSVG = () => (<svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>);

export default function HeroSection() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 60);

    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }

    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-orange-100/50 blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 -left-24 w-[280px] md:w-[380px] h-[280px] md:h-[380px] rounded-full bg-yellow-100/40 blur-[80px] md:blur-[100px]" />
      </div>

      {/* ══ HERO BODY ══ */}
      <div className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-[52%_48%] lg:items-center lg:pb-64">

        {/* LEFT */}
        <div className={`
          flex flex-col gap-4 md:gap-5 pt-12 lg:pt-16
          px-6 sm:px-8 lg:pl-16 lg:pr-8
          transition-all duration-700 ease-out
          ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}>
          <span
            className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 uppercase tracking-[0.14em]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "11px", fontWeight: 700 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            India's #1 Digital Marketing Institute
          </span>

          {/* ── HEADING: forced Satoshi Black 900, large px size, no clamp ambiguity ── */}
          <h1
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "#030712",
              textTransform: "uppercase",
            }}
          >
            LEARN<br />
            <span style={{
              background: "linear-gradient(90deg, #F97316, #FBBF24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>SKILLS</span>
            {" "}THAT<br />
            MATTER
          </h1>

          {/* ── BODY: darker gray, larger size, more weight ── */}
          <p
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: "17px",
              fontWeight: 500,
              lineHeight: 1.7,
              color: "#374151",
              maxWidth: "400px",
            }}
          >
            Practical training to upgrade your career, confidence, and opportunities.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10">
            <button
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-500 text-white shadow-lg active:scale-[0.97] transition-all hover:bg-orange-600"
              style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "15px", fontWeight: 700 }}
            >
              <span>Get Started</span>
              <IconArrow />
            </button>

            <button
              className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 shadow-sm active:scale-[0.97] transition-all hover:border-orange-200"
              style={{ fontFamily: "'Satoshi', sans-serif", fontSize: "15px", fontWeight: 700 }}
            >
              <span className="w-7 h-7 rounded-full flex items-center justify-center bg-orange-50 shrink-0"><IconPlay /></span>
              Start Free Trial
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={`
          relative flex-1 flex items-end justify-center
          lg:flex-none lg:absolute lg:right-0 lg:bottom-0 lg:w-[50%] lg:h-full lg:-translate-y-16
          pointer-events-none transition-all duration-700 ease-out delay-150
          ${on ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
        `}>
          <div className="absolute left-4 top-4 md:top-16 z-20 pointer-events-auto bg-white rounded-2xl px-3 py-2 md:px-4 md:py-3 flex items-center gap-2 md:gap-3 border border-gray-100 shadow-xl animate-float-a">
            <div className="w-7 h-7 md:w-9 md:h-9 rounded-xl bg-yellow-50 flex items-center justify-center shrink-0"><StarSVG /></div>
            <div>
              <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 800, fontSize: "20px", lineHeight: 1, color: "#111827" }}>4.8★</p>
              <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "9px", textTransform: "uppercase", color: "#9CA3AF", marginTop: "3px", letterSpacing: "0.08em" }}>Google Rating</p>
            </div>
          </div>

          <div className="absolute right-4 top-1/4 md:top-1/3 z-20 pointer-events-auto bg-white rounded-2xl px-3 py-2 md:px-4 md:py-3 border border-gray-100 shadow-xl animate-float-b">
            <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 800, fontSize: "24px", lineHeight: 1, color: "#111827" }}>16+</p>
            <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "9px", textTransform: "uppercase", color: "#9CA3AF", marginTop: "3px", letterSpacing: "0.08em" }}>Years of Excellence</p>
          </div>

          <img
            src="/images/Hero_image.png"
            alt="Hero"
            className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-none lg:h-full h-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>
      </div>

      {/* ══ BOTTOM 4-CARD BAR ══ */}
      <div className={`
        relative z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        lg:absolute lg:bottom-0 lg:left-0 lg:right-0
        shadow-[0_-4px_24px_rgba(0,0,0,0.06)]
        transition-all duration-700 ease-out delay-500
        ${on ? "opacity-100 translate-y-0" : "opacity-0 translate-y-50"}
      `}>

        {/* Card 1 — Orange */}
        <div className="bg-orange-500 p-6 md:p-10 flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white"><IconBook /></div>
            <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white"><IconArrow /></button>
          </div>
          <h3 style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "18px", color: "#fff", marginTop: "8px" }}>Easy to Learn</h3>
          <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 500, fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>Simple navigation and engaging content — stress-free learning.</p>
        </div>

        {/* Card 2 — White */}
        <div className="bg-white p-6 md:p-10 flex flex-col justify-center gap-3 border-b md:border-b-0 md:border-r border-gray-100">
          <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "16px", color: "#030712", lineHeight: 1.5 }}>Your study journey gets easier and guided with top educators</p>
          <a href="#" className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "14px", color: "#F97316" }}>Learn More <IconArrow /></a>
        </div>

        {/* Card 3 — White */}
        <div className="bg-white p-6 md:p-10 flex flex-col justify-center gap-3 border-b md:border-b-0 md:border-r border-gray-100">
          <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "16px", color: "#030712", lineHeight: 1.5 }}>Earn global certifications from Google, Meta & HubSpot</p>
          <a href="#" className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "14px", color: "#F97316" }}>Get Certified <IconArrow /></a>
        </div>

        {/* Card 4 — Dark */}
        <div className="bg-gray-950 p-6 md:p-10 flex flex-col justify-center min-h-[140px] md:min-h-0">
          <div className="flex items-center gap-2 mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
            <IconGrid />
            <span style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.12em" }}>Total Courses</span>
          </div>
          <div>
            <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem,4vw,3.25rem)", lineHeight: 1, color: "#fff" }}>
              1600<span style={{ color: "#FBBF24" }}>+</span>
            </p>
            <p style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700, fontSize: "10px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: "4px", letterSpacing: "0.12em" }}>Students Trained</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatA { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes floatB { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float-a { animation: floatA 4s ease-in-out infinite; }
        .animate-float-b { animation: floatB 5s ease-in-out infinite; animation-delay: 1.5s; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}