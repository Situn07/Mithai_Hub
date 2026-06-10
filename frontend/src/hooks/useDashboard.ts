import { useEffect, useState } from "react";
import api from "@/services/api";

interface DashboardStats {
  totalOrders: number;

  todayOrders: number;

  totalProducts: number;

  revenue: number;
}

export default function useDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<unknown>(null);

  const fetchDashboard = async (): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.get("/dashboard");

      setStats(response.data.stats);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return {
    stats,
    loading,
    error,
    refetch: fetchDashboard,
  };
}
