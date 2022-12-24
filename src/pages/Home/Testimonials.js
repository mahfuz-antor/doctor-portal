import React from "react";
import quote from "../../assets/icons/quote.svg";
import people from "../../assets/images/people1.png";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      _id: 1,
      name: "John Milton",
      img: people,
      address: "San Fransisco",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing Content here, content",
    },
    {
      _id: 2,
      name: "John Milton",
      img: people,
      address: "San Fransisco",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing Content here, content",
    },
    {
      _id: 3,
      name: "John Milton",
      img: people,
      address: "San Fransisco",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu tousing Content here, content",
    },
  ];
  return (
    <>
      <section className="py-10">
        <div className="flex justify-between items-center px-5">
          <div>
            <h6 className="text-secondary text-lg font-bold">Testimonial</h6>
            <h2 className="text-3xl font-semibold">What Our Patients Says</h2>
          </div>
          <div>
            <img className="w-24 h-24" src={quote} alt="Quote" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-12 py-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial._id}
              testimonial={testimonial}
            ></TestimonialCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
