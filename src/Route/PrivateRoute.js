import AdminPage from "../pages/Dashboard/AdminPage";
import UserAppointments from "../pages/Dashboard/UserAppointments/UserAppointments";
import Users from "../pages/Dashboard/Users";

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <AdminPage />,
    role: "admin",
  },
  {
    path: "users",
    element: <Users />,
    role: "admin",
  },
  {
    path: "userAppointment",
    element: <UserAppointments />,
    role: "admin",
  },
];
