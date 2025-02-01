import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StaffDashboard from "./pages/StaffDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import MenuPage from "./pages/OrderMenu"; // Add the Menu Page


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/staff/*" element={<StaffDashboard />} />
            <Route path="/menu" element={<MenuPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
