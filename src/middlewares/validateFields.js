const { response } = require("express");
const { validationResult } = require("express-validator");
const { BadRequest } = require("../helpers/errors");

const validateFields = (req, res = response, next) => {
  const errores = validationResult(req);
  let err = "";
  for (const error of errores.array()) {
    err = error.msg;
  }

  if (!errores.isEmpty()) {
    throw new BadRequest(err);
  }

  next();
};

module.exports = { validateFields };
