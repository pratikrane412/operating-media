import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Target, 
  MessageCircle, 
  Zap, 
  Layout, 
  Briefcase 
} from 'lucide-react';

const POINTS = [
  { 
    title: "Actual Experience",   
    desc: "Our faculty isn't just academic; they are practitioners who manage million-dollar ad spends daily.", 
    icon: <Briefcase className="w-6 h-6" /> 
  },
  { 
    title: "Personalized Focus",  
    desc: "Small batch sizes ensure our mentors can focus on your specific career roadmap and skill gaps.", 
    icon: <Target className="w-6 h-6" /> 
  },
  { 
    title: "Real-time Query Solving",       
    desc: "Access a dedicated discord/slack community for instant feedback on your live campaign hurdles.", 
    icon: <MessageCircle className="w-6 h-6" /> 
  },
  { 
    title: "Methodical Simplicity",      
    desc: "We break down complex algorithmic logic into actionable, easy-to-understand marketing frameworks.", 
    icon: <Zap className="w-6 h-6" /> 
  },
  { 
    title: "Practical Immersion",  
    desc: "Work on real-world client briefs from partner agencies. Build a portfolio that actually gets you hired.", 
    icon: <Layout className="w-6 h-6" /> 
  },
  { 
    title: "Core Foundation",   
    desc: "Master the evergreen psychological theories of marketing alongside modern AI-driven tools.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
];

const FeatureCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 overflow-hidden"
    >
      {/* Subtle Background Number */}
      <span className="absolute -right-4 -bottom-4 text-9xl font-black text-gray-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
        0{index + 1}
      </span>

      {/* Icon Wrapper */}
      <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-500">
        {item.icon}
      </div>

      {/* Title - Strictly following your Inter 700 / 24px spec */}
      <h3 className="font-['Inter'] font-[700] text-[24px] text-gray-900 leading-tight mb-4 tracking-tight">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 leading-relaxed text-[15px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
        {item.desc}
      </p>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
    </motion.div>
  );
};

const AboutFaculty = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA] relative overflow-hidden font-['Inter']">
      
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 blur-[120px] rounded-full -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50/50 blur-[120px] rounded-full -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-10 bg-orange-500" />
              <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-orange-500">Methodology</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-[900] text-gray-950 tracking-tighter leading-[1.05]">
              Redefining Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Learning Standards.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-lg max-w-sm font-medium leading-relaxed">
            We don't just teach tools; we build the strategic mindset required to lead the industry.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {POINTS.map((point, i) => (
            <FeatureCard key={i} item={point} index={i} />
          ))}
        </div>

        {/* Institutional Authority Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          {/* Add Agency Partner Logos here if needed */}
          <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Trusted by Global Marketing Teams</span>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFaculty;