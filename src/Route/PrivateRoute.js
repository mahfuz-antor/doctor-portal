import { Navigate } from "react-router-dom";
import Appointments from "../pages/Appointment/Appointments";
import UserAppointments from "../pages/Dashboard/UserAppointments/UserAppointments";
import Users from "../pages/Dashboard/Users";
import { getPath } from "./Utils";

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <Navigate replace to={getPath()} />,
    role: "all",
  },
  // {
  //   path: "appointment",
  //   element: <Appointments />,
  //   role: "user",
  // },
  {
    path: "user",
    element: <Users />,
    role: "user",
  },
  {
    path: "userAppointment",
    element: <UserAppointments />,
    role: "user",
  },
];
