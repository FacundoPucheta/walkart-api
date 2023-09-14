const creations = require("../../models/creationsModel");
const { ClientError } = require("../../utils/errors");

//data hardcoded
const data = [{
  name: "Shadow",
  image: "https://i8.amplience.net/i/jpl/jd-333404-a-142a4d23278b7f965af65f04f5b71cbc",
  description: "Las Zapatillas Elegantes son la última tendencia en el mundo de la moda. Diseñadas para aquellos que buscan un estilo único y moderno.",
  category: "Running",
},
{
  name: "ZapatoX",
  image: "https://i8.amplience.net/i/jpl/jd-384756-a-2e905306fd9911bae4fac5e70e97034b",
  description: "Un zapato elegante para ocasiones especiales.",
  category: "Formal",
},
{
  name: "AirMax",
  image: "https://i8.amplience.net/i/jpl/jd-334384-a-f52db0f270800d1f572a833ce7a69db7",
  description: "Las AirMax te brindan comodidad y estilo en cada paso.",
  category: "Running",
},
{
  name: "UrbanFlex",
  image: "https://i8.amplience.net/i/jpl/jd-456302-a-373ae0f8f8ea5cfbda6cedcc4522c0d1",
  description: "Las UrbanFlex son perfectas para la vida urbana y activa.",
  category: "Casual",
},
{
  name: "Elegance",
  image: "https://i8.amplience.net/i/jpl/jd-148787-a-06d1f43f232cc3100bc6909c050f86c1",
  description: "Elegancia y estilo se fusionan en estas zapatillas.",
  category: "Formal",
},
{
  name: "ActiveStep",
  image: "https://i8.amplience.net/i/jpl/jd-474052-a-5678ebe878aa36d624ee5259549c3ee4",
  description: "ActiveStep te acompaña en tus aventuras al aire libre.",
  category: "Outdoor",
},
{
  name: "ColorBurst",
  image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  description: "ColorBurst añade un toque vibrante a tu estilo diario.",
  category: "Casual",
},
{
  name: "SkyRide",
  image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  description: "SkyRide: la comodidad elevada a un nuevo nivel.",
  category: "Running",
},
{
  name: "WaveGlide",
  image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  description: "WaveGlide: zapatillas que te hacen sentir en las nubes.",
  category: "Running",
},
{
  name: "TrekPro",
  image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  description: "TrekPro: listas para conquistar cualquier sendero.",
  category: "Outdoor",
},];

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
