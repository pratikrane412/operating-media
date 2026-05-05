import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import HeroSection from "../../components/DiplomaPage/HeroSection/HeroSection";
import CourseSelection from "../../components/DiplomaPage/CourseSelection/CourseSelection";
import TransformationSection from "../../components/DiplomaPage/TransformationSection/TransformationSection";
import SyllabusSection from "../../components/DiplomaPage/SyllabusSection/SyllabusSection";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";
import WhyUsSection from "../../components/DiplomaPage/WhyUsSection/WhyUsSection";
import ToolsTicker from "../../components/MastersProgramPage/ToolsTicker/ToolsTicker";
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CertificationSection from "../../components/DiplomaPage/CertificationSection/CertificationSection";
import FAQSection from "../../components/DiplomaPage/FAQSection/FAQSection";
import ProgramComparisonTable from "../../components/ProgramComparisonTable/ProgramComparisonTable";

const DiplomaPage = () => {

  const location = useLocation();

  const baseUrl = window.location.origin;
  const cleanPath = location.pathname.replace(/\/$/, '') || '/';
  const canonicalUrl = baseUrl + cleanPath;

  return (
    <>
      <Helmet>

        {/* ✅ Primary SEO */}
        <title>Digital Marketing Course Online | Digital Marketing Training & Classes Online - Operating Media</title>

        <meta
          name="description"
          content="Operating Media is a leading online digital marketing training institute in Mumbai providing complete digital marketing courses like SEO, SMO,PPC and Google Analytics."
        />

        <meta
          name="keywords"
          content="diploma in digital marketing, digital marketing certification, SEO training, social media marketing course"
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Diploma in Digital Marketing" />
        <meta property="og:description" content="Professional digital marketing course with practical training and certification." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diploma in Digital Marketing" />
        <meta name="twitter:description" content="Learn SEO, PPC and Social Media Marketing with hands-on practical training." />

        {/* ✅ Robots */}
        <meta name="robots" content="index, follow" />

      </Helmet>

      <main>
        <HeroSection />
        <CourseSelection />
        <TransformationSection />
        <SyllabusSection />
        <ProgramComparisonTable />
        <CounselorCTA />
        <WhyUsSection />
        <ToolsTicker />
        <TrainersSection />
        <StudentReviews />
        <CertificationSection />
        <FAQSection />
      </main>
    </>
  );
};

export default DiplomaPage;