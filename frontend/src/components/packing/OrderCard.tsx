import { PackageCheck } from "lucide-react";

import {
  Order,
} from "@/hooks/useOrders";

interface OrderCardProps {
  order: Order;

  buttonText?: string;

  nextStatus?: string;

  updateOrderStatus: (
    orderId: string,
    status: string
  ) => void;
}

export default function OrderCard({
  order,
  buttonText,
  nextStatus,
  updateOrderStatus,
}: OrderCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-4 hover:shadow-xl transition">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <p className="text-xs text-slate-500">
            Token
          </p>

          <h3 className="text-2xl font-bold text-orange-600">
            #{order.tokenNumber}
          </h3>

          <p className="text-xs text-slate-500 mt-1">
            {new Date(
              order.createdAt
            ).toLocaleTimeString()}
          </p>

        </div>

        <PackageCheck
          className="text-orange-500"
          size={28}
        />

      </div>

      {/* Products */}

      <div className="mt-4 space-y-3">

        {order.items?.map(
          (item, index) => (
            <div
              key={index}
              className="flex gap-3"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-xl object-cover"
              />

              <div>

                <h4 className="font-semibold">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {item.weight}
                </p>

                <p className="text-sm text-slate-500">
                  Qty: {item.quantity}
                </p>

              </div>

            </div>
          )
        )}

      </div>

      {/* Footer */}

      <div className="mt-4 flex justify-between items-center">

        <span className="font-bold text-lg">
          ₹{order.total}
        </span>

        {nextStatus && (
          <button
            onClick={() =>
              updateOrderStatus(
                order._id,
                nextStatus
              )
            }
            className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
          >
            {buttonText}
          </button>
        )}

      </div>

    </div>
  );
}