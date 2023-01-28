import React from "react";

const AddDoctor = () => {
  const today = new Date().toString().slice(0, 15);
  return (
    <div>
      <div className="flex justify-between items-center px-5">
        <h2 className="text-3xl text-primary font-medium">Add Doctor </h2>
        <h2 className="text-xl text-primary">Today: {today} </h2>
      </div>
    </div>
  );
};

export default AddDoctor;
