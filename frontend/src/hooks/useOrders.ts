import { useEffect, useState } from "react";

import api from "@/services/api";

export interface OrderItem {
  productId: string;

  name: string;

  image: string;

  weight: string;

  quantity: number;

  price: number;

  total: number;
}

export interface Order {
  _id: string;

  tokenNumber: number;

  items: OrderItem[];

  total: number;

  status: string;

  createdAt: string;
}

interface OrdersResponse {
  orders: Order[];
}

export default function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<unknown>(null);

  const fetchOrders = async (): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.get<OrdersResponse>("/orders");

      setOrders(response.data.orders);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteOrder = async (orderId: string): Promise<void> => {
    await api.delete(`/orders/${orderId}`);

    await fetchOrders();
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
