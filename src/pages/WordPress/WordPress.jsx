import React from "react";

// ── Reused from AdvanceDiploma / PPC page ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── WordPress-specific sections ──
import WPHeroSection from "../../components/WordPressPage/WPHeroSection";
import WPOverview from "../../components/WordPressPage/WPOverview";
import WPSyllabus from "../../components/WordPressPage/WPSyllabus";
import WPCertification from "../../components/WordPressPage/WPCertification";
import WPFAQSection from "../../components/WordPressPage/WPFAQSection";

const WordPress = () => {
    return (
        <main>
            {/* 1. Hero — rotating skill ticker, course info card, price display */}
            <WPHeroSection />

            {/* 2. Course Overview + Why Operating Media side-by-side */}
            <WPOverview />

            {/* 3. WordPress Syllabus — 2 accordion modules (Elementor + Website Creation) */}
            <WPSyllabus />

            {/* 4. Counselor CTA (reused) */}
            <CounselorCTA />

            {/* 5. Trainers Carousel (reused) */}
            <TrainersSection />

            {/* 6. Student Reviews Marquee (reused) */}
            <StudentReviews />

            {/* 7. Certification + LMS section */}
            <WPCertification />

            {/* 8. FAQ Section */}
            <WPFAQSection />
        </main>
    );
};

export default WordPress;