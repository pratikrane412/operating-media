import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, Users, Clock, Star, ChevronRight } from 'lucide-react';

const campuses = [
  {
    id: 'andheri',
    label: 'Andheri West',
    tag: 'Main Campus',
    address: 'Versova, Andheri West, Mumbai 400053',
    since: 'Est. 2009',
    seats: '120 seats',
    rating: '4.9',
    hours: 'Mon–Sat, 9am–8pm',
    btnColor: 'bg-orange-400 hover:bg-orange-500 text-gray-950',
    tagColor: 'bg-orange-400 text-gray-950',
    iconBg: 'bg-orange-400',
    stripActive: 'border-orange-400 bg-orange-50',
    stripChevron: 'text-orange-500',
    accent: '#f6a85a',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=85',
    highlight: 'Our flagship campus with state-of-the-art labs, dedicated mentorship bays, and a rooftop break zone.',
  },
  {
    id: 'borivali',
    label: 'Borivali West',
    tag: 'North Campus',
    address: 'IC Colony, Borivali West, Mumbai 400103',
    since: 'Est. 2015',
    seats: '80 seats',
    rating: '4.8',
    hours: 'Mon–Sat, 9am–8pm',
    btnColor: 'bg-orange-400 hover:bg-orange-500 text-white',
    tagColor: 'bg-orange-400 text-white',
    iconBg: 'bg-orange-400',
    stripActive: 'border-orange-400 bg-orange-50',
    stripChevron: 'text-orange-500',
    accent: '#f6a85a',
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85',
    highlight: 'A focused learning hub in the heart of Borivali with fast internet, live project rooms, and placement support.',
  },
  {
    id: 'online',
    label: 'Live Online',
    tag: 'Virtual Campus',
    address: 'Join from anywhere in India',
    since: 'Est. 2020',
    seats: 'Unlimited',
    rating: '4.7',
    hours: 'Flexible batches',
    btnColor: 'bg-orange-500 hover:bg-orange-600 text-white',
    tagColor: 'bg-orange-500 text-white',
    iconBg: 'bg-orange-500',
    stripActive: 'border-orange-400 bg-orange-50',
    stripChevron: 'text-orange-500',
    accent: '#f6a85a',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=85',
    highlight: 'Real-time instructor-led sessions, recorded replays, live Q&A, and a dedicated Slack community.',
  },
];

const panelVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, x: -24, transition: { duration: 0.28 } },
};

export default function CampusSection() {
  const [active, setActive] = useState(0);
  const c = campuses[active];

  return (
    <section className="relative bg-white py-15 px-6 overflow-hidden font-['Inter',sans-serif]">

      {/* Dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          {/* Headline */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-400 mb-3 flex items-center gap-2">
              <span className="w-6 h-px bg-yellow-400 inline-block" />
              Visit Us In Person
            </p>
            <h2 className="text-5xl font-extrabold text-gray-950 tracking-[-0.03em] leading-[1.0]">
              Pick Your{' '}
              <span className="relative inline-block">
                Campus
                <span className="absolute inset-x-0 bottom-1 h-3 bg-yellow-400 opacity-30 rounded-sm -z-10 block" />
              </span>
              <br />
              Experience
            </h2>
          </div>

          {/* Tab pills */}
          <div className="flex items-center gap-1.5 p-1.5 bg-gray-100 rounded-2xl self-start lg:self-auto">
            {campuses.map((campus, i) => (
              <button
                key={campus.id}
                onClick={() => setActive(i)}
                className={`relative px-5 py-2.5 rounded-xl text-[13px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${
                  active === i ? 'text-gray-950' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-white rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 420, damping: 38 }}
                  />
                )}
                <span className="relative z-10">{campus.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── PANEL ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-5 gap-5"
          >
            {/* Big image */}
            <div className="lg:col-span-3 relative rounded-3xl overflow-hidden h-[380px] lg:h-[500px] group">
              <img
                src={c.img}
                alt={c.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Tag */}
              <div className="absolute top-5 left-5">
                <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-[0.12em] uppercase ${c.tagColor}`}>
                  {c.tag}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-7 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-[26px] font-extrabold tracking-[-0.025em] leading-tight mb-1.5">
                    {c.label}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/55 text-[12px] font-medium">
                    <MapPin size={11} />
                    <span>{c.address}</span>
                  </div>
                </div>

                {/* Rating badge */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 text-center shrink-0">
                  <div className="text-yellow-400 text-[22px] font-extrabold leading-none tracking-tight">{c.rating}</div>
                  <div className="flex justify-center gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={8} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-white/40 text-[9px] mt-1 font-semibold tracking-wider uppercase">Google</div>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="lg:col-span-2 flex flex-col gap-4">

              {/* Dark highlight card */}
              <div className="flex-1 bg-gray-950 text-white rounded-3xl p-7 flex flex-col justify-between">
                <div>
                  <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center mb-5`}>
                    <MapPin size={18} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[20px] font-extrabold tracking-[-0.025em] leading-tight mb-3">
                    Why {c.label}?
                  </h4>
                  <p className="text-white/55 text-[13.5px] font-normal leading-[1.75]">{c.highlight}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10">
                  {[
                    { icon: <Users size={13} />, val: c.seats,    lbl: 'Capacity'  },
                    { icon: <Clock size={13} />, val: c.since,    lbl: 'Operating' },
                    { icon: <Star  size={13} />, val: c.rating+'★', lbl: 'Rating'  },
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <div className="text-white/25">{s.icon}</div>
                      <div className="text-white font-bold text-[15px] tracking-tight leading-none">{s.val}</div>
                      <div className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.1em]">{s.lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400 mb-1">Batch Hours</p>
                  <p className="text-gray-950 font-bold text-[15px] tracking-[-0.01em]">{c.hours}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}>
                  <Clock size={17} className="text-white" strokeWidth={2.5} />
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-4 rounded-2xl font-bold text-[14px] tracking-[-0.01em] ${c.btnColor} flex items-center justify-center gap-2 transition-colors duration-200 shadow-lg`}
              >
                Book a Free Campus Visit
                <ArrowUpRight size={17} strokeWidth={2.5} />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── BOTTOM STRIP ── */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {campuses.map((campus, i) => (
            <button
              key={campus.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 p-4 rounded-2xl border text-left transition-all duration-300 ${
                active === i ? campus.stripActive : 'border-gray-100 bg-white hover:border-gray-300'
              }`}
            >
              <div className={`w-9 h-9 rounded-xl ${campus.iconBg} flex items-center justify-center shrink-0`}>
                <MapPin size={15} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-[13px] font-bold tracking-[-0.01em] truncate ${active === i ? 'text-gray-950' : 'text-gray-600'}`}>
                  {campus.label}
                </p>
                <p className="text-[11px] text-gray-400 font-medium truncate">{campus.tag}</p>
              </div>
              <ChevronRight
                size={15}
                className={`shrink-0 transition-colors ${active === i ? campus.stripChevron : 'text-gray-300'}`}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
