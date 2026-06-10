import { useEffect, useState } from "react";
import api from "@/services/api";

export interface WeightOption {
  weight: string;
  price: number;
}

export interface Product {
  _id: string;
  name: string;
  image: string;
  description?: string;
  weightOptions: WeightOption[];
}

interface ProductsResponse {
  products: Product[];
}

export default function useProducts() {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState<boolean>(true);

  const [error, setError] =
    useState<unknown>(null);

  const fetchProducts =
    async (): Promise<void> => {
      try {
        setLoading(true);

        const response =
          await api.get<ProductsResponse>(
            "/products"
          );

        setProducts(
          response.data.products
        );
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