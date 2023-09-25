const express = require("express");
const morgan = require("morgan");
const router = require("./routes");
const { resError } = require("./utils");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

//modularizar el cors (fijarte fisio)
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(router);

//al tener 4 parametros, express identifica que es el manejador de errores
server.use((err, req, res, next) => {
  const { status, message } = err;
  resError(res, status, message);
});

module.exports = server;
