import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import {
  useSignInWithGoogle,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Common/Loading";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fireErrors, setFireErrors] = useState("");
  // sign in with Google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // sign in with Email and Password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // update profile name
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  // useNavigate function
  const navigate = useNavigate();
  if (gUser || user) {
    console.log(gUser || user);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.Email, data.Password);
    await updateProfile({ displayName: data.name });
    navigate("/appointment");
    // userSignOut();
  };

  useEffect(() => {
    if (error || gError || updateError) {
      setFireErrors(
        <p className="text-sm text-red-500">
          {error?.message || gError?.message || updateError?.message}
        </p>
      );
    }
  }, [error, gError, loading, gLoading, updateError]);

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="px-5 md:px-12 lg:px-12 my-5 flex justify-center items-center">
        <div className="w-full md:w-2/3 lg:w-1/3 mx-auto grid grid-cols-1 justify-center items-center content-center rounded-lg shadow-lg px-5 md:px-12 lg:px-12 py-5">
          <h4 className="text-xl font-semibold py-5 text-center">Sign up</h4>
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
                  minLength: {
                    value: 3,
                    message: "Type at least 3 character.",
                  },
                })}
                type="text"
                placeholder="Your name"
                className="input block input-bordered input-secondary w-full mx-auto my-2"
              />
              {errors?.name?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors?.name?.message}
                </span>
              )}
              {errors?.name?.type === "minLength" && (
                <span className="text-sm text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>
            <label htmlFor="email">
              <span className="text-md">Email</span>
              <input
                {...register("Email", {
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
              {errors?.Email?.type === "required" && (
                <span className="text-sm text-red-500">
                  {errors?.Email?.message}
                </span>
              )}
              {errors?.Email?.type === "pattern" && (
                <span className="text-sm text-red-500">
                  {errors?.Email?.message}
                </span>
              )}
            </label>
            <label htmlFor="password">
              <span className="text-md">Password</span>
              <input
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{6,32}$/,
                    message:
                      "Must be 6 character. At least a digit, a uppercase and a lowercase letter",
                  },
                })}
                className="input block input-bordered input-secondary w-full mx-auto my-2"
              />
              {errors?.Password?.type === "required" && (
                <span id="password" className="text-sm text-red-500 block">
                  {errors?.Password?.message}
                </span>
              )}
              {errors?.Password?.type === "pattern" && (
                <span id="password" className="text-sm text-red-500 block">
                  {errors?.Password?.message}
                </span>
              )}

              {/* <span className="text-sm">Forgot Password? </span> */}
            </label>
            {fireErrors}
            <input
              type="submit"
              value="SignUp"
              className="btn btn-secondary text-white w-full mx-auto"
            />
          </form>
          <div className="flex justify-center pt-5 gap-5">
            <p className="text-sm">Already have an account?</p>
            <Link to="/login" className="text-sm text-primary">
              Login from here
            </Link>
          </div>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline w-full mx-auto"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
