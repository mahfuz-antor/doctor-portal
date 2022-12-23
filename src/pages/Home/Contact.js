import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Common/PrimaryButton";

const Contact = () => {
  return (
    <>
      <section
        className="mx-auto py-10 mt-10"
        style={{
          background: `url(${appointment})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <form className="mx-auto" action="submit">
          <h6 className="text-lg text-secondary font-bold text-center">
            Contact Us
          </h6>
          <h2 className="text-3xl font-semibold text-white py-3 text-center">
            Stay connected with us
          </h2>
          <div className="pt-4">
            <input
              className="w-5/6 md:w-2/4 lg:w-1/3 h-10 rounded-lg mx-auto bg-white block pl-3"
              type="email"
              placeholder="Email address"
            />
            <input
              className="w-5/6 md:w-2/4 lg:w-1/3 h-10 rounded-lg mx-auto bg-white block my-4 pl-3"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="w-5/6 md:w-2/4 lg:w-1/3 block bg-white mx-auto rounded-lg p-3"
              placeholder="Write massage"
              name="massage"
              id=""
              rows="3"
            ></textarea>
          </div>
          <button
            className="btn grid mx-auto mt-5 text-white font-bold bg-gradient-to-r from-secondary to-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
