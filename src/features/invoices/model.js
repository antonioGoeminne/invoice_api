const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InvoiceSchema = Schema({
  created_at: Date,
  updated_at: Date,
  client_name: String,
  client_email: String,
  total_amount: Number,
  due_date: Date,
  status: String,
});

module.exports = mongoose.model("Invoice", InvoiceSchema);
