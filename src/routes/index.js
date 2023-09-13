const { getCreations } = require("../controllers");
const router = require("express").Router();

router.get("/creations", getCreations);
// router.post("/newOrder", validateOrder, controllerPostOrder);

module.exports = router;
