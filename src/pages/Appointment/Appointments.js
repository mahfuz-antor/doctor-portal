import React, { useState } from "react";
import Footer from "../Common/Footer";
import AppointBanner from "./AppointBanner";
import AvailableAppoint from "./AvailableAppoint";

const Appointments = () => {
  // const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <>
      <main>
        <AppointBanner
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        ></AppointBanner>
        <AvailableAppoint selectDate={selectDate}></AvailableAppoint>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Appointments;
