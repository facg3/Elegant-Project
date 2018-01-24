const express = require('express');
const router = express.Router();
const signup = require('./signup');
const login = require('./login');
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
const error = require('./error')


router.get('/signup', signup.get);
router.post('/signup', signup.post);
router.post('/loginuser', login.post);
router.get('/aboutus', aboutus.get);
router.get('/contactus', contactus.get);
router.get('/blogs/article/:id', blogArtical.get);
router.post('/blogs/article/:id', blogArtical.post);
router.get('/blogs', blogs.get);
router.get('/logout', logout.get);
router.get('/login', login.get);
router.get('/',home.get)
router.get('/men-fashion', men.get);
router.get('/women-fashion', women.get);
router.get('/women-outfits', womenOutfits.get);
router.get('/men-outfits', menOutfits.get);
router.use(error.client);
router.use(error.server);



module.exports = router;
