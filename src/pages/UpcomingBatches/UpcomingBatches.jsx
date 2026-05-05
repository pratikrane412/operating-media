import React from "react";
import { Helmet } from "react-helmet-async";

import Breadcum from "../../components/UpcomingBatches/Breadcum.jsx";
import EventsAndBatches from "../../components/EventsAndBatches/EventsAndBatches.jsx";
import AlumniPlacement from "../../components/AlumniPlacement/AlumniPlacement";

const UpcomingBatchespage = () => {
  return (
    <>
      {/* ✅ SEO Setup */}
      <Helmet>
        <title>Upcoming Batches - Operating Media</title>

        <meta
          name="description"
          content="Check upcoming digital marketing batches at Operating Media. Book your seat and start your career with industry-expert training and placement support."
        />

        <meta
          name="keywords"
          content="digital marketing batches, upcoming classes, marketing course schedule, operating media batches"
        />

        {/* ✅ Canonical */}
        <link
          rel="canonical"
          href="https://www.operatingmedia.com/upcoming-batches/"
        />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Upcoming Digital Marketing Batches | Operating Media" />
        <meta property="og:description" content="Explore upcoming digital marketing batches and reserve your seat today." />
        <meta property="og:url" content="https://www.operatingmedia.com/upcoming-batches/" />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Upcoming Digital Marketing Batches | Operating Media" />
        <meta name="twitter:description" content="Join upcoming digital marketing batches with placement support." />
      </Helmet>

      {/* Page Content */}
      <main>
        <Breadcum />
        <EventsAndBatches />
        <AlumniPlacement />
      </main>
    </>
  );
};

export default UpcomingBatchespage;