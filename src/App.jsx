import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // 
import TopHeader from './components/TopHeader/TopHeader'; 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LocationsSection from './components/LocationsSection/LocationsSection.jsx';
import AdvanceProgram from './pages/AdvanceProgram/AdvanceProgram.jsx';

import Homepage from './pages/Homepage/Homepage.jsx';
import MastersProgram from './pages/MastersProgram/MastersProgram.jsx';
import PlacementsPage from './pages/PlacementsPage/PlacementsPage.jsx';
import Reviewspage from './pages/Reviewspage/Reviewspage.jsx';
// import TrainersPage from "./pages/TrainersPage/TrainersPage";
import TestimonialsPage from './pages/TestimonialsPage/TestimonialsPage.jsx';
import Trainer from './pages/Trainer/Trainer.jsx';
import BlogsPage from './pages/BlogsPage/BlogsPage.jsx';
import HireFromUsPage from './pages/HireFromUsPage/HireFromUsPage.jsx';
import ContactPage from './pages/ContactPage/ContactPage.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage/CaseStudiesPage.jsx';



function App() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {/* <TopHeader/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/masters-program" element={<MastersProgram />} />
        <Route path="/advance-diploma" element={<AdvanceProgram />} />

        <Route path="/placements" element={<PlacementsPage />} />
        <Route path="/about/testimonials" element={<TestimonialsPage />} />
        <Route path="/about/mentors" element={<Trainer />} />




        <Route path="/blogs" element={<BlogsPage />} />


         <Route path="/placement/hire" element={<HireFromUsPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />

        

      </Routes>
      {/* <LocationsSection /> */}
      <Footer />
    </div>
  );
}

export default App;