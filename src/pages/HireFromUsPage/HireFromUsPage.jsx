import React from "react";
import { Helmet } from "react-helmet-async";

import HireFromUsSection from "../../components/HireFromUsPage/HireFromUsSection/HireFromUsSection";
import Breadcum from "../../components/HireFromUsPage/HireFromUsSection/Breadcum";

const HireFromUsPage = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Hire from Us - Operating Media</title>

        <meta
          name="description"
          content="Save money and time on training. Hire freshly trained talent with 100+ hours of hands-on experience, case studies, and in-house exams. Get instant access to CVs, complete placement support, and industry-ready candidates."
        />

        <meta
          name="keywords"
          content="hire digital marketers, hire SEO experts, PPC specialists, digital marketing hiring India"
        />

        {/* ✅ Canonical */}
        <link
          rel="canonical"
          href="https://www.operatingmedia.com/hire-from-us/"
        />

        {/* ✅ Open Graph (important for sharing) */}
        <meta property="og:title" content="Hire Digital Marketing Experts | Operating Media" />
        <meta property="og:description" content="Hire trained digital marketing professionals from Operating Media." />
        <meta property="og:url" content="https://www.operatingmedia.com/hire-from-us/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Digital Marketing Experts | Operating Media" />
        <meta name="twitter:description" content="Hire trained digital marketing professionals from Operating Media." />
      </Helmet>

      {/* Page Content */}
      <main className="bg-white min-h-screen">
        <Breadcum />
        <HireFromUsSection />
      </main>
    </>
  );
};

export default HireFromUsPage;