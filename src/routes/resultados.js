var express = require("express");
var router = express.Router();
var resultadoController = require("../controllers/resultadosController");

router.post("/salvar", resultadoController.salvar);
router.get("/listar/:idUsuario", resultadoController.listar);
router.get("/ultimo/:idUsuario", resultadoController.ultimo);

module.exports = router;
