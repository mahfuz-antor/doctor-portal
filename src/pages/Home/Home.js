import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import HomeAppoint from "./HomeAppoint";
import Info from "./Info";
import InfoCard from "./InfoCard";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Banner />
        <Info></Info>
      </div>
      <Services></Services>
      <HomeAppoint></HomeAppoint>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </>
  );
};

export default Home;
