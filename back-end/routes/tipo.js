const controller = require('../controllers/tipo');
const express = require('express');
const router = express.Router();

router.put('/', controller().novo);
router.get('/', controller().listar);

module.exports = router;