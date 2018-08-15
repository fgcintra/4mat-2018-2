const express = require('express');
const router = express.Router();
const controller = require('../controllers/teste');

router.get('/', controller.ola_mundo);

// Exportando o roteador para ser usado em
// outras partes da aplicação
module.exports = router;