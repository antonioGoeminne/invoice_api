const { default: mongoose } = require("mongoose");
const app = require("./app");
const { createServer } = require("http");
const config = require("./config");

const servr = createServer(app);

const server = servr.listen(config.PORT, async () => {
  try {
    mongoose
      .connect(config.URL_DB)
      .then(() => {
        // Cuando se realiza la conexión, lanzamos este mensaje por consola
        console.log(
          "La conexión a la base de datos se ha realizado correctamente"
        );

        // CREAR EL SERVIDOR WEB CON NODEJS
      })
      // Si no se conecta correctamente escupimos el error
      .catch((err) => console.log(err));
  } catch (error) {}
});
module.exports = server;
