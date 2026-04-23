import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowUpRight, Quote } from 'lucide-react';

const AlumniTestimonials = () => {
  const testimonials = [
    {
      name: "Shahreen Ansari",
      role: "Digital Marketing Executive",
      company: "McDonald's India",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg"
    },
    {
      name: "Fahad Ansari",
      role: "Junior Brand Strategist",
      company: "Dentsu International",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dentsu_logo.svg"
    },
    {
      name: "Nitin Pandey",
      role: "Assistant Manager - Social",
      company: "Jio World Drive",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Reliance_Jio_Logo.svg"
    },
    {
      name: "Riddhi Shinde",
      role: "Creative Copywriter",
      company: "FCB Kinnect",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/41/FCB_Logo.svg"
    }
  ];

  return (
    <section id="testimonials" className="py-12 bg-[#F8F9FB] font-['Inter'] antialiased">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER SECTION - Precise colors #212121 and #808080 */}
        <div className="text-start mb-16 border-l-4 border-[#1E3B8A] pl-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#212121] font-semibold text-[34px] leading-tight mb-4 tracking-tight">
              Hear It From <span className="text-[#1E3B8A]">Our Alumni</span>
            </h2>
            <p className="text-[#808080] font-medium text-[16px] max-w-2xl leading-relaxed">
              Discover how Operating Media’s Master’s Program has shaped high-growth 
              careers for our students across top global agencies.
            </p>
          </motion.div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((student, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* VIDEO SPACE - I have left this for you to add your content */}
              <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
                {/* 
                   INSERT VIDEO HERE:
                   Replace this <div> with your <video> tag or <iframe> 
                */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-300 to-gray-400">
                   <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play fill="white" className="text-white ml-1" size={24} />
                   </div>
                </div>

                {/* Bottom Overlay Info - IIDE Style */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                   <h4 className="text-white font-semibold text-[20px] mb-1 leading-tight">
                     {student.name}
                   </h4>
                   <div className="bg-[#1E3B8A] h-0.5 w-12 group-hover:w-full transition-all duration-500" />
                </div>
              </div>

              {/* DETAILS SECTION - Exact #808080 Body Color */}
              <div className="p-6 bg-white">
                <p className="text-[#808080] font-medium text-[13px] uppercase tracking-wider mb-4 leading-tight">
                  {student.role}
                </p>
                
                {/* Company Recognition */}
                <div className="flex items-center justify-between">
                   <img 
                    src={student.companyLogo} 
                    alt={student.company} 
                    className="h-6 w-auto grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                   />
                   <ArrowUpRight size={18} className="text-gray-300 group-hover:text-[#1E3B8A] transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SOCIAL PROOF - Aligned to Start */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-10 bg-white rounded-[3rem] border border-gray-100">
           <div className="flex items-center gap-6 mb-8 md:mb-0">
              <div className="p-4 bg-orange-50 rounded-2xl">
                 <Quote className="text-[#1E3B8A]" size={32} />
              </div>
              <div className="text-start">
                 <p className="text-[#212121] font-semibold text-[20px] tracking-tight">Joined by 11,000+ Success Stories</p>
                 <p className="text-[#808080] font-medium text-[15px]">The most trusted name in Mumbai's Digital Marketing ecosystem.</p>
              </div>
           </div>
           
           <button className="bg-[#1E3B8A] hover:bg-[#212121] text-white font-semibold text-[16px] px-10 py-5 rounded-full transition-all shadow-lg flex items-center gap-3">
              Explore All Stories <ArrowUpRight size={20} />
           </button>
        </div>

      </div>
    </section>
  );
};

export default AlumniTestimonials;