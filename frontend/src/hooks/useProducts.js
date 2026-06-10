import { useEffect, useState } from "react";
import api from "@/services/api";

export default function useProducts() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await api.get("/products");

      setProducts(response.data.products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
}
