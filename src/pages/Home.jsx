import { Link } from "react-router-dom"; // Import Link for navigation
import heroImg from "../assets/landing-img.jpg";

const Home = () => (
  <div className="relative w-screen h-screen">
    {/* Background Image with Opacity */}
    <img
      className="absolute inset-0 w-full h-full object-cover opacity-90 z-0"
      src={heroImg}
      alt="landing"
    />

    {/* Overlay Text */}
    <div className="absolute top-1/3 left-10 text-white z-10">
      <h1 className="text-7xl font-bold drop-shadow-[3px_3px_6px_black]">
        Welcome to Bistro SPIT
      </h1>
      <p className="text-3xl mt-2 drop-shadow-[3px_3px_6px_black]">
        Savor the taste of campus life—one delicious meal at a time!
      </p>

      {/* Link to Menu Page */}
      <Link to="/menu">
        <button className="mt-8 px-6 py-3 bg-orange-600 text-white text-2xl font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition-all duration-300 hover: cursor-pointer">
          Order Now
        </button>
      </Link>
    </div>
  </div>
);

export default Home;
