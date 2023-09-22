const { response, catchedAsync } = require("../utils/");
const { creationsService } = require("../services");

const getCreations = async (req, res) => {
  const info = await creationsService.getCreations();
  response(res, 200, info);
};

const newCreation = async (req, res) => {
  const data = req.body;
  await creationsService.postCreation(data);
  response(res, 200, "Nuevo modelo creado");
};

module.exports = {
  getCreations: catchedAsync(getCreations),
  newCreation: catchedAsync(newCreation),
};
