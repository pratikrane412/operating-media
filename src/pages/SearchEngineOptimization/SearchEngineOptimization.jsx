import React from "react";

// ── Reused from AdvanceDiploma / PPC page ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── SEO-specific sections ──
import SEOHeroSection from "../../components/SEOPage/SEOHeroSection";
import SEOOverview from "../../components/SEOPage/SEOOverview";
import SEOSyllabus from "../../components/SEOPage/SEOSyllabus";
import SEOCertification from "../../components/SEOPage/SEOCertification";
import SEOFAQSection from "../../components/SEOPage/SEOFAQSection";

const SearchEngineOptimization = () => {
    return (
        <main>
            {/* 1. Hero — rotating skill ticker, course info card, ₹9,000 price */}
            <SEOHeroSection />

            {/* 2. Course Overview + Why Operating Media side-by-side */}
            <SEOOverview />

            {/* 3. SEO Syllabus — single accordion module (15 topics) */}
            <SEOSyllabus />

            {/* 4. Counselor CTA (reused) */}
            <CounselorCTA />

            {/* 5. Trainers Carousel (reused) */}
            <TrainersSection />

            {/* 6. Student Reviews Marquee (reused) */}
            <StudentReviews />

            {/* 7. Certification + LMS section */}
            <SEOCertification />

            {/* 8. FAQ Section */}
            <SEOFAQSection />
        </main>
    );
};

export default SearchEngineOptimization;