const controller = require('../controllers/item');
const express = require('express');
const router = express.Router();

router.put('/', controller().novo);

module.exports = router;