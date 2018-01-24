const express = require('express');

const router = express.Router();
const login = require('./login');
const details = require('./details');
const signup = require('./signup');
const aboutus = require('./aboutus');
const contactus = require('./contactus');
const blogArtical = require('./blogArtical');
const blogs = require('./blogs');
const logout = require('./logout');
const home = require('./home');
const men = require('./men');
const women = require('./women');
const menOutfits = require('./menOutfits');
const womenOutfits = require('./womenOutfits');
const saved = require('./savedFashion');
const unsaved = require('./unsaved');

router.post('/signup', signup.post);
router.post('/loginuser', login.post);
router.get('/aboutus', aboutus.get);
router.get('/contactus', contactus.get);
router.get('/blogs/article/:id', blogArtical.get);
router.get('/blogArtical', blogArtical.get);
router.get('/blogs', blogs.get);
router.get('/logout', logout.get);
router.get('/details/:id', details.get);
router.get('/login', login.get);
router.get('/saved-fashion', saved.get);
router.post('/saved', saved.post);

router.get('/', home.get);

router.get('/men-fashion', men.get);
router.get('/women-fashion', women.get);
router.get('/women-outfits', womenOutfits.get);
router.get('/men-outfits', menOutfits.get);
router.post('/unsaved', unsaved.post);

module.exports = router;
