import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      localStorage.setItem("role", role);
      if (role === "mess staff") {
        navigate("/staff-dashboard");
      } else if (role === "student") {
        navigate("/student-dashboard");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-400 cursor-pointer"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-400 cursor-pointer"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">Role</label>
            <select
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-400 cursor-pointer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student / College Staff</option>
              <option value="mess staff">Mess Staff</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
