import { useEffect, useState } from "react";
import AddProductDialog from "@/components/admin/AddProductDialog";
import EditProductDialog from "@/components/admin/EditProductDialog";
import api from "@/services/api";

export default function ProductManagement() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/products/${productId}`);

      fetchProducts();
    } catch (error) {
      console.log(error);

      alert("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center">
        Loading Products...
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Management</h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-5 py-2 rounded-xl hover:opacity-90"
        >
          Add Product
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-3xl border overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-lg">{product.name}</h3>

              <p className="text-orange-600 font-semibold mt-2">
                ₹{product.weightOptions?.[0]?.price}
              </p>

              <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                {product.description}
              </p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => {
                    setSelectedProduct(product);

                    setEditOpen(true);
                  }}
                  className="flex-1 border rounded-xl py-2 hover:bg-slate-100"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="flex-1 bg-red-500 text-white rounded-xl py-2 hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AddProductDialog
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={fetchProducts}
      />

      <EditProductDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        product={selectedProduct}
        onSuccess={fetchProducts}
      />
    </div>
  );
}
