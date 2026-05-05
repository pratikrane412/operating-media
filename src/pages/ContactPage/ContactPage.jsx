import React from "react";
import { Helmet } from "react-helmet-async";

import ContactHero from "../../components/ContactPage/ContactHero/ContactHero";
import Breadcum from "../../components/ContactPage/ContactHero/Breadcum";

const ContactPage = () => {
  return (
    <main className="bg-white min-h-screen">

      {/* SEO */}
      <Helmet>
        <title>Contact Us - Operating Media</title>

        <meta 
          name="description" 
          content="Get in touch with Operating Media for digital marketing courses, demo classes, and career guidance." 
        />

        <meta 
          name="keywords" 
          content="contact operating media, digital marketing institute contact, demo class inquiry" 
        />

        <link 
          rel="canonical" 
          href="https://www.operatingmedia.com/contact/" 
        />
      </Helmet>

      {/* Breadcrumb */}
      <Breadcum />

      {/* Hero Section */}
      <ContactHero />

    </main>
  );
};

export default ContactPage;