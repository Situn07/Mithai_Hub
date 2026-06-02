import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "@/services/api";

import OrderCard from "@/components/packing/OrderCard";

export default function Packing() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/login");
  };

  const fetchOrders = async () => {
    try {
      const response = await api.get("/orders");

      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await api.patch(`/orders/${orderId}/status`, {
        status: newStatus,
      });

      fetchOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const newOrders = orders.filter((order) => order.status === "NEW");

  const packingOrders = orders.filter((order) => order.status === "PACKING");

  const readyOrders = orders.filter((order) => order.status === "READY");

  const deliveredOrders = orders.filter(
    (order) => order.status === "DELIVERED",
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}

      <div className="sticky top-0 z-40 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-orange-600">
              Packing Queue
            </h1>

            <p className="text-slate-500">Manage sweet orders</p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 border px-4 py-2 rounded-xl hover:bg-slate-100"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main */}

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid gap-6 xl:grid-cols-4">
          <StatusColumn
            title="NEW"
            color="bg-blue-100 text-blue-600"
            orders={newOrders}
            buttonText="Start Packing"
            nextStatus="PACKING"
            updateOrderStatus={updateOrderStatus}
          />

          <StatusColumn
            title="PACKING"
            color="bg-amber-100 text-amber-600"
            orders={packingOrders}
            buttonText="Mark Ready"
            nextStatus="READY"
            updateOrderStatus={updateOrderStatus}
          />

          <StatusColumn
            title="READY"
            color="bg-green-100 text-green-600"
            orders={readyOrders}
            buttonText="Delivered"
            nextStatus="DELIVERED"
            updateOrderStatus={updateOrderStatus}
          />

          <StatusColumn
            title="DELIVERED"
            color="bg-slate-100 text-slate-600"
            orders={deliveredOrders}
          />
        </div>
      </div>
    </div>
  );
}

function StatusColumn({
  title,
  orders,
  color,
  buttonText,
  nextStatus,
  updateOrderStatus,
}) {
  return (
    <div className="bg-white rounded-3xl border shadow-sm p-4 h-[80vh] flex flex-col">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-lg">{title}</h2>

        <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
          {orders.length}
        </span>
      </div>

      <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
        {orders.length === 0 && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-3">📦</div>

              <p className="text-slate-400">No Orders Yet</p>
            </div>
          </div>
        )}

        {orders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
            buttonText={buttonText}
            nextStatus={nextStatus}
            updateOrderStatus={updateOrderStatus}
          />
        ))}
      </div>
    </div>
  );
}
