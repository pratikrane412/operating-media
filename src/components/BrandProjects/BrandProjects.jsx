import React from 'react';
import { motion } from 'framer-motion';
import { Play, Linkedin, FileDown, Quote } from 'lucide-react';

const BrandProjects = () => {
  const projects = [
    {
      student: "Diya Jain",
      brand: "Amazon",
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      testimonial: "Operating Media provided the perfect platform to work on Amazon's PPC campaigns. Truly life-changing!",
      mentor: "Alex Rivers",
      mentorRole: "Head of Performance",
      mentorPic: "https://i.pravatar.cc/100?img=11"
    },
    {
      student: "Mahi Shah",
      brand: "Google",
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      testimonial: "From data-driven strategy to viral conversions — the Google project was intense and rewarding.",
      mentor: "Sarah Chen",
      mentorRole: "SEO Director",
      mentorPic: "https://i.pravatar.cc/100?img=5"
    },
    {
      student: "Soham Bhide",
      brand: "Netflix",
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
      testimonial: "Managing content strategy for a giant like Netflix was a dream. The mentorship was top-notch.",
      mentor: "James Wilson",
      mentorRole: "Content Strategist",
      mentorPic: "https://i.pravatar.cc/100?img=33"
    },
    {
      student: "Vidhi Garg",
      brand: "Tata",
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_logo.svg",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      testimonial: "Leading digital media planning for Tata was a massive responsibility that helped me grow rapidly.",
      mentor: "Priya Das",
      mentorRole: "Growth Head",
      mentorPic: "https://i.pravatar.cc/100?img=26"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="bg-[#292625] py-24 px-6 md:px-12 font-sans overflow-hidden text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Work on Real Brand Projects and <span className="text-white-300">Get Noticed</span>
          </h2>
          <p className="text-blue-100/60 mt-4 text-sm font-bold uppercase tracking-widest">
            Portfolio projects that get you noticed by the right people at Operating Media.
          </p>
        </div>

        {/* --- PROJECTS & TESTIMONIALS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projects.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              
              {/* 1. TOP VIDEO CARD */}
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative h-[380px] rounded-[2.5rem] overflow-hidden group shadow-2xl cursor-pointer border border-white/10"
              >
                <img src={item.image} className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0" alt="student" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                
                {/* Brand Logo in Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white p-6 rounded-3xl shadow-2xl transform group-hover:scale-110 transition-transform">
                      <img src={item.brandLogo} className="h-10 w-24 object-contain" alt="brand" />
                   </div>
                </div>

                {/* Watch Video Button at Bottom */}
                <div className="absolute bottom-6 w-full flex justify-center">
                   <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-xl text-[10px] font-black uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-all tracking-widest">
                      <Play size={12} fill="currentColor" /> Watch Video
                   </button>
                </div>
              </motion.div>

              {/* 2. BOTTOM TESTIMONIAL CARD */}
              <motion.div 
                variants={itemVariants}
                className="bg-white rounded-[2rem] p-8 shadow-2xl relative"
              >
                {/* Mentor Info Row */}
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-3">
                      <img src={item.mentorPic} className="w-10 h-10 rounded-full border-2 border-slate-50" alt="mentor" />
                      <div>
                         <h5 className="text-slate-900 font-black text-sm leading-none">{item.mentor}</h5>
                         <p className="text-slate-400 text-[9px] font-bold mt-1 uppercase tracking-tighter">{item.mentorRole}</p>
                      </div>
                   </div>
                   <div className="text-blue-600">
                      <Linkedin size={16} />
                   </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 text-xs font-medium leading-relaxed italic mb-8">
                  "{item.testimonial}"
                </p>

                {/* Brand Pill at Bottom Center */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center justify-center">
                   <img src={item.brandLogo} className="h-4 w-12 object-contain opacity-60" alt="brand pill" />
                </div>
              </motion.div>

            </div>
          ))}
        </motion.div>

        {/* --- FOOTER BUTTON --- */}
        <div className="mt-24 flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#f59f61] bg-[#f59f61] px-12 py-5 rounded-2xl font-black text-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-orange-500 hover:text-white transition-all flex items-center gap-4 group"
          >
            <FileDown className="group-hover:animate-bounce" />
            Download Brochure
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default BrandProjects;