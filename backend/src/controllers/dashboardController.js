import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();

    const totalProducts = await Product.countDocuments();

    const deliveredOrders = await Order.countDocuments({
      status: "DELIVERED",
    });

    const pendingOrders = await Order.countDocuments({
      status: {
        $in: ["NEW", "PACKING", "READY"],
      },
    });

    const revenueResult = await Order.aggregate([
      {
        $match: {
          status: "DELIVERED",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$total",
          },
        },
      },
    ]);

    const revenue = revenueResult[0]?.totalRevenue || 0;

    const todayStart = new Date();

    todayStart.setHours(0, 0, 0, 0);

    const todayOrders = await Order.countDocuments({
      createdAt: {
        $gte: todayStart,
      },
    });

    res.status(200).json({
      success: true,

      stats: {
        totalOrders,

        todayOrders,

        totalProducts,

        deliveredOrders,

        pendingOrders,

        revenue,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
