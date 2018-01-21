const express = require('express');

const router = express.Router();
const signup = require('./signup');
const login = require('./login');
const men = require('./men');

router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.post('/loginuser', login.post);
router.get('/login', login.get);
router.get('/men-fashion', men.get);

module.exports = router;
