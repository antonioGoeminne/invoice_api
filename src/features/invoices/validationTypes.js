/* eslint-disable camelcase */
const { check } = require("express-validator");
const { validateDate } = require("../../helpers/customValidate");

const client_name = check("client_name")
  .exists()
  .withMessage("client_name is required")
  .notEmpty()
  .withMessage("client_name musn´t be empty")
  .isString()
  .withMessage("client_name must be STRING")
  .isLength({ max: 100 })
  .withMessage("client_name max length is of 100 characters");

const client_email = check("client_email")
  .exists()
  .withMessage("client_email is required")
  .notEmpty()
  .withMessage("client_name musn't be empty")
  .isString()
  .withMessage("client_email must be STRING")
  .isEmail()
  .withMessage("client_email must be valid")
  .isLength({ max: 256 })
  .withMessage("client_email max length is of 256 characters");

const total = check("total")
  .exists()
  .withMessage("total is required")
  .notEmpty()
  .withMessage("total musn't be empty")
  .isNumeric()
  .withMessage("total must be a number");

const due_date = check("due_date")
  .exists()
  .withMessage("due_date is required")
  .notEmpty()
  .withMessage("total musn't be empty")
  .custom((date) => validateDate(date));

module.exports = { client_name, client_email, total, due_date };
