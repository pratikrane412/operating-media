import React from 'react';
import { motion } from 'framer-motion';

const PlacementsHeroSection = () => {
  return (
    <section className="bg-white font-['Inter',sans-serif] py-24 px-6 lg:px-20 overflow-hidden antialiased">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        {/* ── LEFT COLUMN: REFINED CONTENT ── */}
        <div className="lg:col-span-6">
          {/* Subtle Accent Line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-[2px] bg-black" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.4em] text-slate-400">
              Class of 2025/26
            </span>
          </div>

          {/* FAANG-Style Headline - Weight 900 */}
          <h1 className="text-5xl md:text-[80px] font-[900] text-black leading-[0.9] tracking-[-0.05em] mb-10">
            The Talent <br /> 
            <span className="text-[#FF5A1F]">Benchmark.</span>
          </h1>

          {/* THE SPEC: INTER 700 / 24PX */}
          <div className="max-w-md">
            <h2 className="font-['Inter'] font-[700] text-[24px] text-black leading-snug tracking-tight mb-8">
              We build the practitioners who drive the world’s most{' '}
              <span className="relative inline-block whitespace-nowrap">
                ambitious brands.
                <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#FF5A1F] rounded-full" />
              </span>
            </h2>

            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12">
              A placement record audited by global agencies. 11,000+ students transitioned into elite roles.
            </p>
          </div>

          <button className="bg-black text-white px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.25em] hover:bg-[#FF5A1F] transition-all duration-500 shadow-xl active:scale-95">
            View Success Portal
          </button>
        </div>

        {/* ── RIGHT COLUMN: SMALL STAGGERED GRID ── */}
        <div className="lg:col-span-6 relative flex justify-center">
          
          {/* Subtle background glow to make images pop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-50 blur-[120px] rounded-full -z-10" />

          <div className="grid grid-cols-2 gap-5 w-full max-w-[500px]">
            
            {/* Column 1: Tighter Containers */}
            <div className="space-y-5">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl border-4 border-white"
              >
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600" 
                  className="w-full h-full object-cover" 
                  alt="Simran"
                />
                <div className="absolute bottom-5 left-5 text-white z-10">
                  <p className="text-sm font-black tracking-tight">Simran K.</p>
                  <p className="text-[#FF5A1F] text-[8px] font-bold uppercase tracking-widest">Digital Lead</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>

              <div className="relative rounded-[35px] overflow-hidden aspect-square bg-slate-50 shadow-lg border-2 border-white translate-x-4">
                 <img 
                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600" 
                   className="w-full h-full object-cover" 
                   alt="Meta Alum"
                 />
                 <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full shadow-md">
                    <span className="text-[9px] font-black text-black">META</span>
                 </div>
              </div>
            </div>

            {/* Column 2: Offset Upwards */}
            <div className="space-y-5 -translate-y-8">
              <div className="relative rounded-[40px] overflow-hidden aspect-[4/4.5] bg-slate-50 shadow-xl border-2 border-white">
                 <img 
                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600" 
                   className="w-full h-full object-cover" 
                   alt="Google Alum"
                 />
                 <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full shadow-md">
                    <span className="text-[9px] font-black text-black uppercase">GOOGLE</span>
                 </div>
              </div>

              <div className="relative rounded-[35px] overflow-hidden aspect-[4/5] bg-slate-50 shadow-xl border-2 border-white -translate-x-4">
                 <img 
                   src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600" 
                   className="w-full h-full object-cover" 
                   alt="Amazon Alum"
                 />
                 <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full shadow-md">
                    <span className="text-[9px] font-black text-black uppercase">AMAZON</span>
                 </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PlacementsHeroSection;