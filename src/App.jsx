import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // 
import TopHeader from './components/TopHeader/TopHeader';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LocationsSection from './components/LocationsSection/LocationsSection.jsx';


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
        <Route path="/courses/pay-per-click-course/" element={<PayPerClick />} />
        <Route path="/courses/google-analytics-course/" element={<GoogleAnalytics />} />
        <Route path="/courses/wordpress-development-course/" element={<WordPress />} />

        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/about/testimonials" element={<TestimonialsPage />} />
        <Route path="/about/mentors" element={<Trainer />} />




        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:slug" element={<BlogPostPage />} />


        <Route path="/placement/hire" element={<HireFromUsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/upcoming-batches" element={<UpcomingBatches />} />
        <Route path="/faq" element={< Faq/>} />
        <Route path="/gallery" element={<Gallery />} />



      </Routes>
      {/* <LocationsSection /> */}
      <Footer />
    </div>
  );
}

export default App;