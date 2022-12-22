import React from "react";
import Banner from "./Banner";
import HomeAppoint from "./HomeAppoint";
import Info from "./Info";
import InfoCard from "./InfoCard";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Banner />
        <Info></Info>
      </div>
      <Services></Services>
      <HomeAppoint></HomeAppoint>
    </>
  );
};

export default Home;
