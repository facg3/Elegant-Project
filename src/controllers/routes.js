const express = require('express');

const router = express.Router();
const signup = require('./signup');
const login = require('./login');
const home = require('./home');
const men = require('./men');
const women = require('./women');
const menOutfits = require('./menOutfits');
const womenOutfits = require('./womenOutfits');

router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.post('/loginuser', login.post);
router.get('/login', login.get);
router.get('/',home.get)

router.get('/men-fashion', men.get);
router.get('/women-fashion', women.get);

router.get('/women-outfits', womenOutfits.get);
router.get('/men-outfits', menOutfits.get);


module.exports = router;
