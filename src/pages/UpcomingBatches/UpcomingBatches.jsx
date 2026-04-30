import React from "react";

import Breadcum from "../../components/UpcomingBatches/Breadcum.jsx";
import EventsAndBatches from '../../components/EventsAndBatches/EventsAndBatches.jsx';
import AlumniPlacement from '../../components/AlumniPlacement/AlumniPlacement';

const UpcomingBatchespage = () => {
  return (
    <main>
      <Breadcum />
      <EventsAndBatches />
      <AlumniPlacement />
    </main>
  );
};

export default UpcomingBatchespage;