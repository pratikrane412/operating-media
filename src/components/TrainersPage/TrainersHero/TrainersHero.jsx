import React from 'react';
import { motion } from 'framer-motion';

const TrainersHero = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[750px] flex items-center justify-center overflow-hidden bg-white selection:bg-[#FF6B00] selection:text-white">
      
      {/* --- MESH GRADIENT BACKGROUND --- */}
      {/* This creates the soft orange/peach glow from your image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main Soft Peach Glow */}
        <div className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[70%] bg-[#FF6B00]/10 rounded-full blur-[120px] opacity-60" />
        
        {/* Secondary Pinkish Tint */}
        <div className="absolute -bottom-[10%] -left-[5%] w-[60%] h-[50%] bg-[#FFB6C1]/20 rounded-full blur-[100px] opacity-40" />
        
        {/* Subtle Bottom Center Highlight */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30%] bg-gradient-to-t from-[#FFD5B8]/30 to-transparent blur-3xl" />
      </div>

      {/* --- CONTENT SHELL --- */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Top Badge: Montserrat Rule */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1 bg-white/80 border border-gray-100 rounded-full mb-10 shadow-sm backdrop-blur-sm"
        >
          <span className="font-montserrat font-bold text-[10px] uppercase tracking-[0.3em] text-black">
             Our Faculty Members
          </span>
        </motion.div>

        {/* Main Heading: Inter 800 Rule */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-inter font-extrabold text-[40px] md:text-[68px] text-slate-900 leading-[1] tracking-[-0.03em] max-w-5xl mx-auto mb-10"
        >
          Learn from the <br /> 
          <span className="text-[#FF6B00]">Digital Craftsmen</span>
        </motion.h1>

        {/* Sub-text: Inter Normal Rule */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-inter font-medium text-[16px] md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Unlock your potential with industry experts who have shaped <br className="hidden md:block"/> 
          the digital landscape for over 14 years.
        </motion.p>

        {/* CTA Button: Poppins Black Rule */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.3 }}
        >
          <button className="bg-white hover:bg-black text-black hover:text-white font-poppins font-black text-xs tracking-[0.2em] uppercase px-12 py-6 rounded-2xl transition-all duration-500 shadow-xl border border-gray-100">
            Get Started
          </button>
        </motion.div>

      </div>

    </section>
  );
};

export default TrainersHero;