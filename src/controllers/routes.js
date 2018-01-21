const express = require('express');

const router = express.Router();

const login = require('./login');
const logout = require('./logout');

router.get('/login', login.get);
router.post('/loginuser', login.post);
router.get('/logout', logout.get);

module.exports = router;
