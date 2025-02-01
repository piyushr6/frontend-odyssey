import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FoodCard = ({ image, name, price }) => {
   const [quantity, setQuantity] = useState(0);

   const increaseQuantity = () => setQuantity(quantity + 1);
   const decreaseQuantity = () => {
      if (quantity >= 1) setQuantity(quantity - 1);
   };

   return (
      <div className="w-80 p-4 shadow-lg rounded-2xl bg-white">
         <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
         <div>
            <h2 className="text-lg font-semibold mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">Price: ₹{price}</p>
            <div className="flex items-center gap-4">
               <button
                  className="p-2 border border-gray-300 rounded-full"
                  onClick={decreaseQuantity}
               >
                  <Minus className="w-4 h-4" />
               </button>
               <span className="text-lg font-semibold">{quantity}</span>
               <button
                  className="p-2 border border-gray-300 rounded-full"
                  onClick={increaseQuantity}
               >
                  <Plus className="w-4 h-4" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;
