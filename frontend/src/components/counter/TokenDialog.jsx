import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export default function TokenDialog({
  open,
  token,
  onClose,
}) {
  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>

        <div className="text-center py-6">

          <div className="text-6xl mb-4">
            🎉
          </div>

          <h2 className="text-2xl font-bold">
            Order Placed Successfully
          </h2>

          <p className="mt-4 text-slate-500">
            Your Token Number
          </p>

          <div className="text-6xl font-bold text-orange-600 mt-4">
            #{token}
          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}