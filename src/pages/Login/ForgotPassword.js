import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Common/Loading";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  console.log(email, "getting the email");
  const siteURL = {
    url: "http://localhost:3000/login",
  };
  const handleSubmit = async () => {
    const success = await sendPasswordResetEmail(email, siteURL);
    if (success) {
      alert("Sent email");
    }
  };
  if (error) {
    alert(error);
  }
  if (sending) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="py-12 flex justify-center items-center">
        <div className="shadow-lg rounded-lg gap-2 py-5 px-12">
          <h4 className="text-2xl text-center text-primary font-bold py-5">
            Forgot Password
          </h4>
          <form onSubmit={handleSubmit} className="grid grid-cols-1">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input input-bordered input-secondary my-3 w-full max-w-xs mx-auto"
            />
            <input
              type="submit"
              value="Reset password"
              className="btn btn-secondary text-white w-full max-w-xs mx-auto"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
