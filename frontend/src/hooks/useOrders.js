import { useEffect, useState } from "react";
import api from "@/services/api";

export default function useOrders() {
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      setLoading(true);

      const response = await api.get("/orders");

      setOrders(response.data.orders);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId) => {
    await api.delete(`/orders/${orderId}`);

    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    orders,
    loading,
    error,
    refetch: fetchOrders,
    deleteOrder,
  };
}
