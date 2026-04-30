import React from "react";

import Breadcum from "../../components/Faq/Breadcum.jsx";
import Faqsection from "../../components/Faq/Faqsection.jsx"
import HiringPartners from '../../components/HiringPartners/HiringPartners';



const Faqpage = () => {
  return (
    <main>
      <Breadcum />
      <Faqsection />
      <HiringPartners />
    </main>
  );
};

export default Faqpage;