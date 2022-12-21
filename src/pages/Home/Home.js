import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import InfoCard from "./InfoCard";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Banner />
        {/* <InfoCard /> */}
        <Info></Info>
      </div>
      <Services></Services>
    </>
  );
};

export default Home;
