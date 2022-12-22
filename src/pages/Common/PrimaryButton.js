import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <>
      <button
        text="Just checking"
        className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary"
      >
        {children}
      </button>
    </>
  );
};

export default PrimaryButton;
