import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const CounselorCTA = () => {

  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.setAttribute("data-font", "satoshi");
      link.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section
      className="w-full bg-[#fccb06] overflow-hidden antialiased"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[280px] md:min-h-[260px] lg:min-h-[280px] relative">

          {/* 1. LEFT SIDE: Text & Button */}
          <div className="flex-1 pt-8 pb-4 md:py-5 z-10 text-center md:text-left order-1 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto md:mx-0"
            >
              {/* Heading */}
              <h2
                className="text-[#212121] leading-[1.2] mb-6 tracking-tight"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 3.5vw, 32px)',
                }}
              >
                Feeling confused? Discover the perfect digital marketing course to kickstart your journey.
              </h2>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-black hover:text-white text-[#212121] rounded-full transition-all duration-300"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(13px, 1.5vw, 15px)',
                  padding: 'clamp(10px, 1.2vw, 16px) clamp(20px, 3vw, 32px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                  letterSpacing: '0.01em',
                }}
              >
                Speak to a Career Counselor
              </motion.button>
            </motion.div>
          </div>

          {/* 2. RIGHT SIDE: Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-end items-end self-stretch relative order-2 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end"
            >
              <img
                src="https://www.operatingmedia.com/wp-content/uploads/2025/05/smiling-cheerfully-casually-pointing-copy-space-side-feeling-happy-satisfied.webp"
                alt="Counselor Support"
                className="object-contain origin-bottom"
                style={{
                  width: 'clamp(200px, 38vw, 420px)',
                  maxHeight: '320px',
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))',
                  display: 'block',
                  marginTop: '-10px',
                }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CounselorCTA;