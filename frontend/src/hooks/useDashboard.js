import { useEffect, useState } from "react";
import api from "@/services/api";

export default function useDashboard() {
  const [stats, setStats] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchDashboard = async () => {
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
