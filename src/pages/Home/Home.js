import React from "react";
import Footer from "../Common/Footer";
import Banner from "./Banner";
import Contact from "./Contact";
import HomeAppoint from "./HomeAppoint";
import Info from "./Info";
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
      {/* <Footer></Footer> */}
    </>
  );
};

export default Home;
