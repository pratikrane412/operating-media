import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ── Reused ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── WordPress-specific ──
import WPHeroSection from "../../components/WordPressPage/WPHeroSection";
import WPOverview from "../../components/WordPressPage/WPOverview";
import WPSyllabus from "../../components/WordPressPage/WPSyllabus";
import WPCertification from "../../components/WordPressPage/WPCertification";
import WPFAQSection from "../../components/WordPressPage/WPFAQSection";

const WordPress = () => {

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
        <title>Wordpress Training, Courses & Classes in Andheri & Mumbai | Wordpress Online Course - Operating Media</title>

        <meta
          name="description"
          content="Operating Media Digital Marketing Institute provides professional Wordpress Training Courses in Andheri, Mumbai. Call us at +91 7700022882."
        />

        <meta
          name="keywords"
          content="WordPress course Mumbai, website design course, Elementor training, WordPress development course, website creation training"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="WordPress Course | Website Design Training" />
        <meta
          property="og:description"
          content="Learn WordPress, Elementor & website creation with hands-on training."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WordPress Course | Website Design Training" />
        <meta
          name="twitter:description"
          content="Build websites using WordPress & Elementor with certification."
        />

        {/* ✅ Robots */}
        <meta name="robots" content="index, follow" />

      </Helmet>

      <main>
        <WPHeroSection />
        <WPOverview />
        <WPSyllabus />
        <CounselorCTA />
        <TrainersSection />
        <StudentReviews />
        <WPCertification />
        <WPFAQSection />
      </main>
    </>
  );
};

export default WordPress;