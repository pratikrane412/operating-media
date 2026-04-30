import React from "react";
// Change the end of this line from PlacementsHeroSection to PlacementHeroSection
import HeroSection from "../../components/MastersProgramPage/HeroSection/HeroSection";
import ChoosePath from "../../components/MastersProgramPage/ChoosePath/ChoosePath";
import TransformationSection from "../../components/MastersProgramPage/TransformationSection/TransformationSection";;
import SyllabusSection from "../../components/MastersProgramPage/SyllabusSection/SyllabusSection";
import WhyUsSection from "../../components/MastersProgramPage/WhyUsSection/WhyUsSection";
import ToolsTicker from "../../components/MastersProgramPage/ToolsTicker/ToolsTicker";
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import PlacementPartners from  "../../components/MastersProgramPage/PlacementPartners/PlacementPartners";
import CounselorCTA from "../../components/MastersProgramPage/CounselorCTA/CounselorCTA";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CertificationSection from "../../components/MastersProgramPage/CertificationSection/CertificationSection";
import LMSSection from "../../components/MastersProgramPage/LMSSection/LMSSection";
import FAQSection from "../../components/MastersProgramPage/FAQSection/FAQSection";
import DownloadBrochure from "../../components/Navbar/DownloadBrochure";





const MastersProgram = () => {
  return (
    <main>
      <HeroSection/>
      <ChoosePath />
      <TransformationSection />
      <SyllabusSection />
      <CounselorCTA />
      <WhyUsSection />
      <ToolsTicker />
      <TrainersSection />
      {/* <PlacementPartners /> */}
      

      <StudentReviews />
      <CertificationSection />
      {/* <LMSSection /> */}
      <FAQSection />
      
     
      
    </main>
  );
};

export default MastersProgram;