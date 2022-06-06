import React from "react";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Service from "../../Service/Service";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Service></Service>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
