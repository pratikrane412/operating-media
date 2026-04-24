import React, { useEffect } from 'react';

const SATOSHI = "'Satoshi', sans-serif";

const Footer = () => {
  // Inject Satoshi font
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.setAttribute('data-font', 'satoshi');
      link.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <footer
      className="bg-[#121212] text-white py-16 px-6 md:px-20"
      style={{ fontFamily: SATOSHI }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Left Section: Program Links (Takes 8 columns) */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3
                className="mb-6 text-white"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '17px', letterSpacing: '-0.01em' }}
              >
                Digital Marketing Programs
              </h3>
              <ul className="space-y-4">
                {[
                  'Post Graduation in Digital Marketing',
                  'Online Digital Marketing Courses',
                  'Short Term Certifications',
                  'Free Digital Marketing Courses Online',
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                    style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.5 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h3
                className="mt-10 mb-6 text-white"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '17px', letterSpacing: '-0.01em' }}
              >
                AI Programs
              </h3>
              <ul className="space-y-4">
                {['AI Course Online with Certification'].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                    style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.5 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="mb-6 text-white"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '17px', letterSpacing: '-0.01em' }}
              >
                Bachelors Programs
              </h3>
              <ul className="space-y-4">
                {['Undergraduate Program in Digital Business & Entrepreneurship'].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                    style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '14.5px', color: '#94A3B8', lineHeight: 1.5 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section: Contact & Company (Takes 4 columns + Vertical Border) */}
          <div className="md:col-span-4 md:border-l border-slate-700 md:pl-12 grid grid-cols-2 gap-8">
            <div>
              <h3
                className="mb-4 text-white"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em' }}
              >
                Contact Us
              </h3>
              <p
                className="mb-2"
                style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '14px', color: '#94A3B8' }}
              >
                +91 9619958615
              </p>
              <p
                style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '14px', color: '#94A3B8' }}
              >
                info@operatingmedia.com
              </p>

              <h3
                className="mt-10 mb-4 text-white"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em' }}
              >
                Resources
              </h3>
              <ul className="space-y-3">
                {['Blogs', 'Case Studies', 'Presentations'].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                    style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '14px', color: '#94A3B8' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="mb-4 text-white"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em' }}
              >
                Company
              </h3>
              <ul className="space-y-3">
                {['About Us', 'Contact Us', 'Refer & Earn'].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                    style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '14px', color: '#94A3B8' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <h3
                className="mt-10 mb-4 text-white"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em' }}
              >
                Career
              </h3>
              <ul className="space-y-3">
                {['Hire From Us', 'Work With Us'].map((item) => (
                  <li
                    key={item}
                    className="hover:text-white cursor-pointer transition-colors duration-200"
                    style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '14px', color: '#94A3B8' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Logos */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <div className="mb-10">
            <p
              className="mb-6"
              style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#64748B' }}
            >
              Backed by
            </p>
            <div className="flex flex-wrap gap-8 items-center opacity-60 brightness-0 invert">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Skill_India_logo.svg/1200px-Skill_India_logo.svg.png"
                alt="Skill India"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Nasscom_logo.svg/1200px-Nasscom_logo.svg.png"
                alt="Nasscom"
                className="h-6"
              />
              <span
                style={{ fontFamily: SATOSHI, fontWeight: 800, fontSize: '20px', color: '#fff' }}
              >
                MEPSC
              </span>
            </div>
          </div>

          <div>
            <p
              className="mb-6"
              style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#64748B' }}
            >
              Partners
            </p>
            <div className="flex flex-wrap gap-10 items-center opacity-60 brightness-0 invert">
              {['Google', 'Meta Blueprint', 'HubSpot', 'WebEngage'].map((name, i) => (
                <span
                  key={name}
                  style={{
                    fontFamily: SATOSHI,
                    fontWeight: 800,
                    fontSize: i === 0 ? '24px' : '20px',
                    color: '#fff',
                    textDecoration: name === 'Meta Blueprint' ? 'underline' : 'none',
                    textDecorationColor: '#3b82f6',
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;