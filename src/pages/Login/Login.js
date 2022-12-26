import React, { useEffect, useState } from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";

const Login = () => {
  const [passWarning, setPassWarning] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  const [getData, setGetData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => setGetData(data);

  useEffect(() => {
    if (errors?.Password) {
      setPassWarning(
        "Type at least a digit, a uppercase and a lowercase. between 8 - 32"
      );
    } else if (!errors?.Password) {
      setPassWarning("");
    }
  }, [errors?.Password]);

  console.log(getData, "getting state data");
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
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                placeholder="Email Address"
                className="input block input-bordered input-secondary w-full mx-auto my-2"
              />
            </label>
            <label htmlFor="password">
              <span className="text-md">Password</span>
              {/* <input
                type="password"
                name="password"
                placeholder="Type password"
                {...register("Password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^\S+@\S+$/i,
                })}
                className="input block input-bordered input-secondary w-full mx-auto"
              /> */}
              <input
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{8,32}$/,
                })}
                className="input block input-bordered input-secondary w-full mx-auto my-2"
              />
              <span id="password" className="text-sm text-red-500 block">
                {passWarning}
              </span>
              <span className="text-sm">Forget Password? </span>
            </label>
            <input
              type="submit"
              value="Login"
              className="btn btn-secondary text-white w-full mx-auto"
            />
          </form>
          {/* <form className="grid grid-cols-1 gap-4 pt-3">
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <input
              type="tel"
              placeholder="Mobile number"
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />

            <input type="submit" />
          </form> */}
          <div className="flex justify-center pt-5 gap-5">
            <p className="text-sm">New to doctor portal?</p>
            <p className="text-sm text-primary">Create new account</p>
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
