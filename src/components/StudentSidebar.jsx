import { Link } from "react-router-dom";

export default function StudentSidebar() {
   return (
      <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
         <h2 className="text-2xl font-bold mb-6">Student Dashboard</h2>
         <nav className="space-y-4">
            <Link
               to="/student/track-budget"
               className="block p-2 hover:bg-gray-700 rounded"
            >
               Track Budget
            </Link>
            <Link
               to="/student/view-past-orders"
               className="block p-2 hover:bg-gray-700 rounded"
            >
               View Past Orders
            </Link>

         </nav>
      </div>
   );
}