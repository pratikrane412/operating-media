import React from "react";
import HeroSection from "../../components/AdvanceDiplomaPage/HeroSection/HeroSection";
import ChoosePath from "../../components/AdvanceDiplomaPage/ChoosePath/ChoosePath";
import TransformationSection from "../../components/AdvanceDiplomaPage/TransformationSection/TransformationSection";
import SyllabusSection from "../../components/AdvanceDiplomaPage/SyllabusSection/SyllabusSection";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";
import WhyUsSection from "../../components/AdvanceDiplomaPage/WhyUsSection/WhyUsSection";
import ToolsTicker from "../../components/MastersProgramPage/ToolsTicker/ToolsTicker";
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CertificationSection from "../../components/AdvanceDiplomaPage/CertificationSection/CertificationSection";
import FAQSection from "../../components/AdvanceDiplomaPage/FAQSection/FAQSection";

const AdvanceDiploma = () => {
    return (
        <main>
            <HeroSection />
            <ChoosePath />
            <TransformationSection />
            <SyllabusSection />
            <CounselorCTA />
            <WhyUsSection />
            <ToolsTicker />
            <TrainersSection />
            <StudentReviews />
            <CertificationSection />
            <FAQSection />
        </main>
    );
};

export default AdvanceDiploma;