import React from "react";
import ServiceCard from "./ServiceCard";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Common/PrimaryButton";

const Services = () => {
  const services = [
    {
      _id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      img: cavity,
      title: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      img: whitening,
      title: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];

  return (
    <>
      <div className="py-40">
        <h4 className="text-center text-secondary font-bold uppercase ">
          Our services
        </h4>
        <h2 className="text-accent text-center text-2xl">
          Services We Provide
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5 px-5">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="grid grid-cols-1 items-center sm:grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-10 lg:px-28 pt-10">
          <div className="w-full mx-auto">
            <img
              className="sm:w-full md:w-full lg:w-9/12 mx-auto rounded-lg"
              src={treatment}
              alt=""
            />
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
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
