import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
  const phoneNumber = "+917700022882";
  const whatsappNumber = "917700022882";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your digital marketing courses.");

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} className="group-hover:drop-shadow-md" />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="w-14 h-14 bg-[#ECAB00] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Call Us"
      >
        <Phone size={28} fill="currentColor" className="group-hover:drop-shadow-md" />
      </a>
    </div>
  );
};

export default FloatingButtons;
