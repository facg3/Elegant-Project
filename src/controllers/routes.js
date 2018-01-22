const express = require('express');

const router = express.Router();
const signup = require('./signup');
const login = require('./login');
const men = require('./men');
const women = require('./women');
const menOutfits = require('./menOutfits');
const womenOutfits = require('./womenOutfits');
const saved = require('./savedFashion');
const unsaved = require('./unsaved');

router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.post('/loginuser', login.post);
router.get('/login', login.get);

router.get('/saved-fashion', saved.get);
router.post('/saved', saved.post);
router.get('/men-fashion', men.get);
router.get('/women-fashion', women.get);

router.get('/women-outfits', womenOutfits.get);
router.get('/men-outfits', menOutfits.get);
router.post('/unsaved', unsaved.post);

module.exports = router;
