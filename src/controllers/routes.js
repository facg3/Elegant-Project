const express = require('express');

const router = express.Router();
const signup = require('./signup');
const login = require('./login');
const blogArtical = require('./blogArtical');
const blogs = require('./blogs');
const men = require('./men');
const women = require('./women');
const menOutfits = require('./menOutfits');
const womenOutfits = require('./womenOutfits');


router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.post('/loginuser', login.post);
router.get('/blogArtical', blogArtical.get);
router.get('/blogs', blogs.get);

router.get('/login', login.get);

router.get('/men-fashion', men.get);
router.get('/women-fashion', women.get);

router.get('/women-outfits', womenOutfits.get);
router.get('/men-outfits', menOutfits.get);

module.exports = router;
