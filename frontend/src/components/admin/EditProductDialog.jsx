import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";

import api from "@/services/api";

export default function EditProductDialog({
  open,
  onClose,
  product,
  onSuccess,
}) {
  const [formData, setFormData] =
    useState({
      name: "",
      image: "",
      description: "",

      price250: "",
      price500: "",
      price1000: "",
    });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        image: product.image || "",
        description:
          product.description || "",

        price250:
          product.weightOptions?.find(
            (w) =>
              w.weight === "250gm"
          )?.price || "",

        price500:
          product.weightOptions?.find(
            (w) =>
              w.weight === "500gm"
          )?.price || "",

        price1000:
          product.weightOptions?.find(
            (w) =>
              w.weight === "1kg"
          )?.price || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        await api.put(
          `/products/${product._id}`,
          {
            name: formData.name,

            image:
              formData.image,

            description:
              formData.description,

            weightOptions: [
              {
                weight:
                  "250gm",
                price:
                  Number(
                    formData.price250
                  ),
              },

              {
                weight:
                  "500gm",
                price:
                  Number(
                    formData.price500
                  ),
              },

              {
                weight:
                  "1kg",
                price:
                  Number(
                    formData.price1000
                  ),
              },
            ],
          }
        );

        onSuccess();

        onClose();
      } catch (error) {
        console.log(error);
      }
    };

  if (!product) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-lg">

        <DialogHeader>

          <DialogTitle>
            Edit Product
          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="w-full border rounded-xl p-3"
          />

          <input
            type="text"
            name="image"
            value={
              formData.image
            }
            onChange={
              handleChange
            }
            className="w-full border rounded-xl p-3"
          />

          <textarea
            name="description"
            value={
              formData.description
            }
            onChange={
              handleChange
            }
            className="w-full border rounded-xl p-3"
          />

          <div className="grid grid-cols-3 gap-3">

            <input
              type="number"
              name="price250"
              placeholder="250gm"
              value={
                formData.price250
              }
              onChange={
                handleChange
              }
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              name="price500"
              placeholder="500gm"
              value={
                formData.price500
              }
              onChange={
                handleChange
              }
              className="border rounded-xl p-3"
            />

            <input
              type="number"
              name="price1000"
              placeholder="1kg"
              value={
                formData.price1000
              }
              onChange={
                handleChange
              }
              className="border rounded-xl p-3"
            />

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