import { Routes, Route } from "react-router-dom";
import StudentSidebar from "../../components/StudentSidebar";
import TrackBudgetPage from "./TrackBudgetPage";
import PastOrdersPage from "./PastOrdersPage";

export default function StudentDashboard() {
  return (
    <div className="flex">
      <StudentSidebar />
      <div className="flex-grow p-6">
        <Routes>
          {/* Default route to TrackBudgetPage */}
          <Route index element={<TrackBudgetPage />} />
          <Route path="track-budget" element={<TrackBudgetPage />} />
          <Route path="view-past-orders" element={<PastOrdersPage />} />
        </Routes>
      </div>
    </div>
  );
}
