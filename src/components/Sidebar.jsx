import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Staff Dashboard</h2>
      <nav className="space-y-4">
        <Link to="/staff/stock" className="block p-2 hover:bg-gray-700 rounded">
          Stock Monitoring
        </Link>
        <Link
          to="/staff/orders"
          className="block p-2 hover:bg-gray-700 rounded"
        >
          Manage Orders
        </Link>
        <Link to="/staff/menu" className="block p-2 hover:bg-gray-700 rounded">
          Update Menu
        </Link>
      </nav>
    </div>
  );
}
