import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ── Reused ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── SEO-specific ──
import SEOHeroSection from "../../components/SEOPage/SEOHeroSection";
import SEOOverview from "../../components/SEOPage/SEOOverview";
import SEOSyllabus from "../../components/SEOPage/SEOSyllabus";
import SEOCertification from "../../components/SEOPage/SEOCertification";
import SEOFAQSection from "../../components/SEOPage/SEOFAQSection";

const SearchEngineOptimization = () => {

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
        <title>Best Advanced Seo Learning Course & Training Online | SEO Certification Courses | SEO Training Institute, Courses & Classes Andheri - Operating Media</title>

        <meta
          name="description"
          content="Operating Media is a trusted Search Engine Optimization (SEO) training institute in Mumbai and Andheri providing best advanced seo learning course & training online. Call us at +91 7700022882 for more details."
        />

        <meta
          name="keywords"
          content="SEO course Mumbai, search engine optimization training, on-page SEO, off-page SEO, technical SEO course"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="SEO Course | Search Engine Optimization Training" />
        <meta
          property="og:description"
          content="Master SEO including on-page, off-page & technical SEO with hands-on training."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SEO Course | Search Engine Optimization Training" />
        <meta
          name="twitter:description"
          content="Learn SEO with certification and practical training."
        />

        {/* ✅ Robots */}
        <meta name="robots" content="index, follow" />

      </Helmet>

      <main>
        <SEOHeroSection />
        <SEOOverview />
        <SEOSyllabus />
        <CounselorCTA />
        <TrainersSection />
        <StudentReviews />
        <SEOCertification />
        <SEOFAQSection />
      </main>
    </>
  );
};

export default SearchEngineOptimization;