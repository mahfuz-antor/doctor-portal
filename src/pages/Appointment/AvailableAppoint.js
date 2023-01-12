import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import Loading from "../Common/Loading";
import AvailableService from "./AvailableService";
import BookingModal from "./BookingModal";

const AvailableAppoint = ({ selectDate, setSelectDate }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  // date format here
  const date = format(selectDate, "PP");

  const { data: appointmentOptions = [], refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  if (!appointmentOptions) {
    return <Loading />;
  }
  return (
    <>
      <section className="py-20 px-5">
        <h4 className="text-xl text-center text-secondary">
          Available Treatment on {format(selectDate, "PP")}
        </h4>
        <p className="text-lg text-gray-500 text-center pb-5">
          Please select a treatment
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {appointmentOptions?.map((option) => (
            <AvailableService
              key={option._id}
              appointmentOption={option}
              setTreatment={setTreatment}
            ></AvailableService>
          ))}
        </div>
        {treatment && (
          <BookingModal
            selectDate={selectDate}
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
          ></BookingModal>
        )}
      </section>
    </>
  );
};

export default AvailableAppoint;
