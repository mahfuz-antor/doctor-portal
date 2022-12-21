import React from "react";

const InfoCard = ({ img, title, details, bgClass }) => {
  return (
    <>
      {/* <div className="flex justify-center items-center w-full gap-10 px-5 pb-5 absolute -bottom-32"> */}
      <div
        className={`flex justify-start items-center h-36 px-5 text-white rounded-xl ${bgClass}`}
      >
        <img src={img} className="w-16 h-16 mr-5" alt="clock" />
        <div>
          <h3 className="text-xl pb-2 font-bold">{title}</h3>
          <p>{details}</p>
        </div>
      </div>
      {/* <div className="flex justify-start items-center w-1/3 h-36 px-5 text-white bg-accent rounded-xl">
          <img src={location} className="w-16 h-16 mr-5" alt="clock" />
          <div>
            <h3 className="text-xl pb-2 font-bold">Visit our location</h3>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div className="flex justify-start items-center w-1/3 h-36 px-5 text-white bg-gradient-to-r from-secondary to-primary rounded-xl">
          <img src={phone} className="w-16 h-16 mr-5" alt="clock" />
          <div>
            <h3 className="text-xl pb-2 font-bold">Contact us now</h3>
            <p>+000 123 456789</p>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default InfoCard;
