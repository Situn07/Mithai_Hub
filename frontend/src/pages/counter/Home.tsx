import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Package,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import ProductModal from "@/components/counter/ProductModal";
import CartSidebar from "@/components/counter/CartSidebar";

import useCartStore from "@/store/cartStore";
import useProducts, {
  Product,
} from "@/hooks/useProducts";

export default function Home() {
  const navigate =
    useNavigate();

  const [
    selectedProduct,
    setSelectedProduct,
  ] =
    useState<Product | null>(
      null
    );

  const [cartOpen, setCartOpen] =
    useState<boolean>(false);

  const [search, setSearch] =
    useState<string>("");

  const cartItems =
    useCartStore(
      (state) =>
        state.cartItems
    );

  const {
    products,
    loading,
  } = useProducts();

  const filteredProducts =
    products.filter(
      (product) =>
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
              MithaiHub
            </h1>

            <p className="text-sm text-slate-500">
              Fresh sweets made
              daily
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                navigate(
                  "/login"
                )
              }
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border bg-white hover:bg-orange-50 hover:border-orange-300 transition"
            >
              Admin
            </button>

            <button
              onClick={() =>
                navigate(
                  "/login"
                )
              }
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border bg-white hover:bg-orange-50 hover:border-orange-300 transition"
            >
              <Package
                size={18}
              />
              Packing
            </button>

            <button
              onClick={() =>
                setCartOpen(
                  true
                )
              }
              className="relative group p-2 rounded-xl hover:bg-slate-100 transition"
            >
              <ShoppingCart className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />

              {cartItems.length >
                0 && (
                <span className="absolute -top-1 -right-1 min-w-[22px] h-[22px] px-1 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                  {
                    cartItems.length
                  }
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 pt-8">
        <div className="rounded-3xl bg-gradient-to-r from-orange-500 via-amber-500 to-rose-500 text-white p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold">
            Traditional Indian
            Sweets
          </h2>

          <p className="mt-4 text-base md:text-lg opacity-90 max-w-2xl">
            Discover
            handcrafted
            sweets made with
            premium
            ingredients and
            traditional
            recipes.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3 shadow-sm">
          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search sweets..."
            value={search}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement>
            ) =>
              setSearch(
                e.target.value
              )
            }
            className="w-full outline-none bg-transparent"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Sweets
          </h2>

          <p className="text-slate-500">
            {
              filteredProducts.length
            }{" "}
            Products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-20">
              <h2 className="text-2xl font-bold text-orange-600">
                Loading
                Products...
              </h2>
            </div>
          ) : (
            filteredProducts.map(
              (
                product: Product
              ) => (
                <div
                  key={
                    product._id
                  }
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={
                        product.image
                      }
                      alt={
                        product.name
                      }
                      className="h-56 w-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg">
                      {
                        product.name
                      }
                    </h3>

                    <p className="text-orange-600 font-semibold mt-2">
                      From ₹
                      {
                        product
                          .weightOptions[0]
                          .price
                      }
                    </p>

                    <button
                      onClick={() =>
                        setSelectedProduct(
                          product
                        )
                      }
                      className="mt-4 w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:opacity-90 transition text-white py-3 rounded-xl font-semibold"
                    >
                      Select
                    </button>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </section>

      <ProductModal
        open={
          !!selectedProduct
        }
        product={
          selectedProduct
        }
        onClose={() =>
          setSelectedProduct(
            null
          )
        }
      />

      <CartSidebar
        open={cartOpen}
        onClose={() =>
          setCartOpen(false)
        }
      />
    </div>
  );
}