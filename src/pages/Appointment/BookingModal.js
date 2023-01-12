import { format } from "date-fns";
import React, { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../Common/Loading";

const BookingModal = ({ selectDate, treatment, setTreatment, refetch }) => {
  const [user, loading] = useAuthState(auth); //error also here 17 no gallery Mohsin vobon.
  // state for storing data
  const { _id, name, slots } = treatment;
  const userPhone = useRef(null);
  // date format here
  const date = format(selectDate, "PP");

  // handle function here
  const handleSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: date,
      time: slot,
      user: user?.displayName,
      email: user?.email,
      phone: userPhone?.current?.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          toast.info(
            `Booking added successfully for ${name} on ${date} at ${slot}`
          );
          refetch();
        } else {
          toast.error(
            `Already have an appointment for ${data.booking?.treatment} on ${data.booking?.date} at ${data.booking?.time}`
          );
        }
        setTreatment(null);
      });
  };
  if (loading) {
    return <Loading />;
  }
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
              value={date}
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
              value={user?.displayName || ""}
              type="text"
              name="name"
              disabled
              className="input input-bordered input-secondary w-full max-w-xs mx-auto"
            />
            <input
              value={user?.email}
              type="email"
              name="email"
              disabled
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
