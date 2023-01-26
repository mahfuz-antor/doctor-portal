export const user = {
  name: "mahfuz",
  role: "patient",
};

// getting the auth user from login data
const GetUser = () => {};

const routes = [
  {
    path: "/dashboard/admin",
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
    role: "patient",
  },
];

export const getPath = () => {
  const route = routes.find((r) => r.role === user?.role);
  return route.path;
};
