import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, ChevronDown, ArrowRight } from 'lucide-react';

export default function CounselorCTA() {
  
  // Inject Satoshi font dynamically
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section className="relative w-full bg-[#14120E] overflow-hidden z-10 selection:bg-yellow-500 selection:text-black">
      
      {/* ── Background Premium Effects ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-[120px] pointer-events-none" />

      {/* 
        ── MAIN LAYOUT ──
        pt-12 lg:pt-16 sets top spacing (Reduced)
        pb-0 ensures the container touches the absolute bottom edge
        items-stretch ensures right column takes full height of the left column
      */}
      <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-12 pt-12 lg:pt-16 pb-0 flex flex-col lg:flex-row items-stretch justify-between relative z-10">

        {/* ════ LEFT SIDE: FORM & CONTENT ════ */}
        {/* pb-12 lg:pb-16 ensures there's space below the form, but not the image */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center pb-8 lg:pb-16 z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-4">
              <span className="text-[12px] font-bold uppercase tracking-widest text-orange-400" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                Get In Touch
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-black text-white text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.1] tracking-tight mb-8" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              Book Your Free <br className="hidden sm:block" />
              <span className="text-[#FFC107]">Consultation Today!</span>
            </h2>

            {/* ── Form Container ── */}
            <form className="flex flex-col gap-4 w-full max-w-xl">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name Input */}
                <div className="bg-[#1F1C16]/80 backdrop-blur-md border border-[#3A3528] focus-within:border-yellow-500/50 transition-colors rounded-xl px-4 py-3 flex items-center gap-3">
                  <User size={18} className="text-[#8E8A7D]" />
                  <input 
                    type="text" 
                    placeholder="Enter Full Name*" 
                    className="bg-transparent outline-none w-full text-white text-[14.5px] placeholder:text-[#8E8A7D] font-medium"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="bg-[#1F1C16]/80 backdrop-blur-md border border-[#3A3528] focus-within:border-yellow-500/50 transition-colors rounded-xl px-4 py-3 flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-[#8E8A7D] text-[14.5px] font-medium border-r border-[#3A3528] pr-3 shrink-0">
                    🇮🇳 +91
                  </span>
                  <input 
                    type="tel" 
                    placeholder="Phone Number*" 
                    className="bg-transparent outline-none w-full text-white text-[14.5px] placeholder:text-[#8E8A7D] font-medium"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="bg-[#1F1C16]/80 backdrop-blur-md border border-[#3A3528] focus-within:border-yellow-500/50 transition-colors rounded-xl px-4 py-3 flex items-center gap-3">
                  <Mail size={18} className="text-[#8E8A7D]" />
                  <input 
                    type="email" 
                    placeholder="Email Address*" 
                    className="bg-transparent outline-none w-full text-white text-[14.5px] placeholder:text-[#8E8A7D] font-medium"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                    required
                  />
                </div>

                {/* Course Dropdown */}
                <div className="bg-[#1F1C16]/80 backdrop-blur-md border border-[#3A3528] hover:border-yellow-500/30 transition-colors rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer group relative">
                  <select defaultValue="" className="bg-transparent outline-none w-full text-[#8E8A7D] group-hover:text-white text-[14.5px] font-medium appearance-none cursor-pointer relative z-10" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    <option value="" disabled hidden>Select Course</option>
                    <option value="diploma" className="text-black">Diploma in Digital Marketing</option>
                    <option value="advanced" className="text-black">Advanced Diploma</option>
                    <option value="master" className="text-black">Master's Program</option>
                  </select>
                  <ChevronDown size={18} className="text-[#8E8A7D] group-hover:text-yellow-500 transition-colors absolute right-4 z-0" />
                </div>
              </div>

              {/* Location Dropdown */}
              <div className="bg-[#1F1C16]/80 backdrop-blur-md border border-[#3A3528] hover:border-yellow-500/30 transition-colors rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer group relative">
                <select defaultValue="" className="bg-transparent outline-none w-full text-[#8E8A7D] group-hover:text-white text-[14.5px] font-medium appearance-none cursor-pointer relative z-10" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  <option value="" disabled hidden>Select Location</option>
                  <option value="andheri" className="text-black">Andheri Campus</option>
                  <option value="borivali" className="text-black">Borivali Campus</option>
                  <option value="online" className="text-black">Online Batch</option>
                </select>
                <ChevronDown size={18} className="text-[#8E8A7D] group-hover:text-yellow-500 transition-colors absolute right-4 z-0" />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 bg-[#FFC107] hover:bg-[#FFB300] text-[#16140D] flex items-center justify-center gap-2 w-full sm:w-fit px-10 py-3.5 rounded-full font-bold text-[15px] shadow-[0_10px_25px_rgba(255,193,7,0.2)] transition-all"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                Request A Quote <ArrowRight size={18} strokeWidth={2.5} />
              </motion.button>

            </form>
          </motion.div>
        </div>

        {/* ════ RIGHT SIDE: GIRL IMAGE ════ */}
        <div className="w-full lg:w-[45%] h-[350px] sm:h-[450px] lg:h-auto relative flex items-end justify-center lg:justify-end z-10 pt-8 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="relative w-full flex items-end justify-center lg:justify-end h-full"
          >
            {/* 
              Image matches the container height (form height) 
              object-bottom ensures it stays glued to the bottom border 
            */}
            <img
              src="/images/op-img.png"
              alt="Student Counselor"
              className="object-contain object-bottom max-h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            />
            
            {/* CSS-Applied OM Logo on T-shirt */}
            {/* Adjust top/left percentages if the new image crop is slightly different */}
            <div className="absolute top-[52%] left-[45%] lg:top-[55%] lg:left-[48%] -translate-x-1/2 -translate-y-1/2 opacity-90 mix-blend-multiply pointer-events-none transform -rotate-2">
              <img 
                src="https://www.operatingmedia.com/wp-content/uploads/2023/07/OM-Logo.png" 
                alt="" 
                className="w-20 sm:w-24 lg:w-32 grayscale-[10%] contrast-125"
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Custom Animation Style */}
      <style>{`
        .animate-pulse-slow {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}