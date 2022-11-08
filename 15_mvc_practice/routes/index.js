const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

console.log(controller);
// 기본 경로: 기본 경로: localhost:PORT

// GET / => localhost:PORT/
router.get('/', controller.main);

// POST /practice30 => localhost:PORT/practice30
router.post('/practice30', controller.practice30);

module.exports = router;