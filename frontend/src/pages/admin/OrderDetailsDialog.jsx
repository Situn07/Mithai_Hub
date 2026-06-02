import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function OrderDetailsDialog({
  open,
  onClose,
  order,
}) {
  if (!order) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-2xl">

        <DialogHeader>

          <DialogTitle>
            Order Details
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4">

          <div>

            <h3 className="font-bold text-orange-600">
              Token #
              {order.tokenNumber}
            </h3>

            <p className="text-slate-500">
              Status:
              {" "}
              {order.status}
            </p>

          </div>

          <div className="space-y-3">

            {order.items?.map(
              (item, index) => (
                <div
                  key={index}
                  className="flex gap-4 border rounded-xl p-3"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />

                  <div>

                    <h4 className="font-semibold">
                      {item.name}
                    </h4>

                    <p>
                      {item.weight}
                    </p>

                    <p>
                      Qty:
                      {" "}
                      {item.quantity}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

          <div className="border-t pt-4 flex justify-between">

            <span className="font-semibold">
              Total
            </span>

            <span className="font-bold text-orange-600">
              ₹{order.total}
            </span>

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}