import React from 'react';
// We use ../../ to go back twice to find the components folder
import HeroSection from '../../components/HeroSection/HeroSection';
import Strpi from "../../components/Strpi/strpi.jsx"
import AboutSection from '../../components/AboutSection/AboutSection.jsx';
import Programs from '../../components/Programs/Programs';
import WhyUsAuthority from '../../components/WhyUsAuthority/WhyUsAuthority.jsx';
import EventsAndBatches from '../../components/EventsAndBatches/EventsAndBatches.jsx';
import StatsCounter from '../../components/StatsCounter/StatsCounter.jsx';
import InstitutionCampus from '../../components/MastersProgramPage/InstitutionCampus/InstitutionCampus.jsx';
import AlumniPlacement from '../../components/AlumniPlacement/AlumniPlacement';
import CounselorCTA from '../../components/MastersProgramPage/CounselorCTA/CounselorCTA.jsx';
import TrainersSection from '../../components/TrainersSection/TrainersSection';
import LearningSection from '../../components/LearningSection/LearningSection';
import HiringPartners from '../../components/HiringPartners/HiringPartners';
import InfoSection from '../../components/InfoSection/InfoSection';
import StudentReviews from '../../components/StudentReviews/StudentReviews.jsx';




const Homepage = () => {
  return (
    <main>
      <HeroSection />
      <Strpi />
      <AboutSection />
      <Programs />
      <WhyUsAuthority />
      <EventsAndBatches />
      {/* <StatsCounter/> */}
     
      
      <AlumniPlacement />
      <CounselorCTA />
      <TrainersSection />
      <LearningSection />
      <HiringPartners />

      <InfoSection />
      <StudentReviews/>
       <InstitutionCampus/>
    </main>
  );
};

export default Homepage;