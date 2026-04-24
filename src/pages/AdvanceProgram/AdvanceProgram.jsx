import React from "react";
import Hero from "../../components/AdvancedDiplomaSection/Hero.jsx";
import Transform from "../../components/AdvancedDiplomaSection/Transform.jsx";
import Syallabus from "../../components/AdvancedDiplomaSection/Syallabus.jsx";
import WhyUs from "../../components/AdvancedDiplomaSection/WhyUs.jsx";
import ToolsTicker from "../../components/AdvancedDiplomaSection/Toolticker.jsx";
import PlacementPartners from "../../components/MastersProgramPage/PlacementPartners/PlacementPartners.jsx";
import CertificationSection from "../../components/AdvancedDiplomaSection/Certificate.jsx";


const AdvanceProgram = () => {
    return (
        <main>
            <Hero />
            <Transform />
            <Syallabus />
            <WhyUs />
            <ToolsTicker />
            <PlacementPartners />
            <CertificationSection />
        </main>
    );
};

export default AdvanceProgram;