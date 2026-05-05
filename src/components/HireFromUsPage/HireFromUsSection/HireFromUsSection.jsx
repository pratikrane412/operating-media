import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Users, Briefcase, Star, Building2 } from 'lucide-react';

const perks = [
  "Hands-on Experience on all Topics",
  "100+ Hours of Training and Case Studies",
  "In-house Examinations to improve Skills",
  "Complete Placement Support",
  "Instant Access to all the CV's",
  "Industry Ready Candidates",
  "Fresh Talent Ready to Contribute to Your Success",
  "0 Cost – 100% Talent",
];

const stats = [
  { icon: <Users size={20} />, value: "16000+", label: "Trained Alumni" },
  { icon: <Briefcase size={20} />, value: "250+", label: "Hiring Partners" },
  { icon: <Star size={20} />, value: "0 Cost", label: "To You" },
];

export default function HireFromUsSection() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    organisation: '', openingFor: '', city: '', state: '',
    hiringFor: '', workLocation: '', website: '', agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5 seconds
  };

  // Modern Input styling
  const inputClass = "w-full bg-[#FAFCFF] border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] font-medium text-[#0f172a] placeholder-gray-400 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all";
  const selectClass = "w-full bg-[#FAFCFF] border border-gray-200 rounded-xl px-4 py-3.5 text-[15px] font-medium text-gray-500 focus:outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] transition-all cursor-pointer appearance-none";

  return (
    <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden">

      {/* ── Background Grid & Glow ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[120px] animate-pulse-slow pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

        {/* ── LEFT COLUMN (Text & Stats) ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Building2 size={16} className="text-[#2563eb]" />
            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
              Hire From Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-black text-[32px] md:text-[42px] lg:text-[48px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
            Save Money and Time <br className="hidden md:block" />
            on Training. <br />
            <span className="relative inline-block text-[#ECAB00]">
              Hire Freshly Trained Talent.
              <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
              </svg>
            </span>
          </h2>

          {/* Perks List */}
          <ul className="space-y-3.5 mb-12">
            {perks.map((perk, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={20} className="text-[#ECAB00] mt-0.5 shrink-0" />
                <span className="font-medium text-[16px] text-gray-600 leading-snug">
                  {perk}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Stats Boxes (Dark Navy to Pop on Light BG) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                className="bg-[#0f172a] border border-white/10 rounded-2xl p-5 flex flex-col gap-2 shadow-[0_15px_30px_-10px_rgba(15,23,42,0.3)] hover:-translate-y-1 transition-transform"
              >
                <div className="w-10 h-10 rounded-full bg-[#ECAB00]/20 flex items-center justify-center text-[#ECAB00] mb-1">
                  {s.icon}
                </div>
                <span className="font-black text-white text-2xl leading-none">{s.value}</span>
                <span className="font-bold text-[#ECAB00] text-[10px] uppercase tracking-widest">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN (FORM) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/5 rounded-bl-[100px] pointer-events-none" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-24 gap-4 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-2">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h3 className="font-black text-[#0f172a] text-3xl">Request Sent!</h3>
              <p className="font-medium text-gray-500 text-[16px] max-w-xs">
                Our placement team will get in touch with you shortly.
              </p>
            </motion.div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="font-black text-[#0f172a] text-[26px] tracking-tight">
                  Start Hiring
                </h3>
                <p className="font-medium text-gray-500 text-[15px] mt-1">
                  Fill out the form below and we'll send you profiles matching your requirements.
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="firstName" value={form.firstName} onChange={handle} required placeholder="First Name" className={inputClass} />
                  <input name="lastName" value={form.lastName} onChange={handle} required placeholder="Last Name" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="email" type="email" value={form.email} onChange={handle} required placeholder="Official Email Address" className={inputClass} />
                  <input name="phone" type="tel" value={form.phone} onChange={handle} required placeholder="Phone Number" className={inputClass} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="organisation" value={form.organisation} onChange={handle} required placeholder="Company Name" className={inputClass} />
                  <div className="relative">
                    <select name="openingFor" value={form.openingFor} onChange={handle} required className={selectClass}>
                      <option value="" disabled>Opening Type</option>
                      <option value="Internship">Internship</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Contract">Contract</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="city" value={form.city} onChange={handle} required placeholder="City" className={inputClass} />
                  <div className="relative">
                    <select name="hiringFor" value={form.hiringFor} onChange={handle} required className={selectClass}>
                      <option value="" disabled>Hiring For Role</option>
                      <option value="Digital Marketing">Digital Marketing Executive</option>
                      <option value="SEO">SEO Specialist</option>
                      <option value="Performance Marketing">Performance Marketer</option>
                      <option value="Social Media">Social Media Manager</option>
                      <option value="Content">Content Writer</option>
                    </select>
                  </div>
                </div>

                <input name="website" value={form.website} onChange={handle} placeholder="Company Website URL" className={inputClass} />

                <label className="flex items-start gap-3 cursor-pointer pt-2 group">
                  <input type="checkbox" name="agree" checked={form.agree} onChange={handle} required
                    className="mt-1 w-4 h-4 shrink-0 accent-[#2563eb] cursor-pointer" />
                  <span className="font-medium text-[13px] text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                    I agree to Operating Media's <span className="text-[#2563eb] underline">Terms and Conditions</span> and <span className="text-[#2563eb] underline">Privacy Policy</span>.
                  </span>
                </label>

                <button type="submit"
                  className="group w-full bg-[#ECAB00] hover:bg-[#0f172a] text-[#0f172a] hover:text-white font-black text-[16px] py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 mt-4 shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] active:scale-95">
                  Request Talent Profiles
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </form>
            </>
          )}
        </motion.div>

      </div>

      {/* ── Custom Pulse Animation ── */}
      <style>{`
        .animate-pulse-slow { 
          animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; 
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}