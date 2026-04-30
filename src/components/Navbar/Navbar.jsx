import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const MobileAccordion = ({ label, children, color, sub }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-3 py-3 font-semibold text-left rounded-lg transition-colors ${sub ? "text-sm text-[#ECAB00]" : "text-gray-800 hover:text-[#ECAB00]"}`}
      >
        <span style={color ? { color } : {}}>{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          style={color ? { color } : {}}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`overflow-hidden ${sub ? "pl-3" : "pl-2"}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [certOpen, setCertOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [placementOpen, setPlacementOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  const closeMobile = () => setMobile(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50" style={{ maxWidth: "100vw", textAlign: "left" }}>
      <div className="flex items-center justify-between px-6 md:px-16 py-4">

        {/* LOGO + PROGRAM BUTTON */}
        <div className="flex items-center gap-8">

          {/* BIGGER LOGO */}
          <Link to="/"><img src="/images/OM-logo.png" className="h-14 md:h-16" /></Link>

          {/* PROGRAM BUTTON */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => { setOpen(false); setCertOpen(false); }}
          >
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-black bg-[#ECAB00] hover:bg-black hover:text-white transition-all duration-300">
              Programs
              <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </button>

            {/* DROPDOWN */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-80 bg-white rounded-xl shadow-xl overflow-visible !border !border-gray-100 outline-none [&>*:first-child]:rounded-t-xl [&>*:last-child]:rounded-b-xl"
                >
                  {[
                    { label: "Master's Program in Digital Marketing", to: "/masters-program" },
                    { label: "Advance Diploma in Digital Marketing", to: "/advance-diploma" },
                    { label: "Diploma in Digital Marketing", to: "/diploma" },
                  ].map((item, i) => (
                    <Link key={i} to={item.to} className="block px-6 py-4 hover:bg-gray-50 cursor-pointer text-gray-800 no-underline">
                      {item.label}
                    </Link>
                  ))}

                  {/* CERTIFICATION */}
                  <div
                    className="relative"
                    onMouseEnter={() => setCertOpen(true)}
                    onMouseLeave={() => setCertOpen(false)}
                  >
                    <div className="flex justify-between items-center px-6 py-4 text-[#ECAB00] font-semibold hover:bg-gray-50 cursor-pointer">
                      Certification Courses
                      <ChevronRight size={16} />
                    </div>

                    <AnimatePresence>
                      {certOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-full top-0 ml-2 w-72 bg-white rounded-xl shadow-xl z-50 !border !border-gray-100 outline-none overflow-hidden"
                        >
                          {[
                            { label: "Pay Per Click Course", to: "/ppc" },
                            { label: "Google Analytics Course (GA4)", to: "/ga4" },
                            { label: "WordPress Development Course", to: "/wordpress" },
                            { label: "Social Media Optimization Course", to: "/smo" },
                            { label: "Search Engine Optimization Course", to: "/seo" },
                          ].map((item, i) => (
                            <Link key={i} to={item.to} className="block px-5 py-3 hover:bg-gray-50 cursor-pointer text-gray-800 no-underline">
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">

          {/* ABOUT US */}
          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#ECAB00] transition-colors">
              About Us
              <ChevronDown size={14} className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-52 bg-white rounded-xl shadow-xl z-50 !border !border-gray-100 outline-none overflow-hidden"
                >
                  {[
                    { label: "Our Institute", to: "/about-us" },
                    { label: "Mentors", to: "/about/mentors" },
                    { label: "Testimonials", to: "/about/testimonials" },
                  ].map((item, i) => (
                    <Link key={i} to={item.to} className="block px-5 py-3 hover:bg-gray-50 cursor-pointer text-gray-800 no-underline">
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* PLACEMENT */}
          <div className="relative" onMouseEnter={() => setPlacementOpen(true)} onMouseLeave={() => setPlacementOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#ECAB00] transition-colors">
              Placement
              <ChevronDown size={14} className={`transition-transform ${placementOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {placementOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-48 bg-white rounded-xl shadow-xl z-50 !border !border-gray-100 outline-none overflow-hidden"
                >
                  {[
                    { label: "Hire from us", to: "/placement/hire" },
                  ].map((item, i) => (
                    <Link key={i} to={item.to} className="block px-5 py-3 hover:bg-gray-50 cursor-pointer text-gray-800 no-underline">
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/corporate-training" className="text-gray-800 no-underline hover:text-[#ECAB00] transition-colors">Corporate Training</Link>

          {/* INFORMATION */}
          <div className="relative" onMouseEnter={() => setInfoOpen(true)} onMouseLeave={() => setInfoOpen(false)}>
            <button className="flex items-center gap-1 hover:text-[#ECAB00] transition-colors">
              Information
              <ChevronDown size={14} className={`transition-transform ${infoOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {infoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-52 bg-white rounded-xl shadow-xl z-50 !border !border-gray-100 outline-none overflow-hidden"
                >
                  {[
                    { label: "Upcoming Batches", to: "/upcoming-batches" },
                    { label: "Gallery", to: "/gallery" },
                    { label: "FAQ", to: "/faq" },
                  ].map((item, i) => (
                    <Link key={i} to={item.to} className="block px-5 py-3 hover:bg-gray-50 cursor-pointer text-gray-800 no-underline">
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/blogs" className="text-gray-800 no-underline hover:text-[#ECAB00] transition-colors">Blogs</Link>
          <Link to="/contact" className="text-gray-800 no-underline hover:text-[#ECAB00] transition-colors">Contact</Link>

          <Link to="/brochure">
            <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-[#ECAB00] hover:text-black transition">
              Download Brochure
            </button>
          </Link>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden">
          <button onClick={() => setMobile(!mobile)}>
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white overflow-hidden border-t border-gray-100"
          >
            <div className="px-4 pb-5 pt-2 flex flex-col">

              <MobileAccordion label="Programs" color="#ECAB00">
                {[
                  { label: "Master's Program in Digital Marketing", to: "/masters-program" },
                  { label: "Advance Diploma in Digital Marketing", to: "/advance-diploma" },
                  { label: "Diploma in Digital Marketing", to: "/diploma" },
                ].map((item, i) => (
                  <Link key={i} to={item.to} onClick={closeMobile} className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#ECAB00] hover:bg-gray-50 rounded-lg no-underline">
                    {item.label}
                  </Link>
                ))}
                <MobileAccordion label="Certification Courses" color="#ECAB00" sub>
                  {[
                    { label: "Pay Per Click Course", to: "/ppc" },
                    { label: "Google Analytics Course (GA4)", to: "/ga4" },
                    { label: "WordPress Development Course", to: "/wordpress" },
                    { label: "Social Media Optimization Course", to: "/smo" },
                    { label: "Search Engine Optimization Course", to: "/seo" },
                  ].map((item, i) => (
                    <Link key={i} to={item.to} onClick={closeMobile} className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#ECAB00] hover:bg-gray-50 rounded-lg no-underline">
                      {item.label}
                    </Link>
                  ))}
                </MobileAccordion>
              </MobileAccordion>

              <div className="h-px bg-gray-100 my-1" />

              <MobileAccordion label="About Us">
                {[
                  { label: "Our Institute", to: "/about-us" },
                  { label: "Mentors", to: "/about/mentors" },
                  { label: "Testimonials", to: "/about/testimonials" },
                ].map((item, i) => (
                  <Link key={i} to={item.to} onClick={closeMobile} className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#ECAB00] hover:bg-gray-50 rounded-lg no-underline">
                    {item.label}
                  </Link>
                ))}
              </MobileAccordion>

              <div className="h-px bg-gray-100 my-1" />

              <MobileAccordion label="Placement">
                {[
                  { label: "Hire from us", to: "/placement/hire" },
                ].map((item, i) => (
                  <Link key={i} to={item.to} onClick={closeMobile} className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#ECAB00] hover:bg-gray-50 rounded-lg no-underline">
                    {item.label}
                  </Link>
                ))}
              </MobileAccordion>

              <div className="h-px bg-gray-100 my-1" />

              <Link to="/corporate-training" onClick={closeMobile} className="px-3 py-3 font-semibold text-gray-800 hover:text-[#ECAB00] no-underline">Corporate Training</Link>

              <div className="h-px bg-gray-100 my-1" />

              <MobileAccordion label="Information">
                {[
                  { label: "Upcoming Batches", to: "/upcoming-batches" },
                  { label: "Gallery", to: "/gallery" },
                  { label: "FAQ", to: "/faq" },
                ].map((item, i) => (
                  <Link key={i} to={item.to} onClick={closeMobile} className="block px-3 py-2.5 text-sm text-gray-700 hover:text-[#ECAB00] hover:bg-gray-50 rounded-lg no-underline">
                    {item.label}
                  </Link>
                ))}
              </MobileAccordion>

              <div className="h-px bg-gray-100 my-1" />

              <Link to="/blogs" onClick={closeMobile} className="px-3 py-3 font-semibold text-gray-800 hover:text-[#ECAB00] no-underline">Blogs</Link>
              <Link to="/contact" onClick={closeMobile} className="px-3 py-3 font-semibold text-gray-800 hover:text-[#ECAB00] no-underline">Contact</Link>

              <div className="mt-3">
                <Link to="/brochure" onClick={closeMobile}>
                  <button className="w-full bg-[#ECAB00] text-black font-bold py-3 rounded-xl hover:bg-black hover:text-white transition-all duration-300">
                    Download Brochure
                  </button>
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;