const creations = require("../models/creationsModel");
const { ClientError } = require("../utils/errors");

const data = [];

const getCreations = async () => {
  if (data.length <= 0) throw new ClientError("No se encontro información respecto a las creaciones.",404);
  
  return data;
};

const postCreation = async (newSample) => {
  const newCreation = new creations({
    name: "TrekPro",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    description: "TrekPro: listas para conquistar cualquier sendero.",
    category: "Outdoor",
    price: 159.99,
  });
  await newCreation.save();
};

module.exports = {
  postCreation,
  getCreations,
};
