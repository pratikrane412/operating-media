import React from "react";

import Breadcum from "../../components/Gallery/Breadcum.jsx";
import GallerySection from "../../components/Gallery/gallerysection.jsx";
import InstitutionCampus from '../../components/MastersProgramPage/InstitutionCampus/InstitutionCampus.jsx';


const gallerypage = () => {
  return (
    <main>
      <Breadcum />
      <GallerySection />
             <InstitutionCampus/>
      
    </main>
  );
};

export default gallerypage;