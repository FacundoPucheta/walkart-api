// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!
// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!
// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!

const { response } = require("../utils/");
const { creationsService } = require("../services");
const { catchedAsync } = require("../utils");

const getCreations = async (req, res) => {
  const info = await creationsService.ownCreations();
  response(res, 200, info);
};

module.exports = {
  getCreations: catchedAsync(getCreations),
};
