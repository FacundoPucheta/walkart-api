//Manejador de respuestas success.
const response = (res, status, data) => {
  res.status(status).json({
    error: false,
    data,
  });
};

module.exports = response;
