const { isValid } = require("date-fns");

const validateDate = (date) => {
  return isValid(new Date(date));
};

module.exports = { validateDate };
