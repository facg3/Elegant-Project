const express = require('express');

const router = express.Router();

const login = require('./login');
const aboutus = require('./aboutus');
const contactus = require('./contactus');

router.get('/login', login.get);
router.post('/loginuser', login.post);
router.get('/aboutus', aboutus.get);
router.get('/contactus', contactus.get);

module.exports = router;
