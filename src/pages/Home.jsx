import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
