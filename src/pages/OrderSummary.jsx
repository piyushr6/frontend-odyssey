import { useLocation } from "react-router-dom";

const OrderSummary = () => {
   const location = useLocation();
   const { cartItems } = location.state || { cartItems: [] }; // Get cart data passed via state

   const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

   return (
      <div className="p-8">
         <h1 className="text-3xl font-bold mb-6">Order Summary</h1>
         <div className="space-y-4">
            {cartItems.length > 0 ? (
               cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                     <span className="font-semibold">{item.name}</span>
                     <span>
                        ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                     </span>
                  </div>
               ))
            ) : (
               <p>Your cart is empty!</p>
            )}
         </div>

         <div className="mt-6 flex justify-between items-center font-semibold text-xl">
            <span>Total:</span>
            <span>₹{totalAmount}</span>
         </div>
      </div>
   );
};

export default OrderSummary;
