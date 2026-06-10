import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useEffect } from "react";

import api from "@/services/api";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const productSchema = z.object({
  name: z.string().min(2, "Product name is required"),

  image: z.string().url("Enter valid image URL"),

  description: z.string().optional(),

  price250: z.coerce.number().min(1, "Required"),

  price500: z.coerce.number().min(1, "Required"),

  price1000: z.coerce.number().min(1, "Required"),
});

export default function EditProductDialog({
  open,
  onClose,
  product,
  onSuccess,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    if (product) {
      reset({
        name: product.name || "",

        image: product.image || "",

        description: product.description || "",

        price250:
          product.weightOptions?.find((w) => w.weight === "250gm")?.price || "",

        price500:
          product.weightOptions?.find((w) => w.weight === "500gm")?.price || "",

        price1000:
          product.weightOptions?.find((w) => w.weight === "1kg")?.price || "",
      });
    }
  }, [product, reset]);

  const onSubmit = async (data) => {
    try {
      await api.put(`/products/${product._id}`, {
        name: data.name,

        image: data.image,

        description: data.description,

        weightOptions: [
          {
            weight: "250gm",
            price: data.price250,
          },

          {
            weight: "500gm",
            price: data.price500,
          },

          {
            weight: "1kg",
            price: data.price1000,
          },
        ],
      });

      onSuccess();

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              {...register("name")}
              className="w-full border rounded-xl p-3"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              {...register("image")}
              className="w-full border rounded-xl p-3"
            />

            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          <textarea
            {...register("description")}
            className="w-full border rounded-xl p-3"
          />

          <div className="grid grid-cols-3 gap-3">
            <div>
              <input
                type="number"
                placeholder="250gm"
                {...register("price250")}
                className="border rounded-xl p-3 w-full"
              />

              {errors.price250 && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.price250.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                placeholder="500gm"
                {...register("price500")}
                className="border rounded-xl p-3 w-full"
              />

              {errors.price500 && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.price500.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="number"
                placeholder="1kg"
                {...register("price1000")}
                className="border rounded-xl p-3 w-full"
              />

              {errors.price1000 && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.price1000.message}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-orange-500 to-rose-500 text-white py-3 rounded-xl"
          >
            Update Product
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
