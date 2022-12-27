import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Common/Loading";
import { Link } from "react-router-dom";

const Login = () => {
  const [fireErrors, setFireErrors] = useState("");
  // sign in with Google
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  // sign in with Email and Password
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (gUser) {
    console.log(gUser);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.Email, data.Password);
  };

  useEffect(() => {
    if (error || gError) {
      setFireErrors(
        <p className="text-sm text-red-500">
          {error?.message || gError?.message}
        </p>
      );
    }
  }, [error, gError, loading, gLoading]);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="px-12 h-screen flex justify-center items-center">
        <div className="w-full md:w-2/3 lg:w-1/3 mx-auto grid grid-cols-1 justify-center items-center content-center rounded-lg shadow-lg px-12 py-5">
          <h4 className="text-xl font-semibold py-5 text-center">Login</h4>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-4 pt-3"
          >
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

              <span className="text-sm">Forgot Password? </span>
            </label>
            {fireErrors}
            <input
              type="submit"
              value="Login"
              className="btn btn-secondary text-white w-full mx-auto"
            />
          </form>
          <div className="flex justify-center pt-5 gap-5">
            <p className="text-sm">New to doctor portal?</p>
            <Link to="/signup" className="text-sm text-primary">
              Create new account
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

export default Login;
