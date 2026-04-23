import React from "react";
// Change the end of this line from PlacementsHeroSection to PlacementHeroSection
import PlacementsHeroSection from "../../components/PlacementsReportPage/PlacementsHeroSection/PlacementsHeroSection";
import PlacementHero from "../../components/PlacementsReportPage/PlacementHero/PlacementHero";
import PlacementAnalytics from "../../components/PlacementsReportPage/PlacementAnalytics/PlacementAnalytics";
import HireFromUs  from "../../components/PlacementsReportPage/HireFromUs/HireFromUs";
import JoinOurTeam from "../../components/PlacementsReportPage/JoinOurTeam/JoinOurTeam";


const PlacementsPage = () => {
  return (
    <main>
      <PlacementHero />
      <PlacementsHeroSection />
      <PlacementAnalytics />
      <HireFromUs />
      <JoinOurTeam />
      
    </main>
  );
};

export default PlacementsPage;