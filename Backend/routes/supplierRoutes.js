const express = require("express");
const { registerSupplier, getSuppliers } = require("../controllers/supplierController");

const router = express.Router();

router.post("/register", registerSupplier);
router.get("/", getSuppliers);

module.exports = router;