import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Mail, BarChart3, CheckCircle2 } from 'lucide-react';

const CaseStudyHero = () => {
  // Gentle floating animation
  const float = (delay = 0) => ({
    initial: { y: 0 },
    animate: { y: [0, -15, 0] },
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay }
  });

  return (
    <section className="relative w-full bg-[#FDF8EE] min-h-[750px] flex items-center overflow-hidden rounded-bl-[100px] lg:rounded-bl-[160px] font-sans">
      
      {/* 1. The Orange Sidebar seen in the image */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#F27324] hidden lg:block z-50" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        
        {/* --- LEFT CONTENT --- */}
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}
            className="text-[50px] lg:text-[80px] font-black text-[#2D2D2D] leading-[1] tracking-tight mb-6"
          >
            It’s Now Easier To <br />
            <span className="text-[#F27324]">Study Online</span>
          </motion.h1>
          <p className="text-[#5F5F5F] text-xl leading-relaxed max-w-md mb-10">
            We are an interesting platform that will teach you more in an interactive way.
          </p>

          <div className="flex items-center gap-8">
            <button className="bg-[#F27324] hover:bg-[#E06110] text-white px-10 py-4 rounded-2xl font-black text-lg shadow-2xl shadow-orange-300 transition-all active:scale-95">
              Get Started
            </button>
            <button className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-[#2DA4FF] group-hover:scale-110 transition-transform">
                <Play fill="currentColor" size={20} className="ml-1" />
              </div>
              <span className="font-bold text-[#2D2D2D] text-lg">Watch how it works</span>
            </button>
          </div>
        </div>

        {/* --- RIGHT VISUALS (Fixed Grid) --- */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Central Image Container */}
          <div className="relative z-10 w-[420px] h-[520px] rounded-[40px] overflow-hidden shadow-2xl border-[10px] border-white/20">
            <img 
              src="https://www.operatingmedia.com/photo-1544717305-27a734ef1904?q=80&w=2070&auto=format&fit=crop" 
              alt="Student" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* CARD 1: User Experience Class (Top Left) */}
          <motion.div 
            {...float(0.5)}
            className="absolute -top-4 -left-12 z-30 bg-white/95 backdrop-blur-md p-6 rounded-[32px] shadow-2xl w-[260px] border border-white"
          >
            <div className="flex items-center gap-4 mb-5">
              <img src="https://i.pravatar.cc/100?img=32" className="w-12 h-12 rounded-full border-2 border-orange-100" alt="avatar" />
              <div>
                <p className="text-sm font-black text-[#2D2D2D]">User Experience Class</p>
                <p className="text-[10px] font-bold text-gray-400">Friday at 10.00 AM</p>
              </div>
            </div>
            <button className="w-full bg-[#FF4B81] text-white py-3 rounded-2xl font-black text-xs tracking-widest transition-colors hover:bg-[#E63E70]">
              JOIN NOW
            </button>
          </motion.div>

          {/* CARD 2: Assisted Students (Center Bottom) */}
          <motion.div 
            {...float(0)}
            className="absolute bottom-4 left-[-20px] z-30 bg-white/95 backdrop-blur-md p-5 rounded-3xl shadow-2xl flex items-center gap-4 border border-white"
          >
            <div className="w-12 h-12 bg-[#E7F5FF] text-[#2DA4FF] rounded-xl flex items-center justify-center">
              <Calendar size={24} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-2xl font-black text-[#2D2D2D] leading-none">175k</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">Assisted Student</p>
            </div>
          </motion.div>

          {/* CARD 3: Congratulations (Right) */}
          <motion.div 
            {...float(1.2)}
            className="absolute -right-8 top-[45%] z-30 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl flex items-center gap-5 border border-white"
          >
            <div className="w-14 h-14 bg-[#FFF0E6] text-[#F27324] rounded-2xl flex items-center justify-center">
              <Mail size={28} />
            </div>
            <div className="relative pr-8">
              <p className="text-lg font-black text-[#2D2D2D] leading-tight">Congratulations</p>
              <p className="text-xs font-bold text-gray-400 mt-1">Your admission is done</p>
              <div className="absolute top-0 right-0 bg-[#3AAA35] text-white rounded-full p-1">
                <CheckCircle2 size={16} strokeWidth={3} />
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Pink Stats Box (Top Right) */}
          <motion.div 
            {...float(1.8)}
            className="absolute top-12 right-6 z-30 bg-[#FF4B81] p-4 rounded-2xl shadow-xl text-white border border-white/20"
          >
            <BarChart3 size={32} />
          </motion.div>

        </div>
      </div>

      {/* Background Decor Blobs */}
      <div className="absolute top-[-20%] left-[30%] w-[600px] h-[600px] bg-orange-100/40 blur-[140px] rounded-full -z-10" />
    </section>
  );
};

export default CaseStudyHero;