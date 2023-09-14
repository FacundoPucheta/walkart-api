const { creationsController } = require("../controllers");
const router = require("express").Router();

//creations | modelos
router.get("/creations", creationsController.getCreations);
// router.post("/creations", );
// router.put("/creations", );
// router.delete("/creations", );

//orders | pedidos
// router.get("/orders", );
// router.post("/orders", );
// router.put("/orders", );
// router.delete("/orders", );

module.exports = router;
