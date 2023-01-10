import React from "react";

const AvailableService = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <>
      <section className="rounded-lg shadow-lg py-5">
        <h4 className="text-secondary text-center text-lg font-semibold">
          {name}
        </h4>
        <p className="text-center py-2">
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <p className="text-center">
          <b>{slots.length} </b>
          {slots.length > 1 ? "spaces available" : "space available"}
        </p>
        <div className="text-center pt-3">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </section>
    </>
  );
};

export default AvailableService;
