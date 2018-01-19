const express = require('express');

const router = express.Router();

const login = require('./login');
const men = require('./men');

router.get('/login', login.get);
router.post('/loginuser', login.post);
router.get('/men-fashion', men.get);

module.exports = router;
