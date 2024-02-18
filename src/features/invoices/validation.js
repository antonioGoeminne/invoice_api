const { validateFields } = require("../../middlewares/validateFields");
const {
  client_name,
  client_email,
  total,
  due_date,
} = require("./validationTypes");

const invoiceValidation = [
  client_name,
  client_email,
  total,
  due_date,
  (req, res, next) => {
    return validateFields(req, res, next);
  },
];

module.exports = {
  invoiceValidation,
};
