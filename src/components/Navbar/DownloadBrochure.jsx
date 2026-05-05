import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useModal } from "../../context/ModalContext";

export default function DownloadBrochure() {
  const { openBrochureModal } = useModal();

  return (
    <button
      onClick={openBrochureModal}
      className="group relative flex items-center gap-3 bg-white border border-gray-100 text-[#0f172a] font-bold text-sm px-8 py-4.5 rounded-2xl hover:border-[#ECAB00]/50 transition-all duration-300 shadow-sm hover:shadow-xl active:scale-95 overflow-hidden"
      style={{ fontFamily: "'Satoshi', sans-serif" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#ECAB00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <Sparkles size={16} className="text-[#ECAB00] animate-pulse" />
      <span className="relative z-10">Download Brochure</span>
      <ArrowRight size={14} className="text-[#ECAB00] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
    </button>
  );
}
