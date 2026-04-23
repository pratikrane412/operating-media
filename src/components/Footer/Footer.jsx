import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Section: Program Links (Takes 8 columns) */}
          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-6">Digital Marketing Programs</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">Post Graduation in Digital Marketing</li>
                <li className="hover:text-white cursor-pointer transition">Online Digital Marketing Courses</li>
                <li className="hover:text-white cursor-pointer transition">Short Term Certifications</li>
                <li className="hover:text-white cursor-pointer transition">Free Digital Marketing Courses Online</li>
              </ul>

              <h3 className="text-lg font-bold mt-10 mb-6">AI Programs</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">AI Course Online with Certification</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Bachelors Programs</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer transition">Undergraduate Program in Digital Business & Entrepreneurship</li>
              </ul>
            </div>
          </div>

          {/* Right Section: Contact & Company (Takes 4 columns + Vertical Border) */}
          <div className="md:col-span-4 md:border-l border-slate-700 md:pl-12 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact Us</h3>
              <p className="text-slate-400 text-sm mb-2">+91 9619958615</p>
              <p className="text-slate-400 text-sm">social@iide.co</p>

              <h3 className="text-sm font-bold mt-10 mb-4 uppercase tracking-wider">Resources</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer">Blogs</li>
                <li className="hover:text-white cursor-pointer">Case Studies</li>
                <li className="hover:text-white cursor-pointer">Presentations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Company</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer">About Us</li>
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">Refer & Earn</li>
              </ul>

              <h3 className="text-sm font-bold mt-10 mb-4 uppercase tracking-wider">Career</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="hover:text-white cursor-pointer">Hire From Us</li>
                <li className="hover:text-white cursor-pointer">Work With Us</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Logos */}
        <div className="mt-16 pt-10 border-t border-slate-800">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Backed by</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60 brightness-0 invert">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Skill_India_logo.svg/1200px-Skill_India_logo.svg.png" alt="Skill India" className="h-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Nasscom_logo.svg/1200px-Nasscom_logo.svg.png" alt="Nasscom" className="h-6" />
              <span className="text-xl font-bold">MEPSC</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Partners</p>
            <div className="flex flex-wrap gap-10 items-center opacity-60 brightness-0 invert">
              <span className="text-2xl font-bold">Google</span>
              <span className="text-xl font-bold underline decoration-blue-500">Meta Blueprint</span>
              <span className="text-xl font-bold">HubSpot</span>
              <span className="text-xl font-bold">WebEngage</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;