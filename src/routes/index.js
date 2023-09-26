const { creationsController } = require("../controllers");
const router = require("express").Router();

//creations | modelos
router.get("/creations", creationsController.getCreations);
router.post("/creations", creationsController.newCreation);
router.put("/creations/:id", creationsController.modifyCreations);
router.delete("/creations/:id", creationsController.deleteCreation);

//orders | pedidos
// router.get("/orders", );
// router.post("/orders", );
// router.put("/orders", );
// router.delete("/orders", );

module.exports = router;
