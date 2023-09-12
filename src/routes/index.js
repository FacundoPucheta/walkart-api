const { creationsController } = require("../controllers");


const router = require("express").Router();

router.get("/creations", creationsController.getCreations); 

module.exports = router;