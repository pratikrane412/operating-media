import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Download } from 'lucide-react';

// ─── DATA (Total 16 Modules With Tool Logos) ──────────────────────────────────
const modulesData = [
  {
    id: "01",
    title: "Digital Marketing Foundation & SEO",
    topics: ["Scope of Digital Marketing", "Keyword Research & Mapping", "Technical SEO & Core Web Vitals", "On-page & Off-page Optimization", "SEO Audit & Webmaster Tools"],
    tools: [
      { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" },
      { name: "Ahrefs", logo: "https://cdn.worldvectorlogo.com/logos/ahrefs-1.svg" },
      { name: "Yoast SEO", logo: "https://cdn.worldvectorlogo.com/logos/yoast-2.svg" },
      { name: "Google Search Console", logo: "https://cdn.worldvectorlogo.com/logos/google-search-console.svg" },
      { name: "SEMrush", logo: "https://cdn.worldvectorlogo.com/logos/semrush-1.svg" }
    ]
  },
  {
    id: "02",
    title: "Performance Marketing & SEM",
    topics: ["Google Ads Campaign Setup", "Bidding Strategies & Quality Score", "Search, Display & Video Ads", "Dynamic Search Ads & Remarketing", "ROI Optimization & Reporting"],
    tools: [
      { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" },
      { name: "Google Analytics 4", logo: "https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg" },
      { name: "Looker Studio", logo: "https://cdn.worldvectorlogo.com/logos/looker-1.svg" },
      { name: "Bing Ads", logo: "https://cdn.worldvectorlogo.com/logos/bing-1.svg" }
    ]
  },
  {
    id: "03",
    title: "Social Media Advertising",
    topics: ["Meta Business Suite Mastery", "Pixel Setup & Event Tracking", "Layered Audience Targeting", "A/B Testing Ad Creatives", "LinkedIn & Twitter Ads for B2B"],
    tools: [
      { name: "Meta", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
      { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" },
      { name: "Canva", logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
      { name: "Twitter", logo: "https://cdn.worldvectorlogo.com/logos/twitter-3.svg" }
    ]
  },
  {
    id: "04",
    title: "AI & Automation in Marketing",
    topics: ["Prompt Engineering for Marketers", "AI Content Creation (Copy & Video)", "WhatsApp Chatbot Building", "Email Drip Campaigns", "CRM Integration & Workflows"],
    tools: [
      { name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg" },
      { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-1.svg" },
      { name: "HubSpot", logo: "https://cdn.worldvectorlogo.com/logos/hubspot-1.svg" },
      { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-2.svg" }
    ]
  },
  {
    id: "05",
    title: "E-Commerce & Drop Shipping",
    topics: ["Shopify Store Creation from Scratch", "Payment Gateways & Shipping", "Amazon & Flipkart Listing", "Inventory & Order Management", "Conversion Rate Optimization (CRO)"],
    tools: [
      { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
      { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
      { name: "Razorpay", logo: "https://cdn.worldvectorlogo.com/logos/razorpay-icon.svg" },
      { name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" }
    ]
  },
  {
    id: "06",
    title: "Landing Page & UI/UX Design",
    topics: ["High-Converting Layout Principles", "Elementor Pro Building", "Form Integrations & Social Proof", "Mobile Optimization", "A/B Testing Landing Pages"],
    tools: [
      { name: "Figma", logo: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" },
      { name: "Elementor", logo: "https://cdn.worldvectorlogo.com/logos/elementor.svg" },
      { name: "Unbounce", logo: "https://cdn.worldvectorlogo.com/logos/unbounce-1.svg" },
      { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon.svg" }
    ]
  },
  {
    id: "07",
    title: "Email Marketing & Lead Nurturing",
    topics: ["Email List Building & Segmentation", "Writing High-Converting Subject Lines", "Automated Drip Sequences", "A/B Testing Email Campaigns", "Spam Compliance & Deliverability"],
    tools: [
      { name: "Mailchimp", logo: "https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-1.svg" },
      { name: "Sendinblue", logo: "https://cdn.worldvectorlogo.com/logos/sendinblue.svg" },
      { name: "ActiveCampaign", logo: "https://cdn.worldvectorlogo.com/logos/activecampaign-1.svg" }
    ]
  },
  {
    id: "08",
    title: "Content Marketing & Strategy",
    topics: ["Content Pillar Strategy", "Blogging for Business Growth", "Copywriting Frameworks (AIDA, PAS)", "Content Distribution & Promotion", "Measuring Content ROI"],
    tools: [
      { name: "Grammarly", logo: "https://cdn.worldvectorlogo.com/logos/grammarly-1.svg" },
      { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
      { name: "Medium", logo: "https://cdn.worldvectorlogo.com/logos/medium-1.svg" },
      { name: "Evernote", logo: "https://cdn.worldvectorlogo.com/logos/evernote-icon.svg" }
    ]
  },
  {
    id: "09",
    title: "Video Marketing & YouTube SEO",
    topics: ["YouTube Channel Optimization", "Thumbnail Design Secrets", "Video Scripting Frameworks", "YouTube Shorts & Reels Strategy", "Monetization Tactics"],
    tools: [
      { name: "YouTube", logo: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg" },
      { name: "Premiere Pro", logo: "https://cdn.worldvectorlogo.com/logos/adobe-premiere-pro-cc-icon-1.svg" },
      { name: "Vimeo", logo: "https://cdn.worldvectorlogo.com/logos/vimeo-icon.svg" }
    ]
  },
  {
    id: "10",
    title: "Influencer Marketing & PR",
    topics: ["Identifying the Right Influencers", "Micro vs Macro Influencers", "Outreach & Negotiation", "Campaign Tracking & Contracts", "Digital PR Fundamentals"],
    tools: [
      { name: "Instagram", logo: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" },
      { name: "TikTok", logo: "https://cdn.worldvectorlogo.com/logos/tiktok-icon-2.svg" },
      { name: "Snapchat", logo: "https://cdn.worldvectorlogo.com/logos/snapchat-ghost.svg" }
    ]
  },
  {
    id: "11",
    title: "Affiliate Marketing Strategies",
    topics: ["Affiliate Marketing Basics", "Finding High-Paying Niches", "Joining Top Affiliate Networks", "Creating Review Blogs", "Scaling via Paid Ads"],
    tools: [
      { name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg" },
      { name: "ShareASale", logo: "https://cdn.worldvectorlogo.com/logos/shareasale-1.svg" },
      { name: "ClickBank", logo: "https://cdn.worldvectorlogo.com/logos/clickbank-1.svg" }
    ]
  },
  {
    id: "12",
    title: "Conversion Rate Optimization (CRO)",
    topics: ["Understanding User Behavior", "Heatmaps & Scroll Tracking", "Creating A/B & Multivariate Tests", "Optimizing Call-To-Actions", "Reducing Cart Abandonment"],
    tools: [
      { name: "Hotjar", logo: "https://cdn.worldvectorlogo.com/logos/hotjar-1.svg" },
      { name: "Google Optimize", logo: "https://cdn.worldvectorlogo.com/logos/google-optimize-1.svg" },
      { name: "VWO", logo: "https://cdn.worldvectorlogo.com/logos/vwo.svg" }
    ]
  },
  {
    id: "13",
    title: "Mobile App Marketing (ASO)",
    topics: ["App Store Optimization (ASO)", "In-App Advertising Models", "Driving App Installs via Meta Ads", "Push Notifications Strategy", "User Retention Techniques"],
    tools: [
      { name: "Google Play", logo: "https://cdn.worldvectorlogo.com/logos/google-play-store-1.svg" },
      { name: "App Store", logo: "https://cdn.worldvectorlogo.com/logos/apple-app-store-icon.svg" },
      { name: "AppsFlyer", logo: "https://cdn.worldvectorlogo.com/logos/appsflyer-1.svg" }
    ]
  },
  {
    id: "14",
    title: "Online Reputation Management",
    topics: ["Social Listening Setup", "Handling Negative Reviews", "Google My Business Optimization", "Brand Sentiment Analysis", "Crisis Management Strategy"],
    tools: [
      { name: "Google My Business", logo: "https://cdn.worldvectorlogo.com/logos/google-my-business-1.svg" },
      { name: "Yelp", logo: "https://cdn.worldvectorlogo.com/logos/yelp.svg" },
      { name: "Trustpilot", logo: "https://cdn.worldvectorlogo.com/logos/trustpilot-1.svg" }
    ]
  },
  {
    id: "15",
    title: "B2B Marketing & Lead Generation",
    topics: ["LinkedIn Sales Navigator", "Cold Email Outreach", "Creating Lead Magnets", "Account-Based Marketing (ABM)", "Sales Funnel Alignment"],
    tools: [
      { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" },
      { name: "Salesforce", logo: "https://cdn.worldvectorlogo.com/logos/salesforce-2.svg" },
      { name: "Apollo", logo: "https://cdn.worldvectorlogo.com/logos/apollo-11.svg" }
    ]
  },
  {
    id: "16",
    title: "Freelancing & Agency Management",
    topics: ["Building a Portfolio", "Winning Clients on Upwork & Fiverr", "Pricing Your Services", "Client Onboarding & Contracts", "Team Management & Tools"],
    tools: [
      { name: "Upwork", logo: "https://cdn.worldvectorlogo.com/logos/upwork.svg" },
      { name: "Fiverr", logo: "https://cdn.worldvectorlogo.com/logos/fiverr-1.svg" },
      { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-logo.svg" },
      { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" }
    ]
  }
];

// ─── SINGLE MODULE COMPONENT ──────────────────────────────────────────────────
function ModuleCard({ data, isOpen, onClick }) {
  return (
    <div 
      className={`relative w-full rounded-2xl border transition-all duration-300 overflow-hidden bg-white
        ${isOpen ? 'border-[#2563eb] shadow-[0_15px_30px_-10px_rgba(37,99,235,0.15)]' : 'border-gray-200 hover:border-[#2563eb]/40 hover:shadow-md'}`}
    >
      {/* ── HEADER (Clickable) ── */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:px-6 md:py-5 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4 md:gap-5 w-full pr-4">
          <span 
            className={`shrink-0 flex items-center justify-center w-11 h-11 rounded-xl text-[15px] font-black tracking-wide transition-colors duration-300
              ${isOpen ? 'bg-[#2563eb] text-white shadow-md' : 'bg-blue-50/70 text-[#2563eb]'}`}
          >
            {data.id}
          </span>
          <div className="flex flex-col">
            <h3 className={`text-[17px] md:text-[19px] font-black leading-[1.25] transition-colors duration-300 ${isOpen ? 'text-[#2563eb]' : 'text-[#0f172a]'}`}>
              {data.title}
            </h3>
            {/* Mobile subtitle indicator */}
            <p className="text-[13px] font-medium text-gray-500 mt-1 md:hidden">
              {data.topics.length} topics covered
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <span className="hidden md:flex items-center justify-center text-[13px] font-bold text-gray-500 bg-gray-50 border border-gray-100 px-3.5 py-1.5 rounded-full">
            {data.topics.length} topics
          </span>
          <div 
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0
              ${isOpen ? 'bg-[#ECAB00] text-[#0f172a]' : 'bg-gray-100 text-gray-400'}`}
          >
            <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }} />
          </div>
        </div>
      </button>

      {/* ── EXPANDABLE CONTENT ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 pt-3 border-t border-gray-100">
              
              {/* Topics Pointers */}
              <ul className="space-y-3.5 mb-8">
                {data.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3.5">
                    <CheckCircle2 size={18} className="text-[#ECAB00] shrink-0 mt-0.5" />
                    <span className="text-[15px] font-medium text-gray-600 leading-snug">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tools Logos Marquee (Infinite Slider) */}
              <div className="bg-[#fcfaf2] rounded-xl p-4 border border-orange-50">
                <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.2em] mb-4">
                  Tools Covered
                </p>
                
                {/* Marquee Container */}
                <div className="relative flex overflow-hidden mask-edges py-1">
                  <div className="flex whitespace-nowrap animate-slide-infinite gap-4">
                    {/* Render list twice for seamless loop */}
                    {[...data.tools, ...data.tools].map((tool, i) => (
                      <div 
                        key={i} 
                        title={tool.name}
                        className="w-14 h-14 md:w-16 md:h-16 shrink-0 flex items-center justify-center p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:border-[#2563eb] hover:shadow-md transition-all duration-300"
                      >
                        <img 
                          src={tool.logo} 
                          alt={tool.name} 
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN EXPORT COMPONENT ────────────────────────────────────────────────────
export default function SyllabusSection() {
  // Array set to empty so NO toggle is open by default
  const [openModules, setOpenModules] = useState([]); 

  const toggleModule = (index) => {
    if (openModules.includes(index)) {
      setOpenModules(openModules.filter(i => i !== index));
    } else {
      setOpenModules([...openModules, index]);
    }
  };

  return (
    <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white overflow-hidden">
      
      {/* ── Background Glow (Lines Removed) ── */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[120px] animate-pulse-slow pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        
        {/* ── HEADER ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">
              Master's Curriculum
            </span>
          </div>

          <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
            Industry-Approved <br className="hidden md:block" />
            <span className="relative inline-block text-[#ECAB00]">
              Syllabus & Modules
              <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent"/>
              </svg>
            </span>
          </h2>

          <p className="text-[16px] md:text-[18px] font-medium text-gray-600 leading-relaxed">
            From SEO foundations to advanced AI-driven performance strategies — featuring 16 modules and 120+ premium tools.
          </p>
        </div>

        {/* ── 2-COLUMN MODULE GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {modulesData.map((mod, index) => (
            <ModuleCard 
              key={index}
              data={mod}
              isOpen={openModules.includes(index)}
              onClick={() => toggleModule(index)}
            />
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <p className="font-medium text-[16px] text-gray-500 mb-6">
            Want to see the detailed curriculum and all 120+ tools?
          </p>
          
          <div className="bg-[#0f172a] text-white hover:bg-[#ECAB00] hover:text-[#0f172a] transition-all duration-300 rounded-xl px-8 py-4 font-bold text-[15px] flex items-center justify-center cursor-pointer shadow-lg active:scale-95 group">
             <span className="flex items-center gap-2">
               Download Full Syllabus <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
             </span>
          </div>
        </div>

      </div>

      {/* ── CUSTOM CSS FOR MARQUEE & PULSE ── */}
      <style>{`
        /* Infinite Horizontal Slider */
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide-infinite {
          animation: slide 20s linear infinite; 
        }
        /* Pauses animation when user hovers over the tools */
        .animate-slide-infinite:hover {
          animation-play-state: paused;
        }
        /* Fades the left and right edges for a smooth scroll effect */
        .mask-edges {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        /* Slow Pulse for Background Glow */
        .animate-pulse-slow { 
          animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; 
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}