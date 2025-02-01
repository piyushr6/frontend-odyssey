import React, { useState, useEffect } from 'react';

export default function PastOrdersPage() {
   const [orders, setOrders] = useState([]);

   // useEffect(() => {
   //    // Fetch orders for the student (replace with real API)
   //    const fetchOrders = async () => {
   //       const response = await fetch('/api/orders');
   //       const data = await response.json();
   //       setOrders(data.orders);
   //    };

   //    fetchOrders();
   // }, []);

   return (
      <div>
         <h2>Past Orders</h2>
         <div>
            {orders.length === 0 ? (
               <p>No past orders to show.</p>
            ) : (
               <ul>
                  {orders.map((order, index) => (
                     <li key={index}>
                        <p><strong>Date:</strong> {order.date}</p>
                        <p><strong>Time:</strong> {order.time}</p>
                        <p><strong>Amount:</strong> ${order.amount}</p>
                        <p><strong>Items:</strong> {order.items.join(', ')}</p>
                     </li>
                  ))}
               </ul>
            )}
         </div>
      </div>
   );
}
