import React from "react";
import { Download } from "lucide-react";
import { useModal } from "../../context/ModalContext";

export default function DownloadBrochure() {
  const { openBrochureModal } = useModal();

  return (
    <button
      onClick={openBrochureModal}
      className="group flex items-center gap-3 bg-white border border-gray-200 text-[#111111] font-semibold text-sm px-8 py-4 rounded-xl hover:bg-gray-50 transition-all"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <Download size={16} className="text-[#FF5A1F]" />
      Download Brochure
    </button>
  );
}
