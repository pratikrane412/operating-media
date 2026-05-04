import React from 'react';
import DownloadBrochure from "../../Navbar/DownloadBrochure";

export default function CourseSelection() {
    return (
        <section className="relative w-full bg-[#fcfaf2] font-['Satoshi',sans-serif] selection:bg-[#ECAB00] selection:text-white">

            <div className="max-w-[1400px] mx-auto px-6 lg:px-14 py-10 md:py-[50px] lg:py-[60px]">

                {/* ── FULL WIDTH HEADER ── */}
                <div className="w-full mb-10 lg:mb-12">
                    <h2 className="font-black text-[28px] md:text-[36px] lg:text-[42px] text-[#0f172a] leading-[1.2] tracking-tight mb-4">
                        Core Skills. <span className="text-[#ECAB00]">Maximum Impact.</span> Zero Fluff.
                    </h2>
                    <p className="text-[16px] md:text-[18px] text-gray-600 font-medium">
                        Not everyone needs a 12-month master's degree. Pick the track that suits your goal.
                    </p>
                </div>

                {/* ── CARDS GRID ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                    {/* CARD 1: For Business Owners (Dark) */}
                    <div className="relative bg-[#0f172a] text-white rounded-[1.5rem] p-6 lg:p-8 border border-[#0f172a] shadow-[0_15px_40px_-10px_rgba(15,23,42,0.25)] hover:shadow-[0_20px_50px_-10px_rgba(15,23,42,0.35)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="mb-4">
                            <span className="inline-block bg-[#ECAB00] text-[#0f172a] font-bold text-[13px] uppercase tracking-wide px-4 py-1.5 rounded-full">
                                For Business Owners
                            </span>
                        </div>
                        <h3 className="font-black text-[22px] md:text-[24px] lg:text-[26px] leading-[1.25] mb-2">
                            Stop Outsourcing. Start Running Your Own Ads.
                        </h3>
                        <p className="text-gray-300 font-medium text-[15px] mb-5 pb-5 border-b border-white/10">
                            Manage real ad budgets · Rank your own website · Run social campaigns
                        </p>
                        <ul className="space-y-3.5 flex-1">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2 shrink-0" />
                                <p className="text-[15px] leading-relaxed text-gray-300">
                                    <span className="font-bold text-white">Built for:</span> Business owners who want to stop outsourcing and start running their own ads
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2 shrink-0" />
                                <p className="text-[15px] leading-relaxed text-gray-300">
                                    <span className="font-bold text-white">What you learn:</span> Google Ads, Social Media Ads, SEO, Email Marketing, AI Automation
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2 shrink-0" />
                                <p className="text-[15px] leading-relaxed text-gray-300">
                                    <span className="font-bold text-white">Outcome:</span> Self-reliant marketing that generates real revenue
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* CARD 2: For Working Professionals (White) */}
                    <div className="relative bg-white text-[#0f172a] rounded-[1.5rem] p-6 lg:p-8 border border-gray-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#0f172a]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <div className="mb-4">
                            <span className="inline-block border border-[#0f172a] text-[#0f172a] bg-gray-50 font-bold text-[13px] uppercase tracking-wide px-4 py-1.5 rounded-full">
                                For Professionals & Students
                            </span>
                        </div>
                        <h3 className="font-black text-[22px] md:text-[24px] lg:text-[26px] leading-[1.25] mb-2">
                            Switch Careers Fast. Get Hired in 4 Months.
                        </h3>
                        <p className="text-gray-600 font-medium text-[15px] mb-5 pb-5 border-b border-gray-100">
                            Weekend & weekday batches · Job-ready by Month 4
                        </p>
                        <ul className="space-y-3.5 flex-1">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 shrink-0" />
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    <span className="font-bold text-[#0f172a]">Built for:</span> Working professionals who want to switch careers without quitting their current job
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 shrink-0" />
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    <span className="font-bold text-[#0f172a]">What you learn:</span> Performance marketing, SEO, content strategy, social media, analytics
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#0f172a] mt-2 shrink-0" />
                                <p className="text-[15px] leading-relaxed text-gray-600">
                                    <span className="font-bold text-[#0f172a]">Outcome:</span> Digital marketing roles at top agencies and brands
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* ── BOTTOM CTA BANNER ── */}
                <div className="mt-8 lg:mt-10 w-full bg-[#0f172a] rounded-[1.25rem] p-6 md:p-8 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.25)] border border-white/5">
                    <div className="max-w-2xl">
                        <h4 className="font-black text-[20px] md:text-[24px] text-white leading-[1.2] mb-2">
                            Your career in digital marketing starts here — in just 4 months.
                        </h4>
                        <p className="text-gray-400 text-[15px] md:text-[16px] font-medium">
                            Everything you need to make your decision in one brochure.
                        </p>
                    </div>
                    <div className="shrink-0 w-full md:w-auto">
                        <div className="bg-white text-[#0f172a] hover:bg-[#ECAB00] transition-colors duration-300 rounded-xl px-8 py-3.5 font-bold text-[15px] flex items-center justify-center cursor-pointer shadow-md active:scale-95">
                            <DownloadBrochure />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}