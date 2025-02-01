import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate after sign-up

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the role and other form data in localStorage after successful sign-up
    localStorage.setItem("role", role);
    localStorage.setItem("email", email); // Optionally save email

    // You can replace this with actual sign-up logic (API call, etc.)
    // After successful sign-up, navigate the user to the home page
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--color-background)] px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-[var(--color-primary)]">
          Sign Up
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Role Selection */}
          <div>
            <label className="block font-medium mb-1 text-[var(--color-text)]">
              Role
            </label>
            <select
              className="w-full p-2 border rounded-md focus:ring focus:ring-[var(--color-primary)]"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student / College Staff</option>
              <option value="staff">Mess Staff</option>
            </select>
          </div>

          {/* Email Input */}
          <div>
            <label className="block font-medium mb-1 text-[var(--color-text)]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-[var(--color-primary)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block font-medium mb-1 text-[var(--color-text)]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-[var(--color-primary)]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-white py-2 rounded-md hover:bg-[#b01500] transition"
          >
            Sign Up
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center text-sm mt-4 text-[var(--color-text)]">
          Already have an account?
          <Link
            to="/login"
            className="text-[var(--color-primary)] hover:underline ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
