const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/wikiController');

router.get('/monstruo', ctrl.getMonstruos);
router.get('/aliado', ctrl.getAliados);
router.get('/armas', ctrl.getArmas);
router.get('/armas-colaboracion', ctrl.getArmasColaboracion);
router.get('/recursos', ctrl.getRecursos);
router.get('/atuendos', ctrl.getAtuendos);
router.get('/atuendos-colaborativos', ctrl.getAtuendosColaborativos);
router.get('/jefes', ctrl.getJefes);

module.exports = router;