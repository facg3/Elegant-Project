const express = require('express');

const router = express.Router();

const signup = require('./signup');
const login = require('./login');

router.get('/login', login.get);
router.post('/loginuser', login.post);
router.get('/signup', signup.get);
router.post('/signup', signup.post);


module.exports = router;
