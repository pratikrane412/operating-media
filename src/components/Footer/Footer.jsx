import React, { useEffect } from 'react';

// --- SVGs for Icons ---
const IconChevron = () => (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>);
const IconPhone = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>);
const IconMail = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>);
const IconMap = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>);

// Social Icons
const FbIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
const InstaIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const XIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>);
const LinkedInIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>);

const Footer = () => {
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.setAttribute('data-font', 'satoshi');
      link.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  const courses = [
    "Diploma in Digital Marketing",
    "Advanced Digital Marketing",
    "Social Media Marketing",
    "SEO Training",
    "Performance Marketing"
  ];

  const locations = [
    "Vashi", "Panvel", "Virar", "Mulund", "Dadar", 
    "Bandra", "Kalyan", "Navi Mumbai", "Borivali", 
    "Andheri", "Thane"
  ];

  return (
    <footer className="w-full font-sans bg-[#171717] text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>
      
      {/* ── TOP SECTION: Main Footer Grid ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-white/10">
          
          {/* Column 1: Brand & About */}
          <div className="flex flex-col lg:pr-10">
            {/* Custom SVG Logo representation */}
            <div className="mb-6 select-none">
              <h2 className="text-[26px] font-black leading-none tracking-wider text-white">OPERATING</h2>
              <h2 className="text-[26px] font-black leading-none tracking-[0.2em] text-transparent" style={{ WebkitTextStroke: '1px white' }}>MEDIA</h2>
              <p className="text-[10px] font-semibold tracking-widest mt-1 text-gray-400">digitize your career ®</p>
            </div>
            
            <p className="text-gray-400 text-[14px] leading-[1.7] mb-8 pr-4">
              Operating Media is a leading digital marketing training institute focused on practical learning, live projects, and industry-relevant skills. We help students and professionals build successful careers in the digital world.
            </p>

            <div className="flex items-center gap-3">
              {[FbIcon, InstaIcon, XIcon, LinkedInIcon].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#FBBF24] hover:bg-[#FBBF24]/10 transition-all duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Our Courses */}
          <div className="flex flex-col lg:px-10">
            <h3 className="text-[#FBBF24] text-[20px] font-bold mb-6 tracking-wide">Our Courses</h3>
            <ul className="space-y-4">
              {courses.map((course, idx) => (
                <li key={idx}>
                  <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
                    <span className="text-gray-500 group-hover:text-[#FBBF24] transition-colors"><IconChevron /></span>
                    <span className="text-[15px]">{course}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Details */}
          <div className="flex flex-col lg:px-10">
            <h3 className="text-[#FBBF24] text-[20px] font-bold mb-6 tracking-wide">Details</h3>
            
            <div className="flex items-start gap-4 mb-8">
              <div className="text-gray-400 mt-1"><IconPhone /></div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Phone</p>
                <a href="tel:+917700022882" className="block text-gray-400 text-[14px] hover:text-[#FBBF24]">+91 7700022882</a>
                <a href="tel:+919326474007" className="block text-gray-400 text-[14px] hover:text-[#FBBF24]">+91 9326474007</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-gray-400 mt-1"><IconMail /></div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Email us</p>
                <a href="mailto:contact@operatingmedia.com" className="block text-gray-400 text-[14px] hover:text-[#FBBF24]">contact@operatingmedia.com</a>
              </div>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="flex flex-col lg:pl-10">
            <h3 className="text-[#FBBF24] text-[20px] font-bold mb-6 tracking-wide">Location</h3>
            
            <div className="flex items-start gap-3 mb-6">
              <div className="text-gray-400 mt-1 flex-shrink-0"><IconMap /></div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Andheri Center</p>
                <p className="text-gray-400 text-[14px] leading-relaxed pr-2">
                  Office No. 2, Chandra Niwas CHS, Off Old Police Lane Andheri East, Mumbai - 400069<br/>
                  2 mins walk from Andheri Station and Metro Station
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-gray-400 mt-1 flex-shrink-0"><IconMap /></div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Borivali Center</p>
                <p className="text-gray-400 text-[14px] leading-relaxed pr-2">
                  Office No. 2, Chandra Niwas CHS, Off Old Police Lane Andheri East, Mumbai - 400069<br/>
                  705 Gold Crest Business Center, Opposite Manubhai Jewellers, LT Road, Borivali West. Mumbai - 400092
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div className="w-full border-t border-white/10 py-6 text-center">
        <p className="text-gray-400 text-[14px]">
          Operating Media©2026. All Rights
        </p>
      </div>

      {/* ── BOTTOM SECTION: Global Courses (HIDDEN ON MOBILE: hidden md:block) ── */}
      <div className="hidden md:block w-full bg-[#121212] py-16 px-6 relative">
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className="text-[28px] md:text-[36px] font-bold text-white mb-8">
            Digital Marketing Courses <span className="text-[#FBBF24]">Across The World</span>
          </h2>
          
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-3 text-gray-300 text-[14px] md:text-[15px] leading-loose">
            {locations.map((loc, index) => (
              <React.Fragment key={index}>
                <a href="#" className="hover:text-white hover:underline transition-all">
                  Digital Marketing Courses in {loc}
                </a>
                {index !== locations.length - 1 && (
                  <span className="text-gray-600 mx-1 px-1">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;