const express = require('express');
const router = express.Router();
const login = require('./login');
const details = require('./details');

router.get('/login', login.get);
router.post('/loginuser', login.post);
router.get('/details', details.get)

module.exports = router;
