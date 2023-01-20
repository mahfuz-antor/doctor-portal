import React from "react";
import UserDrawer from "../Common/DashboardLayout";

const UserAppointments = () => {
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
  ];
  return (
    <>
      <main className=" bg-sky-100">
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
              <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Treatment</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <!-- row 1 --> */}
                  {treatments.map((treatment) => (
                    <tr key={treatment.id}>
                      <th>{treatment.id}</th>
                      <td>{treatment.name}</td>
                      <td>{treatment.treatment}</td>
                      <td>{treatment.time}</td>
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
