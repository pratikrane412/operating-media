import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Download, Globe, Zap, ShieldCheck, Target, Star, Users } from 'lucide-react';
import DownloadBrochure from "../../Navbar/DownloadBrochure";

const S = { fontFamily: "'Satoshi', sans-serif" };

const features = [
  "Ecommerce Creation",
  "Real Market Places Listing",
  "Video Editing Tool",
  "Free Hosting + Domain",
  "Lead Generation",
  "Marketing Automations",
  "Photoshop Basics",
  "Actual Spends for Paid Ads",
];

const stats = [
  { value: "200+", label: "Hours of Learning" },
  { value: "120+", label: "Tools Covered" },
  { value: "0%", label: "EMI Interest" },
  { value: "12", label: "Batch Size" },
  { value: "100%", label: "Placement" },
];

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const anim = (delay) => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#FBF8F4]" style={S}>

      {/* Warm dot grid */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Orange mesh blob top-right */}
      <div className="absolute top-0 right-0 w-[640px] h-[640px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,90,31,0.13) 0%, transparent 65%)' }}
      />
      {/* Warm peach blob bottom-left */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(255,180,120,0.10) 0%, transparent 65%)' }}
      />

      {/* ════════ HERO ════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pt-12 pb-14">
        <div className="grid lg:grid-cols-[1fr_550px] gap-14 items-center">

          {/* LEFT */}
          <div>

            {/* Eyebrow pill */}
            <div style={{ ...anim(0), display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 16px", borderRadius: "999px", background: "rgba(255,90,31,0.1)", border: "1px solid rgba(255,90,31,0.2)", marginBottom: "28px" }}>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span style={{ ...S, fontWeight: 700, fontSize: "11px", color: "#FF5A1F", textTransform: "uppercase", letterSpacing: "0.28em" }}>
                Masters Program · Mumbai
              </span>
            </div>

            {/* H1 */}
            <div style={anim(80)}>
              <h1
                style={{
                  ...S,
                  fontWeight: 900,
                  fontSize: "clamp(40px, 6vw, 74px)",
                  color: "#111111",
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                  marginBottom: "24px",
                }}
              >
                The Master's<br />
                Program in<br />
                <span style={{ color: "#FF5A1F" }}>Digital Strategy</span><br />
                <span style={{ color: "#111111" }}>&amp; AI.</span>
              </h1>
            </div>

            {/* Subtext */}
            <div style={anim(160)}>
              <p style={{ ...S, fontWeight: 400, fontSize: "18px", color: "rgba(17,17,17,0.72)", lineHeight: 1.75, marginBottom: "40px", maxWidth: "500px" }}>
                Don't just watch videos. Manage{' '}
                <span style={{ fontWeight: 700, color: "#FF5A1F" }}>real money</span> on Google &amp; Meta Ads —
                the only course in Mumbai where we fund your campaigns.
              </p>
            </div>

            {/* CTA buttons */}
            <div style={anim(240)} className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact">
                <button
                  className="group flex items-center gap-3 bg-[#FF5A1F] hover:bg-[#111111] text-white rounded-xl transition-all duration-250 shadow-lg shadow-orange-200"
                  style={{ ...S, fontWeight: 700, fontSize: "15px", padding: "16px 32px" }}
                >
                  Apply for Batch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
              <DownloadBrochure />
            </div>

            {/* Trust row */}
            <div style={anim(300)} className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-[#FF5A1F] fill-[#FF5A1F]" />
                  ))}
                </div>
                <span style={{ ...S, fontWeight: 700, fontSize: "15px", color: "#111111" }}>
                  3,500+ Alumni
                </span>
              </div>
              <span className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Users size={14} className="text-[#FF5A1F]" />
                <span style={{ ...S, fontWeight: 500, fontSize: "15px", color: "#111111" }}>
                  Placed at 200+ companies
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — image card */}
          <div style={anim(160)} className="relative">

            {/* Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_24px_64px_rgba(0,0,0,0.10)]">
              <img
                src="https://www.operatingmedia.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-15-at-10.45.58-1-1.png"
                alt="Masters Program"
                className="w-full object-cover"
              />

              {/* Card footer stats */}
              <div className="px-6 py-5 grid grid-cols-3 divide-x divide-gray-100 bg-white">
                {[{ v: '7', l: 'Months' }, { v: '200+', l: 'Hours' }, { v: '120+', l: 'Tools' }].map((s, i) => (
                  <div key={i} className={`flex flex-col items-center ${i > 0 ? 'pl-4' : ''}`}>
                    <span style={{ ...S, fontWeight: 800, fontSize: "22px", color: "#111111", lineHeight: 1 }}>
                      {s.v}
                    </span>
                    <span style={{ ...S, fontWeight: 500, fontSize: "11px", color: "rgba(17,17,17,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "4px" }}>
                      {s.l}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating feature pill */}
            <div className="absolute -bottom-5 -right-4 z-20 bg-[#FF5A1F] text-white rounded-2xl px-5 py-3 shadow-xl shadow-orange-200">
              <p style={{ ...S, fontWeight: 700, fontSize: "14px", lineHeight: 1, color: "#fff" }}>
                100% Placement
              </p>
              <p style={{ ...S, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.75)", marginTop: "3px" }}>
                Industry Recognised
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ════════ QUICK STATS STRIP ════════ */}
      <div className="relative z-10 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-10 lg:px-20 py-9 flex flex-wrap justify-between gap-6">
          {[
            { icon: <Globe size={17} />, title: "Andheri & Borivali", sub: "On-Campus" },
            { icon: <Zap size={17} />, title: "AI-Powered", sub: "ChatGPT & Midjourney" },
            { icon: <ShieldCheck size={17} />, title: "100% Placement", sub: "Job Support" },
            { icon: <Users size={17} />, title: "Small Batches", sub: "Only 12 Students" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">
                {s.icon}
              </div>
              <div>
                <p style={{ ...S, fontWeight: 700, fontSize: "14px", color: "#111111", lineHeight: 1.2 }}>
                  {s.title}
                </p>
                <p style={{ ...S, fontWeight: 400, fontSize: "12px", color: "rgba(17,17,17,0.5)", marginTop: "2px" }}>
                  {s.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ════════ WHAT YOU ACHIEVE ════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 py-20">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-8 bg-[#FF5A1F]" />
              <span style={{ ...S, fontWeight: 700, fontSize: "11px", color: "#FF5A1F", letterSpacing: "0.35em", textTransform: "uppercase" }}>
                Curriculum
              </span>
            </div>
            <h2 style={{ ...S, fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 46px)", color: "#111111", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              What you will{' '}
              <span style={{ color: "#FF5A1F" }}>achieve</span>
              <Target size={28} className="inline text-[#FF5A1F] ml-2 -mt-1" />
            </h2>
          </div>
          <p style={{ ...S, fontWeight: 500, fontSize: "16px", color: "rgba(17,17,17,0.65)", lineHeight: 1.75, maxWidth: "380px" }}>
            Every module is built around practical execution — you leave with a live portfolio and real ad spend experience.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((feat, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:border-[#FF5A1F]/30 hover:shadow-md transition-all duration-200 cursor-default shadow-sm"
            >
              <CheckCircle2 size={16} className="text-[#FF5A1F] mt-0.5 shrink-0" />
              <span
                style={{ ...S, fontWeight: 500, fontSize: "14px", color: "rgba(17,17,17,0.7)", lineHeight: 1.45 }}
                className="group-hover:text-[#111111] transition-colors"
              >
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom stats bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6 pt-10 border-t border-gray-200">
          {stats.map((s, i) => (
            <div key={i}>
              <span style={{ ...S, fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#111111", lineHeight: 1, display: "block", letterSpacing: "-0.03em" }}>
                {s.value}
              </span>
              <span style={{ ...S, fontWeight: 600, fontSize: "11px", color: "rgba(17,17,17,0.45)", textTransform: "uppercase", letterSpacing: "0.12em", marginTop: "8px", display: "block" }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}