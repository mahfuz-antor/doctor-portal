import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

export const user = {
  name: "mahfuz",
  role: "user",
};

// getting the auth user from login data
export const GetUser = () => {
  const [user, loading, error] = useAuthState(auth);
  return user;
};

const routes = [
  {
    path: "/dashboard/admin",
    role: "admin",
  },
  {
    path: "/dashboard/user",
    role: "user",
  },
  {
    path: "/dashboard/userAppointment",
    role: "user",
  },
  {
    path: "/appointment",
    role: "user",
  },
];

export const getPath = () => {
  const route = routes.find((r) => r.role === user?.role);
  return route.path;
};
