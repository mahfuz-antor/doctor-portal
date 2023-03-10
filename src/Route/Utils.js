export const user = {
  name: "mahfuz",
  role: "admin",
};

// getting the auth user from login data
const GetUser = () => {};
const roles = { admin: "admin", patient: "patient" };
const routes = [
  {
    path: "/dashboard/admin",
    role: "admin",
  },
  {
    path: "/dashboard/addDoctor",
    role: "admin",
  },
  {
    path: "/dashboard/user",
    role: "patient",
  },
  {
    path: "/dashboard/userAppointment",
    role: "patient",
  },
  {
    path: "/appointment",
    role: roles,
  },
];

export const getPath = () => {
  const route = routes?.find((r) => r.role === user?.role);
  return route.path;
};
