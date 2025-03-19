const Supplier = require("../models/Supplier");

// Register a new supplier
exports.registerSupplier = async (req, res) => {
  const { supplierId, fullName, address, email, phoneNumber, productSupplied } = req.body;
  try {
    const supplier = new Supplier({ supplierId, fullName, address, email, phoneNumber, productSupplied });
    await supplier.save();
    res.status(201).json({ message: "Supplier registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};