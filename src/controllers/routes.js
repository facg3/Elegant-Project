const express = require('express');

const router = express.Router();

const login = require('./login');
const men = require('./men');
const women = require('./women');
const menOutfits = require('./menOutfits');


router.get('/login', login.get);
router.post('/loginuser', login.post);
router.get('/men-fashion', men.get);
router.get('/women-fashion', women.get);
router.get('/men-outfits', menOutfits.get);


module.exports = router;
