import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [certOpen, setCertOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  return (
    <nav className="w-full bg-white border-w shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-4">

        {/* LOGO + PROGRAM BUTTON */}
        <div className="flex items-center gap-8">

          {/* BIGGER LOGO */}
          <img src="/images/OM-logo.png" className="h-14 md:h-16" />

          {/* PROGRAM BUTTON */}
          <div
            className="relative hidden md:block"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => {
              setOpen(false);
              setCertOpen(false);
            }}
          >
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-black bg-[#ECAB00] hover:bg-black hover:text-white transition-all duration-300">
              Programs
              <ChevronDown
                size={16}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            {/* DROPDOWN */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-80 bg-white rounded-xl shadow-xl border overflow-visible"
                >

                  {/* MAIN ITEMS */}
                  {[
                    "Master’s Program in Digital Marketing",
                    "Advance Diploma in Digital Marketing",
                    "Diploma in Digital Marketing",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="px-6 py-4 hover:bg-gray-50 border-w cursor-pointer"
                    >
                      {item}
                    </div>
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

                    {/* SUBMENU FIXED */}
                    <AnimatePresence>
                      {certOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-full top-0 ml-2 w-72 bg-white rounded-xl shadow-xl border z-50"
                        >
                          {[
                            "Pay Per Click Course",
                            "Google Analytics Course (GA4)",
                            "WordPress Development Course",
                            "Social Media Optimization Course",
                            "Search Engine Optimization Course",
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="px-5 py-3 hover:bg-gray-50 border-w cursor-pointer"
                            >
                              {item}
                            </div>
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

          <a href="/about">About Us</a>
          <a href="/placement">Placement</a>
          <a href="/corporate-training">Corporate Training</a>
          <a href="/information">Information</a>
          <a href="/blogs">Blogs</a>
          <a href="/contact">Contact</a>

          <button className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-[#ECAB00] hover:text-black transition">
            Download Brochure
          </button>
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white px-6 pb-6 space-y-3 shadow"
          >
            <p className="font-semibold text-[#ECAB00]">Programs</p>

            <p>Master’s Program</p>
            <p>Advance Diploma</p>
            <p>Diploma</p>

            <p className="mt-2 font-semibold text-[#ECAB00]">
              Certification Courses
            </p>

            <p>PPC</p>
            <p>SEO</p>
            <p>SMM</p>

            <hr />

            <a href="/about">About</a>
            <a href="/placement">Placement</a>
            <a href="/corporate-training">Corporate Training</a>
            <a href="/blogs">Blogs</a>

            <button className="w-full bg-[#ECAB00] py-2 rounded-lg">
              Download Brochure
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;