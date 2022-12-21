import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import InfoCard from "./InfoCard";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Banner />
        {/* <InfoCard /> */}
        <Info></Info>
      </div>
    </>
  );
};

export default Home;
