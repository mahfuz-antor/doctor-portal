import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="px-10 py-12 lg:flex gap-3">
        <h2 className="text-sky-500 font-bold text-3xl pb-5 lg:pb-0">
          Error Page. Please select correct link.
        </h2>
        <Link
          className="bg-sky-400 text-white px-2 py-2 rounded-lg uppercase"
          to="/"
        >
          Home page
        </Link>
      </div>
    </>
  );
};

export default Error;
