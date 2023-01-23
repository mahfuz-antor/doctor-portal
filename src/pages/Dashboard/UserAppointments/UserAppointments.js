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
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(booking, "booking data");
  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <main className="pb-5 bg-sky-100">
        {/* <section className="basis-1/5"></section> */}
        <section className=" px-10">
          <div className="flex justify-between items-center pt-10 pb-5">
            <h4 className="text-xl text-accent">My Appointments</h4>
            <h4 className="text-sm text-accent border-2 border-accent rounded-lg py-2 px-1">
              {currentDate}
            </h4>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table w-full h-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Treatment</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- row 1 --> */}
                  {booking?.map((treatment, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td>{treatment?.user}</td>
                      <td>{treatment?.treatment}</td>
                      <td>{treatment?.date}</td>
                      <td>{treatment?.time}</td>
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
