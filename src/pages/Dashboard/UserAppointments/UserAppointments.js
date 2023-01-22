import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../App";

const UserAppointments = () => {
  const user = useContext(UserContext);
  const email = user?.email;

  const url = `http://localhost:5000/booking?email=${email}`;
  const { data: booking = [] } = useQuery({
    queryKey: ["booking", email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  const treatments = [
    {
      id: 1,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "08:00 AM - 08:30 AM",
    },
    {
      id: 2,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "10:00 AM - 10:30 AM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
    {
      id: 3,
      name: "Mahfuz Antor",
      treatment: "Teeth Orthodontic",
      time: "12:00 PM - 12:30 PM",
    },
  ];

  return (
    <>
      <main className="pb-5 bg-sky-100">
        {/* <section className="basis-1/5"></section> */}
        <section className=" px-10">
          <div className="flex justify-between items-center pt-10 pb-5">
            <h4 className="text-xl text-accent">My Appointments</h4>
            <h4 className="text-sm text-accent border-2 border-accent rounded-lg py-2 px-1">
              Jan 15, 2023
            </h4>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full h-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th>ID</th>
                    <th className="sticky z-50">Name</th>
                    <th className="sticky z-50">Treatment</th>
                    <th className="sticky z-50">Date</th>
                    <th className="sticky z-50">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- row 1 --> */}
                  {booking?.map((treatment, i) => (
                    <tr key={i}>
                      <th>{treatment._id}</th>
                      <td className="sticky z-50">{treatment.user}</td>
                      <td className="sticky z-50">{treatment.treatment}</td>
                      <td className="sticky z-50">
                        {treatment.appointmentDate}
                      </td>
                      <td className="sticky z-50">{treatment.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default UserAppointments;
