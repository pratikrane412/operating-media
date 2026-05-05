import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useModal } from "../../../context/ModalContext";

const locations = ["Andheri", "Borivali", "Online"];

export default function BrochureModal() {
  const { isBrochureModalOpen, closeBrochureModal } = useModal();
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.location) {
      alert("Please fill all fields");
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

  const inputCls = "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 outline-none focus:border-[#ECAB00] transition-all bg-white";

  return createPortal(
    <AnimatePresence>
      {isBrochureModalOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBrochureModal}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[99998]"
          />

          {/* MODAL - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[99999] bg-white rounded-2xl w-[95%] max-w-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 overflow-visible"
          >
            {/* Close Button */}
            <button
              onClick={closeBrochureModal}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shadow-lg hover:bg-[#ECAB00] transition-all z-[100000]"
            >
              <X size={16} />
            </button>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Download Brochure</h3>
                <p className="text-xs text-gray-500 font-medium">Please fill in your details to get the brochure.</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputCls}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className={inputCls}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputCls}
                  required
                />
                <select
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className={inputCls}
                  required
                >
                  <option value="">Select Location</option>
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  disabled={sent}
                  className={`mt-2 w-full py-3.5 rounded-lg font-bold text-white transition-all shadow-md flex items-center justify-center gap-2 ${
                    sent ? "bg-green-500" : "bg-black hover:bg-[#ECAB00] hover:text-black"
                  }`}
                >
                  {sent ? (
                    <>✓ Sent!</>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
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
