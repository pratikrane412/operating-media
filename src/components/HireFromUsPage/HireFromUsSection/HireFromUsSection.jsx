import { useState } from 'react';
import { CheckCircle, ArrowRight, Users, Briefcase, Star } from 'lucide-react';

const perks = [
  "Hands on Experience on all Topics",
  "100+ Hours of Training and Case Studies",
  "In-house Examinations to improve Skills",
  "Complete Placement Support",
  "Instant Access to all the CV's",
  "Industry Ready Candidates",
  "Fresh Talent Ready to Contribute to Your Success",
  "0 Cost – 100% Talent",
];

const stats = [
  { icon: <Users size={18} />, value: "3,500+", label: "Trained Alumni" },
  { icon: <Briefcase size={18} />, value: "200+", label: "Hiring Partners" },
  { icon: <Star size={18} />, value: "0 Cost", label: "To You" },
];

 function HireFromUsSection() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    organisation: '', openingFor: '', city: '', state: '',
    hiringFor: '', workLocation: '', website: '', agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm text-[#111111] placeholder-gray-400 focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors bg-white";
  const selectClass = "w-full border border-gray-200 rounded-xl px-4 py-3 font-inter text-sm text-gray-400 focus:outline-none focus:border-[#FF5A1F] focus:ring-1 focus:ring-[#FF5A1F] transition-colors bg-white";

  return (
    <section className="relative font-inter overflow-hidden py-24 px-6 lg:px-16">

      {/* background image */}
      <img
        src="./images/HireFromUs_image.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#0A0A0A]/75 pointer-events-none" />

      {/* dot grid texture on top */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* orange glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#FF5A1F] opacity-[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* ── LEFT ── */}
        <div>
          {/* eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#FF5A1F]" />
            <span className="font-inter font-semibold text-[10px] text-[#FF5A1F] tracking-[0.35em] uppercase">
              Hire From Us
            </span>
          </div>

          {/* heading */}
          <h2 className="font-inter font-semibold text-white leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Save Money and Time <br />on Training.{' '}
            <span className="text-[#FF5A1F]">Hire Freshly<br />Trained Talent.</span>
          </h2>

          {/* orange rule */}
          <div className="w-14 h-[3px] bg-[#FF5A1F] rounded-full mb-10" />

          {/* perks */}
          <ul className="space-y-3 mb-12">
            {perks.map((perk, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-[#FF5A1F] mt-0.5 shrink-0" />
                <span className="font-inter font-normal text-[15px] text-white/65 leading-snug">
                  {perk}
                </span>
              </li>
            ))}
          </ul>

          {/* stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-1.5">
                <span className="text-[#FF5A1F]">{s.icon}</span>
                <span className="font-inter font-semibold text-white text-xl leading-none">{s.value}</span>
                <span className="font-inter font-normal text-white/40 text-[11px] uppercase tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: FORM ── */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                <CheckCircle size={32} className="text-[#FF5A1F]" />
              </div>
              <h3 className="font-inter font-semibold text-[#111111] text-2xl">Message Sent!</h3>
              <p className="font-inter text-gray-400 text-sm max-w-xs">
                Our team will get in touch with you soon.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h3 className="font-inter font-semibold text-[#111111] text-[22px] tracking-tight">
                  Contact Us
                </h3>
                <p className="font-inter font-normal text-gray-400 text-sm mt-1">
                  Our team will get in touch with you soon.
                </p>
              </div>

              <form onSubmit={submit} className="space-y-3">

                <div className="grid grid-cols-2 gap-3">
                  <input name="firstName" value={form.firstName} onChange={handle} required placeholder="First Name" className={inputClass} />
                  <input name="lastName" value={form.lastName} onChange={handle} required placeholder="Last Name" className={inputClass} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input name="email" type="email" value={form.email} onChange={handle} required placeholder="Email Address" className={inputClass} />
                  <input name="phone" value={form.phone} onChange={handle} required placeholder="Phone" className={inputClass} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input name="organisation" value={form.organisation} onChange={handle} placeholder="Name of Organisation" className={inputClass} />
                  <select name="openingFor" value={form.openingFor} onChange={handle} className={selectClass}>
                    <option value="">Opening For?</option>
                    <option>Internship</option>
                    <option>Full-time</option>
                    <option>Contract</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input name="city" value={form.city} onChange={handle} placeholder="City" className={inputClass} />
                  <input name="state" value={form.state} onChange={handle} placeholder="State" className={inputClass} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <select name="hiringFor" value={form.hiringFor} onChange={handle} className={selectClass}>
                    <option value="">Hiring for?</option>
                    <option>Digital Marketing</option>
                    <option>SEO</option>
                    <option>Performance Marketing</option>
                    <option>Social Media</option>
                    <option>Content</option>
                  </select>
                  <input name="workLocation" value={form.workLocation} onChange={handle} placeholder="Work Location" className={inputClass} />
                </div>

                <input name="website" value={form.website} onChange={handle} placeholder="Website of Organisation" className={inputClass} />

                <label className="flex items-start gap-3 cursor-pointer pt-1">
                  <input type="checkbox" name="agree" checked={form.agree} onChange={handle} required
                    className="mt-0.5 w-4 h-4 shrink-0 accent-[#FF5A1F]" />
                  <span className="font-inter font-normal text-[12px] text-gray-400 leading-relaxed">
                    I agree to Operating Media Terms and Conditions and their Privacy Policy
                  </span>
                </label>

                <button type="submit"
                  className="group w-full bg-[#FF5A1F] hover:bg-[#111111] text-white font-inter font-semibold text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 mt-2">
                  Send Message
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>

              </form>
            </>
          )}
        </div>

      </div>
    </section>
  );
}

export default HireFromUsSection;