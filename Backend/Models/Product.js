const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  productImage: { type: String, required: true },
  description: { type: String },
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier" },
});

module.exports = mongoose.model("Product", productSchema);