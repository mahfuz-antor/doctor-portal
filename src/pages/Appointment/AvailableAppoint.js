import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AvailableService from "./AvailableService";

const AvailableAppoint = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      <section className="py-20 px-5">
        <h4 className="text-xl text-center text-secondary">
          Available Services on {format(date, "PP")}
        </h4>
        <p className="text-lg text-gray-500 text-center pb-5">
          Please select a service
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {services.map((service) => (
            <AvailableService
              key={service._id}
              service={service}
            ></AvailableService>
          ))}
        </div>
      </section>
    </>
  );
};

export default AvailableAppoint;
