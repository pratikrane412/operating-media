import React from "react";
import AboutHero from "../../components/AboutUsPage/AboutHero/AboutHero";
import AboutNarrative from "../../components/AboutUsPage/AboutNarrative/AboutNarrative";

import AboutFaculty from "../../components/AboutUsPage/AboutFaculty/AboutFaculty";
import AboutCTA from "../../components/AboutUsPage/AboutCTA/AboutCTA";
import StudentReviews from '../../components/StudentReviews/StudentReviews.jsx';



const AboutUsPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <AboutHero />
      <AboutNarrative />
      
      <AboutFaculty/>
      <AboutCTA />
      <StudentReviews/>
      
      
      

    </main>
  );
};

export default AboutUsPage;