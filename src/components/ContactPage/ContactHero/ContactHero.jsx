import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail, Phone, Clock, ChevronRight } from "lucide-react";

const S = { fontFamily: "'Satoshi', sans-serif" };

const campuses = [
  {
    city: "Mumbai",
    label: "Andheri West",
    address: "Office no 2, Chandra Niwas, off Old Police Lane, Andheri East, Mumbai, Maharashtra 400069",
    phone: "+91 96199 58615",
    email: "mumbai@operatingmedia.com",
    hours: "Mon–Sat · 9am – 7pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.827086054441!2d72.8469753150028!3d19.11862768709886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e9b9c6255%3A0x8c8a7e6c9e5a4b8b!2sChandra%20Niwas%20Office%20No.%202%2C%20Old%20Police%20Lane%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400069!5e0!3m2!1sen!2sin!4v1701301234567",
    accent: "#FF6B00",
    tag: "Main Campus",
  },
  {
    city: "Borivali",
    label: "Borivali West",
    address: "705 Gold Crest Business Center, Opp Manubhai Jewellers LT Road, Borivali, West, Borivali West, Mumbai, Maharashtra 400092",
    phone: "+91 77000 22882",
    email: "borivali@operatingmedia.com",
    hours: "Mon–Sat · 9am – 7pm",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.827086054441!2d72.8469753150028!3d19.11862768709886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e9b9c6255%3A0x8c8a7e6c9e5a4b8b!2sChandra%20Niwas%20Office%20No.%202%2C%20Old%20Police%20Lane%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400069!5e0!3m2!1sen!2sin!4v1701301234567",
    accent: "#1E3B8A",
    tag: "Suburbs Campus",
  },
];

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email Us", value: "contact@operatingmedia.com", sub: "We reply within 24 hours" },
  { icon: <Phone size={18} />, label: "Call Us", value: "+91 77000 22882", sub: "+91 93264 74007" },
  { icon: <Clock size={18} />, label: "Working Hours", value: "Monday – Saturday", sub: "9:00 AM – 7:00 PM" },
];

export default function ContactHero() {
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "", branch: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <style>{`
        .form-input {
          width: 100%;
          background: #F7F7F5;
          border: 1.5px solid transparent;
          border-radius: 14px;
          padding: 16px 20px;
          font-size: 15px;
          font-weight: 500;
          color: #111;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'Satoshi', sans-serif;
        }
        .form-input::placeholder { color: #aaa; font-family: 'Satoshi', sans-serif; }
        .form-input:focus {
          border-color: #FF6B00;
          box-shadow: 0 0 0 3px rgba(255,107,0,0.08);
          background: #fff;
        }
        .map-frame { filter: grayscale(0.3); transition: filter 0.5s; }
        .map-frame:hover { filter: grayscale(0); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up   { animation: fadeUp 0.55s ease both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
      `}</style>

      <main className="w-full bg-white" style={S}>

        {/* ── 1. HERO BANNER ── */}
        <section
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{ minHeight: 380, background: "linear-gradient(135deg,#0f172a 0%,#1e293b 60%,#1a1a2e 100%)" }}
        >
          {/* Grid texture */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "linear-gradient(rgba(255,107,0,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,107,0,0.3) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-20 blur-3xl" style={{ background: "#FF6B00" }} />

          <div className="relative z-10 text-center px-6 py-20 md:py-24 max-w-3xl mx-auto">
            <div className="fade-up fade-up-1 flex items-center justify-center gap-2 mb-6">
              <span className="h-[2px] w-6 rounded-full bg-orange-500" />
              <span style={{ ...S, fontWeight: 700, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FB923C" }}>
                Get in touch
              </span>
              <span className="h-[2px] w-6 rounded-full bg-orange-500" />
            </div>

            <h1
              className="fade-up fade-up-2"
              style={{ ...S, fontWeight: 900, fontSize: "clamp(2.2rem, 6vw, 3.8rem)", color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.08, marginBottom: "20px" }}
            >
              We're here to help<br className="hidden md:block" /> you get started
            </h1>

            <p
              className="fade-up fade-up-3"
              style={{ ...S, fontWeight: 500, fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto" }}
            >
              Have questions about admissions, courses, or placements? Reach out — our team responds fast.
            </p>
          </div>
        </section>

        {/* ── 2. FORM + INFO PANEL ── */}
        <section className="px-4 md:px-8 py-14 md:py-18 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] gap-6 items-start">

            {/* Form Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
              <h2 style={{ ...S, fontWeight: 900, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", color: "#030712", letterSpacing: "-0.03em", marginBottom: "8px" }}>
                Send us a message
              </h2>
              <p style={{ ...S, fontWeight: 400, fontSize: "15px", color: "#6B7280", marginBottom: "32px", lineHeight: 1.6 }}>
                We'll get back to you within a few hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="form-input" placeholder="Full Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  <input className="form-input" placeholder="+91 Phone Number" type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input className="form-input" placeholder="Email Address" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  <select className="form-input" value={form.branch} onChange={e => setForm({ ...form, branch: e.target.value })} required>
                    <option value="">Select Campus</option>
                    <option>Andheri West, Mumbai</option>
                    <option>Borivali West, Mumbai</option>
                  </select>
                </div>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Your message or query..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ resize: "none" }}
                />

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 text-white rounded-2xl transition-all duration-200 active:scale-95 shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-200 self-start"
                  style={{
                    ...S,
                    fontWeight: 800,
                    fontSize: "16px",
                    padding: "16px 36px",
                    background: sent ? "#16a34a" : "linear-gradient(135deg,#FF6B00,#ea580c)",
                  }}
                >
                  {sent ? "✓ Message Sent!" : <> Send Message <ArrowUpRight size={17} /> </>}
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-start gap-4 hover:border-orange-100 transition-colors duration-200">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ ...S, fontWeight: 700, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#9CA3AF", marginBottom: "4px" }}>
                      {item.label}
                    </p>
                    <p style={{ ...S, fontWeight: 700, fontSize: "15px", color: "#030712", lineHeight: 1.3 }}>
                      {item.value}
                    </p>
                    <p style={{ ...S, fontWeight: 500, fontSize: "13px", color: "#6B7280", marginTop: "2px" }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}

              {/* Social nudge */}
              <div className="bg-slate-900 rounded-2xl p-5">
                <p style={{ ...S, fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.35)", marginBottom: "12px" }}>
                  Follow us
                </p>
                <div className="flex gap-4">
                  {["Instagram", "LinkedIn", "YouTube"].map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      className="hover:text-orange-400 transition-colors duration-150"
                      style={{ ...S, fontWeight: 700, fontSize: "14px", color: "rgba(255,255,255,0.7)" }}
                    >
                      {s}
                    </a>
                  ))}
                </div>
                <p style={{ ...S, fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.35)", marginTop: "12px", lineHeight: 1.65 }}>
                  Stay updated with tips, student stories & live campaigns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CAMPUS SECTION ── */}
        <section className="px-4 md:px-8 pb-14 md:pb-18 max-w-6xl mx-auto">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[2px] w-6 rounded-full bg-orange-500" />
              <span style={{ ...S, fontWeight: 700, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#F97316" }}>
                Our Campuses
              </span>
            </div>
            <h2 style={{ ...S, fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#030712", letterSpacing: "-0.03em" }}>
              Visit us in person
            </h2>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-2 mb-7 bg-gray-100 rounded-2xl p-1 w-fit">
            {campuses.map((c, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-xl transition-all duration-200 ${activeTab === i ? "bg-white shadow" : "hover:text-gray-600"}`}
                style={{ ...S, fontWeight: 700, fontSize: "14px", color: activeTab === i ? "#030712" : "#9CA3AF", border: "none", cursor: "pointer" }}
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
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col justify-between gap-6">
              <div>
                <span
                  className="text-white px-3 py-1.5 rounded-full mb-5 inline-block"
                  style={{ ...S, fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", background: campuses[activeTab].accent }}
                >
                  {campuses[activeTab].tag}
                </span>

                <h3 style={{ ...S, fontWeight: 900, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#030712", letterSpacing: "-0.03em", marginBottom: "4px" }}>
                  {campuses[activeTab].city}
                </h3>
                <p style={{ ...S, fontWeight: 500, fontSize: "15px", color: "#6B7280", marginBottom: "24px" }}>
                  {campuses[activeTab].label}
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <p style={{ ...S, fontWeight: 500, fontSize: "14px", color: "#374151", lineHeight: 1.7 }}>
                      {campuses[activeTab].address}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={17} className="text-orange-500 flex-shrink-0" />
                    <p style={{ ...S, fontWeight: 600, fontSize: "15px", color: "#111827" }}>
                      {campuses[activeTab].phone}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={17} className="text-orange-500 flex-shrink-0" />
                    <p style={{ ...S, fontWeight: 600, fontSize: "15px", color: "#111827" }}>
                      {campuses[activeTab].email}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={17} className="text-orange-500 flex-shrink-0" />
                    <p style={{ ...S, fontWeight: 600, fontSize: "15px", color: "#111827" }}>
                      {campuses[activeTab].hours}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(campuses[activeTab].address)}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-orange-600 transition-colors"
                style={{ ...S, fontWeight: 700, fontSize: "15px", color: "#F97316" }}
              >
                Get Directions <ChevronRight size={16} />
              </a>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm" style={{ minHeight: 340 }}>
              <iframe
                src={campuses[activeTab].mapSrc}
                className="map-frame w-full h-full"
                style={{ minHeight: 340, border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={campuses[activeTab].city}
              />
            </div>
          </motion.div>
        </section >

        {/* ── 4. BOTTOM CTA STRIP ── */}
        < section className="px-4 md:px-8 pb-16 max-w-6xl mx-auto" >
          <div
            className="rounded-3xl p-10 md:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}
          >
            <div>
              <p style={{ ...S, fontWeight: 900, fontSize: "clamp(1.3rem, 3vw, 1.7rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.2, marginBottom: "8px" }}>
                Ready to start your journey?
              </p>
              <p style={{ ...S, fontWeight: 400, fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: 1.65 }}>
                Join 11,000+ students who've built careers through Operating Media.
              </p>
            </div>
            <button
              className="shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white rounded-2xl transition-all duration-200 shadow-lg shadow-orange-900/30"
              style={{ ...S, fontWeight: 800, fontSize: "16px", padding: "18px 32px", whiteSpace: "nowrap" }}
            >
              Enroll Now <ArrowUpRight size={18} />
            </button>
          </div>
        </section >

      </main >
    </>
  );
}