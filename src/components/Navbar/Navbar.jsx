import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import DownloadBrochure from "./DownloadBrochure";
import { 
  ChevronDown, 
  ChevronRight, 
  PlayCircle, 
  Star, 
  Users, 
  BookOpen, 
  Briefcase, 
  Handshake,
  FileText,
  Zap,
  Mail,
  Info,
  Download,
} from 'lucide-react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);

  const menuData = {
    students: [
      { title: "Placements Report", desc: "Trackable results, real numbers", icon: <Briefcase size={18}/>, path: "/placements" },
      { title: "Reviews", desc: "Proven success, real voices", icon: <Star size={18}/>, path: "/reviews" },
      { title: "Trainers", desc: "Expert-led, Industry-Driven Training", icon: <Users size={18}/>, path: "/trainers" },
      { title: "Life at iBraine", desc: "Vibrant Spirit student life", icon: <PlayCircle size={18}/>, path: "/life-at-ibraine" },
      { title: "Alumni", desc: "Successful Journeys, Inspiring Stories", icon: <Users size={18}/>, path: "/alumni" },
    ],
    learning: [
      { title: "Webinars", desc: "Live, Interactive Masterclasses", icon: <PlayCircle size={18}/>, path: "/webinars" },
      { title: "Blogs", desc: "Fresh Insights, quick reads", icon: <BookOpen size={18}/>, path: "/blogs" },
      { title: "Case studies", desc: "Real-life, Industry relevant", icon: <FileText size={18}/>, path: "/case-studies" },
    ],
    more: [
      { title: "Hire from us", desc: "Hire Top Digital Marketing Talent", icon: <Users size={18}/>, path: "/hire" },
      { title: "Work with us", desc: "Join Our Team, Make an Impact", icon: <Handshake size={18}/>, path: "/careers" },
      { title: "Customised Training", desc: "Personalised digital training", icon: <Zap size={18}/>, path: "/corporate-training" },
      { title: "Refer & earn", desc: "Simple, easy rewards", icon: <Star size={18}/>, path: "/refer-earn" },
      { title: "Contact us", desc: "Get the answers you need", icon: <Mail size={18}/>, path: "/contact" },
      { title: "About us", desc: "Know more about iBraine", icon: <Info size={18}/>, path: "/about-us" },
    ]
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white sticky top-0 z-[100] shadow-sm font-['Inter']">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        .mega-link-title { font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; color: #111621; }
        .mega-link-desc { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 400; color: #94a3b8; }
        .dropdown-card { background-color: #ffffff; border: 1px solid #f1f5f9; box-shadow: 0 20px 50px rgba(0,0,0,0.1); border-radius: 1.5rem; }
      `}</style>

      {/* --- LEFT: LOGO & COURSES --- */}
      <div className="flex items-center gap-8">
        <a href="/">
          <img src="/images/OM-logo.png" alt="Logo" className="h-17 w-auto object-contain" />
        </a>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => { setIsMenuOpen(false); setIsCertOpen(false); }}
        >
          <button className="flex items-center gap-2 bg-[#211915] text-white px-6 py-2 rounded-full font-bold transition hover:bg-orange-900 text-sm">
            Courses <ChevronDown size={16} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-80 bg-white border border-slate-100 shadow-2xl rounded-xl py-2 z-[110]"
              >
                <Link to="/masters-program" className="mega-link-title block px-6 py-4 hover:bg-slate-50 border-b border-slate-50">Master's Program in Digital Marketing</Link>
                <Link to="/advance-diploma" className="mega-link-title block px-6 py-4 hover:bg-slate-50 border-b border-slate-50">Advance Diploma in Digital Marketing</Link>
                <Link to="/diploma" className="mega-link-title block px-6 py-4 hover:bg-slate-50 border-b border-slate-50">Diploma in Digital Marketing</Link>
                
                <div 
                  className="relative"
                  onMouseEnter={() => setIsCertOpen(true)}
                  onMouseLeave={() => setIsCertOpen(false)}
                >
                  <div className="mega-link-title flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-slate-50 text-orange-600">
                    Certification Courses <ChevronRight size={16} />
                  </div>
                  {isCertOpen && (
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="absolute left-full top-0 ml-1 w-72 bg-white border border-slate-100 shadow-2xl rounded-xl py-2"
                    >
                      <Link to="/pay-per-click-course" className="mega-link-title block px-6 py-3 font-medium text-sm border-t border-slate-50">Pay Per Click Course</Link>
                      <Link to="/seo-course" className="mega-link-title block px-6 py-3 font-medium text-sm border-t border-slate-50">Search Engine Optimization Course</Link>
                      <Link to="/smm-course" className="mega-link-title block px-6 py-3 font-medium text-sm border-t border-slate-50">Social Media Optimization Course</Link>
                      <Link to="/google-analytics-course" className="mega-link-title block px-6 py-3 font-medium text-sm border-t border-slate-50">Google Analytics GA4</Link>
                      <Link to="/wordpress-course" className="mega-link-title block px-6 py-3 font-medium text-sm border-t border-slate-50">WordPress Development Course</Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* --- RIGHT: MEGA MENUS + BROCHURE BUTTON --- */}
      <div className="hidden lg:flex items-center gap-10">
        
        {['students', 'learning', 'more'].map((menuKey) => (
          <div 
            key={menuKey}
            className="relative py-4"
            onMouseEnter={() => setActiveMenu(menuKey)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer text-[#1E3B8A] font-bold text-[13px] uppercase tracking-wider hover:underline underline-offset-8 decoration-2 transition-all">
              {menuKey === 'students' ? 'Students Centric' : menuKey === 'learning' ? 'Learning Centre' : 'More'}
              <ChevronDown size={14} className={`transition-transform ${activeMenu === menuKey ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
              {activeMenu === menuKey && (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="absolute top-full right-[-150px] mt-0 w-[800px] dropdown-card overflow-hidden flex z-[100]"
                >
                  <div className="flex-1 p-10 grid grid-cols-2 gap-y-8 gap-x-12 bg-white">
                    {menuData[menuKey].map((item, idx) => (
                      <Link to={item.path} key={idx} onClick={() => setActiveMenu(null)} className="group flex items-start gap-4">
                        <div className="mt-1 text-blue-600 group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="mega-link-title group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </span>
                          <span className="mega-link-desc group-hover:text-slate-600">
                            {item.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="w-[320px] bg-[#f0f7ff] p-8 flex flex-col justify-center border-l border-blue-100/50">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-6">Explore our courses</p>
                    <div className="bg-white rounded-[2rem] p-2 shadow-xl group/card cursor-pointer">
                      <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-200 mb-4">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400" alt="Featured" className="w-full h-full object-cover transition-transform group-hover/card:scale-110 duration-700" />
                      </div>
                      <p className="px-4 pb-6 text-[#1E3B8A] text-xl font-extrabold leading-tight">Digital Marketing <br /> Courses</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* ✅ NAVBAR — default orange Brochure button */}
        <button className="bg-[#FF5A1F] hover:bg-[#111111] text-white font-inter font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-250 shadow-lg shadow-orange-200">
           Brochure
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
