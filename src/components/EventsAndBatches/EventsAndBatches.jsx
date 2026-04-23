import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Rocket, ShieldCheck, ArrowUpRight, Sparkles, Zap } from 'lucide-react';

const batches = [
  { type: 'Weekday', andheri: '12:00 PM – 2:00 PM', borivali: '08:00 AM – 09:30 AM' },
  { type: 'Weekday', andheri: '04:00 PM – 06:00 PM', borivali: '10:00 AM – 12:00 PM' },
  { type: 'Weekday', andheri: '07:00 PM – 09:00 PM', borivali: '02:30 PM – 04:30 PM' },
  { type: 'Sunday', andheri: '11:00 AM – 04:00 PM', borivali: '11:00 AM – 04:00 PM' },
];

const TRUST = [
  'ISO 9001:2015 Certified',
  'Google Certified Trainers',
  '100% Placement Assistance',
];

const SATOSHI = "'Satoshi', sans-serif";

function BatchTable({ campus, dataKey, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm
        hover:shadow-lg hover:border-orange-200 transition-all duration-300"
      style={{ fontFamily: SATOSHI }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-orange-50/50 px-5 py-4">
        <h4
          className="flex items-center gap-2 text-gray-900"
          style={{ fontFamily: SATOSHI, fontWeight: 800, fontSize: '17px', letterSpacing: '-0.02em' }}
        >
          <MapPin size={17} className="text-orange-500 shrink-0" strokeWidth={2} />
          {campus}
        </h4>
        <div className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          <span
            style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#15803d' }}
          >
            Enrolling
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="px-4 pb-4 pt-1">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th
                className="pb-2 pt-3 text-left text-gray-400"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.16em' }}
              >
                Session
              </th>
              <th
                className="pb-2 pt-3 text-right text-gray-400"
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.16em' }}
              >
                Timing
              </th>
            </tr>
          </thead>
          <tbody>
            {batches.map((b, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-orange-50/30 transition-colors duration-150">
                <td className="py-3 pr-3">
                  {b.type === 'Sunday' ? (
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-yellow-200 bg-yellow-50 px-2.5 py-1">
                      <Sparkles size={11} className="text-yellow-500" />
                      <span
                        style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a16207' }}
                      >
                        Weekend
                      </span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-orange-100 bg-orange-50 px-2.5 py-1">
                      <Zap size={11} className="text-orange-500" />
                      <span
                        style={{ fontFamily: SATOSHI, fontWeight: 600, fontSize: '11.5px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#ea580c' }}
                      >
                        Weekday
                      </span>
                    </span>
                  )}
                </td>
                <td
                  className="py-3 text-right text-gray-900"
                  style={{ fontFamily: SATOSHI, fontWeight: 800, fontSize: '14.5px', letterSpacing: '-0.01em' }}
                >
                  {b[dataKey]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default function BatchSchedule() {
  // Inject Satoshi font
  useEffect(() => {
    if (!document.querySelector('link[data-font="satoshi"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.setAttribute('data-font', 'satoshi');
      link.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ fontFamily: SATOSHI }}
    >

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-orange-100/50 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-yellow-100/40 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-14 py-12 sm:py-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 shrink-0 bg-orange-500" />
            <span
              style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#F97316' }}
            >
              Enrollment Schedule
            </span>
          </div>
          <h2
            className="mb-4"
            style={{ fontFamily: SATOSHI, fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            <span
              style={{
                background: 'linear-gradient(90deg, #F97316, #FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Batches 2025
            </span>
          </h2>
          <p
            className="max-w-xl"
            style={{ fontFamily: SATOSHI, fontWeight: 400, fontSize: '16.5px', lineHeight: 1.75, color: '#6B7280' }}
          >
            Flexible learning paths across our Mumbai campuses — for students, freshers, and working professionals alike.
          </p>
        </motion.div>

        {/* Batch Tables */}
        <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <BatchTable campus="Andheri Campus" dataKey="andheri" delay={0.08} />
          <BatchTable campus="Borivali Campus" dataKey="borivali" delay={0.16} />
        </div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-0 flex flex-wrap items-center justify-center gap-x-8 gap-y-3
            rounded-2xl border border-green-200 bg-green-50 px-6 py-4"
        >
          <ShieldCheck size={15} className="shrink-0 text-green-600" strokeWidth={2} />
          {TRUST.map((t, i) => (
            <span key={t} className="flex items-center gap-4">
              {i > 0 && <span className="hidden h-3 w-px bg-green-300 sm:block" />}
              <span
                style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#14532d' }}
              >
                {t}
              </span>
            </span>
          ))}
        </motion.div>

      </div>{/* end max-w container */}

      {/* ══ CTA CARD — truly full width, touches screen edges ══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative overflow-hidden w-full
          bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400
          px-6 sm:px-12 lg:px-20 py-10 sm:py-12 shadow-[0_-8px_40px_rgba(249,115,22,0.2)]"
      >
        {/* Diagonal stripe */}
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0px,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_12px)]" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between max-w-6xl mx-auto">

          {/* Left */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {/* Headline */}
            <h3
              style={{ fontFamily: SATOSHI, fontWeight: 800, fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: '#fff' }}
            >
              Start Your Career Transformation Today.
            </h3>
          </div>

          {/* Right — buttons */}
          <div className="flex shrink-0 gap-3">
            <button
              className="group inline-flex items-center gap-2 rounded-xl bg-white
                px-8 py-3.5 shadow-md hover:shadow-xl active:scale-95 transition-all duration-200
                whitespace-nowrap cursor-pointer border-none"
              style={{ fontFamily: SATOSHI, fontWeight: 800, fontSize: '15px', color: '#ea580c' }}
            >
              <Rocket size={15} className="text-orange-500" />
              Enroll Today
              <ArrowUpRight size={15} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-150" />
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl
                border-2 border-white/30 px-7 py-3.5 text-white
                hover:border-white/70 hover:bg-white/10 active:scale-95
                transition-all duration-200 whitespace-nowrap cursor-pointer bg-transparent"
              style={{ fontFamily: SATOSHI, fontWeight: 700, fontSize: '15px' }}
            >
              Download
            </button>
          </div>

        </div>
      </motion.div>

    </section>
  );
}