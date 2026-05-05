import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Download, ChevronRight, ArrowLeft } from 'lucide-react';

// ── DATA ──────────────────────────────────────────────────────
const modulesData = [
  {
    id: "01", title: "Fundamentals & Digital Strategy",
    desc: "Essential groundwork for every digital marketer.",
    subtopics: [
      { title: "Digital Marketing Fundamentals", desc: "Understand what digital marketing is, how it differs from traditional marketing, and how each channel connects to business outcomes.", tools: [{ name: "Google Trends", logo: "https://cdn.worldvectorlogo.com/logos/google-trends.svg" }, { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" }, { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" }] },
      { title: "Content & Media Marketing", desc: "Plan, create, and distribute content across platforms to attract and retain a clearly defined audience.", tools: [{ name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }, { name: "Grammarly", logo: "https://cdn.worldvectorlogo.com/logos/grammarly-1.svg" }, { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" }] },
      { title: "Digital Planning & Strategy + Presentation", desc: "Build end-to-end marketing plans and present data-backed strategies to clients and stakeholders.", tools: [{ name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" }, { name: "Google Slides", logo: "https://cdn.worldvectorlogo.com/logos/google-slides-logo-icon.svg" }] },
      { title: "Customer Journey & Behavior", desc: "Map the customer journey from awareness to purchase and understand user psychology at each stage.", tools: [{ name: "Hotjar", logo: "https://cdn.worldvectorlogo.com/logos/hotjar-1.svg" }, { name: "Google Analytics 4", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" }] },
      { title: "Brand Communication & Management", desc: "Develop brand voice, tone, and messaging frameworks that resonate consistently across every touchpoint.", tools: [{ name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }, { name: "Grammarly", logo: "https://cdn.worldvectorlogo.com/logos/grammarly-1.svg" }] },
    ],
  },
  {
    id: "02", title: "Website Assets & Organic Visibility",
    desc: "Build high-converting web properties and rank them naturally.",
    subtopics: [
      { title: "Website Creation on WordPress", desc: "Build professional websites using WordPress — from theme installation to plugin management and publishing.", tools: [{ name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" }, { name: "Yoast SEO", logo: "https://cdn.worldvectorlogo.com/logos/yoast-2.svg" }] },
      { title: "Landing Page Design using Elementor", desc: "Design high-converting landing pages with Elementor's drag-and-drop builder — no coding required.", tools: [{ name: "Elementor", logo: "https://cdn.worldvectorlogo.com/logos/elementor.svg" }, { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" }] },
      { title: "Search Engine Optimization (SEO)", desc: "Master on-page, off-page, and technical SEO to drive organic traffic that converts.", tools: [{ name: "Ahrefs", logo: "https://cdn.worldvectorlogo.com/logos/ahrefs-1.svg" }, { name: "SEMrush", logo: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg" }, { name: "Yoast SEO", logo: "https://cdn.worldvectorlogo.com/logos/yoast-2.svg" }] },
      { title: "YouTube SEO", desc: "Optimise YouTube videos, channels, and playlists to rank higher and attract consistent subscribers.", tools: [{ name: "YouTube", logo: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg" }, { name: "Google Search Console", logo: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg" }] },
      { title: "Google Search Console (Webmaster Tools)", desc: "Monitor site health, fix crawl issues, and improve click-through rates directly from Google.", tools: [{ name: "Google Search Console", logo: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg" }] },
      { title: "Google My Business", desc: "Set up and optimise a Google Business profile to dominate local search and map results.", tools: [{ name: "Google My Business", logo: "https://cdn.worldvectorlogo.com/logos/google-my-business-1.svg" }] },
      { title: "Blog Creation", desc: "Create a content-driven blog that builds authority, attracts organic traffic, and nurtures leads.", tools: [{ name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" }, { name: "Grammarly", logo: "https://cdn.worldvectorlogo.com/logos/grammarly-1.svg" }] },
    ],
  },
  {
    id: "03", title: "Performance Marketing & Paid Media",
    desc: "Drive immediate, measurable results through paid advertising.",
    subtopics: [
      { title: "Performance Marketing", desc: "Understand the full performance marketing ecosystem — attribution models, KPIs, and cost-per-result optimisation.", tools: [{ name: "Google Analytics 4", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" }, { name: "Looker Studio", logo: "https://cdn.worldvectorlogo.com/logos/looker-1.svg" }] },
      { title: "Google Ads (PPC)", desc: "Create and manage Search, Display, Shopping, and App campaigns with advanced bidding strategies.", tools: [{ name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" }, { name: "SEMrush", logo: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg" }] },
      { title: "YouTube Advertising", desc: "Run skippable, non-skippable, bumper, and masthead ads on YouTube with precise audience targeting.", tools: [{ name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" }, { name: "YouTube", logo: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg" }] },
      { title: "Social Media Paid Advertising (7 Platforms)", desc: "Run paid campaigns across Meta, Instagram, LinkedIn, Twitter, Pinterest, Snapchat, and YouTube.", tools: [{ name: "Meta", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" }, { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" }, { name: "Twitter", logo: "https://cdn.worldvectorlogo.com/logos/twitter-3.svg" }] },
      { title: "Media Buying & Planning", desc: "Learn programmatic buying, CPM vs CPC vs CPV decisions, and how agencies plan media at scale.", tools: [{ name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" }, { name: "Looker Studio", logo: "https://cdn.worldvectorlogo.com/logos/looker-1.svg" }] },
      { title: "Lead Generation", desc: "Build and optimise lead gen funnels — landing pages, lead magnets, forms, and follow-up sequences.", tools: [{ name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" }, { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-1.svg" }] },
      { title: "Mobile Marketing", desc: "Reach audiences on mobile via SMS, push notifications, in-app ads, and mobile-first landing pages.", tools: [{ name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" }, { name: "AppsFlyer", logo: "https://cdn.worldvectorlogo.com/logos/appsflyer-1.svg" }] },
    ],
  },
  {
    id: "04", title: "Social Media, Creative & Viral Marketing",
    desc: "Engagement, branding, and content virality across all platforms.",
    subtopics: [
      { title: "Social Media Organic (FB, Insta, YT, Quora, Pinterest, Snapchat, LinkedIn, Twitter)", desc: "Build and grow brand presence organically across 8 major platforms using platform-specific strategies.", tools: [{ name: "Meta", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" }, { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" }, { name: "Twitter", logo: "https://cdn.worldvectorlogo.com/logos/twitter-3.svg" }] },
      { title: "Creative Designing using Canva Pro", desc: "Design scroll-stopping social graphics, stories, carousels, and reels thumbnails using Canva Pro.", tools: [{ name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }] },
      { title: "Video Editing Tools", desc: "Edit short-form and long-form videos for YouTube, Reels, and TikTok using industry-standard tools.", tools: [{ name: "Premiere Pro", logo: "https://cdn.worldvectorlogo.com/logos/adobe-premiere-pro-cc-icon-1.svg" }, { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }] },
      { title: "Viral Marketing", desc: "Study viral content patterns and engineer campaigns with strong hooks, shareability, and emotional triggers.", tools: [{ name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }, { name: "YouTube", logo: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg" }] },
      { title: "Influencer Marketing", desc: "Identify, vet, and collaborate with micro and macro influencers to amplify brand reach and trust.", tools: [{ name: "Instagram", logo: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" }, { name: "TikTok", logo: "https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg" }] },
      { title: "Online Reputation Management", desc: "Monitor brand mentions, handle negative reviews, and build a positive digital reputation systematically.", tools: [{ name: "Google My Business", logo: "https://cdn.worldvectorlogo.com/logos/google-my-business-1.svg" }, { name: "Trustpilot", logo: "https://cdn.worldvectorlogo.com/logos/trustpilot-1.svg" }] },
    ],
  },
  {
    id: "05", title: "Specialized AI & Advanced Tech",
    desc: "Future-proof your skills with AI, automation, and advanced integrations.",
    subtopics: [
      { title: "Artificial Intelligence (AI) in Digital Marketing", desc: "Discover how AI is reshaping digital marketing — from content generation to predictive analytics.", tools: [{ name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg" }] },
      { title: "Generative AI – Prompt Engineering", desc: "Master prompt engineering to generate high-quality ad copy, blogs, emails, and social content at scale.", tools: [{ name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg" }, { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" }] },
      { title: "Drip Marketing & Email Automation", desc: "Build automated email sequences that nurture leads and drive conversions without manual effort.", tools: [{ name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-1.svg" }, { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" }, { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg" }] },
      { title: "Funnels in Digital Marketing", desc: "Design and optimise multi-stage marketing funnels that guide prospects from awareness to purchase.", tools: [{ name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" }, { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg" }] },
      { title: "Webinar Creation & Marketing", desc: "Plan, host, and promote webinars that generate qualified leads and position you as an authority.", tools: [{ name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-1.svg" }, { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-1.svg" }] },
      { title: "Google Tag Manager", desc: "Implement tracking codes, conversion pixels, and analytics scripts without touching website code.", tools: [{ name: "Google Tag Manager", logo: "https://cdn.worldvectorlogo.com/logos/google-tag-manager.svg" }, { name: "Google Analytics 4", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" }] },
      { title: "International Digital Marketing", desc: "Adapt campaigns for global audiences — localisation, multilingual SEO, and geo-targeting strategies.", tools: [{ name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" }, { name: "SEMrush", logo: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg" }] },
    ],
  },
  {
    id: "06", title: "E-commerce & Monetization",
    desc: "Sell products online and earn revenue through multiple digital channels.",
    subtopics: [
      { title: "WooCommerce E-commerce Shop Creation", desc: "Build a fully functional WooCommerce store on WordPress with products, payments, and shipping configured.", tools: [{ name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" }, { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" }] },
      { title: "Shopify Shop Creation", desc: "Launch a Shopify store from scratch — theme selection, product import, payment gateways, and apps.", tools: [{ name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" }, { name: "Razorpay", logo: "https://cdn.worldvectorlogo.com/logos/razorpay-icon.svg" }] },
      { title: "Shop Creation on Marketplaces (Amazon, Flipkart, Meesho)", desc: "List and sell products on India's top marketplaces — account setup, listing optimisation, and seller policies.", tools: [{ name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" }] },
      { title: "E-commerce Marketing Paid Ads (Amazon, Flipkart, Meesho)", desc: "Run sponsored ads on marketplace platforms to boost product visibility and drive consistent sales.", tools: [{ name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" }, { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" }] },
      { title: "Dropshipping", desc: "Start a dropshipping business — find suppliers, set up the store, and run ads without holding inventory.", tools: [{ name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" }] },
      { title: "Affiliate Marketing", desc: "Earn commissions by promoting other brands — join affiliate networks, create review content, and scale.", tools: [{ name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" }] },
      { title: "Google AdSense and Monetization", desc: "Monetise websites and YouTube channels using AdSense — understand CPM, CPC, and ad placement strategy.", tools: [{ name: "YouTube", logo: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg" }, { name: "Google Analytics 4", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" }] },
    ],
  },
  {
    id: "07", title: "Analytics, Career & Business",
    desc: "Data tracking and the transition from student to professional.",
    subtopics: [
      { title: "Google Analytics 4", desc: "Set up GA4, understand event-based tracking, build reports, and extract actionable insights from real data.", tools: [{ name: "Google Analytics 4", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" }, { name: "Looker Studio", logo: "https://cdn.worldvectorlogo.com/logos/looker-1.svg" }] },
      { title: "Growth Marketing Strategies", desc: "Apply growth hacking frameworks — AARRR funnel, retention loops, and rapid experimentation cycles.", tools: [{ name: "Google Analytics 4", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" }, { name: "Hotjar", logo: "https://cdn.worldvectorlogo.com/logos/hotjar-1.svg" }] },
      { title: "Email Marketing", desc: "Build lists, design campaigns, write subject lines that get opened, and track deliverability metrics.", tools: [{ name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-1.svg" }, { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" }] },
      { title: "WhatsApp Business and WhatsApp Marketing API", desc: "Use WhatsApp Business and the API to run broadcast campaigns, build chatbots, and automate customer support.", tools: [{ name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg" }, { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" }] },
      { title: "Drop Servicing", desc: "Build a service business by outsourcing delivery — find clients, manage freelancers, and keep the margin.", tools: [{ name: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork.svg" }, { name: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" }] },
      { title: "Resume Building + Mock Interviews + Digital Marketing Freelancing", desc: "Build a standout resume, ace interviews with mock sessions, and land your first freelancing client.", tools: [{ name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" }, { name: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork.svg" }, { name: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" }] },
    ],
  },
];

// ── MAIN COMPONENT ────────────────────────────────────────────
export default function SyllabusSection() {
  const [activeModule, setActiveModule] = useState(0);
  const [activeSubtopic, setActiveSubtopic] = useState(0);
  const [mobileStep, setMobileStep] = useState(0);

  const mod = modulesData[activeModule];
  const sub = mod.subtopics[activeSubtopic];

  return (
    <section
      className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-4 sm:px-6 lg:px-14 bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden"
      aria-label="Syllabus"
    >
      {/* ── Background — matches course pages ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[100px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto">

        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
              <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">Course Syllabus</span>
            </div>
            <h2 className="font-black text-[30px] sm:text-[36px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-5">
              Industry-Approved{' '}
              <span className="relative inline-block text-[#ECAB00]">
                Curriculum & 7 Modules
                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </h2>
            <p className="text-[15px] md:text-[17px] font-medium text-gray-600 leading-relaxed">
              From digital foundations to AI-driven strategies — 7 verticals covering every aspect of modern marketing.
            </p>
          </motion.div>
        </div>

        {/* ── DESKTOP: 3-panel ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="hidden md:grid md:grid-cols-[220px_1fr_1.6fr] lg:grid-cols-[248px_1fr_1.6fr] rounded-[1.75rem] overflow-hidden border border-gray-200 shadow-[0_24px_64px_-16px_rgba(15,23,42,0.12)] bg-white"
        >
          {/* LEFT — dark sidebar */}
          <div className="border-r border-white/10 overflow-y-auto max-h-[560px] custom-scroll bg-[#0f172a]">
            <div className="px-4 pt-5 pb-2">
              <p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/25 mb-4 px-2">7 Modules</p>
            </div>
            <div className="px-3 pb-5 flex flex-col gap-0.5">
              {modulesData.map((m, i) => {
                const isActive = activeModule === i;
                return (
                  <button
                    key={i}
                    onClick={() => { setActiveModule(i); setActiveSubtopic(0); }}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 group relative"
                    style={{ background: isActive ? 'rgba(236,171,0,0.12)' : 'transparent' }}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(236,171,0,0.3)' }} />
                    )}
                    <span
                      className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-black text-[11px] transition-all duration-200"
                      style={{
                        background: isActive ? '#ECAB00' : 'rgba(255,255,255,0.07)',
                        color: isActive ? '#0f172a' : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {m.id}
                    </span>
                    <span
                      className="font-bold text-[12.5px] leading-snug flex-1 transition-colors duration-200"
                      style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.4)' }}
                    >
                      {m.title}
                    </span>
                    {isActive && <ChevronRight size={12} className="text-[#ECAB00] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MIDDLE — subtopics */}
          <div className="border-r border-gray-100 overflow-y-auto max-h-[560px] custom-scroll bg-white">
            {/* Sticky header */}
            <div className="sticky top-0 z-10 px-5 py-4 border-b border-gray-100 bg-[#FAFCFF]">
              <span className="inline-block text-[9px] font-black uppercase tracking-[0.2em] text-[#ECAB00] bg-[#ECAB00]/10 border border-[#ECAB00]/20 px-2.5 py-1 rounded-full mb-2">
                {mod.id} · {mod.subtopics.length} Topics
              </span>
              <p className="font-black text-[13px] text-[#0f172a] leading-snug">{mod.title}</p>
            </div>
            <div className="p-3 flex flex-col gap-0.5">
              {mod.subtopics.map((s, i) => {
                const isActive = activeSubtopic === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveSubtopic(i)}
                    className="w-full flex items-start gap-3 px-3.5 py-3 rounded-xl text-left transition-all duration-200"
                    style={{
                      background: isActive ? '#ECAB00/10' : 'transparent',
                      backgroundColor: isActive ? 'rgba(236,171,0,0.08)' : 'transparent',
                      border: isActive ? '1px solid rgba(236,171,0,0.2)' : '1px solid transparent',
                    }}
                  >
                    {/* Radio dot */}
                    <span
                      className="shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all duration-200"
                      style={{
                        borderColor: isActive ? '#ECAB00' : '#e5e7eb',
                        background: isActive ? '#ECAB00' : 'transparent',
                      }}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </span>
                    <span
                      className="font-semibold text-[13px] leading-snug transition-colors duration-200"
                      style={{ color: isActive ? '#0f172a' : '#6b7280' }}
                    >
                      {s.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeModule}-${activeSubtopic}`}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-y-auto max-h-[560px] custom-scroll flex flex-col bg-white"
            >
              {/* Yellow top bar */}
              <div className="h-[3px] w-full shrink-0 bg-gradient-to-r from-[#ECAB00] to-[#ECAB00]/20" />

              <div className="p-6 lg:p-8 flex-1">
                {/* Breadcrumb */}
                <div className="flex items-center gap-1.5 mb-5">
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{mod.id}</span>
                  <ChevronRight size={10} className="text-gray-200" />
                  <span className="text-[10px] font-bold text-[#ECAB00] uppercase tracking-widest">
                    Topic {activeSubtopic + 1} of {mod.subtopics.length}
                  </span>
                </div>

                {/* Heading */}
                <h3 className="font-black text-[20px] lg:text-[22px] text-[#0f172a] leading-[1.2] tracking-tight mb-1">
                  {sub.title}
                </h3>
                <div className="h-[3px] w-10 rounded-full bg-[#ECAB00] mb-4" />

                {/* Description */}
                <p className="text-[14px] lg:text-[15px] font-medium text-gray-500 leading-relaxed mb-6 pb-6 border-b border-gray-100">
                  {sub.desc}
                </p>

                {/* Also in this module */}
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-3">
                  Also in this Module
                </p>
                <div className="flex flex-col gap-2">
                  {mod.subtopics
                    .filter((_, idx) => idx !== activeSubtopic)
                    .slice(0, 4)
                    .map((related, ri) => (
                      <div key={ri} className="flex items-start gap-3 px-3.5 py-2.5 rounded-xl bg-[#ECAB00]/6 border border-[#ECAB00]/12">
                        <CheckCircle2 size={14} className="shrink-0 mt-0.5 text-[#ECAB00]" />
                        <span className="text-[12.5px] font-medium text-gray-600 leading-snug">{related.title}</span>
                      </div>
                    ))}
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ── MOBILE: 3-step ── */}
        <div className="md:hidden">

          {/* Step 0 — Module list */}
          {mobileStep === 0 && (
            <div className="flex flex-col gap-2.5">
              {modulesData.map((m, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => { setActiveModule(i); setActiveSubtopic(0); setMobileStep(1); }}
                  className="w-full flex items-center gap-3.5 px-4 py-4 rounded-2xl bg-white border border-gray-200 text-left shadow-sm active:scale-[0.98] transition-all duration-200"
                >
                  <span className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-black text-[13px] bg-[#0f172a] text-[#ECAB00]">
                    {m.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-[14px] text-[#0f172a] leading-tight">{m.title}</p>
                    <p className="text-[11px] font-medium text-[#ECAB00] mt-0.5">{m.subtopics.length} topics</p>
                  </div>
                  <ChevronRight size={16} className="text-gray-300 shrink-0" />
                </motion.button>
              ))}
            </div>
          )}

          {/* Step 1 — Subtopics */}
          {mobileStep === 1 && (
            <AnimatePresence mode="wait">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                <button onClick={() => setMobileStep(0)} className="flex items-center gap-2 text-[13px] font-bold text-gray-400 mb-5 hover:text-gray-600 transition-colors">
                  <ArrowLeft size={15} /> Back to Modules
                </button>

                {/* Module header */}
                <div className="rounded-2xl overflow-hidden mb-4 border border-[#ECAB00]/25 shadow-sm">
                  <div className="h-1 bg-gradient-to-r from-[#ECAB00] to-[#ECAB00]/30" />
                  <div className="px-5 py-4 bg-[#ECAB00]/6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#ECAB00] block mb-1">{mod.id} — {mod.subtopics.length} topics</span>
                    <p className="font-black text-[16px] text-[#0f172a] leading-tight">{mod.title}</p>
                    <p className="text-[13px] font-medium text-gray-500 mt-1">{mod.desc}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {mod.subtopics.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveSubtopic(i); setMobileStep(2); }}
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white border border-gray-200 text-left shadow-sm active:scale-[0.98] transition-all"
                    >
                      <span className="shrink-0 w-2 h-2 rounded-full bg-[#ECAB00]" />
                      <p className="flex-1 font-semibold text-[13px] text-gray-700 leading-snug">{s.title}</p>
                      <ChevronRight size={14} className="text-gray-300 shrink-0" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}

          {/* Step 2 — Content */}
          {mobileStep === 2 && (
            <AnimatePresence mode="wait">
              <motion.div key={`m${activeModule}s${activeSubtopic}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                <button onClick={() => setMobileStep(1)} className="flex items-center gap-2 text-[13px] font-bold text-gray-400 mb-5 hover:text-gray-600 transition-colors">
                  <ArrowLeft size={15} /> Back to {mod.title}
                </button>

                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="h-[3px] bg-gradient-to-r from-[#ECAB00] to-[#ECAB00]/20" />
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 mb-3">
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{mod.id}</span>
                      <ChevronRight size={10} className="text-gray-200" />
                      <span className="text-[10px] font-bold text-[#ECAB00] uppercase tracking-widest">Topic {activeSubtopic + 1}</span>
                    </div>
                    <h3 className="font-black text-[17px] text-[#0f172a] leading-snug mb-1">{sub.title}</h3>
                    <div className="h-[3px] w-8 rounded-full bg-[#ECAB00] mb-4" />
                    <p className="text-[14px] font-medium text-gray-500 leading-relaxed mb-5 pb-5 border-b border-gray-100">{sub.desc}</p>

                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-3">Also in this Module</p>
                    <div className="flex flex-col gap-2 mb-1">
                      {mod.subtopics.filter((_, idx) => idx !== activeSubtopic).slice(0, 4).map((related, ri) => (
                        <div key={ri} className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#ECAB00]/6 border border-[#ECAB00]/12">
                          <CheckCircle2 size={13} className="shrink-0 mt-0.5 text-[#ECAB00]" />
                          <span className="text-[12px] font-medium text-gray-600 leading-snug">{related.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* ── BOTTOM CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center text-center"
        >
          <p className="font-medium text-[15px] text-gray-500 mb-5">
            Want the complete curriculum with all tools?
          </p>
          <button className="group flex items-center gap-2 bg-[#0f172a] hover:bg-[#ECAB00] text-white hover:text-[#0f172a] transition-all duration-300 rounded-xl px-8 py-4 font-bold text-[15px] shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(236,171,0,0.5)] active:scale-95">
            Download Full Syllabus
            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>

      <style>{`
                .animate-pulse-slow {
                    animation: pulseGlow 8s cubic-bezier(0.4,0,0.6,1) infinite;
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50%       { opacity: 0.8; transform: scale(1.1); }
                }
                .custom-scroll::-webkit-scrollbar { width: 3px; }
                .custom-scroll::-webkit-scrollbar-track { background: transparent; }
                .custom-scroll::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 99px; }
                .custom-scroll::-webkit-scrollbar-thumb:hover { background: #ECAB00; }
            `}</style>
    </section>
  );
}