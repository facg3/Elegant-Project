const express = require('express');

const router = express.Router();

const login = require('./login');

router.get('/login', login.get);
router.post('/loginuser', login.post);

module.exports = router;
