import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import location from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone-2.svg";

const Info = () => {
  const openingDetails = "Lorem Ipsum is simply dummy text of the pri";
  const locationDetails = "Brooklyn, NY 10036, United States";
  const contactDetails = "+000 123 456789";
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5 pb-10">
        <InfoCard
          bgClass="bg-gradient-to-r from-secondary to-primary"
          title="Opening hours"
          details={openingDetails}
          img={clock}
        ></InfoCard>
        <InfoCard
          bgClass="bg-accent"
          title="Visit our location"
          details={locationDetails}
          img={location}
        ></InfoCard>
        <InfoCard
          bgClass="bg-gradient-to-r from-secondary to-primary"
          title="Contact us now"
          details={contactDetails}
          img={phone}
        ></InfoCard>
      </div>
    </>
  );
};

export default Info;
