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
        className="hero min-h-screen px-12"
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl"
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
