import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TrackBudgetPage from "./TrackBudgetPage";
import PastOrdersPage from "./PastOrdersPage";

export default function StudentDashboard() {
   return (
      <div className="flex">
         <Sidebar />
         <div className="flex-grow p-6">
            <Routes>
               <Route path="track-budget" element={<TrackBudgetPage />} />
               <Route path="view-past-orders" element={<PastOrdersPage />} />
            </Routes>
         </div>
      </div>
   );
}
