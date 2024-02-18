const { default: mongoose } = require("mongoose");
const URL_DB =
  "mongodb+srv://antonionicolas3003:ZMCy0a3oCCUp8gFW@cluster0.vp7ebx1.mongodb.net/?retryWrites=true&w=majority";
const app = require("./app");
const { createServer } = require("http");

const servr = createServer(app);

const server = servr.listen(8000, async () => {
  try {
    mongoose
      .connect(URL_DB)
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
