const {Router} = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const router = Router();

//Personaje por ID
router.get("/rickandmorty/onsearch/:id", getCharById);

//Detalles del personaje por ID
router.get("/rickandmorty/detail/:id", getCharDetail);

module.exports = router;
