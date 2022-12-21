import React from "react";

const ServiceCard = ({ img, title }) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg px-5 py-10">
        <img className="mx-auto w-16 h-16 my-5" src={img} alt="" />
        <h4 className="text-center py-3 text-xl font-semibold text-accent">
          {title}
        </h4>
        <p className="text-center text-accent">
          Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has
          been the
        </p>
      </div>
    </>
  );
};

export default ServiceCard;
