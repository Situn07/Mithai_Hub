import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState } from "react";
import api from "@/services/api";

export default function AddProductDialog({
  open,
  onClose,
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
        await api.post(
          "/products",
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

        setFormData({
          name: "",
          image: "",
          description: "",

          price250: "",
          price500: "",
          price1000: "",
        });
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-lg">

        <DialogHeader>

          <DialogTitle>
            Add Product
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
            placeholder="Product Name"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            className="w-full border rounded-xl p-3"
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={
              formData.image
            }
            onChange={
              handleChange
            }
            className="w-full border rounded-xl p-3"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
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
              required
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
              required
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
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-rose-500 text-white py-3 rounded-xl"
          >
            Add Product
          </button>

        </form>

      </DialogContent>
    </Dialog>
  );
}