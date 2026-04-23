import React from 'react';
import { motion } from 'framer-motion';

const BlogspageHero = () => {
  return (
    <section className="relative bg-[#2E68FF] pt-40 pb-28 overflow-hidden font-inter min-h-[550px] flex items-center">
      
      {/* --- EXACT UNTITLED UI RIPPLE BACKGROUND --- */}
      {/* Ripple 1 (Large) */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] border border-white/10 rounded-full z-0 pointer-events-none"></div>
      {/* Ripple 2 (Medium) */}
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] border border-white/15 rounded-full z-0 pointer-events-none"></div>
      {/* Ripple 3 (Small) */}
      <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] border border-white/5 rounded-full z-0 pointer-events-none"></div>
      
      {/* Background Soft Glow to mimic the image depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10 w-full">
        
        {/* --- MAIN CONTENT (Using your motion-custom utility) --- */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16 text-left motion-custom">
          
          <div className="flex-1">
            {/* Small Label */}
            <p className="text-white/80 font-inter font-bold text-xs uppercase tracking-widest mb-6">
              Blog
            </p>
            
            {/* THE HEADLINE: EXACT SPECS (Inter 32px 600w) */}
            <h1 className="font-inter font-semibold text-[32px] md:text-[52px] text-white leading-tight tracking-tight mb-10 max-w-2xl">
              The iBraine Journal: Digital Resources, <br />
              Interviews, and Industry News
            </h1>

            {/* SUBSCRIPTION UI (Exactly like the blue image) */}
            <div className="flex flex-col sm:flex-row items-center bg-white rounded-xl overflow-hidden max-w-md p-1.5 shadow-2xl">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="flex-1 bg-white text-black py-3 px-6 focus:outline-none font-inter text-sm"
               />
               <button className="w-full sm:w-auto bg-[#2E68FF] text-white px-8 py-3 rounded-lg font-inter font-semibold text-sm hover:bg-blue-700 transition-all duration-300">
                  Subscribe
               </button>
            </div>
          </div>

          {/* SIDE DESCRIPTION (Exact 16px Inter 400w) */}
          <div className="lg:max-w-[380px] pb-4">
             <p className="font-inter font-normal text-[16px] text-white/90 leading-relaxed">
               Subscribe to learn about new product features, the latest in technology, AI solutions, and marketing updates.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogspageHero;