import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddDoctor = () => {
  // today date function here.
  const today = new Date().toString().slice(0, 15);
  // get doctor image state
  const [imgURL, setImgURL] = useState("");
  const imageRef = useRef();

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
    const setImg = imageRef?.current.files[0];
    const data = new FormData();
    data.append("file", setImg);
    data.append("upload_preset", "doctor_portal");
    data.append("cloud_name", "divdnjnx5");
    fetch("https://api.cloudinary.com/v1_1/divdnjnx5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const url = data?.url;
        setImgURL(url);
        console.log(data?.url, "just checking the image from cloudinary.");
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
    // const getImage = data?.image[0];
    // console.log(getImage, "checking imageeeee");
    // await setDoctorImg(getImage);
    // await uploadImage();
    // adding a doctor in a database collection
    await fetch("http://localhost:5000/doctors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data, img: imgURL }),
    })
      .then((res) => res.json())
      .then((getResponse) => {
        if (getResponse) {
          toast.success("The doctor details added successfully!");
        } else {
          toast.warning("Your data do not submit. Try again");
        }
      });
  };

  const handleImage = (e) => {
    uploadImage();
    // const getIMG = e?.target?.files[0];
    // console.log(getIMG, "getIMG from input");
  };
  return (
    <div>
      <div className="flex justify-between items-center px-5 my-5">
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
          {/* <label htmlFor="image">
            <span className="text-md">Image</span>
            <input
              required
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is required!",
                },
              })}
              type="file"
              placeholder="Upload image"
              className="input block input-bordered input-secondary w-full mx-auto my-2"
            />
            {imageRef?.current?.files?.length === 0 && (
              <span className="text-sm text-red-500">
                Image is required for this
              </span>
            )}
          </label> */}
          <label
            htmlFor="image"
            className="flex items-center bg-white text-gray-400 input  input-bordered input-secondary w-full mx-auto"
          >
            <span className="mx-auto">
              {imageRef?.current?.name || "Add Image"}
            </span>
            <input
              required
              ref={imageRef}
              onChange={(e) => handleImage(e)}
              type="file"
              id="image"
              name="image"
              // className=" input input-bordered input-secondary w-full mx-auto my-2"
            />
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
