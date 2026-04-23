import React from 'react';
import { 
  FaEnvelope, 
  FaPhoneAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn, 
  FaTwitter 
} from 'react-icons/fa';

const TopHeader = () => {
  return (
    <div className="bg-[#1f1f1f] text-white py-2 px-4 md:px-10 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 text-[13px] font-medium">
          {/* Email */}
          <a 
            href="mailto:contact@operatingmedia.com" 
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <FaEnvelope className="text-white" />
            <span>contact@operatingmedia.com</span>
          </a>

          {/* Phone Numbers */}
          <div className="flex items-center gap-4">
            <a href="tel:+917700022882" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FaPhoneAlt className="text-[12px] rotate-90" />
              <span>+ 91 7700022882</span>
            </a>
            <a href="tel:+919326474007" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
              <FaPhoneAlt className="text-[12px] rotate-90" />
              <span>+ 91 9326474007</span>
            </a>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-blue-500 transition-colors"><FaFacebookF size={14} /></a>
          <a href="#" className="hover:text-pink-500 transition-colors"><FaInstagram size={16} /></a>
          <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube size={16} /></a>
          <a href="#" className="hover:text-blue-700 transition-colors"><FaLinkedinIn size={16} /></a>
          <a href="#" className="hover:text-sky-400 transition-colors"><FaTwitter size={15} /></a>
        </div>

      </div>
    </div>
  );
};

export default TopHeader;