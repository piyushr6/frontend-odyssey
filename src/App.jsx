import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import StaffDashboard from "./pages/StaffDashboard";
import Login from "./pages/Login"; // Import Login Page
import Signup from "./pages/Signup"; // Import Signup Page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/staff" element={<StaffDashboard />} />
            <Route path="/login" element={<Login />} /> {/* Login Page */}
            <Route path="/signup" element={<Signup />} /> {/* Signup Page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
