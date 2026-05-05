import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // 
import TopHeader from './components/TopHeader/TopHeader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BrochureModal from './components/Models/BrochureModal/BrochureModal';
import LocationsSection from './components/LocationsSection/LocationsSection.jsx';
import FloatingButtons from './components/FloatingButtons/FloatingButtons.jsx';

import Homepage from './pages/Homepage/Homepage.jsx';
import MastersProgram from './pages/MastersProgram/MastersProgram.jsx';
import AdvanceDiploma from './pages/AdvanceProgram/AdvanceDiploma.jsx';
import DiplomaPage from './pages/DiplomaPage/DiplomaPage.jsx';
import PlacementsPage from './pages/PlacementsPage/PlacementsPage.jsx';
import Reviewspage from './pages/Reviewspage/Reviewspage.jsx';
// import TrainersPage from "./pages/TrainersPage/TrainersPage";
import TestimonialsPage from './pages/TestimonialsPage/TestimonialsPage.jsx';
import Trainer from './pages/Trainer/Trainer.jsx';
import BlogsPage from './pages/BlogsPage/BlogsPage.jsx';
import BlogPostPage from './pages/BlogsPage/BlogPostPage.jsx';
import HireFromUsPage from './pages/HireFromUsPage/HireFromUsPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage/CaseStudiesPage.jsx';
import UpcomingBatches from './pages/UpcomingBatches/UpcomingBatches.jsx'
import Faq from './pages/Faq/Faq.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import PayPerClick from './pages/PayPerClick/PayPerClick.jsx';
import GoogleAnalytics from './pages/GoogleAnalytics/GoogleAnalytics.jsx';
import WordPress from './pages/WordPress/WordPress.jsx';
import SocialMediaOptimization from './pages/SocialMediaOptimization/SocialMediaOptimization.jsx';
import SearchEngineOptimization from './pages/SearchEngineOptimization/SearchEngineOptimization.jsx';



function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {/* <TopHeader/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/courses/masters-program-in-digital-marketing/" element={<MastersProgram />} />
        <Route path="/courses/advance-diploma-in-digital-marketing/" element={<AdvanceDiploma />} />
        <Route path="/courses/diploma-in-digital-marketing/" element={<DiplomaPage />} />
        <Route path="/courses/pay-per-click-management-courses/" element={<PayPerClick />} />
        <Route path="/courses/google-analytics-courses/" element={<GoogleAnalytics />} />
        <Route path="/courses/wordpress-courses/" element={<WordPress />} />
        <Route path="/courses/social-media-optimization-courses/" element={<SocialMediaOptimization />} />
        <Route path="/courses/search-engine-optimization-courses/" element={<SearchEngineOptimization />} />

        {/* <Route path="/placements" element={<PlacementsPage />} /> */}
        <Route path="/testimonials/" element={<TestimonialsPage />} />
        <Route path="/our-trainers/" element={<Trainer />} />




        <Route path="/blogs/" element={<BlogsPage />} />
        <Route path="/blogs/:slug/" element={<BlogPostPage />} />


        <Route path="/hire-from-us/" element={<HireFromUsPage />} />

        <Route path="/contact-us/" element={<ContactPage />} />
        <Route path="/about-us/" element={<AboutUs />} />
        {/* <Route path="/case-studies" element={<CaseStudiesPage />} /> */}
        <Route path="/upcoming-batches/" element={<UpcomingBatches />} />
        <Route path="/frequently-asked-questions/" element={< Faq/>} />
        <Route path="/gallery/" element={<Gallery />} />



      </Routes>
      {/* <LocationsSection /> */}
      <Footer />
      <FloatingButtons />
      <BrochureModal />
    </div>
  );
}

export default App;