const express = require('express');

const router = express.Router();

const login = require('./login');
const home = require('./home');

router.get('/login', login.get);
router.post('/loginuser', login.post);
router.get('/',home.get)
module.exports = router;
