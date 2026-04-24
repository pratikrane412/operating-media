import { useRef, useEffect } from "react";
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

const S = { fontFamily: "'Satoshi', sans-serif" };

/* ═══════════════════════════════════════════════════════════
   LOGOS — all verified working CDN links
═══════════════════════════════════════════════════════════ */
const ROW_1 = [
  { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "LinkedIn", url: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" },
  { name: "Uber", url: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" },
  { name: "Swiggy", url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.svg" },
  { name: "Zomato", url: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
  { name: "Flipkart", url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Flipkart_logo.svg" },
  { name: "Myntra", url: "https://upload.wikimedia.org/wikipedia/commons/9/98/Myntra_logo.svg" },
  { name: "Puma", url: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Puma_logo.svg" },
  { name: "Airtel", url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Bharti_Airtel_logo.svg" },
];

const ROW_2 = [
  { name: "ICICI Bank", url: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" },
  { name: "HDFC Bank", url: "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" },
  { name: "Colgate", url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Colgate-Palmolive_logo.svg" },
  { name: "Godrej", url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Godrej_logo.svg" },
  { name: "Marico", url: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Marico_Logo.svg" },
  { name: "Bajaj", url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Bajaj_Auto_Logo.svg" },
  { name: "Jio", url: "https://upload.wikimedia.org/wikipedia/commons/8/83/Jio_logo.svg" },
  { name: "Naukri", url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Naukri.com_logo_with_tagline.svg" },
  { name: "Hotstar", url: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_Hotstar_new_logo.svg" },
  { name: "Ogilvy", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Ogilvy_logo.svg" },
  { name: "GroupM", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/GroupM_logo.svg" },
  { name: "WPP", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/WPP_Logo.svg" },
];

const ROW_3 = [
  { name: "Publicis", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Publicis_Groupe_logo.svg" },
  { name: "Dentsu", url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Dentsu_logo.svg" },
  { name: "Havas", url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Havas_logo.svg" },
  { name: "Nykaa", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Nykaa_Logo.svg" },
  { name: "boAt", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Boat_lifestyle_logo.svg/1280px-Boat_lifestyle_logo.svg.png" },
  { name: "Unilever", url: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Unilever_logo.svg" },
  { name: "McDonald's", url: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg" },
  { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg" },
  { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
  { name: "Razorpay", url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" },
  { name: "PhonePe", url: "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" },
];

/* ═══════════════════════════════════════════════════════════
   LOGO CARD
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
        className="max-h-[26px] max-w-[88px] w-auto h-auto object-contain
                   grayscale opacity-55
                   group-hover:grayscale-0 group-hover:opacity-100
                   transition-all duration-300"
      />
      <span
        className="hidden text-center leading-tight"
        style={{ ...S, fontWeight: 600, fontSize: "10px", color: "#9CA3AF" }}
      >
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
  const xTo = direction === "left" ? "-50%" : "0%";

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
      className="relative bg-white overflow-hidden py-9"
      style={S}
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
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.06), transparent 65%)" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(249,115,22,0.04), transparent 65%)" }}
      />

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
                <span style={{ ...S, fontWeight: 800, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.32em", color: "#6B7280" }}>
                  Placement Network
                </span>
              </div>

              <h2
                style={{
                  ...S,
                  fontWeight: 900,
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.035em",
                  color: "#030712",
                  margin: 0,
                }}
              >
                Trusted by{" "}
                <span style={{ color: "#F97316" }}>Top Brands</span>
              </h2>

              <p style={{ ...S, fontWeight: 500, fontSize: "15px", color: "#4B5563", marginTop: "14px", maxWidth: "460px", lineHeight: 1.7 }}>
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
                  <div style={{ ...S, fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", lineHeight: 1, letterSpacing: "-0.03em", color: "#111827" }}>
                    {stat.value}
                  </div>
                  <div style={{ ...S, fontWeight: 600, fontSize: "11px", color: "#9CA3AF", marginTop: "5px", letterSpacing: "0.06em" }}>
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
        <MarqueeRow logos={ROW_1} direction="left" duration={42} />
        <MarqueeRow logos={ROW_2} direction="right" duration={50} />
        <MarqueeRow logos={ROW_3} direction="left" duration={38} />
      </div>

      {/* Fade masks */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-28 z-20 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-28 z-20 pointer-events-none bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}