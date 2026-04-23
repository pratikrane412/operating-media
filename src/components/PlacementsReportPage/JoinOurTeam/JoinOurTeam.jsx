import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Sparkles, MoveRight } from 'lucide-react';

const JoinOurTeam = () => {
  const jobs = [
    {
      title: "Education Counsellor",
      desc: "We are a Digital Marketing training institute looking for a Business Development Executive / Counsellor for our Mumbai branch.",
      type: "Full Time",
      location: "Mumbai"
    },
    {
      title: "Graphic Designer",
      desc: "We are seeking a talented and creative Graphic Designer with 1 year of experience to join our dynamic and fast-paced team.",
      type: "Full Time",
      location: "Mumbai"
    },
    {
      title: "PPC Specialist",
      desc: "We are currently seeking a motivated and detail-oriented PPC Specialist with 1 year experience to join our marketing team.",
      type: "Full Time",
      location: "Mumbai"
    }
  ];

  return (
    <section className="relative w-full bg-white font-['Inter',sans-serif] overflow-hidden antialiased">
      
      {/* --- 1. HERO HEADER WITH TEAM BACKGROUND --- */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Team Background"
        />
        {/* Sophisticated Orange Overlay - Brand Colors */}
        <div className="absolute inset-0 bg-[#FF5A1F]/90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-black text-5xl lg:text-7xl uppercase tracking-tighter mb-6"
          >
            Join Our <span className="text-orange-200">Team</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/90 font-medium text-[16px] lg:text-lg leading-relaxed"
          >
            We value creativity, collaboration, and a passion for excellence. By working with us, 
            you'll have the opportunity to contribute to exciting projects and grow professionally 
            within Mumbai's leading digital ecosystem.
          </motion.p>
        </div>
      </div>

      {/* --- 2. JOB OPENINGS GRID --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 pb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="mb-6 flex justify-between items-start">
                 {/* Icon Background Changed to Light Orange */}
                 <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-[#FF5A1F]">
                    <Sparkles size={24} />
                 </div>
                 <span className="bg-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">Hiring Now</span>
              </div>

              {/* JOB TITLE: Strictly following Inter 700 / 24px spec */}
              <h3 className="font-['Inter'] font-[700] text-[24px] text-[#111827] mb-4 leading-tight group-hover:text-[#FF5A1F] transition-colors tracking-tight">
                {job.title}
              </h3>
              
              <p className="text-[#6B7280] font-normal text-[14px] leading-relaxed mb-8 flex-grow">
                {job.desc}
              </p>

              <div className="space-y-4 mb-8 pt-6 border-t border-gray-50">
                 <div className="flex items-center gap-3 text-gray-500 text-sm font-bold uppercase tracking-wider">
                    <Briefcase size={16} className="text-[#FF5A1F]" /> {job.type}
                 </div>
                 <div className="flex items-center gap-3 text-gray-500 text-sm font-bold uppercase tracking-wider">
                    <MapPin size={16} className="text-[#FF5A1F]" /> {job.location}
                 </div>
              </div>

              {/* Primary Button hover color changed to Orange */}
              <button className="w-full bg-[#111827] text-white py-4 rounded-2xl font-black text-[11px] tracking-widest flex items-center justify-center gap-4 hover:bg-[#FF5A1F] transition-all duration-300 group/btn shadow-lg uppercase">
                 View Details <MoveRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-20 flex flex-col items-center text-center">
           {/* Badge styling changed to Orange tints */}
           <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-6 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse"></span>
              <span className="text-[#FF5A1F] font-bold text-[11px] uppercase tracking-widest">General Applications Open</span>
           </div>
           <p className="text-gray-400 font-medium text-sm max-w-md">
             Don't see a position that fits your profile? Send your resume to <br />
             <span className="text-[#111827] font-black border-b border-gray-200 pb-0.5 mt-2 inline-block">careers@operatingmedia.com</span>
           </p>
        </div>
      </div>

    </section>
  );
};

export default JoinOurTeam;