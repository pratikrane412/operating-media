import React from "react";
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

const DiplomaPage = () => {
    return (
        <main>
            <HeroSection />
            <CourseSelection />
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

export default DiplomaPage;