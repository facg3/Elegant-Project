const express = require('express');

const router = express.Router();
const signup = require('./signup');
const login = require('./login');
const men = require('./men');
const women = require('./women');
const menOutfits = require('./menOutfits');


router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.post('/loginuser', login.post);

router.get('/men-fashion', men.get);
router.get('/women-fashion', women.get);
router.get('/men-outfits', menOutfits.get);

router.get('/login', login.get);


module.exports = router;
