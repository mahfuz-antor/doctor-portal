import React from "react";
import footerBg from "../../assets/images/footer.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="py-10 sm:block md:flex lg:flex justify-between items-start px-20">
          <div className="">
            <h4 className="text-md font-semibold uppercase text-gray-500">
              Services
            </h4>
            <p>Emergency Checkup</p>
            <p>Monthly Checkup</p>
            <p>Weekly Checkup</p>
            <p>Deep Checkup</p>
          </div>
          <div className="py-10 md:py-0 lg:py-0">
            <h4 className="text-md font-semibold uppercase text-gray-500">
              Oral Health
            </h4>
            <p>Fluoride Treatment</p>
            <p>Cavity Filling</p>
            <p>Teeth Whitening</p>
          </div>
          <div className="">
            <h4 className="text-md font-semibold uppercase text-gray-500">
              Our Address
            </h4>
            <p>New York - 101010 Hudson</p>
          </div>
        </div>
        <p className="py-10 font-semibold text-center">
          &#169; Doctor Portal {year}
        </p>
      </section>
    </>
  );
};

export default Footer;
