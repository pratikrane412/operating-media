import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone, Clock, ChevronRight } from "lucide-react";

const campuses = [
  {
    city: "Mumbai",
    label: "Andheri West",
    address: "1st Floor, Andheri Girls' Education Society, S. V. Road, Andheri West, Mumbai – 400058",
    phone: "+91 96199 58615",
    email: "mumbai@operatingmedia.com",
    hours: "Mon–Sat · 9am – 7pm",
    mapSrc: "https://maps.google.com/maps?q=Andheri+Girls+Education+Society+SV+Road+Andheri+West&t=m&z=15&output=embed",
    accent: "#FF6B00",
    tag: "Main Campus",
  },
  {
    city: "Borivali",
    label: "Borivali West",
    address: "705 Gold Crest, Opp. Manubhai Jewellers, Borivali West, Mumbai – 400092",
    phone: "+91 77000 22882",
    email: "borivali@operatingmedia.com",
    hours: "Mon–Sat · 9am – 7pm",
    mapSrc: "https://maps.google.com/maps?q=Gold+Crest+Borivali+West+Mumbai&t=m&z=15&output=embed",
    accent: "#1E3B8A",
    tag: "Suburbs Campus",
  },
];

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email Us", value: "contact@operatingmedia.com", sub: "We reply within 24 hours" },
  { icon: <Phone size={18} />, label: "Call Us", value: "+91 77000 22882", sub: "+91 93264 74007" },
  { icon: <Clock size={18} />, label: "Working Hours", value: "Mon – Saturday", sub: "9:00 AM – 7:00 PM" },
];

export default function ContactHero() {
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", branch: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .contact-wrap * { font-family: 'Inter', sans-serif; }
        .form-input {
          width: 100%; background: #F7F7F5; border: 1.5px solid transparent;
          border-radius: 14px; padding: 14px 18px; font-size: 14px; font-weight: 500;
          color: #111; outline: none; transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .form-input::placeholder { color: #aaa; }
        .form-input:focus { border-color: #FF6B00; box-shadow: 0 0 0 3px rgba(255,107,0,0.08); background: #fff; }
        .map-frame { filter: grayscale(0.3); transition: filter 0.5s; }
        .map-frame:hover { filter: grayscale(0); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .fade-up { animation: fadeUp 0.55s ease both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
      `}</style>

      <main className="contact-wrap w-full bg-white">

        {/* ── 1. HERO BANNER ── */}
        <section
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{ minHeight: 340, background: "linear-gradient(135deg,#0f172a 0%,#1e293b 60%,#1a1a2e 100%)" }}
        >
          {/* Subtle grid texture */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(255,107,0,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,0.3) 1px,transparent 1px)",
            backgroundSize: "48px 48px"
          }} />
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-20 blur-3xl" style={{ background: "#FF6B00" }} />

          <div className="relative z-10 text-center px-6 py-16 md:py-20 max-w-3xl mx-auto">
            <div className="fade-up fade-up-1 flex items-center justify-center gap-2 mb-5">
              <span className="h-[2px] w-6 rounded-full bg-orange-500" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-orange-400">Get in touch</span>
              <span className="h-[2px] w-6 rounded-full bg-orange-500" />
            </div>
            <h1 className="fade-up fade-up-2 text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              We're here to help<br className="hidden md:block" /> you get started
            </h1>
            <p className="fade-up fade-up-3 text-white/50 text-[14px] md:text-[15px] leading-relaxed max-w-lg mx-auto">
              Have questions about admissions, courses, or placements? Reach out — our team responds fast.
            </p>
          </div>
        </section>

        {/* ── 2. FORM + INFO PANEL ── */}
        <section className="px-4 md:px-8 py-12 md:py-16 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] gap-6 items-start">

            {/* Form Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-1 tracking-tight">Send us a message</h2>
              <p className="text-gray-400 text-[13px] mb-7">We'll get back to you within a few hours.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="form-input" placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                  <input className="form-input" placeholder="+91 Phone Number" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="form-input" placeholder="Email Address" type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                  <select className="form-input" value={form.branch} onChange={e => setForm({...form, branch: e.target.value})} required>
                    <option value="">Select Campus</option>
                    <option>Andheri West, Mumbai</option>
                    <option>Borivali West, Mumbai</option>
                  </select>
                </div>
                <textarea className="form-input" rows={4} placeholder="Your message or query..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} style={{ resize: "none" }} />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 text-white font-bold text-[14px] py-4 px-8 rounded-2xl transition-all duration-200 active:scale-95 shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-200 self-start"
                  style={{ background: sent ? "#16a34a" : "linear-gradient(135deg,#FF6B00,#ea580c)" }}
                >
                  {sent ? "✓ Message Sent!" : <>Send Message <ArrowUpRight size={16} /></>}
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="flex flex-col gap-4">
              {/* Quick info cards */}
              {contactInfo.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4 hover:border-orange-100 transition-colors duration-200">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                    <p className="text-[14px] font-bold text-gray-900">{item.value}</p>
                    <p className="text-[12px] text-gray-400">{item.sub}</p>
                  </div>
                </div>
              ))}

              {/* Social nudge */}
              <div className="bg-slate-900 rounded-2xl p-5 text-white">
                <p className="text-[12px] font-semibold uppercase tracking-widest text-white/40 mb-2">Follow us</p>
                <div className="flex gap-3">
                  {["Instagram", "LinkedIn", "YouTube"].map((s, i) => (
                    <a key={i} href="#" className="text-[12px] font-bold text-white/70 hover:text-orange-400 transition-colors duration-150">
                      {s}
                    </a>
                  ))}
                </div>
                <p className="text-[11px] text-white/30 mt-3 leading-relaxed">
                  Stay updated with tips, student stories & live campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CAMPUS SECTION ── */}
        <section className="px-4 md:px-8 pb-12 md:pb-16 max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-6 rounded-full bg-orange-500" />
              <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-orange-500">Our Campuses</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">Visit us in person</h2>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-2 mb-6 bg-gray-100 rounded-2xl p-1 w-fit">
            {campuses.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-200 ${
                  activeTab === i ? "bg-white shadow text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {c.city}
              </button>
            ))}
          </div>

          {/* Active campus card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-[1fr_1.6fr] gap-4 items-stretch"
          >
            {/* Info */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 flex flex-col justify-between gap-6">
              <div>
                <span
                  className="text-[11px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full mb-4 inline-block"
                  style={{ background: campuses[activeTab].accent }}
                >
                  {campuses[activeTab].tag}
                </span>
                <h3 className="text-2xl font-black text-gray-900 mb-1">
                  {campuses[activeTab].city}
                </h3>
                <p className="text-sm text-gray-400 mb-5">{campuses[activeTab].label}</p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-[13px] text-gray-600 leading-relaxed">{campuses[activeTab].address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-orange-500 flex-shrink-0" />
                    <p className="text-[13px] font-semibold text-gray-700">{campuses[activeTab].phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-orange-500 flex-shrink-0" />
                    <p className="text-[13px] font-semibold text-gray-700">{campuses[activeTab].email}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-orange-500 flex-shrink-0" />
                    <p className="text-[13px] font-semibold text-gray-700">{campuses[activeTab].hours}</p>
                  </div>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(campuses[activeTab].address)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-[13px] font-bold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Get Directions <ChevronRight size={15} />
              </a>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm" style={{ minHeight: 320 }}>
              <iframe
                src={campuses[activeTab].mapSrc}
                className="map-frame w-full h-full"
                style={{ minHeight: 320, border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={campuses[activeTab].city}
              />
            </div>
          </motion.div>
        </section>

        {/* ── 4. BOTTOM CTA STRIP ── */}
        <section className="px-4 md:px-8 pb-16 max-w-6xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}
          >
            <div>
              <p className="text-white font-black text-[18px] md:text-[22px] leading-tight mb-1">
                Ready to start your journey?
              </p>
              <p className="text-white/40 text-[13px]">
                Join 11,000+ students who've built careers through Operating Media.
              </p>
            </div>
            <button className="shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-[14px] px-7 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-orange-900/30">
              Enroll Now <ArrowUpRight size={16} />
            </button>
          </div>
        </section>

      </main>
    </>
  );
}