import { motion } from 'framer-motion';
import { MapPin, Rocket, ShieldCheck, ArrowUpRight, Sparkles, Zap } from 'lucide-react';

const batches = [
  { type: 'Weekday', andheri: '12:00 PM – 2:00 PM',  borivali: '08:00 AM – 09:30 AM' },
  { type: 'Weekday', andheri: '04:00 PM – 06:00 PM',  borivali: '10:00 AM – 12:00 PM' },
  { type: 'Weekday', andheri: '07:00 PM – 09:00 PM',  borivali: '02:30 PM – 04:30 PM' },
  { type: 'Sunday',  andheri: '11:00 AM – 04:00 PM',  borivali: '11:00 AM – 04:00 PM' },
];

const TRUST = [
  'ISO 9001:2015 Certified',
  'Google Certified Trainers',
  '100% Placement Assistance',
];

function BatchTable({ campus, dataKey, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm
        hover:shadow-lg hover:border-orange-200 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-orange-50/50 px-5 py-3.5">
        <h4 className="flex items-center gap-2 text-[16px] font-extrabold tracking-tight text-gray-900">
          <MapPin size={16} className="text-orange-500 shrink-0" strokeWidth={2} />
          {campus}
        </h4>
        <div className="flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-green-700">Enrolling</span>
        </div>
      </div>

      {/* Table */}
      <div className="px-4 pb-3 pt-1">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="pb-2 pt-3 text-left text-[9px] font-bold uppercase tracking-widest text-gray-400">Session</th>
              <th className="pb-2 pt-3 text-right text-[9px] font-bold uppercase tracking-widest text-gray-400">Timing</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((b, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-orange-50/30 transition-colors duration-150">
                <td className="py-2.5 pr-3">
                  {b.type === 'Sunday' ? (
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-yellow-200 bg-yellow-50 px-2.5 py-1">
                      <Sparkles size={10} className="text-yellow-500" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-700">Weekend</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-orange-100 bg-orange-50 px-2.5 py-1">
                      <Zap size={10} className="text-orange-500" />
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-orange-600">Weekday</span>
                    </span>
                  )}
                </td>
                <td className="py-2.5 text-right text-sm font-extrabold tracking-tight text-gray-900">
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
  return (
    <section className="relative w-full overflow-hidden bg-white">

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
            <span className="text-[11px] font-bold uppercase tracking-widest text-orange-500">
              Enrollment Schedule
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter text-gray-950 sm:text-5xl">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Batches 2025
            </span>
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-gray-500">
            Flexible learning paths across our Mumbai campuses — for students, freshers, and working professionals alike.
          </p>
        </motion.div>

        {/* Batch Tables */}
        <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <BatchTable campus="Andheri Campus"  dataKey="andheri"  delay={0.08} />
          <BatchTable campus="Borivali Campus" dataKey="borivali" delay={0.16} />
        </div>

        {/* Trust strip — still inside container */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mt-0 flex flex-wrap items-center justify-center gap-x-8 gap-y-3
            rounded-2xl border border-green-200 bg-green-50 px-6 py-3.5"
        >
          <ShieldCheck size={14} className="shrink-0 text-green-600" strokeWidth={2} />
          {TRUST.map((t, i) => (
            <span key={t} className="flex items-center gap-4">
              {i > 0 && <span className="hidden h-3 w-px bg-green-300 sm:block" />}
              <span className="text-[11px] font-bold uppercase tracking-wider text-green-800">{t}</span>
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
            <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-white sm:text-[26px]">
              Start Your Career Transformation Today.
            </h3>

          </div>

          {/* Right — buttons */}
          <div className="flex shrink-0 gap-3">
            <button className="group inline-flex items-center gap-2 rounded-xl bg-white
              px-8 py-3.5 text-[14px] font-extrabold text-orange-600
              shadow-md hover:shadow-xl active:scale-95 transition-all duration-200
              whitespace-nowrap cursor-pointer border-none">
              <Rocket size={15} className="text-orange-500" />
              Enroll Today
              <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-150" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl
              border-2 border-white/30 px-7 py-3.5 text-[14px] font-semibold text-white
              hover:border-white/70 hover:bg-white/10 active:scale-95
              transition-all duration-200 whitespace-nowrap cursor-pointer bg-transparent">
              Download
            </button>
          </div>

        </div>
      </motion.div>

    </section>
  );
}