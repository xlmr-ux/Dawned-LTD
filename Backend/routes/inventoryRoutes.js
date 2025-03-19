const express = require("express");
const { updateInventory, getInventory } = require("../controllers/inventoryController");

const router = express.Router();

router.post("/update", updateInventory);
router.get("/", getInventory);

module.exports = router;