const whitelist = ["http://localhost:8000", "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      if (process.env.NODE_ENV === "dev") {
        callback(new Error(process.env.PRIV_MSG), false); // Muestra mensaje de recurso privado con descripción.
      } else {
        callback(process.env.PRIV_MSG, false); // Muestra mensaje de recurso privado sin descripción.
      }
    }
  },
};

module.exports = corsOptions;
