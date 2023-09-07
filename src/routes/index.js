const { welcomeController } = require("../controllers");

const router = require("express").Router();

router.get("/", welcomeController.sayHello); // RUTA DE EJEMPLO !!!!!!!

module.exports = router;
