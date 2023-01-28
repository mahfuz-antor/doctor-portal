import { Navigate } from "react-router-dom";
import AddDoctor from "../pages/Dashboard/AddDoctor/AddDoctor";
import UserAppointments from "../pages/Dashboard/UserAppointments/UserAppointments";
import Users from "../pages/Dashboard/Users";
import { getPath } from "./Utils";

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <Navigate replace to={getPath()} />,
    role: "all",
  },
  {
    path: "admin",
    element: <div className="text-3xl text-primary">Admin Page Here.</div>,
    role: "admin",
  },
  {
    path: "user",
    element: <Users />,
    role: "admin",
  },
  {
    path: "addDoctor",
    element: <AddDoctor />,
    role: "admin",
  },
  {
    path: "userAppointment",
    element: <UserAppointments />,
    role: "patient",
  },
];
