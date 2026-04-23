import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Download, Globe, Zap, ShieldCheck, Target, Star, Users } from 'lucide-react';
import DownloadBrochure from "../../Navbar/DownloadBrochure";

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
  { value: "0%",   label: "EMI Interest" },
  { value: "12",   label: "Batch Size" },
  { value: "100%", label: "Placement" },
];

export default function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), 60); return () => clearTimeout(t); }, []);

  const anim = (delay) => ({
    opacity:   show ? 1 : 0,
    transform: show ? 'translateY(0px)' : 'translateY(22px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  });

  return (
    <section className="relative w-full font-inter overflow-hidden bg-[#FBF8F4]">

      {/* ── very subtle warm dot grid ── */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── orange mesh blob top-right ── */}
      <div className="absolute top-0 right-0 w-[640px] h-[640px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 80% 20%, rgba(255,90,31,0.13) 0%, transparent 65%)' }}
      />
      {/* ── warm peach blob bottom-left ── */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle at 20% 80%, rgba(255,180,120,0.10) 0%, transparent 65%)' }}
      />

      {/* ════════ HERO ════════ */}
      
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 pt-12 pb-14">
        <div className="grid lg:grid-cols-[1fr_550px] gap-14 items-center">

          {/* LEFT */}
          <div>

            {/* eyebrow pill */}
            <div style={anim(0)}
              className="inline-flex items-center gap-2 px-4 py-0 rounded-full bg-[#FF5A1F]/10 border border-[#FF5A1F]/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="font-inter font-semibold text-[11px] text-[#FF5A1F] uppercase tracking-[0.28em]">
                Masters Program · Mumbai
              </span>
            </div>

            
            <div style={anim(80)}>
              <h1 className="font-inter font-semibold text-[#111111] leading-[1.05] tracking-tight mb-6"
                style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>
                The Master's<br />
                Program in<br />
                <span className="text-[#FF5A1F]">Digital Strategy</span><br />
                <span className="text-[#111111]">&amp; AI.</span>
              </h1>
            </div>

            {/* subtext */}
            <div style={anim(160)}>
              <p className="font-inter font-normal text-[#111111]/75 text-lg leading-relaxed mb-10 max-w-[500px]">
                Don't just watch videos. Manage{' '}
                <span className="font-semibold text-[#FF5A1F]">real money</span> on Google &amp; Meta Ads —
                the only course in Mumbai where we fund your campaigns.
              </p>
            </div>

            {/* CTA buttons */}
            <div style={anim(240)} className="flex flex-wrap gap-4 mb-12">
              
              {/* --- ADDED LINK HERE --- */}
              <Link to="/contact">
                <button className="group flex items-center gap-3 bg-[#FF5A1F] hover:bg-[#111111] text-white font-inter font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-250 shadow-lg shadow-orange-200">
                  Apply for Batch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </Link>
              {/* ----------------------- */}

             <DownloadBrochure />
            </div>

            {/* trust row */}
            <div style={anim(300)} className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-[#FF5A1F] fill-[#FF5A1F]" />
                  ))}
                </div>
                <span className="font-inter font-semibold text-[15px] text-[#111111]">3,500+ Alumni</span>
              </div>
              <span className="w-px h-4 bg-gray-300" />
              <div className="flex items-center gap-2">
                <Users size={14} className="text-[#FF5A1F]" />
                <span className="font-inter font-normal text-[15px] text-[#111111]">Placed at 200+ companies</span>
              </div>
            </div>
          </div>

          {/* RIGHT — image card */}
          <div style={anim(160)} className="relative">

           
            {/* card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_24px_64px_rgba(0,0,0,0.10)]">
              <img
                src="https://www.operatingmedia.com/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-15-at-10.45.58-1-1.png"
                alt="Masters Program"
                className="w-full object-cover"
              />

              {/* card footer stats */}
              <div className="px-6 py-5 grid grid-cols-3 divide-x divide-gray-100 bg-white">
                {[{ v: '7', l: 'Months' }, { v: '200+', l: 'Hours' }, { v: '120+', l: 'Tools' }].map((s, i) => (
                  <div key={i} className={`flex flex-col items-center ${i > 0 ? 'pl-4' : ''}`}>
                    <span className="font-inter font-semibold text-[#111111] text-xl leading-none">{s.v}</span>
                    <span className="font-inter font-normal text-[#111111]/40 text-[11px] uppercase tracking-wide mt-1">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* floating feature pill — bottom right */}
            <div className="absolute -bottom-5 -right-4 z-20 bg-[#FF5A1F] text-white rounded-2xl px-5 py-3 shadow-xl shadow-orange-200">
              <p className="font-inter font-semibold text-[13px] leading-none">100% Placement</p>
              <p className="font-inter font-normal text-white/70 text-[11px] mt-0.5">Industry Recognised</p>
            </div>
          </div>

        </div>
      </div>

      {/* ════════ QUICK STATS STRIP ════════ */}
      <div className="relative z-10 border-t border-gray-400 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-10 lg:px-20 py-9 flex flex-wrap justify-between gap-6">
          {[
            { icon: <Globe size={16} />, title: "Andheri & Borivali", sub: "On-Campus" },
            { icon: <Zap size={16} />, title: "AI-Powered", sub: "ChatGPT & Midjourney" },
            { icon: <ShieldCheck size={16} />, title: "100% Placement", sub: "Job Support" },
            { icon: <Users size={16} />, title: "Small Batches", sub: "Only 12 Students" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF5A1F]/10 flex items-center justify-center text-[#FF5A1F]">
                {s.icon}
              </div>
              <div>
                <p className="font-inter font-semibold text-[#111111] text-[13px] leading-none">{s.title}</p>
                <p className="font-inter font-normal text-[#111111]/55 text-[11px] mt-0.5">{s.sub}</p>
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
              <span className="font-inter font-semibold text-[10px] text-[#FF5A1F] tracking-[0.35em] uppercase">
                Curriculum
              </span>
            </div>
            <h2 className="font-inter font-semibold text-[#111111] leading-tight tracking-tight"
              style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}>
              What you will{' '}
              <span className="text-[#FF5A1F]">achieve</span>
              <Target size={28} className="inline text-[#FF5A1F] ml-2 -mt-1" />
            </h2>
          </div>
          <p className="font-inter font-normal text-[#111111]/70 text-[15px] leading-relaxed max-w-sm">
            Every module is built around practical execution — you leave with a live portfolio and real ad spend experience.
          </p>
        </div>

        {/* features grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((feat, i) => (
            <div key={i}
              className="group flex items-start gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:border-[#FF5A1F]/30 hover:shadow-md transition-all duration-200 cursor-default shadow-sm">
              <CheckCircle2 size={15} className="text-[#FF5A1F] mt-0.5 shrink-0" />
              <span className="font-inter font-normal text-[#111111]/70 group-hover:text-[#111111] text-[13px] leading-snug transition-colors">
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* bottom stats bar */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-6 pt-10 border-t border-gray-200">
          {stats.map((s, i) => (
            <div key={i}>
              <span className="font-inter font-semibold text-[#111111] text-3xl leading-none block">{s.value}</span>
              <span className="font-inter font-normal text-[#111111]/50 text-[11px] uppercase tracking-widest mt-2 block">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}