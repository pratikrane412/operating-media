import React from "react";
import { Helmet } from "react-helmet-async";

import Breadcum from "../../components/Faq/Breadcum.jsx";
import Faqsection from "../../components/Faq/Faqsection.jsx";
import HiringPartners from "../../components/HiringPartners/HiringPartners";

const FaqPage = () => {
  return (
    <>
      {/* ✅ SEO + Schema */}
      <Helmet>
        <title>Frequently Asked Questions - Operating Media</title>

        <meta
          name="description"
          content="Find answers to frequently asked questions about our digital marketing courses, fees, placements, and training at Operating Media."
        />

        <meta
          name="keywords"
          content="digital marketing course FAQs, operating media questions, course fees, placement queries"
        />

        {/* ✅ Canonical */}
        <link
          rel="canonical"
          href="https://www.operatingmedia.com/faq/"
        />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="FAQs - Operating Media" />
        <meta property="og:description" content="Get answers to common questions about digital marketing courses and placements." />
        <meta property="og:url" content="https://www.operatingmedia.com/faq/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs - Operating Media" />
        <meta name="twitter:description" content="All your digital marketing course questions answered." />

        {/* ✅ FAQ Schema (VERY IMPORTANT 🔥) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is the duration of the digital marketing course?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The course duration typically ranges from 3 to 6 months depending on the program."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide placement support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we provide 100% placement assistance with access to 400+ hiring partners."
                }
              },
              {
                "@type": "Question",
                "name": "Is this course suitable for beginners?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, the course is designed for beginners as well as professionals looking to upgrade their skills."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <main>
        <Breadcum />
        <Faqsection />
        <HiringPartners />
      </main>
    </>
  );
};

export default FaqPage;