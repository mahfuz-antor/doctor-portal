import React from "react";
import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import PrimaryButton from "../Common/PrimaryButton";

const Banner = () => {
  return (
    <>
      <div
        style={{
          background: `url(${bgChair})`,
          backgroundSize: "cover",
        }}
        className="hero min-h-screen px-2 md:px-12 lg:px-12"
      >
        <div className="hero-content -z-50 min-w-fit gap-10 flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="w-full md:w-8/12 lg:w-5/12 rounded-lg shadow-2xl"
            alt="chair pictures"
          />
          <div>
            <h1 className="text-5xl font-bold text-accent">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
