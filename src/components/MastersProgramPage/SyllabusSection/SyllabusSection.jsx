import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown, Laptop, Target, BarChart3, Bot, Globe,
  Search, X, BookOpen,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// SETUP REQUIRED IN YOUR PROJECT:
// index.html <head>:
// <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700,900&display=swap" rel="stylesheet">
// ─────────────────────────────────────────────────────────────────────────────

const satoshi = { fontFamily: "'Satoshi', sans-serif" };

// ─── DATA ─────────────────────────────────────────────────────────────────────
const categories = [
  {
    id: 0, label: "Foundation & SEO", shortLabel: "SEO",
    icon: <Laptop size={15} />,
    desc: "Core technical skills to build and optimize websites.",
    color: "#FF5A1F",
    modules: [
      { title: "Digital Marketing Basics", topics: ["Scope of DM", "Marketing Fundamentals", "Paid Media Networks", "Social Media Types", "Natural Search Rankings", "Analytics Essentials"] },
      { title: "Website Creation on WordPress", topics: ["Installation & Settings", "Dashboard Management", "Links Structure", "Contact Forms", "Theme/Plugin Management", "Site Import/Export"] },
      { title: "Landing Page Design (Elementor)", topics: ["High-Converting Layouts", "Section/Column Customization", "Advanced Widgets", "Email Tool Integration", "Facebook Pixel", "Social Proof"] },
      { title: "Search Engine Optimization (SEO)", topics: ["Competitor Research", "Technical Guidelines", "Keywords Research", "On-page/Off-page", "App Store Optimization", "SEO Audit & Tools"] },
      { title: "Webmaster Tools", topics: ["Search Console Setup", "Performance Reports", "URL Inspection", "Index Coverage", "Sitemaps & Robots.txt", "Security & Manual Actions"] },
      { title: "Blog Creation & Monetization", topics: ["Niche Selection", "Content Planning", "SEO for Blogs", "Affiliate Marketing", "Google AdSense", "Sponsored Posts"] },
      { title: "Creative Designing (Canva + Adobe)", topics: ["Graphic Design Platforms", "Visual Content Creation", "Typography & Branding", "Template Customization", "Collaboration Tools"] },
    ],
  },
  {
    id: 1, label: "Performance Marketing", shortLabel: "Ads",
    icon: <Target size={15} />,
    desc: "Data-driven advertising strategies to maximize reach and ROAS.",
    color: "#FF5A1F",
    modules: [
      { title: "Search Engine Marketing (SEM)", topics: ["Google Ads Setup", "Campaign Structure", "Bidding Strategies", "Quality Score", "Remarketing", "Dynamic Search Ads"] },
      { title: "Social Media Advertising", topics: ["Meta Business Suite", "Pixel Setup", "Layered Targeting", "Video Advertising", "Ad Placements", "Campaign Optimization"] },
      { title: "YouTube Advertising", topics: ["Channel Optimization", "In-Stream Ads", "Placement Targeting", "Perfect Ad Formula", "Remarketing", "Competitor Spying"] },
      { title: "Google Analytics 4 (GA4)", topics: ["GA4 Installation", "Campaign Tracking", "Goals & Events", "E-commerce Tracking", "Advanced Segmentation", "Revenue Reports"] },
      { title: "Google Tag Manager (GTM)", topics: ["Tags, Triggers & Variables", "Custom HTML/JS Tags", "Data Layer", "GDPR Compliance", "Third-party Integration"] },
      { title: "Performance Marketing", topics: ["ROI Optimization", "Metrics & KPIs", "SEM Best Practices", "Affiliate Programs", "CRO", "Reporting"] },
      { title: "Google AdSense", topics: ["Monetization Basics", "Joining the Program", "Types of Ad Units", "Inclusions/Exclusions", "Revenue Generation"] },
      { title: "Media Buying & Planning", topics: ["Inventory Selection", "Media Strategies", "Excel Formulaic Planning", "Budget Allocation", "Execution & Reporting"] },
    ],
  },
  {
    id: 2, label: "AI & Automation", shortLabel: "AI",
    icon: <Bot size={15} />,
    desc: "Cutting-edge AI and automated workflows for business growth.",
    color: "#FF5A1F",
    modules: [
      { title: "Generative AI", topics: ["Prompt Engineering", "Targeting Prompts", "AI Content (Email/Social)", "Audio/Visual AI", "Brand Campaigns", "Chatbot Development"] },
      { title: "Artificial Intelligence in DM", topics: ["Automation Platforms", "Data Management", "Lead Nurturing", "Customer Journey Mapping", "Personalization", "Workflow Integration"] },
      { title: "WhatsApp Chatbot & Automation", topics: ["Business API Setup", "Conversational Flows", "Multichannel Support", "Integrations", "Analytics & Performance"] },
      { title: "Email Marketing", topics: ["Platform Selection", "Broadcasts & Autoresponders", "Content Writing", "B2B/B2C Best Practices", "List Building", "Engagement Strategy"] },
      { title: "Drip Marketing & Email Automation", topics: ["Lead Segmentation", "Sales Funnels", "CRM Navigation", "Multi-channel Campaigns", "Abandoned Cart Recovery", "Push Notifications"] },
    ],
  },
  {
    id: 3, label: "E-commerce & Lead Gen", shortLabel: "Ecom",
    icon: <BarChart3 size={15} />,
    desc: "Techniques for driving sales and capturing high-intent leads.",
    color: "#FF5A1F",
    modules: [
      { title: "Shopify Shop Creation", topics: ["Shopify Account Setup", "Theme Selection", "Payment Gateways", "Shipping Configurations", "Essential Apps", "Launch Checklist"] },
      { title: "Shopify Drop Shipping", topics: ["Business Model", "Supplier Selection", "Product Listings", "Inventory Management", "Customer Service", "Scaling Tactics"] },
      { title: "E-commerce Marketing", topics: ["Amazon, Nykaa, Flipkart Listing", "Listing Optimization", "Inventory Forecasting", "Multi-channel Integration", "Pricing & Promotions"] },
      { title: "Website Shop (WooCommerce)", topics: ["WordPress Installation", "WooCommerce Config", "Payment/Shipping Setup", "Product Management", "Plugin Optimization"] },
      { title: "Lead Generation", topics: ["Website Optimization", "High-Intent Keywords", "Lead Magnets", "Organic Lead Gen", "Nurturing Sequences", "CRM Management"] },
      { title: "Mobile Marketing", topics: ["App-based Ads", "SMS & Push Notifications", "Location-based Ads", "Play Store Optimization", "Mobile Landing Page UX"] },
    ],
  },
  {
    id: 4, label: "Growth & Strategy", shortLabel: "Growth",
    icon: <Globe size={15} />,
    desc: "High-level strategic planning and brand scaling across global markets.",
    color: "#FF5A1F",
    modules: [
      { title: "Digital Planning and Strategy", topics: ["Situational Analysis", "Client Requirement", "Strategy Formulation", "Budget Planning", "Market Trends Analysis"] },
      { title: "Growth Marketing Strategies", topics: ["Retention & CLV", "Product-Led Growth", "Experimentation Frameworks", "Scaling Initiatives", "Emerging Tech Trends"] },
      { title: "Buyer Personas", topics: ["Audience Research", "Persona Components", "Messaging Alignment", "Evaluating Persona Effectiveness", "Buyer Journey Alignment"] },
      { title: "Funnel Marketing", topics: ["Awareness to Action", "Sales vs Marketing Funnel", "Building/Fixing Bottlenecks", "Stage-specific Content", "Sales Pipelines"] },
      { title: "Brand Communication", topics: ["International Branding", "Identity & Equity", "Cross-Cultural Branding", "Crisis Management", "Brand Performance Monitoring"] },
      { title: "Online Reputation Management", topics: ["Basics of ORM", "Positive Seeding", "Social Listening", "Audience Sentiments", "Panic Situation Management"] },
      { title: "Social Media Marketing (Organic)", topics: ["Business Page Management", "Follower Growth", "Hashtag Usage", "Viral Best Practices", "Audience Insights"] },
      { title: "Influencer Marketing", topics: ["Identifying Influencers", "Campaign Execution", "Measuring Success", "Legal Compliance", "Best Practices"] },
    ],
  },
];

const totalModules = categories.reduce((sum, c) => sum + c.modules.length, 0);

// ─── HIGHLIGHT helper ──────────────────────────────────────────────────────────
function highlight(text, q) {
  if (!q) return text;
  const parts = text.split(new RegExp(`(${q})`, 'gi'));
  return parts.map((p, i) =>
    p.toLowerCase() === q.toLowerCase()
      ? <mark key={i} className="bg-orange-200 text-orange-900 rounded px-0.5">{p}</mark>
      : p
  );
}

// ─── MODULE ROW ───────────────────────────────────────────────────────────────
function ModuleRow({ module, catIdx, modIdx, isOpen, onToggle, searchQuery }) {
  return (
    <div className={`rounded-xl border transition-all duration-200 overflow-hidden
      ${isOpen
        ? 'border-[#FF5A1F]/30 shadow-[0_2px_16px_rgba(255,90,31,0.08)] bg-white'
        : 'border-gray-100 bg-white hover:border-orange-100'}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-4 text-left"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className="shrink-0 text-[11px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest"
            style={{
              ...satoshi,
              background: isOpen ? '#FF5A1F' : 'rgba(255,90,31,0.08)',
              color: isOpen ? '#fff' : '#FF5A1F',
            }}
          >
            {catIdx + 1}.{modIdx + 1}
          </span>
          <h4
            className="text-[15px] font-semibold truncate transition-colors"
            style={{
              ...satoshi,
              color: isOpen ? '#FF5A1F' : '#111111',
            }}
          >
            {highlight(module.title, searchQuery)}
          </h4>
        </div>
        <div className="flex items-center gap-2 shrink-0 ml-2">
          <span
            className="hidden sm:inline text-[13px] text-gray-400"
            style={satoshi}
          >
            {module.topics.length} topics
          </span>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-200 shrink-0"
            style={{ background: isOpen ? '#FF5A1F' : '#f3f4f6', color: isOpen ? '#fff' : '#9ca3af' }}
          >
            <ChevronDown size={11} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-2 border-t border-gray-50 flex flex-wrap gap-1.5">
              {module.topics.map((topic, i) => (
                <span
                  key={i}
                  className="text-[13px] px-3 py-1.5 rounded-lg border font-medium"
                  style={{
                    ...satoshi,
                    borderColor: searchQuery && topic.toLowerCase().includes(searchQuery.toLowerCase())
                      ? '#fdba74' : '#f3f4f6',
                    background: searchQuery && topic.toLowerCase().includes(searchQuery.toLowerCase())
                      ? '#fff7ed' : '#f9fafb',
                    color: searchQuery && topic.toLowerCase().includes(searchQuery.toLowerCase())
                      ? '#c2410c' : '#6b7280',
                  }}
                >
                  {highlight(topic, searchQuery)}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MODULE LIST (single-open accordion) ──────────────────────────────────────
function ModuleList({ modules, catIdx, searchQuery, forceOpen }) {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx(p => p === i ? null : i);

  return (
    <div className="space-y-2">
      {modules.map((mod, i) => (
        <ModuleRow
          key={i}
          module={mod}
          catIdx={catIdx}
          modIdx={i}
          isOpen={forceOpen ? true : openIdx === i}
          onToggle={() => !forceOpen && toggle(i)}
          searchQuery={searchQuery}
        />
      ))}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function SyllabusSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const tabScrollRef = useRef(null);

  // Auto-scroll active pill into view on mobile
  useEffect(() => {
    const el = tabScrollRef.current;
    if (!el) return;
    const pill = el.children[activeTab];
    if (pill) pill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [activeTab]);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return categories.flatMap((cat, cIdx) =>
      cat.modules
        .filter(m => m.title.toLowerCase().includes(q) || m.topics.some(t => t.toLowerCase().includes(q)))
        .map(m => ({ ...m, cIdx }))
    );
  }, [searchQuery]);

  return (
    <section
      className="py-11 md:py-10 bg-white overflow-x-hidden"
      style={satoshi}
    >
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .thin-scroll::-webkit-scrollbar { width: 3px; }
        .thin-scroll::-webkit-scrollbar-thumb { background: #FF5A1F; border-radius: 8px; }
        .thin-scroll::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2.5 mb-3">
            <span className="h-px w-6 bg-[#FF5A1F]" />
            <span
              className="text-[#FF5A1F] uppercase text-[13px] font-black tracking-[0.3em]"
              style={satoshi}
            >
              {totalModules} Modules · 300+ Topics
            </span>
            <span className="h-px w-6 bg-[#FF5A1F]" />
          </div>

          <h2
            className="text-[#111111] leading-[1.05] tracking-tight"
            style={{ ...satoshi, fontWeight: 900, fontSize: 'clamp(30px, 5vw, 54px)' }}
          >
            Masters Program{' '}
            <span className="relative inline-block text-[#FF5A1F]">
              Curriculum
              <svg className="absolute -bottom-0.5 left-0 w-full" height="5" viewBox="0 0 200 5" fill="none">
                <path d="M0 3.5C60 1 140 1 200 3.5" stroke="#FF5A1F" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p
            className="text-[#111111]/50 max-w-lg mx-auto mt-4 leading-relaxed"
            style={{ ...satoshi, fontWeight: 400, fontSize: 'clamp(16px, 2vw, 18px)' }}
          >
            From SEO foundations to advanced AI-driven performance strategies — every skill you need.
          </p>
        </motion.div>

        {/* ── SEARCH ── */}
        <div className="max-w-md mx-auto mb-8 relative group">
          <Search
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FF5A1F] transition-colors pointer-events-none"
          />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search e.g. SEO, Google Ads, AI..."
            className="w-full pl-10 pr-9 py-3 rounded-xl border border-gray-200 bg-[#FAFAF9] text-[15px] outline-none focus:border-[#FF5A1F] focus:ring-2 focus:ring-[#FF5A1F]/10 transition-all text-gray-800 placeholder-gray-400"
            style={satoshi}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* ── MOBILE PILL TABS (hidden on lg+) ── */}
        {!searchQuery && (
          <div
            ref={tabScrollRef}
            className="flex gap-2 overflow-x-auto hide-scroll pb-3 mb-5 lg:hidden"
          >
            {categories.map((cat, idx) => {
              const active = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full border text-[14px] font-semibold transition-all duration-200"
                  style={{
                    ...satoshi,
                    background: active ? '#FF5A1F' : '#fff',
                    borderColor: active ? '#FF5A1F' : '#e5e7eb',
                    color: active ? '#fff' : '#374151',
                    boxShadow: active ? '0 4px 12px rgba(255,90,31,0.2)' : 'none',
                  }}
                >
                  <span style={{ color: active ? '#fff' : '#FF5A1F' }}>{cat.icon}</span>
                  {cat.shortLabel}
                </button>
              );
            })}
          </div>
        )}

        {/* ── BODY ── */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">

          {/* Desktop sidebar (lg+) */}
          {!searchQuery && (
            <div className="hidden lg:block lg:col-span-4 space-y-2">
              {categories.map((cat, idx) => {
                const active = activeTab === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className="w-full text-left px-4 py-4 rounded-2xl flex items-center justify-between border transition-all duration-200"
                    style={{
                      ...satoshi,
                      background: active ? '#FF5A1F' : '#fff',
                      borderColor: active ? '#FF5A1F' : '#f3f4f6',
                      color: active ? '#fff' : '#111111',
                      boxShadow: active ? '0 8px 24px rgba(255,90,31,0.18)' : 'none',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                        style={{
                          background: active ? 'rgba(255,255,255,0.2)' : 'rgba(255,90,31,0.08)',
                          color: active ? '#fff' : '#FF5A1F',
                        }}
                      >
                        {cat.icon}
                      </div>
                      <div className="text-left">
                        <p style={{ ...satoshi, fontWeight: 700, fontSize: 16 }}>{cat.label}</p>
                        <p style={{ ...satoshi, fontWeight: 400, fontSize: 13, color: active ? 'rgba(255,255,255,0.6)' : '#9ca3af' }}>
                          {cat.modules.length} modules
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      size={14}
                      style={{
                        transform: 'rotate(-90deg)',
                        color: active ? 'rgba(255,255,255,0.7)' : '#d1d5db',
                      }}
                    />
                  </button>
                );
              })}

              {/* Stats mini-card */}
              <div className="mt-3 p-4 rounded-2xl border border-orange-100 bg-[#fff7f4]">
                <p
                  style={{ ...satoshi, fontWeight: 800, fontSize: 12, letterSpacing: '0.2em' }}
                  className="text-[#FF5A1F] uppercase mb-3"
                >
                  Program at a Glance
                </p>
                {[
                  { label: 'Total Modules', value: `${totalModules}+` },
                  { label: 'Topics Covered', value: '300+' },
                  { label: 'Live Projects', value: '10+' },
                  { label: 'Duration', value: '7 Months' },
                ].map((s) => (
                  <div key={s.label} className="flex justify-between items-center py-2 border-b border-orange-100/60 last:border-0">
                    <span style={{ ...satoshi, fontWeight: 400, fontSize: 14 }} className="text-gray-500">{s.label}</span>
                    <span style={{ ...satoshi, fontWeight: 700, fontSize: 15 }} className="text-[#111111]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Content panel */}
          <div className={searchQuery ? 'lg:col-span-12' : 'lg:col-span-8'}>
            <div className="bg-[#FAFAF9] rounded-2xl md:rounded-[28px] p-4 sm:p-6 md:p-8 border border-gray-100">

              {searchQuery ? (
                /* Search results */
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 style={{ ...satoshi, fontWeight: 700, fontSize: 22 }} className="text-gray-900">
                        {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                      </h3>
                      <p style={{ ...satoshi, fontWeight: 400, fontSize: 14 }} className="text-gray-400 mt-0.5">
                        for &ldquo;{searchQuery}&rdquo;
                      </p>
                    </div>
                    <button
                      onClick={() => setSearchQuery('')}
                      style={{ ...satoshi, fontWeight: 600, fontSize: 14 }}
                      className="text-[#FF5A1F] hover:underline"
                    >
                      Clear
                    </button>
                  </div>

                  {filteredResults.length > 0 ? (
                    <div className="space-y-2">
                      {filteredResults.map((mod, i) => (
                        <ModuleRow
                          key={i}
                          module={mod}
                          catIdx={mod.cIdx}
                          modIdx={i}
                          isOpen
                          onToggle={() => { }}
                          searchQuery={searchQuery}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-300">
                      <BookOpen size={40} className="mb-3 opacity-30" />
                      <p style={{ ...satoshi, fontWeight: 500, fontSize: 16 }} className="text-gray-400">
                        No modules match your query.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Tab content */
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                  >
                    {/* Tab header */}
                    <div className="flex items-start justify-between mb-5 gap-3">
                      <div>
                        <h3
                          style={{ ...satoshi, fontWeight: 900, fontSize: 24 }}
                          className="text-[#111111] tracking-tight"
                        >
                          {categories[activeTab].label}
                        </h3>
                        <p
                          style={{ ...satoshi, fontWeight: 400, fontSize: 15 }}
                          className="text-gray-500 mt-1 leading-relaxed"
                        >
                          {categories[activeTab].desc}
                        </p>
                      </div>
                      <span
                        className="shrink-0 px-2.5 py-1 rounded-full text-[12px] font-bold border"
                        style={{
                          ...satoshi,
                          background: 'rgba(255,90,31,0.06)',
                          borderColor: 'rgba(255,90,31,0.2)',
                          color: '#FF5A1F',
                        }}
                      >
                        {categories[activeTab].modules.length} modules
                      </span>
                    </div>

                    {/* Accordion — single open */}
                    <div className="thin-scroll overflow-y-auto" style={{ maxHeight: 520 }}>
                      <ModuleList
                        modules={categories[activeTab].modules}
                        catIdx={activeTab}
                        searchQuery=""
                        forceOpen={false}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <div className="mt-10 flex flex-col items-center text-center px-4">
          <p
            style={{ ...satoshi, fontWeight: 400, fontSize: 15 }}
            className="text-gray-400 mb-4"
          >
            Want to see the full list of 120+ tools covered?
          </p>
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white transition-all duration-300 shadow-sm hover:shadow-md"
            style={{
              ...satoshi,
              fontWeight: 700,
              fontSize: 16,
              background: '#111111',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#FF5A1F'}
            onMouseLeave={e => e.currentTarget.style.background = '#111111'}
          >
            Download Full Brochure
          </button>
        </div>

      </div>
    </section>
  );
}