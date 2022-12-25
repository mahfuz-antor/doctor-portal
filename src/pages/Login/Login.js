import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <>
      <div className="px-12 h-screen flex justify-center items-center">
        <div className="w-full md:w-2/3 lg:w-1/3 mx-auto grid grid-cols-1 justify-center items-center content-center rounded-lg shadow-lg px-12 py-5">
          <h4 className="text-xl font-semibold py-5 text-center">Login</h4>
          <form className="grid grid-cols-1 gap-4 pt-3">
            <label htmlFor="email">
              <span className="text-md">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input block input-bordered input-secondary w-full mx-auto"
              />
            </label>
            <label htmlFor="password">
              <span className="text-md">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Type password"
                className="input block input-bordered input-secondary w-full mx-auto"
              />
              <span className="text-sm">Forget Password? </span>
            </label>
            <input
              type="submit"
              value="Login"
              className="btn btn-secondary text-white w-full mx-auto"
            />
          </form>
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
