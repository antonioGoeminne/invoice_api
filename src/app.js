require("dotenv").config({ path: ".env" });

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const handleErrors = require("./helpers/handleErrors");
const corsOptions = require("./whitelistcors");
const app = express();

// MIDDLEWARES /**********/

app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES /**********/

// CHATS

app.use("/api", require("./features/invoices/routes"));

// Error handler
app.use(handleErrors);

module.exports = app;
