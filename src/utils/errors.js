//La idea es crear una clase para cada error particular, para un mejor manejo del mismo.
//Ver para mas info respecto a c/error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

class ClientError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.statusCode = status;
  }
}

module.exports = {
  ClientError,
};
