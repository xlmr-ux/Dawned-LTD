const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  supplierId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  productSupplied: { type: String, required: true },
  dateOfSupply: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Supplier", supplierSchema);