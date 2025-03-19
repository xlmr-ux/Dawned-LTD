const Order = require("../models/Order");

// Place an order
exports.placeOrder = async (req, res) => {
  const { customerId, totalAmount, paymentMethod, shippingInfo } = req.body;
  try {
    const order = new Order({ customerId, totalAmount, paymentMethod, shippingInfo });
    await order.save();
    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("customerId");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};