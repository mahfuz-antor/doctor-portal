import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserAppointments from "./pages/Dashboard/UserAppointments/UserAppointments";
import UserDrawer from "./pages/Dashboard/Common/DashboardLayout";
import { publicRoutes } from "./Route/PublicRoute";
import { useEffect, useState } from "react";
import { getRoute } from "./Route";
import Router from "./Route/Router";

function App() {
  const [allRoute, setAllRoute] = useState([...publicRoutes]);
  useEffect(() => {
    const route = getRoute();
    setAllRoute([...allRoute, route]);
  }, []);
  return (
    <>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointments />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userAppoint" element={<UserDrawer />} />
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Router allRoute={allRoute} />
      <ToastContainer />
    </>
  );
}

export default App;
