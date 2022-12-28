import React from "react";

const ResetPassword = () => {
  return (
    <>
      <div className="py-12 flex justify-center items-center">
        <div className="shadow-lg rounded-lg gap-2 py-5 px-12">
          <h4 className="text-2xl text-center text-primary font-bold py-5">
            Reset Password
          </h4>
          <form className="grid grid-cols-1">
            <input
              type="password"
              placeholder="Enter new password"
              name="password"
              className="input input-bordered input-secondary my-3 w-full max-w-xs mx-auto"
            />
            <input
              type="submit"
              value="New password"
              className="btn btn-secondary text-white w-full max-w-xs mx-auto"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
