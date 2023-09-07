// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!
// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!
// ESTO SOLAMENTE ES UNA RESPUESTA DE EJEMPLO!!

const { welcomeService } = require("../services/");

const sayHello = async (req, res) => {
  try {
    const saludo = await welcomeService();
    res.status(200).json(saludo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  sayHello,
};
