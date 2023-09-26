const { response, catchedAsync } = require("../utils/");
const { creationsService } = require("../services");

const getCreations = async (req, res) => {
  const info = await creationsService.getCreations();
  response(res, 200, info);
};

const modifyCreations = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await creationsService.changeCreations(id, data);
  const product = await creationsService.getCreationsById(id);
  response(res, 200, product);
};

const newCreation = async (req, res) => {
  const data = req.body;
  await creationsService.postCreation(data);
  response(res, 200, "Nuevo modelo creado");
};

const deleteCreation = async (req, res) => {
  const { id } = req.params;
  await creationsService.deleteCreation(id);
  response(res, 200, "Modelo eliminado");
};

module.exports = {
  getCreations: catchedAsync(getCreations),
  newCreation: catchedAsync(newCreation),
  modifyCreations: catchedAsync(modifyCreations),
  deleteCreation: catchedAsync(deleteCreation),
};
