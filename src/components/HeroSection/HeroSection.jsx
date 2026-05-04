import React, { useEffect, useState } from "react";

export default function HeroUltra() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Component mount hote hi animation trigger karne ke liye
    setTimeout(() => setMounted(true), 100);

    // Font load
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
      className="relative w-full min-h-[100svh] flex items-center justify-center bg-[#FAFCFF] overflow-hidden selection:bg-[#ECAB00] selection:text-white"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      {/* ── BACKGROUND GRID & MESH GLOW ── */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#ECAB00]/20 to-[#fb923c]/20 blur-[100px] animate-pulse-slow" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#2563eb]/10 to-transparent blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 lg:py-0">
        
        {/* ── LEFT COLUMN (TEXT & BUTTONS) ── */}
        <div className="flex flex-col items-start text-left w-full max-w-[600px]">
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping" />
            <span className="text-[#2563eb] font-bold text-sm tracking-wide uppercase">#1 Digital Marketing Academy</span>
          </div>

          {/* Heading with Smooth Line-by-Line Reveal */}
          <h1 className="text-[40px] sm:text-[56px] lg:text-[56px] font-black leading-[1.1] text-[#0f172a] mb-6">
            <div className="overflow-hidden pb-1">
              <div className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'}`}>
                Your <span className="text-[#ECAB00]">AI-Powered</span>
              </div>
            </div>
            <div className="overflow-hidden pb-1">
              <div className={`transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'}`}>
                Digital Marketing
              </div>
            </div>
            <div className="overflow-hidden pb-1">
              <div className={`transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[100%]'}`}>
                Career <span className="relative inline-block text-[#2563eb]">
                  Starts Here
                  {/* Expanding Underline */}
                  <span className={`absolute -bottom-2 left-0 h-[6px] bg-[#ECAB00] rounded-full transition-all duration-1000 delay-700 ease-out ${mounted ? 'w-full' : 'w-0'}`} />
                </span>
              </div>
            </div>
          </h1>

          <p className={`text-[16px] sm:text-[18px] text-gray-600 font-medium leading-relaxed max-w-[480px] mb-10 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Join 30,000+ students community who transformed their careers with advanced digital marketing courses.
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto transition-all duration-700 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            
            {/* Primary Button (Glow & Arrow Move) */}
            <a href="/contact">
            <button className="group relative w-full sm:w-auto bg-[#ECAB00] text-white px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_-10px_#ECAB00] hover:-translate-y-1 active:scale-95">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book a Demo 
                <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </button>
          </a>

            {/* Secondary Button (Sweep Fill) */}
            <button className="group relative w-full sm:w-auto border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 active:scale-95">
              <div className="absolute inset-0 bg-[#2563eb] w-0 group-hover:w-full transition-all duration-300 ease-out" />
              <span className="relative z-10 flex items-center justify-center transition-colors duration-300 group-hover:text-white">
                Download Brochure
              </span>
            </button>
          </div>

          {/* Rating Section */}
          <div className={`mt-8 flex items-center gap-3 transition-all duration-700 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="student" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-[#ECAB00] text-sm">★★★★★</div>
              <span className="text-sm font-bold text-gray-700">30,000+ happy learners</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN (IMAGE & FLOATING ELEMENTS) ── */}
        <div className={`relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 lg:translate-x-0' : 'opacity-0 lg:translate-x-10'}`}>
          
          {/* Main Hero Image */}
          {/* Replace this placeholder src with your actual image path */}
          <img
            src="/images/your-image.png"
            alt="Student holding books"
            className="relative z-10 w-[85%] max-w-[500px] h-auto object-contain drop-shadow-2xl hero-float"
            style={{ borderRadius: '30px' }} // Only if your image is square, otherwise remove this
          />

          {/* Floating Social Icons */}
          <div className="absolute z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center p-2.5 top-[10%] left-[5%] float-anim delay-1">
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" />
          </div>
          <div className="absolute z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center p-2.5 top-[5%] right-[15%] float-anim delay-2">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          </div>
          <div className="absolute z-20 w-12 h-12 sm:w-14 sm:h-14 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center p-2.5 bottom-[20%] right-[5%] float-anim delay-3">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </div>

          {/* Floating Stat Card 1 */}
          <div className="absolute z-20 bottom-[5%] left-[0%] bg-white/90 backdrop-blur-xl border border-white/50 p-4 sm:p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] float-anim delay-2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2563eb]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <strong className="block text-2xl font-black text-gray-900 leading-none">10+</strong>
                <span className="text-sm font-semibold text-gray-500">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Floating Stat Card 2 */}
          <div className="absolute z-20 top-[35%] right-[-5%] sm:right-[-10%] bg-white/90 backdrop-blur-xl border border-white/50 p-4 sm:p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] float-anim delay-1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-[#ECAB00]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <div>
                <strong className="block text-2xl font-black text-gray-900 leading-none">400+</strong>
                <span className="text-sm font-semibold text-gray-500">Hiring Partners</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Custom Keyframes & CSS Logic */}
      <style>{`
        /* Smooth Main Image Float */
        .hero-float {
          animation: floatHero 6s ease-in-out infinite;
        }

        /* Independent Element Floats */
        .float-anim {
          animation: floatItems 5s ease-in-out infinite;
        }

        /* Delays so elements don't move together (looks natural) */
        .delay-1 { animation-delay: 0s; }
        .delay-2 { animation-delay: -1.5s; }
        .delay-3 { animation-delay: -3s; }

        @keyframes floatHero {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes floatItems {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        /* Smooth slow pulse for the background glow */
        .animate-pulse-slow {
          animation: pulseGlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}