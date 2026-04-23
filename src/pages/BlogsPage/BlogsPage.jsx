import React from "react";
import BlogspageHero from "../../components/Blogpage/BlogPageHero/BlogspageHero";
import BlogListing from "../../components/Blogpage/BlogListing/BlogListing";

const BlogsPage = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero Section */}
      <BlogspageHero />
      
      {/* 2. Content Section */}
      <BlogListing />

      {/* DEBUG: If the screen is white, check if you can see this line below */}
      <div className="text-black bg-orange-500 p-10 text-center font-bold">
        IF YOU SEE THIS, THE PAGE IS LOADING CORRECTLY
      </div>
    </main>
  );
};

export default BlogsPage;