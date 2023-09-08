const { creationsController } = require("../controllers");


const router = require("express").Router();

router.get("/", creationsController.getCreations); 

module.exports = router;
