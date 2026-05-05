import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import HeroSection from "../../components/AdvanceDiplomaPage/HeroSection/HeroSection";
import ChoosePath from "../../components/AdvanceDiplomaPage/ChoosePath/ChoosePath";
import TransformationSection from "../../components/AdvanceDiplomaPage/TransformationSection/TransformationSection";
import SyllabusSection from "../../components/AdvanceDiplomaPage/SyllabusSection/SyllabusSection";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";
import WhyUsSection from "../../components/AdvanceDiplomaPage/WhyUsSection/WhyUsSection";
import ToolsTicker from "../../components/MastersProgramPage/ToolsTicker/ToolsTicker";
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CertificationSection from "../../components/AdvanceDiplomaPage/CertificationSection/CertificationSection";
import FAQSection from "../../components/AdvanceDiplomaPage/FAQSection/FAQSection";

const AdvanceDiploma = () => {

  const location = useLocation();

  // 🔥 Dynamic base URL
  const baseUrl = window.location.origin;

  // 🔥 Clean canonical
  const cleanPath = location.pathname.replace(/\/$/, '') || '/';
  const canonicalUrl = baseUrl + cleanPath;

  return (
    <>
      <Helmet>

        {/* ✅ Primary SEO */}
        <title>Advance Digital Marketing Course & Classes | Digital Marketing Training Institute Andheri | Digital Marketing Short Courses - Operating Media</title>

        <meta 
          name="description" 
          content="Operating Media is a leading digital marketing training institute providing training in PPC, SEO, SMO and Google Analytics. Call us at +91 7700022882 for more information." 
        />

        <meta 
          name="keywords" 
          content="advanced diploma digital marketing, SEO course, Google Ads training, social media marketing course" 
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Advanced Diploma in Digital Marketing" />
        <meta property="og:description" content="Job-oriented digital marketing course with certification and placement support." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advanced Diploma in Digital Marketing" />
        <meta name="twitter:description" content="Learn SEO, PPC & Social Media with hands-on training." />

        {/* ✅ Robots */}
        <meta name="robots" content="index, follow" />

      </Helmet>

      <main>
        <HeroSection />
        <ChoosePath />
        <TransformationSection />
        <SyllabusSection />
        <CounselorCTA />
        <WhyUsSection />
        <ToolsTicker />
        <TrainersSection />
        <StudentReviews />
        <CertificationSection />
        <FAQSection />
      </main>
    </>
  );
};

export default AdvanceDiploma;