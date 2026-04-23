import React from "react";
// Change the end of this line from PlacementsHeroSection to PlacementHeroSection
import TrainersHero from "../../components/TrainersPage/TrainersHero/TrainersHero";
import TrainersList from "../../components/TrainersPage/TrainersList/TrainersList";
import MarqueeRow from "../../components/TrainersPage/MarqueeRow/MarqueeRow";

const TrainersPage = () => {
  return (
    <main>
      <TrainersHero />
      <TrainersList />
      <MarqueeRow />
     
      
    </main>
  );
};

export default TrainersPage;