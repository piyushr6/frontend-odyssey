import { useState } from "react";
import FoodCard from "../components/FoodCard"; // Assuming FoodCard is a separate component
import { Link } from "react-router-dom"; // For navigation

import vegThali from "../assets/veg-thali.jpg";
import choleBhature from "../assets/chole-bhature.jpg";
import alooParatha from "../assets/aloo-paratha.jpg";
import dosa from "../assets/dosa.jpg";
import masalaChai from "../assets/chai.jpg";
import samosa from "../assets/samosa.jpg";
import vegBiryani from "../assets/veg-biryani.jpg";
import pavBhaji from "../assets/pav-bhaji.jpg";

const OrderMenu = () => {
   const [cart, setCart] = useState([]);

   // Sample Indian food data with updated prices and stock images
   const foods = [
      { id: 1, name: "Veg Thali", price: 120, image: vegThali },
      { id: 2, name: "Chole Bhature", price: 100, image: choleBhature },
      { id: 3, name: "Aloo Paratha", price: 80, image: alooParatha },
      { id: 4, name: "Dosa", price: 90, image: dosa },
      { id: 5, name: "Masala Chai", price: 40, image: masalaChai },
      { id: 6, name: "Samosa", price: 30, image: samosa },
      { id: 7, name: "Veg Biryani", price: 200, image: vegBiryani },
      { id: 8, name: "Pav Bhaji", price: 100, image: pavBhaji },
   ];

   const handleAddToCart = (food) => {
      setCart((prevCart) => {
         const existingItem = prevCart.find((item) => item.id === food.id);
         if (existingItem) {
            return prevCart.map((item) =>
               item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
            );
         } else {
            return [...prevCart, { ...food, quantity: 1 }];
         }
      });
   };

   return (
      <div className="p-8">
         <h1 className="text-3xl font-bold mb-6">Menu</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {foods.map((food) => (
               <FoodCard
                  key={food.id}
                  image={food.image}
                  name={food.name}
                  price={food.price}
                  onAddToCart={handleAddToCart}
               />
            ))}
         </div>

         <div className="mt-8">
            <button
               onClick={() => alert("Order placed successfully!")}
               className="px-6 py-3 bg-orange-600 text-white text-2xl font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300 cursor-pointer"
            >
               Order Now
            </button>
         </div>
      </div>
   );
};

export default OrderMenu;