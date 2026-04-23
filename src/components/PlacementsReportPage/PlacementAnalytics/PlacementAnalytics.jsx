import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  TrendingUp, 
  Target, 
  Users, 
  FileText, 
  Award, 
  Building2, 
  CheckCircle 
} from 'lucide-react';

const PlacementAnalytics = () => {
  const stats = [
    { label: "Placement Rate", value: "93%", icon: <CheckCircle className="text-orange-500" size={20} /> },
    { label: "Average Hike", value: "54%", icon: <TrendingUp className="text-orange-500" size={20} /> },
    { label: "Hiring Partners", value: "250+", icon: <Building2 className="text-orange-500" size={20} /> },
    { label: "Highest Package", value: "12 LPA", icon: <Award className="text-orange-500" size={20} /> },
  ];

  const distribution = [
    { industry: "Marketing Agencies", pct: "45%", width: "w-[45%]" },
    { industry: "E-commerce & Retail", pct: "20%", width: "w-[20%]" },
    { industry: "IT & Tech Services", pct: "15%", width: "w-[15%]" },
    { industry: "Health & BFSI", pct: "12%", width: "w-[12%]" },
    { industry: "Others", pct: "8%", width: "w-[8%]" },
  ];

  return (
    <div className="bg-white font-['Inter',sans-serif] selection:bg-orange-100 py-8 px-6 antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* --- 01. SECTION HEADER --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-orange-500" />
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400">Verified Career Outcomes</span>
          </div>
          
          {/* EXACT FONT SPEC: Inter, 700 Weight, 24px (Scaled to 48px for Main Header) */}
          <h2 className="text-[32px] md:text-[48px] font-[700] text-slate-900 leading-tight tracking-tight mb-6">
            A Track Record of Professional <span className="text-orange-500">Excellence.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl font-medium leading-relaxed">
            Our placement cell works relentlessly to connect talent with opportunity. 
            We provide a transparent look at our alumni's success across global industries.
          </p>
        </div>

        {/* --- 02. STATS DASHBOARD GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <p className="text-4xl font-[800] text-slate-900 mb-1 tracking-tight">{item.value}</p>
              <p className="text-[13px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* --- 03. TWIN CONTENT BLOCKS --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* A. Industry Distribution List */}
          <div className="bg-[#fcfcfd] p-10 rounded-[32px] border border-gray-100">
            {/* INTER 700 / 24PX SPEC APPLIED */}
            <h3 className="font-['Inter'] font-[700] text-[24px] text-slate-900 mb-10 tracking-tight uppercase">
              Recruitment by Sector
            </h3>
            
            <div className="space-y-8">
              {distribution.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-sm font-bold text-slate-700">{item.industry}</span>
                    <span className="text-sm font-black text-orange-500">{item.pct}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.pct }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-slate-900 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* B. Salary Progression / Growth */}
          <div className="p-10 border border-gray-100 rounded-[32px]">
             {/* INTER 700 / 24PX SPEC APPLIED */}
             <h3 className="font-['Inter'] font-[700] text-[24px] text-slate-900 mb-10 tracking-tight uppercase">
              Salary Growth Path
            </h3>

            <div className="relative pl-8 border-l-2 border-dashed border-gray-100 space-y-12">
               {[
                 { year: "Pre-Training", label: "Foundation Level", avg: "3.2 LPA", col: "text-gray-400" },
                 { year: "Post-Course", label: "Associate Entry", avg: "5.5 LPA", col: "text-slate-900" },
                 { year: "18 Months Experience", label: "Strategist Role", avg: "8.4 LPA", col: "text-orange-500" }
               ].map((step, i) => (
                 <div key={i} className="relative">
                    <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-white border-4 border-orange-500" />
                    <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">{step.year}</p>
                    <div className="flex justify-between items-center">
                       <p className="text-lg font-bold text-slate-800">{step.label}</p>
                       <p className={`text-xl font-black ${step.col}`}>{step.avg}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-12 p-6 bg-slate-900 rounded-2xl flex items-center justify-between group cursor-pointer">
               <div className="flex items-center gap-4 text-white">
                  <FileText className="text-orange-500" size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest">Download Full Audit</span>
               </div>
               <ArrowUpRight className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PlacementAnalytics;