const express = require('express');

const router = express.Router();
const login = require('./login');

const details = require('./details');
const signup = require('./signup');

const aboutus = require('./aboutus');
const contactus = require('./contactus');
const logout = require('./logout');
const home = require('./home');
const men = require('./men');
const women = require('./women');
const menOutfits = require('./menOutfits');
const womenOutfits = require('./womenOutfits');
const saved = require('./savedFashion');
const unsaved = require('./unsaved');
const blogArtical = require('./blogArtical');
const shop = require('./shop');
const blogs = require('./blogs');
const error = require('./error');
const send = require('./send');

router.get('/signup', signup.get);
router.post('/signupuser', signup.post);
router.post('/loginuser', login.post);
router.get('/aboutus', aboutus.get);
router.get('/contactus', contactus.get);
router.get('/blogs/article/:id', blogArtical.get);
router.post('/blogs/article/:id', blogArtical.post);
router.get('/blogs', blogs.get);
router.get('/logout', logout.get);
router.get('/details/:id', details.get);
router.get('/login', login.get);
router.get('/saved-fashion', saved.get);
router.post('/saved', saved.post);
router.get('/', home.get);
router.get('/men-fashion', men.get);
router.get('/shop', shop.get);
router.get('/women-fashion', women.get);
router.get('/women-outfits', womenOutfits.get);
router.get('/men-outfits', menOutfits.get);
router.post('/unsaved', unsaved.post);
router.post('/send', send.post);
router.use(error.client);
router.use(error.server);

module.exports = router;
