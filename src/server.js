const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");
const { resError } = require("./utils");

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(router);

//al tener 4 parametros, express identifica que es el manejador de errores
server.use((err, req, res, next) => {
  // const { statusCode, message } = err;
  resError(res, err.statusCode, err.message);
});

module.exports = server;
