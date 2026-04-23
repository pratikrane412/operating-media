import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// All brand logo rows extracted from the original website source
const row1 = [
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-243.png", alt: "MoneyGram" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-244.png", alt: "Hungama" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-250.png", alt: "Social Wavelength" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-251.png", alt: "Hindustan Unilever" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-252.png", alt: "Toyota" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-255.png", alt: "Tech Mahindra" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-256.png", alt: "The Leela" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-263.png", alt: "CouponDunia" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-264.png", alt: "Brand 9" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-265.png", alt: "Brand 10" },
];

const row2 = [
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-266.png", alt: "ResellerClub" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-267.png", alt: "Naaptol" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-268.png", alt: "Sharekhan" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-269.png", alt: "Shemaroo" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-270.png", alt: "ICICI Bank" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-271.png", alt: "Shop CJ" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-272.png", alt: "LIC" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-233.png", alt: "eBay" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-237.png", alt: "Brand 9" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-241.png", alt: "Brand 10" },
];

const row3 = [
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-245.png", alt: "Brand 1" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-246.png", alt: "Brand 2" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-247.png", alt: "Brand 3" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-248.png", alt: "Brand 4" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-249.png", alt: "Brand 5" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-253.png", alt: "Brand 6" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-254.png", alt: "Brand 7" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-257.png", alt: "Brand 8" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-258.png", alt: "Brand 9" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-259.png", alt: "Brand 10" },
];

const row4 = [
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-260.png", alt: "Brand 1" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-261.png", alt: "Brand 2" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-262.png", alt: "Brand 3" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-234.png", alt: "Brand 4" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-235.png", alt: "Brand 5" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-236.png", alt: "Brand 6" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-238.png", alt: "Brand 7" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-239.png", alt: "Brand 8" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-240.png", alt: "Brand 9" },
  { src: "https://www.operatingmedia.com/wp-content/uploads/2024/08/Group-242.png", alt: "Brand 10" },
];

// CSS keyframe animation injected once
const marqueeCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
  .trusted-brands-wrap * { font-family: 'Inter', sans-serif; }
  @keyframes marquee-ltr {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-rtl {
    0%   { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  .marquee-ltr {
    animation: marquee-ltr 28s linear infinite;
  }
  .marquee-rtl {
    animation: marquee-rtl 28s linear infinite;
  }
  .marquee-ltr:hover,
  .marquee-rtl:hover {
    animation-play-state: paused;
  }
`;

function MarqueeRow({ logos, direction = "ltr", speed = 28 }) {
  // Duplicate logos for seamless loop
  const doubled = [...logos, ...logos];
  const animClass = direction === "ltr" ? "marquee-ltr" : "marquee-rtl";

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-3 ${animClass}`}
        style={{
          width: "max-content",
          animationDuration: `${speed}s`,
        }}
      >
        {doubled.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[200px] h-[80px] bg-white rounded-2xl border border-gray-100 flex items-center justify-center px-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-[52px] max-w-[160px] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustedBrands() {
  return (
    <>
      <style>{marqueeCSS}</style>

      <section className="trusted-brands-wrap w-full py-14 md:py-5 overflow-hidden" style={{ background: "#F8F7F4" }}>
        <div className="max-w-6xl mx-auto px-4">

          {/* ── Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-center text-gray-900 tracking-tight" style={{ fontSize: "36px", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>
              Trusted By{" "}
              <span style={{ color: "#FF6B00" }}>Top Brands</span>
            </h2>
          </motion.div>

        </div>

        {/* ── Marquee rows — full bleed ── */}
        <div className="flex flex-col gap-4">
          <MarqueeRow logos={row1} direction="ltr" speed={30} />
          <MarqueeRow logos={row2} direction="rtl" speed={34} />
          <MarqueeRow logos={row3} direction="ltr" speed={26} />
          <MarqueeRow logos={row4} direction="rtl" speed={32} />
        </div>
      </section>
    </>
  );
}