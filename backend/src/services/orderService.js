import Order from "../models/Order.js";
import { generateToken } from "../utils/tokenGenerator.js";

export const createOrderService = async (items, total) => {
  const tokenNumber = await generateToken();

  const order = await Order.create({
    tokenNumber,
    items,
    total,
    status: "NEW",
  });

  return {
    tokenNumber,
    order,
  };
};

export const getOrdersService = async () => {
  return await Order.find().sort({
    createdAt: -1,
  });
};

export const updateOrderStatusService = async (id, status) => {
  return await Order.findByIdAndUpdate(id, { status }, { new: true });
};

export const deleteOrderService = async (id) => {
  return await Order.findByIdAndDelete(id);
};
