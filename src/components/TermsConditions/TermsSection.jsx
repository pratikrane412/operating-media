/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Clock,
  Briefcase, 
  AlertTriangle, 
  ShieldCheck, 
  UserCheck, 
  Link2, 
  RefreshCw,
  Mail
} from 'lucide-react';

export default function TermsSection() {
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', title: 'General Terms & Info', icon: FileText },
    { id: 'course-duration', title: 'Course Duration & Validity', icon: Clock },
    { id: 'job-assistance', title: 'Job Assistance', icon: Briefcase },
    { id: 'refund-policy', title: 'Refund Policy', icon: AlertTriangle },
    { id: 'security', title: 'Security & Safety', icon: ShieldCheck },
    { id: 'contact-form', title: 'Registration & Contact', icon: UserCheck },
    { id: 'external-links', title: 'External Links', icon: Link2 },
    { id: 'changes', title: 'Changes to Terms', icon: RefreshCw }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-['Satoshi',sans-serif]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="font-bold text-gray-800 text-[18px] mb-6 tracking-wide uppercase text-[12px] text-gray-400">
              Table of Contents
            </h3>
            <ul className="space-y-2">
              {sections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-left ${
                        isActive
                          ? 'bg-[#ECAB00]/10 text-[#0f172a] border-l-4 border-[#ECAB00]'
                          : 'text-gray-500 hover:text-[#0f172a] hover:bg-gray-100/50 border-l-4 border-transparent'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-[#ECAB00]' : 'text-gray-400'} />
                      <span className="text-[15px]">{sec.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            
            {/* Direct support widget */}
            <div className="mt-10 p-5 bg-[#0A0F1C] text-white rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ECAB00]/10 rounded-full blur-2xl pointer-events-none" />
              <Mail className="text-[#ECAB00] mb-3" size={24} />
              <h4 className="font-bold text-[16px] mb-1">Have Questions?</h4>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
                If you need any clarification about our policies, our team is here to help.
              </p>
              <a 
                href="/contact-us/" 
                className="inline-block text-[#ECAB00] hover:text-white font-bold text-[14px] transition-colors"
              >
                Contact Support &rarr;
              </a>
            </div>
          </aside>

          {/* Main Terms Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* General Info */}
            <motion.div 
              id="general"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <FileText size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  1. Terms & Conditions
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  Operating Media has strict terms and conditions that it follows very firmly. We are the sole owners of the information collected on this site.
                </p>
                <p>
                  We only have access to/collect information that you voluntarily give us via email or other direct contact from the visitors and students. We will not sell or rent this information to third parties.
                </p>
                <p>
                  Unless you ask us not to, we may occasionally contact you via phone/email in the future to tell you about specials, new courses offers, job updates, etc.
                </p>
              </div>
            </motion.div>

            {/* Course Duration & Validity */}
            <motion.div 
              id="course-duration"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                  <Clock size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  2. What happens if I exceed my course duration?
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  Each course has a fixed validity period. Students are required to complete their course within the specified duration:
                </p>

                <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50 space-y-3">
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between pb-2 border-b border-gray-200/60">
                      <span className="font-semibold text-gray-800">Diploma</span>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-[14px]">4 Months</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b border-gray-200/60">
                      <span className="font-semibold text-gray-800">Advanced Diploma</span>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-[14px]">6 Months</span>
                    </li>
                    <li className="flex items-center justify-between pt-2">
                      <span className="font-semibold text-gray-800">Masters</span>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-[14px]">1 Year</span>
                    </li>
                  </ul>
                </div>

                <p>
                  If a student does not complete the course within the applicable duration, the course will expire (lapse) after the validity period ends, and access to the course/program may no longer be available.
                </p>
              </div>
            </motion.div>

            {/* Job Assistance */}
            <motion.div 
              id="job-assistance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Briefcase size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  3. Job Assistance
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  We are partnered with many different organizations and HR agencies that help us arrange interviews for our students at different organizations for jobs or internships. We will schedule interviews for you after the course completion (or midway if available) depending on the job description and your profile.
                </p>
                
                <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50 space-y-4">
                  <h4 className="font-bold text-gray-800 text-[15px] md:text-[16px] tracking-wide uppercase text-[12px] text-gray-400">
                    Important Rules regarding Placement Assistance:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2.5 shrink-0" />
                      <span>Job packages will be as per the company standard.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2.5 shrink-0" />
                      <span>We don’t promise a specific job profile for any particular skill.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2.5 shrink-0" />
                      <span>You cannot claim another job after you reject a confirmed job.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* No Refund Policy */}
            <motion.div 
              id="refund-policy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-red-100 shadow-[0_10px_30px_rgba(239,68,68,0.01)] relative overflow-hidden"
            >
              {/* Highlight badge for refund policy */}
              <div className="absolute top-0 right-0 bg-red-500 text-white font-bold text-[10px] tracking-widest px-4 py-1.5 rounded-bl-xl uppercase">
                Strict Policy
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                  <AlertTriangle size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  4. Refund Policy (No Refund)
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p className="font-bold text-red-600">
                  We have a strict NO REFUND policy. Refunds will not be provided in any case when a student decides to discontinue for any reason whatsoever.
                </p>
                <p>
                  We thrive hard to deliver the courses in the best possible manner and in time. We will try to solve all the issues students have in completing the course rather than supporting a refund claim.
                </p>
                <p>
                  In case a student is moving to a different town/city, we can try to accommodate online sessions (subject to availability of trainers) and finish the curriculum.
                </p>
                <p className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-4 text-[14px]">
                  If you have any questions about our refund policy, please do not hesitate to contact us and we’ll respond within one business day.
                </p>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div 
              id="security"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  5. Security
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.
                </p>
                <p>
                  While precaution is used to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job are granted access to personally identifiable information.
                </p>
                <p>
                  The computers/servers in which we store personally identifiable information are kept in a secure environment behind a hardware firewall.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              id="contact-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                  <UserCheck size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  6. Contact Form
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  In order for us to contact you, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address).
                </p>
                <p>
                  This information is used to contact you about the products/services on our site in which you have expressed interest.
                </p>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div 
              id="external-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                  <Link2 size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  7. Links
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites.
                </p>
                <p>
                  We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                </p>
              </div>
            </motion.div>

            {/* Changes in Terms & Conditions */}
            <motion.div 
              id="changes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl">
                  <RefreshCw size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  8. Changes in Terms & Conditions
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  In the event we update our terms and conditions then that information will be posted here.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Clock,
  Briefcase, 
  AlertTriangle, 
  ShieldCheck, 
  UserCheck, 
  Link2, 
  RefreshCw,
  Mail
} from 'lucide-react';

export default function TermsSection() {
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', title: 'General Terms & Info', icon: FileText },
    { id: 'course-duration', title: 'Course Duration & Validity', icon: Clock },
    { id: 'job-assistance', title: 'Job Assistance', icon: Briefcase },
    { id: 'refund-policy', title: 'Refund Policy', icon: AlertTriangle },
    { id: 'security', title: 'Security & Safety', icon: ShieldCheck },
    { id: 'contact-form', title: 'Registration & Contact', icon: UserCheck },
    { id: 'external-links', title: 'External Links', icon: Link2 },
    { id: 'changes', title: 'Changes to Terms', icon: RefreshCw }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 font-['Satoshi',sans-serif]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="font-bold text-gray-800 text-[18px] mb-6 tracking-wide uppercase text-[12px] text-gray-400">
              Table of Contents
            </h3>
            <ul className="space-y-2">
              {sections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeSection === sec.id;
                return (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-semibold text-left ${
                        isActive
                          ? 'bg-[#ECAB00]/10 text-[#0f172a] border-l-4 border-[#ECAB00]'
                          : 'text-gray-500 hover:text-[#0f172a] hover:bg-gray-100/50 border-l-4 border-transparent'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-[#ECAB00]' : 'text-gray-400'} />
                      <span className="text-[15px]">{sec.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            
            {/* Direct support widget */}
            <div className="mt-10 p-5 bg-[#0A0F1C] text-white rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ECAB00]/10 rounded-full blur-2xl pointer-events-none" />
              <Mail className="text-[#ECAB00] mb-3" size={24} />
              <h4 className="font-bold text-[16px] mb-1">Have Questions?</h4>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
                If you need any clarification about our policies, our team is here to help.
              </p>
              <a 
                href="/contact-us/" 
                className="inline-block text-[#ECAB00] hover:text-white font-bold text-[14px] transition-colors"
              >
                Contact Support &rarr;
              </a>
            </div>
          </aside>

          {/* Main Terms Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* General Info */}
            <motion.div 
              id="general"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <FileText size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  1. Terms & Conditions
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  Operating Media has strict terms and conditions that it follows very firmly. We are the sole owners of the information collected on this site.
                </p>
                <p>
                  We only have access to/collect information that you voluntarily give us via email or other direct contact from the visitors and students. We will not sell or rent this information to third parties.
                </p>
                <p>
                  Unless you ask us not to, we may occasionally contact you via phone/email in the future to tell you about specials, new courses offers, job updates, etc.
                </p>
              </div>
            </motion.div>

            {/* Course Duration & Validity */}
            <motion.div 
              id="course-duration"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl">
                  <Clock size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  2. What happens if I exceed my course duration?
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  Each course has a fixed validity period. Students are required to complete their course within the specified duration:
                </p>

                <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50 space-y-3">
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between pb-2 border-b border-gray-200/60">
                      <span className="font-semibold text-gray-800">Diploma</span>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-[14px]">4 Months</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b border-gray-200/60">
                      <span className="font-semibold text-gray-800">Advanced Diploma</span>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-[14px]">6 Months</span>
                    </li>
                    <li className="flex items-center justify-between pt-2">
                      <span className="font-semibold text-gray-800">Masters</span>
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-lg text-[14px]">1 Year</span>
                    </li>
                  </ul>
                </div>

                <p>
                  If a student does not complete the course within the applicable duration, the course will expire (lapse) after the validity period ends, and access to the course/program may no longer be available.
                </p>
              </div>
            </motion.div>

            {/* Job Assistance */}
            <motion.div 
              id="job-assistance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <Briefcase size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  3. Job Assistance
                </h2>
              </div>
              <div className="space-y-6 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  We are partnered with many different organizations and HR agencies that help us arrange interviews for our students at different organizations for jobs or internships. We will schedule interviews for you after the course completion (or midway if available) depending on the job description and your profile.
                </p>
                
                <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100/50 space-y-4">
                  <h4 className="font-bold text-gray-800 text-[15px] md:text-[16px] tracking-wide uppercase text-[12px] text-gray-400">
                    Important Rules regarding Placement Assistance:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2.5 shrink-0" />
                      <span>Job packages will be as per the company standard.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2.5 shrink-0" />
                      <span>We don’t promise a specific job profile for any particular skill.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB00] mt-2.5 shrink-0" />
                      <span>You cannot claim another job after you reject a confirmed job.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* No Refund Policy */}
            <motion.div 
              id="refund-policy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-red-100 shadow-[0_10px_30px_rgba(239,68,68,0.01)] relative overflow-hidden"
            >
              {/* Highlight badge for refund policy */}
              <div className="absolute top-0 right-0 bg-red-500 text-white font-bold text-[10px] tracking-widest px-4 py-1.5 rounded-bl-xl uppercase">
                Strict Policy
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                  <AlertTriangle size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  4. Refund Policy (No Refund)
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p className="font-bold text-red-600">
                  We have a strict NO REFUND policy. Refunds will not be provided in any case when a student decides to discontinue for any reason whatsoever.
                </p>
                <p>
                  We thrive hard to deliver the courses in the best possible manner and in time. We will try to solve all the issues students have in completing the course rather than supporting a refund claim.
                </p>
                <p>
                  In case a student is moving to a different town/city, we can try to accommodate online sessions (subject to availability of trainers) and finish the curriculum.
                </p>
                <p className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-4 text-[14px]">
                  If you have any questions about our refund policy, please do not hesitate to contact us and we’ll respond within one business day.
                </p>
              </div>
            </motion.div>

            {/* Security */}
            <motion.div 
              id="security"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  5. Security
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.
                </p>
                <p>
                  While precaution is used to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job are granted access to personally identifiable information.
                </p>
                <p>
                  The computers/servers in which we store personally identifiable information are kept in a secure environment behind a hardware firewall.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              id="contact-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                  <UserCheck size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  6. Contact Form
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  In order for us to contact you, a user must first complete the registration form. During registration a user is required to give certain information (such as name and email address).
                </p>
                <p>
                  This information is used to contact you about the products/services on our site in which you have expressed interest.
                </p>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div 
              id="external-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl">
                  <Link2 size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  7. Links
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  This web site contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites.
                </p>
                <p>
                  We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                </p>
              </div>
            </motion.div>

            {/* Changes in Terms & Conditions */}
            <motion.div 
              id="changes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-sky-50 text-sky-600 rounded-2xl">
                  <RefreshCw size={24} />
                </div>
                <h2 className="font-black text-gray-900 text-[22px] md:text-[26px]">
                  8. Changes in Terms & Conditions
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-[15px] md:text-[16px] leading-[1.8] font-medium">
                <p>
                  In the event we update our terms and conditions then that information will be posted here.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
