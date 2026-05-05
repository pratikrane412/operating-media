import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import HeroSection from '../../components/HeroSection/HeroSection';
import Strpi from "../../components/Strpi/strpi.jsx"
import AboutSection from '../../components/AboutSection/AboutSection.jsx';
import Programs from '../../components/Programs/Programs';
import WhyUsAuthority from '../../components/WhyUsAuthority/WhyUsAuthority.jsx';
import EventsAndBatches from '../../components/EventsAndBatches/EventsAndBatches.jsx';
import AlumniPlacement from '../../components/AlumniPlacement/AlumniPlacement';
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";
import TrainersSection from '../../components/TrainersSection/TrainersSection';
import LearningSection from '../../components/LearningSection/LearningSection';
import HiringPartners from '../../components/HiringPartners/HiringPartners';
import InfoSection from '../../components/InfoSection/InfoSection';
import StudentReviews from '../../components/StudentReviews/StudentReviews.jsx';
import InstitutionCampus from '../../components/MastersProgramPage/InstitutionCampus/InstitutionCampus.jsx';
import CareerOutcomes from '../../components/CareerOutcomes/CareerOutcomes.jsx';

const Homepage = () => {

  const location = useLocation();

  // 🔥 Dynamic base URL (prod + dev safe)
  const baseUrl = window.location.origin;

  // 🔥 Clean canonical (no query, no hash, no trailing slash issue)
  const cleanPath = location.pathname.replace(/\/$/, '') || '/';
  const canonicalUrl = baseUrl + cleanPath;

  return (
    <>
      <Helmet>
        {/* ✅ Primary SEO */}
        <title>Digital Marketing Institute Mumbai, Digital Marketing Training & Courses Mumbai, SEO Training Institute, Courses & Classes Mumbai - Operating Media</title>

        <meta
          name="description"
          content="Operating Media is a leading digital marketing training institute providing training in PPC, SEO, SMO and Google Analytics. Call us at +91 7700022882 for more information."
        />

        <meta
          name="keywords"
          content="digital marketing course Mumbai, SEO training, PPC course, social media marketing institute"
        />

        {/* ✅ Canonical (auto page-wise) */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Best Digital Marketing Institute in Mumbai" />
        <meta property="og:description" content="Learn SEO, PPC & Social Media Marketing with placement support." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Digital Marketing Institute in Mumbai" />
        <meta name="twitter:description" content="Join top digital marketing course with placement support." />

        {/* ✅ Basic Technical SEO */}
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main>
        <HeroSection />
        <Strpi />
        <AboutSection />
        <Programs />
        <CareerOutcomes />
        <WhyUsAuthority />
        <EventsAndBatches />
        <AlumniPlacement />
        <CounselorCTA />
        <TrainersSection />
        <LearningSection />
        <HiringPartners />
        <InfoSection />
        <StudentReviews />
        <InstitutionCampus />
      </main>
    </>
  );
};

export default Homepage;