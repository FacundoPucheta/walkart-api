// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!
// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!
// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!

const {response} = require("../utils/");
const { creationsService } = require("../services");
const { catchedAsync } = require("../utils");

const getCreations = async (req, res) => {
  const saludo = await creationsService.creations();
  response(res, 200, saludo);
};

module.exports = {
  getCreations: catchedAsync(getCreations),
};