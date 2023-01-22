import React, { useEffect } from "react";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, outLoading, outError] = useSignOut(auth);
  // console.log(user, "form navbar");

  const userSignOut = async () => {
    const success = await signOut();
    if (success) {
      alert("You are sign out");
    }
  };
  useEffect(() => {
    if (outError || error) {
      alert(outError?.message || error?.message);
    }
  }, [outError, error]);
  if (loading || outLoading) {
    return <Loading></Loading>;
  }

  // menuItems data
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/dashboard/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        {user ? (
          <button onClick={() => userSignOut()}>Log Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </a>
        </div>
        <div className="navbar-end lg:navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end md:navbar-end lg:hidden">
          <label
            htmlFor="user-drawer"
            tabIndex={2}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
