import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Appointments from "./pages/Appointment/Appointments";
import Navbar from "./pages/Common/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth";
import SignUp from "./pages/SignUp/SignUp";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
