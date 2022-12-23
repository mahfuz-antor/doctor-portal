import React, { useState } from "react";
import Footer from "../Common/Footer";
import AppointBanner from "./AppointBanner";
import AvailableAppoint from "./AvailableAppoint";

const Appointments = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <main>
        <AppointBanner date={date} setDate={setDate}></AppointBanner>
        <AvailableAppoint date={date}></AvailableAppoint>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Appointments;
