const { getAll, post, update, destroy } = require("../../api/crud");

const InvoiceSchema = require("./model");

const getInvoices = async (req, res, next) => {
  try {
    const invoices = await getAll({}, InvoiceSchema);
    res.status(200).json(invoices);
  } catch (error) {
    next(error);
  }
};

const getInvoice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const invoice = await getAll({ _id: id }, InvoiceSchema);
    res.status(200).json(invoice?.[0]);
  } catch (error) {
    next(error);
  }
};

const createInvoice = async (req, res, next) => {
  try {
    const {
      client_name,
      client_email,
      due_date,
      total,
      status = "draft",
    } = req.body;

    const payload = {
      client_email,
      client_name,
      due_date,
      total_amount: total,
      status,
      created_date: new Date(),
    };

    await post({ ...payload }, InvoiceSchema);
    res.status(200).json("Invoice added");
  } catch (error) {
    next(error);
  }
};

const updateInvoice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      client_name,
      client_email,
      due_date,
      total,
      status = "draft",
    } = req.body;

    const payload = {
      client_email,
      client_name,
      due_date,
      total_amount: total,
      status,
      created_date: new Date(),
    };

    await update({ ...payload }, { _id: id }, InvoiceSchema);
    res.status(200).json("Invoice updated");
  } catch (error) {
    next(error);
  }
};

const deleteInvoice = async (req, res, next) => {
  try {
    const { id } = req.params;

    await destroy({ _id: id }, InvoiceSchema);
    res.status(200).json("Invoice updated");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoice,
};
