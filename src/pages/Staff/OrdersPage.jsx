import { useState } from "react";

export default function ManageOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Ravi Kumar",
      items: "Veg Thali, Masala Chai",
      total: 160,
      status: "Pending",
    },
    {
      id: 2,
      customer: "Priya Sharma",
      items: "Chole Bhature, Samosa",
      total: 130,
      status: "Completed",
    },
    {
      id: 3,
      customer: "Amit Verma",
      items: "Aloo Paratha, Pav Bhaji",
      total: 180,
      status: "Pending",
    },
  ]);

  const [newOrder, setNewOrder] = useState({
    customer: "",
    items: "",
    total: "",
  });
  const [filter, setFilter] = useState("All");

  // Update Order Status
  const updateStatus = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  // Add New Order
  const addOrder = () => {
    if (!newOrder.customer || !newOrder.items || !newOrder.total) return;
    const newEntry = {
      id: Date.now(),
      ...newOrder,
      total: Number(newOrder.total),
      status: "Pending",
    };
    setOrders([...orders, newEntry]);
    setNewOrder({ customer: "", items: "", total: "" });
  };

  // Remove Order
  const removeOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  // Filtered Orders
  const filteredOrders = orders.filter((order) =>
    filter === "All" ? true : order.status === filter
  );

  // Calculate Total Revenue
  const totalRevenue = orders.reduce(
    (sum, order) => (order.status === "Completed" ? sum + order.total : sum),
    0
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Manage Orders</h1>

      {/* Filter Orders */}
      <div className="flex gap-2 mb-4">
        {["All", "Pending", "Completed", "Canceled"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 hover:cursor-pointer rounded ${filter === status ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="bg-white shadow p-4 rounded-lg">
        {filteredOrders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          <div>
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 items-center font-semibold text-lg border-b pb-2">
              <span>Customer</span>
              <span>Items</span>
              <span>Total</span>
              <span>Status</span>
              <span>Action</span>
            </div>
            {/* Orders */}
            {filteredOrders.map((order) => (
              <div
                key={order.id}
                className={`grid grid-cols-5 gap-4 items-center py-2 ${order.status === "Pending" ? "bg-yellow-100" : ""
                  } border-b`}
              >
                <span>{order.customer}</span>
                <span>{order.items}</span>
                <span>₹{order.total}</span>
                <select
                  className="border rounded p-1"
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                  <option value="Canceled">Canceled</option>
                </select>
                <button
                  className="bg-red-500 hover:cursor-pointer text-white px-3 py-1 rounded text-sm"
                  onClick={() => removeOrder(order.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total Revenue */}
      <div className="text-right mt-4 text-lg font-semibold">
        Total Revenue: ₹{totalRevenue}
      </div>

      {/* Add New Order */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Add New Order</h2>
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Customer Name"
            className="border p-2 rounded"
            value={newOrder.customer}
            onChange={(e) =>
              setNewOrder({ ...newOrder, customer: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Items (comma separated)"
            className="border p-2 rounded"
            value={newOrder.items}
            onChange={(e) =>
              setNewOrder({ ...newOrder, items: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Total Price"
            className="border p-2 rounded"
            value={newOrder.total}
            onChange={(e) =>
              setNewOrder({ ...newOrder, total: e.target.value })
            }
          />
        </div>
        <button
          className="mt-3 hover:cursor-pointer hover:opacity-90 bg-blue-600 text-white px-4 py-2 rounded w-full"
          onClick={addOrder}
        >
          Add Order
        </button>
      </div>
    </div>
  );
}
