import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  UserCheck, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  User, 
  ChevronDown, 
  CheckCircle2,
  Calendar
} from 'lucide-react';

const BookVisitPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'Andheri',
  });

  return (
    <div className="min-h-screen bg-[#FDFCF7] font-['Inter'] antialiased">
      
      {/* 1. TOP NAV / BREADCRUMB STRIP */}
      <div className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
         <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#808080]">
            <span>Masters Program</span>
            <span className="text-gray-300">/</span>
            <span className="text-[#072F21]">Book a Visit</span>
         </div>
         <div className="hidden md:flex items-center gap-4">
            <Phone size={14} className="text-[#072F21]" />
            <span className="text-sm font-bold text-[#212121]">+91 7700022882</span>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* 2. LEFT SIDE: Authority & Value Props */}
          <div className="lg:col-span-6 text-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#072F21]/5 border border-[#072F21]/10 mb-8">
                <Sparkles size={14} className="text-[#072F21]" />
                <span className="text-[11px] font-black text-[#072F21] uppercase tracking-[0.3em]">Free Personal Session</span>
              </div>

              <h1 className="text-[#212121] font-semibold text-[38px] lg:text-[56px] leading-[1.05] mb-10 tracking-tight">
                Experience OMI <br />
                <span className="text-[#072F21] relative inline-block">
                  In-Person.
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 3 150 3 298 10" stroke="#C1FF00" strokeWidth="8" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              {/* The "Why Visit" List - IIDE Editorial Style */}
              <div className="space-y-10 mb-12">
                {[
                  { 
                    icon: <MapPin />, 
                    title: "Guided Campus Tour", 
                    desc: "Walk through our tech-enabled classrooms and student collaboration zones in Andheri or Borivali." 
                  },
                  { 
                    icon: <UserCheck />, 
                    title: "1-on-1 Career Counseling", 
                    desc: "Sit with a senior mentor to discuss your profile and map out your 7-month transformation path." 
                  },
                  { 
                    icon: <Calendar />, 
                    title: "Attend a Trial Class", 
                    desc: "Observe a live batch in action and witness our agency-style teaching methodology firsthand." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#072F21] shrink-0 border border-gray-100 group-hover:bg-[#072F21] group-hover:text-[#C1FF00] transition-all duration-500">
                      {React.cloneElement(item.icon, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="text-[#212121] font-semibold text-xl mb-1 tracking-tight">{item.title}</h4>
                      <p className="text-[#808080] font-medium text-base leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 3. RIGHT SIDE: The High-Conversion Form Card */}
          <div className="lg:col-span-6 relative">
            {/* Background Aesthetic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#C1FF00]/5 rounded-full blur-[120px] -z-10" />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-50 text-start"
            >
              <div className="mb-10">
                <h3 className="text-[#212121] font-semibold text-2xl mb-2 tracking-tight">Schedule Your Visit</h3>
                <p className="text-[#808080] text-sm font-medium">Please fill in your details to book a time slot.</p>
              </div>

              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {/* Name Input */}
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-[#212121] uppercase tracking-[0.25em] ml-1">Full Name</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-6 flex items-center text-gray-400 group-focus-within:text-[#072F21]">
                      <User size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="E.g. Rahul Sharma" 
                      className="w-full pl-14 pr-6 py-5 rounded-[1.5rem] border-2 border-gray-100 bg-gray-50/50 focus:bg-white focus:border-[#072F21] outline-none transition-all font-medium text-[#212121]" 
                    />
                  </div>
                </div>

                {/* Phone Input */}
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-[#212121] uppercase tracking-[0.25em] ml-1">Mobile Number</label>
                  <div className="flex items-center border-2 border-gray-100 rounded-[1.5rem] bg-gray-50/50 focus-within:bg-white focus-within:border-[#072F21] transition-all p-1">
                    <div className="flex items-center gap-2 px-5 py-4 border-r border-gray-100">
                      <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="IN" className="w-5" />
                      <span className="text-sm font-bold text-[#212121]">+91</span>
                      <ChevronDown size={14} className="text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Enter Mobile Number" 
                      className="w-full px-5 outline-none font-medium text-[#212121] bg-transparent" 
                    />
                  </div>
                </div>

                {/* Branch Selection */}
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-[#212121] uppercase tracking-[0.25em] ml-1">Preferred Center</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Andheri', 'Borivali'].map(loc => (
                       <button 
                         key={loc}
                         type="button"
                         className={`py-4 rounded-2xl font-bold text-sm transition-all border-2 
                         ${formData.branch === loc ? 'bg-[#072F21] border-[#072F21] text-white shadow-lg' : 'bg-white border-gray-100 text-gray-400 hover:border-gray-200'}`}
                         onClick={() => setFormData({...formData, branch: loc})}
                       >
                         {loc}
                       </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-[#072F21] hover:bg-black text-white py-6 rounded-full font-black text-[15px] tracking-widest transition-all duration-500 shadow-2xl shadow-green-900/40 flex items-center justify-center gap-3 group">
                   CONFIRM APPOINTMENT
                   <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 justify-center pt-2">
                   <CheckCircle2 size={14} className="text-[#8CC63F]" />
                   <p className="text-[10px] text-[#808080] font-bold uppercase tracking-widest">
                     Our team will call you back within 15 minutes.
                   </p>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* 4. FOOTER STATS STRIP */}
      <div className="max-w-7xl mx-auto px-12 pb-24 grid grid-cols-2 md:grid-cols-4 gap-8">
         {[
           { val: "11k+", label: "Successful Alumni" },
           { val: "250+", label: "Hiring Partners" },
           { val: "14yrs", label: "Legacy in Mumbai" },
           { val: "93%", label: "Placement Rate" }
         ].map((stat, i) => (
           <div key={i} className="text-start opacity-40">
             <p className="text-[#212121] font-black text-3xl">{stat.val}</p>
             <p className="text-[#808080] font-bold text-[10px] uppercase tracking-widest mt-1">{stat.label}</p>
           </div>
         ))}
      </div>

    </div>
  );
};

export default BookVisitPage;