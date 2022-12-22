import React from "react";
import doctor from "../../assets/images/doctor.png";
import bg from "../../assets/images/appointment.png";
import PrimaryButton from "../Common/PrimaryButton";

const HomeAppoint = () => {
  return (
    <>
      <section
        className="flex justify-center items-center lg:grid-cols-2 gap-10 px-8 md:px-28 lg:px-28 my-10"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex-1 hidden lg:block">
          <img className="-mt-[130px]" src={doctor} alt="doctor" />
        </div>
        <div className="flex-1 py-10">
          <h6 className="text-secondary text-lg font-bold">Appointment</h6>
          <h2 className="text-4xl text-white font-semibold py-5">
            Make an appointment Today
          </h2>
          <p className="pb-5 text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </section>
    </>
  );
};

export default HomeAppoint;
