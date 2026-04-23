import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   LOGOS
═══════════════════════════════════════════════════════════ */
const ROW_1 = [
  { name: "Grapes",       url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/grapes-f74df98e99278d8957de812374224c23.webp" },
  { name: "Nykaa",        url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/nykaa-64094177d119c286d43132f7a2c417f6.webp" },
  { name: "boAt",         url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/boat-2ac76839ca6f49ad5024d4da260a4021.webp" },
  { name: "Google",       url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/google-8c6aac5943fa6fcd00a73872044dbe62.webp" },
  { name: "Netflix",      url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "SUGAR",        url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/sugar-3748784c16f483982f6c06377b27e024.webp" },
  { name: "WebEngage",    url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/webengage-3617057c06ad45b3f7766c437a628444.webp" },
  { name: "McDonald's",   url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/mcdonalds-cffa49fc3eec4a24fad430f83729d652.webp" },
  { name: "Unilever",     url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/unilever-22e915726e0ee0f983e258c2f31a6308.webp" },
  { name: "Schbang",      url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/schbang-85fa19c6278f1ad04de161327745175c.webp" },
  { name: "Social Panga", url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/socialpanga-ad223b41eea61ad6adaa1e727c52cf9a.webp" },
  { name: "Uber",         url: "https://iide-media.blr1.cdn.digitaloceanspaces.com/production/uber-667fb7672b6c662f34a4ca59306dcb9d.webp" },
];

const ROW_2 = [
  { name: "ICICI Bank",  url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  { name: "Colgate",     url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Colgate-Palmolive_logo.svg" },
  { name: "Godrej",      url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Godrej_logo.svg" },
  { name: "GroupM",      url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/GroupM_logo.svg" },
  { name: "Swiggy",      url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.svg" },
  { name: "Zomato",      url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
  { name: "Myntra",      url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Myntra_logo.svg" },
  { name: "HDFC Bank",   url: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "Amazon",      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Flipkart",    url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flipkart_logo.svg" },
  { name: "Ogilvy",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ogilvy_logo.svg/1200px-Ogilvy_logo.svg.png" },
  { name: "Dentsu",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dentsu_logo.svg/1200px-Dentsu_logo.svg.png" },
];

const ROW_3 = [
  { name: "Meta",          url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "LinkedIn",      url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" },
  { name: "Naukri",        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Naukri.com_logo_with_tagline.svg/1280px-Naukri.com_logo_with_tagline.svg.png" },
  { name: "Hotstar",       url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_Hotstar_new_logo.svg/1280px-Disney%2B_Hotstar_new_logo.svg.png" },
  { name: "Puma",          url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg" },
  { name: "Marico",        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Marico_Logo.svg/1280px-Marico_Logo.svg.png" },
  { name: "Publicis",      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Publicis_Groupe_logo.svg/1280px-Publicis_Groupe_logo.svg.png" },
  { name: "WPP",           url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/WPP_Logo.svg/1280px-WPP_Logo.svg.png" },
  { name: "Havas",         url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Havas_logo.svg/1280px-Havas_logo.svg.png" },
  { name: "Bajaj Finserv", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Bajaj_Finserv_Logo.png/800px-Bajaj_Finserv_Logo.png" },
  { name: "Airtel",        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Bharti_Airtel_logo.svg/1280px-Bharti_Airtel_logo.svg.png" },
  { name: "Jio",           url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Jio_logo.svg/1280px-Jio_logo.svg.png" },
];

/* ═══════════════════════════════════════════════════════════
   LOGO CARD — smaller, cleaner, grayscale → color on hover
═══════════════════════════════════════════════════════════ */
function LogoCard({ logo }) {
  return (
    <div
      className="shrink-0 group cursor-default
                 flex items-center justify-center
                 bg-white rounded-xl px-4
                 border border-gray-100
                 shadow-[0_1px_3px_rgba(0,0,0,0.05)]
                 hover:shadow-[0_4px_14px_rgba(249,115,22,0.12)]
                 hover:border-orange-200
                 hover:-translate-y-0.5
                 transition-all duration-200"
      style={{ width: 128, height: 60 }}
    >
      <img
        src={logo.url}
        alt={logo.name}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.nextElementSibling?.classList.remove("hidden");
        }}
        className="max-h-[24px] max-w-[84px] w-auto h-auto object-contain
                   grayscale opacity-55
                   group-hover:grayscale-0 group-hover:opacity-100
                   transition-all duration-300"
      />
      <span className="hidden text-[10px] font-semibold text-gray-400 text-center leading-tight">
        {logo.name}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MARQUEE ROW
═══════════════════════════════════════════════════════════ */
function MarqueeRow({ logos, direction = "left", duration = 36 }) {
  const xFrom = direction === "left" ? "0%" : "-50%";
  const xTo   = direction === "left" ? "-50%" : "0%";

  return (
    <div className="flex overflow-hidden select-none py-1">
      <motion.div
        className="flex gap-3 shrink-0 items-center"
        animate={{ x: [xFrom, xTo] }}
        transition={{ ease: "linear", duration, repeat: Infinity }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <LogoCard key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function HiringPartners() {
  return (
    <section
      className="relative bg-white overflow-hidden py-9"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(249,115,22,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06), transparent 65%)" }} />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(249,115,22,0.04), transparent 65%)" }} />

      {/* ─── HEADER ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

          <FadeUp delay={0}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
                  className="block h-[2px] w-7 bg-orange-500 rounded-full origin-left"
                />
                <span className="text-[11px] font-black uppercase tracking-[0.32em] text-gray-500">
                  Placement Network
                </span>
              </div>

              <h2 className="font-extrabold text-gray-950 leading-[0.94] tracking-[-0.035em]"
                  style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}>
                Trusted by{" "}
                <span className="text-orange-500">Top Brands</span>
              </h2>

              <p className="text-[14px] font-normal text-gray-500 mt-3 max-w-md leading-relaxed">
                Join 11,000+ successful alumni placed at India's leading agencies,
                global brands, and fastest-growing startups.
              </p>
            </div>
          </FadeUp>

          {/* Stats */}
          <FadeUp delay={0.15}>
            <div className="flex gap-8 md:gap-10">
              {[
                { value: "200+", label: "Hiring Partners" },
                { value: "11k+", label: "Alumni Placed" },
                { value: "94%", label: "Placement Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-right">
                  <div className="text-[clamp(1.4rem,2.5vw,2rem)] font-extrabold text-gray-900 leading-none tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

        </div>

        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      </div>

      {/* ─── 3 MARQUEE ROWS ─── */}
      <div className="relative z-10 flex flex-col gap-3">
        <MarqueeRow logos={ROW_1} direction="left"  duration={42} />
        <MarqueeRow logos={ROW_2} direction="right" duration={50} />
        <MarqueeRow logos={ROW_3} direction="left"  duration={38} />
      </div>

      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-28 z-20 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-28 z-20 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}