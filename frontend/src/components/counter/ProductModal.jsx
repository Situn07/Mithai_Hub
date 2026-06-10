import { Dialog, DialogContent } from "@/components/ui/dialog";

import useCartStore from "@/store/cartStore";

import { useState, useEffect } from "react";

export default function ProductModal({ open, onClose, product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const [weight, setWeight] = useState(null);

  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (product) {
      setWeight(product.weightOptions?.[0]);

      setQty(1);
    }
  }, [product]);

  if (!product) return null;

  const total = (weight?.price || 0) * qty;

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      productId: product._id,

      name: product.name,

      image: product.image,

      weight: weight.weight,

      price: weight.price,

      quantity: qty,

      total,
    });

    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg rounded-3xl">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full rounded-xl object-cover"
        />

        <h2 className="text-2xl font-bold">{product.name}</h2>

        {product.description && (
          <p className="text-slate-500">{product.description}</p>
        )}

        <div>
          <h3 className="font-medium mb-3">Select Weight</h3>

          <div className="flex flex-wrap gap-2">
            {product.weightOptions?.map((item) => (
              <button
                key={item.weight}
                onClick={() => setWeight(item)}
                className={`px-4 py-2 rounded-full border transition ${
                  weight?.weight === item.weight
                    ? "bg-orange-500 text-white border-orange-500"
                    : "hover:border-orange-500"
                }`}
              >
                {item.weight}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Quantity</h3>

          <div className="flex items-center gap-4">
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="h-10 w-10 rounded-full border text-lg font-bold"
            >
              -
            </button>

            <span className="font-bold text-xl">{qty}</span>

            <button
              onClick={() => setQty(qty + 1)}
              className="h-10 w-10 rounded-full border text-lg font-bold"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <span className="font-medium text-lg">Total</span>

          <span className="text-2xl font-bold text-orange-600">₹{total}</span>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold"
        >
          Add To Cart
        </button>
      </DialogContent>
    </Dialog>
  );
}
