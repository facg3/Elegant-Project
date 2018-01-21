const express = require('express');

const router = express.Router();

const login = require('./login');
const blogArtical = require('./blogArtical');
const blogs = require('./blogs');

router.get('/login', login.get);
router.post('/loginuser', login.post);
router.get('/blogArtical', blogArtical.get);
router.get('/blogs', blogs.get);
module.exports = router;
