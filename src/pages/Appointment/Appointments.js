import React, { useState } from "react";
import Footer from "../Common/Footer";
import AppointBanner from "./AppointBanner";
import AvailableAppoint from "./AvailableAppoint";

const Appointments = () => {
  // const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <>
      <main className="px-5 py-5 bg-sky-100">
        <div className="bg-white">
          <AppointBanner
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          ></AppointBanner>
          <AvailableAppoint selectDate={selectDate}></AvailableAppoint>
          {/* <Footer></Footer> */}
        </div>
      </main>
    </>
  );
};

export default Appointments;
