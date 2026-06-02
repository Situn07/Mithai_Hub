import express from "express";

import {
  createOrder,
  getOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.post("/", createOrder);

router.get("/", getOrders);

router.patch("/:id/status", updateOrderStatus);

router.delete("/:id", deleteOrder);

export default router;
