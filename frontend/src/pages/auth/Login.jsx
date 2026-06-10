import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import api from "@/services/api";

const loginSchema = z.object({
  username: z.string().min(3, "Username is required"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await api.post("/auth/login", data);

      const user = response.data.user;

      localStorage.setItem("token", response.data.token);

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
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-600">MithaiHub</h1>

          <p className="text-slate-500 mt-2">Admin & Packaging Portal</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
          <div>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
              className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />

            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-linear-to-r from-orange-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-slate-200 flex-1"></div>

          <span className="text-xs text-slate-400">CUSTOMER ACCESS</span>

          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

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
