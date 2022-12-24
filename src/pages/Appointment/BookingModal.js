import { format } from "date-fns";
import React, { useRef, useState } from "react";

const BookingModal = ({ date, treatment }) => {
  const { name, slots } = treatment;
  const userName = useRef(null);
  const userEmail = useRef(null);
  const userPhone = useRef(null);
  const [userData, setUserData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(slot, date, name);
    setUserData({
      treatmentName: name,
      date: date,
      time: slot,
      user: userName.current.value,
      email: userEmail.current.value,
      phone: userPhone.current.value,
    });
  };
  console.log(userData, "userData from state");
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg ">
            Booking for: <span className="text-xl text-primary">{name}!</span>
          </h3>
          {/* modal form started */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 pt-3">
            <input
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered input-secondary w-full max-w-xs mx-auto"
            />
            <select
              name="slot"
              className="select select-bordered select-secondary w-full max-w-xs mx-auto"
            >
              {slots.map((slot, id) => (
                <option key={id} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              ref={userName}
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered input-secondary w-full max-w-xs mx-auto"
            />
            <input
              ref={userEmail}
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered input-secondary w-full max-w-xs mx-auto"
            />
            <input
              ref={userPhone}
              type="tel"
              name="phone"
              placeholder="Phone number"
              className="input input-bordered input-secondary w-full max-w-xs mx-auto"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary text-white w-full max-w-xs mx-auto"
            />
          </form>
          {/* <div className="modal-action">
            <label htmlFor="booking-modal" className="btn">
              Close!
            </label>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BookingModal;
