import React from "react";

// ── Reused from AdvanceDiploma / PPC page ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── SMO-specific sections ──
import SMOHeroSection from "../../components/SMOPage/SMOHeroSection";
import SMOOverview from "../../components/SMOPage/SMOOverview";
import SMOSyllabus from "../../components/SMOPage/SMOSyllabus";
import SMOCertification from "../../components/SMOPage/SMOCertification";
import SMOFAQSection from "../../components/SMOPage/SMOFAQSection";

const SocialMediaOptimization = () => {
    return (
        <main>
            {/* 1. Hero — rotating skill ticker, course info card, ₹12,000 price */}
            <SMOHeroSection />

            {/* 2. Course Overview + Why Operating Media side-by-side */}
            <SMOOverview />

            {/* 3. SMO Syllabus — 2 accordion modules (Organic + Paid) */}
            <SMOSyllabus />

            {/* 4. Counselor CTA (reused) */}
            <CounselorCTA />

            {/* 5. Trainers Carousel (reused) */}
            <TrainersSection />

            {/* 6. Student Reviews Marquee (reused) */}
            <StudentReviews />

            {/* 7. Certification + LMS section */}
            <SMOCertification />

            {/* 8. FAQ Section */}
            <SMOFAQSection />
        </main>
    );
};

export default SocialMediaOptimization;