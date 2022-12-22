import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Common/PrimaryButton";

const Contact = () => {
  return (
    <>
      <section
        className="mx-auto py-10 my-10"
        style={{ background: `url(${appointment})` }}
      >
        <form className="mx-auto" action="submit">
          <h6 className="text-lg text-secondary font-bold text-center">
            Contact Us
          </h6>
          <h2 className="text-3xl font-semibold text-white py-8 text-center">
            Stay connected with us
          </h2>
          <input
            className="w-1/2 h-10 rounded-lg mx-auto bg-white block pl-3"
            type="email"
            placeholder="Email address"
          />
          <input
            className="w-1/2 h-10 rounded-lg mx-auto bg-white block my-5 pl-3"
            type="text"
            placeholder="Subject"
          />
          <textarea
            className="w-1/2 block bg-white mx-auto rounded-lg p-3"
            placeholder="Write massage"
            name="massage"
            id=""
            cols="30"
            rows="5"
          ></textarea>
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
