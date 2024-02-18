const express = require("express");
const {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = require("./controller");
const { invoiceValidation } = require("./validation");
const router = express.Router();

const base = "/invoices";

// GET all invoices
router.get(base, getInvoices);

// POST invoice
router.post(base, invoiceValidation, createInvoice);

// PUT invoice
router.put(base + "/:id", updateInvoice);

// DELETE INVOICE
router.delete(base + "/:id", deleteInvoice);

module.exports = router;
