import React from "react";
import heroImg from "../assets/landing-img.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <section className="relative flex flex-col items-center justify-center text-center text-white min-h-[90vh] bg-cover bg-center">
        {/* Darkened Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm">
          <img
            src={heroImg}
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto p-6 rounded-lg">
          <h1 className="text-5xl font-bold mb-4 text-secondary drop-shadow-lg">
            Welcome to the College Mess & Canteen
          </h1>
          <p className="text-lg mb-6 drop-shadow-md">
            Order food, track your expenses, and manage your meals effortlessly.
          </p>
          <button className="bg-primary text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-[#b01500] transition">
            Order Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-background">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Why Choose Us?</h2>
          <p className="text-lg text-text max-w-xl mx-auto mt-3">
            We make meal ordering and management easy for students, staff, and
            mess staff.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "For Students & Staff",
              features: [
                "Browse Menu",
                "Order Food",
                "Track Expenses",
                "View Meal Schedule",
              ],
            },
            {
              title: "For Mess Staff",
              features: ["Manage Orders", "Update Menus", "Monitor Stock"],
            },
            {
              title: "Convenience & Savings",
              features: [
                "Easy Online Payments",
                "Real-time Order Updates",
                "Affordable Meal Plans",
              ],
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg rounded-xl text-center border border-secondary"
            >
              <h3 className="text-2xl font-semibold text-primary mb-4">
                {card.title}
              </h3>
              <ul className="space-y-3 text-text">
                {card.features.map((feature, i) => (
                  <li key={i} className="text-lg">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Meal Schedule Section */}
      <section className="py-20 bg-secondary text-text text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">
          Today's Meal Schedule
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { time: "Breakfast", hours: "7:00 AM - 9:00 AM" },
            { time: "Lunch", hours: "12:00 PM - 2:00 PM" },
            { time: "Dinner", hours: "6:00 PM - 8:00 PM" },
          ].map((meal, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border border-primary"
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {meal.time}
              </h3>
              <p className="text-lg">{meal.hours}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text text-background py-8 text-center">
        <p className="text-lg">
          &copy; 2025 College Mess & Canteen. All rights reserved.
        </p>
        <p className="text-sm mt-2">Contact Us: support@collegecanteen.com</p>
      </footer>
    </div>
  );
}

export default Home;
