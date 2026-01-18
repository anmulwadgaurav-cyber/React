import React from "react";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne/SectionOne";
import AboutHorizon from "./components/AboutHorizon";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <SectionOne />
      <AboutHorizon />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </div>
  );
};

export default App;
