import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // Added for Portal
import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";

const locations = ["Andheri West", "Borivali West"];

export default function DownloadBrochure() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", location: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.location) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setIsOpen(false);
      setForm({ name: "", email: "", phone: "", location: "" });
    }, 2500);
  };

  const inputCls = "w-full border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-700 outline-none focus:border-orange-500 transition-all bg-white";

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP - High z-index to black out background */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={() => setIsOpen(false)} 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998]" 
          />

          {/* MODAL - Fixed to the far RIGHT side */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 100 }} 
            className="fixed top-1/2 -translate-y-1/2 right-4 md:right-10 z-[99999] bg-white rounded-3xl w-[95%] max-w-[380px] shadow-[0_25px_60px_rgba(0,0,0,0.4)] border border-gray-100 overflow-visible"
          >
            {/* Close Button - Style matches your reference exactly */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-[#2d4356] flex items-center justify-center text-white shadow-xl hover:bg-black transition-all z-[100000]"
            >
              <X size={18}/>
            </button>

            <div className="p-8">
              {/* Header Pill */}
              <div className="bg-[#FF6A00] rounded-full py-3.5 px-6 mb-8 shadow-md">
                <h3 className="text-white font-bold text-center text-lg tracking-tight">Download Brochure</h3>
              </div>

              <div className="flex flex-col gap-5">
                <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className={inputCls} />
                <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className={inputCls} />

                <div className="relative">
                  <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} className={inputCls} />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border-l pl-2 border-gray-300">
                    <span className="text-sm font-bold text-black-500 mr-1">IN</span>
                    
                  </div>
                </div>

                <select name="location" onChange={handleChange} className={inputCls}>
                  <option value="">Select Location</option>
                  {locations.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
                
                <div className="flex justify-start mt-2">
                  <button 
                    onClick={handleSubmit} 
                    className={`px-10 py-3.5 rounded-md font-bold text-white transition-all shadow-lg ${
                      sent ? "bg-green-500" : "bg-[#FF6A00] hover:bg-orange-600 shadow-orange-500/20"
                    }`}
                  >
                    {sent ? "✓ Sent!" : "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-3 bg-white border border-gray-200 text-[#111111] font-semibold text-sm px-8 py-4 rounded-xl hover:bg-gray-50 transition-all"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <Download size={16} className="text-[#FF5A1F]" />
        Download Syllabus
      </button>

      {/* This sends the modal to the very top of the HTML body */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}