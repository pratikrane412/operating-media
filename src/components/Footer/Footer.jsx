import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
const YtIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#171717"></polygon></svg>);

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
    { label: "Master's in Digital Marketing", to: "/courses/masters-program-in-digital-marketing/" },
    { label: "Advance Diploma in Digital Marketing", to: "/courses/advance-diploma-in-digital-marketing/" },
    { label: "Diploma in Digital Marketing", to: "/courses/diploma-in-digital-marketing/" },
    { label: "Social Media Optimization", to: "/courses/social-media-optimization-courses/" },
    { label: "PPC Course", to: "/courses/pay-per-click-management-courses/" },
    { label: "SEO Training", to: "/courses/search-engine-optimization-courses/" },
  ];

  // const locations = [
  //   "Vashi", "Panvel", "Virar", "Mulund", "Dadar",
  //   "Bandra", "Kalyan", "Navi Mumbai", "Borivali",
  //   "Andheri", "Thane"
  // ];

  return (
    <footer className="w-full font-sans bg-[#171717] text-white" style={{ fontFamily: "'Satoshi', sans-serif" }}>

      <style>{`
        /* Golden glow pulse animation */
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50%       { opacity: 0.22; transform: scale(1.08); }
        }
        .footer-glow {
          animation: pulseGlow 5s ease-in-out infinite;
        }

        /* Course link hover */
        .course-link { display: flex; align-items: center; gap: 8px; color: #9ca3af; transition: color 0.25s; text-decoration: none; }
        .course-link:hover { color: #ffffff; }
        .course-link .chevron-box {
          width: 20px; height: 20px; border-radius: 5px;
          border: 1.5px solid #374151;
          display: flex; align-items: center; justify-content: center;
          color: #4b5563;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          flex-shrink: 0;
        }
        .course-link:hover .chevron-box {
          background: #ECAB00;
          border-color: #ECAB00;
          color: #0f172a;
        }

        /* Social icon hover */
        .social-icon {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid #4b5563;
          display: flex; align-items: center; justify-content: center;
          color: #9ca3af;
          transition: all 0.25s;
          text-decoration: none;
        }
        .social-icon:hover {
          border-color: #ECAB00;
          background: rgba(236,171,0,0.12);
          color: #ECAB00;
          transform: translateY(-2px);
        }

        /* Contact link hover */
        .contact-link { color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s; display: block; }
        .contact-link:hover { color: #ECAB00; }
      `}</style>

      {/* ── TOP SECTION ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-12 relative overflow-hidden">

        {/* ── GOLDEN GLOW (same as stats section) ── */}
        {/* Top-center large glow */}
        <div
          className="footer-glow pointer-events-none"
          style={{
            position: "absolute",
            top: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "340px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse at top, #ECAB00 0%, transparent 70%)",
            filter: "blur(55px)",
            opacity: 0.15,
          }}
        />
        {/* Bottom-left subtle glow */}
        <div
          className="pointer-events-none"
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #ECAB00 0%, transparent 70%)",
            filter: "blur(70px)",
            opacity: 0.06,
          }}
        />
        {/* Bottom-right subtle glow */}
        <div
          className="pointer-events-none"
          style={{
            position: "absolute",
            bottom: "0px",
            right: "-40px",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #ECAB00 0%, transparent 70%)",
            filter: "blur(70px)",
            opacity: 0.05,
          }}
        />

        {/* Mesh grid overlay (same as stats) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Grid columns */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x divide-white/10">

          {/* Column 1: Brand & About */}
          <div className="flex flex-col lg:pr-10">
            <Link to="/" className="mb-6 select-none no-underline block">
              <h2 className="text-[26px] font-black leading-none tracking-wider text-white">OPERATING</h2>
              <h2 className="text-[26px] font-black leading-none tracking-[0.2em] text-transparent" style={{ WebkitTextStroke: '1px white' }}>MEDIA</h2>
              <p className="text-[10px] font-semibold tracking-widest mt-1 text-gray-400">digitize your career ®</p>
            </Link>

            <p className="text-gray-400 text-[14px] leading-[1.7] mb-8 pr-4">
              Operating Media is a leading digital marketing training institute focused on practical learning, live projects, and industry-relevant skills. We help students and professionals build successful careers in the digital world.
            </p>

            <div className="flex items-center gap-3">
              {[
                { Icon: FbIcon, href: "https://www.facebook.com/operatingmedia/" },
                { Icon: InstaIcon, href: "https://www.instagram.com/operatingmedia/" },
                { Icon: XIcon, href: "https://x.com/OperatingMedia/" },
                { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/operating-media" },
                { Icon: YtIcon, href: "https://www.youtube.com/@operatingmedia" },
              ].map((item, idx) => {
                const SocialIcon = item.Icon;
                return (
                  <a key={idx} href={item.href} className="social-icon" target="_blank" rel="noopener noreferrer">
                    <SocialIcon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Our Courses */}
          <div className="flex flex-col lg:px-10">
            <h3 className="text-[#ECAB00] text-[20px] font-bold mb-6 tracking-wide">Our Courses</h3>
            <ul className="space-y-4">
              {courses.map((course, idx) => (
                <li key={idx}>
                  <Link to={course.to} className="course-link">
                    <span className="chevron-box">
                      <IconChevron />
                    </span>
                    <span className="text-[15px]">{course.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Column 3: Details */}
          <div className="flex flex-col lg:px-10">
            <h3 className="text-[#ECAB00] text-[20px] font-bold mb-6 tracking-wide">Details</h3>

            <div className="flex items-start gap-4 mb-8">
              <div className="text-gray-400 mt-1"><IconPhone /></div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Phone</p>
                <a href="tel:+917700022882" className="contact-link">+91 7700022882</a>
                <a href="tel:+919326474007" className="contact-link">+91 9326474007</a>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="text-gray-400 mt-1"><IconMail /></div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Email us</p>
                <a href="mailto:contact@operatingmedia.com" className="contact-link">contact@operatingmedia.com</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-gray-400 mt-1">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Legal</p>
                <Link to="/terms-and-conditions/" className="contact-link">Terms & Conditions</Link>
              </div>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="flex flex-col lg:pl-10">
            <h3 className="text-[#ECAB00] text-[20px] font-bold mb-6 tracking-wide">Location</h3>

            <div className="flex items-start gap-3 mb-6">
              <div className="text-gray-400 mt-1 flex-shrink-0"><IconMap /></div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Andheri Center</p>
                <p className="text-gray-400 text-[14px] leading-relaxed pr-2">
                  Office No. 2, Chandra Niwas CHS, Off Old Police Lane Andheri East, Mumbai - 400069<br />
                  2 mins walk from Andheri Station and Metro Station
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="text-gray-400 mt-1 flex-shrink-0"><IconMap /></div>
              <div>
                <p className="text-white font-bold text-[16px] mb-1">Borivali Center</p>
                <p className="text-gray-400 text-[14px] leading-relaxed pr-2">
                  705 Gold Crest Business Center, Opposite Manubhai Jewellers, LT Road, Borivali West. Mumbai - 400092
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div className="w-full border-t border-white/10 py-6 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-[14px]">
            Operating Media©2026. All Rights Reserved.
          </p>

        </div>
      </div>


    </footer>
  );
};

export default Footer;