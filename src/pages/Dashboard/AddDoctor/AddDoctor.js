import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  // today date function here.
  const today = new Date().toString().slice(0, 15);
  // get doctor image state
  const [doctorImg, setDoctorImg] = useState("");

  // get the treatment category
  const { data: treatments = [] } = useQuery({
    queryKey: ["treatment"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentOptions");
      const data = await res.json();
      return data;
    },
  });
  // image uploading function here
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", doctorImg);
    data.append("upload_preset", "upload_preset");
    data.append("cloud_name", "divdnjnx5");
    fetch("https://api.cloudinary.com/v1_1/divdnjnx5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // form submit data here
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   Email: "",
    //   Password: "",
    // },
  });
  const onSubmit = async (data) => {
    uploadImage();
    // adding a doctor in a database collection
    fetch("http://localhost:5000/doctors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data, "form data is collected!");
  };
  return (
    <div>
      <div className="flex justify-between items-center px-5">
        <h2 className="text-3xl text-primary font-medium">Add Doctor </h2>
        <h2 className="text-xl text-primary">Today: {today} </h2>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/3 mx-10 grid grid-cols-1 justify-start items-center rounded-lg shadow-lg px-5 md:px-12 lg:px-12 py-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4 pt-3"
        >
          <label htmlFor="name">
            <span className="text-md">Name</span>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required!",
                },
              })}
              type="text"
              placeholder="Type your name"
              className="input block input-bordered input-secondary w-full mx-auto my-2"
            />
            {errors?.name?.type === "required" && (
              <span className="text-sm text-red-500">
                {errors?.name?.message}
              </span>
            )}
          </label>
          <label htmlFor="email">
            <span className="text-md">Email</span>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required!",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Type valid email address!",
                },
              })}
              type="email"
              placeholder="Email Address"
              className="input block input-bordered input-secondary w-full mx-auto my-2"
            />
            {errors?.email?.type === "required" && (
              <span className="text-sm text-red-500">
                {errors?.email?.message}
              </span>
            )}
            {errors?.email?.type === "pattern" && (
              <span className="text-sm text-red-500">
                {errors?.email?.message}
              </span>
            )}
          </label>
          <label htmlFor="specialty">
            <span className="text-md">Specialty</span>
            <select
              {...register("treatment", {
                required: {
                  value: true,
                  message: "This field is required!",
                },
              })}
              className="select select-secondary input block input-bordered w-full mx-auto my-2"
            >
              <option disabled selected>
                Select a Specialty
              </option>
              {treatments?.map((treatment) => (
                <option key={treatment._id}>{treatment.name}</option>
              ))}
            </select>
            {errors?.specialty?.type === "required" && (
              <span id="treatment" className="text-sm text-red-500 block">
                {errors?.specialty?.message}
              </span>
            )}
          </label>
          <input
            type="submit"
            value="Add Doctor"
            className="btn btn-secondary text-white w-full mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
