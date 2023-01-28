import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import usePatient from "../hooks/usePatient";
import Appointments from "../pages/Appointment/Appointments";
import Loading from "../pages/Common/Loading";
import DashboardLayout from "../pages/Dashboard/Common/DashboardLayout";
import { privateRoutes } from "./PrivateRoute";
import { user } from "./Utils";

const ProtectRoute = ({ r, children }) => {
  const getUser = useContext(UserContext);
  console.log(getUser?.email);
  const patient = getUser?.email;
  // const user = {
  //   name: "Mahfuz",
  //   // role: patient ? "patient" : "",
  //   role: "admin",
  // };

  if (user) {
    if (
      r.role === user?.role ||
      r.role === "all" ||
      r?.role?.admin === user?.role ||
      r?.role?.patient === user?.role
    ) {
      return children;
    } else {
      return <Navigate to={"/not-access"} />;
    }
  } else {
    return <Navigate to={"/login"} replace />;
  }
};

export const getRoute = () => {
  const filterRoute = [];

  // eslint-disable-next-line array-callback-return
  privateRoutes.map((r) => {
    r.element = <ProtectRoute r={r}> {r.element}</ProtectRoute>;
    filterRoute.push(r);
  });

  return {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: filterRoute,
  };
};
// for admin and patient access the /appointment route
const roles = { admin: "admin", patient: "patient" };

export const appointmentPage = {
  path: "appointment",
  element: (
    <ProtectRoute r={{ role: roles }}>
      <Appointments />
    </ProtectRoute>
  ),
};
