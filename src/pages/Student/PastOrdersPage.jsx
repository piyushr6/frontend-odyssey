import React, { useState, useEffect } from 'react';

const menuItems = [
   { id: 1, name: "Veg Thali", price: 120 },
   { id: 2, name: "Chole Bhature", price: 100 },
   { id: 3, name: "Aloo Paratha", price: 80 },
   { id: 4, name: "Dosa", price: 90 },
   { id: 5, name: "Masala Chai", price: 40 },
   { id: 6, name: "Samosa", price: 30 },
   { id: 7, name: "Veg Biryani", price: 200 },
   { id: 8, name: "Pav Bhaji", price: 100 },
];

export default function PastOrdersPage() {
   const [orders, setOrders] = useState([
      {
         id: Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000, // Random ID between 20000 and 30000
         date: '2025-01-05',
         time: '12:30 PM',
         items: [
            { id: 1, name: "Veg Thali", quantity: 2 },
            { id: 5, name: "Masala Chai", quantity: 1 }
         ]
      },
      {
         id: Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000, // Random ID between 20000 and 30000
         date: '2025-01-10',
         time: '1:15 PM',
         items: [
            { id: 3, name: "Aloo Paratha", quantity: 1 },
            { id: 7, name: "Veg Biryani", quantity: 1 }
         ]
      },
      {
         id: Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000, // Random ID between 20000 and 30000
         date: '2025-01-12',
         time: '10:00 AM',
         items: [
            { id: 2, name: "Chole Bhature", quantity: 2 },
            { id: 6, name: "Samosa", quantity: 3 }
         ]
      },
      {
         id: Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000, // Random ID between 20000 and 30000
         date: '2025-01-14',
         time: '6:30 PM',
         items: [
            { id: 4, name: "Dosa", quantity: 2 },
            { id: 5, name: "Masala Chai", quantity: 1 }
         ]
      },
      {
         id: Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000, // Random ID between 20000 and 30000
         date: '2025-01-18',
         time: '2:45 PM',
         items: [
            { id: 8, name: "Pav Bhaji", quantity: 1 },
            { id: 7, name: "Veg Biryani", quantity: 1 }
         ]
      },
      {
         id: Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000, // Random ID between 20000 and 30000
         date: '2025-01-20',
         time: '4:00 PM',
         items: [
            { id: 3, name: "Aloo Paratha", quantity: 2 },
            { id: 6, name: "Samosa", quantity: 1 }
         ]
      },
      {
         id: Math.floor(Math.random() * (30000 - 20000 + 1)) + 20000, // Random ID between 20000 and 30000
         date: '2025-01-22',
         time: '12:30 PM',
         items: [
            { id: 1, name: "Veg Thali", quantity: 3 },
            { id: 4, name: "Dosa", quantity: 1 }
         ]
      }
   ]);

   const getTotalPrice = (orderItems) => {
      return orderItems.reduce((total, item) => {
         const menuItem = menuItems.find(menuItem => menuItem.id === item.id);
         return total + (menuItem.price * item.quantity);
      }, 0);
   };

   return (
      <div className="p-6">
         <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Past Orders</h2>

         <div>
            {orders.length === 0 ? (
               <p>No past orders to show.</p>
            ) : (
               <div>
                  {orders.map((order) => (
                     <div key={order.id} className="mb-8 p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Order ID: {order.id}</h3>
                        <p className="text-gray-600 mb-2"><strong>Date:</strong> {order.date}</p>
                        <p className="text-gray-600 mb-2"><strong>Time:</strong> {order.time}</p>
                        <div>
                           <h4 className="font-semibold text-gray-800 mb-2">Items:</h4>
                           <ul className="space-y-4">
                              {order.items.map((orderItem, index) => {
                                 const menuItem = menuItems.find(item => item.id === orderItem.id);
                                 return (
                                    <li key={index} className="flex items-center space-x-4">
                                       <div className="flex-grow">
                                          <p className="font-semibold">{menuItem.name}</p>
                                          <p className="text-sm text-gray-600">Quantity: {orderItem.quantity}</p>
                                       </div>
                                       <p className="text-lg font-semibold text-gray-800">₹{menuItem.price * orderItem.quantity}</p>
                                    </li>
                                 );
                              })}
                           </ul>
                        </div>
                        <div className="mt-4">
                           <h4 className="font-semibold text-gray-800 text-2xl">Total Amount: ₹{getTotalPrice(order.items)}</h4>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}