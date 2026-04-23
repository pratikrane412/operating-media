import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const LocationPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="w-full bg-orange-500 py-40 text-center text-white min-h-[50vh]">
      <h1 className="text-6xl font-black uppercase tracking-tighter">
        Route Found!
      </h1>
      <p className="text-2xl mt-4 font-bold opacity-80">
        You are viewing: {slug}
      </p>
    </div>
  );
};

export default LocationPage;