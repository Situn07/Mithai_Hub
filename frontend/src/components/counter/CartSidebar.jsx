import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";

import api from "@/services/api";

import { useCart } from "@/context/CartContext";


import TokenDialog from "./TokenDialog";

export default function CartSidebar({
  open,
  onClose,
}) {
  const {
    cartItems,
    removeItem,
    total,
    clearCart,
  } = useCart();



  const [tokenOpen, setTokenOpen] =
    useState(false);

  const [token, setToken] =
    useState(null);

  const handlePlaceOrder =
  async () => {
    try {
      if (
        cartItems.length === 0
      )
        return;

      const payload = {
        items: cartItems,
        total,
      };

      const response =
        await api.post(
          "/orders",
          payload
        );

      const generatedToken =
        response.data.tokenNumber;

      setToken(
        generatedToken
      );

      setTokenOpen(true);

      clearCart();

      onClose();
    } catch (error) {
      console.log(error);

      alert(
        "Failed to place order"
      );
    }
  };

  return (
    <>
      <Sheet
        open={open}
        onOpenChange={onClose}
      >
        <SheetContent className="w-full sm:max-w-md">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              Your Cart
            </h2>

            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              {cartItems.length} Items
            </span>

          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[70vh]">

              <ShoppingCart className="h-20 w-20 text-gray-300" />

              <h3 className="mt-4 text-lg font-semibold">
                Cart is Empty
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                Add some sweets to continue
              </p>

            </div>
          ) : (
            <>
              <div className="space-y-4 overflow-y-auto max-h-[60vh] pr-2">

                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 rounded-2xl border bg-slate-50 p-3 hover:shadow-md transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        {item.weight}
                      </p>

                      <div className="flex justify-between mt-2">

                        <span className="text-sm">
                          Qty: {item.quantity}
                        </span>

                        <span className="font-bold text-orange-600">
                          ₹{item.total}
                        </span>

                      </div>

                    </div>

                    <button
                      onClick={() =>
                        removeItem(index)
                      }
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-orange-50 p-4 border">

                <div className="flex justify-between items-center">

                  <span className="font-medium">
                    Total Amount
                  </span>

                  <span className="text-2xl font-bold text-orange-600">
                    ₹{total}
                  </span>

                </div>

                <button
                  onClick={handlePlaceOrder}
                  className="w-full mt-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  Place Order
                </button>

              </div>
            </>
          )}

        </SheetContent>
      </Sheet>

      <TokenDialog
        open={tokenOpen}
        token={token}
        onClose={() =>
          setTokenOpen(false)
        }
      />
    </>
  );
}