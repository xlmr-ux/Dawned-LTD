const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: "Supplier", required: true },
  totalItemsSupplied: { type: Number, required: true },
  totalAmountDue: { type: Number, required: true },
  invoiceDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Invoice", invoiceSchema);