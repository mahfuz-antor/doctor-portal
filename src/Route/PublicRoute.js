import Error from "../pages/Common/Error";
import NotAccess from "../pages/Common/NotAccess";
import Home from "../pages/Home/Home";
import Review from "../pages/Review/Review";

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
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
