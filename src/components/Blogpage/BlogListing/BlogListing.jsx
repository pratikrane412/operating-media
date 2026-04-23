import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowUpRight, Search, ChevronRight } from 'lucide-react';

const BlogListing = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Digital Marketing Course', 'Career Guide', 'AI Strategy', 'Business Model'];

  const posts = [
    { id: 1, category: 'Digital Marketing Course', title: 'Top 8 Professional Career-Launch Courses After Post-Graduation', desc: 'Earning a Post-Graduate degree proves academic discipline, but the 2026 job market requires specific skills...', date: 'February 26, 2026', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600' },
    { id: 2, category: 'Digital Marketing Course', title: 'The "Specialist" Advantage: Why a Master\'s Degree Outperforms a Certificate', desc: 'If you spend five minutes on the internet today, you\'ll see countless certifications. Here is why depth matters...', date: 'February 21, 2026', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600' },
    { id: 3, category: 'Digital Marketing Course', title: 'Transition into Digital Marketing at Any Age: The Professional\'s Guide', desc: 'A common myth persists in the professional world: that digital marketing is only for the very young...', date: 'February 15, 2026', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600' },
    { id: 4, category: 'Business Model', title: 'The Second-Income Architecture: Building Parallel Revenue Streams', desc: 'In the fast-paced corporate environment of Mumbai, the traditional "linear career" is evolving...', date: 'February 12, 2026', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600' },
    { id: 5, category: 'AI Strategy', title: 'Trust as a Metric: Marketing in the Age of "Deepfakes" and Noise', desc: 'We have reached a tipping point in the digital world. As AI content floods the internet, trust becomes rare...', date: 'February 9, 2026', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600' },
    { id: 6, category: 'AI Strategy', title: 'The Content Revolution: Building a Modern Marketing Career with AI', desc: 'In the professional landscape of today, the barrier to entry for content creation has been destroyed...', date: 'February 2, 2026', img: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?w=600' },
    { id: 7, category: 'Career Guide', title: 'Beyond Information: The Role of Guided Mentorship in Building Careers', desc: 'Information is free, but transformation requires a guide. Why mentorship is the secret to sustainability...', date: 'January 26, 2026', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600' },
    { id: 8, category: 'Digital Marketing Course', title: 'Why Learning Marketing with "Mock Budgets" is Like a Video Game', desc: 'In the high-stakes digital economy, the gap between knowing and doing is where most fail...', date: 'January 21, 2026', img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600' },
    { id: 9, category: 'Digital Marketing Course', title: 'The Career Insurance Policy: Why Digital Marketing is a Secure Asset', desc: 'In the professional landscape of 2026, the only asset that doesn\'t depreciate is your ability to sell...', date: 'January 15, 2026', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600' },
    { id: 10, category: 'Digital Marketing Course', title: 'Digital Marketing as the Universal Language of 2026 Business', desc: 'The year is 2026, and a quiet but profound shift has occurred in how global business communicates...', date: 'January 12, 2026', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600' },
    { id: 11, category: 'Digital Marketing Course', title: 'The Universal Skill: Why Marketing Demand is Exploding Globally', desc: 'For a long time, the common belief was that marketing was a siloed department. Not anymore...', date: 'January 9, 2026', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600' },
    { id: 12, category: 'AI Strategy', title: 'New Year, New Skillset: A 2026 Roadmap to AI-First Marketing', desc: 'The calendar has turned, and the digital marketing world belongs to those who adapt to AI first...', date: 'January 6, 2026', img: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600' },
  ];

  return (
    <section className="relative bg-white py-20 font-inter overflow-hidden">
      {/* Graph Paper Background */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION TITLE --- */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <h2 className="text-[32px] md:text-[40px] font-semibold text-black tracking-tight leading-none">
             Latest <span className="font-poppins font-black uppercase text-brand-black">Blogs</span>
           </h2>
        </div>

        {/* --- TRENDING TOPICS FILTERS --- */}
        <div className="mb-16">
          <p className="text-sm font-bold text-black/40 uppercase tracking-widest mb-6">Trending Topics</p>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full font-inter font-semibold text-xs transition-all border
                ${activeFilter === cat 
                  ? 'bg-black text-white border-black shadow-lg' 
                  : 'bg-white text-black/50 border-black/10 hover:border-black hover:text-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- BLOG GRID (3 COLUMNS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {posts
              .filter(p => activeFilter === 'All' || p.category === activeFilter)
              .map((post) => (
                <motion.div 
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group flex flex-col bg-white rounded-3xl border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Thumbnail */}
                  <div className="relative h-56 overflow-hidden bg-black">
                    <img src={post.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 opacity-90 group-hover:opacity-100" alt="Blog" />
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex flex-col flex-grow text-left">
                    <div className="mb-4">
                      <span className="bg-[#FF6B00]/10 text-[#FF6B00] px-3 py-1 rounded-lg font-inter font-bold text-[10px] uppercase tracking-widest">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* HEADING: Inter 600 weight, 24px (scaled Inter 32px style) */}
                    <h3 className="font-inter font-semibold text-[22px] text-black leading-tight mb-4 group-hover:text-[#FF6B00] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* DESCRIPTION: Inter 400 weight, 14px-16px */}
                    <p className="font-inter font-normal text-[15px] text-black/50 mb-8 line-clamp-2 leading-relaxed">
                      {post.desc}
                    </p>
                    
                    {/* Card Footer (Exact IIDE Match) */}
                    <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                      <div className="w-8 h-8 rounded-full bg-gray-100 grayscale flex-shrink-0">
                         <img src="https://i.pravatar.cc/150?u=ibraine" className="rounded-full" alt="avatar" />
                      </div>
                      <div className="flex items-center gap-2 text-black/40 font-inter font-medium text-[11px] uppercase tracking-tighter">
                        <Clock size={12} className="text-[#FF6B00]" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- LOAD MORE --- */}
        <div className="mt-24 flex flex-col items-center">
           <button className="group flex items-center gap-10 bg-black text-white px-16 py-7 rounded-2xl font-poppins font-black text-sm tracking-[0.3em] hover:bg-[#FF6B00] transition-all shadow-2xl uppercase">
              Load More Insights
              <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default BlogListing;