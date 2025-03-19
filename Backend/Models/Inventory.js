const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  totalReceived: { type: Number, required: true },
  totalSold: { type: Number, default: 0 },
  totalAvailable: { type: Number, required: true },
  totalSalesAmount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Inventory", inventorySchema);