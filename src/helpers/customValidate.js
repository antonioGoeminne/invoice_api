const { isValid } = require("date-fns");

const validateDate = (date) => {
  return isValid(date);
};

module.exports = { validateDate };
