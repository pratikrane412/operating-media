import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { useModal } from "../../../context/ModalContext";

const locations = ["Andheri", "Borivali", "Online"];

export default function BrochureModal() {
  const { isBrochureModalOpen, closeBrochureModal } = useModal();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "" });
  const [sent, setSent] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.location) {
      return;
    }
    setSent(true);
    // Simulate API call
    setTimeout(() => {
      setSent(false);
      closeBrochureModal();
      setForm({ name: "", email: "", phone: "", location: "" });
    }, 2500);
  };

  if (!mounted) return null;

  const inputWrapperCls = "relative group";
  const iconCls = "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#ECAB00] transition-colors duration-300";
  const inputCls = "w-full bg-gray-50/50 border border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-sm text-gray-900 outline-none focus:border-[#ECAB00] focus:bg-white focus:ring-4 focus:ring-[#ECAB00]/10 transition-all duration-300 shadow-sm";

  return createPortal(
    <AnimatePresence>
      {isBrochureModalOpen && (
        <>
          {/* PREMIUM BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBrochureModal}
            className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-[99998]"
          />

          {/* PREMIUM MODAL - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[99999] bg-white/95 backdrop-blur-xl rounded-[2.5rem] w-[95%] max-w-[400px] shadow-[0_40px_100px_rgba(15,23,42,0.15)] border border-white/20 overflow-visible"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {/* Glossy Overlay Effect */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/40 to-transparent rotate-12" />
            </div>

            {/* Close Button - Premium Style */}
            <button
              onClick={closeBrochureModal}
              className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0f172a] shadow-xl hover:bg-[#ECAB00] hover:text-white transition-all duration-300 z-[100000] border border-gray-100"
            >
              <X size={20} strokeWidth={2.5} />
            </button>

            <div className="relative p-8 md:p-10">
              {/* Header with Sparkle */}
              <div className="mb-8 relative">
                
                <h3 className="text-2xl font-black text-[#0f172a] tracking-tight leading-tight">
                  Download Our <br />
                  <span className="text-[#ECAB00]">Digital Brochure</span>
                </h3>
                <p className="text-sm text-gray-500 mt-2 font-medium">Get exclusive insights into our curriculum & placement network.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className={inputWrapperCls}>
                  <User size={18} className={iconCls} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputCls}
                    required
                  />
                </div>

                <div className={inputWrapperCls}>
                  <Mail size={18} className={iconCls} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className={inputCls}
                    required
                  />
                </div>

                <div className={inputWrapperCls}>
                  <Phone size={18} className={iconCls} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputCls}
                    required
                  />
                </div>

                <div className={inputWrapperCls}>
                  <MapPin size={18} className={iconCls} />
                  <select
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    className={`${inputCls} appearance-none`}
                    required
                  >
                    <option value="" disabled>Preferred Campus</option>
                    {locations.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={sent}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`relative mt-4 w-full py-4.5 rounded-2xl font-black text-white transition-all duration-500 overflow-hidden shadow-[0_20px_40px_-10px_rgba(236,171,0,0.3)] group ${
                    sent ? "bg-green-500" : "bg-[#0f172a]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ECAB00] to-[#FF6A00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    {sent ? (
                      <>
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                          ✓
                        </motion.div>
                        <span>Brochure Sent!</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[16px] tracking-tight">Request Brochure</span>
                        <motion.div
                          animate={{ x: isHovered ? 5 : 0 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Send size={18} strokeWidth={2.5} />
                        </motion.div>
                      </>
                    )}
                  </div>
                </button>
              </form>

              
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
