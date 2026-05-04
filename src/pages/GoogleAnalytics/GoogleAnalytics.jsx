import React from "react";

// ── Reused from AdvanceDiploma / PPC page ──
import TrainersSection from "../../components/TrainersSection/TrainersSection";
import StudentReviews from "../../components/StudentReviews/StudentReviews";
import CounselorCTA from "../../components/AdvanceDiplomaPage/CounselorCTA/CounselorCTA";

// ── Google Analytics-specific sections ──
import GAHeroSection from "../../components/GoogleAnalyticsPage/GAHeroSection";
import GAOverview from "../../components/GoogleAnalyticsPage/GAOverview";
import GASyllabus from "../../components/GoogleAnalyticsPage/GASyllabus";
import GACertification from "../../components/GoogleAnalyticsPage/GACertification";
import GAFAQSection from "../../components/GoogleAnalyticsPage/GAFAQSection";

const GoogleAnalytics = () => {
    return (
        <main>
            {/* 1. Hero — unique to GA: rotating skill ticker, course info card, price display */}
            <GAHeroSection />

            {/* 2. Course Overview + Why Operating Media side-by-side */}
            <GAOverview />

            {/* 3. Google Analytics Syllabus — GA4 accordion module */}
            <GASyllabus />

            {/* 4. Counselor CTA (reused) */}
            <CounselorCTA />

            {/* 5. Trainers Carousel (reused) */}
            <TrainersSection />

            {/* 6. Student Reviews Marquee (reused) */}
            <StudentReviews />

            {/* 7. Certification + LMS section */}
            <GACertification />

            {/* 8. FAQ Section */}
            <GAFAQSection />
        </main>
    );
};

export default GoogleAnalytics;