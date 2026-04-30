import React from "react";

import ContactHero from "../../components/ContactPage/ContactHero/ContactHero";
import Breadcum from "../../components/ContactPage/ContactHero/Breadcum";

const ContactPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <Breadcum />

      {/* Hero Section */}
      <ContactHero />
    </main>
  );
};

export default ContactPage;