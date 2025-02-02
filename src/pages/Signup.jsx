import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("role", role);
    localStorage.setItem("email", email);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          Sign Up
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium mb-1 text-gray-700">Role</label>
            <select
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-400 cursor-pointer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student / College Staff</option>
              <option value="staff">Mess Staff</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-400 cursor-pointer"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-400 cursor-pointer"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="text-blue-600 hover:underline ml-1 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
