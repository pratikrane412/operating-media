import React from "react";
import { Helmet } from "react-helmet-async";

import Breadcum from "../../components/Gallery/Breadcum.jsx";
import GallerySection from "../../components/Gallery/gallerysection.jsx";
import InstitutionCampus from "../../components/MastersProgramPage/InstitutionCampus/InstitutionCampus.jsx";

const GalleryPage = () => {
  return (
    <>
      {/* ✅ SEO Setup */}
      <Helmet>
        <title>Gallery - Operating Media</title>

        <meta
          name="description"
          content="Explore the gallery of Operating Media. our campus, student activities, workshops, and real learning moments in digital marketing training."
        />

        <meta
          name="keywords"
          content="operating media gallery, digital marketing institute photos, student activities, campus images"
        />

        {/* ✅ Canonical */}
        <link
          rel="canonical"
          href="https://www.operatingmedia.com/gallery/"
        />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Gallery | Operating Media" />
        <meta property="og:description" content="Explore real student moments, workshops, and campus life at Operating Media." />
        <meta property="og:url" content="https://www.operatingmedia.com/gallery/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Operating Media" />
        <meta name="twitter:description" content="See campus life and student activities at Operating Media." />
      </Helmet>

      {/* Page Content */}
      <main>
        <Breadcum />
        <GallerySection />
        <InstitutionCampus />
      </main>
    </>
  );
};

export default GalleryPage;