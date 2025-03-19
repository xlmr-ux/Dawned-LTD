const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ["credit_card", "cash_on_delivery"], required: true },
  shippingInfo: { type: String, required: true },
  status: { type: String, enum: ["pending", "delivered"], default: "pending" },
});

module.exports = mongoose.model("Order", orderSchema);