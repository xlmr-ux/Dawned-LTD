const Inventory = require("../models/Inventory");

// Update inventory
exports.updateInventory = async (req, res) => {
  const { productId, totalReceived, totalAvailable } = req.body;
  try {
    const inventory = await Inventory.findOneAndUpdate(
      { productId },
      { totalReceived, totalAvailable },
      { new: true, upsert: true }
    );
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get inventory
exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.find().populate("productId");
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};