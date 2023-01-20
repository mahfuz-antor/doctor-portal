export const user = {
  name: "mahfuz",
  role: "user",
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
];

export const getPath = () => {
  const route = routes.find((r) => r.role === user?.role);
  return route.path;
};
