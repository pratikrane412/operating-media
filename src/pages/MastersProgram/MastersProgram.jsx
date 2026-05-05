import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import HeroSection from "../../components/MastersProgramPage/HeroSection/HeroSection";
import ChoosePath from "../../components/MastersProgramPage/ChoosePath/ChoosePath";
import TransformationSection from "../../components/MastersProgramPage/TransformationSection/TransformationSection";
import SyllabusSection from "../../components/MastersProgramPage/SyllabusSection/SyllabusSection";
import WhyUsSection from "../../components/MastersProgramPage/WhyUsSection/WhyUsSection";
import ToolsTicker from "../../components/MastersProgramPage/ToolsTicker/ToolsTicker";
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import PlacementPartners from "../../components/MastersProgramPage/PlacementPartners/PlacementPartners";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CertificationSection from "../../components/MastersProgramPage/CertificationSection/CertificationSection";
import LMSSection from "../../components/MastersProgramPage/LMSSection/LMSSection";
import FAQSection from "../../components/MastersProgramPage/FAQSection/FAQSection";
import DownloadBrochure from "../../components/Navbar/DownloadBrochure";

const MastersProgram = () => {

  const location = useLocation();

  // 🔥 Dynamic base URL
  const baseUrl = window.location.origin;

  // 🔥 Clean canonical (no query, no hash, no trailing slash issue)
  const cleanPath = location.pathname.replace(/\/$/, '') || '/';
  const canonicalUrl = baseUrl + cleanPath;

  return (
    <>
      <Helmet>

        {/* ✅ Primary SEO */}
        <title>Digital Marketing Masters Program - Operating Media</title>

        <meta
          name="description"
          content="Join the best Digital Marketing Masters Program with live projects and 200+ hours of training on 120+ tools. Learn eCommerce, video editing, mobile app creation, Photoshop, real marketplace listing, and more. Get free hosting, domain, marketing automations, actual ad spends, and 100% placement assistance."
        />

        <meta
          name="keywords"
          content="masters digital marketing course, advanced digital marketing training, SEO, PPC, social media course"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Masters Program in Digital Marketing" />
        <meta property="og:description" content="Advanced digital marketing training with placement support." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Masters Program in Digital Marketing" />
        <meta name="twitter:description" content="Learn SEO, PPC & Social Media Marketing with certification." />

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
        {/* <PlacementPartners /> */}
        <StudentReviews />
        <CertificationSection />
        {/* <LMSSection /> */}
        <FAQSection />
      </main>
    </>
  );
};

export default MastersProgram;