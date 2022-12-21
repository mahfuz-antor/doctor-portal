import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

const Services = () => {
  return (
    <>
      <div className="py-40">
        <h4 className="text-center text-secondary font-bold uppercase ">
          Our services
        </h4>
        <h2 className="text-accent text-center text-2xl">
          Services We Provide
        </h2>
        <div className="grid grid-cols-3 gap-10 pt-5 px-5">
          <ServiceCard title="Fluoride Treatment" img={fluoride}></ServiceCard>
          <ServiceCard title="Cavity Filling" img={cavity}></ServiceCard>
          <ServiceCard title="Teeth Whitening" img={whitening}></ServiceCard>
        </div>
        <div className="flex justify-center items-center gap-10 px-40 pt-10">
          <div className="w-full mx-auto">
            <img className="w-9/12 mx-auto rounded-lg" src={treatment} alt="" />
          </div>
          <div className="w-full">
            <h2 className="text-4xl text-accent font-bold">
              Exceptional Dental Care, on Your Terms
            </h2>
            <p className="py-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
