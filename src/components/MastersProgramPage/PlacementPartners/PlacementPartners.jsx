// ─────────────────────────────────────────────────────────────────────────────
// SETUP REQUIRED IN YOUR PROJECT:
// index.html <head>:
// <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap" rel="stylesheet">
// ─────────────────────────────────────────────────────────────────────────────

import { motion } from "framer-motion";

const satoshi = { fontFamily: "'Satoshi', sans-serif" };

const brands = [
  { name: "digichefs", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-190.png" },
  { name: "VSC", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-191.png" },
  { name: "Global Advertisers", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-192.png" },
  { name: "Disney+ Hotstar", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-193.png" },
  { name: "FashionTV", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-194.png" },
  { name: "NetSearch Digital", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-196.png" },
  { name: "Coconut Media Box", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-197.png" },
  { name: "Bluebit Technologies", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-198.png" },
  { name: "Digi Baap", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-179.png" },
  { name: "HGS", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-180.png" },
  { name: "Infidigit", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-182.png" },
  { name: "Accenture", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-183.png" },
  { name: "Excel Productions", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-184.png" },
  { name: "Publicis Groupe", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-185.png" },
  { name: "eBrandz", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-186.png" },
  { name: "Jio Studios", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-187.png" },
  { name: "ReachLocal", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-195.png" },
  { name: "India Network", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-181.png" },
  { name: "Force Motors", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-188.png" },
  { name: "Kamari", src: "https://www.operatingmedia.com/wp-content/uploads/2024/07/Group-189.png" },
];

function LogoCard({ name, src, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 5) * 0.06 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="bg-white border border-gray-100 rounded-xl
                 flex items-center justify-center
                 px-3 py-3 sm:px-4 sm:py-4
                 h-[60px] sm:h-[68px] md:h-[76px]
                 cursor-pointer transition-all duration-300
                 hover:border-orange-200
                 hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)]"
    >
      <img
        src={src}
        alt={name}
        className="max-h-7 sm:max-h-8 md:max-h-9 max-w-full object-contain
                   opacity-75 hover:opacity-100 transition-opacity duration-300"
        loading="lazy"
      />
    </motion.div>
  );
}

export default function PlacementPartners() {
  return (
    <section
      className="py-5 sm:py-8 md:py-8 px-4 bg-[#FAFAF8] antialiased"
      style={satoshi}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative mb-4">
            <h2
              className="text-gray-900 tracking-tight text-2xl sm:text-4xl lg:text-[2.8rem]"
              style={{ ...satoshi, fontWeight: 900 }}
            >
              250+ Placement Partners
            </h2>
          </div>

          <p
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mt-4"
            style={{ ...satoshi, fontWeight: 500 }}
          >
            Our graduates are placed at India's top digital agencies and global Fortune 500 companies.
            Join an ecosystem of elite marketing professionals.
          </p>
        </motion.div>

        {/* ── Logo Grid ── */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-2.5">
          {brands.map((brand, i) => (
            <LogoCard key={i} name={brand.name} src={brand.src} index={i} />
          ))}
        </div>

        {/* ── Bottom strip ── */}
        <motion.div
          className="mt-7 sm:mt-9 flex items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="h-px w-10 sm:w-14 bg-gray-200 rounded-full" />
          <p
            className="text-gray-400 text-xs sm:text-sm text-center"
            style={{ ...satoshi, fontWeight: 400 }}
          >
            And{" "}
            <span style={{ ...satoshi, fontWeight: 700, color: '#1f2937' }}>100s more</span>{" "}
            companies hiring our graduates every year
          </p>
          <div className="h-px w-10 sm:w-14 bg-gray-200 rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}