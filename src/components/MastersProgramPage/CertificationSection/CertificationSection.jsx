// ─────────────────────────────────────────────────────────────────────────────
// SETUP REQUIRED IN YOUR PROJECT:
// index.html <head>:
// <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap" rel="stylesheet">
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Download, ArrowRight } from 'lucide-react';

const satoshi = { fontFamily: "'Satoshi', sans-serif" };

const CertificationSection = () => {
  const globalPartners = [
    { name: "Google Ads", url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" },
    { name: "Meta Blueprint", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  ];

  return (
    <section
      className="py-5 bg-white antialiased overflow-hidden"
      style={satoshi}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* 1. TOP SECTION: Split Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-15">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-start"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-8">
              <ShieldCheck size={16} className="text-[#FF5A1F]" />
              <span
                className="text-[11px] text-[#FF5A1F] uppercase"
                style={{ ...satoshi, fontWeight: 900, letterSpacing: '0.3em' }}
              >
                Industry Recognized
              </span>
            </div>

            {/* Heading */}
            <h2
              className="text-[#212121] text-[34px] md:text-[52px] leading-[1.1] mb-8 tracking-tight"
              style={{ ...satoshi, fontWeight: 600 }}
            >
              Get Certified. <br />
              <span className="text-[#FF5A1F]">Lead the Industry.</span>
            </h2>

            <div
              className="space-y-6 text-[#808080] text-[16px] md:text-[18px] leading-relaxed max-w-xl"
              style={{ ...satoshi, fontWeight: 500 }}
            >
              <p>
                Operating Media's Masters Program is meticulously designed to ensure
                you don't just hold a paper, but a{' '}
                <span className="text-[#212121]" style={{ ...satoshi, fontWeight: 700 }}>
                  prestigious credential
                </span>{' '}
                valued by elite digital agencies.
              </p>
              <p>
                Upon completion, you earn the{' '}
                <span
                  className="text-black border-b-2 border-orange-400"
                  style={{ ...satoshi, fontWeight: 700 }}
                >
                  Advanced Master's Certification
                </span>
                .{' '}
                Our curriculum aligns with global standards, making your profile stand out in any interview.
              </p>
            </div>

            {/* Global Exam Preparation Badges */}
            <div className="mt-12">
              <p
                className="text-[#212121] text-[12px] uppercase mb-6"
                style={{ ...satoshi, fontWeight: 700, letterSpacing: '0.2em' }}
              >
                Preparation for global certifications:
              </p>
              <div className="flex flex-wrap gap-4">
                {globalPartners.map((partner, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-[#F8F9FB] px-5 py-3 rounded-2xl border border-gray-100 shadow-sm"
                  >
                    <img src={partner.url} alt={partner.name} className="h-4 w-auto grayscale opacity-80" />
                    <span
                      className="text-gray-600 text-[13px]"
                      style={{ ...satoshi, fontWeight: 700 }}
                    >
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <button
              className="mt-5 bg-[#FF5A1F] hover:bg-[#E54D16] text-white text-[16px] px-10 py-5 rounded-full transition-all duration-300 flex items-center gap-3 shadow-xl shadow-orange-500/20 group border-none cursor-pointer"
              style={{ ...satoshi, fontWeight: 600 }}
            >
              View Sample Certificates{' '}
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right: Certificates */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-orange-50 rounded-full blur-[100px] -z-10" />

            <div className="flex flex-col sm:flex-row gap-8 relative z-10">
              {/* Diploma Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-4 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-100 w-full md:w-72"
              >
                <div className="overflow-hidden rounded-[1.2rem] border border-gray-100 bg-[#fdfdfd] p-1">
                  <img
                    src="https://www.operatingmedia.com/wp-content/uploads/2024/06/OM-Certificate-New-724x1024.png"
                    alt="Certificate 1"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p
                    className="text-[10px] uppercase text-gray-400 mb-1"
                    style={{ ...satoshi, fontWeight: 900, letterSpacing: '0.2em' }}
                  >
                    Outcome 01
                  </p>
                  <p
                    className="text-[#212121] text-sm"
                    style={{ ...satoshi, fontWeight: 700 }}
                  >
                    Professional Diploma
                  </p>
                </div>
              </motion.div>

              {/* Master's Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-4 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-gray-100 w-full md:w-72 md:mt-16"
              >
                <div className="overflow-hidden rounded-[1.2rem] border border-gray-100 bg-[#fdfdfd] p-1">
                  <img
                    src="https://www.operatingmedia.com/wp-content/uploads/2024/06/Om-Certificate-Masters-724x1024.png"
                    alt="Certificate 2"
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 px-2">
                  <p
                    className="text-[10px] uppercase text-gray-400 mb-1"
                    style={{ ...satoshi, fontWeight: 900, letterSpacing: '0.2em' }}
                  >
                    Outcome 02
                  </p>
                  <p
                    className="text-[#212121] text-sm"
                    style={{ ...satoshi, fontWeight: 700 }}
                  >
                    Master's Designation
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 2. REFINED BOTTOM BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full bg-[#FF5A1F] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-orange-500/20 group py-4 px-8 md:px-12"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent z-0 pointer-events-none" />

          <div className="flex items-center gap-6 z-10">
            <img
              src="https://www.operatingmedia.com/wp-content/uploads/2025/05/smiling-cheerfully-casually-pointing-copy-space-side-feeling-happy-satisfied.webp"
              className="h-20 md:h-28 w-auto hidden sm:block drop-shadow-xl brightness-110 -mb-6 transition-all duration-700 group-hover:scale-105"
              alt="Success Students"
            />
            <h3
              className="text-white text-[20px] md:text-[28px] tracking-tight leading-none"
              style={{ ...satoshi, fontWeight: 700 }}
            >
              Begin Your{' '}
              <span className="text-yellow-300" style={{ ...satoshi, fontWeight: 900 }}>
                Success Story
              </span>{' '}
              Today
            </h3>
          </div>

          <div className="mt-3 md:mt-0 z-8">
            <button
              className="bg-white hover:bg-yellow-300 text-[#FF5A1F] text-[14px] uppercase px-8 py-3 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg group active:scale-95 border-none cursor-pointer"
              style={{ ...satoshi, fontWeight: 700, letterSpacing: '0.1em' }}
            >
              Apply Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Decorative circle */}
          <div className="absolute right-[-10px] top-[-10px] w-24 h-24 border border-white/10 rounded-full scale-150 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};

export default CertificationSection;