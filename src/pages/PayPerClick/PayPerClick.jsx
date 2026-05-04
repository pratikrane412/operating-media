import React from "react";

// ── Reused from AdvanceDiploma page ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── PPC-specific sections ──
import PPCHeroSection from "../../components/PPCPage/PPCHeroSection";
import PPCOverview from "../../components/PPCPage/PPCOverview";
import PPCSyllabus from "../../components/PPCPage/PPCSyllabus";
import PPCCertification from "../../components/PPCPage/PPCCertification";
import PPCFAQSection from "../../components/PPCPage/PPCFAQSection";

const PayPerClick = () => {
    return (
        <main>
            {/* 1. Dark Hero — unique to PPC: dark bg, price display, rotating skill ticker, course info card */}
            <PPCHeroSection />

            {/* 2. Course Overview + Why Operating Media side-by-side */}
            <PPCOverview />

            {/* 3. Google Ads Syllabus — 2 accordion modules (SEM + YouTube) */}
            <PPCSyllabus />

            {/* 4. Counselor CTA (reused) */}
            <CounselorCTA />

            {/* 5. Trainers Carousel (reused) */}
            <TrainersSection />

            {/* 6. Student Reviews Marquee (reused) */}
            <StudentReviews />

            {/* 7. Certification + LMS section */}
            <PPCCertification />

            {/* 8. FAQ Section */}
            <PPCFAQSection />
        </main>
    );
};

export default PayPerClick;