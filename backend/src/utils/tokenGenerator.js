import Order from "../models/Order.js";

export const generateToken = async () => {
  const today = new Date();

  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const endOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59,
  );

  const todayOrders = await Order.find({
    createdAt: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  });

  const dayNumber = today.getDate();

  return dayNumber * 100 + (todayOrders.length + 1);
};
