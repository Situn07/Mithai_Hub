import { useEffect, useState } from "react";

import api from "@/services/api";

import OrderDetailsDialog from "./OrderDetailsDialog";

export default function OrdersManagement() {
  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedOrder,
    setSelectedOrder] =
    useState(null);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders =
    async () => {
      try {
        const response =
          await api.get("/orders");

        setOrders(
          response.data.orders
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  const handleDelete =
    async (orderId) => {
      const confirmDelete =
        window.confirm(
          "Delete this order?"
        );

      if (!confirmDelete)
        return;

      try {
        await api.delete(
          `/orders/${orderId}`
        );

        fetchOrders();
      } catch (error) {
        console.log(error);

        alert(
          "Failed to delete order"
        );
      }
    };

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-8">
        Loading Orders...
      </div>
    );
  }

  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Recent Orders
      </h2>

      <div className="bg-white rounded-3xl border overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-slate-100">

                <th className="text-left p-4">
                  Token
                </th>

                <th className="text-left p-4">
                  Date
                </th>

                <th className="text-left p-4">
                  Time
                </th>

                <th className="text-left p-4">
                  Items
                </th>

                <th className="text-left p-4">
                  Total
                </th>

                <th className="text-left p-4">
                  Status
                </th>

                <th className="text-left p-4">
                  View
                </th>

                <th className="text-left p-4">
                  Delete
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map(
                (order) => (
                  <tr
                    key={order._id}
                    className="border-t"
                  >

                    <td className="p-4 font-bold text-orange-600">
                      #
                      {
                        order.tokenNumber
                      }
                    </td>

                    <td className="p-4">
                      {new Date(
                        order.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4">
                      {new Date(
                        order.createdAt
                      ).toLocaleTimeString()}
                    </td>

                    <td className="p-4">
                      {
                        order.items
                          ?.length
                      }{" "}
                      Items
                    </td>

                    <td className="p-4">
                      ₹
                      {
                        order.total
                      }
                    </td>

                    <td className="p-4">

                      <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm">
                        {
                          order.status
                        }
                      </span>

                    </td>

                    <td className="p-4">

                      <button
                        onClick={() => {
                          setSelectedOrder(
                            order
                          );

                          setOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white hover:opacity-90"
                      >
                        View
                      </button>

                    </td>

                    <td className="p-4">

                      <button
                        onClick={() =>
                          handleDelete(
                            order._id
                          )
                        }
                        className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

      <OrderDetailsDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        order={
          selectedOrder
        }
      />

    </div>
  );
}