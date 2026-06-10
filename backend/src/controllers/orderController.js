import {
  createOrderService,
  getOrdersService,
  updateOrderStatusService,
  deleteOrderService,
} from "../services/orderService.js";

export const createOrder =
  async (req, res) => {
    try {
      const {
        items,
        total,
      } = req.body;

      const result =
        await createOrderService(
          items,
          total
        );

      res.status(201).json({
        success: true,
        tokenNumber:
          result.tokenNumber,
        order: result.order,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const getOrders =
  async (req, res) => {
    try {
      const orders =
        await getOrdersService();

      res.status(200).json({
        success: true,
        orders,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const updateOrderStatus =
  async (req, res) => {
    try {
      const { status } =
        req.body;

      const order =
        await updateOrderStatusService(
          req.params.id,
          status
        );

      if (!order) {
        return res.status(404).json({
          success: false,
          message:
            "Order not found",
        });
      }

      res.status(200).json({
        success: true,
        order,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };

export const deleteOrder =
  async (req, res) => {
    try {
      const order =
        await deleteOrderService(
          req.params.id
        );

      if (!order) {
        return res.status(404).json({
          success: false,
          message:
            "Order not found",
        });
      }

      res.status(200).json({
        success: true,
        message:
          "Order deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };