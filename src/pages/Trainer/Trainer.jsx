import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Star, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import AlumniPlacement from '../../components/AlumniPlacement/AlumniPlacement';

function useFonts() {
    useEffect(() => {
        if (!document.querySelector('link[data-font="satoshi"]')) {
            const l = document.createElement("link");
            l.rel = "stylesheet";
            l.setAttribute("data-font", "satoshi");
            l.href = "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap";
            document.head.appendChild(l);
        }
    }, []);
}

const trainers = [
    {
        name: "Shraddha Rane",
        role: "Corporate Trainer & Digital Marketing Expert",
        exp: "8+ Years",
        tag: "Gen-Z Favourite",
        bio: "A dynamic and results-driven professional with a passion for corporate training and digital marketing. Shraddha designs and delivers engaging training programs that empower teams to reach their full potential. Her sessions foster a positive and collaborative learning environment — innovative, informative, and inspiring.",
        skills: ["Corporate Training", "Content Strategy", "Social Media", "Brand Building"],
        img: "/images/shraddha.png",
        linkedin: "https://www.linkedin.com/in/shraddha-rane-95025b128/",
        accent: "#FF6B00",
        num: "01",
    },
    {
        name: "Harsh Pareek",
        role: "Digital Marketing Agency Owner",
        exp: "15+ Years",
        tag: "1000+ Campaigns",
        bio: "An out-and-out strategist when it comes to growing a small idea into a profitable business. Harsh has implemented his expertise in 1000+ successful campaigns for clients all over the globe. He runs Ibraine — a successful Digital Marketing Agency serving clients from over 18 countries.",
        skills: ["SEM & PPC", "Campaign Strategy", "Business Growth", "Global Marketing"],
        img: "/images/Harsh-Ibraine.webp",
        linkedin: "https://www.linkedin.com/in/pharsh88/",
        accent: "#ECAB00",
        num: "02",
    },
    {
        name: "Hemant Mane",
        role: "Digital Marketing Manager & Trainer",
        exp: "12+ Years",
        tag: "Technical Expert",
        bio: "Seasoned Digital Marketing Manager and Trainer with over a decade of experience crafting and executing successful digital marketing strategies. Passionate about helping individuals and businesses harness the power of digital to achieve their goals. Training students for the past 12 years.",
        skills: ["SEO & Analytics", "Technical Marketing", "Data Growth", "Training Design"],
        img: "/images/hemant.png",
        linkedin: "https://www.linkedin.com/in/hemantm26/",
        accent: "#10B981",
        num: "03",
    },
    {
        name: "Rahul Singh",
        role: "Analytics & Data Specialist",
        exp: "12+ Years",
        tag: "Data is His Game",
        bio: "The backbone of the company. Data is his game and statistics his domain. A thorough professional with a keen eye on the smallest of details. A software engineer by qualification, Rahul has worked with most of the top brands in India delivering high-performance analytics for multiple agencies.",
        skills: ["Web Analytics", "Data Strategy", "Performance Marketing", "Reporting"],
        img: "/images/rahuls.png",
        linkedin: "https://www.linkedin.com/in/therahulsingh/",
        accent: "#7C3AED",
        num: "04",
    },
    {
        name: "Zahid Shaikh",
        role: "SEO & Internet Marketing Expert",
        exp: "14+ Years",
        tag: "SEO Authority",
        bio: "A Strategic Internet Marketing Expert and SEO Specialist with over 14 years of online branding experience. Expert in natural and ethical Google Search Engine Optimization. His expertise is in building websites and ranking them to the top of Google and Bing search engines.",
        skills: ["SEO Strategy", "Link Building", "Google Rankings", "Online Branding"],
        img: "/images/zahid.png",
        linkedin: "https://www.linkedin.com/in/zahid-shaikh/",
        accent: "#F59E0B",
        num: "05",
    },
    {
        name: "Vikram Kamble",
        role: "Digital Marketing Coach & Mentor",
        exp: "8+ Years",
        tag: "Career Transformer",
        bio: "A seasoned Digital Marketing Coach and Mentor specializing in empowering students and professionals with hands-on digital marketing skills. With 8+ years of experience, Vikram has helped dozens of aspirants build confidence in SEO, social media, content strategy, and performance advertising.",
        skills: ["SEO", "Social Media", "Content Strategy", "Performance Ads"],
        img: "/images/vikram.png",
        linkedin: "https://www.linkedin.com/in/vikram-kamble/",
        accent: "#059669",
        num: "06",
    },
    {
        name: "Neelkamal Mukharjee",
        role: "E-Commerce & Marketplace Specialist",
        exp: "10+ Years",
        tag: "Amazon Expert",
        bio: "Neelkamal has built and scaled dozens of e-commerce brands from zero to revenue. His D2C expertise and marketplace strategy make him one of India's most sought-after educators in the e-commerce space — covering Amazon Ads, marketplace SEO, and direct-to-consumer growth.",
        skills: ["E-Commerce", "Amazon Ads", "D2C Growth", "Marketplace SEO"],
        img: "/images/neel.png",
        linkedin: "https://www.linkedin.com/",
        accent: "#EC4899",
        num: "07",
    },
    {
        name: "Rahul Shinde",
        role: "AI & Automation Marketing Lead",
        exp: "10+ Years",
        tag: "AI Pioneer",
        bio: "At the frontier of AI-powered marketing, helping brands integrate ChatGPT, automation, and machine learning into everyday campaigns. With 9+ years of experience, Rahul has transformed 50+ companies across India and Southeast Asia with cutting-edge growth hacking and AI-driven workflows.",
        skills: ["AI Marketing", "Automation", "ChatGPT Workflows", "Growth Hacking"],
        img: "/images/rahul.png",
        linkedin: "https://www.linkedin.com/",
        accent: "#0EA5E9",
        num: "08",
    },
];

const whyPoints = [
    "Complete professionals with actual experience in the field of Digital Marketing",
    "Very amicable in nature and give 100% personalized focus on every student",
    "Help in solving every doubt and query of a student",
    "Teach and train students by applying very simple methods and approaches",
    "Teach practically by assigning live projects to the students",
    "Build the foundation of students strong by making them understand conventional theories of the field",
];

// ── HERO ──────────────────────────────────────────────────────
function TrainersHero() {
    const [show, setShow] = useState(false);
    useEffect(() => { const t = setTimeout(() => setShow(true), 100); return () => clearTimeout(t); }, []);

    return (
        <section className="relative w-full overflow-hidden bg-[#FAFCFF] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white">
            <div className="absolute inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-14 py-16 md:py-24 lg:py-28">
                <div className="grid lg:grid-cols-[1fr_480px] gap-16 items-center">

                    {/* LEFT */}
                    <div className="flex flex-col items-start">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] md:text-xs text-[#2563eb] uppercase tracking-[0.2em]">Meet Our Mentors</span>
                        </div>

                        <h1 className="font-black text-[36px] md:text-[48px] lg:text-[58px] text-[#0f172a] leading-[1.05] tracking-tight mb-6">
                            <div className={`transition-all duration-700 delay-100 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                The Best
                            </div>
                            <div className={`transition-all duration-700 delay-200 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <span className="relative inline-block text-[#ECAB00]">
                                    Instructors
                                    <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                    </svg>
                                </span>
                            </div>
                            <div className={`transition-all duration-700 delay-300 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                <span className="text-[#2563eb]">Available</span> in the City.
                            </div>
                        </h1>

                        <p className={`text-[16px] md:text-[18px] text-gray-600 font-medium leading-relaxed max-w-[520px] mb-10 transition-all duration-700 delay-400 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            Not lecturers reading off slides — our <span className="font-bold text-[#0f172a]">8 trainers are agency owners, campaign runners, and brand builders</span> who teach what they live every single day.
                        </p>

                        <div className={`flex flex-col sm:flex-row gap-4 mb-10 transition-all duration-700 delay-500 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <Link to="/contact-us/">
                                <button className="group relative flex items-center gap-3 bg-[#ECAB00] text-white px-8 py-4 rounded-xl font-bold text-[15px] overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(236,171,0,0.5)] hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 flex items-center gap-2">
                                        Book a Demo
                                        <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1.5" />
                                    </span>
                                </button>
                            </Link>
                        </div>

                        <div className={`flex items-center gap-6 transition-all duration-700 delay-600 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="flex items-center gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-[#ECAB00] text-[#ECAB00]" />
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <Users size={16} className="text-[#2563eb]" />
                                <span className="font-bold text-[15px] text-[#0f172a]">11,000+ Students Trained</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — dark faculty preview card */}
                    <div className={`transition-all duration-1000 delay-300 ease-out ${show ? 'opacity-100 lg:translate-x-0 scale-100' : 'opacity-0 lg:translate-x-12 scale-95'}`}>
                        <div className="bg-[#0f172a] rounded-[2rem] p-8 border border-white/5 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)]">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-[2px] w-8 bg-[#ECAB00]" />
                                <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em]">Faculty Roster 2025</p>
                            </div>
                            <div className="flex flex-col divide-y divide-white/5">
                                {trainers.slice(0, 4).map((t, i) => (
                                    <div key={i} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                                        <div
                                            className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-[13px] shrink-0"
                                            style={{ background: `${t.accent}25`, color: t.accent, border: `1.5px solid ${t.accent}50` }}
                                        >
                                            {t.name.split(" ").map(w => w[0]).join("")}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-[14px] text-white leading-tight truncate">{t.name}</p>
                                            <p className="font-medium text-[11px] text-gray-500 mt-0.5 truncate">{t.role}</p>
                                        </div>
                                        <span
                                            className="text-[10px] font-black px-3 py-1 rounded-full shrink-0"
                                            style={{ background: `${t.accent}18`, color: t.accent, border: `1px solid ${t.accent}35` }}
                                        >
                                            {t.exp}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[13px] font-medium text-gray-400">+4 more expert trainers</span>
                                <span className="text-[12px] font-bold text-[#ECAB00]">See all below ↓</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats strip */}
            <div className="relative z-20 mx-6 lg:mx-14 max-w-[1400px] xl:mx-auto pb-16">
                <div className="bg-[#0f172a] rounded-2xl shadow-xl p-6 lg:p-8 flex flex-wrap lg:flex-nowrap justify-between gap-6">
                    {[
                        { icon: <Globe size={20} />, title: "8 Expert Trainers", sub: "Active Industry Professionals" },
                        { icon: <ShieldCheck size={20} />, title: "57+ Years Combined", sub: "Real-World Experience" },
                        { icon: <Users size={20} />, title: "1000+ Campaigns", sub: "Run Across 18 Countries" },
                        { icon: <Star size={20} />, title: "11,000+ Students", sub: "Successfully Placed" },
                    ].map((s, i) => (
                        <div key={i} className="flex items-center gap-4 flex-1 min-w-[200px]">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                {s.icon}
                            </div>
                            <div>
                                <p className="font-bold text-[15px] text-white">{s.title}</p>
                                <p className="font-medium text-[13px] text-blue-100">{s.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── TRAINER CARD ──────────────────────────────────────────────
function TrainerCard({ trainer, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden group"
        >
            <div className="flex flex-col md:flex-row">
                {/* Photo panel */}
                <div
                    className="relative md:w-[220px] lg:w-[260px] shrink-0 h-[220px] md:h-auto overflow-hidden"
                    style={{ background: '#f8f4ee' }}
                >
                    <div className="absolute bottom-[-30px] right-[-30px] w-[160px] h-[160px] rounded-full blur-[40px] pointer-events-none opacity-30" style={{ background: trainer.accent }} />
                    <div className="absolute top-[-20px] left-[-20px] w-[100px] h-[100px] rounded-full blur-[30px] pointer-events-none opacity-15" style={{ background: trainer.accent }} />

                    <img
                        src={trainer.img}
                        alt={trainer.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />

                    {/* Accent bar — left on desktop, bottom on mobile */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 hidden md:block" style={{ background: trainer.accent }} />
                    <div className="absolute bottom-0 left-0 right-0 h-1 md:hidden" style={{ background: trainer.accent }} />

                    {/* Number watermark */}
                    <span className="absolute top-3 right-4 font-black text-[48px] leading-none pointer-events-none select-none text-[#0f172a]/5">
                        {trainer.num}
                    </span>

                    {/* Exp badge */}
                    <span
                        className="absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-white shadow-md"
                        style={{ border: `1.5px solid ${trainer.accent}`, color: '#0f172a' }}
                    >
                        {trainer.exp}
                    </span>
                </div>

                {/* Info panel */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center gap-4">
                    {/* Name + LinkedIn */}
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="font-black text-[20px] md:text-[22px] text-[#0f172a] leading-tight mb-1">
                                {trainer.name}
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: trainer.accent }} />
                                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wide">{trainer.role}</p>
                            </div>
                        </div>
                        <a
                            href={trainer.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0077b5] hover:text-[#0077b5] hover:bg-blue-50 transition-all duration-200 shrink-0"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>

                    {/* Bio */}
                    <p className="text-[14px] md:text-[15px] text-gray-500 leading-[1.8] font-medium">
                        {trainer.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {trainer.skills.map((s, i) => (
                            <span
                                key={i}
                                className="text-[11px] font-bold px-3 py-1.5 rounded-full border border-gray-100 bg-gray-50 text-gray-600 hover:text-white transition-all duration-200 cursor-default"
                                style={{}}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = trainer.accent;
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = trainer.accent;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = '';
                                    e.currentTarget.style.color = '';
                                    e.currentTarget.style.borderColor = '';
                                }}
                            >
                                {s}
                            </span>
                        ))}
                    </div>

                    {/* Tag */}
                    <div>
                        <span
                            className="inline-flex items-center text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                            style={{ background: `${trainer.accent}15`, color: trainer.accent, border: `1px solid ${trainer.accent}30` }}
                        >
                            {trainer.tag}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// ── ROSTER GRID ───────────────────────────────────────────────
function RosterGrid() {
    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] overflow-hidden">
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2563eb]/5 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#ECAB00]/10 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#ECAB00] animate-ping absolute" />
                        <span className="w-2 h-2 rounded-full bg-[#ECAB00] relative z-10" />
                        <span className="font-bold text-[11px] md:text-xs text-[#ECAB00] uppercase tracking-[0.2em]">Our Faculty</span>
                    </div>
                    <h2 className="font-black text-[32px] md:text-[40px] lg:text-[46px] text-[#0f172a] leading-[1.1] tracking-tight mb-6">
                        08 Industry Experts.{' '}
                        <span className="relative inline-block text-[#ECAB00]">
                            Zero
                            <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                            </svg>
                        </span>{' '}
                        Theoretical Baggage.
                    </h2>
                    <p className="text-[16px] md:text-[18px] font-medium text-gray-600 leading-relaxed">
                        Every trainer is actively working in the industry — bringing this week's insights directly into the classroom.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    {trainers.map((trainer, i) => (
                        <TrainerCard key={i} trainer={trainer} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ── WHY OUR TRAINERS ──────────────────────────────────────────
function WhyOurTrainers() {
    return (
        <section className="relative w-full bg-[#FAFCFF] font-['Satoshi',sans-serif] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
            <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#ECAB00]/8 blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-14 py-10 md:py-[50px] lg:py-[60px]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT */}
                    <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-ping absolute" />
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] relative z-10" />
                            <span className="font-bold text-[11px] text-[#2563eb] uppercase tracking-[0.2em]">What Sets Them Apart</span>
                        </div>

                        <h2 className="font-black text-[28px] md:text-[36px] lg:text-[42px] text-[#0f172a] leading-[1.15] tracking-tight mb-6">
                            Not Just Teachers.{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Practitioners.
                                <svg className="absolute w-full h-[10px] -bottom-1 left-0 text-[#ECAB00]/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h2>

                        <div className="space-y-4 text-gray-600 text-[16px] font-medium leading-relaxed mb-8">
                            <p>
                                When the question of faculty arises, we don't believe in just claiming that we have only the best. Our faculty encompasses a group of <span className="font-bold text-[#0f172a]">normal people blessed with astounding potential and experience</span>.
                            </p>
                            <p>
                                Our faculty has the power to make students learn the appropriate applications of Digital Marketing — with <span className="font-bold text-[#ECAB00]">inimitable attributes</span> that set them apart from any other institute in the city.
                            </p>
                        </div>

                        <Link to="/contact-us/">
                            <button className="group flex items-center gap-2 bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold text-[15px] hover:bg-[#ECAB00] hover:text-[#0f172a] transition-all duration-300 shadow-md hover:shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)]">
                                Book a Free Demo
                                <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>

                    {/* RIGHT — dark why points card */}
                    <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <div className="bg-[#0f172a] rounded-[2rem] p-8 lg:p-10 border border-white/5 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.25)]">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-[2px] w-8 bg-[#ECAB00]" />
                                <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em]">Faculty Attributes</p>
                            </div>
                            <h3 className="font-black text-[20px] md:text-[22px] text-white leading-tight mb-8">
                                What Makes Our Trainers Different
                            </h3>
                            <ul className="flex flex-col gap-4">
                                {whyPoints.map((pt, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={18} className="text-[#ECAB00] shrink-0 mt-0.5" />
                                        <span className="text-[14px] font-medium text-gray-300 leading-snug">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// ── CTA ───────────────────────────────────────────────────────
function TrainersCTA() {
    return (
        <section className="relative w-full py-10 md:py-[50px] lg:py-[60px] px-6 lg:px-14 bg-[#fcfaf2] font-['Satoshi',sans-serif] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#0f172a] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(15,23,42,0.3)]"
                >
                    <div className="absolute top-[-40%] right-[-5%] w-[300px] h-[300px] bg-[#ECAB00]/15 rounded-full blur-[60px] pointer-events-none" />
                    <div className="absolute top-[-50%] left-[-10%] w-[300px] h-[300px] bg-[#2563eb]/20 rounded-full blur-[80px] pointer-events-none" />

                    <div className="text-center md:text-left relative z-10">
                        <p className="text-[11px] font-bold text-[#ECAB00] uppercase tracking-[0.3em] mb-2">Your Next Move</p>
                        <h3 className="text-white text-[24px] md:text-[32px] font-black leading-tight mb-2">
                            Sit with our trainers.{' '}
                            <span className="relative inline-block text-[#ECAB00]">
                                Feel the difference.
                                <svg className="absolute w-full h-[8px] -bottom-1 left-0 text-[#ECAB00]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                                </svg>
                            </span>
                        </h3>
                        <p className="text-gray-400 font-medium text-[15px] md:text-[16px]">
                            One free demo class. No pressure, no pitch — just complete clarity on your next step.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <Link to="/contact-us/">
                            <button className="flex items-center gap-2 bg-[#ECAB00] hover:bg-white text-[#0f172a] font-black text-[15px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(236,171,0,0.5)] active:scale-95 group">
                                Book Free Demo Class
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// ── ROOT ──────────────────────────────────────────────────────
export default function TrainersPage() {
    useFonts();
    return (
        <main className="font-['Satoshi',sans-serif]">
            <TrainersHero />
            <RosterGrid />
            <WhyOurTrainers />
            <TrainersCTA />
            <AlumniPlacement/>
        </main>
    );
}