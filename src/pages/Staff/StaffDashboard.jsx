import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import StockPage from "./StockPage";
import OrdersPage from "./OrdersPage";
import MenuPage from "./MenuPage";

export default function StaffDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <Routes>
          <Route path="stock" element={<StockPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="menu" element={<MenuPage />} />
        </Routes>
      </div>
    </div>
  );
}
