const { response } = require("../utils/");
const { catchedAsync } = require("../utils");
const { creationsService } = require("../services");

const getCreations = async (req, res) => {
  const info = await creationsService.getCreations();
  response(res, 200, info);
};

// const newOrder = async (req, res) => {
//   const orderInfo = req.body;
//   const order =
//   response();
// };

module.exports = {
  getCreations: catchedAsync(getCreations),
};
