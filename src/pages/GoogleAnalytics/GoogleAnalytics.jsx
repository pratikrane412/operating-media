import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ── Reused ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── GA-specific ──
import GAHeroSection from "../../components/GoogleAnalyticsPage/GAHeroSection";
import GAOverview from "../../components/GoogleAnalyticsPage/GAOverview";
import GASyllabus from "../../components/GoogleAnalyticsPage/GASyllabus";
import GACertification from "../../components/GoogleAnalyticsPage/GACertification";
import GAFAQSection from "../../components/GoogleAnalyticsPage/GAFAQSection";

const GoogleAnalytics = () => {

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
        <title>Google Analytics Course, Classes & Training Andheri, Mumbai | Google Analytics Advanced Course - Operating Media</title>

        <meta
          name="description"
          content="Operating Media provides complete Google Analytics Course, Classes & Training in Andheri, Mumbai. Call us at +91 7700022882 for more details."
        />

        <meta
          name="keywords"
          content="Google Analytics course Mumbai, GA4 training, analytics course, web analytics training, data tracking course"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Google Analytics Course | GA4 Training" />
        <meta
          property="og:description"
          content="Master GA4, tracking, reporting & analytics with hands-on training."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Analytics Course | GA4 Training" />
        <meta
          name="twitter:description"
          content="Learn Google Analytics 4 with certification and practical training."
        />

        {/* ✅ Robots */}
        <meta name="robots" content="index, follow" />

      </Helmet>

      <main>
        <GAHeroSection />
        <GAOverview />
        <GASyllabus />
        <CounselorCTA />
        <TrainersSection />
        <StudentReviews />
        <GACertification />
        <GAFAQSection />
      </main>
    </>
  );
};

export default GoogleAnalytics;