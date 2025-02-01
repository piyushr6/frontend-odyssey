const Home = () => (
  <div className="relative w-screen h-[calc(100vh-4rem)]">
    {/* Background Image with Opacity */}
    <img className="w-full h-full object-cover opacity-60" src="./landing-img.jpg" alt="landing" />

    {/* Overlay Text */}
    <div className="absolute top-1/3 left-10 text-white">
      <h1 className="text-7xl font-bold drop-shadow-[2px_2px_4px_black]">Welcome to Bistro SPIT</h1>
    </div>
  </div>

);
export default Home;
