import React from "react";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";

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
