import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ── Reused ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── SMO-specific ──
import SMOHeroSection from "../../components/SMOPage/SMOHeroSection";
import SMOOverview from "../../components/SMOPage/SMOOverview";
import SMOSyllabus from "../../components/SMOPage/SMOSyllabus";
import SMOCertification from "../../components/SMOPage/SMOCertification";
import SMOFAQSection from "../../components/SMOPage/SMOFAQSection";

const SocialMediaOptimization = () => {

  const location = useLocation();

  // 🔥 Dynamic base URL
  const baseUrl = window.location.origin;

  // 🔥 Clean canonical URL
  const cleanPath = location.pathname.replace(/\/$/, '') || '/';
  const canonicalUrl = baseUrl + cleanPath;

  return (
    <>
      <Helmet>

        {/* ✅ Primary SEO */}
        <title>SMO Course, Classes & Training Online Mumbai | SMM Training Course Mumbai | SMO Training Institute, Classes & Courses Andheri - Operating Media</title>

        <meta
          name="description"
          content="Operating Media Digital Marketing Institute provides professional and complete Social Media Optimization (SMO) Training Courses in Mumbai and Andheri. Our course covers each and every aspect of SMO industry. Call us at +91 7700022882."
        />

        <meta
          name="keywords"
          content="SMO course Mumbai, social media marketing course, Instagram marketing, Facebook ads training, social media training"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Social Media Marketing Course | SMO Training" />
        <meta
          property="og:description"
          content="Master Instagram, Facebook & social media marketing with hands-on training."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Social Media Marketing Course | SMO Training" />
        <meta
          name="twitter:description"
          content="Learn SMO, content strategy & paid ads with certification."
        />

        {/* ✅ Robots */}
        <meta name="robots" content="index, follow" />

      </Helmet>

      <main>
        <SMOHeroSection />
        <SMOOverview />
        <SMOSyllabus />
        <CounselorCTA />
        <TrainersSection />
        <StudentReviews />
        <SMOCertification />
        <SMOFAQSection />
      </main>
    </>
  );
};

export default SocialMediaOptimization;