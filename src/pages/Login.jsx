import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="flex items-center justify-center min-h-screen bg-[var(--color-background)] px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-[var(--color-primary)]">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block font-medium mb-1 text-[var(--color-text)]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-[var(--color-primary)]"
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-[var(--color-text)]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full p-2 border rounded-md focus:ring focus:ring-[var(--color-primary)]"
            />
          </div>

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
              <option value="mess staff">Mess Staff</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-white py-2 rounded-md hover:bg-[#b01500] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
