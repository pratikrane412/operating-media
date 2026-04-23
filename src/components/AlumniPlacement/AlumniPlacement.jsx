import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const placementData = [
  { name: "Shekhar Singh",    role: "Social Media Marketing",   photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Shekhar-Singh-1-1.png",    companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-802-1.png",                                                                           bg: "#E8ECF0" },
  { name: "Shahnawaaz Khan",  role: "Ads Operation",            photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Shahnawaaz-Khan.png",        companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Hotstar_logo.svg.png",                                                                     bg: "#DFE8EE" },
  { name: "Ashish Yadav",     role: "E-commerce Executive",     photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-803.png",              companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Lumina-Datamatics-Logo-with-TradeMark-and-Registered-Mark-1-1.png",                    bg: "#EDE8DF" },
  { name: "Amruta Singh",     role: "SEO Executive",            photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Amruta-Singh.png",           companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Untitled-design-77-Photoroom-1.png",                                                      bg: "#E2EDE4" },
  { name: "Bhavini Dave",     role: "Social Media Marketing",   photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Bhavini.png",                companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Ibraine-Registered-Logo-Transparent-2.webp",                                              bg: "#EDE2E8" },
  { name: "Tisha Soni",       role: "Social Media Marketing",   photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Tisha-Soni-2.png",           companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Group-802-1.png",                                                                           bg: "#EDE9E2" },
  { name: "Akansha Singh",    role: "SEO Executive",            photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Akansha-Singh.png",          companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/qtq_95.webp",                                                                              bg: "#E2EAF0" },
  { name: "Sakina Shaikh",    role: "Digital Marketing Intern", photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Sakeena.png",                companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/webisdom-black.png",                                                                        bg: "#E5EDE3" },
  { name: "Aryan Pote",       role: "Social Media Executive",   photo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Aryan-Pote.png",             companyLogo: "https://www.operatingmedia.com/wp-content/uploads/2025/01/Ibraine-Registered-Logo-Transparent-2.webp",                                              bg: "#E8ECF0" },
];

const doubled = [...placementData, ...placementData];

const StudentCard = ({ item }) => (
  <div
    className="shrink-0 group cursor-default flex flex-col overflow-hidden rounded-2xl
      bg-white border border-gray-100 shadow-sm
      hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
    style={{ width: "clamp(175px, 16vw, 215px)" }}
  >
    {/* Photo — rectangular, fixed height, object-cover object-top */}
    <div
      className="w-full overflow-hidden shrink-0"
      style={{ height: "clamp(210px, 20vw, 255px)", backgroundColor: item.bg }}
    >
      <img
        src={item.photo}
        alt={item.name}
        className="w-full h-full object-cover object-top
          group-hover:scale-[1.04] transition-transform duration-500"
      />
    </div>

    {/* Info — proper spacing, no cramping */}
    <div className="px-4 pt-3.5 pb-4 flex flex-col gap-1">
      <h4 className="text-[13.5px] font-extrabold text-gray-950 leading-tight">
        {item.name}
      </h4>
      <p className="text-[11.5px] text-gray-400 font-medium">{item.role}</p>

      {/* Divider */}
      <div className="h-px bg-gray-100 my-2" />

      {/* Company logo — proper size, readable */}
      <div className="h-7 flex items-center">
        <img
          src={item.companyLogo}
          alt={item.name}
          className="max-h-6 max-w-[130px] object-contain
            opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  </div>
);

export default function AlumniPlacement() {
  return (
    <section className="placement-section bg-white py-5 overflow-hidden">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
        .placement-section { font-family: 'DM Sans', sans-serif; }
        .placement-section .disp { font-family: 'Syne', sans-serif; }
      `}</style>

      {/* ── Header ── */}
      <div className="placement-section max-w-6xl mx-auto px-6 sm:px-10 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

          {/* Left */}
          <div>
           

            {/* Pre-title */}
            <p className="text-[13px] font-semibold text-gray-600 mb-1 tracking-wide"
              style={{ fontFamily: "'Inter', sans-serif" }}>
              Meet our
            </p>

            {/* Main title */}
            <h2
              className="disp font-black text-gray-950 leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)" }}
            >
              Placed Students
            </h2>

         
          </div>


        </div>

      </div>

      {/* ── Marquee: rectangular cards, gap-4, no circles anywhere ── */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24
          bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24
          bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4"
          style={{ paddingLeft: "clamp(20px,5vw,80px)", paddingRight: "clamp(20px,5vw,80px)" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {doubled.map((item, i) => (
            <StudentCard key={i} item={item} />
          ))}
        </motion.div>
      </div>

      {/* ── CTA ── */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-6">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative overflow-hidden bg-gray-950 text-white
            px-9 py-3.5 rounded-xl font-bold text-[13.5px] shadow-lg
            flex items-center gap-2.5 group cursor-pointer border-none"
        >
          <div className="absolute top-0 -left-full w-1/2 h-full
            bg-gradient-to-r from-transparent via-white/10 to-transparent
            skew-x-[-20deg] group-hover:left-[150%] transition-all duration-700" />
          <FileDown size={15} />
          Download Placements Report
        </motion.button>
        <p className="text-[12px] text-gray-400 font-medium">
          100+ companies 
        </p>
      </div>

    </section>
  );
}