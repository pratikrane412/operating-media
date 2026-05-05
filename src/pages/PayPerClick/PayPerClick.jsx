import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// ── Reused ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── PPC-specific ──
import PPCHeroSection from "../../components/PPCPage/PPCHeroSection";
import PPCOverview from "../../components/PPCPage/PPCOverview";
import PPCSyllabus from "../../components/PPCPage/PPCSyllabus";
import PPCCertification from "../../components/PPCPage/PPCCertification";
import PPCFAQSection from "../../components/PPCPage/PPCFAQSection";

const PayPerClick = () => {

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
        <title>PPC Training, Courses & Classes Online Mumbai | Google Ads Training & Certification Course Online | Google Adwords Training Course, SEM Classes, Course & Training Andheri & Mumbai - Operating Media
</title>

        <meta
          name="description"
          content="Certified (PPC) Pay Per Click training course by Operating Media will help you grow your business exponentially. Call us at +917700022882."
        />

        <meta
          name="keywords"
          content="PPC course Mumbai, Google Ads training, pay per click course, SEM course, YouTube ads training"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="PPC Course | Google Ads Training" />
        <meta
          property="og:description"
          content="Master PPC advertising including Search, Display & YouTube Ads with hands-on training."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PPC Course | Google Ads Training" />
        <meta
          name="twitter:description"
          content="Learn PPC, Google Ads & YouTube Ads with certification."
        />

        {/* ✅ Robots */}
        <meta name="robots" content="index, follow" />

      </Helmet>

      <main>
        <PPCHeroSection />
        <PPCOverview />
        <PPCSyllabus />
        <CounselorCTA />
        <TrainersSection />
        <StudentReviews />
        <PPCCertification />
        <PPCFAQSection />
      </main>
    </>
  );
};

export default PayPerClick;