import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Appointments from "./pages/Appointment/Appointments";
import Navbar from "./pages/Common/Navbar";
import Home from "./pages/Home/Home";
import ForgotPassword from "./pages/Login/ForgotPassword";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import ResetPassword from "./pages/Login/ResetPassword";
import Review from "./pages/Review/Review";
import SignUp from "./pages/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
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
        <Route path="/review" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
