import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "@/services/api";

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/auth/login", {
        username,
        password,
      });

      const user = response.data.user;

      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "ADMIN") {
        navigate("/admin");
      }

      if (user.role === "PACKAGING") {
        navigate("/packing");
      }
    } catch (error) {
      alert("Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-rose-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-orange-100 p-8">
        {/* Logo */}

        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-600">MithaiHub</h1>

          <p className="text-slate-500 mt-2">Admin & Packaging Portal</p>
        </div>

        {/* Login Form */}

        <form onSubmit={handleLogin} className="space-y-4 mt-8">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-orange-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        {/* Divider */}

        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-slate-200 flex-1"></div>

          <span className="text-xs text-slate-400">CUSTOMER ACCESS</span>

          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        {/* Customer Button */}

        <button
          onClick={() => navigate("/")}
          className="w-full border border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-600 py-3 rounded-xl font-semibold transition"
        >
          Explore Sweet Collection
        </button>
      </div>
    </div>
  );
}
