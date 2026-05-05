import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ReviewsHero = () => {
  // Data for the carousel
  const reviews = [
    {
      id: 1,
      quote: "I got a chance to improve on teamwork",
      image: "https://www.operatingmedia.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      quote: "Trainers at iBraine are very friendly and always ready to help.",
      image: "https://www.operatingmedia.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      quote: "The training is so well-structured and practical.",
      image: "https://www.operatingmedia.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      quote: "Best decision for my digital marketing career.",
      image: "https://www.operatingmedia.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Duplicate the array to create a seamless infinite loop
  const carouselItems = [...reviews, ...reviews, ...reviews];

  return (
    <section className="bg-[#fcfcfd] py-24 overflow-hidden font-sans border-t border-slate-100">
      
      {/* --- CUSTOM CSS FOR FONTS AND SHADOWS --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&family=Inter:wght@400;500;700&display=swap');
        
        .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }

        /* The exact white fade overlay effect seen on the edges of the image */
        .fade-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 items-center px-6 md:px-12">
        
        {/* --- LEFT COLUMN: CONTENT & STATS (Span 4) --- */}
        <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left pr-0 lg:pr-8">
          
          <h2 className="font-jakarta text-4xl md:text-[42px] font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            iBraine Reviews: <br />
            Real <span className="text-blue-800">Success <br/> Stories</span>
          </h2>

          <p className="font-inter text-slate-500 text-[15px] leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
            Giving industry-relevant education in fun-filled classrooms is the vibe we aim for. 
            Here's what our alumni have to say about their time at iBraine!
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-center lg:justify-start gap-12 mb-12">
            <div className="flex flex-col">
              <span className="font-jakarta text-3xl font-black text-slate-900 leading-none mb-2">1760</span>
              <span className="font-inter text-[11px] font-bold text-slate-400 uppercase tracking-widest">Total Reviews</span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Star size={24} className="fill-yellow-400 text-yellow-400" />
                <span className="font-jakarta text-3xl font-black text-slate-900 leading-none">4.5</span>
              </div>
              <span className="font-inter text-[11px] font-bold text-slate-400 uppercase tracking-widest">Average Rating</span>
            </div>
          </div>

          <button className="w-max mx-auto lg:mx-0 border-2 border-blue-900 text-blue-900 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors">
            View Their Stories
          </button>
        </div>

        {/* --- RIGHT COLUMN: THE INFINITE CAROUSEL (Span 8) --- */}
        <div className="lg:col-span-8 relative w-full h-[500px] flex items-center fade-edges">
          
          {/* Animated Marquee Container */}
          <motion.div 
            className="flex gap-6 absolute left-0 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 30, // Adjust speed here (higher = slower)
              repeat: Infinity 
            }}
          >
            {carouselItems.map((review, index) => (
              <div 
                key={index}
                className="relative w-[300px] md:w-[320px] h-[450px] rounded-[2rem] overflow-hidden shrink-0 group shadow-lg"
              >
                {/* Background Image */}
                <img 
                  src={review.image} 
                  alt="Alumni" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay (Dark at bottom, lighter at top/left to match reference) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-white/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1e293b]/90"></div>

                {/* Text Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <p className="font-inter text-white font-bold text-[15px] leading-snug shadow-sm">
                    {review.quote}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ReviewsHero;