import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chairBg from "../../assets/images/bg.png";

const AppointBanner = ({ selectDate, setSelectDate }) => {
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  return (
    <>
      <div
        className="hero min-h-screen py-10"
        style={{
          background: `url(${chairBg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="w-full md:w-5/12 lg:w-5/12 rounded-lg shadow-2xl"
            alt="Chair"
          />
          <div className="rounded-lg shadow-lg py-3">
            <DayPicker
              mode="single"
              selected={selectDate}
              onSelect={setSelectDate}
              fromYear={currentYear}
              toYear={nextYear}
              captionLayout="dropdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointBanner;
