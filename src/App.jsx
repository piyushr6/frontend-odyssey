import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StaffDashboard from "./pages/Staff/StaffDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import MenuPage from "./pages/OrderMenu";
import StudentDashboard from "./pages/Student/StudentDashboard";
import OrderMenu from "./pages/OrderMenu";
import OrderSummary from "./pages/OrderSummary";

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
            <Route path="/student/*" element={<StudentDashboard />} />
            <Route path="/order-menu" element={<OrderMenu />} />
            <Route path="/order-summary" element={<OrderSummary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
