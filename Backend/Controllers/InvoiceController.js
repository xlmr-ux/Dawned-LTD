const Invoice = require("../models/Invoice");

// Generate invoice for a supplier
exports.generateInvoice = async (req, res) => {
  const { supplierId, totalItemsSupplied, totalAmountDue } = req.body;
  try {
    const invoice = new Invoice({ supplierId, totalItemsSupplied, totalAmountDue });
    await invoice.save();
    res.status(201).json({ message: "Invoice generated successfully", invoice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all invoices
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find().populate("supplierId");
    res.status(200).json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};