import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

// ── AI TOOLS ──
const aiTools = [
  { name: "AiSensy",           src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-111.png" },
  { name: "Predis.ai",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-419.png" },
  { name: "Hootsuite",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-215.png" },
  { name: "Copy.ai",           src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-217.png" },
  { name: "Gemini",            src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-213.png" },
  { name: "Presentations.ai",  src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-216.png" },
  { name: "PlayHT",            src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-414.png" },
  { name: "Bing",              src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-415.png" },
  { name: "Bard",              src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-418.png" },
  { name: "Lumen5",            src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-417.png" },
  { name: "ChatGPT",           src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-153.png" },
  { name: "HeyGen",            src: "https://www.operatingmedia.com/wp-content/uploads/2024/10/Group-416.png" },
];

// ── MARKETING TOOLS ──
const dmTools = [
  { name: "SimilarWeb",     src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-89-6.png" },
  { name: "AliExpress",     src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-134.png" },
  { name: "Leadpages",      src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-99.png" },
  { name: "Amazon",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-142.png" },
  { name: "Wistia",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-140.png" },
  { name: "Google Console", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-94-1.png" },
  { name: "CJ Dropship",    src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-132.png" },
  { name: "Canva",          src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-114.png" },
  { name: "Vimeo",          src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-135.png" },
  { name: "Kapwing",        src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-136.png" },
  { name: "Zapier",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-139.png" },
  { name: "Audacity",       src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-138.png" },
  { name: "Zoho",           src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-148.png" },
  { name: "Flipkart",       src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-155.png" },
  { name: "Upwork",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-128.png" },
  { name: "Freelancer",     src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-127.png" },
  { name: "Fiverr",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-126.png" },
  { name: "WebEngage",      src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-124-1.png" },
  { name: "Oberlo",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-133.png" },
  { name: "Elementor",      src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-85-1.png" },
  { name: "Photopea",       src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-116.png" },
  { name: "Adobe Express",  src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-115.png" },
  { name: "Clan Connect",   src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-120.png" },
  { name: "Outreach",       src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-118.png" },
  { name: "Razorpay",       src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-143.png" },
  { name: "Prezi",          src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-151.png" },
  { name: "Instapage",      src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-108.png" },
  { name: "OptimizePress",  src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-98.png" },
  { name: "Jasper",         src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-97.png" },
  { name: "H2C Ad Network", src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-154.png" },
  { name: "YouTube",        src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-100.png" },
  { name: "Jotform",        src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-121.png" },
  { name: "ClickFunnels",   src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-129.png" },
  { name: "Mixpanel",       src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-117.png" },
  { name: "Zoom",           src: "https://www.operatingmedia.com/wp-content/uploads/2024/06/Group-92.png" },
  { name: "Google Analytics", src: "/images/Group-145.png" },
];

const LogoCard = ({ tool, index }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: index * 0.01 }}
    viewport={{ once: true }}
    className="bg-white border-r border-b border-gray-100 flex items-center justify-center p-4 h-[65px] md:h-[90px] group hover:bg-gray-50 transition-colors"
  >
    <img
      src={tool.src}
      alt={tool.name}
      className="max-w-full max-h-[25px] md:max-h-[35px] object-contain transition-all duration-300 group-hover:scale-110"
      loading="lazy"
    />
  </motion.div>
);

const ToolsTicker = () => {
  return (
    <section className="relative w-full py-13 bg-[#FAFAFA] font-['Inter',sans-serif] ">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* ── Standard Centered Header ── */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Master <span className="text-[#F26522]">120+ Industry</span> Leading Tools
          </h2>
          
          {/* Brand Signature Underline */}
          <div className="flex flex-col items-center gap-1 mb-6">
            <div className="h-[2px] w-54 bg-[#F26522] rounded-full" />
            <div className="flex gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]" />
            </div>
          </div>

          <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Get hands-on experience with the exact software stack used by top global agencies and AI-driven companies.
          </p>
        </div>

        {/* ── Tools Library Grid ── */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          
          {/* AI Sub-Header */}
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-100 flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F26522]">
              Section 01: AI Powered Tools
            </span>
          </div>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 border-l border-t border-gray-100">
            {aiTools.map((tool, idx) => (
              <LogoCard key={`ai-${idx}`} tool={tool} index={idx} />
            ))}
          </div>

          {/* Marketing Sub-Header */}
          <div className="bg-gray-50 px-8 py-4 border-b border-t border-gray-100 flex items-center justify-between mt-0">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F26522]">
              Section 02: Digital Marketing Stack
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 border-l border-t border-gray-100">
            {dmTools.map((tool, idx) => (
              <LogoCard key={`dm-${idx}`} tool={tool} index={idx} />
            ))}
          </div>
        </div>

        {/* ── Professional CTA ── */}
        <div className="mt-10 flex flex-col items-center gap-4">
           <motion.button 
             whileHover={{ scale: 1.02 }}
             whileTap={{ scale: 0.98 }}
             className="bg-[#F26522] text-white font-bold px-6 py-3 rounded-lg shadow-[0_10px_30px_rgba(242,101,34,0.3)] flex items-center gap-3 hover:bg-gray-950 transition-all duration-300 group"
           >
             <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
             DOWNLOAD COMPLETE TOOLS SYLLABUS
           </motion.button>
           <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
             Updated for 2025 Industry Standards
           </p>
        </div>

      </div>
    </section>
  );
};

export default ToolsTicker;