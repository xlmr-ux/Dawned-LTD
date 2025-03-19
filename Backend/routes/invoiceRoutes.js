const express = require("express");
const { generateInvoice, getInvoices } = require("../controllers/invoiceController");

const router = express.Router();

router.post("/generate", generateInvoice);
router.get("/", getInvoices);

module.exports = router;