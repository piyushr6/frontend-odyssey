import React, { useState, useEffect } from "react";

export default function TrackBudgetPage() {
   const [spentThisMonth, setSpentThisMonth] = useState(0);
   const [orders, setOrders] = useState([
      { id: 1, date: "2025-01-05", amount: 200, category: "Snacks" },
      { id: 2, date: "2025-01-10", amount: 150, category: "Beverages" },
      { id: 3, date: "2025-01-15", amount: 300, category: "Lunch" },
      { id: 4, date: "2025-01-20", amount: 250, category: "Snacks" },
      { id: 5, date: "2025-01-22", amount: 100, category: "Beverages" },
   ]);
   const [filteredOrders, setFilteredOrders] = useState(orders);
   const [sortOrder, setSortOrder] = useState("asc");

   // Calculate total spent this month
   useEffect(() => {
      const totalSpent = filteredOrders.reduce((sum, order) => sum + order.amount, 0);
      setSpentThisMonth(totalSpent);
   }, [filteredOrders]);

   // Sort orders
   const handleSort = (order) => {
      setSortOrder(order);
      const sortedOrders = [...filteredOrders].sort((a, b) => {
         return order === "asc" ? a.amount - b.amount : b.amount - a.amount;
      });
      setFilteredOrders(sortedOrders);
   };

   // Filter orders by category
   const handleFilter = (category) => {
      if (category === "All") {
         setFilteredOrders(orders);
      } else {
         const filtered = orders.filter((order) => order.category === category);
         setFilteredOrders(filtered);
      }
   };

   return (
      <div className="p-6">
         <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Track Your Canteen Spending</h2>

         <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800">Amount Spent This Month:</h3>
            <p className="text-4xl font-bold text-indigo-600">₹{spentThisMonth}</p>
         </div>

         {/* Filter and Sort Controls */}
         <div className="mb-8 flex justify-between items-center">
            <div className="flex space-x-4">
               <button
                  className="bg-indigo-600 hover:cursor-pointer text-white py-2 px-4 rounded-lg hover:border hover:border-black"
                  onClick={() => handleFilter("All")}
               >
                  All Categories
               </button>
               <button
                  className="bg-gray-300 hover:cursor-pointer text-gray-800 py-2 px-4 rounded-lg hover:border hover:border-black"
                  onClick={() => handleFilter("Snacks")}
               >
                  Snacks
               </button>
               <button
                  className="bg-gray-300 hover:cursor-pointer text-gray-800 py-2 px-4 rounded-lg hover:border hover:border-black"
                  onClick={() => handleFilter("Beverages")}
               >
                  Beverages
               </button>
               <button
                  className="bg-gray-300 hover:cursor-pointer text-gray-800 py-2 px-4 rounded-lg hover:border hover:border-black"
                  onClick={() => handleFilter("Lunch")}
               >
                  Lunch
               </button>
            </div>
            <div>
               <button
                  className="bg-green-600 hover:cursor-pointer text-white py-2 px-4 rounded-lg hover:opacity-80"
                  onClick={() => handleSort(sortOrder === "asc" ? "desc" : "asc")}
               >
                  Sort by Amount ({sortOrder === "asc" ? "Ascending" : "Descending"})
               </button>
            </div>
         </div>

         {/* Display the Orders */}
         <div className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Orders</h3>
            <table className="min-w-full table-auto">
               <thead className="bg-gray-100">
                  <tr>
                     <th className="py-2 px-4 text-left text-gray-600">Date</th>
                     <th className="py-2 px-4 text-left text-gray-600">Category</th>
                     <th className="py-2 px-4 text-left text-gray-600">Amount</th>
                  </tr>
               </thead>
               <tbody>
                  {filteredOrders.map((order) => (
                     <tr key={order.id} className="border-b hover:bg-gray-50">
                        <td className="py-2 px-4">{order.date}</td>
                        <td className="py-2 px-4">{order.category}</td>
                        <td className="py-2 px-4">₹{order.amount}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>

         {/* Amount of daily meals left on card */}
         <h3 className="text-2xl font-semibold text-gray-800 mt-8">Amount of daily meals left on card: 28</h3>
      </div>
   );
}
