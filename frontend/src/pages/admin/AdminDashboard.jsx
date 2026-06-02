import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductManagement from "./ProductManagement.jsx";
import OrdersManagement from "./OrdersManagement.jsx";
import {
  Package,
  ShoppingBag,
  IndianRupee,
  ClipboardList,
} from "lucide-react";

import api from "@/services/api";


export default function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const handleLogout = () => {
  localStorage.removeItem(
    "user"
  );

  navigate("/login");
};

  const fetchDashboard =
    async () => {
      try {
        const response =
          await api.get(
            "/dashboard"
          );

        setStats(
          response.data.stats
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">

        <div className="text-center">

          <div className="h-12 w-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-4 text-slate-500">
            Loading Dashboard...
          </p>

        </div>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}

      <div className="sticky top-0 z-40 bg-white border-b">

        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold text-orange-600">
              Admin Dashboard
            </h1>

            <p className="text-slate-500">
              MithaiHub
            </p>

          </div>

          <button
  onClick={handleLogout}
  className="flex items-center gap-2 border px-4 py-2 rounded-xl hover:bg-red-50 hover:border-red-300 transition"
>
  Logout
</button>

        </div>

      </div>

      {/* Stats */}

    {/* Stats */}

<div className="max-w-7xl mx-auto p-6">

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <StatCard
      title="Total Orders"
      value={
        stats?.totalOrders || 0
      }
      icon={
        <ClipboardList />
      }
    />

    <StatCard
      title="Today Orders"
      value={
        stats?.todayOrders || 0
      }
      icon={
        <ShoppingBag />
      }
    />

    <StatCard
      title="Products"
      value={
        stats?.totalProducts || 0
      }
      icon={<Package />}
    />

    <StatCard
      title="Revenue"
      value={`₹${
        stats?.revenue || 0
      }`}
      icon={
        <IndianRupee />
      }
    />

  </div>

  {/* Product Management */}

  <div className="mt-10">

    <ProductManagement />

  </div>
  <div className="mt-10">
  <OrdersManagement />
</div>


</div>

    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="bg-white rounded-3xl border p-6 shadow-sm hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-slate-500 text-sm">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="h-14 w-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center">
          {icon}
        </div>

      </div>

    </div>
  );
}