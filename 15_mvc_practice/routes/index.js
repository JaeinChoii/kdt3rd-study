const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

console.log(controller);
// 기본 경로: 기본 경로: localhost:PORT

// GET / => localhost:PORT/
app.get('/', controller.main);

// POST /practice30 => localhost:PORT/practice30
app.post('/practice30', contorller.practice30);

module.exports = router;