import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

// Add this to your global CSS or index.html <head>:
// <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400;1,500&display=swap" rel="stylesheet">

// We separate the Grid into a component so we can repeat it for the infinite loop
const BentoGridUnit = ({ images }) => (
  <div className="flex gap-3 h-[550px] shrink-0 px-1.5">
    {/* Left Feature (Col span 3) */}
    <div className="w-[280px] h-full relative group overflow-hidden rounded-3xl border border-black/5 bg-black">
      <img
        src={images[0].url}
        loading="lazy"
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-60"
        alt="Gallery"
      />
      <div className="absolute bottom-6 left-6 z-20">
        <p
          className="text-white font-black text-[10px] tracking-widest uppercase bg-[#FF6B00] px-3 py-1"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Events
        </p>
      </div>
    </div>

    {/* Center Column (Col span 6) */}
    <div className="w-[580px] grid grid-rows-2 gap-3 h-full">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-7 relative group overflow-hidden rounded-3xl border border-black/5">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-[#FF6B00]/20 transition-all z-10" />
          <img src={images[1].url} loading="lazy" className="w-full h-full object-cover" alt="Gallery" />
        </div>
        <div className="col-span-5 relative group overflow-hidden rounded-3xl border border-black/5 bg-[#FF6B00]">
          <img src={images[2].url} loading="lazy" className="w-full h-full object-cover mix-blend-multiply transition-transform group-hover:scale-110" alt="Gallery" />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-5 relative group overflow-hidden rounded-3xl border border-black/5">
          <img src={images[3].url} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Gallery" />
        </div>
        <div className="col-span-7 relative group overflow-hidden rounded-3xl border border-black/5">
          <img src={images[4].url} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Gallery" />
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-white/90 backdrop-blur p-2 rounded-full"><ArrowUpRight size={16} /></div>
          </div>
        </div>
      </div>
    </div>

    {/* Right Feature (Col span 3) */}
    <div className="w-[280px] h-full relative group overflow-hidden rounded-3xl border border-black/5 shadow-sm">
      <img src={images[5].url} loading="lazy" className="w-full h-full object-cover" alt="Gallery" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
        <p
          className="text-white italic text-lg leading-tight"
          style={{ fontFamily: "'Lora', serif" }}
        >
          "Where education meets celebration."
        </p>
      </div>
    </div>
  </div>
);

const InstitutionCampus = () => {
  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1523240715639-963c9ad08a6c?w=600", title: "CAMPUS CULTURE" },
    { id: 2, url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600", title: "AGENCY VISIT" },
    { id: 3, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400", title: "WORKSHOPS" },
    { id: 4, url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400", title: "SOCIALS" },
    { id: 5, url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600", title: "TEAM HUDDLE" },
    { id: 6, url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600", title: "GRADUATION" },
  ];

  return (
    <section
      className="bg-white py-10 antialiased overflow-hidden"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 motion-translate-x-in-[11%] motion-translate-y-in-[-14%] motion-duration-[0.71s]/translate motion-delay-[0.04s]/translate">
        <div className="flex items-center gap-3 mb-4">

        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            className="font-black text-black text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tighter uppercase"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            Life{' '}
            <span
              className="font-medium lowercase text-[#FF6B00]"
              style={{ fontFamily: "'Lora', serif", fontStyle: 'italic' }}
            >
              {' '}At{' '}
            </span>
            Operating Media.
          </h2>
          <p
            className="max-w-md text-black/60 text-base leading-relaxed border-l-2 border-black/10 pl-6"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            Student life is anything but ordinary. From surprise agency visits to vibrant celebrations, every moment is an experience.
          </p>
        </div>
      </div>

      {/* --- INFINITE MOVING BENTO TRACK --- */}
      {/* Hover pauses the animation via Tailwind group + CSS */}
      <div className="relative flex overflow-hidden group [&:hover_>_div]:![animation-play-state:paused]">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* We render the grid twice to create a seamless loop */}
          <BentoGridUnit images={images} />
          <BentoGridUnit images={images} />
        </motion.div>
      </div>

      {/* --- FOOTER DECORATION --- */}
      <div className="mt-16 flex justify-center">
        <div className="h-[1px] w-1/2 bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
      </div>
    </section>
  );
};

export default InstitutionCampus;