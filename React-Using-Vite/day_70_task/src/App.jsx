import React from "react";
import Navbar from "f:/OneDrive/Desktop/Sheryians Cohort 2/REACT/React-Using-Vite/day_70_task/src/components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Numbers from "./components/Numbers.jsx";
import About from "./components/About.jsx";
import Advantages from "./components/Advantages.jsx";
import TopDesigners from "./components/TopDesigners.jsx";
import GridSix from "./components/GridSix.jsx";
import Blog from "./components/Blog.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <Hero />
      <Features />
      <Numbers />
      <About />
      <Advantages />
      <TopDesigners />
      <GridSix />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
