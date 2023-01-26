import Appointments from "../pages/Appointment/Appointments";
import Error from "../pages/Common/Error";
import NotAccess from "../pages/Common/NotAccess";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Review from "../pages/Review/Review";
import SignUp from "../pages/SignUp/SignUp";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  // {
  //   path: "/appointment",
  //   element: <Appointments />,
  // },
  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/not-access",
    element: <NotAccess />,
  },
  {
    path: "*",
    element: <Error />,
  },
];
