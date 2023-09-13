// SERVICIO DE EJEMPLO!!!!!!!!
// SERVICIO DE EJEMPLO!!!!!!!!
// SERVICIO DE EJEMPLO!!!!!!!!
const creations = require("../models/creationModels");
const { ClientError } = require("../utils/errors");

const data = [
  {
    name: "Personalizada",
    image:
      "https://i8.amplience.net/i/jpl/jd-333404-a-142a4d23278b7f965af65f04f5b71cbc",
    description:
      "Las Zapatillas Elegantes son la última tendencia en el mundo de la moda. Diseñadas para aquellos que buscan un estilo único y moderno.",
    category: "Running",
    order: 1,
    client: "Ivan Soria",
    price: 129.99,
    mail: "ivan.soria@example.com",
    phone: "+1 (123) 456-7890",
    state: "Pendiente",
  },
  {
    name: "ZapatoX",
    image:
      "https://i8.amplience.net/i/jpl/jd-384756-a-2e905306fd9911bae4fac5e70e97034b",
    description: "Un zapato elegante para ocasiones especiales.",
    category: "Formal",
    order: 2,
    client: "Maria Rodriguez",
    price: 89.99,
    mail: "maria.rodriguez@example.com",
    phone: "+1 (234) 567-8901",
    state: "Pendiente",
  },
  {
    name: "AirMax",
    image:
      "https://i8.amplience.net/i/jpl/jd-334384-a-f52db0f270800d1f572a833ce7a69db7",
    description: "Las AirMax te brindan comodidad y estilo en cada paso.",
    category: "Running",
    order: 3,
    client: "Carlos Gonzalez",
    price: 109.99,
    mail: "carlos.gonzalez@example.com",
    phone: "+1 (345) 678-9012",
    state: "Pendiente",
  },
  {
    name: "Personalizada",
    image:
      "https://i8.amplience.net/i/jpl/jd-456302-a-373ae0f8f8ea5cfbda6cedcc4522c0d1",
    description: "Las UrbanFlex son perfectas para la vida urbana y activa.",
    category: "Casual",
    order: 4,
    client: "Ana Lopez",
    price: 79.99,
    mail: "ana.lopez@example.com",
    phone: "+1 (456) 789-0123",
    state: "Pendiente",
  },
  {
    name: "Elegance",
    image:
      "https://i8.amplience.net/i/jpl/jd-148787-a-06d1f43f232cc3100bc6909c050f86c1",
    description: "Elegancia y estilo se fusionan en estas zapatillas.",
    category: "Formal",
    order: 5,
    client: "Pedro Martinez",
    price: 99.99,
    mail: "pedro.martinez@example.com",
    phone: "+1 (567) 890-1234",
    state: "Pendiente",
  },
  {
    name: "ActiveStep",
    image:
      "https://i8.amplience.net/i/jpl/jd-474052-a-5678ebe878aa36d624ee5259549c3ee4",
    description: "ActiveStep te acompaña en tus aventuras al aire libre.",
    category: "Outdoor",
    order: 6,
    client: "Laura Smith",
    price: 149.99,
    mail: "laura.smith@example.com",
    phone: "+1 (678) 901-2345",
    state: "Pendiente",
  },
  {
    name: "Personalizada",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    description: "ColorBurst añade un toque vibrante a tu estilo diario.",
    category: "Casual",
    order: 7,
    client: "John Johnson",
    price: 69.99,
    mail: "john.johnson@example.com",
    phone: "+1 (789) 012-3456",
    state: "Pendiente",
  },
  {
    name: "SkyRide",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    description: "SkyRide: la comodidad elevada a un nuevo nivel.",
    category: "Running",
    order: 8,
    client: "Sara Davis",
    price: 119.99,
    mail: "sara.davis@example.com",
    phone: "+1 (890) 123-4567",
    state: "Pendiente",
  },
  {
    name: "WaveGlide",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    description: "WaveGlide: zapatillas que te hacen sentir en las nubes.",
    category: "Running",
    order: 9,
    client: "Daniel Brown",
    price: 139.99,
    mail: "daniel.brown@example.com",
    phone: "+1 (901) 234-5678",
    state: "Pendiente",
  },
  {
    name: "TrekPro",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    description: "TrekPro: listas para conquistar cualquier sendero.",
    category: "Outdoor",
    order: 10,
    client: "Sophia Wilson",
    price: 159.99,
    mail: "sophia.wilson@example.com",
    phone: "+1 (012) 345-6789",
    state: "Pendiente",
  },
];

const ownCreations = async () => {
  if (data.length <= 0)
    throw new ClientError(
      "No se encontro información respecto a las creaciones.",
      404
    );
  const nuevaZapa = new creations({
    name: "TrekPro",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    description: "TrekPro: listas para conquistar cualquier sendero.",
    category: "Outdoor",
    order: 10,
    client: "Sophia Wilson",
    price: 159.99,
    mail: "sophia.wilson@example.com",
    phone: "+1 (012) 345-6789",
  });
  await nuevaZapa.save();
  return data;
};

module.exports = {
  ownCreations,
};
