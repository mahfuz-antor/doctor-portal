import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <>
      <div className="py-8 px-5 bg-white rounded-lg shadow-lg">
        <p>{testimonial.description}</p>
        <div className="flex justify-start items-center gap-5 pt-2">
          <img
            className="w-16 h-16 border-2 border-secondary rounded-full"
            src={testimonial.img}
            alt={testimonial.name}
          />
          <div>
            <h4 className="text-lg font-bold">{testimonial.name}</h4>
            <h6 className="text-md">{testimonial.address}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
